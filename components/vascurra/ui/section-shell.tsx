import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type Tone = "light" | "deep";

export function SectionShell({
  id,
  labelledBy,
  tone = "light",
  pad = "default",
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  tone?: Tone;
  pad?: "default" | "tight" | "hero";
  children: ReactNode;
  className?: string;
}) {
  const padding =
    pad === "hero"
      ? "py-14 lg:py-16"
      : pad === "tight"
        ? "section-pad-tight"
        : "section-pad";
  const ground = tone === "deep" ? "bg-deep text-on-deep" : "bg-white";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate ${padding} ${ground} ${className}`}
    >
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
