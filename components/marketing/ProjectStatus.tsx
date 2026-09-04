import { Reveal } from "@/components/motion/Reveal";
import { HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import {
  ArtSlot,
  EvidenceChapterStage,
  HumanChapterStage,
  PrivacyChapterStage,
} from "@/components/vascurra/home/mid-art";
import { projectStatus } from "@/content/home";

const stages = [HumanChapterStage, PrivacyChapterStage, EvidenceChapterStage];

export function ProjectStatus() {
  return (
    <HomeMidShell labelledBy="status-heading">
      <Reveal>
        <p className="home-mid-kicker">{projectStatus.eyebrow}</p>
        <h2 id="status-heading" className="home-mid-heading mt-4 max-w-5xl">
          <span className="block text-[var(--vascurra-deep-teal)]">
            {projectStatus.headingLead}
          </span>
          <span className="text-mark">{projectStatus.headingAccent}</span>
        </h2>
        <p className="home-mid-body mt-6 max-w-3xl text-ink-body">{projectStatus.intro}</p>
      </Reveal>

      <ol className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-10">
        {projectStatus.themes.map((theme, i) => {
          const Graphic = stages[i] ?? HumanChapterStage;
          return (
            <Reveal as="li" key={theme.id} delay={80 + i * 70}>
              <p className="text-[0.9375rem] font-semibold tracking-[0.18em] text-ink-teal uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[clamp(1.45rem,2vw,1.85rem)] leading-snug font-semibold text-[var(--vascurra-deep-teal)]">
                {theme.name}
              </h3>
              {/* SECTION 05 ART SLOT */}
              <ArtSlot
                slot={theme.slot}
                label={theme.label}
                className="mt-8 aspect-[10/7] min-h-[14rem] w-full"
              >
                <Graphic />
              </ArtSlot>
              <p className="home-mid-body mt-6 text-ink-body">{theme.body}</p>
              <p className="mt-3 text-[1.0625rem] font-medium text-ink-teal">{theme.label}</p>
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={120}>
        <div className="mt-16 max-w-3xl border-t border-hairline pt-10">
          <h3 className="text-[clamp(1.45rem,2vw,1.85rem)] font-semibold text-[var(--vascurra-deep-teal)]">
            {projectStatus.responsible.name}
          </h3>
          <p className="home-mid-body mt-4 text-ink-body">{projectStatus.responsible.body}</p>
          <p className="mt-3 text-[1.0625rem] font-medium text-ink-teal">
            {projectStatus.responsible.label}
          </p>
        </div>
        <p className="home-mid-body mt-12 max-w-3xl text-ink-muted">
          {projectStatus.lead} {projectStatus.note}
        </p>
        <p className="home-mid-body mt-4 max-w-3xl text-ink-muted">{projectStatus.boundaries}</p>
      </Reveal>
    </HomeMidShell>
  );
}
