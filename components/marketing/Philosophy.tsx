import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { CapabilityProgression } from "@/components/vascurra/illustrations/capability-progression";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative isolate flex min-h-[42rem] items-center overflow-hidden bg-deep py-24 sm:min-h-[46rem] sm:py-28 lg:min-h-[50rem] lg:py-32"
    >
      <VascularFlow variant="single" className="top-[42%] h-[48%] -translate-y-1/2" />
      <Container className="relative z-10">
        <Reveal>
          <h2 id="philosophy-heading" className="type-display-xl max-w-4xl">
            <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
            <span className="text-mark-lum block">{philosophy.headingLines[1]}</span>
          </h2>
          <p className="mt-8 max-w-xl text-[1.125rem] leading-[1.7] text-on-deep-muted">
            {philosophy.principle}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16 lg:mt-20">
            <CapabilityProgression />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
