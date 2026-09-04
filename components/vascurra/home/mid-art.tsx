import Image from "next/image";

/** Renders supplied homepage-v2 artwork. Do not recreate these visuals in SVG/CSS. */
export function HomeMidArt({
  src,
  alt,
  width,
  height,
  slot,
  maxWidthClass = "max-w-[1050px]",
  className = "",
  sizes = "(min-width: 1024px) 66vw, 100vw",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  slot: string;
  maxWidthClass?: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div data-asset-slot={slot} className={`w-full ${maxWidthClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain"
        sizes={sizes}
      />
    </div>
  );
}
