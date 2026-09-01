import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { Reveal } from "@/components/motion/Reveal";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { comingSoon, hero } from "@/content/home";
import { earlyAccessHref, sectionIds } from "@/content/site";

export function FinalCta() {
  return (
    <section
      id={sectionIds.closing}
      aria-labelledby="closing-heading"
      className="relative isolate flex min-h-[38rem] items-center overflow-hidden bg-deep py-24 sm:min-h-[42rem] sm:py-28 lg:min-h-[46rem] lg:py-32"
    >
      <VascularFlow variant="single" className="right-0 left-auto top-1/2 h-[70%] w-[58%] -translate-y-1/2" />
      <div className="relative z-10 mx-auto grid w-full max-w-[80rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:px-12">
        <Reveal>
          <h2 id="closing-heading" className="type-display-xl max-w-xl text-on-deep">
            {comingSoon.heading}
          </h2>
          <p className="type-lead mt-8 max-w-lg font-medium text-on-deep">
            {comingSoon.statement}
          </p>
          <p className="mt-6 max-w-lg text-[1.125rem] leading-[1.7] text-on-deep-muted">
            {comingSoon.body}
          </p>
          <div className="mt-12">
            <CtaLink href={earlyAccessHref} variant="onDeep">
              {hero.primaryCta}
            </CtaLink>
          </div>
        </Reveal>
        <div className="flex justify-center lg:w-[42%] lg:min-w-[38%] lg:justify-end lg:justify-self-end">
          <BrainStage slot="closing" tone="deep" field="none" />
        </div>
      </div>
    </section>
  );
}
