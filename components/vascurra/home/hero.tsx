import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { hero } from "@/content/home";
import { earlyAccessHref, homeDiscoverHref } from "@/content/site";

export function HomeHero() {
  return (
    <SectionShell labelledBy="hero-heading" pad="hero" bloom="dual" flow="mist">
      <div className="grid min-h-[88svh] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-14">
        <div
          className="v-anim relative z-10 max-w-[36rem]"
          style={{
            animationName: "v-fade-up",
            animationDuration: "0.7s",
            animationDelay: "0.15s",
          }}
        >
          <p className="type-kicker">{hero.eyebrow}</p>
          <h1 id="hero-heading" className="type-display mt-6">
            <span className="text-gradient">{hero.heading}</span>
          </h1>
          <p className="mt-8 text-[clamp(1.45rem,2.5vw,2.05rem)] leading-[1.22] font-medium text-navy">
            {hero.statementLead}
            <span className="block">{hero.statementTrail}</span>
          </p>
          <p className="mt-5 text-lg font-medium text-ink-teal">{hero.audience}</p>
          <div
            aria-hidden="true"
            className="mt-8 h-px w-24 bg-gradient-to-r from-[var(--color-energy-mint)] to-transparent"
          />
          <p className="mt-8 max-w-lg text-ink-body">{hero.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
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
    </SectionShell>
  );
}
