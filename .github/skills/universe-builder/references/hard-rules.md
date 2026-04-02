# Hard Rules

Non-negotiable constraints for all changes to the Mizo Universe codebase. Violations cause regressions, performance degradation, or architectural drift.

## Code Discipline

| Rule | Rationale |
|------|-----------|
| **Surgical changes only** — never rewrite entire files or systems | Preserves working behavior; isolates risk to the changed scope |
| **Never delete working logic** without explicit instruction | Prevents silent feature loss; if code runs, it has a reason |
| **Never refactor unrelated files** during a task | Scope creep introduces untested changes and review noise |
| **Show changes before applying** on risky or multi-file edits | Gives the user a rollback checkpoint and catches architectural mismatches early |
| **Scope every change to the task** — no drive-by improvements | Keeps PRs reviewable and regressions traceable |

## Architecture Constraints

| Rule | Rationale |
|------|-----------|
| **`planetMetadata.ts` is the single source of truth** for planet data | Hardcoded planet info in components drifts out of sync; metadata is the canonical registry |
| **Never hardcode planet components** — use dynamic imports keyed by planet ID | Keeps the system config-driven and extensible without touching routing code |
| **Never hardcode asset paths repeatedly** — use manifest or metadata lookups | 20,000+ assets require a single-point-of-change strategy |
| **Respect the Zustand store contract** — modes are `free → approach → isolation → enter` | Skipping states or adding ad-hoc states breaks camera, UI, and post-processing synchronization |

## Performance Constraints

| Rule | Rationale |
|------|-----------|
| **Zero allocations in render loops** — no `new` inside `useFrame` | GC pauses cause frame drops; pre-allocate with `useRef` |
| **No GPU work before intro completes** — gate with `isIntroComplete` | Prevents GPU contention during the intro sequence on mobile/low-end devices |
| **Optimize for mobile, iOS Safari, and low GPU first** | The floor defines the experience; desktop enhancements layer on top |
| **No unnecessary re-renders** — avoid state changes that don't affect visible output | React reconciliation + R3F scene sync is expensive; every render costs |

## Quality Gate

Before merging any change, confirm:

1. Existing navigation flow still works: Intro → Universe → Approach → Isolation → Enter → Planet page
2. No new objects allocated inside `useFrame` callbacks
3. Dynamic routes resolve correctly for all 10 planets
4. Mobile and low-GPU codepaths are not broken
5. `npx next lint` passes with no new warnings
