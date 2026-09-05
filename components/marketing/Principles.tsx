import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { principles } from "@/content/home";

/**
 * The five principles threaded along one continuous vascular spine rather than
 * broken into five identical cards.
 *
 * On desktop the principles alternate either side of a flowing central line and
 * their nodes sit on that line, so the connection is literal. The spine runs in
 * the gutter between the two columns, which is why it never crosses copy at any
 * width. Mobile follows a single left-hand spine.
 *
 * The spine is decorative — the principles are an ordered list and read
 * correctly with no graphic at all.
 */
/** Static row classes: one principle per row, so the journey descends. */
const rowStart = [
  "lg:row-start-1",
  "lg:row-start-2",
  "lg:row-start-3",
  "lg:row-start-4",
  "lg:row-start-5",
];

export function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <BloomField
        tone="teal"
        intensity={24}
        className="inset-x-[-16%] top-[2%] h-[84%]"
      />

      <Container>
        <Reveal>
          <h2 id="principles-heading" className="type-section max-w-3xl">
            {principles.heading}
          </h2>
        </Reveal>

        <div className="relative mt-16 sm:mt-20">
          {/* Desktop spine — a gentle flowing line inside the centre gutter. */}
          <Reveal className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-28 -translate-x-1/2 lg:block">
            <svg
              viewBox="0 0 100 1000"
              preserveAspectRatio="none"
              aria-hidden="true"
              focusable="false"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="pr-line" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
                  <stop offset="14%" stopColor="var(--color-energy-mint)" />
                  <stop offset="58%" stopColor="var(--color-energy-teal)" />
                  <stop offset="90%" stopColor="var(--color-energy-cyan)" />
                  <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M50 0 C 74 90, 26 170, 50 250 C 74 330, 26 410, 50 490 C 74 570, 26 650, 50 730 C 74 810, 26 900, 50 1000"
                fill="none"
                stroke="url(#pr-line)"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                data-reveal-draw=""
              />
            </svg>
          </Reveal>

          {/* Mobile spine — decorative. */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-6 left-[9px] w-px bg-gradient-to-b from-transparent via-[var(--color-energy-teal)] to-transparent opacity-45 lg:hidden"
          />

          <ol className="relative flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-x-28 lg:gap-y-16">
            {principles.items.map((item, i) => {
              const onLeft = i % 2 === 0;
              const row = rowStart[i] ?? "";
              return (
                <Reveal
                  as="li"
                  key={item.id}
                  delay={100 + i * 65}
                  className={`relative flex flex-col pl-11 lg:pl-0 ${row} ${
                    onLeft
                      ? "lg:col-start-1 lg:items-end lg:text-right"
                      : "lg:col-start-2 lg:items-start lg:text-left"
                  }`}
                >
                  {/* Sits on the spine: the inner edge of each column. */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-1.5 flex size-6 items-center justify-center rounded-full bg-canvas max-lg:left-0 lg:top-2.5 ${
                      onLeft ? "lg:right-[-3.9rem]" : "lg:left-[-3.9rem]"
                    }`}
                  >
                    <span className="absolute inset-[-7px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-energy-mint)_45%,transparent),transparent_70%)] blur-[3px]" />
                    <span className="relative size-3.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-energy-mint),var(--color-energy-teal))]" />
                  </span>

                  <span
                    aria-hidden="true"
                    className={`ghost-numeral pointer-events-none absolute -top-8 select-none lg:-top-10 ${
                      onLeft ? "right-0 max-lg:left-8 max-lg:right-auto" : "left-0 max-lg:left-8"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="relative text-[1.75rem] font-semibold sm:text-4xl">
                    {item.name}
                  </h3>
                  <p className="relative mt-4 max-w-md text-lg text-ink-body">
                    {item.body}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
