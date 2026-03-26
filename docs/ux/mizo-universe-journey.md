# User Journey: Exploring the Mizo Universe

## User Persona

- **Who**: Sofia, 34, Talent Partnership Manager at a global sports brand
- **Goal**: Evaluate Captain Mizo Amin as a potential brand ambassador and understand his crossover appeal in sports, tech, and business
- **Context**: Discovered Mizo through a LinkedIn post shared by a colleague; opening the portfolio link during a focused hour between meetings
- **Device**: MacBook Pro, Chrome browser, desktop resolution
- **Success Metric**: Leaves the session with enough confidence to send a collaboration proposal email

---

## Journey Stages

---

### Stage 1: Arrival — First Contact with the Universe

**What Sofia is doing**: Clicking the portfolio link from LinkedIn; waiting for the page to load

**What Sofia is thinking**: *"Is this a standard portfolio site or something different? I hope it doesn't take forever to load."*

**What Sofia is feeling**: 😐 Neutral, slightly curious, slightly skeptical

**Touch points**:
- Initial page load (3D scene bootstrapping)
- Loading indicator / splash experience

**Pain points**:
- Long load times kill first impressions for 3D-heavy sites
- No immediate context of who this person is while assets load
- If the experience doesn't clearly differ from a standard site within 5 seconds, Sofia closes the tab

**Opportunities**:
- Show a branded loading screen with Mizo's name and a one-line tagline
- Progressive asset loading so something renders immediately
- Ambient sound option (muted by default) to signal this is an immersive experience

---

### Stage 2: Orientation — Entering the Solar System

**What Sofia is doing**: Watching the 3D solar system appear; trying to understand the metaphor

**What Sofia is thinking**: *"This is the solar system... each planet must represent something about him. Which one do I click first? Is this clickable?"*

**What Sofia is feeling**: 🤩 Impressed by the visual impact; 😕 Slightly unsure of what to do

**Touch points**:
- 3D solar system scene with orbiting planets
- Ambient UI hints (cursor changes, subtle glow on hover)
- Planet labels or constellation lines

**Pain points**:
- No immediate affordance that planets are interactive
- No legend or guide explaining what each planet represents
- Users unfamiliar with 3D interfaces may not discover interaction model

**Opportunities**:
- Subtle "Click a planet to explore" hint on first visit (dismissible)
- Highlight the nearest planet with a pulsing ring on load
- Tooltip or label appears on hover ("Sports", "Tech", "Business")
- Keyboard navigation works out of the box (Tab cycles through planets)

---

### Stage 3: Discovery — Clicking Into a Planet

**What Sofia is doing**: Hovering over the nearest planet; clicking on it; watching the info panel animate in

**What Sofia is thinking**: *"Oh this is the sports section. What achievements are listed here? Is this current? I want depth — not just highlights."*

**What Sofia is feeling**: 😊 Engaged; 🧐 Evaluating credibility

**Touch points**:
- Planet hover state (glow, scale change, label)
- Click triggers camera zoom and PlanetInfoPanel overlay
- Info panel with name, fact, achievements, and links

**Pain points**:
- Information may feel too brief ("one fun fact" isn't enough for business evaluation)
- No clear hierarchy — what is most important to read first?
- Panel may obscure the 3D scene, breaking immersion

**Opportunities**:
- Info panel has a clear hierarchy: Identity → Key Stat → Short Bio → CTA
- "Learn more" expands to deeper content without leaving the scene
- Panel is positioned to not fully block the planet visual
- Share button lets Sofia send this planet's page directly to a colleague

---

### Stage 4: Exploration — Navigating Between Planets

**What Sofia is doing**: Closing the info panel; rotating the scene to find another planet; clicking "Business" planet

**What Sofia is thinking**: *"How do I get to the next section? Can I rotate? Is there a menu? I want to see the tech side too."*

**What Sofia is feeling**: 😌 Enjoying the exploration; 😤 Mild friction when navigation isn't obvious

**Touch points**:
- Drag to rotate the scene
- Planet-to-planet navigation (orbit controls)
- Possible mini-map or navigation bar

**Pain points**:
- No breadcrumb or "you are here" indicator
- Easy to lose track of which planets have been visited
- Mobile users struggle with drag-to-rotate on small screens

**Opportunities**:
- Visited planets subtly change appearance (brighter, checkmark)
- Persistent mini-nav bar shows all planets with visited state
- Keyboard shortcut (arrow keys) to cycle between planets
- On mobile: swipe gesture to rotate, tap to select

---

### Stage 5: Conversion — Finding the Call to Action

**What Sofia is doing**: Finishing her exploration; looking for how to contact Mizo

**What Sofia is thinking**: *"I'm impressed. How do I reach out? Is there an email, a booking form, a LinkedIn link?"*

**What Sofia is feeling**: 😊 Positive intent; 😰 Anxious not to miss the contact point

**Touch points**:
- Contact / CTA section (planet or dedicated area)
- Email link, contact form, or social media links
- "Work with Mizo" call to action

**Pain points**:
- If contact info is buried in a planet's detail panel, Sofia may miss it
- Generic "Contact Me" buttons feel anticlimactic after an immersive experience
- No trust signals near the CTA (press logos, testimonials)

**Opportunities**:
- A dedicated "Contact" planet or central sun interaction as the CTA
- CTA copy matches the brand voice: "Start Your Mission" or "Enter Mizo's World"
- Social proof visible near CTA: logos of brands Mizo has worked with
- One-click email with pre-filled subject line to reduce friction

---

### Stage 6: Exit — Leaving with a Lasting Impression

**What Sofia is doing**: Bookmarking the page; copying the URL to send to her manager; closing the tab

**What Sofia is thinking**: *"I'll send this to the team. This is unlike any portfolio I've seen."*

**What Sofia is feeling**: 😊 Confident in sharing; 🌟 Memorable experience

**Touch points**:
- URL (SEO-friendly, shareable)
- Page title and Open Graph image for social sharing
- Browser bookmark (favicon)

**Pain points**:
- If the URL is not shareable/SEO-indexed, the link may break or look unprofessional
- No OG image means a blank preview when shared on Slack/LinkedIn

**Opportunities**:
- Each planet has its own deep-linkable URL
- Rich OG metadata (image, title, description) for each section
- Favicon matches the brand

---

## Emotional Arc Summary

| Stage | Emotion | Intensity |
|-------|---------|-----------|
| Arrival | Skeptical neutrality | ⬤⬤⬡⬡⬡ |
| Orientation | Impressed + slightly confused | ⬤⬤⬤⬡⬡ |
| Discovery | Engaged + evaluating | ⬤⬤⬤⬤⬡ |
| Exploration | Enjoying + mild friction | ⬤⬤⬤⬡⬡ |
| Conversion | Positive intent + mild anxiety | ⬤⬤⬤⬤⬡ |
| Exit | Confident + delighted | ⬤⬤⬤⬤⬤ |

---

## Key Insights for Figma Design

1. **First 5 seconds are critical**: The loading and orientation stages determine whether Sofia stays or leaves
2. **Discoverability of interaction model**: The 3D interface needs strong affordances for non-3D-native users
3. **Information hierarchy inside panels**: Business evaluators need more than fun facts — structure matters
4. **Visited-state feedback**: Users need to know where they've been in a non-linear experience
5. **CTA placement**: Contact must be surfaced prominently; don't make evaluators hunt for it

---

*See also: `docs/ux/mizo-universe-jtbd.md` and `docs/ux/mizo-universe-flow.md`*
