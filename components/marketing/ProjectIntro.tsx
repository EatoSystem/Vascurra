import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { projectIntro } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * Editorial problem / opportunity.
 *
 * The six dimensions of a life are luminous nodes strung along a broad flowing
 * ribbon, so "they are connected" is carried by the composition rather than
 * only stated. The list is a real <ul>; the ribbon is decorative, so nothing
 * depends on the graphic being seen (§17).
 */
export function ProjectIntro() {
  return (
    <section
      id={sectionIds.project}
      aria-labelledby="project-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <BloomField
        tone="mint"
        intensity={24}
        className="inset-x-[-12%] top-[2%] h-[76%]"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <Reveal>
            <h2 id="project-heading" className="type-section max-w-3xl">
              {projectIntro.heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-ink-body lg:pb-2">{projectIntro.body}</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative mt-20 sm:mt-24">
            {/* Broad flowing ribbon threading the six dimensions. */}
            <svg
              viewBox="0 0 1200 150"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="absolute inset-x-0 top-1 hidden h-[130px] w-full lg:block"
            >
              <defs>
                <linearGradient id="pi-ribbon" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
                  <stop offset="20%" stopColor="var(--color-energy-mint)" stopOpacity="0.55" />
                  <stop offset="56%" stopColor="var(--color-energy-teal)" stopOpacity="0.5" />
                  <stop offset="86%" stopColor="var(--color-energy-cyan)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="pi-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
                  <stop offset="18%" stopColor="var(--color-energy-mint)" />
                  <stop offset="58%" stopColor="var(--color-energy-teal)" />
                  <stop offset="88%" stopColor="var(--color-energy-cyan)" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 74 C 160 26, 268 112, 420 70 S 672 20, 812 68 S 1064 116, 1200 62"
                fill="none"
                stroke="url(#pi-ribbon)"
                strokeWidth="26"
                strokeLinecap="round"
              />
              <path
                d="M0 74 C 160 26, 268 112, 420 70 S 672 20, 812 68 S 1064 116, 1200 62"
                fill="none"
                stroke="url(#pi-line)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                data-reveal-draw=""
              />
            </svg>

            <ul className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-2">
              {projectIntro.dimensions.map((dimension, i) => (
                <li
                  key={dimension}
                  className="flex flex-col items-center gap-4 text-center"
                  style={{ ["--v-delay" as string]: `${120 + i * 55}ms` }}
                >
                  <span aria-hidden="true" className="relative mt-1 block size-4">
                    <span className="absolute inset-[-6px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-energy-mint)_45%,transparent),transparent_70%)] blur-[3px]" />
                    <span className="relative block size-4 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-energy-mint),var(--color-energy-teal))] ring-4 ring-canvas" />
                  </span>
                  <span className="text-xl font-semibold text-navy sm:text-2xl">
                    {dimension}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-16 text-center text-xl font-medium text-ink-teal sm:text-2xl">
            {projectIntro.connective}
          </p>
        </Reveal>

        {/* The framing question as a full-width gradient moment. */}
        <Reveal delay={80}>
          <div className="relative mt-24 sm:mt-32">
            <span
              aria-hidden="true"
              className="ghost-numeral pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none lg:-top-16"
            >
              ?
            </span>
            <p className="text-gradient relative mx-auto max-w-5xl text-center text-[clamp(1.875rem,4.4vw,3.5rem)] leading-[1.14] font-semibold">
              {projectIntro.question}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-ink-body">
            {projectIntro.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
