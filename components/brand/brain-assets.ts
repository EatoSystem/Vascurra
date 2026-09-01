/**
 * Brand asset swap point.
 *
 * Production hero artwork lives at `/public/vascurra/brain/`.
 * A true 4096 master from the original brand pack is still preferred;
 * the current hero file is a high-resolution production derivative of the
 * approved Vascurra brain mark for web use.
 */

export const BRAIN_MASTERS_AVAILABLE = true;

export const brainSources = {
  hero: "/vascurra/brain/vascurra-brain-hero.webp",
  medium: "/vascurra/brain/vascurra-brain-medium.webp",
  header: "/vascurra/brain/vascurra-brain-header.webp",
} as const;

export const brainIntrinsic = { width: 1024, height: 1024 } as const;

export const smallBrain = {
  src: "/vascurra/brain/vascurra-brain-header.webp",
  width: 256,
  height: 256,
} as const;

export const brainSizing = {
  hero: {
    className:
      "w-[86vw] max-w-[460px] sm:w-[58vw] sm:max-w-[560px] lg:w-[46vw] lg:max-w-[720px] lg:min-w-[420px]",
    sizes: "(max-width: 640px) 86vw, (max-width: 1024px) 58vw, 46vw",
  },
  feature: {
    className: "w-[48vw] max-w-[220px] lg:w-[16vw] lg:max-w-[240px]",
    sizes: "(max-width: 1024px) 48vw, 16vw",
  },
  closing: {
    className:
      "w-[82vw] max-w-[480px] sm:w-[56vw] sm:max-w-[560px] lg:w-[40vw] lg:max-w-[680px]",
    sizes: "(max-width: 640px) 82vw, (max-width: 1024px) 56vw, 40vw",
  },
} as const;

export type BrainSlot = keyof typeof brainSizing;
