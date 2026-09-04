import type { ReactNode } from "react";

export function HomeMidShell({
  id,
  labelledBy,
  tone = "light",
  children,
}: {
  id?: string;
  labelledBy: string;
  tone?: "light" | "deep";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`home-mid relative isolate px-5 py-[clamp(6.875rem,10vw,9.375rem)] sm:px-8 lg:px-10 ${
        tone === "deep" ? "bg-deep text-on-deep" : "bg-white"
      }`}
      data-tone={tone}
    >
      <div className="relative z-10 mx-auto w-full max-w-[87.5rem]">{children}</div>
    </section>
  );
}
