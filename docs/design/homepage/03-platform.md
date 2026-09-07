# Section 03 — One platform. Multiple perspectives.

## Status
**APPROVED / LOCKED DESIGN DIRECTION**

Implement this section only from the approved assets and this specification. Do not reinterpret the core composition.

## Purpose
Show Vascurra as one connected platform experienced differently by four audiences:
- People
- Families
- Clinicians
- Research

The section must communicate **one ecosystem, not four separate products**.

## Approved assets
Expected under:
`/public/vascurra/homepage/03-platform/`

- `section-reference.webp` — full desktop visual reference for QA only.
- `platform-ecosystem-reference.webp` — desktop device-ecosystem visual reference.
- `platform-ecosystem-mobile-reference.webp` — mobile composition reference.
- `README.md` — asset usage notes.

The images are visual references, not live product truth. Do not reproduce illustrative numbers, scores, participant counts, medical claims, or other synthetic data literally.

## Approved copy
### Heading
One platform.
Multiple perspectives.

### Supporting line
One connected system, shaped for people, families, clinicians, and research.

### Audience labels
**People** — Understand · Track · Support

**Families** — Coordinate · Understand · Support

**Clinicians** — Context · Trends · Decisions

**Research** — Observe · Analyse · Learn

Do not add long explanatory paragraphs to this homepage section.

## Heading treatment
Follow the current Vascurra gradient typography system already approved on the homepage:

- `One platform.` — deep Vascurra ink / dark teal.
- `Multiple perspectives.` — restrained Vascurra gradient, deep teal → cyan → living green.

No serif display treatment if it conflicts with the current homepage typography. Match the existing approved homepage sans-serif system.

## Background
Pure white: `#FFFFFF`.

No pale aqua section fill.
No off-white panel background.
No decorative vascular waves across the whole section.
No Vascurra brain icon.

A single extremely restrained connection arc/node motif may be used behind the device family if it helps communicate one ecosystem, but it must remain subtle and secondary.

## Desktop composition
At approximately 1440px:

- section min-height roughly `850–1050px` depending on final responsive implementation.
- vertical padding roughly `120–170px`.
- heading centred and visually prominent.
- supporting line centred below heading.
- device ecosystem occupies most of the visual width below.
- target ecosystem width approximately `1100–1300px` where viewport allows.
- strong visual hierarchy among devices; do not make four equal boxes.

### Device hierarchy
Use the approved composition as the target:

1. **Clinician / longitudinal context desktop** — dominant central device.
2. **People phone** — foreground left.
3. **Family hub tablet** — left-centre, slightly behind/adjacent.
4. **Research display** — right side, visually substantial but secondary to the central clinician view.

All four must share one visual baseline and look like one product family.

## Product UI implementation
Prefer real HTML/CSS/React UI inside reusable device-shell components where practical, using the approved ecosystem artwork as a strict visual guide.

The homepage UI must remain conceptual and truthful.

Use safe example content such as:

### People
- Today's check-in
- routines
- notes
- appointments
- progress over time

### Families
- family hub
- shared updates
- upcoming appointments
- care circle
- resources

### Clinicians
- longitudinal context
- reported changes
- sources
- timeline
- consultation preparation

### Research
- de-identified cohort trends
- provenance
- consent status
- data completeness
- longitudinal patterns

Do not publish fake validated scores, diagnostic risk ratings, treatment recommendations, research findings, or compliance claims.

## Audience labels below ecosystem
Use four concise labels beneath the device composition.

Desktop can use a four-column row with restrained line icons.

Do not use large cards.
Do not add paragraphs.
Do not use the Vascurra brain icon as an audience icon.

## Mobile composition
At widths below roughly `900px`, do **not** shrink the desktop ecosystem until it becomes unreadable.

Use `platform-ecosystem-mobile-reference.webp` as the composition target.

Recommended mobile structure:
1. Heading
2. Supporting line
3. Featured People phone
4. Supporting Family / Clinician / Research panels arranged around or beneath it
5. Four audience rows / tabs below

At `390–430px`, the mobile composition should feel deliberate and premium, not like four tiny screenshots.

Audience labels should stack vertically with generous tap/reading space.

## Typography
Match the current approved homepage typography.

Desktop heading target:
- `font-size: clamp(48px, 5vw, 72px)`
- tight but comfortable line-height
- centre aligned

Supporting line:
- approximately `18–24px`
- max width around `760px`
- dark muted teal/ink

Audience labels:
- heading around `18–22px`
- descriptor around `14–16px`

## What Cursor must NOT do
- Do not modify Section 01 / Hero.
- Do not modify Section 02.
- Do not modify Sections 04 onward.
- Do not add the Vascurra brain icon.
- Do not use four tiny equal cards/screens.
- Do not use four identical phones.
- Do not use the old weak homepage implementation as the visual target.
- Do not add large explanatory paragraphs.
- Do not use tinted backgrounds.
- Do not add excessive waves, particles, or decorative lines.
- Do not copy synthetic numbers/medical claims literally from the visual references.
- Do not treat the reference images as production truth.

## Visual acceptance criteria
At desktop width this section is accepted only if:
1. It clearly reads as **one platform / four perspectives**.
2. The device ecosystem is the dominant visual moment.
3. The central clinician/context interface is visually strongest.
4. People, Families, Clinicians and Research are all immediately identifiable.
5. Product screens feel like one coherent Vascurra UI family.
6. The background remains predominantly pure white.
7. `Multiple perspectives.` uses the approved Vascurra gradient treatment.
8. No Vascurra brain icon appears in the section.
9. The section feels comparable in polish to the approved Vascurra mockups, not like a generic SaaS feature row.

## QA workflow
After implementation capture and inspect:
- 1440px desktop
- 1024px
- 768px tablet
- 430px mobile
- 390px mobile

Compare the desktop result against `section-reference.webp` and the mobile result against `platform-ecosystem-mobile-reference.webp`.

Correct device scale, overlap, whitespace, heading proportions, label hierarchy and section height before moving on.

## Scope
Section 03 only.

Do not deploy.
Do not merge.
Do not proceed to Section 04 until Section 03 is visually approved.
