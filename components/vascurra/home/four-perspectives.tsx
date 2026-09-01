import { Reveal } from "@/components/motion/Reveal";
import { BrainStage } from "@/components/motion/BrainStage";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import { PeopleScreen } from "@/components/vascurra/ui/product-screens";
import { perspectives } from "@/content/home";

export function FourPerspectives() {
  return (
    <SectionShell labelledBy="perspectives-heading" bloom="dual" flow="mist">
      <Reveal>
        <h2 id="perspectives-heading" className="type-section max-w-3xl">
          <span className="block">{perspectives.heading}</span>
          <span className="text-gradient">{perspectives.headingLine}</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg font-medium text-ink-teal">
          {perspectives.subhead}
        </p>
      </Reveal>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <ul className="flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-2 lg:gap-8 lg:overflow-visible">
          {perspectives.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={80 + i * 60}
              className="min-w-[16rem] shrink-0 lg:min-w-0"
            >
              <a
                href={item.href}
                className="block rounded-[1.5rem] py-1 focus-visible:outline-none"
              >
                <p className="text-sm font-semibold tracking-[0.16em] text-ink-teal uppercase">
                  {item.summary}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{item.name}</h3>
                <p className="mt-3 text-base text-ink-body">{item.body}</p>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={80} className="relative flex items-center justify-center">
          <div className="absolute -z-10">
            <BrainStage slot="feature" />
          </div>
          <DeviceFrame
            variant="phone"
            label={`${perspectives.items[0]?.name} ${perspectives.note}`}
            className="relative translate-x-2 sm:translate-x-6"
          >
            <PeopleScreen />
          </DeviceFrame>
        </Reveal>
      </div>

      <p className="mt-14 max-w-2xl text-base text-ink-muted">{perspectives.note}</p>
    </SectionShell>
  );
}
