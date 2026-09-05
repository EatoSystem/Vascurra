# Vascurra High-Resolution Web Asset Pack Specification
**Version:** 1.0  
**Status:** Approved production specification for Phase 1A web build  
**Primary use:** `vascurra.com` holding page and future Vascurra web/app surfaces

---

## 1. Purpose

This specification defines the approved production asset system for the Vascurra brand across the website, app surfaces, social previews, favicons, presentations and future motion work.

The central principle is:

> **The Vascurra brain mark is a core brand asset, not a decorative illustration.**

The approved mark must remain visually consistent across all outputs.  
Do not redraw, reinterpret, simplify, recolour randomly, distort, crop tightly, or replace it with a substitute brain/vascular mark.

The current small web derivative is not the master.  
Large hero usage must always reference an appropriately high-resolution production asset.

---

# 2. Source-of-truth hierarchy

Use assets in this priority order:

1. **Master source**
   - Highest-resolution approved brain artwork.
   - Lossless.
   - Transparent background where applicable.
   - Never edited destructively.

2. **Production derivatives**
   - WebP / AVIF / PNG derivatives generated from the master.
   - Sized for specific contexts.
   - Optimised for delivery.

3. **Motion-ready source**
   - Layered/vector/Rive/Lottie/AE source where available.
   - Used for animation, masking, glow, node pulses and reveal sequences.

4. **Fallback assets**
   - Static PNG/WebP versions.
   - Used for reduced-motion, email, unsupported browsers or print.

Never upscale a low-resolution derivative to replace the master.

---

# 3. Recommended repository structure

```text
/public
  /brand
    /brain
      vascurra-brain-master-4096.png
      vascurra-brain-hero-2048.webp
      vascurra-brain-hero-2048.avif
      vascurra-brain-large-1600.webp
      vascurra-brain-medium-1024.webp
      vascurra-brain-header-512.webp
      vascurra-brain-small-256.webp
      vascurra-brain-thumb-128.webp

    /lockup
      vascurra-lockup-master.png
      vascurra-lockup-dark-1600.webp
      vascurra-lockup-light-1600.webp
      vascurra-lockup-header-800.webp
      vascurra-lockup-header-400.webp

    /icons
      apple-touch-icon.png
      icon-512.png
      icon-384.png
      icon-256.png
      icon-192.png
      icon-180.png
      icon-128.png
      icon-64.png
      favicon-32.png
      favicon-16.png
      favicon.ico

    /social
      vascurra-og-1200x630.jpg
      vascurra-og-1200x630.webp
      vascurra-square-1200.jpg
      vascurra-linkedin-1200x627.jpg
      vascurra-x-1200x675.jpg

    /motion
      vascurra-brain-reveal-poster.webp
      vascurra-brain-loop-poster.webp
      vascurra-brain-reveal.mp4
      vascurra-brain-loop.mp4
      vascurra-brain-loop.webm
      vascurra-brain.riv
      vascurra-brain.lottie.json

    /decorative
      vascular-wave-01.svg
      vascular-wave-02.svg
      vascular-nodes-01.svg
      vascular-glow-01.webp

    README.md
```

Only include formats that actually exist.  
Do not create fake placeholder binaries with these names.

---

# 4. Brain master asset

## Required master

**Filename**

`vascurra-brain-master-4096.png`

**Recommended dimensions**

- 4096 × 4096 px preferred
- Minimum acceptable master: 3000 × 3000 px
- Square canvas preferred unless the artwork requires slightly different bounds

**Format**

- PNG
- RGBA
- transparent background
- lossless
- no matte
- no JPEG compression

**Colour**

- sRGB
- embedded sRGB profile preferred
- avoid Display-P3-only exports for the web master unless equivalent sRGB assets are also supplied

**Edge quality**

- clean antialiasing
- no visible fringe
- no white halo around transparency
- no clipped glow
- no cropped ribbon tips

**Safe area**

Maintain at least approximately 8–12% clear canvas around the visual mark unless the approved master composition already defines a different optical boundary.

---

# 5. Hero assets

The website hero is the most important use case.

## Hero display target

Desktop CSS size:

