import { Container } from "@/components/ui/Container";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * The signature brand moment. Held on the light canvas rather than inverted to
 * a dark panel, per docs/brand/brand-guidelines.md — the impact comes from
 * scale, space and a restrained aurora, not from contrast reversal.
 */
export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,color-mix(in_srgb,var(--color-mint-400)_16%,transparent),transparent_68%),radial-gradient(ellipse_60%_50%_at_85%_20%,color-mix(in_srgb,var(--color-cyan-400)_14%,transparent),transparent_65%)]"
      />

      <Container>
        <h2
          id="philosophy-heading"
          className="text-[2.75rem] leading-[1.05] font-semibold sm:text-6xl lg:text-7xl"
        >
          <span className="block">{philosophy.headingLines[0]}</span>
          <span className="text-gradient block">{philosophy.headingLines[1]}</span>
        </h2>

        {/* Ordered list: the progression is carried by markup and by the step
            numbers, never by the arrow glyphs or colour alone. */}
        <ol className="mt-14 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
          {philosophy.steps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-0"
            >
              <span className="inline-flex min-h-14 items-center gap-3 rounded-full border border-hairline bg-surface/80 px-6 py-3 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-gradient-to-br from-mint-400 to-cyan-400"
                />
                <span className="text-lg font-semibold text-navy-900 sm:text-xl">
                  {step}
                </span>
              </span>

              {index < philosophy.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pl-7 text-2xl leading-none text-navy-600 sm:px-4 sm:pl-4"
                >
                  <span className="hidden sm:inline">&rarr;</span>
                  <span className="sm:hidden">&darr;</span>
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-14 max-w-2xl text-lg text-navy-700 sm:text-xl">
          {philosophy.body}
        </p>
      </Container>
    </section>
  );
}
