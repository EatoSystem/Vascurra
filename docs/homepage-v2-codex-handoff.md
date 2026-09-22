# Vascurra Homepage V2 — Codex Completion Handoff

## Objective
Complete the remaining Vascurra V2 homepage structure and content now, using production-ready responsive layouts and **visual placeholders only** for artwork that will be supplied later.

This is a forward-build task: install the layout, copy, responsive behavior, accessibility, section IDs, navigation targets and reusable section primitives so future artwork can be dropped in without redesigning the page.

## Hard release rule
- `/` remains the public holding page.
- `/preview` remains the gated internal review surface.
- Do **not** launch V2 publicly.
- Do **not** move V2 onto `/`.
- Only explicit founder approval can authorize launch.
- `/privacy` remains public.

## Before changing code
1. Inspect the current branch/local working tree and the current `/preview` implementation.
2. Treat the latest implemented Sections 01–04 as source of truth.
3. Do **not** overwrite or redesign any existing approved section.
4. If local work contains a newer Patient 0 section than the remote branch, preserve the local version and build after it.
5. Reuse existing components, spacing tokens, typography, container widths and accessibility patterns wherever possible.

## Visual source of truth
The Hero brain and the Dad/Origin illustration are the master brand references.

Every section must feel as if it belongs to the same designer and the same system:
- clean white canvas by default
- deep navy typography
- aqua/cyan → teal → fresh green palette
- generous white space
- sculptural flowing ribbon language
- subtle vascular/neural branch + node motifs
- premium, calm, human, scientific, optimistic
- no generic SaaS card walls
- no glassmorphism overload
- no stock-health illustration language
- no grey/off-white section backgrounds
- no purple/blue-violet drift

## Hard typography rule
At every breakpoint, each section may use **no more than three distinct font-size values**.

Recommended hierarchy:
1. Primary — major section heading
2. Secondary — lead/proposition
3. Tertiary — eyebrow, body, captions, labels, buttons, links, metadata

Use weight, tracking, uppercase, colour, gradient, opacity and spacing for additional hierarchy instead of extra font sizes.

## Core section rule
Every major section gets:
- one dominant idea
- one major headline
- one dominant visual area
- only the supporting content necessary to understand it

Do not shrink many small components into one section to make them fit.

## Placeholder system
Create one reusable placeholder component for future artwork, e.g. `ArtworkPlaceholder`.

Requirements:
- layout-stable and responsive
- white background
- very light aqua/teal outline or subtle brand rule
- no fake artwork
- no gradient wallpaper
- no stock icons
- label can say `ARTWORK TO FOLLOW` plus a short internal description
- placeholder text is review-only and should be easy to remove when artwork arrives
- use correct intended aspect ratio so replacing it later does not alter layout

Suggested variants:
- `portrait` — 1:1 or 4:5
- `landscape` — 16:7 / 16:8
- `wide` — 16:5
- `immersive` — full-width responsive visual stage

## Existing homepage sections
Preserve existing implementation/copy for these sections unless a current local version is newer:

### 01 — Hero
`Intelligence for vascular cognitive health.`
Status: LOCKED.

### 02 — Origin / It Began with Dad
`A father. A doctor. A reason to fight.`
Status: LOCKED.

### 03 — Our Mission
`Help today. Learn every day. Fight for tomorrow.`
Keep current content/layout. Artwork can be replaced later.

### 04 — Patient 0
Eyebrow must be `PATIENT 0`, not `SECTION 04`.
Headline: `One person. A global possibility.`
Keep the latest current implementation if present. Artwork can be replaced later.

---

# Build Sections 05–13

## 05 — The Framework
**Eyebrow:** `THE FRAMEWORK`

**Headline:**
`Observe. Understand.`
`Support. Learn.`

Use navy for the first thought and the established cyan→teal→green text gradient for the second where accessible.

**Lead:**
`A continuous learning loop built around real life.`

