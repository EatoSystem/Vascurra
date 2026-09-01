import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { projectStatus } from "@/content/home";

const graphics = ["judgement", "privacy", "evidence"] as const;

export function ProjectStatus() {
  return (
    <SectionShell labelledBy="status-heading">
      <Reveal>
        <h2 id="status-heading" className="type-section mx-auto max-w-3xl text-center">
          {projectStatus.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-center text-[1.125rem] leading-[1.7] text-ink-body">
          {projectStatus.lead}
        </p>
      </Reveal>
      <ul className="mt-16 grid gap-8 lg:grid-cols-3">
        {projectStatus.themes.map((theme, i) => (
          <Reveal as="li" key={theme.id} delay={80 + i * 60}>
            <article className="flex h-full flex-col border-t border-hairline pt-8">
              <span className="mb-6 inline-flex text-ink-teal">
                <LineIcon name={graphics[i] ?? "judgement"} className="size-10" />
              </span>
              <h3 className="text-2xl font-semibold text-navy">{theme.name}</h3>
              <p className="mt-4 text-[1.0625rem] leading-[1.65] text-ink-body">{theme.body}</p>
            </article>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={100}>
        <div className="mx-auto mt-20 max-w-3xl">
          <p className="text-base leading-relaxed text-ink-muted">{projectStatus.boundaries}</p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{projectStatus.closing}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
