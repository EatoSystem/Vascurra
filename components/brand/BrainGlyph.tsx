import Image from "next/image";
import { smallBrain } from "./brain-assets";

/**
 * The approved brain mark at small scale, for the header and footer.
 *
 * Uses the committed 141x144 derivative, which stays genuinely crisp up to
 * about 70 CSS px at DPR 2. Sizes here are 28-36px, so the browser is always
 * downscaling — never the upscaling that spec §2 and §20 prohibit.
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
