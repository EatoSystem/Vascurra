import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { humanContext, connectedSystem } from "@/content/home";
import { sectionIds } from "@/content/site";

const factorIcons = [
  "health",
  "history",
  "movement",
  "sleep",
  "routine",
  "confidence",
  "family",
  "daily",
] as const;

export function HumanContext() {
  return (
    <SectionShell id={sectionIds.why} labelledBy="human-context-heading">
      <Reveal>
        <h2
          id="human-context-heading"
          className="type-section mx-auto max-w-3xl text-center"
        >
          {humanContext.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-center text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
          {humanContext.body}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <div className="relative mx-auto mt-20 max-w-4xl">
          <svg
            viewBox="0 0 800 220"
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute inset-x-0 top-[1.35rem] hidden h-40 w-full lg:block"
          >
            <path
              d="M50 28 L400 110 L750 28 M150 28 L400 110 L650 28 M250 28 L400 110 L550 28 M350 28 L400 110 L450 28"
              fill="none"
              stroke="var(--color-hairline-strong)"
              strokeWidth="1"
            />
            <circle cx="400" cy="110" r="5" fill="var(--color-energy-teal)" />
          </svg>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {connectedSystem.factors.map((factor, i) => (
              <li key={factor} className="relative z-10 text-center">
                <span className="mx-auto mb-3 flex size-11 items-center justify-center text-ink-teal">
                  <LineIcon name={factorIcons[i] ?? "health"} className="size-7" />
                </span>
                <span className="text-base font-semibold text-navy sm:text-lg">
                  {factor}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionShell>
  );
}
