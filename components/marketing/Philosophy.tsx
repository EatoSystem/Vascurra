import { Reveal } from "@/components/motion/Reveal";
import { HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { ArtSlot, SupportJourneyStage } from "@/components/vascurra/home/mid-art";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <HomeMidShell id={sectionIds.approach} labelledBy="philosophy-heading" tone="deep">
      <Reveal>
        <p className="text-[0.9375rem] font-semibold tracking-[0.18em] text-[color-mix(in_srgb,var(--color-energy-cyan)_82%,white)] uppercase">
          {philosophy.eyebrow}
        </p>
        <h2 id="philosophy-heading" className="home-mid-heading mt-5 max-w-4xl">
          <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
          <span className="text-mark-lum block">{philosophy.headingLines[1]}</span>
        </h2>
        <p className="home-mid-body mt-8 max-w-2xl text-on-deep-muted">{philosophy.body}</p>
      </Reveal>

      {/* SECTION 04 ART SLOT — support journey Recall → Hint → Guide → Answer */}
      <ArtSlot
        slot="s04-support-journey"
        label="Support journey from recall to answer"
        className="mt-14 hidden h-32 w-full lg:block"
      >
        <SupportJourneyStage />
      </ArtSlot>

      <ol className="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
        {philosophy.steps.map((step, i) => (
          <Reveal as="li" key={step.name} delay={80 + i * 60}>
            <p className="text-[0.9375rem] font-semibold tracking-[0.18em] text-[var(--color-energy-cyan)] uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-[clamp(1.6rem,2.2vw,2.15rem)] font-semibold text-on-deep">
              {step.name}
            </h3>
            <p className="home-mid-body mt-4 text-on-deep">{step.body}</p>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-on-deep-muted">{step.phrase}</p>
          </Reveal>
        ))}
      </ol>

      <p className="mt-16 max-w-2xl text-[1.25rem] leading-[1.5] font-medium text-on-deep">
        {philosophy.closing}
      </p>
      <p className="mt-4 text-[1.125rem] text-on-deep-muted">
        {philosophy.lockup[0]} {philosophy.lockup[1]}
      </p>
    </HomeMidShell>
  );
}
