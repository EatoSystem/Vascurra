/**
 * Text wordmark. Set in the site typeface rather than baked into an image so
 * it stays crisp, scalable, translatable and selectable — see
 * docs/brand/brand-guidelines.md ("avoid text embedded inside raster images").
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-semibold tracking-[-0.03em] text-navy-900 ${className}`}
    >
      Vascurra
    </span>
  );
}
