import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { idea } from "@/content/home";

export function Idea() {
  return (
    <SectionShell labelledBy="idea-heading" pad="tight" bloom="cyan" flow="band">
      <Reveal>
        <h2
          id="idea-heading"
          className="text-gradient mx-auto max-w-4xl text-center text-[clamp(1.75rem,4vw,3.15rem)] leading-[1.16] font-semibold"
        >
          {idea.heading}
        </h2>
      </Reveal>
      <Reveal delay={90}>
        <p className="mx-auto mt-10 max-w-2xl text-center text-ink-body">{idea.body}</p>
      </Reveal>
    </SectionShell>
  );
}
