# Mizo Universe — Master Plan

> **Owner:** Mizo Amin — Professional Basketball Player, Tech Expert, Businessman  
> **Project Type:** Spatial Interactive Identity System  
> **Version:** 5.1 (AAA Supreme Detail & Controlled Expansion Edition)  
> **Last Updated:** March 26, 2026  
> **Stack:** Next.js 16.1.6 · React 19.2.3 · React Three Fiber 9.5.0 · Three.js 0.183.0 · Zustand 5.0.11 · Framer Motion 12.34.3 · Tailwind CSS v4 · TypeScript 5  
> **Performance Target:** 60 FPS Stable · < 2s TTI · Lighthouse > 90  
> **Experience Level:** Cinematic / Spatial Computing / Apple Vision Pro Aesthetic

---

## Table of Contents

1. [Core Vision & Paradigm](#1-core-vision--paradigm)
2. [Architectural Philosophy & Non-Negotiable Rules](#2-architectural-philosophy--non-negotiable-rules)
3. [The 10 Planets System](#3-the-10-planets-system)
4. [AAA Folder Architecture](#4-aaa-folder-architecture)
5. [Layer Responsibilities & Component Specs](#5-layer-responsibilities--component-specs)
6. [State Management Schema](#6-state-management-schema)
7. [Cinematic Camera & Transition Logic](#7-cinematic-camera--transition-logic)
8. [Texture, Skin & Memory Management Engine](#8-texture-skin--memory-management-engine)
9. [Universal Responsiveness & Adaptive Rendering](#9-universal-responsiveness--adaptive-rendering)
10. [SEO & Spatial Metadata Strategy](#10-seo--spatial-metadata-strategy)
11. [20,000+ Asset Ecosystem](#11-20000-asset-ecosystem)
12. [AI-Powered Multi-Agent Workflow](#12-ai-powered-multi-agent-workflow)
13. [Blog & Content Intelligence System](#13-blog--content-intelligence-system)
14. [Planet Landing Page System](#14-planet-landing-page-system)
15. [Development Phases & Checklists](#15-development-phases--checklists)
16. [Deployment & CI/CD Protocol](#16-deployment--cicd-protocol)
17. [Performance Standards](#17-performance-standards)
18. [Target Platforms](#18-target-platforms)

---

## 1. Core Vision & Paradigm

Mizo Universe is not a traditional website. It is a **Spatial Digital Operating System** representing the multidimensional identity, legacy, and future of Mizo Amin through a highly interactive 3D solar system interface.

### The Central Metaphor

- **SunCore** = The absolute center. The core essence of Mizo. All gravitational and interactive logic revolves around this.
- **10 Planets** = The 10 domains of Life, Legacy, Business & Influence.

### The Aesthetic Target ("The Feel")

| Quality | Definition |
|---------|-----------|
| **Cinematic** | Transitions feel directed by a camera operator — easing, dynamic DoF, FOV modulation |
| **Intelligent** | The system knows its device and upgrades/downgrades rendering quality seamlessly |
| **Fluid** | Zero jump-cuts. 100% continuous interpolation. Spring physics for all motion |
| **Premium** | Glassmorphism UI, high-fidelity PBR textures, physically-based materials |
| **Minimal** | Clean, focused interfaces. No clutter. Information appears when needed |
| **Spatial** | 3D depth, parallax, XR/Vision Pro readiness in every interaction |
| **Controlled** | Strict architecture prevents collapse. Every expansion is validated |
| **Scalable** | 20,000+ assets, 10 planets, 15 AI personas — all config-driven and extensible |

### Core Pillars

1. **3D Universe (React Three Fiber)** — Full solar system at 60fps. Users orbit in space, approach planets, enter cinematic close-ups, then warp into planet-specific immersive environments. Zero-allocation render loops. Spring physics for all motion. Adaptive post-processing by device tier.

2. **Personal Brand Platform** — Each planet maps to a facet of Mizo's identity. Landing pages blend cinematic hero sections with bilingual Mizo-Voice copy, Sanity CMS blog grids, and interactive widgets.

3. **AI-Powered Workflow** — 8 specialized agents + 5 skill systems collaborate to build, review, and ship features safely.

4. **20,000+ Asset Ecosystem** — Manifest-driven CDN pipeline with geo-located, tag-filtered, year-sorted photographic assets.

5. **AI Content Intelligence** — 15 AI personas generate bilingual EN/AR blog content through Sanity CMS, managed from a Secret Control Room.

---

## 2. Architectural Philosophy & Non-Negotiable Rules

We strictly follow **Clean Architecture** adapted for WebGL/React.

### Design Principles

- Separation of Concerns
- SOLID Principles
- Layered Architecture
- Data Isolation
- Adaptive Rendering
- XR / Vision Pro Readiness

### SOLID Application in 3D

- **Single Responsibility:** `UniverseCanvas` only handles the `<Canvas>`. `TheSolarSystem` only maps the loop. `LegacyPlanet` only renders geometry and material.
- **Open/Closed:** To add an 11th planet, modify `planetMetadata.ts`. DO NOT touch `TheSolarSystem.tsx`.
- **Data Isolation:** Components are "dumb". They receive props from `config/` or the Zustand store.

### The 7 Non-Negotiable Rules

| # | Rule | Rationale |
|---|------|-----------|
| 1 | **NO HARDCODED DATA IN COMPONENTS** | All names, colors, speeds, radii MUST live in `src/config/planetMetadata.ts` |
| 2 | **NO DEVICE CONDITIONALS IN 3D MESHES** | Never write `if (window.innerWidth < 768)` inside a planet. Read from `deviceStore` |
| 3 | **STRICT FOLDER ISOLATION** | Every planet gets its own folder with localized logic and skin definitions |
| 4 | **NO CIRCULAR IMPORTS** | `engine` → `config` ✅ · `components` → `engine` + `config` ✅ · `config` → nothing ✅ |
| 5 | **TEXTURE BUDGET** | No texture exceeds 2048×2048 (2K). All textures MUST be WebP |
| 6 | **MEMORY DISPOSAL** | When a planet unmounts, its geometry and material MUST be disposed from GPU memory |
| 7 | **NO SPAGHETTI TRANSITIONS** | All camera movements handled exclusively by `CinematicCameraController.tsx` |

### Additional Mandatory Rules

- **No GSAP** — All HTML animation through Framer Motion exclusively
- **No per-frame allocations** — Pre-allocate all Vector3, Matrix4, Quaternion, Color, Object3D
- **No blocking render scripts** — Dynamic imports + Suspense boundaries everywhere
- **All future features must pass checklist validation** before merging

---

## 3. The 10 Planets System

Every planet represents a pillar of Mizo's existence. Each must visually differ completely.

### Orbital Layout

| # | Planet | Domain | Orbit | Speed | Size | Accent | Route |
|---|--------|--------|-------|-------|------|--------|-------|
| 1 | **Identity** | Origins, Heritage, Education | 6 | 0.003 | 0.8 | `#ffd4a3` | `/identity` |
| 2 | **Legacy** | Basketball Career, Championships | 9 | 0.0025 | 1.0 | `#ffaa00` | `/legacy` |
| 3 | **Vision** | Tech, AI & Creative Vision | 12 | 0.002 | 0.9 | `#00ffff` | `/vision` |
| 4 | **Odyssey** | Global Travel, Geo-Spatial | 15 | 0.0018 | 1.1 | `#4488ff` | `/odyssey` |
| 5 | **Ventures** | Business & Entrepreneurship | 18 | 0.0015 | 0.85 | `#8A2BE2` | `/ventures` |
| 6 | **Voice** | Podcasts & Interviews | 21 | 0.0013 | 0.95 | `#ff0080` | `/voice` |
| 7 | **Videogram** | Video Content & Production | 24 | 0.0011 | 1.05 | `#c0c0c0` | `/videogram` |
| 8 | **Library** | 20,000+ Image Archive | 27 | 0.0009 | 0.9 | `#ffffff` | `/library` |
| 9 | **Contact** | Communication & Networking | 30 | 0.0008 | 1.0 | `#00ff88` | `/contact` |
| 10 | **Shield** | Privacy, Security & Legal | 33 | 0.0006 | 0.8 | `#555555` | `/shield` |

### Planet Visual Specifications

| Planet | Visual Theme | Skin: Default | Skin: Alt/Premium |
|--------|-------------|---------------|-------------------|
| Identity | Crystal Emerald gemstone, glowing wireframe over solid core | Golden | Monochrome |
| Legacy | Trophy Gold, deep orange/brown PBR leather texture | Worn Leather | Signed Ball (Premium Edition) |
| Vision | Neural Sapphire, holographic cyberpunk grid shader + DNAHelix | Cyan Grid | Neon Green |
| Odyssey | 8K Earth globe, cloud layer, atmosphere | Real Earth | Stylized |
| Ventures | Neon Cyan data grid, metallic corporate | Brushed Steel | Gold |
| Voice | Audio-reactive (future), pink hues | Smooth Matte | Pulsing |
| Videogram | Silver/Chrome reflective surface | Chrome | Glitch |
| Library | Obsidian Knowledge, white marble-like texture | Marble | Ancient Paper |
| Contact | Neural Satellite, green neon particle nodes | Fiber Optic | Matrix |
| Shield | Hexagonal energy shield shader | Iron Grey | Forcefield |

### Planet Module Structure

Each planet folder contains:
```
planets/{PlanetName}/
├── index.tsx       Planet-specific mesh, shader, material, lighting, animation
├── skins.ts        Available skin configurations (materials, colors, spring physics)
└── (optional)      Local sub-components (DNAHelix.tsx, personaSignatures.ts, etc.)
```

---

## 4. AAA Folder Architecture

```
mizo-universe/
├── public/                                 STATIC ASSETS (NOT IN BUNDLE)
│   ├── fonts/
│   ├── images/intro/                       Intro sequence portraits
│   ├── models/planets/                     GLTF/GLB models per planet
│   └── textures/
│       ├── environment/                    HDRIs, star maps
│       └── planets/
│           ├── identity/default/           albedo.webp, normal.webp, emissive.webp, roughness.webp
│           ├── legacy/default/             albedo.jpg
│           │       └── premium-edition/    Secondary skin
│           ├── odyssey/default/            diffuse.webp, normal.webp, night.webp, clouds.webp, specular.webp
│           └── (all 10 planets...)
│
├── sanity/                                 CMS SCHEMAS & SEED DATA
│   ├── schemas/                            post.ts, category.ts, aiPersona.ts
│   └── lib/seed.ts                         Database seeding
│
├── src/
│   ├── app/                                NEXT.JS APP ROUTER & SEO
│   │   ├── layout.tsx                      Global HTML/Body, Metadata base
│   │   ├── page.tsx                        ROOT: Intro Portal + dynamic UniverseCanvas
│   │   ├── globals.css                     Tailwind v4 @theme + .planet-page scroll override
│   │   ├── robots.ts                       SEO robots configuration
│   │   ├── sitemap.ts                      Dynamic sitemap generation
│   │   ├── {planetName}/page.tsx           10 planet landing pages (Server Components)
│   │   ├── blog/                           /blog, /blog/[category], /blog/[category]/[slug]
│   │   ├── planet/[planetName]/            Dynamic planet detail route
│   │   ├── secret-control-room/            Admin panel (login + actions + AI blog generation)
│   │   └── api/                            auth/, generate-blog/, webhooks/
│   │
│   ├── config/                             SINGLE SOURCE OF TRUTH (DATA)
│   │   ├── planetMetadata.ts               All 10 planets: name, orbit, speed, size, accent, route
│   │   ├── planetPageConfig.ts             Bilingual descriptions, category slugs, hero textures
│   │   ├── deviceProfiles.ts               Performance tier definitions (stub)
│   │   ├── seoConfig.ts                    Per-planet SEO metadata (stub)
│   │   ├── personaSyndicate.ts             15 AI persona configurations
│   │   └── visionCategories.ts             11 Master Categories, bilingual EN/AR
│   │
│   ├── engine/                             ZUSTAND STATE MANAGERS
│   │   ├── experienceStore.ts              Camera mode, active planet, transitions
│   │   └── deviceStore.ts                  Hardware detection & performance scaling (stub)
│   │
│   ├── hooks/                              CUSTOM REACT HOOKS
│   │   ├── usePlanetTextures.ts            Smart texture loader (stub)
│   │   └── useCinematicLerp.ts             Camera damping math (stub)
│   │
│   ├── lib/                                UTILITIES
│   │   ├── resolvers.ts                    Asset URL resolution, manifest filtering, Google Drive paths
│   │   ├── constants.ts                    ASSET_ROOT, MANIFEST_URL
│   │   ├── sanityClient.ts                 Sanity CMS connection
│   │   ├── blogQueries.ts                  GROQ queries (posts, categories, multi-category fetch)
│   │   ├── seo.ts                          Blog SEO engine (OpenGraph, JSON-LD, Twitter Cards)
│   │   ├── personaSouls.ts                 15 AI persona identity prompts
│   │   ├── rateLimit.ts                    Sliding window rate limiter (10 req/min)
│   │   ├── performance.ts                  FPS monitoring (stub)
│   │   ├── mathUtils.ts                    Shared math utilities (stub)
│   │   └── indexing/google.ts              Google Indexing API utility
│   │
│   └── components/
│       ├── 3d/
│       │   ├── core/                       ENGINE RENDERERS
│       │   │   ├── UniverseCanvas.tsx      Canvas, CameraFOVAdapter, adaptive FOV, fog, tone mapping
│       │   │   ├── CinematicCameraController.tsx   4-mode camera, pre-allocated Vector3s (zero GC)
│       │   │   ├── SunCore.tsx             Delta-based rotation, PointLight intensity 400+
│       │   │   └── BackgroundStars.tsx     8000 particles, useMemo'd BufferGeometry
│       │   │
│       │   ├── systems/                    MACRO ASSEMBLIES
│       │   │   └── TheSolarSystem.tsx      Orchestrates all planet orbits (7/10 wired)
│       │   │
│       │   ├── effects/                    POST-PROCESSING & ENVIRONMENT
│       │   │   ├── BackgroundStars.tsx     8000 starfield particles
│       │   │   ├── PostProcessing.tsx      3-tier N8AO/Bloom/DOF/CA/Vignette
│       │   │   ├── IntroSpaceEffects.tsx   7000 intro star particles
│       │   │   ├── Intro3DAvatar.tsx       3-state texture billboard (idle/hover/active)
│       │   │   └── ShootingStars.tsx       Skeleton code, geometry pending
│       │   │
│       │   └── planets/                    ISOLATED PLANET MODULES
│       │       ├── BasePlanet.tsx          Orbit, isolation descent, enter-mode, children injection
│       │       ├── IdentityPlanet/         Crystal Emerald (~300+ lines)
│       │       ├── LegacyPlanet/           Trophy Gold (~350+ lines)
│       │       ├── VisionPlanet/           Neural Sapphire (~400+ lines, DNAHelix, personaSignatures)
│       │       ├── OdysseyPlanet/          8K Earth Globe (~350+ lines)
│       │       ├── VenturesPlanet/         Neon Cyan Data Grid (~280+ lines)
│       │       ├── LibraryPlanet/          Obsidian Knowledge (~320+ lines)
│       │       ├── ContactPlanet/          Neural Satellite (~300+ lines)
│       │       ├── VoicePlanet/            ❌ Empty stub
│       │       ├── VideogramPlanet/        ❌ Empty stub
│       │       └── ShieldPlanet/           ❌ Empty stub
│       │
│       ├── ui/                             2D DOM OVERLAYS (FRAMER MOTION)
│       │   ├── IntroOverlay.tsx            Hold-to-enter portal with portrait states
│       │   ├── IntroPortal.tsx             5-state FSM, parallax, multi-device touch
│       │   ├── LoadingScreen.tsx           drei useProgress bar, 600ms auto-hide
│       │   ├── PlanetOverlay.tsx           Planet info panel, stats, enter button
│       │   ├── WarpTransition.tsx          Cinematic warp (WCAG 2.3.1 compliant)
│       │   ├── SocialNexus.tsx             Inline SVG social links
│       │   ├── NavigationHUD.tsx           ❌ Global navigation (stub)
│       │   ├── PlanetCard/index.tsx        Enter-mode trigger, WarpTransition
│       │   └── widgets/
│       │       ├── StatPulse.tsx           Animated stat grid (IntersectionObserver)
│       │       ├── ProjectOrbit.tsx        Horizontal snap-scroll project slider
│       │       └── ThoughtStream.tsx       Quote card with Web Share API + clipboard
│       │
│       ├── layout/                         LAYOUT COMPONENTS
│       │   ├── StandardLayout.tsx          Semantic HTML + JSON-LD BreadcrumbList
│       │   ├── PlanetPageLayout.tsx        Cinematic landing page template (Server Component)
│       │   └── ScrollFadeHero.tsx          Zero-re-render scroll parallax (direct DOM)
│       │
│       └── blog/
│           └── BlogContent.tsx             Portable Text renderer with custom blocks
│
├── agents/                                 AGENT DEFINITION FILES
│   ├── orchestrator.agent.md
│   ├── planner.agent.md
│   ├── coder.agent.md
│   ├── designer.agent.md
│   ├── media.agent.md
│   ├── security.agent.md
│   ├── seo.agent.md
│   ├── qa.agent.md
│   └── qa-subagent.agent.md
│
├── docs/                                   PROJECT INTELLIGENCE
│   ├── masterplan.md                       This file — architectural vision & system design
│   ├── architecture.md                     Technical reference of every component
│   ├── progress.md                         Completion percentages & module breakdown
│   ├── todo.md                             Phased roadmap with checklists
│   └── agents.md                           Agent registry & workflow diagram
│
└── .github/skills/                         AI SKILL SYSTEM
    ├── universe-builder/SKILL.md           Full-stack build skill
    ├── universe-orchestrator/SKILL.md      Multi-agent coordination
    ├── cinematic-director/SKILL.md         Animation & transition design
    ├── experience-brain/SKILL.md           UX intelligence & interaction logic
    └── universe-project-brain/SKILL.md     Progress tracking & project memory
```

---

## 5. Layer Responsibilities & Component Specs

### `app/` — Entry Layer
Routes only. No rendering logic, no business logic. Each planet has a Server Component page at `app/{planetName}/page.tsx` using `PlanetPageLayout`. Blog routes at `app/blog/`. API routes at `app/api/`. Admin at `app/secret-control-room/`.

### `config/` — Single Source of Truth

| File | Purpose |
|------|---------|
| `planetMetadata.ts` | All 10 planets: id, name, themeColor, orbitRadius, orbitSpeed, size, route. `PlanetId` type union |
| `planetPageConfig.ts` | Extended page data: bilingual Mizo-Voice descriptions (EN/AR), blog category slugs, hero textures, blur placeholders |
| `deviceProfiles.ts` | Performance tier definitions: mobile, tablet, desktop, ultra, vision-pro (stub) |
| `seoConfig.ts` | Per-planet SEO metadata templates (stub) |
| `personaSyndicate.ts` | SyndicatePersona interface, PERSONA_SEED import for 15 AI personas |
| `visionCategories.ts` | 11 Master Categories for Vision planet, bilingual EN/AR |

**Import rule:** `config/` imports NOTHING. `engine/` imports from `config/`. `components/` imports from `engine/` + `config/`.

### `engine/` — State Management

| Store | Status | Purpose |
|-------|--------|---------|
| `experienceStore.ts` | ✅ Done | Zustand 4-mode state machine: `free → approach → isolation → enter`. Tracks active planet, camera targets, transition flags |
| `deviceStore.ts` | ❌ Stub | Device detection, GPU tier classification, rendering profile injection |

### `components/3d/core/` — Engine Renderers

| Component | Responsibilities |
|-----------|-----------------|
| `UniverseCanvas.tsx` | Canvas wrapper, `CameraFOVAdapter` (adaptive 30°–55° by aspect ratio), DPR control, fog, tone mapping, Suspense fallback |
| `CinematicCameraController.tsx` | Mode-based camera with `THREE.MathUtils.damp`. Free = OrbitControls + mouse parallax. Approach = warp zoom. Isolation = drone hover (±1.2px X, ±0.8px Y). Enter = descent lock. Pre-allocated Vector3s, zero GC |
| `SunCore.tsx` | Central emissive sun with delta-based rotation, PointLight intensity 400+ |
| `TheSolarSystem.tsx` | Reads `planetMetadata`, maps to `BasePlanet` wrappers, manages orbit rotation. 7/10 planets currently wired (Identity, Legacy, Vision direct; Odyssey, Ventures, Library, Contact via React.lazy) |

### `components/3d/planets/BasePlanet.tsx`
Abstract wrapper for all planets. Handles: orbital motion, isolation descent, enter-mode planet drop (`targetY = -size × 3.5`), children injection, onClick/onPointer events, experienceStore updates.

### `components/ui/` — HTML Overlays
All animated with Framer Motion (NO GSAP ever). AnimatePresence for enter/exit. No Three.js imports allowed in this layer.

### `components/layout/` — Page Templates

| Component | Type | Purpose |
|-----------|------|---------|
| `PlanetPageLayout.tsx` | Server Component | Cinematic landing page template: floating header, ScrollFadeHero, bilingual Mizo-Voice copy, widget slot system, Sanity blog grid with Stealth Mode fallback, JSON-LD breadcrumbs, accent-colored footer |
| `ScrollFadeHero.tsx` | Client Component | Zero-re-render scroll parallax via direct DOM manipulation + rAF. Reduced-motion aware |
| `StandardLayout.tsx` | Server Component | Semantic HTML wrapper with JSON-LD BreadcrumbList |

---

## 6. State Management Schema

### A. `experienceStore.ts` (The Experience Brain)

```typescript
interface ExperienceState {
  mode: "free" | "approach" | "isolation" | "enter";
  activePlanetId: PlanetId | null;
  cameraTarget: THREE.Vector3 | null;
  setMode: (mode: Mode) => void;
  setPlanet: (id: PlanetId | null, position?: THREE.Vector3) => void;
  resetExperience: () => void;
}
```

### B. `deviceStore.ts` (The Performance Brain) — STUB

```typescript
interface DeviceState {
  tier: "mobile" | "tablet" | "desktop" | "ultra" | "vision-pro";
  quality: "low" | "medium" | "high" | "ultra";
  pixelRatio: number;
  dpr: [number, number];
  capabilities: { shadows: boolean; postProcessing: boolean; instancing: boolean };
  initDeviceProfile: () => void;
}
```

---

## 7. Cinematic Camera & Transition Logic

The user journey through space, strictly managed by `experienceStore`:

### State: "free" (God View)
- Camera: OrbitControls active, mouse parallax ±15 units
- Position: `[0, 80, 160]`
- FOV: 40° (desktop) / 65° (mobile)
- System: All planets orbiting, ambient lighting
- Post-Processing: N8AO + Bloom + Chromatic Aberration + Vignette

### State: "approach" (Planet Clicked)
- Camera: Calculates spherical coordinates, interpolates rapidly (speed: 4.0) to `(planet.size × 3)` units from target
- Target planet: Halts orbital rotation, continues axial rotation
- Controls: OrbitControls disabled

### State: "isolation" (Cinematic Close-Up)
- Camera: Locked onto planet, drone hover (sine-wave ±1.2px X, ±0.8px Y)
- FOV: 28°
- Target planet: Begins sine-wave Y-axis levitation
- Other planets: Drop to 10% opacity
- Post-Processing: + DepthOfField (bokeh 3.0)
- UI: `PlanetOverlay` info panel appears

### State: "enter" (The Pedestal)
- Target planet: Descends smoothly on Y-axis (`targetY = -size × 3.5`)
- UI: `PlanetCard` springs up from bottom (Framer Motion spring physics)
- User clicks "Enter Domain" → triggers warp

### The Warp
- Camera: FOV stretches (hyperdrive effect)
- UI: `WarpTransition.tsx` — 800ms flash or 400ms WCAG-safe reduced-motion fade
- Router: Next.js App Router pushes to `/{planet.route}`

### Reset Logic
- Click in void → `resetExperience()` → all planets resume orbiting, camera returns to God View

---

## 8. Texture, Skin & Memory Management Engine

### Folder Structure Rule

```
public/textures/planets/{planetId}/{skinName}/
├── albedo.webp          Base color map
├── normal.webp          Surface detail
├── roughness.webp       Material roughness
├── emissive.webp        Glow map (optional)
└── ao.webp              Ambient occlusion (optional)
```

### Available Textures (Current)

| Planet | Skin | Files |
|--------|------|-------|
| Identity | default | albedo.webp, normal.webp, emissive.webp, roughness.webp |
| Odyssey | default | diffuse.webp, normal.webp, night.webp, clouds.webp, specular.webp |
| Legacy | default | albedo.jpg |
| Legacy | premium-edition | (folder exists) |

### Rules

- **WebP only** (max 2048×2048 / 2K resolution)
- **Lazy load on focus** — textures load when planet enters approach/isolation
- **Dispose on unfocus** — `THREE.Cache.clear()` + geometry/material dispose on unmount
- **Never preload all skins** — only the active skin loads
- **Never load all planets simultaneously** — only the focused planet loads high-res

### Skin System

Skins enable:
- Thematic upgrades (seasonal, premium)
- Visual variation (alt colorways)
- Future NFT / collectible expansion

Each planet's `skins.ts` defines available configurations with material parameters, spring physics, and color palettes.

---

## 9. Universal Responsiveness & Adaptive Rendering

We kill the concept of standard CSS media queries for 3D logic. We use the **Device Profile Engine** (`deviceStore` + `deviceProfiles`).

### Device Tier Matrix

| Tier | FOV | DPR | Stars | Post-Processing | Shadows | Textures |
|------|-----|-----|-------|----------------|---------|----------|
| `mobile` | 65° | [1, 1.5] | 1500 | Bloom disabled | Off | Default skins |
| `tablet` | 55° | [1, 1.5] | 3000 | Bloom only | Off | Default skins |
| `desktop` | 40° | [1, 2] | 5000 | Full (N8AO+Bloom+CA+Vignette) | Soft | Default skins |
| `ultra` | 40° | [1, 2] | 8000 | Full + DOF | Soft | Premium skins if available |
| `vision-pro` | 40° | [1, 2] | 8000 | Full + DOF | Soft | Premium skins if available |

### CSS Rules

- Use `dvh` / `dvw` instead of `vh` / `vw`
- `.planet-page` class: `position: fixed; inset: 0; overflow-y: auto` (overrides global `overflow: hidden`)
- No hardcoded breakpoints inside 3D logic
- Prevent layout shift, prevent scroll bleed
- Touch targets ≥ 44×44px on mobile

---

## 10. SEO & Spatial Metadata Strategy

Each planet landing page is a Server Component with isolated SEO.

### Per-Planet SEO

- **Static Metadata:** Each page exports `metadata: Metadata` with unique title, description, OpenGraph
- **JSON-LD Breadcrumbs:** Injected via `PlanetPageLayout` — `WebSite → Planet Name`
- **Blog SEO:** `seo.ts` generates OpenGraph, JSON-LD BlogPosting, Twitter Cards per blog post
- **Sitemap:** `sitemap.ts` dynamically covers all routes
- **Robots:** `robots.ts` configured for search engine access

### Planned (Phase 4)

- `seoConfig.ts` — Per-planet structured data templates
- JSON-LD schemas: `Person` (athlete), `Organization` (ventures), `SportsActivityLocation` (legacy)
- Dynamic OpenGraph images based on planet accent colors
- Dynamic meta tags for 20,000+ assets
- Core Web Vitals audit (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## 11. 20,000+ Asset Ecosystem

### Pipeline

```
CDN (mizoamin.com)
    │
    ▼
assets_manifest_v8.json (20k+ entries)
    │
    ▼
resolvers.ts
├── resolveAssetUrl()           Resolve CDN paths
├── filterManifest()            General filtering
├── filterManifestByTags()      Tag-based filtering
├── filterManifestByYear()      Year-based filtering
└── Google Drive path resolution
    │
    ▼
Planet components (galleries, carousels, pins, Earth globe)
```

### Asset Metadata Schema

Each entry in the manifest contains:
- `Title`, `Year`, `Location`, `City`, `Country`
- `Tags[]`, `SEO_Tags[]`, `Keywords[]`, `Caption`

### Rules

- All assets hosted on Hostinger CDN (no external CDN to prevent CORS in WebGL)
- Progressive JPEG/WebP with responsive srcset
- Batch lazy loading (24 images/batch)
- Manifest cancellation tokens for aborted requests

---

## 12. AI-Powered Multi-Agent Workflow

### The 8 Agents

| Agent | Role | Authority |
|-------|------|-----------|
| **Orchestrator** | Master coordinator — plans, delegates, validates | Routes all tasks, never writes code |
| **Planner** | Analyzes requests, produces phased execution plans | Risk assessment, dependency mapping |
| **Coder** | Implements features, fixes, optimizations | Surgical changes only, follows plan |
| **Designer** | UI/UX specifications, visual quality | Aesthetic judgment overrides Coder |
| **MediaArchitect** | Asset pipeline, textures, models | Image optimization, CDN management |
| **Security** | Security audits, vulnerability scanning | OWASP Top 10, HMAC verification |
| **SEO** | Metadata, structured data, search optimization | OpenGraph, JSON-LD, sitemaps |
| **QA** | Final quality gate, regression testing | No work ships without QA pass |

### Workflow Pipeline

```
User Request → Orchestrator → Planner (plan) → [Approval]
    → MediaArchitect (assets) → Designer (UX) → Coder (build)
    → Security (audit) → SEO (validate) → QA (gate)
    → Ship
```

### The 5 Skill Systems

| Skill | Domain |
|-------|--------|
| `universe-builder` | Full-stack implementation — 3D, UI, routing, state |
| `universe-orchestrator` | Multi-agent coordination and task delegation |
| `cinematic-director` | Animation, transitions, camera motion, easing |
| `experience-brain` | User journey, interaction logic, UX state |
| `universe-project-brain` | Progress tracking, project memory, onboarding |

---

## 13. Blog & Content Intelligence System

### Architecture

- **Sanity v3 CMS** — Schemas: `post`, `category`, `aiPersona` (15 personas)
- **GROQ Queries** — `blogQueries.ts` with `getPostsByCategorySlugs()` multi-category fetch
- **AI Blog Generation** — Server Actions via Secret Control Room, persona-driven bilingual EN/AR
- **Blog Routes** — `/blog`, `/blog/[category]`, `/blog/[category]/[slug]`
- **Portable Text** — `BlogContent.tsx` with custom blocks (RichTextSection, MediaFullWidth, InsightCallout, ComparisonTable)
- **Webhook** — Sanity → Google Indexing API with HMAC signature verification

### The 15 AI Personas

Each persona has a unique voice, expertise domain, and writing style defined in `personaSouls.ts`. Blog posts are generated through persona selection in the Secret Control Room and published to Sanity.

### Category Mapping to Planets

| Planet | Blog Categories |
|--------|----------------|
| Odyssey | sports, wellness |
| Ventures | business |
| Library | reads, mindset |
| Identity | lifestyle |
| Legacy | sports |
| Vision | tech-unboxing, gaming |
| Contact | (none — uses ContactForm widget instead) |

---

## 14. Planet Landing Page System

### PlanetPageLayout Template

Every transformed planet page follows this Server Component pattern:

```
┌─────────────────────────────────────────┐
│  Floating Header (planet name + accent) │
├─────────────────────────────────────────┤
│  ScrollFadeHero                         │
│  ├── Hero texture (from planetPageConfig)│
│  ├── Title with accent gradient         │
│  └── Bilingual description (EN/AR)      │
├─────────────────────────────────────────┤
│  Widget Slot (children)                 │
│  ├── StatPulse (animated stat grid)     │
│  ├── ProjectOrbit (snap-scroll slider)  │
│  └── ThoughtStream (quote cards)        │
├─────────────────────────────────────────┤
│  Blog Grid (from Sanity via categories) │
│  └── OR: Stealth Mode fallback          │
│      "Scanning for new intel..."        │
├─────────────────────────────────────────┤
│  JSON-LD Breadcrumbs (automatic)        │
├─────────────────────────────────────────┤
│  Footer (planet accent themed)          │
└─────────────────────────────────────────┘
```

### Widget System

| Widget | Purpose | Used By |
|--------|---------|---------|
| `StatPulse` | Animated stat grid with IntersectionObserver reveal | Odyssey, Ventures, Identity, Legacy |
| `ProjectOrbit` | Horizontal snap-scroll slider with status badges | Ventures, Vision |
| `ThoughtStream` | Quote card with Web Share API + clipboard fallback | Odyssey, Library, Legacy |
| `ContactForm` | Inquiry form (name/email/type/message) with simulated submission | Contact |

### Landing Page Status

| Planet | Status | Widgets | Blog Categories |
|--------|--------|---------|----------------|
| Odyssey | ✅ Transformed | StatPulse + ThoughtStream | sports, wellness |
| Ventures | ✅ Transformed | ProjectOrbit + StatPulse | business |
| Library | ✅ Transformed | ThoughtStream | reads, mindset |
| Identity | ✅ Transformed | StatPulse | lifestyle |
| Legacy | ✅ Transformed | StatPulse + ThoughtStream | sports |
| Vision | ✅ Transformed | ProjectOrbit | tech-unboxing, gaming |
| Contact | ✅ Transformed | ContactForm | (none) |
| Voice | ❌ Placeholder | — | — |
| Videogram | ❌ Placeholder | — | — |
| Shield | ❌ Placeholder | — | — |

---

## 15. Development Phases & Checklists

### Phase 1 — AAA Architecture Baseline ✅ COMPLETE
- [x] Next.js App Router initialized
- [x] Tailwind CSS v4 configured
- [x] AAA folder structure created
- [x] `planetMetadata.ts` (all 10 planets)
- [x] `experienceStore.ts` (Zustand state machine)

### Phase 2 — Engine Refactor & Planet Wiring ✅ COMPLETE
- [x] `TheSolarSystem.tsx` reads from `planetMetadata`
- [x] `SunCore.tsx` optimized with delta-based rotation
- [x] `BackgroundStars.tsx` (8000 particles)
- [x] 7/10 planets wired (Identity, Legacy, Vision direct; Odyssey, Ventures, Library, Contact lazy)

### Phase 3 — Independent Planet Construction 🔄 70% COMPLETE
- [x] `BasePlanet.tsx` wrapper (orbit, isolation, enter-mode)
- [x] Identity Planet — Crystal Emerald (~300+ lines)
- [x] Legacy Planet — Trophy Gold (~350+ lines)
- [x] Vision Planet — Neural Sapphire (~400+ lines, DNAHelix, personaSignatures)
- [x] Odyssey Planet — 8K Earth Globe (~350+ lines)
- [x] Ventures Planet — Neon Cyan Data Grid (~280+ lines)
- [x] Library Planet — Obsidian Knowledge (~320+ lines)
- [x] Contact Planet — Neural Satellite (~300+ lines)
- [ ] Voice Planet — Podcasts & audio content
- [ ] Videogram Planet — Video content & production
- [ ] Shield Planet — Privacy & security

### Phase 4 — Cinematic Camera & UI Layer ✅ COMPLETE
- [x] `CinematicCameraController.tsx` (4-mode camera, damp3, spherical math)
- [x] `PlanetCard/index.tsx` (Framer Motion spring + glassmorphism)
- [x] `PlanetOverlay.tsx` (info panel, enter button)
- [x] onClick → approach → isolation → enter state chain
- [x] Void click to reset logic

### Phase 5 — Texture Engine & PBR 🔄 PARTIAL
- [x] Identity textures: albedo.webp, normal.webp, emissive.webp, roughness.webp
- [x] Odyssey textures: diffuse.webp, normal.webp, night.webp, clouds.webp, specular.webp
- [x] Legacy textures: albedo.jpg + premium-edition folder
- [ ] Remaining planet textures
- [ ] `usePlanetTextures.ts` smart loader hook
- [ ] GPU memory disposal system verification

### Phase 6 — Routing & Warp Effects ✅ COMPLETE
- [x] `WarpTransition.tsx` (WCAG 2.3.1 compliant)
- [x] Router integration in PlanetCard
- [x] All 17 routes created

### Phase 7 — Planet Landing Pages ✅ COMPLETE
- [x] `PlanetPageLayout.tsx` template (Server Component)
- [x] `ScrollFadeHero.tsx` (zero-re-render parallax)
- [x] Widget system: StatPulse, ProjectOrbit, ThoughtStream
- [x] `planetPageConfig.ts` (bilingual descriptions, category slugs, hero textures)
- [x] Odyssey showcase (reference pattern)
- [x] 7/10 planets fully transformed with PlanetPageLayout

### Phase 8 — Solar System Colonization ✅ COMPLETE
- [x] Ventures landing page — ProjectOrbit + StatPulse + Business blog
- [x] Library landing page — ThoughtStream + Reads/Mindset blog
- [x] Identity landing page — StatPulse personal milestones + hero texture
- [x] Legacy landing page — StatPulse heritage + ThoughtStream dynasty quotes
- [x] Vision landing page — ProjectOrbit innovation lab + AI/Tech blog
- [x] Contact landing page — ContactForm inquiry widget
- [x] Stealth Mode fallback for empty blog categories
- [x] Hero texture visual continuity (Identity + Legacy mapped)

### Phase 9 — Blog & Content Intelligence ✅ COMPLETE
- [x] Sanity v3 schemas (post, category, aiPersona — 15 personas)
- [x] Blog pages (`/blog`, `/blog/[category]`, `/blog/[category]/[slug]`)
- [x] AI blog generation API + Server Actions
- [x] BlogContent.tsx Portable Text renderer
- [x] Webhook (Sanity → Google Indexing API, HMAC verified)
- [x] Secret Control Room admin panel

### Phase 10 — SEO & Metadata ⏳ PENDING
- [ ] `seoConfig.ts` — per-planet structured data
- [ ] JSON-LD: Person, Organization, SportsActivityLocation schemas
- [ ] Dynamic OpenGraph images
- [ ] Dynamic meta tags for 20,000+ assets
- [ ] Core Web Vitals audit

### Phase 11 — Performance & Polish ⏳ PENDING
- [ ] `deviceStore.ts` + `deviceProfiles.ts` implementation
- [ ] `NavigationHUD.tsx` global navigation
- [ ] `performance.ts` FPS monitoring
- [ ] `mathUtils.ts` shared utilities
- [ ] `useCinematicLerp.ts` cinematic interpolation hook
- [ ] `ShootingStars.tsx` particle geometry
- [ ] GPU profiling & FPS testing
- [ ] Lighthouse audit (target > 90)

### Phase 12 — Build Remaining Planets ⏳ PENDING
- [ ] Voice Planet — 3D scene + skins + wiring + landing page
- [ ] Videogram Planet — 3D scene + skins + wiring + landing page
- [ ] Shield Planet — 3D scene + skins + wiring + landing page

### Phase 13 — Deployment & QA ⏳ PENDING
- [ ] Production build (`npm run build`)
- [ ] Mobile testing (touch targets, orientation, canvas resize)
- [ ] Foldable device testing
- [ ] Apple Vision Pro compatibility
- [ ] 4K/8K display scaling
- [ ] Final security audit
- [ ] SSL + GZIP + caching configuration

---

## 16. Deployment & CI/CD Protocol

1. **Build Command:** `npm run build`
2. **Asset Check:** All textures locally hosted in `/public` — no external CDN for WebGL assets
3. **Caching:** Aggressively cache `.webp`, `.js`, `.css` files
4. **SSL:** Enforce HTTPS on all routes
5. **GZIP:** Enable compression for all text assets

---

## 17. Performance Standards

All performance standards are implemented in the codebase:

| Standard | Implementation |
|----------|---------------|
| Zero-allocation useFrame | Pre-allocated vectors, matrices, quaternions |
| InstancedMesh batching | Odyssey (300 pins), Library (64 frames) |
| LOD culling per planet | Distance-based detail reduction |
| Frustum culling | Library carousel |
| 8K texture anisotropy | High-fidelity rendering on supported GPUs |
| VRAM cleanup on unmount | Geometry + material dispose |
| Adaptive post-processing | 3 tiers (Desktop DOF / Desktop Low-End / Mobile) |
| Frame-rate independent lerping | Delta-based, not frame-count-based |
| Lazy batch loading | 24 images/batch with cancellation tokens |
| Manifest cancellation tokens | Abort in-flight requests on navigation |

---

## 18. Target Platforms

| Platform | Priority | Special Handling |
|----------|----------|-----------------|
| Mobile (iOS & Android) | Critical | Adaptive FOV (65°), reduced particles, bloom disabled |
| Foldable phones (Galaxy Z Fold, Pixel Fold) | High | Dynamic viewport, orientation change handling |
| iPad Pro & tablets | High | Intermediate quality tier |
| Desktop (16:9) | Critical | Full quality, all post-processing |
| Ultrawide monitors | Medium | Extended FOV calculations |
| 4K/8K displays | Medium | DPR scaling verification |
| Apple Vision Pro | Medium | Spatial browsing ready, XR-compatible controls |

---

## Final Statement

> **Mizo Universe is not a portfolio. It is a Spatial Identity System.**
>
> The difference between a prototype and AAA production is Architectural Discipline.
>
> We build forward. We never patch blindly. We evolve through controlled expansion.
>
> Every line of code serves the Master Plan — making this website look like $2.5 million worth.
>
> *"The universe is not outside of you. Look inside yourself; everything that you want, you already are."* — Rumi
