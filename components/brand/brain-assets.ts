/**
 * ============================================================================
 * BRAND ASSET SWAP POINT
 * ============================================================================
 *
 * Source of truth: docs/brand/high-resolution-web-asset-pack-specification.md
 *
 * `vascurra-brain-hero-2048.webp` is the primary Phase 1A hero asset. Flip
 * BRAIN_MASTERS_AVAILABLE to true once the four files below are committed;
 * every size, position and animation is already built for them, so the swap
 * causes no layout shift and no CLS.
 *
 * Until then the hero renders a minimal reserved area. That is a missing-file
 * state, not a design choice — see docs/development/phase-1a-holding-page.md.
 *
 * Never: a substitute mark, a redrawn or traced brain, an auto-traced SVG
 * "master", a fabricated 4096 upscale, or a placeholder binary committed under
 * one of these filenames (spec §3, §20).
 */

export const BRAIN_MASTERS_AVAILABLE = false;

/** Responsive derivatives from spec §6, all from the same approved master. */
export const brainSources = {
  /** 2048x2048 transparent WebP — the Phase 1A hero asset. */
  hero: "/brand/brain/vascurra-brain-hero-2048.webp",
  medium: "/brand/brain/vascurra-brain-medium-1024.webp",
  header: "/brand/brain/vascurra-brain-header-512.webp",
} as const;

/** Intrinsic dimensions of the approved square artwork. */
export const brainIntrinsic = { width: 2048, height: 2048 } as const;

/**
 * The committed low-resolution derivative. Native 141x144, so it is genuinely
 * crisp only to about 70 CSS px at DPR 2. Used exclusively for the header and
 * footer marks — downscaling, never the upscaling spec §2 and §20 prohibit.
 */
export const smallBrain = {
  src: "/brand/vascurra-brain.webp",
  width: 141,
  height: 144,
} as const;

/**
 * Display sizing from spec §15.
 *   desktop hero   42-50vw, max 760-840px, min ~520px
 *   tablet         46-60vw, max ~620px
 *   mobile         78-92vw, max ~460px, positioned intentionally
 */
export const brainSizing = {
  hero: {
    className:
      "w-[88vw] max-w-[460px] sm:w-[60vw] sm:max-w-[620px] lg:w-[46vw] lg:max-w-[800px] lg:min-w-[520px]",
    sizes: "(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 46vw",
  },
  feature: {
    className: "w-[56vw] max-w-[260px] lg:w-[17vw] lg:max-w-[260px]",
    sizes: "(max-width: 1024px) 56vw, 17vw",
  },
  closing: {
    className:
      "w-[80vw] max-w-[420px] sm:w-[58vw] sm:max-w-[520px] lg:w-[36vw] lg:max-w-[640px]",
    sizes: "(max-width: 640px) 80vw, (max-width: 1024px) 58vw, 36vw",
  },
} as const;

export type BrainSlot = keyof typeof brainSizing;
