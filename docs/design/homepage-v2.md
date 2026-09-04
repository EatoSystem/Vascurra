# Vascurra Homepage V2 — Sections 03–07

## Status
**APPROVED DESIGN DIRECTION / IMPLEMENTATION REFERENCE**

Sections 01, 02 and 08 are protected and must remain unchanged.

The redesigned homepage order is:

1. Hero — unchanged
2. Living better with vascular cognitive change — unchanged
3. Understand. Track. Support.
4. Don’t replace capability. Support it.
5. Ambitious in vision. Careful in development.
6. One platform. Multiple perspectives.
7. Privacy by design. Security by default.
8. Vascurra is just beginning — unchanged

## Design character

Vascurra must feel:
- human
- calm
- design-led
- distinctive
- editorial
- premium
- hopeful
- accessible for older people and families

It must not feel:
- corporate
- clinical
- generic SaaS
- hospital-like
- like a deck of feature cards
- like a collection of tiny diagrams

Use pure white for Sections 03, 05, 06 and 07.
Use deep Vascurra teal/navy for Section 04.
Use the approved restrained teal → cyan → living-green text gradient as an accent.
Do not use the canonical Vascurra brain mark in Sections 03–07.
Do not add stock photography to Sections 03–07.

## Reference assets

`/public/vascurra/homepage-v2/03-understand-track-support.webp`
`/public/vascurra/homepage-v2/04-support-capability.webp`
`/public/vascurra/homepage-v2/05-responsible-development.webp`
`/public/vascurra/homepage-v2/06-multiple-perspectives.webp`
`/public/vascurra/homepage-v2/07-privacy-control.webp`
`/public/vascurra/homepage-v2/sections-03-07-full-reference.webp`

These are strict visual-composition references, not flattened sections to publish as screenshots.

Build headings, copy, controls and layout in real HTML/CSS/React.
Final custom Vascurra artwork can replace the visual placeholders later.

---

# SECTION 03 — Understand. Track. Support.

Eyebrow:
HOW VASCURRA HELPS

Heading:
Understand. Track. Support.

Supporting line:
Make sense of today. See change over time. Get the right support when it helps.

Intro:
Vascular cognitive change is rarely one thing. Vascurra is being designed to bring the wider picture together, follow meaningful change over time, and offer support that adapts to the person.

Understand:
Bring the whole picture into view.

Health, routines, sleep, movement, confidence, family and daily life — understood together.

Track:
Notice what changes — and what stays steady.

Build a clearer picture over time without turning life into constant measurement.

Support:
Add help gradually, without taking over.

Start with what the person can already do. Add support only when it is useful.

Closing line:
Clarity without overwhelm. Support without dependence.

Design:
One continuous horizontal composition.
Complexity on the left → pattern in the middle → clear support on the right.
Do not make three cards.
Use one large abstract connected visual.
No people.
No brain icon.

---

# SECTION 04 — Don’t replace capability. Support it.

Eyebrow:
BUILT AROUND HUMAN CAPABILITY

Heading:
Don’t replace capability.
Support it.

Body:
The best support does not take over. It starts with what a person can still do — then adds only what helps.

Recall:
Start with what you know.

Hint:
A gentle cue.

Guide:
A little more structure.

Answer:
Clear support when needed.

Closing line:
Support should grow only when needed — and step back when it isn’t.

Optional lock-up:
Support that adapts. Independence that lasts.

Design:
Deep Vascurra teal/navy.
One illuminated journey across the section.
Recall → Hint → Guide → Answer.
Minimal text.
No four boxes.
No dashboard.
No brain icon.

---

# SECTION 05 — Ambitious in vision. Careful in development.

Eyebrow:
HOW WE ARE BUILDING

Heading:
Ambitious in vision.
Careful in development.

Intro:
Vascurra is being built deliberately — with human judgement first, privacy from the start and evidence before claims.

Human judgement first:
Technology can inform. People still decide.

Privacy from the start:
Control and consent are part of the product, not additions later.

Evidence before claims:
Possibility can move quickly. Clinical claims must earn their place.

Responsible development:
Vascurra is currently in development. Concepts shown describe product direction, not live medical functionality.

Design:
Editorial triptych.
Three large sculptural visual stages.
No cards.
No people photography.
No brain icon.
Strong typography and generous white space.

---

# SECTION 06 — One platform. Multiple perspectives.

Eyebrow:
ONE SYSTEM. MANY PERSPECTIVES.

Heading:
One platform.
Multiple perspectives.

Supporting line:
One story, seen differently by the people who need it.

Personal:
A calmer view of today.
Routines, check-ins, orientation and preparation.

Family:
Useful context, without surveillance.
Shared understanding while respecting independence.

Clinician:
Relevant history, without the noise.
Clearer context for better-prepared conversations.

Research:
Longitudinal learning, with consent.
Responsible patterns over time.

Development note:
Vascurra is currently in development. These views describe product direction, not live clinical functionality.

Design:
One connected product ecosystem.
Personal = tall mobile.
Family = medium collaborative view.
Clinician = largest, dominant wide view.
Research = secondary analytical view.
No four equal cards.
No four identical phones.
No people photography.
Do not use the canonical brain mark.

Any interface content must remain conceptual and benign.
Do not publish fabricated diagnostic scores, risk ratings, treatment recommendations, clinical findings, certifications or research outcomes.

Safe examples:
- routine completed
- check-in
- note added
- appointment upcoming
- family update
- source attached
- reported change
- consent status
- timeline entry

---

# SECTION 07 — Privacy by design. Security by default.

Eyebrow:
TRUST BY DESIGN

Heading:
Privacy by design.
Security by default.

Lead:
Your information should never become harder to understand than your health.

See what is shared:
Know what information is being used.

Know who can see it:
Access should always be understandable.

Change your mind:
Consent and permissions should be easy to revisit.

Keep research separate:
Participation should be explicit and governed.

Closing line:
Your information. Your relationships. Your choice.

Design:
Pure white.
Large control-system visual centred around the individual/account.
Concentric layers can represent:
Privacy
Consent
Access
Sharing
Research

The metaphor is control radiating outward from the person.
Do not use giant padlocks, cybersecurity stock visuals or compliance-badge rows.
Do not add unsupported HIPAA/SOC2/ISO/GDPR certification claims.
Do not use the canonical brain mark.

---

# Responsive / accessibility

Target:
1440
1280
1024
768
430
390

Do not shrink desktop mechanically.

Older people and families are important audiences:
- body copy approximately 17–20px where possible
- strong contrast
- generous line height
- clear hierarchy
- large interaction targets
- no hover-only meaning
- no tiny metadata

Respect prefers-reduced-motion.

## Protected sections

Do not redesign Section 01, Section 02 or Section 08.
Any global styling change that alters them must be corrected.

## QA

Capture the full homepage at 1440px.
Compare Sections 03–07 against the supplied full reference and individual references.
Then check 1024, 768, 430 and 390px.