- typical width: **600–800 CSS px**
- may extend to 850–900 CSS px on very large screens if composition supports it

High-DPR target:

- asset must remain crisp at DPR 2
- avoid relying on browser interpolation from small sources

## Primary hero derivative

**Filename**

`vascurra-brain-hero-2048.webp`

**Dimensions**

- 2048 × 2048 px
- transparent

**Format**

- WebP
- alpha transparency
- visually lossless / high quality

**Recommended quality target**

- 88–94 quality range
- inspect visually rather than targeting a single fixed number

**Target file weight**

- preferred: under 450 KB
- acceptable: up to ~700 KB if transparency/detail requires it
- do not destroy ribbon highlights or node detail simply to hit a smaller number

## AVIF alternative

`vascurra-brain-hero-2048.avif`

Use only if:

- transparency renders correctly
- edge halos are absent
- colour is faithful
- browser support/fallback is implemented

Do not use AVIF if it introduces visible colour or alpha artefacts.

---

# 6. Responsive brain derivatives

| Asset | Pixel dimensions | Typical use |
|---|---:|---|
| `vascurra-brain-hero-2048.webp` | 2048 | Desktop hero / retina |
| `vascurra-brain-large-1600.webp` | 1600 | Large tablet / desktop |
| `vascurra-brain-medium-1024.webp` | 1024 | Tablet / mobile hero |
| `vascurra-brain-header-512.webp` | 512 | Header / footer / medium modules |
| `vascurra-brain-small-256.webp` | 256 | Compact cards / mobile |
| `vascurra-brain-thumb-128.webp` | 128 | Tiny brand references |

All should derive from the same approved master.

Do not create separate artistic reinterpretations per size.

---

# 7. Wordmark and lockup

The lockup combines:

- approved brain mark
- `Vascurra` wordmark
- optional approved tagline where specifically required

## Master

`vascurra-lockup-master.png`

Recommended:

- transparent
- 3000 px+ wide
- sRGB
- lossless

## Web derivatives

- `vascurra-lockup-dark-1600.webp`
- `vascurra-lockup-light-1600.webp`
- `vascurra-lockup-header-800.webp`
- `vascurra-lockup-header-400.webp`

The “dark” version refers to the standard deep-navy wordmark for light backgrounds.

Avoid:
- fake gradients across the wordmark unless explicitly approved
- stretched kerning
- redrawn type
- excessive glow around body-size logos

---

# 8. Favicon / app icon system

The favicon should be derived from the approved brain icon.

For very small sizes, crop and simplify by **framing**, not by redrawing.

Required:

- `icon-512.png`
- `icon-384.png`
- `icon-256.png`
- `icon-192.png`
- `icon-180.png`
- `icon-128.png`
- `icon-64.png`
- `favicon-32.png`
- `favicon-16.png`
- `favicon.ico`

## Small-size rules

At 16–32 px:
- prioritise silhouette recognition
- preserve teal/cyan/mint identity
- avoid tiny unreadable internal detail becoming noise
- do not invent a different symbol unless separately approved

If the full brain becomes visually illegible at 16 px, use a carefully cropped approved brain source rather than drawing a new icon.

---

# 9. Social / Open Graph assets

## Primary Open Graph

`vascurra-og-1200x630.jpg`

Dimensions:

- 1200 × 630 px

Composition:
- approved Vascurra brain
- Vascurra wordmark
- `AI for vascular cognitive health.`
- white / soft-white background
- subtle vascular energy
- no clinical claims
- no scores
- no “predicts”, “detects”, “prevents”, or other unapproved outcomes

Keep essential content away from the outer 8–10% crop zone.

## Additional recommended formats

- `vascurra-square-1200.jpg` — 1200 × 1200
- `vascurra-linkedin-1200x627.jpg`
- `vascurra-x-1200x675.jpg`

These may be produced later from the same approved visual system.

---

# 10. Motion asset system

The animation should always resolve to the approved brain mark.

## Primary reveal animation

### Concept

1. particles gather
2. fine vascular branches emerge
3. teal / cyan / mint ribbons flow in
4. brain structure resolves
5. luminous nodes illuminate
6. soft pulse travels through the network
7. approved brain settles
8. Vascurra wordmark appears

