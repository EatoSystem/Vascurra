import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white shadow-[0_10px_28px_-12px_rgba(7,26,47,0.55)] hover:bg-navy-800 hover:-translate-y-px active:translate-y-0 motion-reduce:hover:translate-y-0",
  secondary:
    "border border-hairline-strong bg-surface/80 text-navy-800 backdrop-blur-sm hover:border-teal-700 hover:text-teal-700",
  quiet:
    "px-0 text-navy-700 underline decoration-hairline-strong underline-offset-4 hover:decoration-teal-700 hover:text-teal-700",
};

/**
 * All Phase 1A calls to action are in-page anchors: there is no email service
 * configured and no other page exists yet, so nothing links anywhere it
 * cannot actually go.
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
