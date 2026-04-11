# Mizo Universe — TODO & Roadmap

> Phases are ordered by priority. Each item is actionable and maps to a specific file or system.
> **Last verified:** March 26, 2026 — full codebase scan

---

## Phase 2 — Wire Built Planets & Core Infrastructure

> **Priority:** CRITICAL — 4 planets are fully built but invisible in the solar system.

### Solar System Wiring
- [x] Wire **Odyssey Planet** into `TheSolarSystem.tsx` PlanetVisuals dictionary ✅
- [x] Wire **Ventures Planet** into `TheSolarSystem.tsx` PlanetVisuals dictionary ✅
- [x] Wire **Library Planet** into `TheSolarSystem.tsx` PlanetVisuals dictionary ✅
- [x] Wire **Contact Planet** into `TheSolarSystem.tsx` PlanetVisuals dictionary ✅

### Planet Landing Pages
- [x] Build real `/identity` landing page — PlanetPageLayout + StatPulse milestones ✅
- [x] Build real `/legacy` landing page — PlanetPageLayout + StatPulse + ThoughtStream heritage ✅
- [x] Build real `/vision` landing page — PlanetPageLayout + ProjectOrbit + AI blog ✅
- [x] Build real `/odyssey` landing page — PlanetPageLayout + StatPulse + ThoughtStream ✅
- [x] Build real `/ventures` landing page — PlanetPageLayout + ProjectOrbit + StatPulse ✅
- [x] Build real `/library` landing page — PlanetPageLayout + ThoughtStream ✅
- [x] Build real `/contact` landing page — PlanetPageLayout + ContactForm ✅

### Core Engine Stubs
- [x] Implement `deviceStore.ts` — Zustand device tier detection + profile injection ✅
- [x] Implement `deviceProfiles.ts` — 5 tiers (mobile/tablet/desktop/ultra/vision-pro) with full rendering caps ✅
- [x] Implement `NavigationHUD.tsx` — Glassmorphism HUD with planet radar, warp, location, audio toggle, ENCRYPTED stubs ✅

---

## Phase 3 — Build Remaining Planets

> **Priority:** HIGH — All 10 planets now fully implemented and navigable.

- [x] **Voice Planet** — Podcasts, interviews, audio content ✅
- [x] **Videogram Planet** — Video content, production showcase ✅
- [x] **Shield Planet** — Privacy, security, legal information ✅

Each planet:
1. `index.tsx` — Main component with 3D scene, interactive systems, lighting rig
2. `skins.ts` — Visual design configuration (materials, colors, spring physics)
3. Wired into `TheSolarSystem.tsx` PlanetVisuals dictionary
4. Textures placed in `public/textures/planets/{name}/default/`

---

### Phase 10 — Last Frontiers & Sonic Immersion

> **Priority:** CRITICAL — 100% universe navigation and sensory immersion achieved.

### Planet Unlock Sequence
- [x] **Voice Planet:** implemented and fully integrated ✅
- [x] **Videogram Planet:** implemented with video overlay, cinematic transitions ✅
- [x] **Shield Planet:** implemented with security/legacy features ✅

### Sonic Engine
- [x] Audio store, SFX, ambient loop, and HUD/warp SFX complete ✅

### Metadata & Registry Alignment
- [x] All planet metadata, categories, and hero textures updated ✅

### Phase 10/11 Acceptance Criteria
- [x] 10/10 planets are navigable from HUD with no ENCRYPTED states ✅
- [x] 10/10 planet routes use production-grade experience pages (no placeholders) ✅
- [x] Cinematic Grand Tour mode (all 10 planets, GSAP transitions, HUD toggle, video overlay) ✅
- [x] Global mute preference persists across reloads ✅
- [x] TypeScript + ESLint pass with zero errors ✅

### Next Bottleneck
	- build 3D glitch-grid visual module
	- transform `/videogram` route to full PlanetPageLayout
	- mark HUD status READY and increase active nodes to 9/10
	- Minor performance optimization for 60FPS on low-end devices
	- Final Lighthouse audit and mobile QA

## Phase 12 — Self-Evolution Engine Activation

> **Priority:** HIGHEST — Enable continuous, autonomous system improvement and real-time dashboard reporting.

### Self-Evolution Engine
- [x] Implement autonomous agent to scan architecture.md, progress.md, and todo.md
- [x] Detect incomplete, partial, or outdated modules automatically
- [x] Generate and append improvement suggestions to todo.md and progress.md
- [x] Output a live dashboard (system health, progress, bottlenecks) after each major action

