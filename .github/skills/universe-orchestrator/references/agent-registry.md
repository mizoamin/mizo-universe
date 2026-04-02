# Agent Registry

Complete reference of all agents in the Mizo Universe system. The Orchestrator uses this to delegate tasks correctly.

## Agent Map

### @Planner — Senior System Architect

**File:** `agents/planner.agent.md`
**Tools:** `codebase`, `githubRepo`, `search`, `usages`, `problems`

**Owns:**
- Impact analysis of proposed changes on Next.js App Router / React Three Fiber architecture
- Phase-by-phase roadmaps with dependencies and rollback plans
- Identifying breaking changes and performance bottlenecks

**Produces:** Markdown plan documents. Never writes code.

**Invoke when:** Any non-trivial task needs scoping, risk assessment, or multi-step planning.

---

### @Coder — Senior Next.js & Three.js Engineer

**File:** `agents/coder.agent.md`

**Owns:**
- Writing high-performance, type-safe code (App Router, Server Components, R3F)
- Surgical edits scoped to the Planner's strategy
- Before/After diffs for user review

**Constraints:**
- Only edits files specified in the plan
- Must follow the `universe-builder` skill rules (zero-alloc render loops, config-driven planets, etc.)

**Invoke when:** Implementation is needed — features, bug fixes, optimizations, refactors.

---

### @Designer — Senior UI/UX & Spatial Design Expert

**File:** `agents/designer.agent.md`

**Owns:**
- Spatial UI standards: glassmorphism, depth, premium motion
- 3D navigation intuitiveness and brand consistency
- Responsiveness across mobile to high-end desktop

**Authority:** Can override @Coder if UI implementation looks "cheap" or generic.

**Invoke when:** Task involves visual design, layout, animation feel, or brand aesthetics.

---

### @MediaArchitect — Asset Logistics Specialist

**File:** `agents/media.agent.md`

**Owns:**
- 20,000+ image ecosystem: categorization, tagging, folder mapping
- WebP conversion, lazy-loading, responsive `srcset`
- Legacy Hostinger JSON metadata sync with Next.js

**Collaborates with:** @SEO for alt-text and file naming standards.

**Invoke when:** Task involves images, textures, models, asset pipeline, or media optimization.

---

### @Security — Senior Cyber Security Engineer

**File:** `agents/security.agent.md`

**Owns:**
- XSS, SQLi, Prototype Pollution scanning (including R3F-specific vectors)
- Secrets management validation (no `.env`/API key leaks to client)
- Security headers audit (CSP, HSTS, X-Frame-Options)
- Media payload validation

**Produces:** Security Pass/Fail report. Failures route back to @Coder.

**Invoke when:** After every @Coder implementation, before shipping. Also for dedicated security audits.

---

### @SEO — Senior Search & Indexing Strategist

**File:** `agents/seo.agent.md`

**Owns:**
- Dynamic metadata tags for 20k+ assets and dynamic routes
- JSON-LD structured data (Professional Athlete, Business Entity schemas)
- Core Web Vitals monitoring (LCP/CLS)
- Sitemap and robots.txt management

**Invoke when:** After implementation, to validate SEO impact. Also for dedicated SEO strategy work.

---

### @QA — Senior QA & Responsiveness Validator

**File:** `agents/qa.agent.md`

**Owns:**
- Omni-device responsiveness: mobile, foldables, tablets, 4K/8K TVs, Apple Vision Pro
- Zero UX defects (no horizontal scroll, touch targets ≥ 44×44px, canvas resizing)
- Core Web Vitals enforcement (LCP < 2.5s, FID < 100ms, CLS < 0.1)

**Produces:** QA Pass/Fail report. Failures route to @Coder or @Designer.

**Invoke when:** Final gate before any work ships. Non-negotiable.

---

### @QA-Subagent — Test Planning & Execution

**File:** `agents/qa-subagent.agent.md`
**Tools:** `vscode`, `execute`, `read`, `agent`, `edit`, `search`, `web`, `todo`

**Owns:**
- Structured test plans (happy path, boundary, negative, concurrency, security)
- Automated test writing and execution
- Formal bug reports with reproduction steps, severity, and evidence

**Invoke when:** @QA needs detailed test execution or exploratory testing.

## Delegation Chain

```
Orchestrator
  │
  ├─► @Planner (plan) ──── user approves ────┐
  │                                           │
  ├─► @MediaArchitect (assets, if needed) ◄───┤
  ├─► @Designer (UI/UX spec, if needed) ◄─────┤
  ├─► @Coder (implementation) ◄───────────────┘
  │     │
  │     ├─► @Security (audit) ──fail──► @Coder (fix) ──► @Security (re-audit)
  │     ├─► @SEO (audit) ──fail──► @Coder (fix) ──► @SEO (re-audit)
  │     └─► @QA (final gate) ──fail──► @Coder/@Designer (fix) ──► @QA (re-test)
  │           └─► @QA-Subagent (detailed testing)
  │
  └─► Summary to user
```
