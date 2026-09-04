import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { ArtSlot, DuneField, SupportJourneyStage } from "@/components/vascurra/home/mid-art";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <HomeMidShell
      id={sectionIds.approach}
      labelledBy="philosophy-heading"
      tone="deep"
      className="overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <DuneField />
      </div>

      <div className="relative grid items-end gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.24fr)] lg:gap-10">
        <Reveal>
          <p className="home-mid-kicker">{philosophy.eyebrow}</p>
          <h2 id="philosophy-heading" className="home-mid-heading mt-5 max-w-xl">
            <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
            <span className="text-mark-lum block">{philosophy.headingLines[1]}</span>
          </h2>
          <p className="home-mid-body mt-7 max-w-md text-on-deep">{philosophy.body}</p>
          <div className="mt-8">
            <CtaLink href={`#${sectionIds.people}`} variant="onDeep">
              {philosophy.cta} →
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ArtSlot
            slot="s04-support-journey"
            label="Support journey from recall to answer"
            className="min-h-[16rem] w-full overflow-visible lg:min-h-[22rem]"
          >
            <SupportJourneyStage />
            <ol className="pointer-events-none absolute inset-0 hidden lg:block">
              {philosophy.steps.map((step, i) => {
                const left = ["6%", "28%", "52%", "78%"][i];
                const top = ["62%", "48%", "42%", "18%"][i];
                return (
                  <li
                    key={step.name}
                    className="absolute max-w-[10.5rem]"
                    style={{ left, top }}
                  >
                    <p className="text-[1.05rem] font-semibold text-on-deep">{step.name}</p>
                    <p className="mt-1 text-[0.95rem] leading-snug text-on-deep-muted">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </ArtSlot>
        </Reveal>
      </div>

      <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:hidden">
        {philosophy.steps.map((step) => (
          <li key={step.name}>
            <p className="text-[1.15rem] font-semibold text-on-deep">{step.name}</p>
            <p className="mt-1 text-[1.0625rem] text-on-deep-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <HomeMidClose tone="deep">{philosophy.closing}</HomeMidClose>
    </HomeMidShell>
  );
}
