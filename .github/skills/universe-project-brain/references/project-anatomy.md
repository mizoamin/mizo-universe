# Project Anatomy

Complete map of every system, file, and its current status in Mizo Universe.

> **Last verified:** March 26, 2026 — full codebase scan

## Planet Modules

| # | Planet | Implementation | Wired to Solar System | Planet Page Route | Status |
|---|--------|---------------|----------------------|-------------------|--------|
| 1 | Identity | `IdentityPlanet/index.tsx` + `skins.ts` (~300+ lines) | Yes (direct import) | `/identity`, `/planet/identity` | Complete |
| 2 | Legacy | `LegacyPlanet/index.tsx` + `skins.ts` (~350+ lines) | Yes (direct import) | `/legacy`, `/planet/legacy` | Complete |
| 3 | Vision | `VisionPlanet/index.tsx` + `skins.ts` + `DNAHelix.tsx` + `personaSignatures.ts` (~400+ lines) | Yes (lazy import) | `/vision`, `/planet/vision` | Complete |
| 4 | Odyssey | `OdysseyPlanet/index.tsx` + `skins.ts` (~350+ lines) | Yes (lazy import) | `/odyssey`, `/planet/odyssey` | Complete |
| 5 | Ventures | `VenturesPlanet/index.tsx` + `skins.ts` (~280+ lines) | Yes (lazy import) | `/ventures`, `/planet/ventures` | Complete |
| 6 | Voice | `VoicePlanet/index.tsx` (empty) | **Not wired** | `/voice`, `/planet/voice` | Empty stub |
| 7 | Videogram | `VideogramPlanet/index.tsx` (empty) | **Not wired** | `/videogram`, `/planet/videogram` | Empty stub |
| 8 | Library | `LibraryPlanet/index.tsx` + `skins.ts` (~320+ lines) | Yes (lazy import) | `/library`, `/planet/library` | Complete |
| 9 | Contact | `ContactPlanet/index.tsx` + `skins.ts` (~300+ lines) | Yes (lazy import) | `/contact`, `/planet/contact` | Complete |
| 10 | Shield | `ShieldPlanet/index.tsx` (empty) | **Not wired** | `/shield`, `/planet/shield` | Empty stub |

**Built:** 7/10 · **Wired:** 7/10 · **Empty stubs:** 3/10 (Voice, Videogram, Shield)

**Wiring gap:** Closed for all built planets. Only 3 unimplemented stubs (Voice, Videogram, Shield) remain unwired.

## Core Engine Files

| File | Path | Status | Notes |
|------|------|--------|-------|
| `experienceStore.ts` | `src/engine/` | Active | 4-mode state machine, core to all UX |
| `deviceStore.ts` | `src/engine/` | **Empty stub** | Intended for device profiling |

## Config Files

| File | Path | Status | Notes |
|------|------|--------|-------|
| `planetMetadata.ts` | `src/config/` | Active | All 10 planets defined with PlanetId enum |
| `deviceProfiles.ts` | `src/config/` | **Empty stub** | Quality tier definitions |
| `seoConfig.ts` | `src/config/` | **Empty stub** | SEO metadata not implemented |
| `personaSyndicate.ts` | `src/config/` | Active | SyndicatePersona interface, imports PERSONA_SEED |
| `visionCategories.ts` | `src/config/` | Active | 11 Master Categories, bilingual EN/AR, maps to DNA segments |

## 3D Core

| File | Path | Status |
|------|------|--------|
| `UniverseCanvas.tsx` | `src/components/3d/core/` | Active — Canvas wrapper, CameraFOVAdapter, imports TheSolarSystem + effects |
| `CinematicCameraController.tsx` | `src/components/3d/core/` | Active — Mode-based, pre-allocated Vector3s (zero GC) |
| `SunCore.tsx` | `src/components/3d/core/` | Active — Delta-based rotation, PointLight |
| `TheSolarSystem.tsx` | `src/components/3d/systems/` | Active (7/10 planets wired: Identity direct, Legacy direct, Vision/Odyssey/Ventures/Library/Contact lazy) |
| `BasePlanet.tsx` | `src/components/3d/planets/` | Active — Core wrapper: orbit, isolation descent, mode-driven, children injection |

## 3D Effects

