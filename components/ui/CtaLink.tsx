import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDeep" | "onDeepGhost";

const base =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-9 py-4 text-base font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-[0_2px_0_rgba(255,255,255,0.12)_inset,0_18px_40px_-16px_rgba(11,43,74,0.65)] hover:bg-[#123c63] hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
  secondary:
    "border border-hairline-strong bg-surface/70 text-navy shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-sm hover:border-ink-teal hover:text-ink-teal",
  onDeep:
    "bg-on-deep text-deep shadow-[0_18px_44px_-18px_rgba(0,0,0,0.8)] hover:bg-white hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
  onDeepGhost:
    "border border-deep-hairline bg-white/5 text-on-deep backdrop-blur-sm hover:border-[var(--color-energy-cyan)] hover:text-[var(--color-energy-cyan)]",
};

/**
 * Phase 1A collects nothing and has no other routes, so every call to action is
 * an in-page anchor: nothing links anywhere it cannot actually go.
 */
export function CtaLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
