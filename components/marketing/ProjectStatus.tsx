import { Container } from "@/components/ui/Container";
import { Panel } from "@/components/ui/Panel";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { projectStatus } from "@/content/home";

/**
 * Trust and project status — reassuring rather than defensive.
 *
 * The three themes sit on dimensional luminous surfaces with a gradient rule
 * above each. The required project-status wording is retained verbatim beneath
 * at full readable size and contrast — it is never reduced to small print.
 */
export function ProjectStatus() {
  return (
    <section
      aria-labelledby="status-heading"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <BloomField
        tone="cyan"
        intensity={22}
        className="inset-x-[-14%] top-[6%] h-[80%]"
      />

      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <Reveal>
            <h2 id="status-heading" className="type-section max-w-3xl">
              {projectStatus.heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xl font-medium text-navy lg:pb-2">
              {projectStatus.lead}
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 sm:gap-7 lg:grid-cols-3">
          {projectStatus.themes.map((theme, i) => (
            <Reveal as="li" key={theme.id} delay={100 + i * 70}>
              <Panel>
                <span
                  aria-hidden="true"
                  className="mb-7 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[var(--color-energy-mint)] to-[var(--color-energy-cyan)]"
                />
                <h3 className="text-xl font-semibold sm:text-2xl">{theme.name}</h3>
                <p className="mt-4 text-base text-ink-body">{theme.body}</p>
              </Panel>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-20 max-w-3xl border-t border-hairline pt-10">
            <p className="text-base text-ink-body">{projectStatus.boundaries}</p>
            <p className="mt-5 text-base text-ink-body">{projectStatus.closing}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
