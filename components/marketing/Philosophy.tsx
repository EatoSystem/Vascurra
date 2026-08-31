import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * The signature brand moment and the largest type on the page.
 *
 * Held on the light canvas rather than inverted to a dark panel, per
 * brand-guidelines.md — the impact comes from scale, space and a deep aurora,
 * not from contrast reversal or cyberpunk styling (§13).
 *
 * The progression is an ordered list, so the sequence is carried by markup.
 * The connecting light-line and the arrows are decorative.
 */
export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative flex min-h-[88svh] items-center overflow-hidden py-28 sm:py-36"
    >
      <BloomField
        tone="dual"
        intensity={26}
        className="inset-x-[-25%] top-[-10%] h-[120%]"
      />

      <Container>
        <Reveal>
          <h2 id="philosophy-heading" className="type-display-xl max-w-5xl">
            <span className="block text-navy">{philosophy.headingLines[0]}</span>
            <span className="text-gradient block">
              {philosophy.headingLines[1]}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mt-16 sm:mt-20">
            {/* Continuous light-line threading the four stages. */}
            <svg
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="absolute inset-x-0 top-1/2 hidden h-10 w-full -translate-y-1/2 sm:block"
            >
              <defs>
                <linearGradient id="ph-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0.15" />
                  <stop offset="35%" stopColor="var(--color-energy-teal)" />
                  <stop offset="72%" stopColor="var(--color-energy-cyan)" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M20 20 H 1180"
                fill="none"
                stroke="url(#ph-line)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                data-reveal-draw=""
              />
            </svg>

            <ol className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {philosophy.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 sm:flex-col sm:gap-0"
                  style={{ ["--v-delay" as string]: `${180 + index * 100}ms` }}
                >
                  <span className="inline-flex min-h-14 items-center gap-3.5 rounded-full border border-hairline bg-surface/85 px-7 py-3.5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_14px_36px_-20px_rgba(11,43,74,0.35)] backdrop-blur-sm">
                    <span
                      aria-hidden="true"
                      className="size-2.5 rounded-full bg-[radial-gradient(circle,var(--color-energy-mint),var(--color-energy-cyan))]"
                    />
                    <span className="text-lg font-semibold text-navy sm:text-xl">
                      {step}
                    </span>
                  </span>

                  {index < philosophy.steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-ink-muted sm:hidden"
                    >
                      &darr;
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="type-lead mt-16 max-w-2xl font-medium text-navy">
            {philosophy.principle}
          </p>
          <p className="mt-6 max-w-2xl text-ink-body">{philosophy.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
