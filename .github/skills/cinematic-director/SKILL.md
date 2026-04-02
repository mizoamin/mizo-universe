---
name: cinematic-director
description: "Controls animation, transitions, and cinematic experience design in Mizo Universe. Use when: designing intro sequences, warp transitions, camera motion, planet approach animations, UI enter/exit choreography, Framer Motion patterns, useFrame lerp timing, post-processing mode transitions, loading screen feel, cinematic timing, easing curves, reduced-motion accessibility, or any question about how something should FEEL in the Mizo Universe."
argument-hint: "Describe the animation, transition, or cinematic feel you want to design or refine"
---

# Cinematic Director

Controls how everything **feels** in Mizo Universe — timing, motion, transitions, and emotional pacing. This skill designs animation concepts, timing specifications, and integration instructions. It does not replace @Coder — it directs what @Coder implements.

Every animation must answer: **"Does this feel like a $2.5M cinematic product?"** If not — redesign.

## When to Use

- Designing or refining the intro hold-to-enter experience
- Choreographing planet approach / isolation / enter camera sequences
- Creating warp transition effects between pages
- Designing UI overlay enter/exit animations (panels, HUD, overlays)
- Tuning lerp factors, easing curves, or timing in `useFrame` loops
- Adding or adjusting post-processing mode transitions (DOF, bloom ramp)
- Ensuring reduced-motion accessibility (WCAG 2.3.1)
- Reviewing animation feel across devices (mobile, desktop, visionOS)

## Design Philosophy

| Principle | Meaning |
|-----------|---------|
| **Cinematic, never flashy** | Every motion has purpose — no decorative bounce or gratuitous particles |
| **Smooth > Fast** | Lerp everything; never snap. Ease-out on arrival, ease-in on departure |
| **Spatial UI** | Apple Vision Pro-inspired depth: glassmorphism, layered parallax, z-aware motion |
| **Minimal** | If removing an animation doesn't hurt the experience, remove it |
| **Premium** | Motion communicates quality — slow reveals, confident transitions, precise timing |
| **Accessible** | Every animation has a `prefers-reduced-motion` fallback |

## Execution Workflow

### Step 1 — Define the Feel

Before any implementation detail, answer:
1. What **emotion** should this moment evoke? (power, mystery, wonder, focus, speed)
2. What is the user's **attention state**? (exploring, deciding, committing, waiting)
3. What **precedes** and **follows** this moment in the experience flow?

### Step 2 — Specify the Animation

Produce a specification with:

| Field | Description |
|-------|-------------|
| **Name** | Descriptive label (e.g., "Planet Approach Warp") |
| **Trigger** | What starts it (mode change, user action, timer) |
| **Duration** | Total time in ms |
| **Easing** | Curve name or formula |
| **Layers** | Which systems animate (camera, DOF, UI overlay, starfield speed) |
| **Reduced-motion fallback** | What happens with `prefers-reduced-motion: reduce` |
| **Device tier** | Desktop-only, mobile-safe, or adaptive |

### Step 3 — Integration Instructions

Provide @Coder with:
1. Which files to modify
2. Exact timing values and easing curves
3. Which animation system to use (see [Animation Systems](./references/animation-systems.md))
4. Pre/post conditions (e.g., "only active when mode === 'approach'")

### Step 4 — Validate Feel

After implementation:
1. Does the timing feel right on 60 Hz and 120 Hz displays?
2. Does reduced-motion fallback still communicate the state change?
3. Does mobile performance stay above 60 FPS?
4. Does the animation harmonize with adjacent transitions?

## Animation Systems in Use

The codebase uses three animation layers. See [Animation Systems](./references/animation-systems.md) for full rules.

| Layer | Technology | Domain | Example |
|-------|-----------|--------|---------|
| 3D render loop | `useFrame` + `THREE.MathUtils.lerp` | Camera, planet orbits, starfield, material props | `CinematicCameraController`, `BackgroundStars` |
| HTML overlays | Framer Motion (`motion`, `AnimatePresence`) | Panel enter/exit, content reveals, page transitions | `IntroPortal`, planet page overlays |
| CSS transitions | Tailwind + `transition-*` / `animate-*` | Simple opacity, color, scale changes | `WarpTransition`, `LoadingScreen` |

**Rule:** Never mix layers for the same element. A 3D object animates in `useFrame`. An HTML overlay animates with Framer Motion. Never use Framer Motion inside the R3F canvas.

## Current Timing Catalog

See [Timing Catalog](./references/timing-catalog.md) for all established animation timings in the codebase.

## Hard Rules

1. **No heavy animations that drop FPS** — if an animation causes frame drops on mobile, simplify it
2. **Frame-rate independent** — always multiply by `delta` in `useFrame`; use Framer Motion's time-based spring/tween for HTML
3. **No GSAP** — the codebase uses `useFrame` lerps + Framer Motion exclusively. Do not introduce GSAP
4. **Reduced-motion is mandatory** — every animation must have a `prefers-reduced-motion` path (WCAG 2.3.1)
5. **Pre-allocate in 3D** — no `new Vector3()` or `new Color()` in animation loops (see `universe-builder` skill)
6. **Orchestrate, don't stack** — when multiple things animate simultaneously, stagger deliberately. No visual chaos

## Reference Files

- [Animation Systems](./references/animation-systems.md) — when to use useFrame vs Framer Motion vs CSS, with patterns and anti-patterns
- [Timing Catalog](./references/timing-catalog.md) — all established animation timings, easing curves, and durations in the codebase
