import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { projectStatus } from "@/content/home";

/**
 * Safety and trust, presented as three quiet themes on the open field rather
 * than as a large disclaimer box — reassuring, not defensive.
 *
 * The required project-status wording is retained verbatim beneath, at
 * secondary weight but at full readable size and contrast.
 */
export function ProjectStatus() {
  return (
    <section
      aria-labelledby="status-heading"
      className="relative overflow-hidden border-t border-hairline/60 py-24 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2 id="status-heading" className="type-section max-w-4xl">
            {projectStatus.heading}
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-12 sm:gap-10 lg:grid-cols-3 lg:gap-14">
          {projectStatus.themes.map((theme, i) => (
            <Reveal
              as="li"
              key={theme.id}
              delay={100 + i * 70}
              className="border-t border-hairline pt-7 lg:pt-8"
            >
              <span
                aria-hidden="true"
                className="mb-5 block h-px w-14 bg-gradient-to-r from-[var(--color-energy-mint)] to-[var(--color-energy-cyan)]"
              />
              <h3 className="text-xl font-semibold sm:text-2xl">{theme.name}</h3>
              <p className="mt-4 text-base text-ink-body">{theme.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-20 max-w-3xl border-t border-hairline pt-10">
            <p className="text-lg font-medium text-navy">{projectStatus.lead}</p>
            <p className="mt-5 text-base text-ink-body">
              {projectStatus.boundaries}
            </p>
            <p className="mt-5 text-base text-ink-body">{projectStatus.closing}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