**Body:**
`Vascurra is designed to bring meaningful observations, measurements, events and context together over time — helping people see patterns, prepare better questions and make sense of change without reducing a person to a single score.`

`What happens next becomes part of what the system learns.`

**Four stages:**

**OBSERVE — Notice what matters.**
`Chosen observations, measurements, routines and meaningful events create a richer picture of daily life.`

**UNDERSTAND — Connect the context.**
`Vascurra brings information together over time, preserving where it came from and where uncertainty remains.`

**SUPPORT — Turn understanding into useful action.**
`Help the person, family and clinicians navigate what matters, prepare questions and decide what deserves attention.`

**LEARN — Learn from what happens next.**
`New observations and evidence feed back into the system so the picture can become more useful over time.`

**Closing statement:**
`Not a score. Not a snapshot. A living picture over time.`

**Layout:** centered editorial intro → one large wide visual placeholder for a future continuous Vascurra learning-loop artwork → four restrained HTML stage descriptions underneath. No cards.

**Placeholder label:**
`ARTWORK TO FOLLOW — continuous Observe → Understand → Support → Learn Vascurra ribbon loop`

---

## 06 — One System. Multiple Perspectives.
**Eyebrow:** `MULTIPLE PERSPECTIVES`

**Headline:**
`One system.`
`Multiple perspectives.`

**Lead:**
`The same underlying context can support different people in different ways.`

**Body:**
`Vascurra is being designed so information can be organised around the person while remaining appropriate to each role, permission and purpose.`

**Perspectives:**

**PERSONAL**
`Understand my day, my context and what matters to me.`

**FAMILY**
`Stay connected to the information I choose to share.`

**CLINICIAN**
`See meaningful context that can help prepare better conversations and review.`

**RESEARCH**
`Learn from appropriately governed, permissioned and de-identified patterns where future research use is approved.`

**Closing line:**
`One person at the centre. Different views around them.`

**Layout:** strong left editorial column + large right visual placeholder. Beneath, four very restrained perspective labels in one row/grid. Avoid four feature cards.

**Placeholder label:**
`ARTWORK TO FOLLOW — one person connected to Personal, Family, Clinician and Research perspectives`

---

## 07 — Veya
**Eyebrow:** `VEYA`

**Headline:**
`Complexity, made more understandable.`

**Lead:**
`A calm conversational layer for navigating everyday context.`

**Body:**
`Veya is the planned conversational layer of Vascurra. It is being designed to help people understand information, capture context they choose to record, prepare questions and surface meaningful changes over time.`

**Supporting points:**
- `Explain information in plain language.`
- `Capture chosen context without adding friction.`
- `Prepare questions for family or clinical conversations.`
- `Surface changes that may deserve review.`

**Safety line:**
`Veya is not a doctor, diagnostic system, emergency service or substitute for clinical care.`

**Layout:** text left / visual right, very spacious. No chat UI mockup yet.

**Placeholder label:**
`ARTWORK TO FOLLOW — simple luminous Veya form emerging from the Vascurra ribbon`

---

## 08 — Vascurra Intelligence
**Eyebrow:** `VASCURRA INTELLIGENCE`

**Headline:**
`From information to understanding.`

**Lead:**
`A governed reasoning layer designed to connect context over time.`

**Body:**
`Vascurra Intelligence is the proposed interpretation layer beneath the experience — connecting observations, measurements, behaviours, events, clinical context and evidence while preserving where information came from and where uncertainty remains.`

**Principles:**
- `Context before conclusions.`
- `Provenance stays visible.`
- `Uncertainty is preserved.`
- `Important patterns are surfaced for human review.`

**Closing line:**
`The aim is not to replace judgement. It is to make meaningful context easier to see.`

**Layout:** large centered statement with broad horizontal visual placeholder. Four principles below as simple text anchors, not cards.

