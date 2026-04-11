# Architecture Rules

Structural patterns, conventions, and constraints for the Mizo Universe platform.

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Next.js (App Router) | 16 |
| 3D Engine | React Three Fiber + Drei | Latest |
| State | Zustand | Latest |
| Styling | Tailwind CSS | 4 (with `@theme` block) |
| CMS | Sanity | v3 |
| Language | TypeScript | Strict mode |

## Routing

### Home Page (`/`)
- Mounts `<UniverseCanvas>` (3D) and `<IntroPortal>` (HTML overlay)
- IntroPortal gates 3D scene: `{isIntroComplete && <TheSolarSystem />}`
- After intro, user enters god-view orbit of the solar system

### Planet Pages (`/planet/[planetName]`)
- Dynamic route; `planetName` param validated against `planetMetadata.ts`
- Invalid slugs → `notFound()`
- Planet components loaded via dynamic import map keyed by planet ID
- Currently implemented: `identity`, `legacy`, `vision`
- Remaining 7 planets render a minimal fallback

### Static Planet Routes (`/identity`, `/legacy`, etc.)
- Standalone page components at `src/app/[planetName]/page.tsx`
- These are the full-page planet experiences (not the 3D isolation view)

## State Management — Zustand

### `experienceStore` (`useExperience`)

```
Mode lifecycle: free → approach → isolation → enter
```

| Field | Type | Purpose |
|-------|------|---------|
| `mode` | `"free" \| "approach" \| "isolation" \| "enter"` | Current experience phase |
| `activePlanet` | `string \| null` | Planet ID currently in focus |

| Action | Effect |
|--------|--------|
| `setMode(mode)` | Transition experience phase |
| `setPlanet(id)` | Set/clear focused planet |
| `resetExperience()` | Return to `free` mode, clear planet |

**Rule:** Never skip modes. The camera controller, post-processing, and UI overlays all bind to the current mode.

### `deviceStore` (placeholder)
Reserved for adaptive quality settings. Will track GPU tier, viewport size, connection speed.

## Config-Driven Design

### `planetMetadata.ts` — Planet Registry

Single source of truth for all 10 planets:

| Field | Purpose |
|-------|---------|
| `id` | Unique key (matches route slug) |
| `name` | Display name |
| `themeColor` | UI accent color (HEX) |
| `orbitRadius` | Distance from sun in scene units (6–33) |
| `baseSize` | 3D mesh scale (0.8–1.1) |
| `orbitSpeed` | Radians per frame (0.0006–0.003) |
| `routePath` | Next.js route path |
| `ui.title` | HUD overlay title |
| `ui.description` | HUD overlay description |

**Adding a planet:** Add entry to `planetMetadata.ts` → create component in `src/components/3d/planets/` → add to dynamic import map in planet page → add textures to `public/textures/planets/[id]/`.

### `deviceProfiles.ts` (placeholder)
Will define quality tiers (low/medium/high/ultra) mapping to DPR, shadow resolution, post-processing toggle, and particle counts.

## Asset Pipeline

**Scale:** 20,000+ files across `public/textures/`, `public/models/`, `public/images/`.

| Rule | Implementation |
|------|----------------|
| Never hardcode paths | Use manifest JSON or metadata config |
| Lazy load textures | Load on approach/isolation, not on page mount |
| Progressive quality | Low-res placeholder → full-res on demand |
| CDN-ready structure | Flat directory per planet: `public/textures/planets/[id]/[skin]/` |

## CSS Architecture — Tailwind v4

- **`@theme` block** in `globals.css` defines all design tokens (colors, blur, radius, tracking)
- **Glass recipe:** `bg-gradient-to-b from-[var(--color-surface-glass)] to-[var(--color-surface-void)]` + backdrop blur
- **Z-layer hierarchy:** HTML overlays (z-10+) above WebGL canvas (z-0)
- **Touch armor:** Global `-webkit-tap-highlight-color: transparent` + `user-select: none` (except inputs)
- **Foldable support:** `@media (horizontal-viewport-segments: 2)` viewport segment query

## File Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home — intro + universe
│   ├── planet/[planetName] # Dynamic 3D planet isolation
│   ├── [planetName]/       # Static planet pages
│   └── api/                # API routes (auth, webhooks)
├── components/
│   ├── 3d/
│   │   ├── core/           # Canvas, camera, sun
│   │   ├── effects/        # Post-processing, stars
│   │   ├── planets/        # Planet meshes + skins
│   │   └── systems/        # Solar system orchestrator
│   ├── ui/                 # HTML overlays (intro, HUD, warp)
│   ├── layout/             # Page layout wrappers
│   └── blog/               # Blog components
├── config/                 # Planet metadata, device profiles, SEO
├── engine/                 # Zustand stores
├── hooks/                  # Custom hooks (lerp, textures)
└── lib/                    # Utilities, constants, clients
```

## Component Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| 3D planet | `[Name]Planet.tsx` | `IdentityPlanet.tsx` |
| UI overlay | Descriptive noun | `NavigationHUD.tsx`, `WarpTransition.tsx` |
| Page | `page.tsx` (App Router) | `src/app/vision/page.tsx` |
| Store | `[domain]Store.ts` | `experienceStore.ts` |
| Config | Descriptive noun | `planetMetadata.ts` |
