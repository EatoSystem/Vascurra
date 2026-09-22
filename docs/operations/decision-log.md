# Decision Log

Record material product decisions here so coding agents do not repeatedly reopen settled questions.

## Template

### YYYY-MM-DD — Decision title

**Decision:**

**Why:**

**Alternatives considered:**

**Implications:**

**Owner:**

**Review date (if any):**

---

## Initial decisions

### 2026-09-22 — Founder-supplied artwork only

**Decision:** Coding agents must not create Vascurra visual artwork. Significant
images, illustrations, hero artwork, section artwork, artwork-style diagrams,
infographics, decorative SVG illustrations, vector artwork, icon illustrations,
abstract visual compositions and AI-generated imagery must be supplied by the
founder/design process as approved committed assets.

**Operational boundary:** Agents may discover, verify and integrate approved
assets, preserve aspect ratio, provide accessibility treatment, build
responsive layouts around supplied artwork and reserve neutral space for
missing artwork. If an approved asset is missing or unsuitable, agents must
document the asset key, dimensions, aspect ratio, background treatment and
creative purpose instead of inventing a replacement.

**Existing coded artwork:** Existing coded artwork may remain only as a
temporary approved or explicitly authorised structural fallback. It must not be
expanded or evolved unless explicitly instructed, and should be removed from
rendered experiences when founder-supplied artwork replaces it.

**Asset editing:** Founder-supplied visual assets must not be materially edited
without explicit instruction. Recolouring, meaningful cropping, adding text,
removing image elements, redrawing, artistic filtering, creating derivative
artwork or converting an asset into a new visual design are not authorised.
Technical optimisation that changes the committed source asset requires
explicit approval.

**Why:** Vascurra's visual identity depends on founder-approved artwork and
should not drift through agent-created approximations or final-looking
placeholders.

**Implications:** Future website and product-page work must design around
supplied assets. Missing artwork is handled through reserved layout space and
documented requirements, not homemade SVG/CSS/AI substitutes. Ordinary UI
primitives such as borders, dividers, simple arrows, progress lines, buttons,
form controls, focus states, navigation chevrons and approved design-system
icons remain allowed when they do not function as substitute artwork.

**Owner:** Founder / Product Architecture

---

### 2026-09-22 — Capital mobilisation horizons and permanent mission capacity

**Decision:** Vascurra's public financing direction is a diversified capital
mobilisation model rather than an assumption of one grant, one round or equity
fundraising as the default. Public planning may use four mission-capacity
horizons: €1–5M Foundation, €10–25M Research Engine, €50–100M+ International
Network and a €1B+ long-term mission for permanent global capacity.

**Meaning of capacity:** These figures are illustrative strategic planning
horizons. Mission capacity can be cumulative and may combine cash capital,
compute, funded research, infrastructure, expertise, in-kind resources and
commercial revenues reinvested into future development and research. €1B+
means cumulative long-term mission capacity over time, not a current raise,
valuation, budget, announced funding target or single transaction.

**Financing flexibility:** Equity financing is neither prohibited nor assumed.
Future structures remain subject to founder, legal and strategic review and
should be selected according to what best protects the mission and preserves
long-term flexibility.

**Public boundaries:** The horizons are not announced equity rounds,
valuations, fundraising commitments, secured capital, an investment offer or
guarantees. Vascurra Fund is not represented as a registered charity,
tax-deductible fund, investment product or proven business model, and the
website accepts no payments. Potential capital sources must not imply current
commitments, partners, eligibility or legal structures.

**Claims boundary:** Mobilising resources does not guarantee scientific,
clinical or commercial outcomes. The existing medical, privacy, health-data,
research-governance and release restrictions remain in force.

**Implications:** The gated public homepage and `/fund` may explain the capital
flywheel, planning horizons, diversified sources, aspirational reinvestment and
future transparency architecture. This decision adds no payment, donation,
investment, database or production infrastructure and does not authorise
launch or deployment.

**Owner:** Founder / Product Architecture

---

### 2026-09-21 — Limited public attribution for Dad and Patient 0

**Decision:** Vascurra may publicly state that it is being designed with Dad,
a former GP living with early vascular dementia. Materially equivalent wording
may describe Dad as the human starting point, Patient 0 and a co-designer, and
may explain that Vascurra is being developed first with and for him before its
learning is developed responsibly into systems for more people.

**Supersedes:** Only the public-attribution restriction in the 2026-09-05
decision “Public attribution remains separate from internal documentation.”
That historical decision remains below as context.

