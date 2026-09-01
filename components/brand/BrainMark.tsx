import Image from "next/image";
import {
  BRAIN_MASTERS_AVAILABLE,
  brainIntrinsic,
  brainSizing,
  brainSources,
  type BrainSlot,
} from "./brain-assets";

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
  const src = slot === "hero" ? brainSources.hero : brainSources.medium;

  if (!BRAIN_MASTERS_AVAILABLE) {
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
        src={src}
        alt={alt}
        width={brainIntrinsic.width}
        height={brainIntrinsic.height}
        sizes={sizing.sizes}
        priority={priority}
        quality={90}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
