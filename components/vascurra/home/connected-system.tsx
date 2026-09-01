import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { EditorialHeading } from "@/components/vascurra/ui/editorial-heading";
import { connectedSystem } from "@/content/home";

const positions = [
  { x: 50, y: 10 },
  { x: 82, y: 28 },
  { x: 88, y: 58 },
  { x: 70, y: 84 },
  { x: 30, y: 84 },
  { x: 12, y: 58 },
  { x: 18, y: 28 },
  { x: 50, y: 90 },
];

export function ConnectedSystem() {
  return (
    <SectionShell labelledBy="connected-heading" tone="mist" bloom="teal" flow="mist">
      <Reveal>
        <EditorialHeading id="connected-heading">
          {connectedSystem.heading}
        </EditorialHeading>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-8 max-w-2xl text-ink-body">{connectedSystem.body}</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mx-auto mt-16 max-w-3xl">
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          >
            {positions.slice(0, 7).map((point, i) => (
              <line
                key={i}
                x1="50"
                y1="48"
                x2={point.x}
                y2={point.y}
                stroke="var(--color-energy-teal)"
                strokeOpacity="0.35"
                strokeWidth="0.35"
              />
            ))}
            <circle cx="50" cy="48" r="3.2" fill="var(--color-energy-mint)" />
          </svg>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-4 lg:gap-y-16">
            {connectedSystem.factors.map((factor) => (
              <li key={factor} className="text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto mb-3 block size-2.5 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-energy-mint),var(--color-energy-teal))]"
                />
                <span className="text-lg font-semibold text-navy sm:text-xl">
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
