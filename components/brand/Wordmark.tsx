/**
 * Text wordmark, set in the site serif rather than traced from a raster lockup.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif font-semibold tracking-[-0.03em] text-navy ${className}`}>
      Vascurra
    </span>
  );
}
