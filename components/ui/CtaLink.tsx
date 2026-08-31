import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-[0_14px_34px_-14px_rgba(11,43,74,0.6)] hover:bg-[#123c63] hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
  secondary:
    "border border-hairline-strong bg-surface/70 text-navy backdrop-blur-sm hover:border-ink-teal hover:text-ink-teal",
};

/**
 * Every Phase 1A call to action is an in-page anchor: no email service is
 * configured and no other page exists yet, so nothing links anywhere it cannot
 * actually go.
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
