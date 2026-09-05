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
