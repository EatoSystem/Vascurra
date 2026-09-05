import Image from "next/image";
import { smallBrain } from "./brain-assets";

/**
 * The Vascurra brain at navigation scale, from the canonical header WebP.
 */
export function BrainGlyph({
  size = 36,
  alt = "",
  className = "",
}: {
  size?: number;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={smallBrain.src}
      alt={alt}
      width={size}
      height={size}
      priority
      className={`shrink-0 ${className}`}
      style={{ width: size, height: "auto" }}
    />
  );
}
