import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { hero } from "@/content/home";
import { earlyAccessHref, homeDiscoverHref } from "@/content/site";

export function HomeHero({ showCtas = true }: { showCtas?: boolean }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white pt-12 pb-24 lg:pt-20 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-y-[12%] right-[-4%] hidden w-[52%] lg:block">
        <VascularFlow variant="quiet" className="top-1/2 h-[70%] -translate-y-1/2" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[80rem] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:px-12">
        <div className="max-w-[38rem]">
          <h1 id="hero-heading" className="type-display text-[var(--vascurra-ink)]">
            <span className="block">{hero.headingLead}</span>
            <span className="text-mark-hero">
              {hero.headingMid} {hero.headingAccent}
            </span>
          </h1>
          <p className="mt-8 text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.35] font-medium text-navy">
            {hero.statementLead} {hero.statementTrail}
          </p>
          <p className="mt-5 text-lg text-ink-teal">{hero.audience}</p>
          <p className="mt-8 max-w-lg text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
            {hero.body}
          </p>
          {showCtas ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CtaLink href={earlyAccessHref}>{hero.primaryCta}</CtaLink>
              <CtaLink href={homeDiscoverHref} variant="secondary">
                {hero.secondaryCta}
              </CtaLink>
            </div>
          ) : null}
        </div>
        <div className="order-first flex justify-center py-6 lg:order-last lg:justify-end lg:py-10">
          <BrainStage slot="hero" field="quiet" priority />
        </div>
      </div>
    </section>
  );
}
