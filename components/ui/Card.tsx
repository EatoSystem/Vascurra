import type { ReactNode } from "react";

/**
 * Soft translucent surface with a fine border — the brand's card language.
 * `h-full` plus flex column keeps cards in a grid the same height without the
 * copy escaping the padded box.
 */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-3xl border border-hairline bg-surface/75 p-7 shadow-[0_1px_2px_rgba(7,26,47,0.04),0_12px_32px_-16px_rgba(7,26,47,0.14)] backdrop-blur-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
