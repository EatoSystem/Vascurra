import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BrainMark } from "@/components/brand/BrainMark";
import { BrainField } from "@/components/motion/BrainField";
import { BloomField } from "@/components/motion/BloomField";
import { Reveal } from "@/components/motion/Reveal";
import { comingSoon, hero } from "@/content/home";
import { sectionIds } from "@/content/site";

/**
 * The closing frame. The brain returns centred in a deeper bloom as the page's
 * vascular light converges back into it.
 *
 * Phase 1A collects nothing: the email capture described in the brief is
 * deliberately omitted because no email service is configured, and a form that
 * appears to subscribe someone while storing nothing would be dishonest. The
 * call to action is therefore in-page, not a link to a service that does not
 * exist. See docs/development/phase-1a-holding-page.md for the integration
 * point when this is picked up.
 *
 * There is deliberately no call-to-action button here: "Follow the journey" in
 * the header and hero anchors to this section, so a button in this section
 * could only link to itself. The label reappears once there is somewhere for it
 * to go.
 */
export function ComingSoon() {
  return (
    <section
      id={sectionIds.comingSoon}
      aria-labelledby="coming-soon-heading"
      className="relative flex min-h-[88svh] items-center overflow-hidden py-28 sm:py-32"
    >
      <BloomField
        tone="dual"
        intensity={28}
        className="inset-x-[-25%] top-[-5%] h-[115%]"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center">
            <BrainField className="absolute inset-[-30%] h-[160%] w-[160%]" />
            <BrainMark slot="closing" alt="" className="relative" />
          </div>

          <Reveal delay={80} className="mt-14 flex flex-col items-center">
            <Badge>{hero.badge}</Badge>

            <h2 id="coming-soon-heading" className="type-display mt-8 max-w-4xl">
              <span className="text-gradient">{comingSoon.heading}</span>
            </h2>

            <p className="type-lead mt-7 max-w-2xl font-medium text-navy">
              {comingSoon.statement}
            </p>

            {comingSoon.body.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-2xl text-ink-body">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