**Privacy boundary:** The approved public health description is limited to
“former GP living with early vascular dementia.” Public copy must not include
his name, age, diagnosis date, detailed medical history, medication,
measurements, records, test results, clinicians, hospitals, private
conversations, personal health data or any other medical detail without a new
explicit approval.

**Patient 0 meaning:** Patient 0 means the first person Vascurra is being
designed with and for. It does not imply a clinical trial, medical experiment,
research-subject status, proof of efficacy or clinical validation.

**Implications:** The canonical strategic direction may describe Vascurra as a
continuously learning Vascular Dementia Information System being designed with
Dad. This is project direction, not evidence of clinical effectiveness. All
other privacy, consent, claims, health-data, safety and release restrictions
remain in force. Production remains on the holding page and unfinished V2
routes remain gated and `noindex, nofollow`.

**Owner:** Founder / Product Architecture

---

### 2026-09-18 — Homepage hero extends the core support line

**Decision:** Use `Support independence. Preserve identity. Pursue breakthroughs.`
in the Wave 1 homepage Hero while retaining `Support independence. Preserve
identity.` as the shorter core brand line elsewhere.

**Why:** The founder-approved Hero wording connects day-to-day support with the
project's research ambition without claiming that Vascurra has achieved, or
will achieve, a clinical outcome.

**Implications:** The extension is homepage-specific, remains aspirational, and
does not alter the prohibition on diagnostic, predictive, preventive,
treatment, efficacy or validated-outcome claims.

**Owner:** Founder / Product Architecture

---

### 2026-09-14 — Wave 1 public website remains behind the V2 review gate

**Decision:** Build the Wave 1 multi-route public-site architecture on
`codex/public-website-wave-1`, while keeping `/` on the production holding
experience and exposing unfinished pages only through the existing signed
review session. Every unfinished V2 route is `noindex, nofollow` and excluded
from crawler access; `/privacy` remains publicly available.

**Why:** The route and content foundation needs review as one coherent system,
but successful implementation, CI, preview or deployment is not founder launch
approval.

**Implications:** The Wave 1 routes describe proposed functionality only, use
structured artwork placeholders, collect no health details, and must not be
moved to the public root until explicit founder approval. Interim terms and
accessibility wording require founder/legal review before launch.

**Owner:** Founder / Product Architecture

---

### 2026-08-31 — Phase 1 is a public foundation website

**Decision:** Do not implement real patient health workflows in Phase 1.

**Why:** Establish brand, intended purpose, claims discipline, privacy/regulatory path and design-partner interest before clinical engineering.

### 2026-08-31 — No proprietary brain-health score

**Decision:** Remove score-based hero concepts until a score has a validated methodology and appropriate regulatory strategy.

**Why:** A composite score can easily be interpreted as a clinical assessment or risk output.

### 2026-08-31 — Ireland/EU-first governance

**Decision:** GDPR, Irish decision-support/capacity law, EU MDR and EU AI Act strategy take precedence over U.S.-first compliance framing.

### 2026-08-31 — AI provider abstraction

**Decision:** OpenAI may be the primary provider, but core Vascurra architecture should not bind domain logic directly to one model vendor.

---

## Phase 1A decisions

### 2026-08-31 — Phase 1A is a single holding page, not the Phase 1 site

**Decision:** Ship one public page introducing Vascurra as a project in
development, ahead of the multi-route Phase 1 website.

**Why:** Establish public presence and brand credibility while product,
clinical and regulatory work continues, without publishing product pages that
would imply functionality that does not exist.

**Implications:** `docs/product/phase-1-website-spec.md` remains the target for
Phase 1. Phase 1A intentionally omits `/about`, `/personal`, `/family`,
`/clinical`, `/research`, `/science`, `/privacy` and `/early-access`, and uses
three in-page anchors instead of the Phase 1 navigation.

### 2026-08-31 — No founder or family reference in public Phase 1A copy

**Decision:** The public page names no individual and tells no personal medical
story. Internal documentation is unchanged.

**Why:** Protect private health information. The story may be introduced in a
later phase with consent and editorial review.

**Implications:** This differs from `docs/product/phase-1-website-spec.md`,
which specifies an `/about` page naming the development lead and the founding
family story. That conflict is unresolved and belongs to Phase 1 — Phase 1A
avoids it by shipping no `/about` page. `README.md` retains its internal
reference, which is repository documentation rather than public copy.

### 2026-08-31 — Email capture deferred; the site collects nothing

**Decision:** Ship no email capture in Phase 1A. No form, field, consent
checkbox, route handler or provider.

