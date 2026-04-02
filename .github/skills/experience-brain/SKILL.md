---
name: experience-brain
description: "Controls user journey, interaction logic, and UX intelligence in Mizo Universe. Use when: designing user flows, modifying click/hover/focus behavior, changing experience state transitions (free/approach/isolation/enter), adding interaction feedback, fixing dead-end UX, improving planet focus/enter sequences, designing reset behavior, managing Zustand experienceStore mode lifecycle, or deciding how any user action should feel and where it should lead."
argument-hint: "Describe the user flow, interaction, or state transition you want to design or fix"
---

# Experience Brain

Controls how users **move through** the Mizo Universe — every click, every state transition, every moment of feedback. This skill designs the interaction logic and emotional journey, then hands implementation to @Coder.

This is NOT a website. This is a **digital experience.** Every action must lead somewhere. Every moment must give feedback.

## When to Use

- Designing or modifying the user journey (entry → exploration → focus → enter → planet)
- Changing click, hover, or pointer interaction behavior on planets or UI elements
- Modifying the experience state machine (`free → approach → isolation → enter`)
- Fixing dead-end UX — places where the user gets stuck or confused
- Adding interaction feedback (visual, cursor, state)
- Designing reset/back behavior (how users return to free exploration)
- Planning the flow for a new planet or feature
- Auditing the emotional journey (does the user feel power, curiosity, control, immersion?)

## Emotional Design Goals

Every moment in the experience should evoke one of these:

| Emotion | When | How |
|---------|------|-----|
| **Power** | Holding to ignite intro, clicking a planet | User controls the moment — nothing happens without their intent |
| **Curiosity** | Free exploration, parallax orbit | Planets orbit, stars scroll, the universe invites discovery |
| **Control** | State transitions, reset gestures | Every action has a clear response; user always knows how to go back |
| **Immersion** | Isolation hover, planet page entry | Camera, DOF, UI all conspire to make the planet feel real |

## The Experience State Machine

The core of all UX logic. See [State Machine](./references/state-machine.md) for the complete reference.

```
                    ┌─────────────────────────────────┐
                    │                                 │
 ┌──────┐  click   │  ┌──────────┐  click  ┌─────────┴──┐  click  ┌───────┐
 │ FREE ├──────────┼─►│ APPROACH ├────────►│ ISOLATION  ├────────►│ ENTER │
 └──┬───┘          │  └──────────┘         └────────────┘         └───┬───┘
    │               │                                                  │
    │  ◄────────────┘  (sun click / double-click / pointer miss)       │
    │                                                                  │
    │  ◄──────────────────────────────────────────────────────────────┘
    │                    (warp → route push → resetExperience)
```

**Rule:** Never skip states. `free → approach → isolation → enter` is the only forward path. Any reset returns to `free`.

## Execution Workflow

### Step 1 — Map the Current Flow

Before changing anything:
1. Trace the user action from trigger to final state
2. Identify which components are involved (see [Interaction Map](./references/interaction-map.md))
3. Check: does the current flow have dead ends, missing feedback, or confusing moments?

### Step 2 — Design the Interaction

For each interaction change, specify:

| Field | Description |
|-------|-------------|
| **Trigger** | What the user does (click, hover, hold, scroll, gesture) |
| **Input state** | What experience mode must be active for this to work |
| **Output state** | What mode/state results from the action |
| **Feedback** | What the user sees/feels immediately (cursor change, animation, sound) |
| **Guard** | Any conditions that prevent the action (e.g., "only if planet is active") |
| **Fallback** | What happens if the guard fails (e.g., "no-op" or "reset to free") |

### Step 3 — Verify No Dead Ends

For every state the user can reach, confirm:
1. There is a **visible way forward** (next action is discoverable)
2. There is a **way back** (reset path exists)
3. There is **immediate feedback** (user knows their action was received)

### Step 4 — Integration Instructions

Hand off to @Coder with:
1. Which files to modify (from the [Interaction Map](./references/interaction-map.md))
2. Which store actions to call and in what order
3. What feedback to add (cursor, animation, UI)
4. Updated state transition diagram if the flow changed

## Interaction Principles

| Principle | Rule |
|-----------|------|
| **No dead ends** | Every state has a forward path and a back path |
| **Always feedback** | Every user action produces a visible response within 100ms |
| **Progressive disclosure** | Show only what's relevant to the current mode |
| **Forgiveness** | Mistakes are easy to undo — double-click, pointer-miss, and sun-click all reset |
| **Intent-driven** | Major transitions require deliberate action (click, not hover) |
| **Cursor as language** | `pointer` = clickable, `auto` = no action, `grab` = draggable |

## Hard Rules

1. **Never skip states** — the mode lifecycle is `free → approach → isolation → enter`, always in order
2. **Always provide reset** — from any state, the user must be able to return to `free`
3. **No silent failures** — if an action can't proceed, show why or offer an alternative
4. **Pointer events respect z-layers** — HTML overlays (z-10+) must not leak clicks to WebGL (z-0)
5. **Touch targets ≥ 44×44px** — all interactive elements meet WCAG touch target minimums
6. **No mode changes in useFrame** — state transitions happen in event handlers, never in the render loop

## Reference Files

- [State Machine](./references/state-machine.md) — complete mode lifecycle, transitions, guards, and reset paths
- [Interaction Map](./references/interaction-map.md) — every interactive element, its handlers, and which components own it