### Duration

Recommended:

- 4.5–6.0 seconds
- never rushed
- no flashing
- no autoplay audio

### Deliverables

- `vascurra-brain-reveal.mp4`
- `vascurra-brain-reveal.webm`
- `vascurra-brain-reveal-poster.webp`

Recommended:
- 1920 × 1080 or 2160 × 2160 depending on composition
- transparent alpha version only where technically justified
- MP4 H.264 fallback
- WebM VP9/AV1 where appropriate

## Ambient loop

`vascurra-brain-loop.webm`

Behaviour:
- subtle breathing scale: ±1–2% maximum
- gentle ribbon shimmer
- node glow cycle
- low-amplitude light pulse
- no rotation
- no distracting continuous motion
- seamless

Suggested loop:
- 6–10 seconds

## Interactive formats

Preferred future delivery:
- Rive `.riv`
- Lottie `.json` only if visual fidelity is acceptable

Do not force the glossy brain artwork into a vector format if it materially damages its approved appearance.

---

# 11. Decorative vascular assets

The website may use supporting visual motifs derived from the brain’s design language.

These are **not logos**.

Permitted examples:

- flowing ribbon arcs
- fine vascular lines
- branching nodes
- translucent wave structures
- soft glows
- particle fields

Recommended formats:

- SVG for simple line art
- WebP/PNG for complex glossy elements

Rules:
- keep background decoration low contrast
- never reduce text readability
- do not imply disease progression, risk mapping or diagnostic output
- avoid overwhelming the primary brain mark

---

# 12. Brand colour direction

The production site should derive colours from the approved icon.

Recommended working token direction:

```css
--vascurra-navy: #0B2B4A;
--vascurra-deep-blue: #0A4F8F;
--vascurra-teal: #0097A7;
--vascurra-cyan: #43D6FF;
--vascurra-mint: #2ECC9A;
--vascurra-soft-white: #F7FBFD;
--vascurra-white: #FFFFFF;
```

These are production starting points and may be tuned after direct colour sampling from the final master.

## Display gradient

Recommended:

`mint → teal → cyan → deep blue`

Use for:
- large hero headlines
- major section headings
- selective emphasis

Do not use for:
- body paragraphs
- small labels
- legal / safety copy

Body text remains high-contrast navy.

---

# 13. Glow and shine rules

The visual “energy” should come from subtle dimensional treatment.

Permitted:
- soft outer bloom
- gentle edge highlight
- faint reflective sheen
- layered transparency
- small node glow
- soft radial halo

Avoid:
- strong neon
- hard lens flares
- excessive drop shadows
- saturated glow behind body copy
- constantly pulsing entire sections
- cyberpunk aesthetics

The design target is:

> **premium medical intelligence, not gaming UI.**

---

# 14. Next.js implementation guidance

Use `next/image` wherever practical.

Recommended hero example:

```tsx
<Image
  src="/brand/brain/vascurra-brain-hero-2048.webp"
  alt="Vascurra brain mark"
  width={2048}
  height={2048}
  priority
  sizes="(max-width: 768px) 88vw,
         (max-width: 1280px) 48vw,
         760px"
/>
```

Do not:
- use CSS background images for meaningful brand imagery when `<Image>` is more appropriate
- ship the 4096 px master to all visitors
- make the hero asset unnecessarily block LCP
- lazy-load the above-the-fold hero
- use low-resolution raster assets at large CSS sizes

## Reduced motion

When `prefers-reduced-motion: reduce`:
- skip reveal animation
- show final static brain immediately
- disable parallax
- disable repeated node pulse
- preserve all content

---

# 15. CSS display sizing guidance

## Desktop

Hero brain:
- width: 42–50vw
- max-width: 760–840px
- min-width: ~520px where layout allows

## Tablet

- width: 46–60vw
- max-width: ~620px

## Mobile

- width: 78–92vw
- max-width: ~460px
- position intentionally, not as a shrunk desktop composition

Do not crop the brain on mobile unless the crop is explicitly art-directed.

---

# 16. Transparency rules

Transparent raster assets must:

