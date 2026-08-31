import type { ReactNode } from "react";

/**
 * Status pill. The dot is decorative — the status is always carried by the
 * text, never by colour alone.
 */
export function Badge({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "deep";
}) {
  const shell =
    tone === "deep"
      ? "border-deep-hairline bg-white/[0.06] text-on-deep"
      : "border-hairline bg-surface/70 text-ink-body shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.1em] uppercase backdrop-blur-sm ${shell}`}
    >
      <span
        aria-hidden="true"
        className="size-2 rounded-full bg-[radial-gradient(circle,var(--color-energy-mint),var(--color-energy-teal))]"
      />
      {children}
    </span>
  );
}
