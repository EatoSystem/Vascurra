# Vascurra web design system

This document describes the visual system **as implemented** on the public site.

## Colour

Semantic tokens live on `:root` in `app/globals.css`. Tailwind `@theme` colours remain the working palette for utilities.

| Token | Value | Role |
| --- | --- | --- |
| `--vascurra-ink` | `#0B2B4A` | Body authority / headings |
| `--vascurra-deep-teal` | `#083D4A` | Dark editorial grounds, primary buttons |
| `--vascurra-teal` | `#0E6E7A` | Supporting teal |
| `--vascurra-cyan` | `#2CC4D6` | Connection (semantic) |
| `--vascurra-green` | `#58D39A` | Living green (semantic) |
| `--vascurra-mist` | `#E6F7F6` | Pale aqua bands |
| `--vascurra-surface` | `#FFFFFF` | Surfaces |
| `--vascurra-border` | `#D4E8EA` | Hairlines |

Decorative energy (bloom, nodes, ribbons) uses the brand-pack energy tier:

- teal `#0097A7`
- cyan `#43D6FF`
- mint `#2ECC9A`

Text never uses energy cyan or mint on the light canvas. Ink-tier text colours (`--color-ink-*`) keep contrast at or above 4.5:1.

Dark sections use `--color-deep` (`#083D4A`) with `--color-on-deep` copy.

## Typography

Inter via `next/font`. One family only.

- Display: `.type-display`, `.type-display-xl`
- Section: `.type-section`
- Lead: `.type-lead`
- Kicker: `.type-kicker`
- Body: 1.125rem / 1.25rem, line-height 1.7, `--color-ink-body`

Display headings may use `.text-gradient` (ink-tier mint → teal → cyan → blue) or `.text-gradient-lum` on deep grounds.

## Spacing

- Page container: `max-w-[80rem]` with 20/32/48px gutters
- Default sections: `--vascurra-space-section` (`clamp(5.5rem, 10vw, 9.5rem)`)
- Tight editorial moments: `.section-pad-tight`
- Hero: shorter vertical padding, near-viewport height

## Buttons

`CtaLink` variants:

- `primary` — deep teal fill, white label
- `secondary` — hairline, white/mist fill
- `onDeep` / `onDeepGhost` — closing-frame CTAs

Minimum height 48–56px. Pill radius.

## Cards / surfaces

`.surface` is used only where a surface is required (project-status themes, occasional product chrome). Most homepage sections sit directly on canvas or mist. Do not default to stacked white rectangles.

## Vascular flow

`components/vascurra/ui/vascular-flow.tsx` — SVG ribbons, thin branches, quiet nodes. Variants: `band`, `mist`, `deep`, `footer`. Motion is a slow drift; it stops under `prefers-reduced-motion`.

## Brain mark

- Header/footer: approved 141px derivative, downscaled (`BrainGlyph`)
- Hero / feature / closing: `/public/vascurra/brain/*.webp` via `BrainMark` + `BrainStage`
- Do not spin, bounce, or crop the ribbons
- Ambient breath ≤ ~1.5% scale

A higher-resolution original master is still wanted. The current hero file is a production web derivative.

## Motion

Pure CSS. No animation library.

- Hero resolve + ambient breath / node glow
- Scroll reveal via `Reveal` (IntersectionObserver → data attributes)
- Reduced motion: final state immediately, no looping ambient

## Responsive rules

Designed compositions, not only column collapse:

- 1440 / 1280: text left, brain or device right in product sections
- 1024: nav condenses to the disclosure menu
- 768: product stacks; secondary device hidden
- 430 / 390: brain first in the hero; four perspectives become a horizontal scroller

## Image usage

- `next/image` for the brain
- Priority only on the hero mark
- Product UI is HTML/CSS, not screenshots
- No 0–100 “brain health” scores in mockups
