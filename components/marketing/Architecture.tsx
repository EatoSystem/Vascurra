import { Container } from "@/components/ui/Container";
import { BrainMark } from "@/components/brand/BrainMark";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { perspectives } from "@/content/home";

/**
 * One vision, four connected perspectives — as one integrated system rather
 * than a grid of separate cards.
 *
 * Desktop places the brain at the centre with four branches radiating to the
 * quadrants, connectors drawing in on scroll. Mobile is deliberately
 * redesigned, not a stacked desktop: a vertical vascular spine with nodes
 * branching off it.
 *
 * The connectors are decorative; the content is a real <ul> in reading order,
 * so nothing is conveyed by the graphic alone.
 */

const quadrant = [
  { align: "lg:text-right lg:items-end", order: "lg:col-start-1 lg:row-start-1" },
  { align: "lg:text-left lg:items-start", order: "lg:col-start-3 lg:row-start-1" },
  { align: "lg:text-right lg:items-end", order: "lg:col-start-1 lg:row-start-2" },
  { align: "lg:text-left lg:items-start", order: "lg:col-start-3 lg:row-start-2" },
] as const;

export function Architecture() {
  return (
    <section
      aria-labelledby="architecture-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <BloomField
        tone="dual"
        intensity={16}
        className="inset-x-[-16%] top-[10%] h-[80%]"
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
          {/* Desktop connectors — decorative, drawn on scroll. */}
          <Reveal className="pointer-events-none absolute inset-0 hidden lg:block">
            <svg
              viewBox="0 0 1000 560"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="h-full w-full"
            >
              <defs>
                {/* User-space radial, centred on the mark, so all four
                    branches read as energy leaving the brain and fading
                    outward regardless of their individual direction. */}
                <radialGradient
                  id="arch-line"
                  gradientUnits="userSpaceOnUse"
                  cx="500"
                  cy="280"
                  r="300"
                >
                  <stop offset="0%" stopColor="var(--color-energy-teal)" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="var(--color-energy-teal)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0.12" />
                </radialGradient>
              </defs>
              {/* Coordinates measured against the rendered grid rather than
                  guessed: the brain sits at (500,280) with a radius of about
                  (101-126, 118-147) across desktop widths, and the perspective
                  nodes sit at x 323-347 / 653-677. Every path stays inside
                  x 358-642, which is the empty corridor between the mark and
                  the copy at every width, so no connector crosses text. */}
              {[
                "M436 156 C 416 116, 388 74, 360 38",
                "M564 156 C 584 116, 612 74, 640 38",
                "M436 404 C 416 444, 388 486, 360 522",
                "M564 404 C 584 444, 612 486, 640 522",
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
            className="absolute top-2 bottom-10 left-[7px] w-px bg-gradient-to-b from-transparent via-[var(--color-energy-teal)] to-transparent opacity-45 lg:hidden"
          />

          <ul className="relative grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-x-12 lg:gap-y-28">
            {perspectives.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.id}
                delay={120 + i * 70}
                className={`relative flex flex-col pl-9 lg:pl-0 ${quadrant[i]?.order ?? ""} ${quadrant[i]?.align ?? ""}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-0 size-3.5 rounded-full bg-[radial-gradient(circle,var(--color-energy-mint),var(--color-energy-teal))] ring-4 ring-canvas lg:static lg:mb-4 lg:ring-0"
                />
                <h3 className="text-2xl font-semibold sm:text-3xl">{item.name}</h3>
                <p className="mt-2 text-lg font-medium text-ink-teal">
                  {item.branch}
                </p>
                <p className="mt-4 max-w-sm text-base text-ink-body lg:max-w-xs">
                  {item.body}
                </p>
              </Reveal>
            ))}

            {/* Centre of the system. Ordered last in the DOM so the four
                perspectives stay in reading order for assistive technology. */}
            <li className="order-first flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <BrainMark slot="feature" alt="" />
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
