import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { FlowMark } from "@/components/vascurra/ui/flow-mark";
import { projectStatus } from "@/content/home";

const marks = ["nodes", "arc", "bars"] as const;

export function ProjectStatus() {
  return (
    <SectionShell labelledBy="status-heading" bloom="cyan">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
        <Reveal>
          <h2 id="status-heading" className="type-section max-w-md">
            {projectStatus.heading}
          </h2>
          <p className="mt-6 max-w-md text-ink-body">{projectStatus.lead}</p>
        </Reveal>
        <ul className="space-y-8">
          {projectStatus.themes.map((theme, i) => (
            <Reveal as="li" key={theme.id} delay={80 + i * 60}>
              <div className="grid items-center gap-6 sm:grid-cols-[9rem_minmax(0,1fr)]">
                <FlowMark variant={marks[i] ?? "nodes"} />
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{theme.name}</h3>
                  <p className="mt-2 text-base text-ink-body">{theme.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
      <Reveal delay={100}>
        <div className="mt-16 max-w-3xl border-t border-hairline pt-8">
          <p className="text-base text-ink-body">{projectStatus.boundaries}</p>
          <p className="mt-4 text-base text-ink-body">{projectStatus.closing}</p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
