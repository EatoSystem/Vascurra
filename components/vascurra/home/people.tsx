import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { EditorialHeading } from "@/components/vascurra/ui/editorial-heading";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import { PeopleScreen } from "@/components/vascurra/ui/product-screens";
import { people } from "@/content/home";
import { sectionIds } from "@/content/site";

export function People() {
  return (
    <SectionShell id={sectionIds.people} labelledBy="people-heading" bloom="mint">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div>
          <Reveal>
            <EditorialHeading id="people-heading" kicker="Personal">
              {people.heading}
            </EditorialHeading>
            <p className="type-lead mt-6 max-w-xl font-medium text-navy">
              {people.lead}
            </p>
          </Reveal>
          <ul className="mt-10 space-y-7">
            {people.capabilities.map((item, i) => (
              <Reveal as="li" key={item.name} delay={80 + i * 60}>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 max-w-md text-base text-ink-body">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal delay={100} className="flex justify-center lg:justify-end">
          <div className="relative">
            <DeviceFrame
              variant="phone"
              label={people.heading}
              className="relative z-10"
            >
              <PeopleScreen />
            </DeviceFrame>
            <div
              aria-hidden="true"
              className="absolute top-16 -left-16 hidden w-[200px] opacity-50 sm:block"
            >
            <DeviceFrame variant="phone" label="" decorative>
                <PeopleScreen />
              </DeviceFrame>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
