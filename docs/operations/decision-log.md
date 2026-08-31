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
