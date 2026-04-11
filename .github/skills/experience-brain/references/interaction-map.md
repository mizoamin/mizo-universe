# Interaction Map

Every interactive element in the Mizo Universe, what it does, and which component owns it.

## 3D Canvas Interactions

### Sun Hitbox

| Property | Value |
|----------|-------|
| **File** | `src/components/3d/systems/TheSolarSystem.tsx` |
| **Element** | Invisible `<mesh>` wrapping `<SunCore>` (`sphereGeometry` radius 16) |
| **onClick** | `onPlanetFocus(null)` + `resetExperience()` → returns to `free` mode |
| **onPointerOver** | `cursor: pointer` |
| **onPointerOut** | `cursor: auto` |
| **Purpose** | Universal reset — clicking the sun always returns to god view |

### Planet Hitbox (BasePlanet)

| Property | Value |
|----------|-------|
| **File** | `src/components/3d/planets/BasePlanet.tsx` |
| **Element** | Invisible `<mesh>` (`sphereGeometry` radius `size × 3`) around each planet |
| **onClick** | Progressive state machine (see below) |
| **onPointerOver** | `cursor: pointer` + `stopPropagation` |
| **onPointerOut** | `cursor: auto` + `stopPropagation` |

**Click State Machine:**

| Current Mode | Click Result |
|-------------|-------------|
| `free` | `setPlanet(id)` + `setMode("approach")` + `onPlanetFocus({ name, position })` |
| `approach` | `setMode("isolation")` |
| `isolation` | `setMode("enter")` |
| `enter` | No-op (warp transition takes over) |

**Key detail:** `e.stopPropagation()` prevents click from bubbling to the sun hitbox behind it.

### Planet-Specific Interactions

Individual planet components add their own interactions inside the `<BasePlanet>` wrapper. These fire only when the planet is in isolation/enter mode.

| Planet | Interactive Elements | File |
|--------|---------------------|------|
| **Identity** | University Arc nodes (click → detail), Captain's Cluster nodes, Temporal Echo slider | `IdentityPlanet/index.tsx` |
| **Legacy** | Stairway to Glory gallery nodes, Era Slider (vertical drag), Hall of Champions nodes | `LegacyPlanet/index.tsx` |
| **Contact** | 9 Social Orbit icons (click → URL), Core mesh (click → Data Burst), Status Terminal | `ContactPlanet/index.tsx` |
| **Library** | Cloud Gallery cluster spheres (click → filter), Carousel columns (scroll/browse) | `LibraryPlanet/index.tsx` |
| **Odyssey** | Globe pins (click → fly-to slerp + tooltip), Travel Log buttons (click → fly-to), Country markers | `OdysseyPlanet/index.tsx` |
| **Ventures** | Hexagonal Gallery nodes, Code Terminal | `VenturesPlanet/index.tsx` |

## HTML Overlay Interactions

### IntroPortal

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/IntroPortal.tsx` |
| **Element** | Main container div (hold-to-enter) |
| **onPointerDown / onTouchStart** | Start hold timer → progress 0→1 over 1500ms |
| **onPointerUp / onPointerLeave / onTouchEnd** | Cancel hold, reset progress to 0 |
| **onMouseMove** | Parallax shift (±10px translate based on pointer position) |
| **State machine** | `idle → hover → holding → ignited (75%) → complete (100%)` |
| **Completion** | Calls `onEnter()` after 800ms linger → parent sets `isIntroComplete = true` |

### PlanetOverlay

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/PlanetOverlay.tsx` |
| **Element** | Right-side slide-in panel (createPortal to body) |
| **Close button (×)** | `onClick={onClose}` → parent clears active planet |
| **"ENTER PLANET" button** | `onClick` → sets `isWarping = true` → triggers `<WarpTransition>` |
| **Cursor** | Close: `active:scale-90`, Enter: `active:scale-95` |

### WarpTransition

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/WarpTransition.tsx` |
| **Element** | Full-screen overlay (`z-[99999999]`, `pointer-events-none`) |
| **Trigger** | `triggerWarp` prop becomes `true` |
| **Action** | After 800ms (or 400ms reduced-motion) → `router.push(targetRoute)` |
| **User interaction** | None — purely visual, pointer-events disabled |

### SocialNexus

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/SocialNexus.tsx` |
| **Element** | Fixed sidebar or inline social links |
| **onClick** | Opens social media URLs (Instagram, Facebook, X, Threads, TikTok, Snapchat, LinkedIn, Wikipedia, Google) |
| **Hover** | Icon color highlight per platform |

### LoadingScreen

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/LoadingScreen.tsx` |
| **Element** | Full-screen overlay (`z-[100]`, `pointer-events-none`) |
| **User interaction** | None — display only, auto-hides after loading |

### NavigationHUD

| Property | Value |
|----------|-------|
| **File** | `src/components/ui/NavigationHUD.tsx` |
| **Status** | Empty stub — not yet implemented |
| **Planned** | Global nav, breadcrumbs, planet quick-select |

## Interaction Flow Summary

```
[IntroPortal]                    [3D Canvas]                      [HTML Overlays]
     │                                │                                │
     │  hold complete                 │                                │
     ├───────────────────────────────►│ Universe renders               │
     │                                │                                │
     │                          click planet                           │
     │                                ├──► mode: approach              │
     │                          click again                            │
     │                                ├──► mode: isolation             │
     │                                │                                │
     │                                │    PlanetOverlay shows ───────►│
     │                                │                                │
     │                          click again                            │
     │                                ├──► mode: enter                 │
     │                                │                                │
     │                                │    "ENTER PLANET" click ──────►│
     │                                │                                │
     │                                │    WarpTransition (800ms) ────►│
     │                                │                                │
     │                                │    router.push(/planet/X)      │
     │                                │                                │
     │                          click sun                              │
     │                                ├──► resetExperience()           │
     │                                │    mode: free                  │
     │                                │    PlanetOverlay closes ──────►│
```

## Pointer Events Architecture

| Layer | Z-Index | Pointer Events | Purpose |
|-------|---------|----------------|---------|
| WarpTransition | `99999999` | `none` | Visual overlay only — never blocks interaction |
| PlanetOverlay | `9999999` | `auto` (panel only) | Right panel captures clicks; left area passes through |
| LoadingScreen | `100` | `none` | Blocks nothing — display only |
| IntroPortal | `10+` | `auto` (during intro) | Captures hold gesture; removed after intro completes |
| Canvas | `0` | `auto` | R3F raycasting handles 3D element picking |
