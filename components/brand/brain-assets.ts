/**
 * ============================================================================
 * BRAND ASSET SWAP POINT
 * ============================================================================
 *
 * Source of truth: docs/brand/high-resolution-web-asset-pack-specification.md
 *
 * The approved high-resolution brain masters have not been delivered yet. The
 * only committed derivative, `/brand/vascurra-brain.webp`, is 141x144 — spec §2
 * and §20 both forbid using a low-resolution derivative at hero scale, and §4
 * requires large usage to reference a real production asset.
 *
 * So, per the §21 handoff rule:
 *   - the intended layout is preserved at its real dimensions;
 *   - large brain slots render a clearly labelled temporary placeholder;
 *   - no replacement mark is authored;
 *   - engineering continues around the expected dimensions.
 *
 * TO SHIP THE REAL ASSETS: drop the §22 files into `public/brand/brain/` and
 * flip `BRAIN_MASTERS_AVAILABLE` to true. Nothing else changes — the sizing
 * contract, the reveal choreography and the surrounding light field are all
 * already built for the final artwork, so there is no layout shift.
 *
 * No placeholder binaries are committed under the spec's filenames (§3).
 */

export const BRAIN_MASTERS_AVAILABLE = false;

/** Responsive derivatives from spec §6, all from the same approved master. */
export const brainSources = {
  hero: "/brand/brain/vascurra-brain-hero-2048.webp",
  large: "/brand/brain/vascurra-brain-large-1600.webp",
  medium: "/brand/brain/vascurra-brain-medium-1024.webp",
  header: "/brand/brain/vascurra-brain-header-512.webp",
} as const;

/**
 * The committed low-resolution derivative. Native size 141x144, so it stays
 * genuinely crisp only up to about 70 CSS px at DPR 2. Used exclusively for
 * the header and footer marks — this is downscaling, never upscaling.
 */
export const smallBrain = {
  src: "/brand/vascurra-brain.webp",
  width: 141,
  height: 144,
} as const;

/**
 * Display sizing from spec §15. The placeholder occupies exactly these
 * dimensions so the composition is final before the artwork arrives.
 */
export const brainSizing = {
  hero: {
    className:
      "w-[86vw] max-w-[460px] sm:w-[60vw] sm:max-w-[620px] lg:w-[46vw] lg:max-w-[800px] lg:min-w-[520px]",
    sizes: "(max-width: 640px) 86vw, (max-width: 1024px) 60vw, 46vw",
  },
  feature: {
    className: "w-[58vw] max-w-[280px] lg:w-[17vw] lg:max-w-[270px]",
    sizes: "(max-width: 1024px) 58vw, 17vw",
  },
  closing: {
    className:
      "w-[78vw] max-w-[420px] sm:max-w-[500px] lg:w-[34vw] lg:max-w-[600px]",
    sizes: "(max-width: 640px) 78vw, (max-width: 1024px) 60vw, 34vw",
  },
} as const;

export type BrainSlot = keyof typeof brainSizing;
