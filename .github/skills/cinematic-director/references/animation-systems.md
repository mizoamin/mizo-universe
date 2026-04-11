# Animation Systems

Rules for choosing and using each animation layer in Mizo Universe.

## Layer 1 — useFrame (3D Render Loop)

**When:** Animating anything inside the React Three Fiber `<Canvas>` — camera position, material properties, mesh transforms, particle positions, starfield speed, post-processing parameters.

**Library:** `@react-three/fiber` `useFrame` + `THREE.MathUtils.lerp`

### Patterns

**Smooth interpolation (most common):**
```tsx
// Pre-allocate outside useFrame
const _target = useRef(new THREE.Vector3(0, 2, 18));

useFrame((_, delta) => {
  // Frame-rate independent smooth factor
  const t = 1 - Math.pow(0.0001, delta);
  mesh.current.position.lerp(_target.current, t);
});
```

**Spring-like damping:**
```tsx
useFrame((_, delta) => {
  // Critically damped spring — fast approach, smooth settle
  const stiffness = 260;
  const damping = 18;
  velocity.current += (target - current.current) * stiffness * delta;
  velocity.current *= Math.exp(-damping * delta);
  current.current += velocity.current * delta;
});
```

**Oscillation (hover, breathing, parallax):**
```tsx
useFrame((state, delta) => {
  const t = state.clock.getElapsedTime();
  // Gentle sine bob — amplitude 0.8, frequency 0.5 Hz
  mesh.current.position.y += Math.cos(t * 0.5) * 0.8 * delta;
});
```

### Anti-patterns

| Don't | Why | Do Instead |
|-------|-----|------------|
| `new THREE.Vector3()` inside useFrame | GC pressure → frame drops | `useRef(new THREE.Vector3())` |
| `rotation.y += 0.01` | Frame-rate dependent | `rotation.y += speed * delta` |
| `setState()` inside useFrame | Triggers React re-render | Mutate refs directly |
| Framer Motion inside Canvas | Wrong animation layer | useFrame + lerp |

### Smooth Factor Reference

| Feel | `Math.pow` base | Approximate behavior |
|------|-----------------|---------------------|
| Snappy | `0.001` | Arrives in ~0.3s |
| Normal | `0.0001` | Arrives in ~0.5s |
| Cinematic slow | `0.00001` | Arrives in ~1s |
| Ultra smooth | `0.000001` | Arrives in ~2s |

Formula: `const t = 1 - Math.pow(base, delta)`

---

## Layer 2 — Framer Motion (HTML Overlays)

**When:** Animating HTML elements layered over the 3D canvas — panels, overlays, text reveals, page transitions, UI components.

**Library:** `framer-motion` v12 (`motion`, `AnimatePresence`)

### Patterns

**Panel enter/exit (standard):**
```tsx
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

**Staggered children:**
```tsx
<motion.div
  variants={{
    show: { transition: { staggerChildren: 0.08 } },
    hide: {},
  }}
  initial="hide"
  animate="show"
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        show: { opacity: 1, y: 0 },
        hide: { opacity: 0, y: 20 },
      }}
    />
  ))}
</motion.div>
```

**Spring (physical feel):**
```tsx
transition={{ type: "spring", stiffness: 260, damping: 20 }}
```

### Easing Curves

| Name | Cubic Bezier | Feel |
|------|-------------|------|
| Apple ease | `[0.25, 0.1, 0.25, 1.0]` | Premium, visionOS-like |
| Smooth out | `[0.0, 0.0, 0.2, 1.0]` | Google Material deceleration |
| Cinematic | `[0.16, 1, 0.3, 1]` | Dramatic reveal |
| Settle | `[0.33, 1, 0.68, 1]` | Gentle arrival |

### Anti-patterns

| Don't | Why | Do Instead |
|-------|-----|------------|
| `motion.div` inside R3F Canvas | Framer can't animate 3D meshes | useFrame + lerp |
| Animate `left`/`top` | Triggers layout reflow | Animate `x`/`y` (transform) |
| Missing `AnimatePresence` | Exit animations won't play | Always wrap conditional renders |
| `duration: 0` | Defeats the purpose | Minimum 150ms for perceptible motion |

---

## Layer 3 — CSS Transitions (Simple State Changes)

**When:** Simple, binary state changes where Framer Motion is overkill — opacity fades, color shifts, scale pulses.

**Library:** Tailwind CSS utility classes

### Patterns

**Opacity fade:**
```tsx
<div
  className="transition-opacity duration-600 ease-out"
  style={{ opacity: isVisible ? 1 : 0 }}
/>
```

**Tailwind animate-in (used by WarpTransition):**
```tsx
<div className="animate-in fade-in duration-500 fill-mode-forwards" />
```

**Reduced-motion guard (Tailwind):**
```tsx
<div className="motion-safe:animate-in motion-safe:slide-in-from-right duration-500" />
```

### When NOT to use CSS

- Element needs `AnimatePresence` exit animation → use Framer Motion
- Animation depends on physics/spring → use Framer Motion
- Animating inside 3D Canvas → use useFrame

---

## Choosing the Right Layer

```
Is it inside <Canvas>?
  YES → useFrame + THREE.MathUtils.lerp
  NO  →
    Does it need enter + exit animation?
      YES → Framer Motion (AnimatePresence)
      NO  →
        Is it a simple opacity/scale/color change?
          YES → CSS transition
          NO  → Framer Motion
```

## Reduced-Motion Strategy

| Layer | Implementation |
|-------|---------------|
| useFrame | Check `window.matchMedia('(prefers-reduced-motion: reduce)')` — skip oscillation, use instant lerp (`t = 1`) |
| Framer Motion | `transition={{ duration: prefersReduced ? 0.01 : 0.5 }}` |
| CSS | Use `motion-safe:` Tailwind prefix (already used in `PlanetOverlay`) |
| WarpTransition | Already implements: reduced → 400ms dark fade; full → 800ms white flash |
