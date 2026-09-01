# Vascurra Visual Reference Pack

These files are the canonical visual references for the Vascurra public website rebuild.

## Critical rule

`00-before-do-not-copy.png` is a **negative reference** only. It shows the current homepage that is being visually replaced. Do not copy its visual language, spacing, illustration style, or section treatment.

Files `01`–`10` are the **positive design references**. The implemented website should clearly feel like the same brand family.

## Reference map

| File | Role | What to take from it |
| --- | --- | --- |
| `00-before-do-not-copy.png` | Negative reference | Existing homepage / functionality context only; do not imitate visually. |
| `01-brand-anchor.png` | Brand source of truth | Brain mark, wordmark, palette, white-space philosophy, typography feel, iconography, soft aqua surfaces. |
| `02-homepage-hero-style-target.png` | Homepage / hero direction | Premium white healthcare-tech composition, hero proportions, dashboard/device presentation, teal–cyan–green balance. |
| `03-people-target.png` | People section | Three-device mobile composition, Understand / Track / Support language, friendly personal-product treatment. |
| `04-families-target.png` | Families section | Family Hub composition, warm supportive UI, care coordination and check-in presentation. |
| `05-clinicians-target.png` | Clinicians section | More precise clinical hierarchy, dashboard composition, restrained data display, professional credibility. |
| `06-research-target.png` | Research section | Research dashboard, longitudinal data language, scientific context, analytical but still Vascurra-branded. |
| `07-understand-track-support-target.png` | Product model | Three-part capability story, cards/data visualisation style, clear connected system. |
| `08-trust-privacy-target.png` | Trust / privacy | Security visual language, shield/lock iconography, spacious trust section composition. |
| `09-four-perspectives-target.png` | Platform overview | People + Families + Clinicians + Research shown as four views of one platform. |
| `10-launch-cta-target.png` | Launch / CTA direction | Introductory brand composition, CTA styling, final-page brand confidence and product/brand balance. |

## Implementation guidance

These images are **design targets**, not flattened webpage sections.

Recreate in HTML/CSS/React wherever practical:

- layout
- typography
- spacing
- buttons
- cards
- gradients
- surfaces
- device frames / UI mockups
- section transitions
- responsive behaviour

Use actual image assets only where they genuinely belong, such as the Vascurra brain artwork, vascular-flow illustrations, or approved decorative graphics.

Do not build the homepage from giant screenshots.

## Visual hierarchy

When references conflict, use this priority:

1. `01-brand-anchor.png` for core brand identity.
2. The section-specific target (`03`–`09`) for section layout and UI treatment.
3. `02-homepage-hero-style-target.png` for overall homepage polish and spacing.
4. `10-launch-cta-target.png` for launch / CTA tone.

## Important content caveat

Some visual concepts contain illustrative product data, scores, security/compliance language, names, or other placeholder content. Treat these as visual design examples only.

Do **not** copy unsupported:

- clinical claims
- diagnostic claims
- 0–100 health scores presented as validated instruments
- certifications or compliance badges
- research statistics
- clinician names or endorsements
- placeholder contact information

Only surface claims and data that are genuinely supported by the Vascurra product and documentation.

## Brand feeling

The finished implementation should communicate:

**vascular flow + cognitive intelligence + clinical clarity + human dignity**

It should feel calm, premium, medically credible, supportive, distinctive, and recognisably Vascurra.