**Placeholder label:**
`ARTWORK TO FOLLOW — evolved Vascurra brain / intelligence network derived from Hero icon`

---

## 09 — Vascurra Lab
**Eyebrow:** `VASCURRA LAB`

**Headline:**
`Where lived experience meets research.`

**Lead:**
`A future learning environment connecting questions from real life with evidence and research.`

**Body:**
`Vascurra Lab is the proposed research-learning layer of the project. The ambition is for questions emerging from lived experience to inform structured research, while new evidence can improve what the system is able to understand and explain.`

**Research loop:**
`Real life → Questions → Evidence → Analysis → Human review → New learning`

**Careful-claims line:**
`Vascurra Lab is a development concept. No research partnership, clinical outcome or regulatory status should be implied unless independently established.`

**Layout:** this may be the first deep-navy immersive section. Keep it singular and elegant: large copy + one immersive visual placeholder. If dark treatment weakens consistency, remain white for now and preserve structure for later art direction.

**Placeholder label:**
`ARTWORK TO FOLLOW — immersive lived-experience-to-research Vascurra Lab environment`

---

## 10 — Support Vascurra
**Eyebrow:** `SUPPORT VASCURRA`

**Headline:**
`Help fund the next discovery.`

**Lead:**
`Vascurra begins with one family, but the problem affects millions.`

**Body:**
`Support can help fund AI research, evidence synthesis, product development and the infrastructure required to learn continuously from real life.`

**Three routes:**

**SUPPORT THE PROJECT**
`Make a one-off or recurring contribution to help Vascurra move forward.`
CTA placeholder: `Support Vascurra`

**FUND AI RESEARCH**
`Help fund defined units of AI-assisted evidence and research work, with transparent records of what was explored and learned.`
CTA placeholder: `Fund AI Research`

**PARTNER WITH VASCURRA**
`For philanthropy, foundations, organisations and larger research-support partnerships.`
CTA placeholder: `Partner with Vascurra`

**Closing principle:**
`Every research contribution should leave a trail of knowledge.`

**Important implementation boundary:**
- Build the layout and buttons only.
- Do **not** wire Stripe, payments or donation flows in this task.
- Do not call payments donations unless legal/tax status has been explicitly established.
- Buttons may use inert anchors or clearly marked future href placeholders.

**Layout:** editorial intro + three horizontal routes using typography and dividing rules, not three heavy cards.

**Placeholder label:**
No artwork required; optional small restrained wide placeholder if composition benefits from it.

---

## 11 — Responsible by Design
**Eyebrow:** `RESPONSIBLE BY DESIGN`

**Headline:**
`Trust is part of the architecture.`

**Lead:**
`The person should remain in control of who sees what.`

**Body:**
`Vascurra is being developed around explicit permissions, careful use of information, visible provenance and clear uncertainty. Sensitive health context should never become a hidden assumption or an automatic family permission.`

**Principles:**
- `Consent and control.`
- `Purpose-limited access.`
- `Data minimisation.`
- `Provenance and uncertainty.`
- `Human review where it matters.`
- `Responsible claims.`

**Closing line:**
`Useful intelligence should never require surrendering dignity or agency.`

**Layout:** very clean white section, text-dominant, one simple portrait/abstract visual placeholder. Avoid padlocks/shields/cybersecurity clichés.

**Placeholder label:**
`ARTWORK TO FOLLOW — quiet human-centred permission / agency visual in Vascurra ribbon language`

---

## 12 — From One Person to Many
**Eyebrow:** `THE JOURNEY`

**Headline:**
`Start with one person.`
`Learn deeply. Build for many.`

**Lead:**
`Patient 0 is the beginning of the learning process, not the end of the ambition.`

**Body:**
`The long-term goal is to turn carefully governed learning from real life into tools, evidence and research that may eventually help many more people, families and clinicians.`

**Progression labels:**
`Patient 0 → Families → Clinicians → Research → Many people`

