import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { hero } from "@/content/home";
import { earlyAccessHref, homeDiscoverHref } from "@/content/site";

export function HomeHero({ showCtas = true }: { showCtas?: boolean }) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-y-[12%] right-[-4%] hidden w-[52%] lg:block">
        <VascularFlow variant="quiet" className="top-1/2 h-[70%] -translate-y-1/2" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="lg:col-span-5">
          <h1 id="hero-heading" className="type-display overflow-visible text-[var(--vascurra-ink)]">
            <span className="block">{hero.headingLead}</span>
            <span className="block">
              <span className="text-mark-hero inline-block whitespace-nowrap">
                {hero.headingMid}
              </span>
              <span className="text-mark-hero-end block">{hero.headingAccent}</span>
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
        <div className="order-first lg:order-last lg:col-span-7">
          <Image
            src="/vascurra/homepage-hd/01-hero-intelligence-for-vascular-cognitive-health.png"
            alt="Vascurra brain mark formed of flowing vascular and neural lines."
            width={1672}
            height={941}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
