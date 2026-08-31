import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { projectIntro } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * Editorial problem / opportunity.
 *
 * No card. The six dimensions of a life are rendered as luminous nodes strung
 * along one flowing vascular line, so "they are connected" is carried by the
 * composition rather than only stated. The list is a real <ul>; the line is
 * decorative, so nothing depends on the graphic being seen (§17).
 */
export function ProjectIntro() {
  return (
    <section
      id={sectionIds.project}
      aria-labelledby="project-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <BloomField
        tone="mint"
        intensity={13}
        className="inset-x-[-10%] top-[6%] h-[70%]"
      />

      <Container>
        <Reveal>
          <h2 id="project-heading" className="type-section max-w-4xl">
            {projectIntro.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-16 sm:mt-20">
            {/* Decorative connecting line behind the nodes. */}
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="absolute inset-x-0 top-[26px] hidden h-[120px] w-full lg:block"
            >
              <defs>
                <linearGradient id="pi-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
                  <stop offset="18%" stopColor="var(--color-energy-mint)" />
                  <stop offset="55%" stopColor="var(--color-energy-teal)" />
                  <stop offset="86%" stopColor="var(--color-energy-cyan)" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 60 C 150 18, 250 96, 400 58 S 650 12, 800 56 S 1050 100, 1200 52"
                fill="none"
                stroke="url(#pi-line)"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={1}
                data-reveal-draw=""
              />
            </svg>

            <ul className="relative grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-2">
              {projectIntro.dimensions.map((dimension, i) => (
                <li
                  key={dimension}
                  className="flex flex-col items-center gap-3 text-center"
                  style={{ ["--v-delay" as string]: `${120 + i * 55}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 block size-3 shrink-0 rounded-full bg-[radial-gradient(circle,var(--color-energy-mint),var(--color-energy-teal))] ring-4 ring-canvas"
                  />
                  <span className="text-lg font-semibold text-navy sm:text-xl">
                    {dimension}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-14 text-center text-xl font-medium text-ink-teal sm:mt-16 sm:text-2xl">
            {projectIntro.connective}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-20 max-w-3xl text-center text-ink-body sm:mt-24">
            {projectIntro.body}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-gradient mx-auto mt-14 max-w-5xl text-center text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.16] font-semibold">
            {projectIntro.question}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-ink-body">
            {projectIntro.closing}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
