/**
 * ============================================================================
 * THE BRAND MARK SWAP POINT
 * ============================================================================
 *
 * The Vascurra brain icon does not exist in this repository yet — it is being
 * supplied separately. Rather than invent a brain silhouette (which would risk
 * establishing the wrong mark and would breach "do not distort the Vascurra
 * icon" in spirit), Phase 1A reserves the space with an aspect-locked,
 * clearly-labelled placeholder.
 *
 * To ship the real mark, replace ONLY the contents of the inner frame below
 * with the final SVG / Lottie / Rive / video component and delete the caption.
 * The frame is a fixed square with its own sizing contract, so nothing else on
 * the page moves: no layout shift, no spacing changes, no CLS.
 *
 * The reveal choreography that surrounds it lives in components/motion and is
 * already wired — the incoming asset inherits it without further work.
 */

const sizes = {
  hero: "size-44 sm:size-56 lg:size-64",
  compact: "size-36 sm:size-44",
} as const;

export function VascurraMark({
  size = "hero",
  className = "",
  showCaption = true,
}: {
  size?: keyof typeof sizes;
  className?: string;
  showCaption?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div
        role="img"
        aria-label="Vascurra brand mark — final artwork to be supplied"
        className={`relative grid place-items-center rounded-[2rem] border border-hairline bg-surface/45 backdrop-blur-md ${sizes[size]}`}
      >
        {/* Soft luminous field standing in for the mark. Decorative only. */}
        <div
          aria-hidden="true"
          className="absolute inset-4 rounded-[1.5rem] bg-[radial-gradient(circle_at_35%_30%,color-mix(in_srgb,var(--color-mint-400)_36%,transparent),transparent_62%),radial-gradient(circle_at_70%_68%,color-mix(in_srgb,var(--color-cyan-400)_32%,transparent),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
        />
        <span
          aria-hidden="true"
          className="relative text-4xl font-semibold tracking-[-0.04em] text-gradient sm:text-5xl"
        >
          V
        </span>
      </div>

      {showCaption ? (
        <p className="max-w-[15rem] text-center text-xs leading-snug font-medium tracking-wide text-navy-600 uppercase">
          Brand mark to be supplied
        </p>
      ) : null}
    </div>
  );
}
