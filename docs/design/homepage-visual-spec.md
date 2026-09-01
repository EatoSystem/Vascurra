# Homepage visual spec (implemented)

The public homepage is a presentation rebuild of the Phase 1A holding page. Functionality added in this pass: `/early-access` (validated form) and `/privacy`. No health data is collected.

## Sequence

1. **Hero** — Vascurra, “Intelligence for vascular cognitive health.”, independence/identity, audience line, Request Access + Discover Vascurra, large brain composition.
2. **Human context** — “Living better with vascular cognitive change.”
3. **Connected system** — “Cognition doesn’t change in isolation.” Eight life factors.
4. **The idea** — person-centred framing question.
5. **Four perspectives** — People, Families, Clinicians, Research, with a conceptual device.
6. **People** — Understand / Track / Support + phone UI (conceptual).
7. **Families** — check-ins, coordination, shared understanding + tablet UI.
8. **Clinicians** — trusted intelligence; visit-context UI; no diagnostic outputs.
9. **Research** — longitudinal / structured / consented framing + laptop UI.
10. **Understand · Track · Support** — one system, three connected capabilities.
11. **Trust** — privacy, architecture, human control, responsible development. No certification badges.
12. **Philosophy** — “Don’t replace capability. Support it.” Recall → Hint → Guide → Answer on deep teal.
13. **Principles** — human-first journey along a vascular spine.
14. **Development** — ambitious in vision, careful in development, plus safety boundaries.
15. **Final CTA** — “Vascurra is just beginning.” Request Access. Brain returns on deep teal.

## Navigation

Why Vascurra · For People · For Families · For Clinicians · Research · Request Access.

No dead links. Science/About pages are not in the nav because those routes are not built.

## Copy rules

All homepage and form strings live in `content/`. Claims tests walk that copy. Mockups are labelled “Conceptual preview” and use fictional, non-diagnostic examples.

## Request Access

`/early-access` validates name, email, role and consent on the server. If `EARLY_ACCESS_WEBHOOK_URL` is set, the payload is posted there. If it is not set, the form reports that registration is not connected and does not pretend to store the details.
