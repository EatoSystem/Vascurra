import Image from "next/image";
import {
  BRAIN_MASTERS_AVAILABLE,
  brainSizing,
  brainSources,
  type BrainSlot,
} from "./brain-assets";

/**
 * The approved Vascurra brain mark at feature scale.
 *
 * Renders the real artwork once the high-resolution masters land, and a clearly
 * labelled temporary placeholder until then. Both occupy identical space, so
 * the swap causes no layout shift and no CLS.
 *
 * Never renders a substitute mark, a redrawn brain or a traced vector (§20).
 */
export function BrainMark({
  slot,
  priority = false,
  alt = "",
  className = "",
}: {
  slot: BrainSlot;
  priority?: boolean;
  alt?: string;
  className?: string;
}) {
  const sizing = brainSizing[slot];

  if (BRAIN_MASTERS_AVAILABLE) {
    return (
      <div className={`relative aspect-square ${sizing.className} ${className}`}>
        <Image
          src={brainSources.hero}
          alt={alt}
          fill
          sizes={sizing.sizes}
          priority={priority}
          quality={92}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative grid aspect-square place-items-center ${sizing.className} ${className}`}
    >
      {/* Soft field standing in for the mark's own luminosity. Decorative. */}
      <div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full bg-canvas/75 bg-[radial-gradient(circle_at_38%_32%,color-mix(in_srgb,var(--color-energy-mint)_30%,transparent),transparent_60%),radial-gradient(circle_at_68%_66%,color-mix(in_srgb,var(--color-energy-cyan)_28%,transparent),transparent_58%)] backdrop-blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[14%] rounded-full ring-1 ring-hairline/70"
      />
      <p className="relative max-w-[62%] text-center text-[0.6875rem] leading-relaxed font-semibold tracking-[0.14em] text-ink-muted uppercase sm:text-xs">
        Vascurra brain
        <span className="mt-1 block font-medium tracking-[0.08em] normal-case">
          high-resolution master pending
        </span>
      </p>
    </div>
  );
}
