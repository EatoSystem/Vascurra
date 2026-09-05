import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { EditorialHeading } from "@/components/vascurra/ui/editorial-heading";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import { ResearchScreen } from "@/components/vascurra/ui/product-screens";
import { research } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Research() {
  return (
    <SectionShell id={sectionIds.research} labelledBy="research-heading">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Reveal delay={80} className="order-last flex justify-center lg:order-first">
          <DeviceFrame variant="laptop" label={research.heading}>
            <ResearchScreen />
          </DeviceFrame>
        </Reveal>
        <div>
          <Reveal>
            <EditorialHeading id="research-heading" kicker="Learning">
              {research.heading}
            </EditorialHeading>
            <p className="type-lead mt-6 max-w-xl font-medium text-navy">
              {research.lead}
            </p>
          </Reveal>
          <ul className="mt-10 space-y-7">
            {research.capabilities.map((item, i) => (
              <Reveal as="li" key={item.name} delay={80 + i * 60}>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 max-w-md text-base text-ink-body">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