| File | Path | Status |
|------|------|--------|
| `PostProcessing.tsx` | `src/components/3d/effects/` | Active — Adaptive N8AO/Bloom/DOF/CA/Vignette; mode-gated DOF |
| `BackgroundStars.tsx` | `src/components/3d/effects/` | Active — 8000 particles, useMemo'd BufferGeometry |
| `IntroSpaceEffects.tsx` | `src/components/3d/effects/` | Active — 7000 star particles, BufferGeometry |
| `Intro3DAvatar.tsx` | `src/components/3d/effects/` | Active — 3-state texture loading from CDN, Billboard |
| `ShootingStars.tsx` | `src/components/3d/effects/` | **Placeholder** — has group ref + gated rotation, geometry pending (Phase 5) |

## UI Components

| File | Path | Status |
|------|------|--------|
| `IntroPortal.tsx` | `src/components/ui/` | Active (hold-to-enter) |
| `IntroOverlay.tsx` | `src/components/ui/` | Active (alt intro) |
| `LoadingScreen.tsx` | `src/components/ui/` | Active |
| `PlanetOverlay.tsx` | `src/components/ui/` | Active |
| `WarpTransition.tsx` | `src/components/ui/` | Active (WCAG compliant) |
| `SocialNexus.tsx` | `src/components/ui/` | Active |
| `NavigationHUD.tsx` | `src/components/ui/` | **Empty stub** |

## Lib / Utilities

| File | Path | Status |
|------|------|--------|
| `constants.ts` | `src/lib/` | Active (ASSET_ROOT, MANIFEST_URL) |
| `resolvers.ts` | `src/lib/` | Active (resolveAssetUrl, filterManifest) |
| `sanityClient.ts` | `src/lib/` | Active |
| `blogQueries.ts` | `src/lib/` | Active |
| `seo.ts` | `src/lib/` | Active |
| `rateLimit.ts` | `src/lib/` | Active |
| `personaSouls.ts` | `src/lib/` | Active |
| `performance.ts` | `src/lib/` | **Empty stub** |
| `mathUtils.ts` | `src/lib/` | **Empty stub** |

## Hooks

| File | Path | Status |
|------|------|--------|
| `useCinematicLerp.ts` | `src/hooks/` | **Empty stub** |
| `usePlanetTextures.ts` | `src/hooks/` | **Empty stub** |

## Blog & Layout Components

| File | Path | Status |
|------|------|--------|
| `BlogContent.tsx` | `src/components/blog/` | Active — Portable Text renderer, custom blocks, lazy loading, no CLS |
| `StandardLayout.tsx` | `src/components/layout/` | Active — Semantic HTML, breadcrumbs with JSON-LD BreadcrumbList |
| `PlanetCard/index.tsx` | `src/components/ui/PlanetCard/` | Active — Enter-mode trigger, WarpTransition, planet resolution |

## Route Pages (17 total)

| Route | Status |
|-------|--------|
| `/` (Home) | Active — IntroPortal + dynamic UniverseCanvas |
| `/identity`, `/legacy`, `/vision`, `/odyssey`, `/ventures` | Placeholder pages ("under construction" UI) |
| `/voice`, `/videogram`, `/library`, `/contact`, `/shield` | Placeholder pages |
| `/blog`, `/blog/[category]`, `/blog/[category]/[slug]` | Active — Server Components, ISR 60s |
| `/planet/[planetName]` | Active — Dynamic planet detail |
| `/secret-control-room` | Active — AI blog generation HQ (~150 lines), persona selection |
| `/secret-control-room/login` | Active — Token auth form |

## Middleware & Auth

| File | Path | Status |
|------|------|--------|
| `middleware.ts` | `src/` | Active — Route protection (/secret-control-room, /api/generate-blog), rate limiting (10 req/min), WordPress slug redirect |
| `actions.ts` | `src/app/secret-control-room/` | Active — Server Actions: generateBlogPost, builds Master System Prompt, creates Sanity draft |

## Empty Stubs Summary

These files exist but have no implementation (8 total):

1. `src/engine/deviceStore.ts` — device profiling store
2. `src/config/deviceProfiles.ts` — quality tier definitions
3. `src/config/seoConfig.ts` — per-planet SEO metadata
4. `src/lib/performance.ts` — FPS monitoring
5. `src/lib/mathUtils.ts` — shared math utilities
6. `src/hooks/useCinematicLerp.ts` — reusable lerp hook
7. `src/hooks/usePlanetTextures.ts` — planet texture loader hook
8. `src/components/ui/NavigationHUD.tsx` — global navigation

**Note:** `ShootingStars.tsx` has skeleton code (group ref, gated rotation) but no geometry — classified as placeholder, not empty stub.
