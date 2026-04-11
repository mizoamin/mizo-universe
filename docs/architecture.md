# Mizo Universe — Architecture Reference

> **Stack:** Next.js 16.1.6 · React 19.2.3 · React Three Fiber 9.5.0 · Three.js 0.183.0 · Zustand 5.0.11 · Framer Motion 12.34.3 · Tailwind CSS v4 · TypeScript 5

---

## System Layers

```
┌─────────────────────────────────────────────┐
│  app/               Entry Layer (routes)    │
├─────────────────────────────────────────────┤
│  components/ui/     HTML Overlays (Framer)  │
│  components/3d/     R3F Scene Graph         │
├─────────────────────────────────────────────┤
│  engine/            State (Zustand)         │
│  config/            Data & Constants        │
│  hooks/             Shared React Hooks      │
│  lib/               Utilities & Resolvers   │
├─────────────────────────────────────────────┤
│  public/            Static Assets           │
│  sanity/            CMS (Blog)              │
└─────────────────────────────────────────────┘
```

---

## Layer Responsibilities

### `app/` — Entry Layer
Routes only. No rendering logic, no business logic. Each planet has a route at `app/{planetName}/page.tsx`. Blog routes at `app/blog/`. API routes at `app/api/`.

### `engine/` — State Management
- **`experienceStore.ts`** — Zustand store controlling the 4-mode state machine: `free → approach → isolation → enter`. Tracks active planet, camera targets, transition flags.
- **`deviceStore.ts`** — Zustand store for device tier detection (mobile/tablet/desktop/ultra/vision-pro). Reads profiles from `deviceProfiles.ts`. Initialized on mount via `initDeviceProfile()`.

### `config/` — Configuration
- **`planetMetadata.ts`** — Single source of truth for all 10 planets: name, route, orbit radius, orbital speed, size, accent color.
- **`planetPageConfig.ts`** — Extended planet page data: bilingual Mizo-Voice descriptions, related blog category slugs, hero textures, blur placeholders.
- **`deviceProfiles.ts`** — Performance tier definitions with DPR, FOV, starCount, textureResolution, shadows, postProcessing, bloom, DOF, instancedMesh caps per tier.
- **`seoConfig.ts`** — SEO metadata per planet (stub).
- **`personaSyndicate.ts`** — AI persona configuration for blog generation.
- **`visionCategories.ts`** — Categories for the Vision planet.

### `components/3d/` — 3D Scene Graph

```
3d/
├── core/
│   ├── UniverseCanvas.tsx      Canvas wrapper, CameraFOVAdapter, DPR, fog, tone mapping
│   ├── CinematicCameraController.tsx   Mode-based camera (parallax/warp/drone), pre-allocated Vector3s
│   ├── SunCore.tsx             Central sun with delta-based rotation + PointLight
│   └── BackgroundStars.tsx     8000 particle starfield (moved to effects/ at runtime)
├── systems/
│   └── TheSolarSystem.tsx      Orchestrates all planet orbits (10/10 wired)
├── effects/
│   ├── BackgroundStars.tsx     8000 particles, useMemo'd BufferGeometry
│   ├── PostProcessing.tsx      Tiered N8AO/Bloom/DOF/CA/Vignette, mode-gated DOF
│   ├── IntroSpaceEffects.tsx   7000 star particles for intro sequence
│   ├── Intro3DAvatar.tsx       3-state texture billboard (idle/hover/active)
│   └── ShootingStars.tsx       Placeholder — skeleton code, geometry pending (Phase 5)
└── planets/
    ├── BasePlanet.tsx          Orbit, isolation descent, enter-mode, children injection
    ├── IdentityPlanet/         Crystal Emerald gemstone + skins.ts
    ├── LegacyPlanet/           Trophy Gold basketball + skins.ts
    ├── VisionPlanet/           Neural Sapphire + skins.ts + DNAHelix.tsx + personaSignatures.ts
    ├── OdysseyPlanet/          8K Earth globe + skins.ts
    ├── VenturesPlanet/         Neon Cyan data grid + skins.ts
    ├── LibraryPlanet/          Obsidian Knowledge + skins.ts
    ├── ContactPlanet/          Neural Satellite + skins.ts
    ├── VoicePlanet/            Sonic-wave planet + registry-driven content
    ├── VideogramPlanet/        Cinematic media planet + transition overlays
    └── ShieldPlanet/           Security/privacy planet module
```

### `components/ui/` — HTML Overlays
All animated with Framer Motion (no GSAP). AnimatePresence for enter/exit.

| Component | Purpose |
|-----------|---------|
| `IntroOverlay.tsx` | Hold-to-enter portal with portrait states |
| `IntroPortal.tsx` | Alternative intro, 5-state machine, parallax |
| `LoadingScreen.tsx` | drei `useProgress` bar with auto-hide |
| `PlanetOverlay.tsx` | Planet info panel, stats, enter button |
| `WarpTransition.tsx` | Cinematic warp (WCAG 2.3.1 compliant) |
| `NavigationHUD.tsx` | Glassmorphism radial HUD — planet radar with accent dots, warp triggers via WarpTransition, current location display, audio toggle slot, ENCRYPTED badges for locked planets (Voice/Videogram/Shield) |
| `SocialNexus.tsx` | Social links with inline SVG icons, fixed sidebar or inline |
| `PlanetCard/index.tsx` | Enter-mode trigger, resolves planet data, WarpTransition |
| `widgets/StatPulse.tsx` | Animated stat grid for Odyssey/Esports (IntersectionObserver) |
| `widgets/ProjectOrbit.tsx` | Horizontal snap-scroll project slider for Ventures/Tech |
| `widgets/ThoughtStream.tsx` | Quote card with Web Share API + clipboard fallback |
| `contact/ContactForm.tsx` | Client component inquiry form (name/email/type/message), simulated submission |

