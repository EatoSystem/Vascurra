import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrandReveal } from "@/components/motion/BrandReveal";
import { hero } from "@/content/home";
import { sectionIds, followHref } from "@/content/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Very light cool wash — the brand's "luminous, not neon" ground. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,color-mix(in_srgb,var(--color-cyan-400)_14%,transparent),transparent_70%)]"
      />

      <Container className="pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div
            className="v-anim"
            style={{
              animationName: "v-fade-up",
              animationDuration: "0.6s",
              animationDelay: "0.15s",
            }}
          >
            <p className="text-sm font-semibold tracking-[0.16em] text-teal-700 uppercase">
              {hero.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-[2.5rem] leading-[1.08] font-semibold sm:text-6xl lg:text-[4.25rem]"
            >
              <span className="text-gradient">{hero.heading}</span>
            </h1>

            {/* Brand statement. Styled as display type but not a heading: it
                labels no section, so it stays out of the document outline. */}
            <p className="mt-6 text-2xl leading-snug font-medium text-navy-800 sm:text-3xl">
              {hero.statement}
            </p>

            <p className="mt-6 max-w-xl text-navy-700">{hero.body}</p>

            <div className="mt-9">
              <Badge>{hero.badge}</Badge>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <CtaLink href={`#${sectionIds.project}`}>{hero.primaryCta}</CtaLink>
              <CtaLink href={followHref} variant="secondary">
                {hero.secondaryCta}
              </CtaLink>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <BrandReveal className="mx-auto aspect-[6/5] w-full max-w-xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