**Why:** No email service is configured, and rendering a form that appears to
subscribe someone while storing nothing would be dishonest. Deferred to a later
date by product decision.

**Implications:** The site performs no processing, so no privacy notice is owed
yet. `Follow the journey` resolves to the Coming Soon section rather than a
form. This means the Phase 1 acceptance criterion "early-access form validates
and submits" does not apply to Phase 1A. When picked up, collect no more than
email address plus explicit updates consent, per
`docs/regulatory/privacy-gdpr.md`, and publish the privacy notice first.

### 2026-08-31 — Brand mark reserved rather than invented

**Decision:** With no brand asset in the repository, reserve the mark's space
with a visibly captioned placeholder instead of authoring a brain silhouette.

**Why:** An invented mark risks establishing the wrong identity and would be
harder to retract than an obvious placeholder. The asset is being supplied
separately.

**Implications:** The swap is confined to
`components/brand/VascurraMark.tsx` and causes no layout shift. Favicon, app
icons and the Open Graph artwork also wait on that asset.

### 2026-08-31 — Public copy claims guardrail is executable

**Decision:** Keep all public copy in `content/home.ts` and enforce the
`AGENTS.md` §3 claims rules with a test (`content/home.test.ts`) that runs in
`npm test`.

**Why:** The claims guardrail is the repository's most important rule. A test
makes it enforceable in CI rather than dependent on reviewer memory.

**Implications:** Adding prohibited language to public copy fails the build.
The allowlist covers only the safety section's negative statements, which are
separately asserted to remain negations.

### 2026-08-31 — Hero copy is not held to the end of the reveal

**Decision:** Hero copy resolves at 0.15–0.75s while the brand mark sequence
continues behind it, rather than appearing last as the reveal sequence lists.

**Why:** The same brief requires that motion must not block LCP. Delaying the
largest text by roughly four seconds would regress LCP and read as a broken
page.

**Implications:** All other stages follow the specified order in
`docs/brand/motion-guidelines.md`.

### 2026-08-31 — Vercel framework preset pinned in `vercel.json`

**Decision:** Commit `vercel.json` declaring `framework: "nextjs"`.

**Why:** The Vercel project predates the application, so it had no framework to
detect and defaulted to a static preset expecting a `public/` output directory.
Deploys failed with "No Output Directory named public found" despite a
successful `next build`.

**Alternatives considered:** Creating an empty `public/` directory — rejected,
because it would produce a deploy that succeeds while serving nothing.
Dashboard-only configuration — rejected as the sole fix, because it is
invisible to the repository and lost if the project is recreated.

**Implications:** Build configuration now lives in version control. A dashboard
Output Directory override, if one is set, must still be cleared manually.

---

## Phase 1A visual redesign

### 2026-08-31 — First visual draft rejected; page rebuilt around the brand mark

**Decision:** Keep the engineering, accessibility work, approved copy and claims
guardrail from the first Phase 1A build, and redesign the visual experience.

**Why:** The first draft was structurally competent but read as a generic SaaS
holding page: every concept was a white rounded rectangle, all seven sections
shared the same vertical rhythm, colour was applied as pale tint rather than as
light, and the brand mark occupied roughly 12% of the hero with the vascular
field hidden behind it.

**Implications:** `Card` and `Section` were removed as default wrappers, the four
perspectives became a radial system around the mark, and the five principles
became a journey along a flowing spine. Content is now connected by vascular
lines rather than separated by boxes.

### 2026-08-31 — Brand palette is split into an energy tier and an ink tier

**Decision:** Use the `high-resolution-web-asset-pack-specification.md` §12 tokens
exactly as written for decorative light (bloom, glow, ribbons, particles, nodes),
and a hue-preserving darkened set for all text including the display gradient.

**Why:** Measured against the soft-white canvas, the spec's cyan (`#43D6FF`,
1.64:1) and mint (`#2ECC9A`, 1.97:1) fail even the 3:1 large-text floor when used
as text. §12 states the tokens are production starting points that may be tuned,
§17 requires accessibility, and `brand-guidelines.md` says never sacrifice
readability for glow.

**Alternatives considered:** Using the tokens literally for gradient headings —
rejected as inaccessible. Abandoning the gradient — rejected as off-brand.

**Implications:** The page reads luminous because the energy tier carries the
light, while every text node passes AA. `--color-ink-teal` was subsequently
darkened again (`#007F8D` -> `#00707C`) after measurement showed 4.45:1 on the
footer's deeper ground. Tokens are verified against the grounds they sit on.

