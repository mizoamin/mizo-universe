---
name: universe-project-brain
description: "Persistent project intelligence system that tracks structure, progress, memory, and evolution of Mizo Universe. Use when: checking project status, tracking completion percentage, auditing what is done vs TODO, onboarding a new AI model to the project, updating progress after completing work, identifying next priorities, maintaining cross-session memory, reviewing architecture health, or planning the project roadmap."
argument-hint: "Ask about project status, progress, next steps, or request a progress update"
---

# Universe Project Brain

Persistent intelligence system for the Mizo Universe project — tracks what's built, what's pending, and what's next. Ensures any AI model (Claude, GPT, Copilot) can understand the full project state instantly.

This is NOT a documentation generator. This is the **memory and strategic brain** of the entire project.

## When to Use

- Checking current project completion status and percentages
- Onboarding: getting any AI model up to speed on the full architecture
- Updating progress after completing a feature or fix
- Identifying the highest-priority next task
- Auditing architecture health (what stubs exist, what's wired, what's missing)
- Planning the next phase of development
- Maintaining cross-session continuity (what was decided before, what was done)
- Comparing current state against the master plan

## Project Knowledge Files

The project state lives in these files. Always read before answering project status questions.

| File | Purpose | Authority |
|------|---------|-----------|
| [STATUS.md](../../../STATUS.md) | Comprehensive technical audit — every planet, system, and checklist | **Ground truth** for what exists and works |
| [MIZO_MASTER_PLAN.md](../../../MIZO_MASTER_PLAN.md) | Architecture vision, philosophy, folder structure, non-negotiable rules | **Ground truth** for architectural decisions |
| `src/config/planetMetadata.ts` | All 10 planets defined with orbit, speed, accent, route | **Ground truth** for planet data |
| `src/engine/experienceStore.ts` | Zustand state machine (modes, planet focus) | **Ground truth** for UX state |

See [Project Anatomy](./references/project-anatomy.md) for the full system map.

## Execution Workflow

### Task: Check Project Status

1. Read `STATUS.md` section 5 (Master Checklist)
2. Count completed `[x]` vs pending `[ ]` items
3. Compute per-category and overall percentages
4. Report in the [Progress Format]

### Task: Onboard a New Session

1. Read `STATUS.md` sections 1–3 (overview, planets, engine)
2. Read `MIZO_MASTER_PLAN.md` sections 1–3 (vision, philosophy, architecture)
3. Summarize: tech stack, planet count, what's implemented, what's pending
4. List the top 3 highest-priority pending items

### Task: Update Progress After Work

1. Identify what was completed
2. Update the relevant checklist in `STATUS.md`
3. Recalculate percentages
4. Flag any new items that emerged from the work

### Task: Identify Next Priority

1. Read pending items from `STATUS.md` checklist
2. Apply priority logic from [Priority Rules](./references/priority-rules.md)
3. Recommend the single highest-impact next task with rationale

### Task: Architecture Health Audit

1. Scan for stub files (empty `.ts` files in `src/config/`, `src/engine/`, `src/lib/`)
2. Check which planets are implemented but not wired into `TheSolarSystem.tsx`
3. Verify all routes resolve (planet pages exist for all metadata entries)
4. Report gaps with severity (critical / important / nice-to-have)

## Progress Format

When reporting progress, use this structure:

```
## Mizo Universe — Progress Report

**Overall: XX% complete** (N/M checklist items)

| Category | Done | Total | % |
|----------|------|-------|---|
| Planet Modules | X | 10 | X% |
| Solar System Wiring | X | 10 | X% |
| Core Engine & Config | X | Y | X% |
| 3D Core | X | Y | X% |
| UI Components | X | Y | X% |
| Performance Standards | X | Y | X% |

### Top Pending Items
1. [highest priority item]
2. [second priority]
3. [third priority]
```

## Cross-Model Translation

When explaining project state, adapt depth to the audience:

| Audience | Format |
|----------|--------|
| **Quick status** | One-line summary + percentage |
| **Human overview** | 3-paragraph narrative: what it is, where it stands, what's next |
| **Developer handoff** | Tech stack, file map, current blockers, pending items with file paths |
| **AI agent context** | Structured data: completed items, pending items, architecture constraints, priority queue |

## Hard Rules

1. **Never guess project status** — always read `STATUS.md` before reporting
2. **Never update docs without verifying** — confirm the work actually exists in code before marking complete
3. **Never lose context** — if a decision was made, record it; if a task was completed, mark it
4. **Never contradict the master plan** — `MIZO_MASTER_PLAN.md` defines architecture philosophy; respect it
5. **Always identify stubs** — empty files are technical debt; track them explicitly
6. **Always suggest next steps** — a progress report without recommendations is incomplete

## Reference Files

- [Project Anatomy](./references/project-anatomy.md) — full system map, file status, and wiring state
- [Priority Rules](./references/priority-rules.md) — how to determine what to work on next
