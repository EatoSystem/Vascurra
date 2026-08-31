import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { BrainStage } from "@/components/motion/BrainStage";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { perspectives } from "@/content/home";

/**
 * One vision, four connected perspectives — as one integrated system.
 *
 * The pillars are dimensional luminous panels, each carrying a ghost numeral
 * and its own vascular motif, arranged around the brain. The previous pass
 * rendered them as a dot, a stub line and three lines of copy, which read as
 * thin labels rather than product pillars.
 *
 * Desktop places the mark at the centre with the four panels in the quadrants;
 * mobile is a vertical spine with the panels branching off it. The connectors
 * are decorative — the content is a real <ul> in reading order.
 */

const quadrant = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
] as const;

/** A small vascular motif per pillar, drawn from the mark's own language. */
const motifs = [
  "M4 30 C 26 30, 34 12, 56 12 M56 12 C 70 12, 76 20, 88 20",
  "M4 20 C 24 20, 30 32, 50 32 C 66 32, 72 16, 90 16",
  "M4 12 C 22 12, 32 30, 52 30 C 68 30, 74 20, 90 20",
  "M4 26 C 20 26, 28 14, 46 14 C 64 14, 70 28, 90 28",
];

export function Architecture() {
  return (
    <section
      aria-labelledby="architecture-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <BloomField
        tone="dual"
        intensity={28}
        className="inset-x-[-18%] top-[6%] h-[86%]"
      />

      <Container>
        <Reveal>
          <h2
            id="architecture-heading"
            className="type-section mx-auto max-w-3xl text-center"
          >
            {perspectives.heading}
          </h2>
        </Reveal>

        <div className="relative mt-16 lg:mt-20">
          {/* Desktop connectors. Coordinates measured against the rendered
              grid; they stay in the empty corridor between the mark and the
              panels at every desktop width. */}
          <Reveal className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="h-full w-full"
            >
              <defs>
                <radialGradient
                  id="arch-line"
                  gradientUnits="userSpaceOnUse"
                  cx="500"
                  cy="310"
                  r="320"
                >
                  <stop offset="0%" stopColor="var(--color-energy-teal)" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="var(--color-energy-teal)" stopOpacity="0.66" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              {[
                "M438 196 C 418 156, 392 118, 366 84",
                "M562 196 C 582 156, 608 118, 634 84",
                "M438 424 C 418 464, 392 502, 366 536",
                "M562 424 C 582 464, 608 502, 634 536",
              ].map((d, i) => (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#arch-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  pathLength={1}
                  data-reveal-draw=""
                  style={{ ["--v-delay" as string]: `${120 + i * 90}ms` }}
                />
              ))}
            </svg>
          </Reveal>

          {/* Mobile spine — decorative. */}
          <div
            aria-hidden="true"
            className="absolute top-4 bottom-10 left-[11px] w-px bg-gradient-to-b from-transparent via-[var(--color-energy-teal)] to-transparent opacity-50 lg:hidden"
          />

          <ul className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-x-14 lg:gap-y-16">
            {perspectives.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.id}
                delay={120 + i * 70}
                className={`relative pl-8 lg:pl-0 ${quadrant[i] ?? ""}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-9 left-0 size-3.5 rounded-full bg-[radial-gradient(circle,var(--color-energy-mint),var(--color-energy-teal))] ring-4 ring-canvas lg:hidden"
                />
                <Panel>
                  <span
                    aria-hidden="true"
                    className="ghost-numeral pointer-events-none absolute -top-3 -right-2 select-none"
                  >
                    {i + 1}
                  </span>

                  <svg
                    viewBox="0 0 94 44"
                    aria-hidden="true"
                    focusable="false"
                    className="mb-6 h-6 w-24"
                  >
                    <path
                      d={motifs[i]}
                      fill="none"
                      stroke="url(#arch-line)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      style={{ stroke: "var(--color-energy-teal)" }}
                    />
                    <circle cx="88" cy={i % 2 === 0 ? 20 : 16} r="3.5" fill="var(--color-energy-mint)" />
                  </svg>

                  <h3 className="relative text-2xl font-semibold sm:text-[1.75rem]">
                    {item.name}
                  </h3>
                  <p className="relative mt-2 text-lg font-medium text-ink-teal">
                    {item.branch}
                  </p>
                  <p className="relative mt-5 text-base text-ink-body">
                    {item.body}
                  </p>
                </Panel>
              </Reveal>
            ))}

            {/* Centre of the system. Last in the DOM so the four perspectives
                stay in reading order for assistive technology. */}
            <li className="order-first flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <BrainStage slot="feature" />
            </li>
          </ul>
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-base text-ink-muted">
            {perspectives.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
