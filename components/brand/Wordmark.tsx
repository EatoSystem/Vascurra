/**
 * Text wordmark, set in the site typeface rather than traced from the raster
 * lockup — assets.md forbids treating a trace as canonical, and live text stays
 * crisp, scalable and selectable.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[-0.035em] text-navy ${className}`}>
      Vascurra
    </span>
  );
}
