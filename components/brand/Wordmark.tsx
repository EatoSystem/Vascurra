/**
 * Text wordmark in the site sans-serif.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-[-0.04em] text-navy ${className}`}>
      Vascurra
    </span>
  );
}
