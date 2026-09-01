import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import {
  JudgementIllustration,
  PrivacyLayerIllustration,
  EvidenceIllustration,
} from "@/components/vascurra/illustrations/ambition-panels";
import { projectStatus } from "@/content/home";

const graphics = [JudgementIllustration, PrivacyLayerIllustration, EvidenceIllustration];

export function ProjectStatus() {
  return (
    <SectionShell labelledBy="status-heading">
      <Reveal>
        <h2 id="status-heading" className="type-section mx-auto max-w-4xl text-center">
          {projectStatus.heading}
        </h2>
      </Reveal>
      <ul className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {projectStatus.themes.map((theme, i) => {
          const Graphic = graphics[i] ?? JudgementIllustration;
          return (
            <Reveal as="li" key={theme.id} delay={80 + i * 60}>
              <article className="flex h-full flex-col">
                <div className="mb-8 min-h-[15rem] overflow-hidden">
                  <Graphic />
                </div>
                <h3 className="text-[1.45rem] leading-snug font-semibold text-navy">
                  {theme.name}
                </h3>
                <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-body">{theme.body}</p>
              </article>
            </Reveal>
          );
        })}
      </ul>
      <Reveal delay={100}>
        <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-ink-muted">
          {projectStatus.boundaries}
        </p>
      </Reveal>
    </SectionShell>
  );
}
