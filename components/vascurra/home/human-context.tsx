import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { EditorialHeading } from "@/components/vascurra/ui/editorial-heading";
import { humanContext } from "@/content/home";
import { sectionIds } from "@/content/site";

export function HumanContext() {
  return (
    <SectionShell
      id={sectionIds.why}
      labelledBy="human-context-heading"
      bloom="mint"
      flow="band"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-24">
        <Reveal>
          <EditorialHeading id="human-context-heading">
            {humanContext.heading}
          </EditorialHeading>
        </Reveal>
        <Reveal delay={100}>
          <p className="type-lead font-medium text-navy">{humanContext.lead}</p>
        </Reveal>
      </div>
      <Reveal delay={80}>
        <p className="mt-10 max-w-2xl text-ink-body">{humanContext.body}</p>
      </Reveal>
    </SectionShell>
  );
}
