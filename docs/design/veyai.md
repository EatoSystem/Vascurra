# VeyAI — internal intelligence architecture page

## Approved scope — 6 October 2026

The founder's VeyAI brief authorises a dedicated `/VeyAI` website page and
deployment when complete. The established release target remains protected
Vercel Preview. Production promotion, domain changes, push and merge are not
part of this pass.

Veya is the proposed human-facing everyday companion. VeyAI is the proposed
internal network of specialist agents supporting mission work. Vascurra
Intelligence remains the proposed governed interpretation layer beneath Veya;
this page does not rename it or merge personal context with organisational
information. The Research Engine describes scientific capability; VeyAI
describes the assistance that could help operate it.

## Composition and implementation

`app/(v2)/VeyAI/page.tsx` supplies route metadata and renders the server-only
`VeyAIPage`. The existing V2 layout supplies SiteHeader and VascurraFooter.
The public-path allowlist, marketing gate and noindex behaviour are unchanged.
The requested case matches the existing mixed-case `/100-Billion` convention.
No lowercase alias is introduced: a case-insensitive redirect matcher could
loop against the canonical path.

The page groups the brief into editorial chapters rather than 36 repetitive
sections: hero, why specialists, Veya comparison, Core and human authority,
foundation roles, illustrative workflow, three later horizons, two families,
supporting organisation roles, contracts, scoped access, Research Engine,
capital summary and final distinction.

Local `AgentDefinition`, `AgentHorizon` and `TextList` functions avoid duplicate
markup. The page reuses CtaLink, CapitalAmount and VascurraGradientText. Native
HTML details exposes scope and required human ownership without JavaScript;
status, purpose and prohibitions stay visible. No client component or package
is added. Rem-based container rules stack columns under text enlargement.

`content/veyai-agents.ts` defines 21 specialist role proposals, status labels,
workflow, contract requirements and safety boundaries. Four primary roles
(Research, Evidence, Operations, Capital) lead the foundation. The next horizons
add Cohorts/Imaging/Biomarkers/Compute; Partnerships/Clinical Research/Prevention/
Governance; then Therapeutics/Trial Intelligence/Discovery/Global Operations/
Global Capital. Fundraising/Product/Communications are additional proposed
organisation roles; Finance is a future supporting role. Their horizon mapping
is illustrative planning, not a commitment or implementation schedule.

Mission and Organisation are exhaustive family groupings of the same agent
configuration. Core is described separately as proposed orchestration, never
an autonomous executive. All amounts and symbolic equivalents derive from
`content/brain-cells.ts`. The full mission remains separate from four horizons.
The allocation sequence reuses the existing Research Engine configuration.

The existing The System navigation item becomes a dropdown containing System
overview, Veya and VeyAI. The existing direct Veya link is retained for
continuity. No extra top-level item or footer expansion is introduced.

## Visual direction and assets

Typography, thin rules, whitespace, pale aqua and deep teal carry the page.
There is no supplied VeyAI-specific artwork, so the hero is typographic as the
brief permits. No artwork, icons, graphs, SVGs or substitutes are created.
Existing shared header/footer brand assets are reused unchanged. The original
canonical bright gradient appears on dark chapters, with solid navy headings
on white. Global tokens, holding-page gradient and all source assets are intact.

## Governance and review boundaries

Governance applies from the foundation, irrespective of the later Governance
agent proposal. The model cannot be a permissions authority. Deterministic
services enforce access and humans remain accountable. Every future agent
would require a purpose, permitted data, prohibited actions, evidence standard,
confidence/abstention requirements, human owner, escalation and audit history.
Owners are role requirements, not claimed appointments. Safeguards are proposed
requirements, not statements about deployed systems.

Data minimisation, separate research purpose and consent, human approval of
external action, sensitive-log minimisation and non-authoritative AI outputs
are explicit. No health data, patient tools, records, live agents, model APIs,
ingestion, external messaging, financial actions, studies or clinical workflows
are implemented. Public Platform and Product Platform remain separate.

Scientific-domain wording follows the scoped research proposals documented in
`docs/clinical/research-engine-source-map.md`; it adds no efficacy or causal
claim. The supplied prevention question is tightened to avoid assuming an
identifiable stage before irreversible damage. Imaging/biomarker/therapeutic
work requires specialist review and validation. Simulations are not clinical
evidence. Partnerships, staffing and funding are not presented as existing.

Before actual activation or research, scientific review is needed for agent
intended uses, appraisal standards, biomarker/imaging interpretation, prevention
questions, trial methods and therapeutic hypotheses. Legal, privacy and ethics
review is needed for contracts, lawful bases, consent, participant access,
external communications and financial authorities. This page grants none of
those operational approvals.

Validation and deployment evidence for this pass is recorded in
`.tmp/veyai-review.md`; no site-wide accessibility certification is implied.
