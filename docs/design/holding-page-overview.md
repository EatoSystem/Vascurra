# Public holding page — project overview

## Approved task

On 5 October 2026, the founder requested a holding page with the existing full
homepage hero and a short project overview to share before the full website
launch. This expands the single Public Platform P0 page at `/`; it does not
publish the gated P1 routes or provide Product Platform functionality.

## Composition

Reuse `HomeHero discoveryFirst`, exactly as `/preview`: typography, text,
static `BrainStage`, spacing and responsive order. Keep the approved homepage
introduction and the limited “beginning with Dad” attribution allowed by the
21 September 2026 decision. Its discovery CTA points to `#overview`; its
secondary CTA points to `#development`. The original `/preview` hero defaults
remain unchanged.

Four brief chapters provide the overview:

1. The mission: daily life, learning and the aim to build for more people.
2. The project: proposed Veya, VeyAI and Vascurra Lab layers.
3. Proposed perspectives for people, families, clinicians and research.
4. Development status, human judgement, choice and evidence before claims.

Navigation uses only existing local section anchors. Privacy remains public,
and the existing private-preview unlock form stays in the footer. There is no
public early-access collection, payment flow, live product demonstration,
health statistic, new medical claim, launch date or research-enrolment promise.
All new public copy is in `content/holding.ts`, covered by the existing claims
guardrail; the closing disclaimer reuses `content/home.ts`.

## Assets and implementation

- Hero: the unchanged canonical brain and existing approved hero treatment.
- Mission: `/vascurra/v2/section-02-origin-illustration.webp`, 720×696,
  decorative, complete aspect ratio on white.
- Perspectives: `v4Artwork.system`, 1672×941, complete image with a conceptual
  alternative and equivalent semantic HTML. It does not indicate automatic
  access, current infrastructure or clinical results.
- Project layers and development status deliberately use HTML and space.

No asset is generated, materially edited or replaced. The overview is a server
component using existing colour tokens, `CtaLink` and `VascurraGradientText`.
The luminous gradient is used only on the deep teal development chapter. No
dependency, gate, environment variable, sitemap, robots policy or production
setting is changed. The footer accepts server-rendered content through the
existing client unlock component; its credential handling is unchanged.

## Verification

Lint, typecheck, the 26 targeted public-copy/preview-gate tests, all 79 tests
and the production build passed. Inspected `/` at 1440, 768, 390 and 320 pixels:
the hero heading, type metrics, gradients, brain source and image dimensions
match `/preview`. Displayed images loaded and no browser/resource errors,
horizontal overflow or clipped text were found.

Local navigation, keyboard focus, mobile menu/Escape behavior and sticky-header
anchor clearance passed. Reduced motion has no active animations; public
overview content and images remain available without JavaScript. Locked
`/preview`, `/100-Billion` and `/fund` redirect to `/`; their unlocked responses
remain noindex/nofollow. Root retains its existing public metadata.

Private-preview login passed fresh-valid and invalid-then-valid submissions.
An initial browser-test timeout was resolved by waiting for the submit button
to become enabled before the second submission; no application or cookie
security change was needed. Local review uses a fictional gate credential.

Before/after screenshots and browser reports are local review artifacts under
the ignored `.tmp/public-home-baseline` and `.tmp/public-home-final` directories.
No full WCAG certification or Lighthouse performance score is claimed.

Implementation and local verification are separate from production deployment.

## 5 October 2026 — focused holding-page refinement

The founder's subsequent holding-page brief supersedes the exact `/preview`
hero-matching requirement above for `/` only. The earlier composition and
verification are retained as history. The full homepage keeps its existing
copy, default hero rendering and artwork treatment.

The holding variant of `HomeHero` uses the same approved canonical raster
brain, with a larger whole-image layout and no coded decorative field or added
motion. Its heading retains “Intelligence for / vascular cognitive / health.”
and the three independence, identity and breakthroughs statements are visible
at every viewport size. Holding-only copy now describes “an intelligence and
support system for vascular cognitive health, currently in development.” This
is a description of the proposed project, not deployed clinical functionality.

On white, the hero phrase and thin layer rules reuse the exact existing 104°
ink gradient: mint, teal, cyan and blue ink tokens. The brighter shared hero
gradient has stops below the large-text contrast target; its full-homepage
treatment is outside this pass. The trust chapter retains its existing
luminous 90° gradient on deep teal. Background rhythm remains white, white,
pale mist, white, deep teal and white.

