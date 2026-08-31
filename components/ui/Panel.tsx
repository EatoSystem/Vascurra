import type { ReactNode } from "react";

/**
 * A dimensional luminous surface.
 *
 * Used selectively — for the four product pillars and the three trust themes —
 * never as a default wrapper. Wrapping every idea in an identical white
 * rectangle is what made the first draft read as a generic SaaS page; this
 * carries an inner top highlight, a hairline edge and a wide soft shadow so it
 * has real depth rather than being a flat box (spec §13).
 */
export function Panel({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "deep";
  className?: string;
}) {
  return (
    <div
      className={`${tone === "deep" ? "surface-deep" : "surface"} relative flex h-full flex-col overflow-hidden p-8 sm:p-9 ${className}`}
    >
      {children}
    </div>
  );
}
