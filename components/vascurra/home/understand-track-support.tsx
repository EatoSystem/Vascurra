import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { triad } from "@/content/home";

function UnderstandGraphic() {
  return (
    <svg viewBox="0 0 280 140" className="h-28 w-full" aria-hidden="true">
      <circle cx="140" cy="72" r="10" fill="var(--color-energy-teal)" />
      <circle cx="48" cy="36" r="5" fill="var(--color-energy-mint)" />
      <circle cx="232" cy="40" r="5" fill="var(--color-energy-cyan)" />
      <circle cx="64" cy="112" r="5" fill="var(--color-energy-cyan)" />
      <circle cx="216" cy="108" r="5" fill="var(--color-energy-mint)" />
      <path
        d="M140 72 L48 36 M140 72 L232 40 M140 72 L64 112 M140 72 L216 108"
        stroke="var(--color-hairline-strong)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function TrackGraphic() {
  return (
    <svg viewBox="0 0 280 140" className="h-28 w-full" aria-hidden="true">
      <path
        d="M16 108 H264"
        stroke="var(--color-hairline-strong)"
        strokeWidth="1.2"
      />
      <path
        d="M16 96 C 64 96, 72 48, 112 52 S 168 108, 208 72 S 248 40, 264 44"
        fill="none"
        stroke="var(--color-energy-teal)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="96" r="4" fill="var(--color-energy-mint)" />
      <circle cx="112" cy="52" r="4" fill="var(--color-energy-teal)" />
      <circle cx="208" cy="72" r="4" fill="var(--color-energy-cyan)" />
      <circle cx="264" cy="44" r="4" fill="var(--color-energy-mint)" />
    </svg>
  );
}

function SupportGraphic() {
  return (
    <svg viewBox="0 0 280 140" className="h-28 w-full" aria-hidden="true">
      <path
        d="M24 100 C 80 100, 80 40, 140 40 S 200 100, 256 100"
        fill="none"
        stroke="var(--color-energy-teal)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="100" r="5" fill="var(--color-energy-mint)" />
      <circle cx="140" cy="40" r="5" fill="var(--color-energy-cyan)" />
      <circle cx="256" cy="100" r="5" fill="var(--color-energy-mint)" />
      <path d="M140 40 V72" stroke="var(--color-hairline-strong)" strokeWidth="1.2" />
      <circle cx="140" cy="78" r="3" fill="var(--color-energy-teal)" />
    </svg>
  );
}

const graphics = [UnderstandGraphic, TrackGraphic, SupportGraphic];

export function UnderstandTrackSupport() {
  return (
    <SectionShell labelledBy="triad-heading">
      <Reveal>
        <h2 id="triad-heading" className="type-section max-w-3xl">
          {triad.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
          {triad.subheading}
        </p>
      </Reveal>
      <ol className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[4.75rem] right-[8%] left-[8%] hidden h-px bg-hairline-strong lg:block"
        />
        {triad.items.map((item, i) => {
          const Graphic = graphics[i] ?? UnderstandGraphic;
          return (
            <Reveal as="li" key={item.name} delay={80 + i * 70} className="relative">
              <span className="relative z-10 mb-6 flex size-3 rounded-full bg-[var(--color-energy-teal)]" />
              <Graphic />
              <h3 className="mt-6 text-2xl font-semibold text-navy">{item.name}</h3>
              <p className="mt-3 max-w-sm text-[1.0625rem] leading-[1.65] text-ink-body">
                {item.body}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </SectionShell>
  );
}