### Auto-Learning Agents
- [x] Add agent memory and feedback loops to learn from past outputs and errors

### Automated SEO/Performance Optimization
- [x] Complete and polish per-planet SEO metadata ✅
- [x] Complete and polish performance.ts (FPS monitoring) ✅
- [x] Complete and polish mathUtils.ts (shared math utilities) ✅
- [x] Complete and polish usePlanetTextures.ts (planet texture loader) ✅
- [ ] Add automated SEO audits and suggestions
- [ ] Profile and optimize for 60FPS on low-end devices
- [ ] Automate Lighthouse and device-tier QA

## Autonomous Loop — Continuous Improvement

- [x] Consolidate duplicate Phase 12 sections in docs/todo.md into a single source of truth.
- [ ] Prioritize stub completion for SEO and runtime performance utilities before new feature expansion.
- [x] Update docs/architecture.md to reflect current solar system wiring and active planet count.
- [ ] Raise risk level from Low while high-severity documentation drift remains unresolved.
- [x] Add shared texture cache/preload strategy for CinematicMode and planet modules to reduce first-focus hitching.

After every execution cycle:
1. Analyze what shipped and what failed
2. Identify new bottlenecks and regression risk
3. Add/adjust tasks in this roadmap
4. Update `docs/progress.md` system status block
5. Re-rank next priority by impact (user journey first)

---

## Phase 4 — SEO & Metadata

> **Priority:** HIGH — Required for Google ranking goals.

- [x] Implement `seoConfig.ts` — per-planet meta tags, OpenGraph, Twitter cards (bilingual EN/AR registry, `buildPlanetMetadata()` helper)
- [x] Add JSON-LD structured data — `buildPersonJsonLd()` (Professional Athlete), `buildOrganizationJsonLd()` (Business Entity), `buildVideoJsonLd()`, `buildPlanetPageJsonLd()`
- [x] Dynamic OG images — `/api/og?planet={id}` Edge runtime `ImageResponse`, themed 1200×630 per planet ✅
- [x] Verify sitemap covers all dynamic routes — 10/10 planets + 11 blog categories + all posts ✅
- [ ] Core Web Vitals audit (LCP < 2.5s, FID < 100ms, CLS < 0.1)

---

## Phase 5 — Polish & Effects

> **Priority:** MEDIUM — Visual polish and particle systems.

- [x] Implement `ShootingStars.tsx` geometry — 60-trail particle system with instanced line geometry, seeded random launch, frame-rate-independent fade
- [x] Implement `performance.ts` — FrameBudgetMonitor with rolling FPS sampler, light-mode trigger, recovery callback, global singleton
- [x] Implement `mathUtils.ts` — lerp, dampLerp, tickSpring, clamp, remap, smoothStep/erStep, fibonacciSphere, latLngToXYZ, haversineDistance, seededRandom, lerpHex
- [x] Implement `useCinematicLerp.ts` — reusable cinematic interpolation hook (dampNumber, dampVector3, dampEulerY)
- [x] Implement `usePlanetTextures.ts` — planet texture loader hook with cache, preload, and safe fallback
- [x] Global UI polish — breadcrumb navigation (`Universe / PlanetName` in fixed header), planet-to-planet navigation (prev/next planet links at page bottom), responsive `sizes` on blog post card images ✅

---

## Phase 6 — Asset Pipeline Optimization

> **Priority:** MEDIUM — Performance at scale.

- [x] Optimize image loading — responsive `sizes` attributes on all `next/image` components in PlanetPageLayout, correct `loading="lazy"` on non-priority images ✅
- [ ] Optimize 20k asset loading — progressive JPEG/WebP conversion for Hostinger-hosted images (requires CDN/media pipeline tool)
- [ ] Implement batch lazy loading across all planets (not just Library)
- [x] Asset alt-text — all `next/image` components use descriptive `alt` text from Sanity `altText` field or post title fallback ✅
- [x] CDN caching headers optimization — `/images/` (1d SWR), `/audio/` (7d immutable), `/api/og` (1h SWR), `/textures/` + `/fonts/` + `/models/` (1yr immutable) ✅

---

## Phase 7 — Testing & Deployment

> **Priority:** LOW (until Phase 2-4 complete)

