import { Reveal } from "@/components/motion/Reveal";
import { HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { ArtSlot, SupportStage, TrackStage, UnderstandStage } from "@/components/vascurra/home/mid-art";
import { triad } from "@/content/home";

const stages = [UnderstandStage, TrackStage, SupportStage];
const wordClass = ["text-word-teal", "text-word-cyan", "text-word-green"] as const;

export function UnderstandTrackSupport() {
  return (
    <HomeMidShell labelledBy="triad-heading">
      <Reveal>
        <p className="home-mid-kicker">{triad.eyebrow}</p>
        <h2 id="triad-heading" className="home-mid-heading mt-4 max-w-4xl">
          {triad.heading.split(/(?<=\. )/).map((part, i) => (
            <span key={part} className={wordClass[i] ?? "text-word-teal"}>
              {part}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-2xl text-[1.25rem] leading-[1.55] text-ink-body">
          {triad.subheading}
        </p>
        <p className="home-mid-body mt-6 max-w-3xl text-ink-body">{triad.intro}</p>
      </Reveal>

      {/* SECTION 03 ART SLOT — connected Understand → Track → Support composition */}
      <ol className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[38%] right-[8%] left-[8%] hidden h-px bg-[image:var(--vascurra-rule-gradient)] lg:block"
        />
        {triad.items.map((item, i) => {
          const Graphic = stages[i] ?? UnderstandStage;
          return (
            <Reveal as="li" key={item.name} delay={70 + i * 70} className="relative">
              <p className="text-[0.9375rem] font-semibold tracking-[0.18em] text-ink-teal uppercase">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[clamp(1.75rem,2.4vw,2.35rem)] font-semibold text-[var(--vascurra-deep-teal)]">
                {item.name}
              </h3>
              <ArtSlot
                slot={item.slot}
                label={`${item.name} visual`}
                className="mt-8 aspect-[5/4] min-h-[16rem] w-full lg:min-h-[20rem]"
              >
                <Graphic />
              </ArtSlot>
              <p className="home-mid-body mt-6 text-ink-body">{item.body}</p>
              <p className="mt-3 text-[1.125rem] font-medium text-ink-teal">{item.phrase}</p>
            </Reveal>
          );
        })}
      </ol>

      <p className="mt-16 max-w-xl text-[1.25rem] leading-[1.5] font-medium text-[var(--vascurra-deep-teal)]">
        {triad.closing} {triad.closingLine}
      </p>
    </HomeMidShell>
  );
}
