import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import {
  ArtSlot,
  EvidenceChapterStage,
  HumanChapterStage,
  PrivacyChapterStage,
} from "@/components/vascurra/home/mid-art";
import { projectStatus } from "@/content/home";
import { sectionIds } from "@/content/site";

const stages = [HumanChapterStage, PrivacyChapterStage, EvidenceChapterStage];

export function ProjectStatus() {
  return (
    <HomeMidShell labelledBy="status-heading">
      <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.7fr)] lg:gap-16">
        <Reveal>
          <p className="home-mid-kicker">{projectStatus.eyebrow}</p>
          <h2 id="status-heading" className="home-mid-heading mt-4 max-w-xl">
            <span className="block text-[var(--vascurra-deep-teal)]">
              {projectStatus.headingLead}
            </span>
            <span className="text-mark">{projectStatus.headingAccent}</span>
          </h2>
          <p className="home-mid-body mt-6 max-w-md text-ink-body">{projectStatus.intro}</p>
          <div className="mt-8">
            <CtaLink href={`#${sectionIds.approach}`}>{projectStatus.cta} →</CtaLink>
          </div>
        </Reveal>

        <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {projectStatus.themes.map((theme, i) => {
            const Graphic = stages[i] ?? HumanChapterStage;
            return (
              <Reveal as="li" key={theme.id} delay={80 + i * 70}>
                <ArtSlot
                  slot={theme.slot}
                  label={theme.label}
                  className="aspect-[3/2] min-h-[9.5rem] w-full"
                >
                  <Graphic />
                </ArtSlot>
                <h3 className="mt-6 text-[clamp(1.25rem,1.8vw,1.55rem)] leading-snug font-semibold text-[var(--vascurra-deep-teal)]">
                  {theme.name}
                </h3>
                <p className="mt-3 text-[1.125rem] leading-relaxed text-ink-body">{theme.body}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <HomeMidClose>{projectStatus.note}</HomeMidClose>
      <p className="sr-only">{projectStatus.boundaries}</p>
    </HomeMidShell>
  );
}
