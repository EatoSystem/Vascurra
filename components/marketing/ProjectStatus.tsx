import { Section } from "@/components/ui/Section";
import { projectStatus } from "@/content/home";

/**
 * Safety and project status. Written to reassure rather than defend: it sits
 * on the same calm surface as the rest of the page, with no warning colours,
 * no alert iconography and no small print.
 */
export function ProjectStatus() {
  return (
    <Section labelledBy="status-heading">
      <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface/70 p-8 backdrop-blur-sm sm:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--color-teal-400)_12%,transparent),transparent_62%)]"
        />

        <h2
          id="status-heading"
          className="max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl"
        >
          {projectStatus.heading}
        </h2>

        <p className="mt-8 max-w-3xl text-xl font-medium text-navy-800 sm:text-2xl">
          {projectStatus.lead}
        </p>
        <p className="mt-6 max-w-3xl text-lg text-navy-700">
          {projectStatus.boundaries}
        </p>
        <p className="mt-6 max-w-3xl text-lg text-navy-700">
          {projectStatus.closing}
        </p>
      </div>
    </Section>
  );
}
