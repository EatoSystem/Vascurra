import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { hero } from "@/content/home";
import { earlyAccessHref, homeDiscoverHref } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      <VascularFlow variant="mist" />
      <div className="relative z-10 mx-auto grid min-h-[78svh] max-w-[80rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
        <div className="max-w-[38rem]">
          <h1 id="hero-heading" className="type-display">
            {hero.headingLead}{" "}
            <span className="text-ink-teal">{hero.headingAccent}</span>
          </h1>
          <p className="mt-8 text-[clamp(1.4rem,2.3vw,1.95rem)] leading-[1.25] font-medium text-navy">
            {hero.statementLead} {hero.statementTrail}
          </p>
          <p className="mt-5 text-lg text-ink-teal">{hero.audience}</p>
          <p className="mt-8 max-w-lg text-ink-body">{hero.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CtaLink href={earlyAccessHref}>{hero.primaryCta}</CtaLink>
            <CtaLink href={homeDiscoverHref} variant="secondary">
              {hero.secondaryCta}
            </CtaLink>
          </div>
        </div>
        <div className="order-first flex justify-center lg:order-last lg:justify-end">
          <BrainStage slot="hero" priority />
        </div>
      </div>
    </section>
  );
}
