import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrainStage } from "@/components/motion/BrainStage";
import { BloomField } from "@/components/motion/BloomField";
import { hero } from "@/content/home";
import { sectionIds, followHref } from "@/content/site";

/**
 * Cinematic hero, built around the approved Vascurra brain.
 *
 * The mark occupies 42-50vw on desktop per spec §15 and is the settled final
 * state of the reveal. It is the LCP element by design and is loaded with
 * priority; the copy still resolves at 0.15-0.8s rather than at the end of the
 * five-second sequence, because §14 forbids the reveal blocking LCP and holding
 * the largest text that long would read as a broken page.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92svh] items-center overflow-hidden py-14 lg:py-16"
    >
      <BloomField
        tone="dual"
        intensity={34}
        className="inset-x-[-25%] top-[-35%] h-[150%]"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-12">
          <div
            className="v-anim relative z-10 max-w-[34rem]"
            style={{
              animationName: "v-fade-up",
              animationDuration: "0.7s",
              animationDelay: "0.15s",
            }}
          >
            <p className="text-sm font-semibold tracking-[0.24em] text-ink-teal uppercase">
              {hero.eyebrow}
            </p>

            <h1 id="hero-heading" className="type-display mt-6">
              <span className="text-gradient">{hero.heading}</span>
            </h1>

            {/* Brand statement. Display-sized but not a heading — it labels no
                section, so it stays out of the document outline. */}
            <p className="mt-8 text-[clamp(1.5rem,2.6vw,2.125rem)] leading-[1.2] font-medium text-navy">
              Support independence.
              <span className="block">Preserve identity.</span>
            </p>

            <div
              aria-hidden="true"
              className="mt-8 h-px w-24 bg-gradient-to-r from-[var(--color-energy-mint)] to-transparent"
            />

            <p className="mt-8 max-w-lg text-ink-body">{hero.body}</p>

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

          <div className="order-first flex justify-center lg:order-last lg:justify-end">
            <BrainStage slot="hero" priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
