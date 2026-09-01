import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * The signature brand moment — the first of exactly two deep-navy chambers.
 *
 * On this ground the specification's own tokens are text-safe (cyan 9.63:1,
 * mint 8.00:1, teal 4.68:1 against #08203a), so the display gradient runs at
 * full saturation here rather than in the darkened ink tier the light sections
 * require. That is the point of the dark sections: they are the only place the
 * brand's true luminous palette can be used exactly as specified.
 *
 * Editorial navy, not cyberpunk: no neon, no saturated panels, restrained glow.
 *
 * Recall -> Hint -> Guide -> Answer is an ordered list, so the sequence is
 * carried by markup. The pathway, its stations' glow and the arrows are
 * decorative.
 */
export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-deep py-28 sm:py-32"
    >
      {/* Soft entry and exit so the light sections resolve into the dark
          rather than butting against it. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-canvas/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-canvas/20 to-transparent"
      />
      <BloomField
        tone="deep"
        intensity={30}
        className="inset-x-[-25%] top-[-15%] h-[130%]"
      />

      {/* Subtle vascular structure across the chamber. */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-70"
      >
        <defs>
          <linearGradient id="ph-ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-energy-teal)" stopOpacity="0" />
            <stop offset="42%" stopColor="var(--color-energy-teal)" stopOpacity="0.42" />
            <stop offset="78%" stopColor="var(--color-energy-cyan)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g
          className="v-ambient"
          style={{
            animationName: "v-drift-slow, v-shimmer",
            animationDuration: "26s, 12s",
            animationDelay: "0s, 2s",
            ["--v-rest-opacity" as string]: "0.4",
          }}
        >
          <path
            d="M-60 250 C 220 130, 470 330, 740 210 S 1200 60, 1500 190"
            fill="none"
            stroke="url(#ph-ribbon)"
            strokeWidth="46"
            strokeLinecap="round"
          />
          <path
            d="M-60 660 C 260 780, 520 560, 800 690 S 1240 830, 1500 690"
            fill="none"
            stroke="url(#ph-ribbon)"
            strokeWidth="30"
            strokeLinecap="round"
            opacity="0.75"
          />
        </g>
      </svg>

      <Container>
        <Reveal>
          <h2 id="philosophy-heading" className="type-display-xl max-w-5xl">
            <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
            <span className="text-gradient-lum block">
              {philosophy.headingLines[1]}
            </span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative mt-20 sm:mt-24">
            {/* The luminous pathway threading the four stations.
                A CSS gradient rule rather than an SVG stroke: the dash-based
                draw normalises inconsistently on a long straight path, and a
                gradient bar is both robust and cheaper. The reveal scales it
                out from the left. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-2 top-1/2 hidden h-[2px] origin-left -translate-y-1/2 rounded-full sm:block"
              data-reveal-bar=""
              style={{
                backgroundImage:
                  "linear-gradient(90deg, color-mix(in srgb, var(--color-energy-mint) 35%, transparent), var(--color-energy-mint), var(--color-energy-teal) 62%, color-mix(in srgb, var(--color-energy-cyan) 45%, transparent))",
                boxShadow:
                  "0 0 14px 2px color-mix(in srgb, var(--color-energy-teal) 34%, transparent)",
              }}
            />

            <ol className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              {philosophy.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-center gap-4 sm:flex-col sm:gap-0"
                  style={{ ["--v-delay" as string]: `${180 + index * 100}ms` }}
                >
                  <span className="relative inline-flex min-h-16 items-center gap-4 rounded-full border border-deep-hairline bg-[color-mix(in_srgb,var(--color-deep-raised)_88%,transparent)] px-8 py-4 backdrop-blur-sm">
                    {/* Station glow — decorative, staggered so the four never
                        pulse together. */}
                    <span
                      aria-hidden="true"
                      className="v-ambient absolute inset-0 -z-10 rounded-full blur-lg"
                      style={{
                        background:
                          "radial-gradient(closest-side, color-mix(in srgb, var(--color-energy-teal) 42%, transparent), transparent 100%)",
                        animationName: "v-halo-vary",
                        animationDuration: `${5 + index}s`,
                        animationDelay: `${1.2 * index}s`,
                        ["--v-rest-opacity" as string]: "0.35",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="size-3 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-energy-mint),var(--color-energy-cyan))]"
                    />
                    <span className="text-xl font-semibold text-on-deep sm:text-2xl">
                      {step}
                    </span>
                  </span>

                  {index < philosophy.steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-on-deep-muted sm:hidden"
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
          <p className="type-lead mt-20 max-w-2xl font-medium text-on-deep">
            {philosophy.principle}
          </p>
          <p className="mt-6 max-w-2xl text-on-deep-muted">{philosophy.body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
