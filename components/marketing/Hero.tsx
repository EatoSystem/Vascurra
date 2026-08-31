import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CtaLink } from "@/components/ui/CtaLink";
import { BrainMark } from "@/components/brand/BrainMark";
import { BrainField } from "@/components/motion/BrainField";
import { BloomField } from "@/components/motion/BloomField";
import { hero } from "@/content/home";
import { sectionIds, followHref } from "@/content/site";

/**
 * Cinematic hero. The brain occupies 42-50vw on desktop per spec §15, with the
 * vascular field extending past it so branches read around the mark rather than
 * behind it.
 *
 * Hero copy resolves at 0.15-0.8s rather than at the end of the reveal: §14
 * forbids the hero blocking LCP, and holding the largest text for five seconds
 * would regress it badly. The mark sequence continues behind the copy.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[84svh] items-center overflow-hidden py-10 lg:py-14"
    >
      <BloomField
        tone="dual"
        intensity={22}
        className="inset-x-[-20%] top-[-30%] h-[130%]"
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 xl:gap-14">
          <div
            className="v-anim relative z-10 max-w-[36rem]"
            style={{
              animationName: "v-fade-up",
              animationDuration: "0.7s",
              animationDelay: "0.15s",
            }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-ink-teal uppercase">
              {hero.eyebrow}
            </p>

            <h1 id="hero-heading" className="type-display mt-5">
              <span className="text-gradient">{hero.heading}</span>
            </h1>

            {/* Brand statement. Display-sized but not a heading — it labels no
                section, so it stays out of the document outline. */}
            <p className="mt-6 text-[clamp(1.375rem,2.3vw,1.875rem)] leading-[1.25] font-medium text-navy">
              Support independence.
              <span className="block">Preserve identity.</span>
            </p>

            <p className="mt-6 max-w-lg text-ink-body">{hero.body}</p>

            <div className="mt-7">
              <Badge>{hero.badge}</Badge>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <CtaLink href={`#${sectionIds.project}`}>{hero.primaryCta}</CtaLink>
              <CtaLink href={followHref} variant="secondary">
                {hero.secondaryCta}
              </CtaLink>
            </div>
          </div>

          <div className="order-first flex justify-center lg:order-last lg:justify-end">
            <div className="relative flex items-center justify-center">
              {/* The field is larger than the mark so branches radiate past it. */}
              <BrainField className="absolute inset-[-9%] h-[118%] w-[118%]" />
              <div
                className="v-stage-mark v-anim relative"
                style={{
                  animationName: "v-resolve",
                  animationDuration: "1.5s",
                  animationDelay: "2.5s",
                }}
              >
                <BrainMark slot="hero" priority alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
