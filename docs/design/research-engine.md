# Research Engine — proposed capability architecture

## Approved scope — 6 October 2026

The founder supplied the Research Engine brief in the current chat. The current
homepage remains the visual and structural source of truth. Add a compact
capability layer to its existing Capital Flywheel section and a dedicated,
gated `/research-engine` page. Keep `/fund` and `/100-Billion` intact.

The relationship is:

- `/100-Billion`: proposed symbolic participation in the mission.
- `/fund`: the proposed need for continuous mission capacity.
- `/research-engine`: scientific capability that resources could help build.

This is Public Platform strategic communication, not Product Platform
implementation. It authorises no studies, collection, patient tools, model
execution, literature ingestion, transactions, prediction or clinical workflow.
All programmes are proposals, conditional on expertise, evidence, funding,
feasibility, separate approvals and governance.

## Data and route architecture

`content/brain-cells.ts` remains the numeric source. Four canonical IDs supply
the amounts and derived symbolic equivalents to Home, Fund, Brain Cells and
Research Engine. The full capital target is derived from the full Brain Cell
target multiplied by the symbolic unit value. No fifth horizon is introduced.

`content/research-engine.ts` holds typed programme names, IDs, status,
descriptions, questions, domains, proposed AI roles, required human expertise,
boundaries and source references. It also holds the chapter text, horizon
mapping, compact homepage lines and separate long-term mission proposals.
The eight-stage reinvestment flow reuses `missionFlow` from Brain Cells.

`app/(v2)/research-engine/page.tsx` uses the existing V2 header/footer and
marketing gate. Metadata remains `noindex, nofollow` with a route canonical.
The public-path allowlist is unchanged. Research Engine is the first child
in the existing Research navigation dropdown; no new top-level item is added.

The new page is a server component. Native HTML `details` exposes secondary
programme domains and responsibility detail without JavaScript. Enabling
capabilities use compact disclosures, while primary programmes have editorial
rows and selected larger titles. Meaningful content remains HTML.

A rem-based container threshold stacks research columns when enlarged text
needs more room. Shared navigation can wrap, and footer/mobile menu groups
become one column below 24rem. These changes address confirmed narrow-reflow
and enlarged-text collisions without changing normal-width content or artwork.
The open mobile menu can scroll within the viewport space below the actual
wrapped header. The programme anchor reserves additional sticky-header space.
The header uses a rem-based container threshold to offer the compact menu with
enlarged text, avoiding a navigation bar that occupies much of the viewport.

## Page composition

The page moves through a typographic hero, capital/capability introduction,
AI and human responsibility split, a dark research loop, four capital horizons,
common data/provenance, compute, the separate full mission, a dark daily
research question, expertise, five forms of capital, reinvestment, principles,
evidence-led allocation and a final dark statement.

The proposed programmes cover Atlas, Evidence Engine and Patient 0; cohorts,
imaging and biomarkers; international research, prevention questions and
optional digital measures; experimental medicine, therapeutic hypotheses and
trial methods. Supporting capabilities remain visibly proposed.

The full long-term mission separately names Prevention Project, Human Vascular
Brain Atlas, Cure Programme, Experimental Medicine Network and Permanent AI
Research Infrastructure. Cure Programme carries the adjacent label “Proposed
long-term therapeutics research” and an explicit no-cure-promise boundary.

The homepage gains one capability line and short descriptor per existing
horizon, a compact future-labelled full-mission line and a Research Engine
`CtaLink`. Amounts, order, main artwork and preceding/following chapters remain.
No new large homepage chapter or fundraising layout is added.

Homepage summaries describe “Vascular Factor Research” and “Vascular Factors”
to preserve the existing public-copy vocabulary guardrail. The dedicated page
retains the founder's proposed Prevention Engine and Prevention Project names
with adjacent research-only status and explicit limits. Claims tests and their
allowlists are unchanged.

## Artwork and display colour

Only existing, supplied assets are integrated unchanged:

| Key | Dimensions | Purpose |
| --- | --- | --- |
| `v5Artwork.capitalNetwork` | 1672 × 941 | Hero capability expansion; also existing homepage art. |
| `v4Artwork.labTrust` | 1672 × 941 | Lived context and scientific evidence, on deep teal. |
| `v5Artwork.permanentCapacity` | 1672 × 941 | Horizon 04 only; contains embedded €1B+ wording. |
| `v5Artwork.capitalFlywheel` | 1672 × 941 | Proposed reinvestment, with the complete eight-stage sequence in HTML. |

V5 provenance is the founder-approved pack README and commit `6bdaece`.
The V4 research-flow asset is committed in `8ca2ef2`. Images retain their full
aspect ratios, without cropping, recolouring, filtering or source optimisation.
No new diagram, SVG illustration, generated image or substitute artwork is
created. Ordered editorial text, simple dividers and numeric list markers are
subordinate interface elements.

White-background research headings use solid navy. The final large phrase
on deep teal uses the existing original bright canonical gradient. Global
tokens and the restored homepage/holding hero colours are unchanged.

## Scientific and privacy boundaries

See `docs/clinical/research-engine-source-map.md` for provenance, evidence type,
population and limits. Sources support the research domains, not Vascurra's
capabilities, programme feasibility, partnerships, validation or outcomes.

The prevention question avoids assuming an identifiable, preventable stage
before irreversible damage. The cohort question asks how measures relate over
time; groups are distinct or overlapping, not inevitable disease stages.
Biomarkers are candidates requiring intended-use validation. Patterns and
simulations cannot establish causation or clinical truth.

Patient 0 remains co-design and longitudinal learning, not a trial or evidence
of efficacy. The listed future domains are not collected by the website.
Digital research would require optional, purpose-specific participation and
separate explicit consent. A language model cannot be the record, permission
system or clinical authority. Research, product and clinical responsibilities
remain distinct.

Scientific expert review remains necessary before protocols, participant
research, model development, therapeutic work or clinical claims. Publishing
this strategic page does not represent that review or authorise those activities.

## Validation record

Frozen-build baseline: `.tmp/research-engine-baseline`, covering Home, Fund,
Brain Cells and holding at 1440, 768 and 390px. All 12 final regression cases
retain the existing normal header dimensions and non-capital content geometry.
Homepage growth is confined to capital: approximately 577/602/892px respectively.

Final lint, strict typecheck, all 84 tests across 14 files and production build
pass. Research Engine is statically generated. Seven normal viewports,
seven narrower reflows and five doubled-root-text cases passed; confirmed
capital-column collisions were fixed. Keyboard/native disclosures, no-JS
content, reduced motion, forced colours, assets, redirects and metadata passed.
The final targeted open-menu/anchor checks also pass at narrow widths and
enlarged text, including keyboard access to the last menu link.

Exact files, scientific review needs, browser evidence and known existing
homepage limitations are recorded in `.tmp/research-engine-review.md` and
`.tmp/research-engine-final`. This new pass has not been pushed, merged or
deployed. It does not establish site-wide WCAG certification.
