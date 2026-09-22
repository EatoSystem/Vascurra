# Brand Asset Implementation

## Status

Approved Public Platform asset guidance. “Phase 1A” in historical records maps to Public Platform Phase P0.

## Canonical public paths

- `/brand/vascurra-brain.webp`
- `/brand/vascurra-lockup.webp`
- `/brand/vascurra-og.jpg`
- `/brand/apple-touch-icon.png`
- `/brand/favicon.ico`

The current homepage also uses approved web derivatives under `/vascurra/brain/` and section artwork under `/vascurra/homepage*/`. These are production web assets, not original high-resolution masters.

## Logo integrity

The existing Vascurra brain mark is an approved identity element. Coding agents must implement it, not redesign it.

Do not create an alternative brain SVG, vascular logo, neural mark or substitute icon unless a future explicit brand decision changes the source of truth.

The icon combines the brain form, vascular/neural branching, flowing ribbon structure, luminous nodes and teal/cyan/mint energy described in `brand-guidelines.md`.

## Motion use

The public hero may animate toward the approved final mark using:

1. particles gathering;
2. vascular branches growing;
3. flowing ribbons forming;
4. brain silhouette resolving;
5. nodes illuminating softly;
6. the approved mark settling;
7. hero copy/wordmark appearing.

If the mark cannot be decomposed faithfully, prefer masking, reveal, glow and particle effects around the approved raster asset rather than approximating its internal geometry.

## Wordmark

Until a production vector wordmark is explicitly approved, use the supplied lockup as a visual reference and render `Vascurra` as accessible live text where appropriate. Do not trace the raster lockup into a new vector and treat that trace as canonical.

## Social metadata

The application currently generates its Open Graph image in `app/opengraph-image.tsx`. `/brand/vascurra-og.jpg` remains an approved historical derivative unless a future decision restores it to runtime use.

## Asset quality

The committed files are web-optimised derivatives used by the Public Platform. A verified original 3000–4096px master is not committed. Do not describe a derivative as the original master, and replace derivatives only with approved exports when required.

## Founder-supplied artwork rule

All significant Vascurra visual artwork must come from the founder/design process as approved committed assets. Coding agents design the page around supplied artwork; they do not create the artwork itself.

Coding agents must not create, generate, draw, synthesise, trace, redesign, approximate or replace images, illustrations, hero artwork, section artwork, artwork-style diagrams, infographics, decorative SVG illustrations, vector artwork, icon illustrations, abstract visual compositions, AI-generated imagery, final-looking placeholders or CSS-drawn substitutes for missing founder-approved graphics.

When approved artwork exists, agents may integrate it with `next/image` or the appropriate implementation, preserve aspect ratio, verify dimensions/formats/paths, provide accessibility treatment and build responsive layout around it.

When approved artwork is missing or unsuitable, agents must reserve neutral layout space, identify the missing asset key, document required dimensions, aspect ratio, background treatment and creative purpose, and report the requirement. They must not fill the gap with homemade artwork.

Existing coded artwork may remain only as previously approved temporary or structural fallback. It must not be expanded or evolved unless explicitly authorised, and should be removed from rendered experiences when founder-supplied artwork replaces it.

Founder-supplied assets must not be materially edited unless explicitly instructed. Do not recolour, crop away meaningful content, add text to images, remove image elements, redraw, apply artistic filters, create derivative artwork or convert an asset into a new visual design. Technical optimisation that changes the committed source asset requires explicit approval.
