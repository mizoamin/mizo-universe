@workspace Thank you. Please create the file `MIZO_MASTER_PLAN.md` in the root directory and paste the following exact content into it. This will be your context memory:

# 🌌 MIZO UNIVERSE — MASTER PLAN & SYSTEM ARCHITECTURE

Version: 4.0 (AAA Controlled Expansion Edition)
Owner: Mizo Amin
Project Type: Spatial Interactive Identity System
Stack: Next.js 14+ (App Router) + TypeScript + React Three Fiber + Tailwind
Rendering Mode: Static Export (Hostinger Deployment)
Performance Target: 60 FPS Stable (Desktop & Mobile)
Experience Level: Cinematic / Spatial Computing / Vision Pro Aesthetic

---

## 1️⃣ CORE VISION — THE HYBRID SMART UNIVERSE

MIZO UNIVERSE is not a traditional website.

It is a Spatial Digital Operating System representing the multidimensional identity of Mizo Amin.

SunCore = The Center (Mizo)
10 Planets = 10 Domains of Life, Legacy & Influence

The experience must feel:

• Cinematic

• Intelligent

• Fluid

• Premium

• Minimal

• Spatial

• Controlled

• Scalable

This project must evolve safely without architectural collapse.

---

## 2️⃣ ARCHITECTURAL PHILOSOPHY

We strictly follow:

• Separation of Concerns

• SOLID Principles

• Layered Architecture

• Data Isolation

• Adaptive Rendering

• Static Export Compatibility

• XR / Vision Pro Readiness

Non-Negotiable Rules:

1. No planet data inside components.
2. No device conditionals inside planets.
3. All numeric constants live in config.
4. No circular imports.
5. No duplicated logic.
6. No spaghetti code.
7. All future features must pass checklist validation.

---

## 3️⃣ CURRENT AAA FOLDER ARCHITECTURE

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── identity/page.tsx
│   ├── legacy/page.tsx
│   ├── vision/page.tsx
│   ├── odyssey/page.tsx
│   ├── ventures/page.tsx
│   ├── voice/page.tsx
│   ├── videogram/page.tsx
│   ├── library/page.tsx
│   ├── contact/page.tsx
│   └── shield/page.tsx
│
├── config/
│   ├── planetMetadata.ts
│   └── deviceProfiles.ts
│
├── engine/
│   ├── experienceStore.ts
│   └── deviceStore.ts
│
├── components/
│   ├── 3d/
│   │   ├── core/
│   │   │   ├── UniverseCanvas.tsx
│   │   │   ├── TheSolarSystem.tsx
│   │   │   ├── CinematicCameraController.tsx
│   │   │   ├── SunCore.tsx
│   │   │   ├── BackgroundStars.tsx
│   │   │   └── ShootingStars.tsx
│   │   │
│   │   └── planets/
│   │       ├── IdentityPlanet/
│   │       │   ├── IdentityPlanet.tsx
│   │       │   └── skins/
│   │       │       ├── default/
│   │       │       ├── alt/
│   │       │       └── premium/
│   │       │
│   │       ├── LegacyPlanet/
│   │       ├── VisionPlanet/
│   │       ├── OdysseyPlanet/
│   │       ├── VenturesPlanet/
│   │       ├── VoicePlanet/
│   │       ├── VideogramPlanet/
│   │       ├── LibraryPlanet/
│   │       ├── ContactPlanet/
│   │       └── ShieldPlanet/
│   │
│   └── ui/
│       ├── PlanetCard.tsx
│       └── WarpTransition.tsx

Each Planet Folder contains:

• Planet Component
• Optional shader logic
• Local animation logic
• Skins folder for texture variations

---

## 4️⃣ LAYER RESPONSIBILITIES

🔹 app/

Entry Layer only.
No rendering logic.
No business logic.

🔹 engine/

experienceStore.ts:
• Idle / Focus / Enter / Exit states
• Active planet
• Transition control
• Navigation control

deviceStore.ts:
• Device detection
• Rendering profile selection
• Performance configuration injection

No UI logic here.

🔹 config/

planetMetadata.ts:
Single Source of Truth for:
• Name
• Route
• Color
• Orbit Radius
• Orbit Speed
• Size
• Texture skin options
• UI labels

deviceProfiles.ts:
Profiles:
• mobile
• tablet
• desktop
• ultra
• vision-pro

Each profile defines:
• Camera FOV
• Star density
• Texture resolution
• Shadow quality
• Postprocessing toggle
• Max DPR

🔹 components/3d/core/

UniverseCanvas.tsx:
• Canvas wrapper
• Inject device profile
• DPR control
• Performance caps

TheSolarSystem.tsx:
• Orchestrator
• Reads planetMetadata
• Maps planets dynamically
• No hardcoded arrays (refactor target)

