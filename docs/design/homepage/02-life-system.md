# Section 02 — Living better with vascular cognitive change

## Status
**APPROVED / LOCKED DESIGN**

Implement this section only from the approved asset and this specification. Do not reinterpret the visual concept.

## Purpose
Introduce the whole-person model immediately after the hero. The message is that cognition does not exist in isolation: health, history, movement, sleep, routine, confidence, family and daily life form a connected picture around the person.

The visual centre of this section is **people, not the Vascurra brain mark**.

## Production asset
`/public/vascurra/homepage/02-life-system/life-system-graphic.svg`

The graphic shows a man and a woman together at the centre of eight connected influences:
- Health
- History
- Movement
- Sleep
- Routine
- Confidence
- Family
- Daily life

Do not redraw this artwork. Do not replace it with a generic radial SVG diagram or silhouette icon.

## Background
Pure white: `#FFFFFF`.

No tinted panel background.
No decorative vascular waves behind the section.
No brain mark.

## Desktop composition
Use a generous two-column editorial layout.

- Max content width: approximately `1440px`
- Outer horizontal padding: `clamp(32px, 6vw, 96px)`
- Vertical section padding: `clamp(110px, 10vw, 170px)`
- Columns: approximately `42% / 58%`
- Column gap: `clamp(48px, 6vw, 96px)`
- Vertically centre the text block against the graphic
- Graphic should be visually large, approximately `620–720px` wide on a 1440px viewport where space allows

The section must feel substantial, calm and premium. Do not compress it into a small centred diagram with excessive empty space around it.

## Copy

### Heading
Living better with  
vascular cognitive  
change.

The line breaks may adapt responsively, but preserve the strong editorial scale.

### Supporting line
**Cognition doesn’t change in isolation.**

### Body paragraph 1
It lives within your routines, relationships, rest, confidence, movement, health and the stories you want to keep telling.

### Body paragraph 2
Vascurra is designed around that wider picture — so you can move forward with clarity, support and calm, with you at the centre.

## Supporting principles
These are secondary accents, not the main visual content.

1. **Whole-person understanding**
2. **Personalised support**
3. **Stronger today, better tomorrow**

Use restrained line icons from the project's existing icon system where possible. Suggested concepts: shield/check, people/support, heart. Do not use the Vascurra brain mark.

## Typography
Follow the existing Vascurra font system, but target the proportions of the approved mockup.

Desktop heading:
- `font-size: clamp(48px, 5vw, 72px)`
- line-height approximately `0.98–1.05`
- dark Vascurra ink / deep teal
- medium or semibold weight depending on the approved site font
- max-width approximately `620px`

Supporting line:
- `font-size: clamp(22px, 2vw, 30px)`
- teal accent

Body:
- `18–20px` desktop
- line-height `1.55–1.7`
- max-width `560px`

Principle labels:
- `15–17px`
- dark teal

## Graphic treatment
Render the approved production graphic as an image asset.

Recommended desktop treatment:
- width: `min(100%, 720px)`
- height: auto
- object-fit: contain
- align to the right-hand visual column
- no card container
- no border
- no drop-shadow added around the entire graphic

The artwork already contains the visual hierarchy and connected-system language.

## Mobile / tablet
At widths below approximately `900px`, stack into one column.

Recommended order:
1. Heading
2. Supporting line + body copy
3. Life-system graphic
4. Three supporting principles

Mobile rules:
- section padding approximately `72–96px 20–24px`
- heading `clamp(38px, 11vw, 52px)`
- centre the graphic horizontally
- graphic width approximately `min(100%, 620px)`
- principles may be a 3-column compact row on tablet and a vertical/2+1 layout on narrow phones
- do not reduce the artwork until labels become unreadable; if needed allow it to use nearly full viewport width

## Accessibility
Use meaningful image alt text on the rendered `<img>` / Image component:

`A man and woman at the centre of connected influences: health, history, movement, sleep, routine, confidence, family and daily life.`

Maintain semantic heading order. Do not bake the section's primary heading/body copy into an image.

## What Cursor must NOT do
- Do not modify Section 01 / Hero.
- Do not modify Sections 03 onward.
- Do not redesign the approved artwork.
- Do not generate a new radial diagram.
- Do not replace the people with a generic black silhouette.
- Do not add the Vascurra brain icon.
- Do not add decorative background waves.
- Do not use pale green/off-white section backgrounds.
- Do not shrink the graphic into a small icon-like object.
- Do not add extra copy.

## Visual acceptance criteria
At desktop width, this section is accepted only if:
1. It uses pure white as the dominant background.
2. The heading is large and editorial, not small/centred SaaS typography.
3. The man/woman life-system graphic is a major visual occupying roughly half the section.
4. The text and graphic read as one balanced composition.
5. There is generous but controlled whitespace; the section does not look empty.
6. No Vascurra brain mark appears in the section.
7. The section visually resembles the approved Vascurra mockup rather than the previous minimal radial-diagram implementation.

## QA workflow
After implementation, capture this section at:
- 1440px desktop
- 768px tablet
- 390/430px mobile

Compare against this specification before making changes elsewhere on the homepage.
