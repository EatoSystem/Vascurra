import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";

type Tone = "light" | "mist" | "deep";

export function SectionShell({
  id,
  labelledBy,
  tone = "light",
  pad = "default",
  bloom,
  flow,
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  tone?: Tone;
  pad?: "default" | "tight" | "hero";
  bloom?: "mint" | "cyan" | "teal" | "dual" | "deep";
  flow?: "band" | "mist" | "deep" | "none";
  children: ReactNode;
  className?: string;
}) {
  const padding =
    pad === "hero"
      ? "py-14 lg:py-16"
      : pad === "tight"
        ? "section-pad-tight"
        : "section-pad";
  const ground =
    tone === "deep" ? "bg-deep text-on-deep" : tone === "mist" ? "bg-mist/55" : "";

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative isolate overflow-hidden ${padding} ${ground} ${className}`}
    >
      {bloom ? (
        <BloomField
          tone={bloom}
          intensity={tone === "deep" ? 32 : 22}
          className="inset-x-[-18%] top-[-8%] h-[120%]"
        />
      ) : null}
      {flow && flow !== "none" ? <VascularFlow variant={flow} /> : null}
      <Container className="relative z-10">{children}</Container>
    </section>
  );
}
