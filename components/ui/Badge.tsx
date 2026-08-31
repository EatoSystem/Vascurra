import type { ReactNode } from "react";

/**
 * Status pill. The dot is decorative — the status is always carried by the
 * text, never by colour alone.
 */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface/80 px-4 py-2 text-sm font-semibold tracking-wide text-navy-700 shadow-[0_1px_2px_rgba(7,26,47,0.04)] backdrop-blur-sm">
      <span
        aria-hidden="true"
        className="size-2 rounded-full bg-teal-700"
      />
      {children}
    </span>
  );
}