Mission paragraphs and audience annotations are shortened without removing
the person's priorities, proposed development status, human review, separate
research consent or professional-judgement boundary. The portrait's maximum
width changes from 448 to 512 pixels; the complete system image changes from
1024 to 1248 pixels. Both remain lazy-loaded, unboxed and uncropped, with
updated responsive image sizes. Project numerals and trust principles have
more presence; no cards, icons, new sections or artwork are introduced.

The restrained footer separates the project name and development status and
provides Privacy and Project status links. The functional preview Login stays.
Contact is deferred: the existing `/contact` form is gated and no approved
public email address is present, so linking it from the holding footer would
return a locked visitor to the holding page.

The implementation remains server-rendered apart from the existing navigation
and preview-unlock controls. No dependency, data collection, medical claim,
preview gate, sitemap, metadata policy, environment variable or production
setting changes. Richer product explanations, contact flows and participation
mechanisms belong to the full-site launch rather than this introduction.

### Refinement verification

`npm run lint`, `npm run typecheck`, the 26 targeted public-copy/gate tests,
all 79 tests and the final production build passed. Holding content was
inspected at 1440, 1024, 768, 430, 390, 375 and 320 pixels. Hero and mission
keep two columns from 768 pixels; mobile actions stack and layer annotations
reflow beneath their numerals when enlarged text needs more room.

The initial enlarged-text review found hero-word and layer-annotation overflow.
Scoped wrapping fixes were applied and rechecked through 160 CSS pixels and
with a doubled root font at 390 and 320 pixels. No final horizontal overflow,
clipped content or browser/resource errors were found. Very narrow enlarged
headings can wrap within words rather than lose content.

The holding page also passes a scoped class to the existing `SiteHeader`.
Its row can wrap when enlarged text needs more space; at extremely narrow
widths the approved brain remains the home link alongside a compact Menu
button. This resolves the wordmark/Menu overlap found at 195 and 160 CSS
pixels without changing the full homepage's header defaults. Ten final header
cases passed collision, text bounds, focus, Menu/Escape and anchor checks;
the compact home link is 44×44 pixels. Protected full-homepage header pixels
match the saved baseline exactly at 1440 and 390 pixels.

Keyboard focus, mobile menu and Escape, section anchors, fresh and invalid-then-
valid preview unlock, no-JavaScript content, reduced motion, forced colours,
locked redirects and unlocked noindex behavior passed. Sampled HTML text
contrast is at least 4.70:1. The 15 full-homepage/campaign/Fund reference cases
retain their copy, geometry, artwork and metadata. No full accessibility
certification, assistive-technology audit or performance score is claimed.

The landscape system image's embedded labels are necessarily small on mobile;
the complete artwork remains intact and readable HTML annotations carry the
audience meaning. Before/after and corrected reflow evidence is in the ignored
`.tmp/holding-refinement-baseline`, `.tmp/holding-refinement-final` and
`.tmp/holding-refinement-final-fixed` directories, with the final header delta
in `.tmp/holding-refinement-final-header`. This refinement is local
and has not been deployed.

## 5 October 2026 — verified preview deployment

The local-only status above records the implementation checkpoint. Following
the founder's explicit deployment request, the verified working tree was
deployed to the existing `eatosystem/vascurra` Vercel Preview target:
https://vascurra-2ua0x16ow-eatosystem.vercel.app.

Deployment `dpl_7DQQRhz3gGM3L1TM2tuVtDaiSzuZ` is READY; its remote build
compiled, typechecked and generated 32 static pages. Deployed holding copy,
privacy, approved optimized artwork and stylesheet bundles returned HTTP200.
Locked full-homepage/campaign/Fund routes still redirect to `/`, and preview
responses retain noindex. Existing protection and environment values remain.

This is a preview release. No Git push/merge, production promotion or public
production-domain change was performed. Local review artifacts and environment
files were excluded from source uploads by the existing `.vercelignore`.

## 5 October 2026 — human origin and scientific framing

This subsequent approved brief supersedes the prior refinement's gradient
choice and four-chapter composition, preserving both records above. The
holding page remains a distilled introduction, separate from `/preview`.
The new work is local; the preview URL above contains the preceding revision.

### Composition and artwork

The flow is hero, human mission, scientific challenge, three proposed layers,
perspectives, proposed research direction, development/trust and footer.
The challenge and layers share one pale-aqua chapter; the research direction
is a compact editorial field. Distinct heading scales and a continuous
horizontal gradient rule connect the architecture without cards or icons.
The mission includes the explicitly supplied systems-developer profession
and Dad attribution permitted by the 21 September decision. No further
identity or medical detail is published.