### `components/blog/` & `components/layout/`

| Component | Purpose |
|-----------|---------|
| `BlogContent.tsx` | Portable Text renderer with custom blocks (RichTextSection, MediaFullWidth, InsightCallout, ComparisonTable), lazy loading, zero CLS |
| `StandardLayout.tsx` | Semantic HTML wrapper (`<header>`, `<nav>` with JSON-LD BreadcrumbList, `<main>`, `<footer>`), Server Component |
| `PlanetPageLayout.tsx` | Cinematic planet landing page template (Server Component). Scroll-fade hero, bilingual Mizo-Voice copy, Sanity blog grid, widget slot system. Uses `.planet-page` CSS for scroll override |
| `ScrollFadeHero.tsx` | Zero-re-render scroll parallax client component. Direct DOM manipulation for 60fps. Reduced-motion aware |

### `lib/` — Utilities
- **`resolvers.ts`** — `resolveAssetUrl()`, `filterManifest()`, `filterManifestByTags()`, `filterManifestByYear()`, Google Drive path resolution
- **`constants.ts`** — `ASSET_ROOT`, `MANIFEST_URL`
- **`sanityClient.ts`** — Sanity CMS connection
- **`blogQueries.ts`** — GROQ queries for blog content
- **`rateLimit.ts`** — In-memory sliding window rate limiter (10 req/min default)
- **`seo.ts`** — Blog SEO engine: OpenGraph, JSON-LD BlogPosting, Twitter Cards
- **`personaSouls.ts`** — 15 AI personas with deep identity prompts, `getPersonaSoul()`, `buildMasterSystemPrompt()`
- **`performance.ts`** — FPS monitoring (empty stub)
- **`mathUtils.ts`** — Shared math utilities (empty stub)

### `hooks/` — React Hooks
- **`useCinematicLerp.ts`** — Reusable cinematic interpolation (empty stub)
- **`usePlanetTextures.ts`** — Planet texture loader (empty stub)

---

## Data Flow

```
planetMetadata.ts ──→ TheSolarSystem.tsx ──→ BasePlanet.tsx ──→ [Planet]Planet/index.tsx
                                                    │
                                                    ▼
                                            experienceStore
                                          (free/approach/isolation/enter)
                                                    │
                                                    ▼
                                      CinematicCameraController.tsx
                                          + PostProcessing.tsx
```

### Asset Pipeline
```
CDN (mizoamin.com) ──→ assets_manifest_v8.json (20k+ entries)
                              │
                              ▼
                     resolvers.ts (filterManifestByTags)
                              │
                              ▼
                     Planet components (galleries, carousels, pins)
```

---

## State Machine — Experience Modes

| Mode | FOV | Camera Behavior | Post-Processing |
|------|-----|----------------|-----------------|
| `free` | 40° | OrbitControls, parallax ±15u, position `[0, 80, 160]` | N8AO + Bloom + CA + Vignette |
| `approach` | 65° | Warp zoom, controls disabled | Same as free |
| `isolation` | 28° | Cinematic close-up, drone hover (±1.2px X, ±0.8px Y) | + DepthOfField (bokeh 3.0) |
| `enter` | 28° | Planet descent to `y = -size × 3.5` | + DepthOfField |

---

## Post-Processing Tiers

| Tier | Effects | Trigger |
|------|---------|---------|
| Desktop (DOF Active) | N8AO → Bloom → DOF → ChromaticAberration → Vignette | isolation/enter modes |
| Desktop (DOF Inactive) | N8AO → Bloom → ChromaticAberration → Vignette | free/approach modes |
| Desktop (Low-End) | Bloom (0.5) → Vignette (0.7) | Low-end GPU detection |
| Mobile | Bloom (0.5) → Vignette (0.6) | Mobile device |

---

## Adaptive FOV

| Aspect Ratio | FOV | Category |
|-------------|-----|----------|
| < 0.6 | 55° | Folded foldable cover |
| 0.6–0.8 | 50° | Portrait phone |
| 0.8–1.3 | 45° | Near-square / inner display |
| 1.3–1.9 | 40° | 16:9 desktop (default) |
| 1.9–2.4 | 35° | Ultrawide |
| > 2.4 | 30° | Extreme spatial display |

---

## Performance Rules

| Rule | Implementation |
|------|---------------|
| Zero-allocation useFrame | Pre-allocated Vector3, Matrix4, Quaternion, Color, Object3D |
| InstancedMesh batching | Odyssey: 300 pins, Library: 64 frames — single draw call |
| LOD culling | Per-planet distance checks, scale-to-zero beyond threshold |
| Frustum culling | Library carousel: margin 1.1 per frame |
| 8K anisotropy | `gl.capabilities.getMaxAnisotropy()` on all Odyssey textures |
| VRAM cleanup | `texture.dispose()` on unmount via useEffect |
| Frame-rate independent | All lerps: `1 - Math.pow(0.001, delta)` |
| Lazy loading | Library: 24 images/batch, manifest async with cancellation |
| Spring physics | Per-planet tuned stiffness/damping (no GSAP) |

---

## Canvas Configuration

| Setting | Value |
|---------|-------|
| Shadow Type | `"soft"` |
| DPR | `[1, 2]` clamped |
| Tone Mapping | ACESFilmic (exposure 1.1) |
| Antialiasing | Enabled |
| Fog | `#000000`, near 200, far 1000 |
| Camera | fov 40°, near 0.1, far 20000 |