**Closing line:**
`One person can begin a much bigger possibility.`

**Layout:** centered text → one wide journey placeholder → minimal progression labels below.

**Placeholder label:**
`ARTWORK TO FOLLOW — one continuous ribbon journey from Patient 0 outward to many people`

---

## 13 — Final Mission / CTA
**Eyebrow:** `THE MISSION CONTINUES`

**Headline:**
`A healthier future is possible.`

**Lead:**
`Help today. Learn every day. Fight for tomorrow.`

**Body:**
`Vascurra is being built carefully, beginning with one lived experience and a belief that better understanding can create better possibilities.`

**Primary CTA:** `Request Access`
**Secondary CTA:** `Follow Vascurra`

**Footer bridge line:**
`Intelligence for vascular cognitive health.`

**Layout:** large emotionally simple closing section. White preferred for this scaffold. Leave a substantial hero-scale visual placeholder that can later receive a refined Vascurra brain/ribbon closing artwork.

**Placeholder label:**
`ARTWORK TO FOLLOW — final evolved Vascurra brain / ribbon composition`

---

# Navigation
Preserve current navigation unless current implementation already has a newer approved structure.

For the V2 scaffold, ensure semantic section IDs exist so future nav can target them:
- `#origin`
- `#mission`
- `#patient-zero`
- `#framework`
- `#perspectives`
- `#veya`
- `#intelligence`
- `#lab`
- `#support`
- `#responsible`
- `#journey`

Do not restructure the public holding-page navigation in this task.

# Responsive behavior
Validate at minimum:
- 320px
- 390px
- 768px
- 1024px
- 1280px+

Requirements:
- no horizontal overflow
- no clipped descenders/headlines
- placeholders maintain stable aspect ratios
- two-column sections collapse cleanly to one column
- supporting grids remain legible
- no section becomes a dense mobile card stack

# Accessibility
- semantic headings and section landmarks
- appropriate `aria-labelledby`
- strong text contrast
- placeholders are decorative/review scaffolds and should not create noisy screen-reader output
- visible focus styles
- respect reduced motion
- do not make comprehension depend on animation

# Motion
Do not introduce substantial new animation in this task. Layout first.
If existing reveal primitives are reused, content must remain visible without JavaScript and under `prefers-reduced-motion`.

# Safety / content boundaries
- No diagnosis or treatment claims.
- No promises of preventing strokes, slowing disease or curing dementia.
- No invented clinical partnerships, evidence results, regulatory status or research outcomes.
- Patient 0 is co-design/lived experience framing, not a clinical trial claim.
- Veya is conceptual/planned and not a doctor or diagnostic system.
- Vascurra Intelligence and Vascurra Lab are proposed/future layers unless explicitly approved otherwise.
- Preserve provenance and uncertainty language.
- Do not add real/private health data; fictional/demo data only.

# Engineering expectations
- Prefer server components unless interactivity genuinely requires client components.
- Reuse existing design primitives rather than creating a second design system.
- Keep section content in typed data/config where useful, but do not over-abstract.
- Avoid unnecessary dependencies.
- Keep components easy to replace with final artwork later.
- Do not alter production environment variables, Supabase, Stripe, migrations or deployment configuration.

# Validation before handoff
Run:
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

Then review `/preview` as one continuous page and check visual rhythm from Hero through Final CTA.

# Deliverable
A complete V2 homepage scaffold on `/preview` containing Sections 01–13, with:
- existing approved sections preserved
- Sections 05–13 fully implemented in responsive HTML/CSS
- final copy installed
- all intended artwork represented by clean layout-stable placeholders
- no public launch
- no payment integration
- no speculative medical claims

When finished, report:
1. files changed
2. sections added
3. placeholder dimensions/variants
4. validation results
5. any design/safety decisions that required interpretation
6. preview URL if available

End with:

**READY FOR FULL HOMEPAGE SCAFFOLD REVIEW**
