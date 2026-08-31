import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { comingSoon, hero } from "@/content/home";
import { sectionIds, followHref } from "@/content/site";

/**
 * The closing frame — the second and final deep-navy chamber.
 *
 * The approved brain returns large and luminous with the full ambient system
 * against navy, where the brand's light genuinely registers. The preceding
 * light section resolves into the dark through a soft gradient rather than
 * butting against it, so the transition reads as the closing scene of a brand
 * film rather than a section boundary.
 *
 * Phase 1A collects nothing: the email capture from the original brief is
 * deliberately omitted because no email service is configured, and a form that
 * appears to subscribe someone while storing nothing would be dishonest. The
 * call to action is therefore in-page. See
 * docs/development/phase-1a-holding-page.md for the integration point.
 */
export function ComingSoon() {
  return (
    <section
      id={sectionIds.comingSoon}
      aria-labelledby="coming-soon-heading"
      className="relative isolate flex min-h-[94svh] items-center overflow-hidden bg-deep py-28 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-canvas/45 to-transparent"
      />
      <BloomField
        tone="deep"
        intensity={34}
        className="inset-x-[-25%] top-[-10%] h-[125%]"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <BrainStage slot="closing" tone="deep" />

          <Reveal delay={80} className="mt-16 flex flex-col items-center">
            <Badge tone="deep">{hero.badge}</Badge>

            <h2 id="coming-soon-heading" className="type-display mt-9 max-w-4xl">
              <span className="text-gradient-lum">{comingSoon.heading}</span>
            </h2>

            <p className="type-lead mt-7 max-w-2xl font-medium text-on-deep">
              {comingSoon.statement}
            </p>

            {comingSoon.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 max-w-2xl text-on-deep-muted"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12">
              <CtaLink href={followHref} variant="onDeep">
                {hero.secondaryCta}
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