SunCore.tsx:
• Central emissive light source
• Distortion plasma surface
• PointLight intensity 400+

CinematicCameraController.tsx:
• Smooth lerp transitions
• Focus targeting
• Dynamic FOV

BackgroundStars.tsx:
• Starfield
• Density controlled by device profile

ShootingStars.tsx:
• Decorative cinematic effect

🔹 components/3d/planets/

Each planet:
• Independent geometry
• Independent material
• Independent animation
• Lazy-load ready
• No global state logic inside

🔹 components/ui/

Overlay Layer only.
2D logic only.
No Three.js imports.

---

## 5️⃣ THE 10 PLANETS SYSTEM

Planet | Orbit | Theme
Identity | 6  | Heritage
Legacy   | 9  | Basketball Journey
Vision   | 12 | Tech & AI
Odyssey  | 15 | Global Travel
Ventures | 18 | Business
Voice    | 21 | Podcast
Videogram| 24 | Media
Library  | 27 | Philosophy
Contact  | 30 | Communication
Shield   | 33 | Protection

Each planet must visually differ completely.

---

## 6️⃣ TEXTURE & SKIN SYSTEM

Textures stored in:

/public/textures/planets/{planetName}/{skinName}/

Each skin may contain:

• albedo.webp
• normal.webp
• roughness.webp
• emissive.webp (optional)

Rules:

• WebP only
• 2K maximum resolution
• Lazy load on focus
• Dispose on unfocus
• Never preload all skins
• Never load all planets simultaneously

Skins allow:

• Thematic upgrades
• Seasonal variations
• Premium visual modes
• Future NFT / collectible expansion

---

## 7️⃣ HYBRID SMART UNIVERSE LOGIC

Idle:
• All planets orbit
• Subtle ambient lighting

Focus:
• Selected planet moves forward
• Others reduce opacity
• Camera centers
• UI overlay appears

Enter:
• Warp animation
• Route transition
• Fade blur

---

## 8️⃣ UNIVERSAL RESPONSIVENESS RULE (STRICT)

Every component MUST:

• Support:

* Mobile
* Foldables
* Tablets
* Desktop
* Vision Pro

• Use dvh / dvw instead of vh / vw
• Maintain stable 60FPS
• Prevent layout shift
• Prevent scroll bleed
• Use adaptive DPR
• No hardcoded breakpoints inside 3D logic

---

## 9️⃣ PERFORMANCE SYSTEM

• Delta-based animation (THREE.Clock)
• Dynamic imports
• Suspense boundaries
• Texture memory cap
• Instancing where possible
• Lighthouse > 90
• No blocking render scripts

---

## 🔟 DEVELOPMENT PHASES (CONTROLLED CHECKLIST SYSTEM)

Phase 1 — Foundation ✅
☑ UniverseCanvas
☑ SunCore
☑ 10 placeholder planets

Phase 2 — Orbital Logic (In Progress)
☑ System rotation
⬜ Dynamic planetMetadata integration
⬜ Remove hardcoded PLANETS array

Phase 3 — Planet Refactor
⬜ Independent planet folders
⬜ Remove shared Planet.tsx
⬜ Config-driven rendering

Phase 4 — Camera Cinematics
⬜ Smooth lerp
⬜ Focus lock
⬜ Warp transitions

Phase 5 — Texture & Skin Engine
⬜ Lazy texture loader
⬜ Skin switch support
⬜ Memory disposal system

Phase 6 — SEO Layer
⬜ Metadata API
⬜ JSON-LD
⬜ OpenGraph per planet

Phase 7 — Optimization
⬜ GPU profiling
⬜ FPS testing
⬜ Remove unused code

Phase 8 — Deployment
⬜ Static export
⬜ Hostinger upload
⬜ SSL
⬜ Final QA

---

## 1️⃣1️⃣ CURRENT STATUS SNAPSHOT

Visual Prototype      → 100%
Engine Architecture   → 75%
Planet Content        → 15%
Camera System         → 30%
Performance System    → 10%
SEO Layer             → 0%

Total Vision Completion ≈ 45%

---

## 👑 FINAL STATEMENT

Mizo Universe is not a portfolio.

It is a Spatial Identity System.

The difference between Prototype and AAA
is Architectural Discipline.

We build forward.
We never patch blindly.
We evolve through controlled expansion.

END OF MASTER PLAN v4.0

@workspace Thank you. Please create the file `MIZO_MASTER_PLAN.md` in the root directory and paste the following exact content into it. This will be your context memory:

# 🌌 MIZO UNIVERSE — ULTIMATE MASTER PLAN & SYSTEM ARCHITECTURE

