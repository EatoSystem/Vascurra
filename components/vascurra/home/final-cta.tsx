import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { comingSoon, hero } from "@/content/home";
import { earlyAccessHref, sectionIds } from "@/content/site";

export function FinalCta() {
  return (
    <section
      id={sectionIds.closing}
      aria-labelledby="closing-heading"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep py-32 sm:py-40 lg:py-48"
    >
      <BloomField tone="deep" intensity={42} className="inset-x-[-30%] top-[-20%] h-[140%]" />
      <VascularFlow variant="deep" className="h-[70%]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[80rem] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
        <Reveal>
          <h2 id="closing-heading" className="type-display-xl max-w-xl text-on-deep">
            {comingSoon.heading}
          </h2>
          <p className="type-lead mt-8 max-w-lg font-medium text-on-deep">
            {comingSoon.statement}
          </p>
          <p className="mt-6 max-w-lg text-on-deep-muted">{comingSoon.body}</p>
          <div className="mt-12">
            <CtaLink href={earlyAccessHref} variant="onDeep">
              {hero.primaryCta}
            </CtaLink>
          </div>
        </Reveal>
        <div className="flex justify-center lg:justify-end">
          <BrainStage slot="closing" tone="deep" />
        </div>
      </div>
    </section>
  );
}
