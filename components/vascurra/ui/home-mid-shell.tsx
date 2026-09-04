import type { ReactNode } from "react";

export function HomeMidShell({
  id,
  labelledBy,
  tone = "light",
  className = "",
  children,
}: {
  id?: string;
  labelledBy: string;
  tone?: "light" | "deep";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`home-mid relative isolate px-5 py-[clamp(6.875rem,10vw,9.375rem)] sm:px-8 lg:px-10 ${
        tone === "deep" ? "bg-deep text-on-deep" : "bg-white"
      } ${className}`}
      data-tone={tone}
    >
      <div className="relative z-10 mx-auto w-full max-w-[87.5rem]">{children}</div>
    </section>
  );
}

export function HomeMidClose({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "deep";
}) {
  const rule = tone === "deep" ? "bg-white/20" : "bg-hairline";
  const text = tone === "deep" ? "text-on-deep-muted" : "text-ink-muted";
  return (
    <p
      className={`mt-[clamp(3rem,6vw,4.5rem)] flex items-center gap-5 text-[1.0625rem] leading-relaxed ${text} sm:gap-8 sm:text-[1.125rem]`}
    >
      <span aria-hidden="true" className={`h-px min-w-6 flex-1 ${rule}`} />
      <span className="max-w-3xl shrink text-center">{children}</span>
      <span aria-hidden="true" className={`h-px min-w-6 flex-1 ${rule}`} />
    </p>
  );
}