- [ ] Production build optimization (bundle analysis, tree shaking)
- [ ] Mobile testing — touch targets ≥44x44px, orientation changes, canvas resize
- [ ] Foldable device testing — Galaxy Z Fold, Pixel Fold
- [ ] Apple Vision Pro spatial browsing compatibility
- [ ] 4K/8K display scaling verification
- [ ] Lighthouse audit (target: 90+ across all categories)
- [ ] Google Search Console submission and verification

---

## Completed

- [x] Identity Planet — Crystal Emerald (fully implemented + skins.ts)
- [x] Legacy Planet — Trophy Gold (fully implemented + skins.ts)
- [x] Vision Planet — Neural Sapphire (fully implemented + skins.ts + DNAHelix.tsx + personaSignatures.ts)
- [x] Odyssey Planet — 8K Earth Globe (built + skins.ts, not wired)
- [x] Ventures Planet — Business Empire (built + skins.ts, not wired)
- [x] Library Planet — Obsidian Knowledge (built + skins.ts, not wired)
- [x] Contact Planet — Neural Satellite (built + skins.ts, not wired)
- [x] Identity, Legacy, Vision — wired into TheSolarSystem.tsx
- [x] Odyssey, Ventures, Library, Contact — wired into TheSolarSystem.tsx (lazy imports)
- [x] PlanetPageLayout.tsx — Cinematic landing page template (Server Component)
- [x] ScrollFadeHero.tsx — Zero-re-render scroll parallax client component
- [x] StatPulse.tsx — Animated career stat widget
- [x] ProjectOrbit.tsx — Horizontal project slider widget
- [x] ThoughtStream.tsx — Quote card with share functionality
- [x] planetPageConfig.ts — Bilingual Mizo-Voice descriptions + category mapping
- [x] blogQueries.ts — `getPostsByCategorySlugs()` multi-category query
- [x] Odyssey landing page fully transformed (Server Component + widgets)
- [x] Ventures landing page — ProjectOrbit + StatPulse + Business blog
- [x] Library landing page — ThoughtStream + Reads/Mindset blog
- [x] Identity landing page — StatPulse personal milestones + hero texture
- [x] Legacy landing page — StatPulse heritage + ThoughtStream dynasty
- [x] Vision landing page — ProjectOrbit innovation lab + AI/Tech blog
- [x] Contact landing page — ContactForm inquiry widget
- [x] Stealth Mode fallback UI for empty blog categories
- [x] planetPageConfig.ts — hero textures added for Identity + Legacy (visual continuity)
- [x] `deviceStore.ts` — Zustand device tier detection + adaptive profile injection
- [x] `deviceProfiles.ts` — 5 device tiers (mobile/tablet/desktop/ultra/vision-pro) with full rendering caps
- [x] `NavigationHUD.tsx` — Glassmorphism HUD with planet radar, warp triggers, location display, audio toggle, ENCRYPTED stubs
- [x] `experienceStore.ts` — Zustand state machine
- [x] `planetMetadata.ts` — All 10 planets configured
- [x] `resolvers.ts` — Asset pipeline (resolve, filter, tags, years)
- [x] `personaSyndicate.ts` + `visionCategories.ts` — Config data
- [x] `UniverseCanvas.tsx` — Canvas with CameraFOVAdapter
- [x] `CinematicCameraController.tsx` — 4-mode camera system
- [x] `SunCore.tsx` — Delta-based rotation sun
- [x] `BasePlanet.tsx` — Orbit + isolation + enter
- [x] `PostProcessing.tsx` — 3-tier adaptive pipeline
- [x] `BackgroundStars.tsx` — 8000 particle starfield
- [x] `IntroSpaceEffects.tsx` — 7000 intro star particles
- [x] `Intro3DAvatar.tsx` — 3-state texture billboard
- [x] `IntroOverlay.tsx` + `IntroPortal.tsx` — Intro sequences
- [x] `LoadingScreen.tsx` — Progress bar
- [x] `PlanetOverlay.tsx` — Planet info panel
- [x] `WarpTransition.tsx` — WCAG-compliant warp
- [x] `PlanetCard/index.tsx` — Enter-mode trigger
- [x] `SocialNexus.tsx` — Social links
- [x] All 17 routes created (10 planet + blog + admin + dynamic)
- [x] Blog system (Sanity schemas + AI generation + webhooks + SEO engine)
- [x] `BlogContent.tsx` — Portable Text renderer with custom blocks
- [x] `StandardLayout.tsx` — Semantic HTML + JSON-LD BreadcrumbList
- [x] `middleware.ts` — Route protection + rate limiting + slug redirect
- [x] All performance standards implemented
