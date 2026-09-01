import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { triad } from "@/content/home";

export function UnderstandTrackSupport() {
  return (
    <SectionShell labelledBy="triad-heading" tone="mist" bloom="dual" flow="band">
      <Reveal>
        <h2 id="triad-heading" className="type-section max-w-3xl">
          {triad.heading}
        </h2>
        <p className="mt-6 max-w-xl text-ink-body">{triad.body}</p>
      </Reveal>

      <ol className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[1.15rem] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-[var(--color-energy-mint)] via-[var(--color-energy-teal)] to-[var(--color-energy-cyan)] opacity-70 lg:block"
        />
        {triad.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={80 + i * 80} className="relative text-center lg:px-6">
            <span
              aria-hidden="true"
              className="relative z-10 mx-auto mb-6 flex size-8 items-center justify-center rounded-full bg-canvas"
            >
              <span className="size-3 rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--color-energy-mint),var(--color-energy-teal))]" />
            </span>
            <h3 className="text-2xl font-semibold sm:text-3xl">{item.name}</h3>
            <p className="mt-4 text-base text-ink-body">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
