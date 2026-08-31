import { Section } from "@/components/ui/Section";
import { projectIntro } from "@/content/home";
import { sectionIds } from "@/content/site";

export function ProjectIntro() {
  return (
    <Section id={sectionIds.project} labelledBy="project-heading">
      <div className="max-w-3xl">
        <h2
          id="project-heading"
          className="text-3xl font-semibold sm:text-4xl lg:text-5xl"
        >
          {projectIntro.heading}
        </h2>
        <p className="mt-7 text-lg text-navy-700 sm:text-xl">{projectIntro.body}</p>
      </div>

      {/* The framing question. A pull-quote, not a section label — so it is
          marked up as emphasised text rather than a heading. */}
      <figure className="relative mt-14 overflow-hidden rounded-[2rem] border border-hairline bg-surface/70 p-8 backdrop-blur-sm sm:mt-16 sm:p-12 lg:p-14">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--color-mint-400)_12%,transparent),transparent_60%)]"
        />
        <blockquote>
          <p className="text-gradient max-w-4xl text-2xl leading-[1.25] font-semibold sm:text-4xl lg:text-[2.75rem]">
            {projectIntro.question}
          </p>
        </blockquote>
      </figure>

      <p className="mt-12 max-w-3xl text-lg text-navy-700 sm:text-xl">
        {projectIntro.closing}
      </p>
    </Section>
  );
}
