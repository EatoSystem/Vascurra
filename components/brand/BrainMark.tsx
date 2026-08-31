import Image from "next/image";
import {
  BRAIN_MASTERS_AVAILABLE,
  brainIntrinsic,
  brainSizing,
  brainSources,
  type BrainSlot,
} from "./brain-assets";

/**
 * The approved Vascurra brain mark at feature scale — the settled final state
 * of the hero reveal.
 *
 * The artwork is rendered untouched: no recolouring, no filters over it, no
 * decomposition of its internal ribbon geometry. All the reveal and ambient
 * effects live in sibling layers behind, around and above it (spec §20,
 * assets.md "Motion use").
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

  if (!BRAIN_MASTERS_AVAILABLE) {
    // Missing-file state. The approved masters are not in the repository yet;
    // spec §20 forbids upscaling the 141px derivative to fill this space and
    // §3 forbids committing a stand-in binary under the expected filename.
    return (
      <div
        aria-hidden="true"
        className={`relative aspect-square ${sizing.className} ${className}`}
        data-brain-pending=""
      />
    );
  }

  return (
    <div className={`relative aspect-square ${sizing.className} ${className}`}>
      <Image
        src={brainSources.hero}
        alt={alt}
        width={brainIntrinsic.width}
        height={brainIntrinsic.height}
        sizes={sizing.sizes}
        priority={priority}
        quality={92}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
