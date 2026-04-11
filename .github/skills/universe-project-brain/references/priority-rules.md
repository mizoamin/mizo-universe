# Priority Rules

How the Project Brain determines what to work on next. Apply these rules in order — the first matching rule wins.

## Priority Tiers

### Tier 1 — Critical Path (Blocking)

Items that block other work or affect the live experience:

1. **Broken functionality** — if something that worked before is now broken, fix it immediately
2. **Security vulnerabilities** — any finding from @Security audit gets immediate attention
3. **Build failures** — if `next build` or `next lint` fails, unblock first

### Tier 2 — High Impact (Wiring & Integration)

Items that unlock already-built work:

1. **Wire built planets** — Odyssey, Ventures, Library, and Contact are fully implemented but not visible in the solar system. Wiring them into `TheSolarSystem.tsx` `PlanetVisuals` dictionary has the highest effort-to-impact ratio
2. **Build real planet landing pages** — all 10 planet routes (`/identity`, `/legacy`, etc.) render placeholder "under construction" pages, not the actual 3D planet experiences
3. **Implement empty stubs that other systems depend on** — e.g., `deviceProfiles.ts` gates adaptive quality

### Tier 3 — Feature Completion

Building the remaining unimplemented planets:

1. **Voice Planet** — empty stub, needs full implementation
2. **Videogram Planet** — empty stub, needs full implementation
3. **Shield Planet** — empty stub, needs full implementation (security/privacy theme)

### Tier 4 — Polish & Infrastructure

Items that improve quality but don't add visible features:

1. **NavigationHUD** — global nav stub, users currently have no persistent navigation
2. **Device profiling** — `deviceStore.ts` + `deviceProfiles.ts` for automatic quality selection
3. **Performance monitoring** — `performance.ts` for FPS tracking
4. **Shared utilities** — `mathUtils.ts`, `useCinematicLerp.ts`
5. **ShootingStars** — particle trails (Phase 5 visual polish)
6. **SEO config** — per-planet metadata optimization

## Decision Framework

When multiple items exist in the same tier, rank by:

| Factor | Weight | Question |
|--------|--------|----------|
| **User impact** | High | Will users see/feel this immediately? |
| **Effort** | Medium | How many files and how much code? |
| **Risk** | High | Could this break existing systems? Low risk wins. |
| **Dependencies** | Medium | Does this unblock other work? |
| **Completeness** | Low | Does this close out a category to 100%? |

## Current Priority Queue (auto-derived from codebase scan)

Based on verified codebase state as of March 26, 2026:

1. **Build planet landing pages** (Tier 2 — all 10 planet routes are placeholder "under construction" pages, not actual experiences)
2. **Implement Voice Planet** (Tier 3 — empty stub)
3. **Implement Videogram Planet** (Tier 3 — empty stub)
4. **Implement Shield Planet** (Tier 3 — empty stub)
5. **Implement NavigationHUD** (Tier 4 — users have no persistent nav)
6. **Implement deviceStore + deviceProfiles** (Tier 4 — needed for mobile quality)
7. **Implement seoConfig.ts** (Tier 4 — per-planet metadata missing)

**Completed:** Wire 4 built planets into TheSolarSystem.tsx (was #1 — done March 26, 2026)

**Note:** This queue should be recalculated after every significant task completion by re-scanning the codebase.
