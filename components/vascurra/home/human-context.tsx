import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { LifeSystemGraphic } from "@/components/vascurra/illustrations/life-system";
import { humanContext } from "@/content/home";
import { sectionIds } from "@/content/site";

export function HumanContext() {
  return (
    <SectionShell id={sectionIds.why} labelledBy="human-context-heading">
      <Reveal>
        <h2
          id="human-context-heading"
          className="type-section mx-auto max-w-4xl text-center"
        >
          {humanContext.heading}
        </h2>
        <p className="type-lead mx-auto mt-6 max-w-2xl text-center font-medium text-ink-teal">
          {humanContext.supporting}
        </p>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-10 sm:mt-14">
          <LifeSystemGraphic />
        </div>
      </Reveal>
    </SectionShell>
  );
}
