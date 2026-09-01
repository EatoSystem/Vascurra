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
      className="relative isolate overflow-hidden bg-deep py-28 sm:py-32"
    >
      <BloomField tone="deep" intensity={34} className="inset-x-[-25%] top-[-10%] h-[125%]" />
      <VascularFlow variant="deep" />
      <div className="relative z-10 mx-auto flex max-w-[80rem] flex-col items-center px-5 text-center sm:px-8 lg:px-12">
        <BrainStage slot="closing" tone="deep" />
        <Reveal delay={80} className="mt-14 flex flex-col items-center">
          <h2 id="closing-heading" className="type-display max-w-4xl">
            <span className="text-gradient-lum">{comingSoon.heading}</span>
          </h2>
          <p className="type-lead mt-7 max-w-2xl font-medium text-on-deep">
            {comingSoon.statement}
          </p>
          <p className="mt-6 max-w-2xl text-on-deep-muted">{comingSoon.body}</p>
          <div className="mt-12">
            <CtaLink href={earlyAccessHref} variant="onDeep">
              {hero.primaryCta}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
