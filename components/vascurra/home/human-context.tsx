import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { humanContext, journey } from "@/content/home";
import { sectionIds } from "@/content/site";

const icons = ["monitor", "inform", "support", "thrive"] as const;

export function HumanContext() {
  return (
    <SectionShell
      id={sectionIds.why}
      labelledBy="human-context-heading"
      bloom="mint"
      flow="band"
    >
      <Reveal>
        <h2
          id="human-context-heading"
          className="type-section mx-auto max-w-3xl text-center"
        >
          {humanContext.heading}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-center text-ink-body">
          {humanContext.body}
        </p>
      </Reveal>

      <ol className="relative mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-8 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-[var(--color-energy-mint)] via-[var(--color-energy-teal)] to-[var(--color-energy-cyan)] opacity-70 lg:block"
        />
        {journey.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={80 + i * 70} className="relative text-center">
            <span className="relative z-10 mx-auto mb-5 flex size-16 items-center justify-center rounded-full border border-hairline bg-white text-ink-teal shadow-[0_12px_30px_-20px_rgba(8,61,74,0.35)]">
              <LineIcon name={icons[i] ?? "monitor"} />
            </span>
            <h3 className="font-serif text-2xl font-semibold">{item.name}</h3>
            <p className="mt-2 text-base text-ink-muted">{item.body}</p>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
