# State Machine

Complete reference for the Mizo Universe experience state machine. All UX flow decisions derive from this.

## Store: `useExperience` (Zustand)

**File:** `src/engine/experienceStore.ts`

```typescript
type Mode = "free" | "approach" | "isolation" | "enter"

interface ExperienceState {
  mode: Mode                           // Current experience phase
  activePlanet: string | null          // Planet ID in focus (null = none)
  setMode: (mode: Mode) => void        // Transition mode
  setPlanet: (id: string | null) => void // Set/clear focused planet
  resetExperience: () => void          // Return to free mode, clear planet
}
```

## Mode Lifecycle

### `free` — God View Exploration

**What the user sees:** Full solar system, orbiting planets, starfield parallax.
**What the user can do:** Click any planet, orbit with mouse/touch, pointer parallax.
**Camera:** Default position `(0, 80, 160)`, FOV 40°, parallax follows pointer.
**Post-processing:** Full stack minus DOF.
**UI visible:** None (PlanetCard hidden).

**Transitions out:**
| Action | Target | Handler |
|--------|--------|---------|
| Click a planet | `approach` | `BasePlanet.handleClick()` → `setPlanet(id)` + `setMode("approach")` |

### `approach` — Warp Toward Planet

**What the user sees:** Camera rushing toward the clicked planet, FOV expanding to 65° (warp speed effect).
**What the user can do:** Click the same planet again to advance.
**Camera:** Lerping toward planet position, FOV expanding.
**Post-processing:** Full stack minus DOF.
**UI visible:** None.

**Transitions out:**
| Action | Target | Handler |
|--------|--------|---------|
| Click same planet | `isolation` | `BasePlanet.handleClick()` → `setMode("isolation")` |
| Click sun | `free` | Sun hitbox `onClick` → `resetExperience()` |
| Double-click background | `free` | `UniverseCanvas` container `onDoubleClick` → `handleReset()` |
| Click empty space | `free` | Canvas `onPointerMissed` → `handleReset()` |

### `isolation` — Cinematic Planet Focus

**What the user sees:** Planet filling viewport with cinematic hover (sine/cosine bob), shallow DOF blurring background, FOV narrowed to 28°.
**What the user can do:** Click to enter, or reset to free.
**Camera:** Positioned near planet with drone hover oscillation.
**Post-processing:** DOF active (bokeh 3.0), full desktop stack.
**UI visible:** None (PlanetCard waits for `enter`).

**Transitions out:**
| Action | Target | Handler |
|--------|--------|---------|
| Click same planet | `enter` | `BasePlanet.handleClick()` → `setMode("enter")` |
| Click sun | `free` | Sun hitbox `onClick` → `resetExperience()` |
| Double-click background | `free` | `UniverseCanvas` container `onDoubleClick` → `handleReset()` |
| Click empty space | `free` | Canvas `onPointerMissed` → `handleReset()` |

### `enter` — Planet Domain Entry

**What the user sees:** Planet descends (`targetDescentY = -size * 3.5`), glassmorphic PlanetCard rises from bottom, pulsing "System Active" indicator.
**What the user can do:** Click "ENTER DOMAIN" button to navigate, or reset.
**Camera:** Same as isolation with descent tracking.
**Post-processing:** DOF active.
**UI visible:** PlanetCard bottom panel with planet name, description, enter button.

**Transitions out:**
| Action | Target | Handler |
|--------|--------|---------|
| Click "ENTER DOMAIN" | Route push + `free` | `PlanetCard.handleEnterDomain()` → `setIsWarping(true)` → `resetExperience()` + `router.push(route)` after 800ms |
| Click sun | `free` | Sun hitbox → `resetExperience()` |
| Double-click background | `free` | Container → `handleReset()` |
| Click empty space | `free` | Canvas `onPointerMissed` → `handleReset()` |

## Reset Paths (Always Available)

From **any mode**, the user can return to `free` via:

| Method | Component | Action |
|--------|-----------|--------|
| Click the sun | `TheSolarSystem` sun hitbox | `onPlanetFocus(null)` + `resetExperience()` |
| Double-click anywhere | `UniverseCanvas` container | `setActivePlanet(null)` + `resetExperience()` |
| Click empty space | Canvas `onPointerMissed` | `setActivePlanet(null)` + `resetExperience()` |
| Double-click void sphere | Background mesh (r=9000) | `handleReset()` |

## Planet Descent Behavior

When mode transitions to `enter`, BasePlanet smoothly lerps the planet's Y position downward:

```
targetY = -size * 3.5
smoothFactor = 1 - Math.pow(0.001, delta)
position.y = lerp(position.y, targetY, smoothFactor)
```

This creates a "planet sinking into dock" effect, making room for the PlanetCard UI above.

## Warp-to-Route Sequence

When the user clicks "ENTER DOMAIN" in PlanetCard:

```
1. setIsWarping(true)          → WarpTransition mounts (white flash)
2. Wait 800ms                  → Flash peak
3. resetExperience()           → Store returns to free
4. router.push(targetRoute)    → Next.js navigates to /planet/[id] or /[id]
```

Reduced-motion variant: 400ms dark fade instead of white flash.

## State Diagram (ASCII)

```
                  click planet
    ┌───────┐ ──────────────────► ┌──────────┐
    │ FREE  │                     │ APPROACH  │
    │       │ ◄──── reset ─────── │           │
    └───────┘                     └─────┬─────┘
        ▲                               │ click planet
        │                               ▼
        │ reset                   ┌───────────┐
        │ ◄────────────────────── │ ISOLATION  │
        │                         └─────┬──────┘
        │                               │ click planet
        │                               ▼
        │ reset + route push      ┌───────────┐
        └──────────────────────── │   ENTER    │
                                  └────────────┘
```
