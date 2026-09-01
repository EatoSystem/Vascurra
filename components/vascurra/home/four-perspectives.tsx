import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import {
  PeopleScreen,
  FamilyScreen,
  ClinicianScreen,
  ResearchScreen,
} from "@/components/vascurra/ui/product-screens";
import { perspectives } from "@/content/home";

const screens = [PeopleScreen, FamilyScreen, ClinicianScreen, ResearchScreen] as const;

export function FourPerspectives() {
  return (
    <SectionShell labelledBy="perspectives-heading" bloom="dual">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end">
        <Reveal>
          <h2 id="perspectives-heading" className="type-section max-w-xl">
            <span className="block">{perspectives.heading}</span>
            <span className="text-ink-teal">{perspectives.headingLine}</span>
          </h2>
          <a
            href={`#${perspectives.items[0]?.id ?? "people"}`}
            className="mt-6 inline-flex min-h-11 items-center text-base font-semibold text-ink-teal underline-offset-4 hover:underline"
          >
            {perspectives.cta}
          </a>
          <p className="mt-8 max-w-md text-base text-ink-muted">{perspectives.note}</p>
        </Reveal>

        <ul className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible">
          {perspectives.items.map((item, i) => {
            const Screen = screens[i] ?? PeopleScreen;
            return (
              <Reveal
                as="li"
                key={item.id}
                delay={70 + i * 50}
                className="min-w-[180px] shrink-0 lg:min-w-0"
              >
                <div id={item.id}>
                  <h3 className="mb-3 text-sm font-semibold tracking-[0.16em] text-ink-teal uppercase">
                    {item.name}
                  </h3>
                  <DeviceFrame variant="compact" label={item.name}>
                    <Screen />
                  </DeviceFrame>
                  <p className="mt-3 text-sm text-ink-body">{item.summary}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </SectionShell>
  );
}
