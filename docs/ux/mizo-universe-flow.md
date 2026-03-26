# Flow Specification: Mizo Universe — 3D Portfolio Experience

*Figma-ready flow documentation for the design team.*

---

## Overview

**Entry Point**: User arrives via direct link, social share, or search engine result

**Primary Goal**: User explores Mizo Amin's multi-domain identity (sports, tech, business) through an immersive 3D solar system and exits with a strong intent to collaborate or follow

**Key Success Metric**: User reaches the CTA (contact/follow action) within 3 minutes without external help

---

## User Flow

### Screen 1: Loading / Splash

**Purpose**: Set the tone; prevent blank-screen abandonment during 3D asset load

**Elements**:
- Mizo Universe wordmark (centered)
- Tagline: "Sports. Business. Technology." (or personalized variant)
- Animated loading indicator (progress ring or orbital animation)
- Muted ambient audio toggle (icon, top-right corner)

**Interactions**:
- Loading progress ring animates to 100% as assets complete
- Fade transition into main scene when ready
- Skip option if load exceeds 5 seconds (enters lower-fidelity fallback view)

**Exit**:
- → Screen 2 (Solar System) once assets loaded

---

### Screen 2: Solar System — Entry State

**Purpose**: Orient the user; establish the metaphor; invite interaction

**Elements**:
- Full-viewport 3D solar system (React Three Fiber)
- Sun at centre (represents Mizo / brand core)
- Orbiting planets, each labelled on first load:
  - Planet 1 — Sports
  - Planet 2 — Technology
  - Planet 3 — Business
  - Planet 4 — Story / Journey
  - Planet 5 — Contact
- First-visit hint overlay: *"Click any planet to explore"* (dismissible, auto-hides after 4 s)
- Mini-nav bar (bottom): planet icons with visited-state indicators
- Audio toggle (top-right)
- "About" or help icon (top-left, optional)

**Interactions**:
- **Hover planet**: Planet glows, scales up 5%, label appears above
- **Click planet**: Camera zooms to planet; PlanetInfoPanel slides in from right
- **Drag scene**: Rotate the solar system view (mouse drag / touch swipe)
- **Scroll / pinch**: Zoom in/out
- **Tab key**: Cycles keyboard focus through planets in orbital order
- **Mini-nav click**: Jumps camera to selected planet

**State transitions**:
- Visited planets: subtle brightness increase + checkmark badge on mini-nav icon
- Active (open) planet: highlighted ring in mini-nav

**Exit**:
- → Screen 3 (Planet Info Panel) on planet click

---

### Screen 3: Planet Info Panel

**Purpose**: Deliver focused content about the selected domain; maintain immersion; surface next action

**Panel layout** (right-side overlay, ~380px wide, does not fully block scene):

```
┌─────────────────────────────────┐
│  [Planet Name]          [Close ✕]│
│  [Planet Icon / Visual]          │
│  ─────────────────────────────── │
│  [Short Identity Statement]      │
│  [Key Stat or Achievement]       │
│  ─────────────────────────────── │
│  [2–3 sentence bio / description]│
│  ─────────────────────────────── │
│  [Tags: #sport #athlete #tech]   │
│  ─────────────────────────────── │
│  [Primary CTA Button]            │
│  [Secondary Link: Learn More ›]  │
│  ─────────────────────────────── │
│  [Share icon]  [Next Planet ›]   │
└─────────────────────────────────┘
```

**Content per planet**:

| Planet | Identity Statement | Key Stat | Primary CTA |
|--------|-------------------|----------|-------------|
| Sports | "Elite athlete competing at international level" | [Specific achievement] | "See Highlights" |
| Technology | "Builder of immersive digital experiences" | [GitHub / project stat] | "Explore Projects" |
| Business | "Entrepreneur building at the intersection of sport and tech" | [Company / venture] | "View Ventures" |
| Story | "From [origin] to [current milestone] — the Mizo journey" | [Key milestone year] | "Read the Story" |
| Contact | "Let's build something extraordinary together" | [Response time SLA] | "Start a Conversation" |

**Interactions**:
- **Close (✕)**: Dismisses panel; camera pulls back to full system view
- **Primary CTA**: Opens linked content (new tab or expanded view)
- **Next Planet (›)**: Camera pans to adjacent planet; panel updates content
- **Share icon**: Copies deep-link URL to clipboard; shows toast confirmation

**Keyboard**:
- `Escape` closes panel
- `Tab` navigates between panel interactive elements
- `Enter` / `Space` activates focused button
- `→` / `←` navigates to next / previous planet while panel is open

**Exit**:
- → Screen 2 (Solar System) on close
- → Screen 4 (Contact) when Contact planet CTA clicked