The complete approved brain's desktop cap changes from 688 to 720 pixels
(about 5%); the portrait cap changes from 512 to 576 (12.5%); the system
image changes from 1248 to 1408 (about 13%) at wide desktop. Actual widths
remain constrained by responsive space. The system may extend beyond the
text column within the viewport. All supplied files, aspect ratios and
meaningful image content remain intact. No new artwork is made.

Redundant generic hero, mission and closing descriptions are replaced rather
than repeated. The research statement, current/future status and explicit
observations/clinical-findings distinction carry the added information.
Privacy and functional Login remain; Contact is still deferred for the
documented lack of an approved public destination.

### Gradient provenance and contrast

Repository and Git inspection located the canonical colour lock at commit
`53ecf86` and the original full-homepage hero implementation:
`linear-gradient(90deg, #0aa3bc 0%, #2ecfc4 42%, #49c768 100%)`.
The holding hero had instead selected `.text-gradient`, a 104-degree
mint/teal/cyan/blue ink utility. The shared display component had separately
drifted to a 92-degree four-stop treatment and a different luminous family.

`app/brand-canonical.css` owns the canonical bright and accessible ink tokens.
`VascurraGradientText`, its scaffold styles and legacy text utility aliases
consume that family. The holding hero and the selective "Build for many"
statement use the ink version on white; "Careful in development" uses the
original bright stops on unchanged deep teal. The connection rule uses the
bright token as a subordinate UI divider, not artwork or text.

The ink counterpart is not an invented palette: the exact #006f86 / #08766f /
#23783d values already existed in the original `globals.css` light-surface
hero treatment. Its stops exceed 5.48:1 against white. The bright family has
a minimum 1.94:1 against white, so cannot meet 3:1 for large text there;
against #083d4a deep teal its minimum is 3.93:1. Contextual variants preserve
the same cyan/aqua/green progression and exact original stops. Graphical
artwork variables and supplied artwork are outside the text consolidation.

### Scientific and status audit

| Public statement | Category | Provenance / limit |
| --- | --- | --- |
| The founder is a systems developer; Dad is a retired doctor living with early vascular dementia. | FACT, limited approved attribution | Founder-supplied brief and 21 September public-attribution decision; no added personal details. |
| Veya, VeyAI and Vascurra Lab roles; permission, consent, human review and evidence boundaries. | PROPOSED | Product/clinical/architecture documents; descriptions of design, not implemented clinical workflows. |
| Vascular cognitive health is a systems problem. | PROJECT FRAMING | Describes the scope and fragmentation Vascurra aims to address; it is not a clinical outcome claim. |
| Everyday experience, family observations, clinical information and scientific research are often separated. | PROJECT FRAMING | Founder-approved problem statement; no automatic access, causal inference or data sharing is implied. |
| Everyday observations are not clinical findings. | Boundary | Lived experience, clinical evidence and research evidence remain distinct. |
| Today: architecture, Veya concept design, lived context, consent and evidence principles. | FACT about design work | Repository documents and public conceptual compositions; no operational platform claimed. |
| Tomorrow: governed pilots, clinical/research collaboration and formal evaluation. | PROPOSED | Future direction, not live studies or existing partnerships. |

The 7 October Challenge redesign removes the NHS citation and the narrow
background-fact block from the holding page. No statistics, results, named
collaborators, partnership logos or testimonials are added. Before
research protocols or product claims develop, a vascular-cognition specialist
should review the research construct and longitudinal-context language;
this implementation does not represent that domain-expert review.

### Verification

Results and exact affected-file inventory are recorded after the final checks
in the ignored `.tmp/holding-science-review.md` review artifact. Baseline
screenshots are in `.tmp/holding-science-baseline`; later verification records
are separate so the previous refinement evidence remains intact.

The final holding review passed at 1440, 1024, 768, 430, 390, 375 and 320px.
All 16 normal route/width loads were HTTP200, with no text/document overflow,
browser errors, failed resources or missing visible artwork. Nine gated
homepage/campaign/Fund comparisons retained copy, geometry and metadata;
protected desktop/mobile header pixels also matched. The deliberate gradient
colour correction is the shared-site visual change.

No-JavaScript, reduced-motion and forced-colours content, seven 200% zoom
equivalents (down to 160 CSS pixels), two doubled-root-font cases, keyboard
focus, all six section anchors, Menu/Escape and fresh/invalid-then-valid unlock
passed. Returned/reopened login forms have no stale error. Hero ink matches
the full-homepage text family exactly: 5.48:1 minimum on white. The development
headline's exact bright gradient reaches 3.93:1 on deep teal and passes the
large-text requirement. No full accessibility certification is claimed.

