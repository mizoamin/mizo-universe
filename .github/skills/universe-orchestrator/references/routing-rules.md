# Routing Rules

Decision trees for the Orchestrator to determine which agents to invoke and in what order.

## Quick Classification

Ask these questions about the incoming request:

### 1. Does this need planning?

- **Yes** → Start with @Planner (any multi-step or cross-system task)
- **No** → Only for trivial, single-file, low-risk changes (typo fixes, copy updates)

### 2. Does this involve assets?

- **Yes** → Include @MediaArchitect before @Coder
- Image additions, texture swaps, model imports, asset pipeline changes

### 3. Does this involve visual design?

- **Yes** → Include @Designer before or alongside @Coder
- UI layouts, animations, color/typography, glassmorphism, spatial UX

### 4. What is the primary domain?

Route to the primary agent, then follow with quality gates:

| Domain | Primary | Required Gates |
|--------|---------|---------------|
| 3D / R3F / camera / post-processing | @Coder (with `universe-builder` skill) | @QA |
| UI / layout / animation | @Designer → @Coder | @QA |
| Routing / pages / App Router | @Coder | @SEO, @QA |
| State management / Zustand | @Coder | @QA |
| Asset pipeline / images | @MediaArchitect | @SEO, @QA |
| Security hardening | @Security | @Coder (remediation) |
| SEO / metadata / structured data | @SEO | @Coder (implementation) |
| Performance optimization | @Coder | @QA |
| Bug fix (isolated) | @Coder | @QA |
| Bug fix (cross-system) | @Planner → @Coder | @Security, @QA |
| Architecture / refactor | @Planner | None (plan only until approved) |
| New planet (full) | @Planner → @MediaArchitect → @Coder | @Designer, @Security, @SEO, @QA |

## Flow Templates

### Template A: Full Feature

```
@Planner → user approval → @MediaArchitect → @Designer → @Coder → @Security → @SEO → @QA
```

Use for: new planets, new pages, major new functionality.

### Template B: Code Change

```
@Planner → user approval → @Coder → @Security → @QA
```

Use for: feature implementation, bug fixes, performance work, state changes.

### Template C: Visual Change

```
@Designer → @Coder → @QA
```

Use for: UI polish, animation tweaks, layout adjustments, brand consistency.

### Template D: Asset Work

```
@MediaArchitect → @SEO → @Coder (integration) → @QA
```

Use for: image pipeline, texture management, model imports, CDN optimization.

### Template E: Audit Only

```
@Security and/or @SEO and/or @QA
```

Use for: health checks, compliance reviews, performance audits. No code changes.

### Template F: Trivial Change

```
@Coder → @QA
```

Use for: typo fixes, copy updates, config value changes. Skip planning when risk is near zero.

## Escalation Rules

| Condition | Action |
|-----------|--------|
| @Coder unsure about architectural impact | Escalate to @Planner for impact analysis before proceeding |
| @Designer and @Coder disagree on implementation | @Designer's aesthetic judgment wins; @Coder adapts |
| @Security finds critical vulnerability | Block all other work; prioritize remediation |
| @QA finds regression in core flow | Block shipping; route to @Coder with full reproduction steps |
| Task scope grows beyond original plan | Pause execution; return to @Planner for revised plan |
