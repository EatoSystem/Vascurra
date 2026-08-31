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
