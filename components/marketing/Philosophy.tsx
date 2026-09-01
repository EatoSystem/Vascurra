import { Container } from "@/components/ui/Container";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

const icons = ["trust", "insight", "enable", "journey"] as const;

export function Philosophy() {
  return (
    <section
      id={sectionIds.approach}
      aria-labelledby="philosophy-heading"
      className="relative isolate overflow-hidden bg-deep py-28 sm:py-36"
    >
      <BloomField tone="deep" intensity={28} className="inset-x-[-20%] top-[-10%] h-[120%]" />
      <VascularFlow variant="deep" />
      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <Reveal>
            <h2 id="philosophy-heading" className="type-display-xl max-w-3xl">
              <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
              <span className="block text-[var(--color-energy-cyan)]">
                {philosophy.headingLines[1]}
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-on-deep-muted">{philosophy.body}</p>
          </Reveal>
          <ol className="relative grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-8 right-6 left-6 hidden border-t border-dashed border-[var(--color-energy-cyan)]/35 sm:block lg:hidden xl:block"
            />
            {philosophy.steps.map((step, i) => (
              <Reveal as="li" key={step.name} delay={80 + i * 70} className="text-center">
                <span className="relative z-10 mx-auto mb-4 flex size-16 items-center justify-center rounded-full border border-deep-hairline bg-deep-raised text-[var(--color-energy-cyan)]">
                  <LineIcon name={icons[i] ?? "trust"} />
                </span>
                <h3 className="font-serif text-xl text-on-deep">{step.name}</h3>
                <p className="mt-2 text-sm text-on-deep-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
