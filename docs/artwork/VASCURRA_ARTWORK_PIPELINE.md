# Vascurra Artwork Pipeline

## Purpose

This document defines how final Vascurra imagery is commissioned, reviewed, stored, integrated and replaced across the V2 website.

The design goal is not to fill every empty space with an image. The goal is to use a small number of excellent, section-specific visuals that strengthen meaning, emotion and clarity.

`/personal` is the canonical inner-page visual reference. The homepage Hero and Origin sections remain the canonical brand references.

---

## Core rule

**Art direction and asset creation happen separately from engineering integration.**

The workflow is:

1. The page design defines where artwork is needed and what it must communicate.
2. A precise artwork brief is created.
3. Final artwork is produced outside the codebase.
4. Approved web assets are added to the repository.
5. Codex integrates the supplied artwork without redesigning the approved page.
6. Desktop and mobile are reviewed.
7. The artwork manifest is updated from `placeholder` to `supplied` and then `approved`.

Do not use temporary stock photography, generic AI-generated filler or developer-drawn substitute illustrations as final artwork.

---

## Canonical visual language

All new Vascurra artwork should normally follow these principles:

- Pure white or transparent background.
- Deep Vascurra navy for any necessary graphic detail.
- Canonical cyan → aqua → green family.
- Primary gradient reference: `#0aa3bc → #2ecfc4 → #49c768`.
- High-definition, clean, refined and sculptural.
- Generous negative space.
- Fine forms rather than chunky glossy iconography.
- Editorial/product-design quality rather than healthcare advertising.
- Human imagery should communicate dignity, agency, intelligence and independence.
- Older people should never be represented through frailty stereotypes.
- Visuals should explain the section or carry emotional meaning, not merely decorate it.

Avoid:

- purple or violet
- generic healthcare blue
- hospital stock imagery
- repeated brain artwork on every page
- generic neural-network graphics
- fake dashboards, fake measurements or fake clinical scores
- random glossy spheres without a conceptual role
- crowded infographic icon clouds
- padlocks and shields as the default privacy metaphor
- fear-based or infantilising imagery

---

## Visual families by page

### Personal
Human life, daily context, adaptive support, Veya, control and dignity.

### Family
Connection, trusted relationships, selective sharing, support without surveillance.

### Clinicians
Provenance, longitudinal context, preparation and clarity.

### Veya
A distinctive conversational visual identity. Not a brain, avatar, robot or chatbot bubble.

### Vascurra Intelligence
Governed interpretation, context, provenance, uncertainty and human review.

### Research
Questions, evidence, longitudinal learning, patterns and reproducibility.

### Vascurra Lab
Convergence between lived questions, evidence, responsible AI-assisted exploration and learning.

### Responsible by Design
Human control, permissions, purpose limitation, selective pathways and transparency.

### Support
Support flowing into co-design, research capacity, AI infrastructure and knowledge.

### About / Patient 0 / Why Vascurra
Human origin, one person becoming a wider system, everyday life and the reason the project exists.

---

## Quantity rule

Most major pages should need approximately **two or three excellent visuals**, not a large volume of decorative imagery.

Typical pattern:

- one signature hero visual
- one explanatory system/process visual
- optionally one human/emotional supporting visual

Typography and whitespace should still carry much of the experience.

---

## Production asset structure

Approved website assets should be organised by page:

```text
public/
  vascurra/
    pages/
      personal/
      family/
      clinicians/
      veya/
      intelligence/
      research/
      lab/
      responsible/
      support/
      about/
      why-vascurra/
      patient-0/
      how-it-works/
```

Recommended filenames:

```text
personal-hero.webp
personal-adaptive-support.webp
personal-veya.webp
personal-control.webp
```

Use semantic names. Do not use names such as `image1.png`, `final-final.png` or generator IDs.

If the desktop and mobile composition must differ, use explicit variants:

```text
family-hero-desktop.webp
family-hero-mobile.webp
```

---

## Master assets vs production assets

The repository should primarily contain optimized production assets.

Large master PNG/TIFF/source files should generally remain in the design source archive unless there is a specific reason to version them in Git.

Preferred production formats:

- WebP for photographic or complex raster artwork.
- PNG when transparency or lossless rendering is materially better and file size remains reasonable.
- SVG only for artwork that is genuinely vector-native and trusted.

Do not convert a transparent artwork onto a white rectangle if the page design expects the artwork to sit naturally in the layout.

---

## Aspect-ratio guidance

Common page slots:

- Hero portrait: `4:5`
- Hero square: `1:1`
- Wide process/system visual: `16:7`, `16:8` or `16:9`
- Mid-page portrait: `4:5`
- Mobile hero: often `1:1` or `4:5`

Do not crop an important desktop composition badly on mobile. If the crop does not work, create a mobile-specific asset.

---

## Integration rules for Codex

When approved artwork is supplied:

1. Replace only the matching `ArtworkToFollow` slot.
2. Do not redesign the page around the asset unless explicitly asked.
3. Do not rewrite approved content.
4. Preserve spacing and typography unless a small layout adjustment is necessary for the supplied artwork.
5. Use `next/image` where appropriate.
6. Provide correct intrinsic dimensions and responsive `sizes`.
7. Prevent layout shift.
8. Preserve transparent backgrounds where intended.
9. Do not add a generic card, frame, border or shadow around artwork unless the section design requires it.
10. Use meaningful alt text when the image communicates content.
11. Use `alt=""` for purely decorative artwork.
12. Verify desktop and mobile independently.
13. If an asset does not fit the intended slot, report the mismatch instead of forcing a poor crop.
14. Update the artwork manifest after integration.

---

## Review states

Every artwork item should use one of these states:

- `placeholder` — the page slot exists, final artwork has not been supplied.
- `supplied` — a final candidate has been added to the repository and integrated.
- `approved` — founder review has approved the artwork in context.
- `replace` — supplied artwork is not good enough and should not be treated as final.

An image being committed to Git does not automatically mean it is approved.

---

## Artwork review checklist

Before an asset is marked `approved`, check:

- Does it feel unmistakably Vascurra?
- Does it strengthen the meaning of the section?
- Is it simpler than it is busy?
- Is the cyan/aqua/green treatment consistent with the brand?
- Does it avoid generic AI/healthcare clichés?
- Does it respect dignity and agency?
- Is there enough negative space?
- Does it look high-definition at its actual rendered size?
- Does it work on mobile?
- Does it compete with the typography?
- Is the brain being overused?
- Does the page still feel calm after the image is added?

If the image makes the page busier but not clearer, do not approve it.

---

## Private artwork review surface

A future private/noindex route such as `/preview/artwork` may be used to review all assets together.

If built, it should show:

- route
- section
- asset key
- desktop preview
- mobile preview
- intended ratio
- current status

It must remain inside the private V2 review environment and must not be indexed or treated as a public product page.

---

## Release safety

Artwork integration does not change the release rule.

Until explicit founder launch approval:

- production continues to show the holding page
- unfinished V2 remains private/noindex
- `/privacy` remains available as currently configured
- no artwork task is permission to launch V2
- no artwork task is permission to weaken the holding-page gate

---

## Design principle

**Do not add imagery because a section feels empty. Add imagery when the visual can say something the words cannot say as well.**