---

### Screen 4: Contact / Collaboration

**Purpose**: Convert interested visitors into leads or followers

**Elements**:
- Headline: "Start Your Mission with Mizo"
- Sub-headline: One sentence that reinforces the brand value proposition
- Contact form OR direct-contact options:
  - Email button (pre-fills subject line: "Collaboration Inquiry")
  - LinkedIn link
  - Instagram link
- Social proof section:
  - 2–3 brand logos ("As seen with / partnered with")
  - One short testimonial quote
- Back button: "← Return to the Universe"

**Interactions**:
- Form submit: Shows success state ("Message received — Mizo will be in touch within 48 hours")
- Email click: Opens mail client with pre-filled subject
- Social links: Open in new tab

**Exit**:
- → Screen 2 (Solar System) via back button
- → External (email client / LinkedIn / Instagram) via direct links

---

## Design Principles

### 1. Progressive Disclosure
- Show planet labels only on hover, not all at once
- Info panel expands from a summary to a full bio, not the reverse
- Advanced controls (keyboard shortcuts, audio) are discoverable but not intrusive

### 2. Immersion with Escape Hatches
- 3D scene is always visible behind overlays
- Every modal/panel has a clear, accessible close action
- Users can always return to the system view without losing their place

### 3. Clear Hierarchy in Content
- **Biggest**: Planet name and visual
- **Second**: Identity statement (what kind of person is this?)
- **Third**: Key stat (proof point)
- **Fourth**: Bio text
- **Fifth**: CTAs

### 4. Wayfinding in a Non-Linear Space
- Visited-state indicators prevent revisiting the same planet accidentally
- Mini-nav bar is always visible as a spatial anchor
- "Next Planet" button creates optional linearity for users who prefer it

### 5. Performance as a Design Value
- Loading screen is designed, not blank
- 3D assets load progressively (stars → orbits → planets → textures)
- Fallback 2D view for low-power devices or slow connections

---

## Accessibility Requirements

### Keyboard Navigation
- [ ] All planets reachable via `Tab` key
- [ ] `Tab` order follows orbital sequence (innermost → outermost)
- [ ] Visual focus ring visible on all interactive elements (2px solid, high-contrast colour)
- [ ] `Enter` / `Space` open planet panel
- [ ] `Escape` closes panel and returns focus to previously focused planet
- [ ] Arrow keys navigate between planets while panel is open

### Screen Reader Support
- [ ] Each planet has an `aria-label` describing its domain (e.g., "Sports planet — click to explore Mizo's athletic achievements")
- [ ] PlanetInfoPanel announces its content when it opens (`role="dialog"`, `aria-modal="true"`)
- [ ] Loading progress announced via `aria-live="polite"`
- [ ] CTA buttons have descriptive labels (not just "Click here")
- [ ] Close button labelled "Close [Planet Name] panel"

### Visual Accessibility
- [ ] Text contrast minimum 4.5:1 against panel background (WCAG AA)
- [ ] Planet labels legible against dark space background (use text-shadow or background chip)
- [ ] Focus indicator visible against both dark (space) and light (panel) backgrounds
- [ ] Hover/active states use both colour change AND shape change (not colour alone)
- [ ] All touch targets minimum 44×44 px

### Motion & Animation
- [ ] All animations respect `prefers-reduced-motion` media query
- [ ] With reduced motion: planet orbits pause; camera transitions are instant cuts, not sweeps
- [ ] Loading animation is simple opacity fade (not spinning) in reduced-motion mode

### Responsive & Device
- [ ] Desktop (1280px+): Full 3D experience, side panel
- [ ] Tablet (768–1279px): Full 3D, bottom-sheet panel
- [ ] Mobile (<768px): Simplified orbit view, full-screen card per planet, swipe navigation

---

## Design Handoff

**Research artifacts ready:**
- Jobs-to-be-Done: `docs/ux/mizo-universe-jtbd.md`
- User Journey: `docs/ux/mizo-universe-journey.md`
- Flow Specification: `docs/ux/mizo-universe-flow.md` *(this file)*

**Next steps for Figma:**
1. Review the user journey to understand emotional states at each stage
2. Use the flow specification to build screen wireframes in Figma
3. Apply accessibility requirements to each component
4. Build an interactive prototype and test against the JTBD success criteria:
   - Time-to-comprehension < 60 seconds
   - CTA reached within 3 minutes
5. Validate with at least 3 users matching the Sofia persona (talent/brand evaluator)

**Key constraint**: Designs must coexist with the React Three Fiber scene — panels and overlays must not replace the 3D viewport.

---

*See also: `docs/ux/mizo-universe-jtbd.md` and `docs/ux/mizo-universe-journey.md`*
