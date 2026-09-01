import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative isolate flex min-h-[34.5rem] items-center overflow-hidden bg-deep py-24 sm:min-h-[38rem] sm:py-28 lg:min-h-[40.5rem] lg:py-32"
    >
      <VascularFlow variant="single" className="top-1/2 h-[58%] -translate-y-1/2" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <Reveal>
            <h2 id="philosophy-heading" className="type-display-xl max-w-3xl">
              <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
              <span className="block text-[var(--color-energy-cyan)]">
                {philosophy.headingLines[1]}
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-[1.125rem] leading-[1.7] text-on-deep-muted">
              {philosophy.body}
            </p>
          </Reveal>
          <ol className="relative grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-4 left-4 hidden h-px bg-[var(--color-energy-cyan)]/35 sm:block"
            />
            {philosophy.steps.map((step, i) => (
              <Reveal as="li" key={step.name} delay={80 + i * 70} className="text-left sm:text-center">
                <span className="relative z-10 mb-4 flex size-3 rounded-full bg-[var(--color-energy-mint)] sm:mx-auto" />
                <h3 className="text-xl font-semibold text-on-deep">{step.name}</h3>
                {i < philosophy.steps.length - 1 ? (
                  <p className="mt-1 text-sm font-medium text-[var(--color-energy-cyan)] sm:hidden">
                    →
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-relaxed text-on-deep-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
