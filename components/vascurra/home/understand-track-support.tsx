import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import {
  UnderstandConstellation,
  TrackTrajectory,
  SupportJourney,
} from "@/components/vascurra/illustrations/capability-modules";
import { triad } from "@/content/home";

const graphics = [UnderstandConstellation, TrackTrajectory, SupportJourney];

export function UnderstandTrackSupport() {
  return (
    <SectionShell labelledBy="triad-heading">
      <Reveal>
        <h2 id="triad-heading" className="type-section max-w-4xl">
          {triad.heading}
        </h2>
        <p className="type-lead mt-5 max-w-2xl text-ink-body">{triad.subheading}</p>
      </Reveal>
      <ol className="mt-16 space-y-20">
        {triad.items.map((item, i) => {
          const Graphic = graphics[i] ?? UnderstandConstellation;
          const reverse = i === 1;
          return (
            <Reveal as="li" key={item.name} delay={70 + i * 60}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>div:first-child]:order-last" : ""
                }`}
              >
                <div className="min-h-[20rem] sm:min-h-[24rem] lg:min-h-[26rem]">
                  <Graphic />
                </div>
                <div>
                  <p className="type-kicker">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-navy">
                    {item.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[1.125rem] leading-[1.7] text-ink-body">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </SectionShell>
  );
}