Main copy is 473 words versus 298 before this pass. At desktop the page is
6764px versus 5552px; across the seven viewports it is approximately 22–33%
taller. Added origin and scientific context therefore remain a material
length increase, while the 1440px full `/preview` composition is 15469px.
At extreme enlarged/narrow views, headings can wrap within words to keep
content available. Mobile system-image labels remain small, with equivalent
HTML audience explanations below.

Lint, standalone TypeScript, 26 targeted copy/gate tests, the three canonical
gradient contract tests, all 79 full tests and the production build passed.
The initial stale gradient contract was updated to assert the approved exact
tokens and contextual consumers; clinical claims guardrails were unchanged.
Additional shared-gradient consumer checks found one Personal-page dark
chapter receiving ink. Its inherited gradient context was corrected; the
supplemental result is retained with `.tmp/holding-gradient-consumers`.
The corrected Personal chapter passed at 1440 and 390px, including gradient
contrast, forced colours and simulated background-clip fallback. Fresh public
smokes after that rebuild retained the exact verified main copy and passed
bounds/errors checks. No unresolved browser finding remains. Review is local;
this subsequent pass has not been pushed, merged or deployed.

## 5 October 2026 — original screenshot gradient correction

The founder's supplied original full-homepage screenshot makes the visual
mismatch clear. The preceding pass substituted #006f86 / #08766f / #23783d
inks for the actual bright #0aa3bc / #2ecfc4 / #49c768 palette. Matching the
hue direction was insufficient: these were different colours. It also applied
the complete cyan sweep again to “health.” instead of the original green
continuation. Both choices are superseded by this correction.

`--vascurra-brand-gradient` is now the display default on both white and dark
surfaces: 90 degrees, original 0% / 42% / 100% stops. A central
`--vascurra-brand-gradient-end` holds the original 90-degree aqua-35%-plus-green
mix at 0%, ending in pure green at 100%. `VascurraGradientText continuation`
and `.text-mark-hero-end` consume that same endpoint token. The holding and
full-homepage heroes now use identical original colour sources and last-line
continuation. Text-only consumers that were changed to ink in the preceding
pass also return to the original bright display family.

This is a colour-only correction. Copy, spacing, heading sizes, artwork,
layout, content order and clinical/privacy boundaries remain. Readable solid
unsupported-gradient and forced-colours fallbacks remain. The unused ink
token is retained as a documented alternative, not selected as the approved
display treatment.

The original bright sweep has minimum contrast about 1.94:1 on white; the
green continuation also falls below the large-text AA target. This revision
therefore preserves the explicit requested screenshot appearance with a
recorded display-text contrast limitation. The previous revision's 5.48:1
white-background result does not apply to this restored bright treatment.
Body copy and essential controls retain their solid high-contrast colours.
No complete AA compliance is claimed.

Before/after colour evidence and focused verification for this correction
are saved separately under `.tmp/gradient-original-baseline` and
`.tmp/gradient-original-final`. The correction is local and undeployed.

### Final verification of the screenshot correction

The public holding and protected homepage heroes were compared at 1440, 768
and 390px. All six normal captures use the exact original bright stops and
green continuation, with unchanged copy, section/artwork geometry, page
heights and hero text bounds. All returned HTTP 200 with no browser, console
or resource errors and no normal main-text overflow. The existing open local
preview was refreshed to display the correction.

Forced colours, JavaScript-disabled content and solid unsupported-gradient
fallbacks passed on both routes. A final invalid-end-token simulation also
keeps “health.” readable when the colour mix cannot render; the holding
component retains opaque clipped text paint beneath its gradient image.
The full results and screenshots are recorded in
`.tmp/gradient-original-final/QA.md` and
`.tmp/gradient-original-final-fallback`.

The original bright colours have minimum white-background contrast of
1.94:1 for the primary sweep and 2.10:1 for the continuation. Public holding
reflow passed at 195/160 CSS pixels and at 390/320px with doubled root text.
The protected homepage has existing clipping at those extreme reflow sizes.
A controlled colour-only comparison reproduced identical clipping with the
previous ink tokens; that layout limitation is outside this colour correction.

Lint, standalone TypeScript, all 79 tests and the production build passed.
After the final fallback safeguard, the three gradient-contract tests and
the production build passed again. No artwork, healthcare copy, metadata,
gate, production setting or deployment changed in this correction.