- use straight alpha correctly
- have no white/grey fringe
- preserve glow bounds
- render correctly on white and soft-white backgrounds
- avoid accidental matte contamination

QA test on:
- pure white
- soft blue-white
- very light mint-white

---

# 17. Accessibility rules

Brand imagery:
- if adjacent text already reads “Vascurra”, the decorative brain may use `alt=""`
- if it conveys the brand independently, use concise alt text such as `Vascurra brain mark`

Never encode product meaning exclusively in glow, colour, or animation.

Motion:
- no rapid flashes
- no aggressive movement
- no essential content that only appears through animation

---

# 18. Performance budgets

Recommended targets:

## Hero brain
- preferred ≤ 450 KB
- acceptable ≤ 700 KB if quality requires it

## Header logo
- preferred ≤ 80 KB

## Decorative SVG
- preferred ≤ 30 KB each

## Motion loop
- preferred ≤ 2.5 MB initial load
- load progressively
- use poster until ready
- do not autoplay large motion on constrained devices without strategy

## OG image
- preferred ≤ 300 KB JPEG/WebP

Use visual QA, not compression numbers alone.

---

# 19. Asset QA checklist

Every generated derivative must be checked for:

- correct mark
- correct colour
- no accidental recolouring
- no clipping
- no stretching
- no halo/fringe
- sharpness at intended CSS size
- retina/DPR 2 quality
- transparent edge quality
- mobile appearance
- colour profile consistency
- file-size reasonableness
- no hidden metadata containing private information
- no unapproved text
- no unsupported clinical claims

---

# 20. Prohibited asset behaviours

Do not:

- redraw the Vascurra brain
- author a substitute SVG logo
- invent a simplified “V” icon as the primary identity
- use generic stock brain graphics
- use a low-resolution asset at hero scale
- distort aspect ratio
- crop off ribbon tails
- alter the approved colour family
- add medical symbols to the logo
- add ECG lines, crosses or shields into the brain
- turn the brand into a generic healthcare icon
- use a brain-health score or risk graphic as part of the mark
- imply regulatory approval through visual badges

---

# 21. Claude Code handoff rule

Claude Code should treat the asset pack as immutable brand input.

If an expected asset is missing:

1. preserve the intended layout
2. use a clearly labelled temporary placeholder
3. report the missing asset
4. do not create a replacement brand mark
5. continue engineering around the expected dimensions

The visual architecture should not be weakened because an asset has not yet been supplied.

---

# 22. Final Phase 1A minimum deliverable set

The minimum production-ready set for the holding page is:

- `vascurra-brain-master-4096.png`
- `vascurra-brain-hero-2048.webp`
- `vascurra-brain-medium-1024.webp`
- `vascurra-brain-header-512.webp`
- `vascurra-lockup-header-800.webp`
- `apple-touch-icon.png`
- `favicon.ico`
- `vascurra-og-1200x630.jpg`
- `vascurra-brain-reveal-poster.webp`
- static reduced-motion fallback
- documented animation replacement point

Everything else can follow incrementally.

---

# 23. Future motion-ready master pack

For the full animated identity, create later:

```text
/source
  vascurra-brain-master.psd
  vascurra-brain-master.ai       # only if authentic vector source exists
  vascurra-brain-master.svg      # only if authentic vector source exists
  vascurra-brain-motion.aep
  vascurra-brain.riv
  vascurra-brain.lottie.json
```

Do not convert raster artwork to auto-traced SVG and call it a master.

---

# 24. Versioning

Recommended naming:

```text
vascurra-brain-master-v1.0.png
vascurra-brain-hero-v1.0-2048.webp
vascurra-og-v1.0-1200x630.jpg
```

Repository production filenames may omit version numbers if Git history is being used as the version record.

For external design handoffs, version numbers are recommended.

---

# 25. Approval rule

A new logo, altered brain mark, new primary colour treatment, or new animated final lockup should not be used publicly until visually approved against the existing Vascurra brand system.

The standard review question is:

> **Does this feel like the same living, luminous, intelligent Vascurra identity — and does it remain calm, readable and trustworthy?**

If not, reject the derivative and return to the approved master.
