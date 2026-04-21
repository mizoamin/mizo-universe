# React Three Fiber Rules

Performance and correctness rules for all 3D code in Mizo Universe. The render loop targets 60 FPS on mobile Safari — every allocation and every re-render matters.

## Render Loop — Zero Allocation

**The #1 rule:** Never create objects inside `useFrame`.

```tsx
// ❌ FORBIDDEN — allocates every frame, triggers GC
useFrame(() => {
  const target = new THREE.Vector3(0, 1, 0)
  const col = new Color('#ff0000')
  mesh.current.position.lerp(target, 0.05)
})

// ✅ CORRECT — pre-allocate outside the loop
const _target = useRef(new THREE.Vector3(0, 1, 0))
const _color = useRef(new Color('#ff0000'))

useFrame(() => {
  mesh.current.position.lerp(_target.current, 0.05)
})
```

**Banned constructors in useFrame:** `new Vector3()`, `new Vector2()`, `new Color()`, `new Matrix4()`, `new Quaternion()`, `new Euler()`, `new Box3()`, arrays, objects.

**Pre-allocation pattern:** Use `useRef` at component top-level. Name scratch variables with `_` prefix (e.g., `_tempVec`, `_lerpTarget`).

## Delta-Independent Animation

Always multiply by `delta` for frame-rate independence:

```tsx
// ❌ Frame-rate dependent — faster on 120 Hz, slower on 30 Hz
useFrame(() => {
  mesh.current.rotation.y += 0.01
})

// ✅ Frame-rate independent
useFrame((_, delta) => {
  mesh.current.rotation.y += 0.5 * delta
})
```

## Re-render Prevention

| Trigger | Fix |
|---------|-----|
| Zustand state read in component body | Use selectors: `useExperience(s => s.mode)` instead of destructuring the whole store |
| Props changing every render | Memoize with `useMemo` / `useCallback`, or move value to a ref |
| Parent re-render cascading to 3D children | Use `React.memo` on heavy 3D components |
| Texture/material changes | Swap via ref mutation, not state |

## Scene Gating

The 3D scene **must not mount** until the intro completes:

```tsx
// In UniverseCanvas
{isIntroComplete && (
  <>
    <CinematicCameraController />
    <TheSolarSystem />
    <PostProcessing />
  </>
)}
```

This prevents GPU contention during the IntroPortal hold animation.

## Post-Processing Budget

| Tier | Effects | Budget |
|------|---------|--------|
| Desktop | Bloom + N8AO + DOF + ChromaticAberration + Vignette | ~1.35 ms @ 1080p |
| Mobile | Bloom + Vignette only | ~0.5 ms |

Never add effects without measuring the per-frame cost. Use `useFrame` timing or Chrome DevTools Performance panel.

## Camera Rules

- **Adaptive FOV:** 30°–55° based on viewport aspect ratio (handled in `CinematicCameraController`)
- **Lerp all transitions** — no instant camera jumps
- **Mode-dependent behavior:**
  - `free`: parallax orbit, gentle autoRotate
  - `approach`: warp-speed FOV narrowing toward target planet
  - `isolation`: cinematic hover around planet, shallow DOF
  - `enter`: final focus lock before page transition

## Geometry & Material Rules

- Reuse geometries across identical meshes (e.g., `<sphereGeometry>` shared via ref)
- Dispose textures and geometries in cleanup (`useEffect` return)
- Use `<meshStandardMaterial>` for physically correct lighting; avoid `<meshBasicMaterial>` unless intentionally unlit
- Keep triangle counts low for planet meshes — detail via textures, not geometry

## Starfield Rules (BackgroundStars, IntroSpaceEffects)

- Use `BufferGeometry` with `Float32Array` position attributes
- Mutate `positions` array directly in `useFrame`, then set `needsUpdate = true`
- Do not recreate the geometry or array per frame