### 2026-08-31 — Hero engineered for the pending high-resolution master

**Decision:** Build the hero for 600-800 CSS px of brain artwork and show a
clearly labelled temporary placeholder at those dimensions, rather than scaling
the composition down to suit the committed 141x144 derivative.

**Why:** Spec §2 and §20 forbid using a low-resolution derivative at hero scale;
§15 requires 42-50vw on desktop, which would need a 4-8x upscale of the current
file. §21 directs that a missing asset should not weaken the visual
architecture.

**Implications:** The swap is confined to `BRAIN_MASTERS_AVAILABLE` in
`components/brand/brain-assets.ts` and causes no layout shift. The approved
derivative is used at 36px in the header and 28px in the footer, which is
downscaling at DPR 2 rather than upscaling.

### 2026-08-31 — Scroll reveals are gated on `(scripting: enabled)`

**Decision:** Wrap the `[data-reveal]` rules in `@media (scripting: enabled)`.

**Why:** Those rules start content at `opacity: 0`. Applied unconditionally, a
JavaScript failure or a browser with JS disabled would render a blank page. This
was caught during verification when a full-page capture showed every scroll-
revealed section invisible.

**Implications:** Without scripting the reveal simply never applies and all
content shows immediately, which is the correct failure mode. No content on the
page is reachable only through motion.

### 2026-08-31 — Coming Soon carries no call-to-action button

**Decision:** Omit the `Follow the journey` button from the closing section.

**Why:** With email capture deferred, "Follow the journey" in the header and hero
anchors *to* the Coming Soon section, so a button inside that section could only
link to itself.

**Implications:** The label returns to the closing section once there is a
destination — an email capture or a channel to follow.

---

## Phase 1A third-pass redesign

### 2026-08-31 — Two deep-navy chambers introduced

**Decision:** The page stays predominantly luminous soft-white but resolves twice
into full-bleed deep navy `#08203A` — the philosophy section and the closing
frame — with the footer continuing the closing chamber. No other dark panels.

**Why:** Two drafts read as thin-line wireframes because the value range was
compressed into the top tenth of the tonal scale; nothing was dark enough for
light to register against. Additionally, on navy the specification's own §12
tokens become text-safe (cyan 9.63:1, mint 8.00:1, teal 4.68:1), so these are the
only sections where the brand's true luminous palette can be used at full
saturation exactly as specified.

**Alternatives considered:** Staying entirely light and building depth only from
bloom and surfaces — rejected as insufficient. Making the whole page dark —
rejected: `brand-guidelines.md` prefers a light canvas and Vascurra is not a
dark-theme brand.

**Implications:** A new class of contrast surface (light text on dark) is now
verified on every rendered pass. `.text-gradient-lum` carries the saturated
gradient on navy; `.text-gradient` keeps the darkened ink tier on light.

### 2026-08-31 — Hero built for the approved asset, which is still missing

**Decision:** Build the hero, architecture centre and closing frame around the
approved brain at full specified scale, and render an empty reserved area until
the artwork is committed.

**Why:** The approved high-resolution files have not been added to the
repository. Spec §2 and §20 forbid upscaling the 141×144 derivative to hero
scale; §3 forbids committing a stand-in binary under a spec filename; §20 forbids
authoring a substitute mark. §21 directs that a missing asset must not weaken the
visual architecture.

**Implications:** This is the single outstanding blocker on Phase 1A. Adding the
four files and flipping `BRAIN_MASTERS_AVAILABLE` completes it with no layout
change.

### 2026-08-31 — Pathway connectors use CSS gradients, not SVG strokes

**Decision:** The philosophy pathway is a CSS gradient bar revealed by `scaleX`
rather than an SVG stroke revealed by `stroke-dashoffset`.

**Why:** On a long straight path, `stroke-dasharray: 1` with `pathLength="1"`
computed to a literal `1px` dash over a 1140px path and rendered invisibly. The
dash technique is retained where it works — the curved connectors in the
architecture and principles sections.

**Implications:** One extra reveal primitive, `[data-reveal-bar]`, alongside
`[data-reveal]` and `[data-reveal-draw]`, all gated on `(scripting: enabled)`.

---

## 2026-09-05 repository foundation decisions

### 2026-09-05 — Canonical application baseline

**Decision:** Use commit `3820b680a8dba963a83bdb144b68094cfd655647` as the canonicalization baseline and preserve the documentation history from `main` with a normal Git merge.

**Why:** It is the most complete application candidate, includes the earlier holding-page and visual work, passes the full validation suite and has a successful Vercel Preview. At the time of review, Vercel's latest recorded Production deployment was its direct parent, `50228e3`.

