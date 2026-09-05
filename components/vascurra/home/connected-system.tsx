import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { connectedSystem } from "@/content/home";

export function ConnectedSystem() {
  return (
    <SectionShell labelledBy="connected-heading" pad="tight">
      <Reveal>
        <h2 id="connected-heading" className="type-section mx-auto max-w-3xl text-center">
          {connectedSystem.heading}
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mx-auto mt-7 max-w-2xl text-center text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
          {connectedSystem.body}
        </p>
      </Reveal>
    </SectionShell>
  );
}
