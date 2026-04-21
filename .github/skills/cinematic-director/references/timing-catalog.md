# Timing Catalog

All established animation timings in the Mizo Universe codebase. When designing new animations, use these as the baseline to maintain consistent feel.

## Intro Sequence

| Moment | Duration | Easing | File |
|--------|----------|--------|------|
| Hold-to-enter charge | 1500ms | Linear (0→1 progress) | `IntroPortal.tsx` |
| Ignited state trigger | At 75% charge | — | `IntroPortal.tsx` |
| Post-complete linger | 800ms | — | `IntroPortal.tsx` |
| Image preload | On mount | — | `IntroPortal.tsx` |
| Intro star push (Z-axis) | Continuous | `+= 1.5` per frame | `IntroSpaceEffects.tsx` |

**Feel:** Power charging → ignition → brief moment of awe → launch into universe.

## Camera Transitions

| Mode Transition | Behavior | Lerp Factor | FOV Target | File |
|-----------------|----------|-------------|------------|------|
| Free (god view) | Parallax follow pointer, auto-orbit | `1 - Math.pow(0.0001, delta)` | 40° | `CinematicCameraController.tsx` |
| Free → Approach | Warp-speed FOV expansion | Same smooth factor | 65° | `CinematicCameraController.tsx` |
| Approach → Isolation | Camera settles near planet + drone hover | Same smooth factor | 28° | `CinematicCameraController.tsx` |
| Isolation hover | Sine bob: `x += sin(t*0.8)*1.2`, `y += cos(t*0.5)*0.8` | Per-frame | 28° | `CinematicCameraController.tsx` |
| Any → Free (return) | Lerp back to default position `(0, 80, 160)` | Same smooth factor | 40° | `CinematicCameraController.tsx` |

**Feel:** Free = floating exploration. Approach = warp speed rush. Isolation = intimate drone orbit. Enter = locked focus.

## Warp Transition (Page Navigation)

| Variant | Duration | Visual | File |
|---------|----------|--------|------|
| Full motion | 800ms before route push | White flash + pulse overlay | `WarpTransition.tsx` |
| Reduced motion | 400ms before route push | Dark fade only | `WarpTransition.tsx` |

**Feel:** Cinematic hyperspace jump — brief white flash simulates warp speed.

## Loading Screen

| Moment | Duration | Easing | File |
|--------|----------|--------|------|
| Progress bar fill | Driven by `useProgress()` | CSS `transition-all 300ms` | `LoadingScreen.tsx` |
| Fade-out after 100% | 600ms delay, then 600ms opacity | `ease` (CSS) | `LoadingScreen.tsx` |

**Feel:** Minimal, patient — the universe is being assembled.

## Planet Overlay Panel

| Moment | Duration | Easing | File |
|--------|----------|--------|------|
| Panel slide-in | 500ms | `animate-in slide-in-from-right` | `PlanetOverlay.tsx` |
| Enter button press | Instant scale `active:scale-95` | CSS transition | `PlanetOverlay.tsx` |

**Feel:** Confident slide from right — information panel, not a popup.

## Post-Processing Mode Transitions

| Mode | DOF | Bloom | N8AO | ChromaticAberration | File |
|------|-----|-------|------|---------------------|------|
| Free | Off | 0.8 intensity | On | On | `PostProcessing.tsx` |
| Approach | Off | 0.8 intensity | On | On | `PostProcessing.tsx` |
| Isolation | On (bokeh 3.0) | 0.8 intensity | On | On | `PostProcessing.tsx` |
| Enter | On (bokeh 3.0) | 0.8 intensity | On | On | `PostProcessing.tsx` |
| Mobile (all) | Off | 0.5 intensity | Off | Off | `PostProcessing.tsx` |
| Low-end desktop | Off | 0.5 intensity | Off | Off | `PostProcessing.tsx` |

**Feel:** DOF activates during planet focus — shallow depth isolates the planet cinematically.

## Starfield

| Element | Behavior | File |
|---------|----------|------|
| BackgroundStars (8000 pts) | Z-axis scroll, speed lerps to `targetSpeed` prop | `BackgroundStars.tsx` |
| IntroSpaceEffects (7000 pts) | Push toward camera at `+= 1.5` per frame | `IntroSpaceEffects.tsx` |

## Sun

| Element | Behavior | File |
|---------|----------|------|
| SunCore rotation | `rotation.y += delta * 0.08` | `SunCore.tsx` |

## Framer Motion Usage (Planet Pages)

| Component | Pattern | Easing |
|-----------|---------|--------|
| IdentityPlanet | `AnimatePresence` for panel enter/exit | Spring (stiffness 260, damping ~20) |
| VisionPlanet | `AnimatePresence` + `motion.div` for content reveals | Spring (stiffness 260, damping 18) |
| LibraryPlanet | `AnimatePresence` + `motion.p` for text reveals | Spring |
| ContactPlanet | `AnimatePresence` + `motion.div` | Spring |

**Consistency rule:** All planet page overlays use Framer Motion `AnimatePresence` with spring physics. No planet uses GSAP.

## Timing Guidelines for New Animations

| Category | Recommended Range | Notes |
|----------|-------------------|-------|
| Micro-interaction | 100–200ms | Hover states, button feedback |
| UI panel enter/exit | 300–500ms | Slide, fade, scale |
| Page transition | 600–1000ms | Warp effect, route change |
| Camera mode transition | 500–2000ms (lerp) | Governed by smooth factor, not fixed duration |
| Cinematic reveal | 800–1500ms | Hero moments, first impressions |
| Loading/waiting | Match actual load time | Never fake a longer wait |

**Rule of thumb:** If unsure, start at 500ms with the Apple ease curve `[0.25, 0.1, 0.25, 1.0]` and adjust from there.
