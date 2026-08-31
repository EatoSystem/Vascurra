import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BrandReveal } from "@/components/motion/BrandReveal";
import { comingSoon, hero } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * Phase 1A collects nothing.
 *
 * The email capture described in the Phase 1A brief (field, button, consent
 * line) is deliberately omitted: no email service is configured, and building
 * a form that appears to subscribe someone while storing nothing would be
 * dishonest. See docs/development/phase-1a-holding-page.md for the agreed
 * integration point when this is picked up.
 */
export function ComingSoon() {
  return (
    <section
      id={sectionIds.comingSoon}
      aria-labelledby="coming-soon-heading"
      className="relative overflow-hidden border-t border-hairline py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,color-mix(in_srgb,var(--color-cyan-400)_14%,transparent),transparent_68%)]"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <Badge>{hero.badge}</Badge>

            <h2
              id="coming-soon-heading"
              className="mt-8 text-[2.5rem] leading-[1.08] font-semibold sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{comingSoon.heading}</span>
            </h2>

            {comingSoon.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-2xl text-lg text-navy-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="order-first lg:order-last">
            <BrandReveal
              size="compact"
              className="mx-auto aspect-square w-full max-w-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