**Implications:** The canonicalization branch contains both histories. Moving the result to `main` still requires pull-request review and explicit approval; this decision does not deploy or alter production.

### 2026-09-05 — Agent-neutral development workflow

**Decision:** No coding agent is the permanent primary builder or inherently authoritative. Codex, Cursor, Claude Code and future tools use the same feature-branch, validation, pull-request and approval workflow.

**Why:** Authority should come from approved documentation, Git history, tests, review evidence and explicit human decisions.

**Supersedes:** The role assignment in the earlier development workflow that named Claude Code as primary builder and Codex mainly as reviewer. Tool-specific documents remain as historical records.

### 2026-09-05 — Separate Public Platform and Product Platform phases

**Decision:** Use Public Platform P0/P1 for the holding page and public website. Reserve Product Platform phases 0–9 for engineering/governance, Patient 0, Personal, secure longitudinal foundations, Veya, Family, Clinician, Intelligence, Lab and Research.

**Why:** Earlier documents used “Phase 0,” “Phase 1” and “Phase 1A” for different kinds of work.

**Implications:** Historical “Phase 1A” maps to Public Platform P0. Historical public-website “Phase 1” maps to Public Platform P1. Historical records are retained with status notices rather than rewritten.

### 2026-09-05 — Early-access capture implemented after deferral

**Decision:** Recognise the existing minimum-data early-access form and server-side webhook action as the current implementation. It remains unavailable when `EARLY_ACCESS_WEBHOOK_URL` is not configured.

**Supersedes:** The 2026-08-31 Phase 1A decision to ship no email capture.

**Why:** Later application work introduced the form, validation, consent field, privacy route and webhook boundary.

**Implications:** Enabling collection requires an approved processor configuration, public privacy information and the separate form/privacy hardening planned for Public Platform Phase 0C. No webhook or environment setting is changed by this decision.

### 2026-09-05 — Current brand derivatives are available

**Decision:** Treat the committed files under `public/vascurra/brain/`, `public/vascurra/homepage/` and `public/vascurra/homepage-v2/final-art/` as current web derivatives. Continue to record the original high-resolution master as unavailable in this repository.

**Supersedes:** Earlier implementation-state statements that the brain artwork and section artwork were wholly missing and the live composition still used placeholders.

**Why:** Later branches committed and integrated web-ready derivatives, but no verified 3000–4096px original master was added.

### 2026-09-05 — Public foundation hardening boundaries

**Decision:** Keep `/privacy` public while the unfinished marketing pages are gated. Enable the marketing gate only when `HOLDING_PAGE_PASSWORD` is configured, and use that server-only value to verify credentials and sign an eight-hour access token. Keep `/early-access` out of the sitemap and mark it no-index while it remains preview-only.

**Why:** People must be able to read privacy information before providing information. A fixed cookie and repository fallback password offered misleading security, while indexing a gated registration route was incoherent.

**Implications:** The gate remains lightweight marketing access control, not authentication and not protection for personal or health information. Reliable distributed form rate limiting still requires an approved shared service; the current low-volume form instead uses bounded payloads, a honeypot, strict validation and a timed webhook request.

### 2026-09-05 — Public attribution remains separate from internal documentation

**Decision:** Internal repository documents may retain appropriate project-leadership attribution. Current public website copy intentionally names no individual and must not expose the founding family's private medical story.

**Why:** Internal attribution is useful project context but is not consent or approval for public publication.

**Implications:** Any future public attribution requires an explicit content decision and privacy review.

### 2026-09-18 — Veya becomes the optional daily relationship layer

**Decision:** Position Veya on the public website as “Your everyday intelligence companion”: a proposed, optional conversational relationship that can keep chosen context connected over time. Replace the narrow generic inner-page story with a dedicated editorial `/veya` composition and five coded artwork handoffs.

**Why:** The earlier copy described a route through Vascurra but did not make Veya's everyday role, flexible rhythm, continuity, provenance, permissions or relationship to Vascurra Lab sufficiently clear.

**Safety boundary:** Public copy may describe optional check-ins, questions, notes, preparation and reminders around an agreed medication schedule. It must not imply autonomous monitoring, diagnosis, prediction, medication prescribing or changes, emergency management, automatic sharing or research participation. Important patterns lead to human review.

**Implications:** `/veya` remains conceptual and `noindex, nofollow` with the unfinished V2 routes. No product workflow, health-data collection, production AI, database, environment variable or release-gate behaviour is introduced by this decision.
