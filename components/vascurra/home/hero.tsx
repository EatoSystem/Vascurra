import { CtaLink } from "@/components/ui/CtaLink";
import { BrainMark } from "@/components/brand/BrainMark";
import { BrainStage } from "@/components/motion/BrainStage";
import { HeroBrainRemotion } from "@/components/motion/HeroBrainRemotion";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { VascurraGradientText } from "@/components/vascurra/home/gradient-text";
import { hero, homepageIntroduction } from "@/content/home";
import { holdingHero, holdingOverview } from "@/content/holding";
import { earlyAccessHref, homeDiscoverHref } from "@/content/site";
import holdingStyles from "@/components/vascurra/holding/holding-hero.module.css";

export function HomeHero({
  showCtas = true,
  discoverHref = homeDiscoverHref,
  animateBrain = false,
  primaryCtaHref = earlyAccessHref,
  primaryCtaLabel = hero.primaryCta,
  discoveryFirst = false,
  secondaryCtaHref,
  secondaryCtaLabel,
  variant = "homepage",
}: {
  showCtas?: boolean;
  discoverHref?: string;
  animateBrain?: boolean;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  discoveryFirst?: boolean;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  variant?: "homepage" | "holding";
}) {
  if (variant === "holding") {
    return (
      <section aria-labelledby="hero-heading" className={holdingStyles.hero}>
        <div className={holdingStyles.layout}>
          <div className={holdingStyles.copy}>
            <p className={holdingStyles.eyebrow}>{holdingHero.eyebrow}</p>
            <h1 id="hero-heading" className={holdingStyles.heading}>
              <span>{hero.headingLead}</span>
              <VascurraGradientText>{hero.headingMid}</VascurraGradientText>
              <VascurraGradientText continuation>{hero.headingAccent}</VascurraGradientText>
            </h1>
            <p className={holdingStyles.statement}>
              {holdingHero.statements.map((statement) => <span key={statement}>{statement}</span>)}
            </p>
            <p className={holdingStyles.description}>{holdingHero.description}</p>
            {showCtas ? (
              <div className={holdingStyles.actions}>
                <CtaLink href={discoverHref}>{hero.secondaryCta}</CtaLink>
                <CtaLink href={secondaryCtaHref ?? "#development"} variant="secondary">
                  {secondaryCtaLabel ?? holdingOverview.statusCta}
                </CtaLink>
              </div>
            ) : null}
          </div>
          <div className={holdingStyles.artwork}>
            <BrainMark slot="hero" priority className={holdingStyles.brain} />
          </div>
        </div>
      </section>
    );
  }

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
          {discoveryFirst ? <p className="mb-4 text-sm font-semibold tracking-[.2em] text-ink-teal lg:hidden">VASCURRA · IN DEVELOPMENT</p> : null}
          <h1 id="hero-heading" className="type-display overflow-visible text-[var(--vascurra-ink)]">
            <span className="block">{hero.headingLead}</span>
            <span className="block">
              <span className="text-mark-hero inline sm:inline-block sm:whitespace-nowrap">
                {hero.headingMid}
              </span>
              <span className="text-mark-hero-end block">{hero.headingAccent}</span>
            </span>
          </h1>
          <p className={`${discoveryFirst ? "hidden lg:block " : ""}mt-8 text-[clamp(1.35rem,2.1vw,1.85rem)] leading-[1.35] font-medium text-navy`}>
            {hero.statementLead} {hero.statementTrail}
          </p>
          <p className={`${discoveryFirst ? "hidden lg:block " : ""}mt-5 text-lg text-ink-teal`}>{hero.audience}</p>
          <p className="mt-8 max-w-lg text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
            {discoveryFirst ? homepageIntroduction : hero.body}
          </p>
          {showCtas ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <CtaLink href={discoveryFirst ? discoverHref : primaryCtaHref}>{discoveryFirst ? hero.secondaryCta : primaryCtaLabel}</CtaLink>
              <CtaLink href={secondaryCtaHref ?? (discoveryFirst ? "/support" : discoverHref)} variant="secondary">
                {secondaryCtaLabel ?? (discoveryFirst ? "Support Vascurra" : hero.secondaryCta)}
              </CtaLink>
            </div>
          ) : null}
        </div>
        <div className={`${discoveryFirst ? "order-last" : "order-first"} flex justify-center py-6 lg:order-last lg:justify-end lg:py-10 lg:translate-x-8 xl:translate-x-14`}>
          {animateBrain ? <HeroBrainRemotion /> : <BrainStage slot="hero" field="quiet" priority />}
        </div>
      </div>
    </section>
  );
}
