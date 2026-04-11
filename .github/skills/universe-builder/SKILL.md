---
name: universe-builder
description: "Full-stack autonomous system for building, scaling, and maintaining the Mizo Universe platform. Use when: implementing features, fixing bugs, optimizing performance, adding planets, modifying 3D scenes, updating UI overlays, managing assets, routing changes, state management, React Three Fiber work, Next.js App Router tasks, Zustand store updates, post-processing, camera systems, or any architectural decision in the Mizo Universe codebase."
argument-hint: "Describe what you want to build, fix, optimize, or change in the Mizo Universe"
---

# Universe Builder

Core execution engine for Mizo Universe — a cinematic, spatial, AI-powered personal brand platform built with Next.js 16, React Three Fiber, Zustand, and Tailwind CSS 4.

Every decision must answer: **"Will this improve the premium cinematic experience?"** If not — do not implement.

## When to Use

- Implementing new features or pages in the Mizo Universe
- Modifying 3D planet scenes, camera, post-processing, or visual effects
- Optimizing render performance (60 FPS target, zero-GC render loops)
- Adding or updating planet content, skins, textures, or assets
- Changing navigation flow (Intro → Universe → Planet isolation → Planet page)
- Updating state management (Zustand `experienceStore`, `deviceStore`)
- Managing the 20,000+ asset pipeline (CDN, lazy loading, manifests)
- Fixing bugs without breaking the existing architecture
- Any routing, SEO, or deployment change

## System Role

Operate as a Senior Software Architect + Next.js App Router Expert + React Three Fiber Engineer + Performance Engineer. This is a **premium cinematic product**, not a normal website.

## Execution Workflow

For every task, follow these four steps in order:

### Step 1 — Analyze

1. Identify which files and systems the task touches
2. Map dependencies — check imports, store references, config lookups
3. Determine device/performance impact (mobile, iOS Safari, low GPU)
4. Read the relevant source files before proposing changes

### Step 2 — Plan

1. Break the task into the smallest safe, atomic steps
2. Flag risks: will this affect render loop? Camera? State transitions? Routing?
3. Identify rollback points — what can be reverted if something breaks?
4. Check against [Hard Rules](./references/hard-rules.md) for violations

### Step 3 — Implement

1. Apply **surgical changes only** — never rewrite entire files
2. Scope changes to the task; do not refactor unrelated code
3. Follow all rules in [3D Performance Rules](./references/three-fiber-rules.md)
4. Follow all rules in [Architecture Rules](./references/architecture-rules.md)
5. Respect the config-driven approach: `planetMetadata.ts` is the source of truth for planets

### Step 4 — Validate

1. Check for regressions — does the existing flow still work?
2. Verify no new objects are allocated in render loops
3. Confirm routing still resolves correctly
4. Ensure mobile/low-GPU compatibility is preserved
5. Run linting: `npx next lint`

## Key Architecture Patterns

| Pattern | Rule |
|---------|------|
| Planet data | Always from `src/config/planetMetadata.ts`, never hardcoded in components |
| State | Zustand `useExperience` store — modes: free → approach → isolation → enter |
| 3D scene load | `{isIntroComplete && <TheSolarSystem />}` — no GPU before intro finishes |
| Routing | Dynamic `/planet/[planetName]` — planet pages at `/[planetName]` |
| Device profiles | `src/config/deviceProfiles.ts` — adaptive FOV, DPR, shadows, postprocessing (placeholder — to be built) |
| Assets | Structured metadata — lazy load, progressive quality, never hardcode paths |
| Camera | Adaptive FOV (30°–55°) based on viewport — see `CinematicCameraController` |
| Render loop | Zero allocation — all Vector3, Color, Matrix4 pre-allocated via `useRef` |

## File Map

| Area | Key Files |
|------|-----------|
| Config | `src/config/planetMetadata.ts`, `deviceProfiles.ts`, `seoConfig.ts` |
| State | `src/engine/experienceStore.ts`, `deviceStore.ts` |
| 3D Core | `src/components/3d/core/UniverseCanvas.tsx`, `CinematicCameraController.tsx`, `SunCore.tsx` |
| 3D Systems | `src/components/3d/systems/TheSolarSystem.tsx` |
| 3D Planets | `src/components/3d/planets/` (one component per planet + skins/) |
| Effects | `src/components/3d/effects/` (postprocessing, bloom, DOF) |
| UI Overlays | `src/components/ui/` (IntroPortal, NavigationHUD, PlanetOverlay, WarpTransition) |
| Pages | `src/app/[planetName]/page.tsx`, `src/app/planet/[planetName]/page.tsx` |
| Assets | `public/textures/`, `public/models/`, `public/images/` |

## Error Prevention

Before applying any change:

1. **Identify risks** — will this affect the render loop, camera, state machine, routing, or asset loading?
2. **Check dependencies** — trace imports and store references from the changed file
3. **Suggest rollback plan** — what can be reverted if the change breaks something?
4. **Verify against hard rules** — run the [Hard Rules](./references/hard-rules.md) checklist

## Operating Mode

**Elite Production Mode** — every change ships as if going to production.

- **Precision > Speed** — measure twice, cut once
- **Quality > Quantity** — one correct change beats five hasty ones
- **Architecture > Hacks** — no shortcuts that create tech debt

## Reference Files

- [Hard Rules](./references/hard-rules.md) — non-negotiable constraints
- [3D / React Three Fiber Rules](./references/three-fiber-rules.md) — render loop, allocation, performance
- [Architecture Rules](./references/architecture-rules.md) — routing, state, config, asset handling