**Version:** 5.0 (AAA Supreme Detail & Controlled Expansion Edition)

**Owner:** Mizo Amin

**Project Type:** Spatial Interactive Identity System

**Stack:** Next.js 14+ (App Router) + TypeScript + React Three Fiber + Drei + Zustand + Tailwind CSS + Framer Motion

**Rendering Mode:** Static Export (Hostinger Deployment)

**Performance Target:** 60 FPS Stable (Desktop & Mobile) | < 2s TTI (Time to Interactive)

**Experience Level:** Cinematic / Spatial Computing / Apple Vision Pro Aesthetic

---

## 📋 TABLE OF CONTENTS

1. [Core Vision & Paradigm](https://www.google.com/search?q=%231-core-vision--paradigm)
2. [Architectural Philosophy & Strict Rules](https://www.google.com/search?q=%232-architectural-philosophy--strict-rules)
3. [Comprehensive AAA Folder Architecture](https://www.google.com/search?q=%233-comprehensive-aaa-folder-architecture)
4. [State Management Schema (The Brains)](https://www.google.com/search?q=%234-state-management-schema-the-brains)
5. [Layer Responsibilities & Component Specs](https://www.google.com/search?q=%235-layer-responsibilities--component-specs)
6. [The 10 Planets System: Deep Dive](https://www.google.com/search?q=%236-the-10-planets-system-deep-dive)
7. [Texture, Skin & Memory Management Engine](https://www.google.com/search?q=%237-texture-skin--memory-management-engine)
8. [Cinematic Camera & Transition Logic](https://www.google.com/search?q=%238-cinematic-camera--transition-logic)
9. [Universal Responsiveness & Adaptive Rendering](https://www.google.com/search?q=%239-universal-responsiveness--adaptive-rendering)
10. [SEO & Spatial Metadata Strategy](https://www.google.com/search?q=%2310-seo--spatial-metadata-strategy)
11. [Micro-Task Development Phases & Checklists](https://www.google.com/search?q=%2311-micro-task-development-phases--checklists)
12. [Deployment & CI/CD Protocol](https://www.google.com/search?q=%2312-deployment--cicd-protocol)

---

## 1️⃣ CORE VISION & PARADIGM

MIZO UNIVERSE is not a traditional website. It is a **Spatial Digital Operating System**. It represents the multidimensional identity, legacy, and future of Mizo Amin through a highly interactive, 3D solar system interface.

**The Central Metaphor:**

* **SunCore:** The absolute center. The core essence of Mizo. All gravitational and interactive logic revolves around this.
* **10 Planets:** The 10 domains of Life, Legacy, Business, and Influence.

**The Aesthetic Target (The "Feel"):**

* **Cinematic:** Transitions must feel directed by a camera operator, utilizing Easing (Damping), dynamic Depth of Field (DoF), and Field of View (FOV) modulation.
* **Intelligent:** The system knows what device it is on and downgrades/upgrades rendering quality seamlessly.
* **Fluid:** Zero jump-cuts. 100% continuous interpolation.
* **Premium:** Glassmorphism UI, high-fidelity textures, physically based rendering (PBR) materials.

---

## 2️⃣ ARCHITECTURAL PHILOSOPHY & STRICT RULES

We strictly follow **Clean Architecture** adapted for WebGL/React.

### The "SOLID" Application in 3D:

* **Single Responsibility:** `UniverseCanvas` only handles the `<Canvas>`. `TheSolarSystem` only maps the loop. `LegacyPlanet` only renders the geometry and material.
* **Open/Closed:** To add an 11th planet, we modify `planetMetadata.ts`. We DO NOT touch `TheSolarSystem.tsx`.
* **Data Isolation:** Components are "Dumb". They receive props from the `config` layer or the `Zustand` store.

### 🛑 THE 7 NON-NEGOTIABLE RULES:

1. **NO HARDCODED DATA IN COMPONENTS:** All names, colors, speeds, and radii MUST live in `src/config/planetMetadata.ts`.
2. **NO DEVICE CONDITIONALS IN 3D MESHES:** Do not write `if (window.innerWidth < 768)` inside a planet. Read from `useDevice((s) => s.quality)`.
3. **STRICT FOLDER ISOLATION:** Every planet gets its own folder with its own localized logic and skin definitions.
4. **NO CIRCULAR IMPORTS:** `engine` can import from `config`. `components` can import from `engine` and `config`. `config` imports NOTHING.
5. **TEXTURE BUDGET:** No texture exceeds 2048x2048 (2K). All textures MUST be WebP.
6. **MEMORY DISPOSAL:** When a planet goes out of focus or is unmounted, its geometry and material MUST be disposed from GPU memory.
7. **NO SPAGHETTI TRANSITIONS:** All camera movements are handled exclusively by `CinematicCameraController.tsx`.

---

## 3️⃣ COMPREHENSIVE AAA FOLDER ARCHITECTURE

```text
mizo-universe/
├── public/                             # STATIC ASSETS (NOT IN BUNDLE)
│   ├── fonts/
│   ├── models/
│   │   └── planets/                    # GLTF/GLB models for complex planets
│   └── textures/
│       ├── environment/                # HDRIs, Star maps
│       └── planets/
│           ├── identity/
│           │   └── default/            # "default" skin folder
│           │       ├── albedo.webp
│           │       ├── normal.webp
│           │       ├── roughness.webp
│           │       └── emissive.webp
│           ├── legacy/
│           │   ├── default/
│           │   └── premium-edition/    # Example of a secondary skin
│           └── (all 10 planets...)
│
├── src/
│   ├── app/                            # NEXT.JS ROUTER & SEO
│   │   ├── layout.tsx                  # Global HTML/Body, Metadata base
│   │   ├── page.tsx                    # ROOT: Mounts UniverseCanvas & Intro
│   │   ├── globals.css                 # Tailwind & Base CSS
│   │   ├── identity/page.tsx           # SEO entry for Identity Planet
│   │   ├── legacy/page.tsx             # SEO entry for Legacy Planet
│   │   └── (all 10 planet routes...)
│   │
│   ├── config/                         # SINGLE SOURCE OF TRUTH (DATA)
│   │   ├── planetMetadata.ts           # All 3D physics and UI data mapping
│   │   ├── deviceProfiles.ts           # Tier definitions (mobile vs ultra)
│   │   └── seoConfig.ts                # Structured Data (JSON-LD) templates
│   │
│   ├── engine/                         # ZUSTAND STATE MANAGERS
│   │   ├── experienceStore.ts          # Camera mode, active planet, transitions
│   │   └── deviceStore.ts              # Hardware detection & performance scaling
│   │
│   ├── hooks/                          # CUSTOM REACT HOOKS
│   │   ├── usePlanetTextures.ts        # Smart WebP loader with fallback logic
│   │   └── useCinematicLerp.ts         # Math logic for camera damping
│   │
│   ├── lib/                            # UTILITIES
│   │   ├── mathUtils.ts                # Spherical to Cartesian converters
│   │   └── performance.ts              # GPU bottleneck detection
│   │
│   └── components/
│       ├── 3d/
│       │   ├── core/                   # ENGINE RENDERERS
│       │   │   ├── UniverseCanvas.tsx
│       │   │   ├── CinematicCameraController.tsx
│       │   │   └── SunCore.tsx
│       │   │
│       │   ├── systems/                # MACRO ASSEMBLIES
│       │   │   └── TheSolarSystem.tsx  # The map() loop
│       │   │
│       │   ├── effects/                # POST-PROCESSING & ENVIRONMENT
│       │   │   ├── BackgroundStars.tsx
│       │   │   ├── ShootingStars.tsx
│       │   │   └── PostProcessing.tsx  # Bloom, Vignette, DOF
│       │   │
│       │   └── planets/                # ISOLATED PLANET MODULES
│       │       ├── BasePlanet.tsx      # Abstract wrapper for physics/hitboxes
│       │       ├── IdentityPlanet/
│       │       │   ├── index.tsx       # Planet-specific Mesh & Shader logic
│       │       │   └── skins.ts        # Defines available skins for this planet
│       │       ├── LegacyPlanet/
│       │       │   ├── index.tsx
│       │       │   └── skins.ts
│       │       └── (all 10 planets...)
│       │
│       └── ui/                         # 2D DOM OVERLAYS (FRAMER MOTION)
│           ├── PlanetCard/             # The floating glassmorphism card
│           │   ├── index.tsx
│           │   └── styles.css
│           ├── NavigationHUD.tsx       # Top-level UI (Sound, Fullscreen)
│           ├── LoadingScreen.tsx       # Initial suspense fallback
│           └── WarpTransition.tsx      # Full-screen flash/warp to App Router

```

---

## 4️⃣ STATE MANAGEMENT SCHEMA (THE BRAINS)

### A. `experienceStore.ts`

Manages the user's journey through space.

```typescript
interface ExperienceState {
  mode: "free" | "approach" | "isolation" | "enter" | "warp";
  activePlanetId: PlanetId | null;
  cameraTarget: THREE.Vector3 | null;
  setMode: (mode: Mode) => void;
  setPlanet: (id: PlanetId | null, position?: THREE.Vector3) => void;
  resetExperience: () => void;
}

```

### B. `deviceStore.ts`

Manages hardware capabilities and throttle limits.

```typescript
interface DeviceState {
  tier: "mobile" | "tablet" | "desktop" | "ultra" | "vision-pro";
  quality: "low" | "medium" | "high" | "ultra";
  pixelRatio: number;
  dpr: [number, number]; // e.g., [1, 1.5] for mobile, [1, 2] for desktop
  capabilities: {
    shadows: boolean;
    postProcessing: boolean;
    instancing: boolean;
  };
  initDeviceProfile: () => void;
}

```

---

## 5️⃣ LAYER RESPONSIBILITIES & COMPONENT SPECS

### 🔹 `planetMetadata.ts` (The Blueprint)

Defines the `PlanetData` interface. Every planet must have:
`id`, `name`, `themeColor`, `orbitRadius`, `baseSize`, `orbitSpeed`, `rotationSpeed`, `routePath` (e.g., `"/legacy"`), and `ui` (Title, Subtitle, Description).

### 🔹 `UniverseCanvas.tsx`

* **Props:** None.
* **Responsibilities:** Wraps the entire scene in `<Canvas>`. Reads `dpr` from `deviceStore`. Contains `<Suspense>` for the loading screen. Injects lighting based on `quality`.

### 🔹 `TheSolarSystem.tsx`

* **Props:** None.
* **Responsibilities:** Imports `planetsData` from config. Loops through the data. Renders `SunCore` and the individual planet component folders. **Handles the overarching rotation of the entire system.**

### 🔹 `CinematicCameraController.tsx`

* **Props:** None (Reads from `experienceStore`).
* **Responsibilities:** Uses `useFrame` to interpolate (`THREE.MathUtils.damp3`) the camera's current position to the `cameraTarget`. Adjusts FOV based on `deviceStore.tier` (wider for mobile).

### 🔹 `BasePlanet.tsx`

* **Responsibilities:** Wraps the hitboxes. Handles the `onClick`, `onPointerOver`, and `onPointerOut` events. Stops propagation. Updates `experienceStore`. Wraps the specific planet geometry passed as `children`.

---

## 6️⃣ THE 10 PLANETS SYSTEM: DEEP DIVE

Every planet represents a pillar of Mizo's existence.

| ID | Name | Theme | Radius | Visual Specification | Skin Configuration |
| --- | --- | --- | --- | --- | --- |
| `identity` | Identity | Roots/Heritage | 12 | Glowing wireframe over solid core | `default`: Golden / `alt`: Monocrome |
| `legacy` | Legacy | Basketball | 18 | Deep orange/brown PBR leather texture | `default`: Worn Leather / `premium`: Signed Ball |
| `vision` | Vision | Tech / AI | 24 | Holographic/Cyberpunk grid shader | `default`: Cyan Grid / `alt`: Neon Green |
| `odyssey` | Odyssey | Global Travel | 30 | Earth-like, cloud layer, atmosphere | `default`: Real Earth / `alt`: Stylized |
| `ventures` | Ventures | Business | 36 | Metallic, sleek, corporate purple | `default`: Brushed Steel / `alt`: Gold |
| `voice` | Voice | Podcasts | 42 | Audio-reactive (future), pink hues | `default`: Smooth Matte / `alt`: Pulsing |
| `videogram` | Videogram | Media | 48 | Silver/Chrome reflective surface | `default`: Chrome / `alt`: Glitch |
| `library` | Library | Philosophy | 54 | White, marble-like texture | `default`: Marble / `alt`: Ancient Paper |
| `contact` | Contact | Network | 60 | Green neon nodes (Particle System) | `default`: Fiber Optic / `alt`: Matrix |
| `shield` | Shield | Protection | 66 | Hexagonal energy shield shader | `default`: Iron Grey / `alt`: Forcefield |

---

## 7️⃣ TEXTURE, SKIN & MEMORY MANAGEMENT ENGINE

### The Folder Structure Rule

Inside `public/textures/planets/{id}/skins/{skinName}/`, textures must follow standard PBR naming: `albedo`, `normal`, `roughness`, `emissive`, `ao`.

### Lazy Loading & Disposal

* We DO NOT use global loaders that hold textures in RAM forever.
* Inside each specific `Planet/index.tsx`, we use:
```typescript
const textures = useTexture({
  map: `/textures/planets/${id}/skins/${activeSkin}/albedo.webp`,
  // ...
});

```


* React Three Fiber's `useTexture` hooks automatically cache. However, when navigating to the DOM page (leaving WebGL), we trigger a `THREE.Cache.clear()` and dispose of geometries to prevent mobile browser crashes.

---

## 8️⃣ CINEMATIC CAMERA & TRANSITION LOGIC

The flow of user interaction, strictly managed by `experienceStore`:

1. **State: "free" (God View)**
* Camera: OrbitControls active.
* System: Rotating slowly. Planets orbiting.


2. **State: "approach" (User Clicks Planet)**
* Camera: Calculates spherical coordinates. Interpolates rapidly (speed: 4.0) to a position exactly `(Planet.size * 3)` units away from the target.
* Target Planet: Halts orbital rotation. Continues axial rotation.


3. **State: "isolation" (Micro-Levitation)**
* Camera: Locked onto planet.
* Target Planet: Begins sine-wave levitation on Y-axis. Other planets drop to 10% opacity.


4. **State: "enter" (The Pedestal)**
* Target Planet: Descends smoothly on Y-axis (`targetY = -size * 3.5`).
* UI: `PlanetCard.tsx` springs up from the bottom of the screen.


5. **State: "warp" (User clicks 'Enter Domain' on Card)**
* Camera: FOV stretches violently (Hyperdrive effect).
* UI: White screen flash overlay.
* Next.js Router: Pushes to `/{planet.route}`.



---

## 9️⃣ UNIVERSAL RESPONSIVENESS & ADAPTIVE RENDERING

We kill the concept of standard CSS media queries for 3D logic. We use the **Device Profile Engine**.

**When `deviceStore.tier === "mobile"`:**

* `Camera FOV`: Increased from 40 to 65 (to fit horizontal space into portrait).
* `DPR`: Capped at `[1, 1.5]`.
* `BackgroundStars`: Count reduced from 5000 to 1500.
* `PostProcessing`: Bloom effect disabled entirely.

**When `deviceStore.tier === "vision-pro" || "ultra"`:**

* `Camera FOV`: 40.
* `DPR`: Allowed up to `[1, 2]`.
* `Textures`: Requests `/premium/` high-res skins if available.
* `Shadows`: Soft shadows enabled on SunCore.

---

## 1️⃣0️⃣ HYBRID DATA ARCHITECTURE — HOSTINGER REGISTRY & CDN STRATEGY

### Overview: Metadata-Only, CDN-Hosted Media

The Mizo Universe does NOT store raw media (images, audio, videos) in the GitHub repository.

Instead, it uses a **Hybrid Data Architecture**:

- **Single Source of Truth:** `src/data/hostinger-registry/` contains JSON manifests, XML sitemaps, and AI-generated metadata (19,946 assets total)
- **External CDN:** All raw media files live permanently on the **Hostinger CDN** at `https://mizoamin.com/wp-content/uploads/mizo_final_assets/`
- **Asset Helper:** `src/data/hostinger-registry/assetHelper.ts` provides `getAssetUrl(relativePath)` to safely combine base URL + manifest paths
- **Lightweight:** Only 2.5 MB of metadata files in the repo; 0 MB of media

### The Registry Directory Structure

```
src/data/hostinger-registry/
├── README.md                           # Documentation
├── assetHelper.ts                      # CDN URL builder utility
├── assets_manifest_v8.json             # Complete asset catalog (50MB+, metadata only)
├── robots.txt                          # Google/Bing crawl directives
├── mizo_sitemap_index.xml              # Master sitemap index
├── mizo_sitemap_part_1.xml through     # 20 XML sitemaps (~1K URLs each)
│   mizo_sitemap_part_20.xml
├── seo-v8.txt                          # AI-generated bilingual metadata
├── seo_ai_readable_report_V20.txt      # AI-readable format for LLMs
├── mizo_master_ai_catalog.html         # AI-indexed HTML catalog
└── master_image_list_v8.txt            # Complete file listing
```

### Asset Organization (19,946 Total Assets)

```
mizo_final_assets/
├── mizo_production_assets/
│   ├── performance/
│   │   ├── air_attack/                 (25+ images)
│   │   ├── floor_general/              (1+ images)
│   │   ├── defense_lock/               (archive originals)
│   │   ├── the_grind/                  (30+ images)
│   │   └── archive_originals/          (2,338 images)
│   ├── recovery/
│   │   ├── 2013-right-hand-injury/
│   │   ├── 2016-left-knee-injury/
│   │   ├── 2017-broken-nose-surgery/   (27 images)
│   │   ├── 2020-left-hand-1st-surgery/
│   │   ├── 2021-left-hand-2nd-surgery/
│   │   ├── 2022-left-hand-3rd-surgery/
│   │   ├── 2023-left-knee-overload/
│   │   ├── 2025-right-ankle-ligament/
│   │   └── 2025-nose-rebreak/
│   ├── strength_and_conditioning/
│   │   ├── gym-workouts/               (45+ images)
│   │   └── recognition-top-7-shooters/ (258 images)
│   ├── lifestyle/
│   │   ├── tunnel_fits/                (7 images)
│   │   ├── egypt_home_suits/           (55 images)
│   │   ├── leisure_and_recreation/     (100+)
│   │   └── off_duty/                   (2 images)
│   ├── world_tour/
│   │   └── egypt/ (500+ images)
│   │       ├── egyptian_museum/        (85 images)
│   │       ├── city_stars_mall/        (3 images)
│   │       ├── classic_mercedes/       (8 images)
│   │       ├── andalus_park/           (45 images)
│   │       ├── alexandria_library/     (23 images)
│   │       ├── giza_pyramids/          (84 images)
│   │       ├── nile_boat_trip/         (80 images)
│   │       ├── el_gouna/               (55 images)
│   │       └── (50+ more locations)
│   ├── family/
│   │   ├── kids/                       (475+ images)
│   │   ├── wife/                       (46 images)
│   │   └── parents/                    (59 images)
│   ├── hobbies/                        (130+ images)
│   ├── legacy/                         (300+ images)
│   ├── press_archive/                  (700+ images)
│   └── (30+ total categories)
```

### SEO Metadata Per Asset

Each of 19,946 assets includes:

```json
{
  "filename": "mizo-amin-performance-air_attack-ea86a.webp",
  "title_en": "Mizo Amin: Soaring Above the Rim, Dominating the Paint!",
  "title_ar": "ميزو أمين يحلق في سماء الملعب! 🚀",
  "description_en": "In a moment frozen in time...[detailed visual description]",
  "description_ar": "لقطة مذهلة تظهر قوته الخارقة...[Arabic description]",
  "tags": [
    "Mizo Amin",
    "محمد حسن عبد المعطي محمد أمين",
    "Mohamed Hassan Abdelmoaty Mohamed",
    "Qatar Basketball",
    "#ميزو_أمين"
  ],
  "geo_location": "Qatar, Al Rayyan Stadium",
  "date": "2015-FIBA-Asia-Championship"
}
```

### CDN URL Pattern

```
Base: https://mizoamin.com/wp-content/uploads/mizo_final_assets/

Example asset URL:
  https://mizoamin.com/wp-content/uploads/mizo_final_assets/
  mizo_production_assets/performance/air_attack/
  mizo-amin-performance-air_attack-ea86a.webp
```

### Usage in React Components

**1. Direct Image Rendering:**

```typescript
import { getAssetUrl } from '@/data/hostinger-registry/assetHelper';

export function PerformanceGallery() {
  return (
    <img 
      src={getAssetUrl('mizo_production_assets/performance/air_attack/mizo-amin-performance-air_attack-ea86a.webp')}
      alt="Mizo Amin Air Attack"
      loading="lazy"
    />
  );
}
```

**2. In Blog or Gallery Components:**

```typescript
import { getAssetUrl } from '@/data/hostinger-registry/assetHelper';

export function VoicePlanetGallery() {
  const mediaPaths = [
    'mizo_production_assets/world_tour/egypt/egyptian_museum/file1.webp',
    'mizo_production_assets/world_tour/egypt/giza_pyramids/file2.webp',
  ];

  return (
    <div>
      {mediaPaths.map((path) => (
        <img key={path} src={getAssetUrl(path)} alt={path} />
      ))}
    </div>
  );
}
```

**3. Next.js Image Optimization (Recommended):**

```typescript
import Image from 'next/image';
import { getAssetUrl } from '@/data/hostinger-registry/assetHelper';

export function OptimizedAssetImage() {
  const assetUrl = getAssetUrl('...relative/path.webp');
  
  return (
    <Image
      src={assetUrl}
      alt="Mizo Asset"
      width={1200}
      height={800}
      onError={(e) => console.error(`Failed to load: ${assetUrl}`)}
    />
  );
}
```

### Critical System Rules

**Rule 1: Metadata is Source of Truth**
- JSON manifests describe all assets
- No hardcoded image paths in components
- Always read from `assets_manifest_v8.json` or import JSON configs

**Rule 2: External CDN Only**
- Raw images, videos, audio live ONLY on Hostinger CDN
- Do NOT import or version control raw media files
- Do NOT store WebP/MP4 files in `/public` directory

**Rule 3: Use assetHelper.ts**
- Always use `getAssetUrl()` for constructing URLs
- Never manually concatenate `HOSTINGER_CDN_BASE` in components
- Prevents path-traversal attacks and ensures consistent formatting

**Rule 4: Lazy Loading & Prefetch**
- Use `loading="lazy"` on all `<img>` tags
- Prefetch hot media paths in page headers
- Implement intersection observers for gallery pagination

**Rule 5: Sitemap Crawlability**
- Google/Bing crawl `mizo_sitemap_index.xml`
- All 20,946+ asset URLs are indexed with rich metadata
- Update sitemaps when new assets are added to registry

### Integration Checklist

When building a new feature (e.g., Voice or Videogram planet):

- [ ] Find relevant asset categories in `folder_structure_plan.txt`
- [ ] Read asset metadata from `seo-v8.txt` or parse `assets_manifest_v8.json`
- [ ] Use `getAssetUrl()` for every media reference
- [ ] Implement lazy loading with Next.js `<Image>` component
- [ ] Test CDN availability (curl the asset URLs)
- [ ] Verify sitemaps reflect new assets

---

## 🔟 SEO & SPATIAL METADATA STRATEGY

Each Next.js `app/[planet]/page.tsx` is completely isolated for SEO.

* **Static Export:** The site compiles to raw HTML/JS/CSS.
* **JSON-LD injection:** Each page gets schema markup.
* *Legacy Page:* Uses `SportsActivityLocation` or `Person` schema.
* *Ventures Page:* Uses `Organization` schema.


* **Meta Tags:** Dynamic OpenGraph images based on the planet's primary color.

---

## 1️⃣1️⃣ MICRO-TASK DEVELOPMENT PHASES & CHECKLISTS

### ✅ PHASE 1: AAA Architecture Baseline

* [x] Initialize Next.js 14 App Router.
* [x] Configure Tailwind CSS.
* [x] Execute Bash Script for AAA Folder Structure.
* [x] Create `planetMetadata.ts` (Data mapping).
* [x] Create `deviceStore.ts` & `experienceStore.ts` (State).

### ⏳ PHASE 2: Engine Refactor & Data Isolation

* [ ] Refactor `TheSolarSystem.tsx` to read exclusively from `planetMetadata`.
* [ ] Remove hardcoded `PLANETS` arrays from all files.
* [ ] Isolate `SunCore.tsx` and optimize its PointLight for performance.
* [ ] Implement `BackgroundStars.tsx` connected to `deviceStore` density limits.

### ⏳ PHASE 3: Independent Planet Construction (The Content)

* [ ] Create `BasePlanet.tsx` wrapper for hitboxes/physics.
* [ ] Build `IdentityPlanet` folder + mesh + materials.
* [ ] Build `LegacyPlanet` folder + mesh + materials.
* [ ] (Repeat for remaining 8 planets, ensuring unique thematic visuals).
* [ ] Implement local `skins` folders inside `public/textures/planets/`.

### ⏳ PHASE 4: Cinematic Camera & UI Layer

* [ ] Build `CinematicCameraController.tsx` using `damp3` and Spherical math.
* [ ] Build `PlanetCard.tsx` with Framer Motion spring physics & glassmorphism.
* [ ] Link `onClick` events in `BasePlanet` to trigger `approach` -> `isolation` -> `enter` states.
* [ ] Implement "Click in Void to Reset" logic.

### ⏳ PHASE 5: Texture Engine & PBR

* [ ] Gather/Generate 2K WebP textures for all 10 planets.
* [ ] Implement `useTexture` loader inside individual planet files.
* [ ] Implement Emissive maps for glowing planets (Vision, Contact, Shield).
* [ ] Verify GPU memory disposal on unmount.

### ⏳ PHASE 6: Routing & Warp Effects

* [ ] Build `WarpTransition.tsx` overlay effect.
* [ ] Link `PlanetCard` button to Next.js `useRouter().push()`.
* [ ] Build basic layout templates for the 10 SEO DOM pages.

### ⏳ PHASE 7: QA, Performance & Deployment

* [ ] Run Lighthouse tests (Target: > 90 Performance).
* [ ] Audit Mobile FPS (Target: Stable 50-60).
* [ ] Build project (`npm run build`).
* [ ] Upload `/out` folder to Hostinger.
* [ ] Configure SSL and GZIP on Hostinger cPanel.

---

## 1️⃣2️⃣ DEPLOYMENT & CI/CD PROTOCOL

1. **Framework config:** Set `output: 'export'` in `next.config.mjs`.
2. **Asset Check:** Ensure all textures are locally hosted in `/public`. Do not rely on external CDN links to prevent CORS issues in WebGL.
3. **Build Command:** Run `npm run build`.
4. **Artifact:** The `/out` directory will be generated.
5. **Hostinger Upload:** Zip the contents of `/out`, upload via Hostinger File Manager to `public_html`, and extract.
6. **Caching:** Configure `.htaccess` on Hostinger to aggressively cache `.webp` and `.js` files.

---

### 👑 FINAL STATEMENT

**Mizo Universe is not a portfolio. It is a Spatial Identity System.** The difference between a Prototype and AAA production is Architectural Discipline.

We build forward. We never patch blindly. We evolve through controlled expansion.

Every line of code serves the Master Plan making   this website look like $2.5 million worth.

---

**END OF MASTER PLAN v5.0**