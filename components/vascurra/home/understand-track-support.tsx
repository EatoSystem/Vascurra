import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { triad } from "@/content/home";
import { sectionIds } from "@/content/site";

const wordClass = ["text-word-teal", "text-word-cyan", "text-word-green"] as const;

export function UnderstandTrackSupport() {
  return (
    <HomeMidShell labelledBy="triad-heading">
      <div className="grid min-h-[min(100%,42rem)] items-center gap-10 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-12">
        <Reveal>
          <p className="home-mid-kicker">{triad.eyebrow}</p>
          <h2 id="triad-heading" className="home-mid-heading mt-4 max-w-xl">
            {triad.headingWords.map((part, i) => (
              <span key={part} className={`block ${wordClass[i] ?? "text-word-teal"}`}>
                {part}
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-[1.25rem] leading-[1.55] text-ink-body">
            {triad.subheading}
          </p>
          <p className="home-mid-body mt-6 max-w-xl text-ink-body">{triad.intro}</p>
          <div className="mt-8">
            <CtaLink href={`#${sectionIds.approach}`}>
              {triad.cta} →
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <HomeMidArt
            slot="s03-understand-track-support"
            src="/vascurra/homepage-v2/final-art/03-understand-track-support-art.webp"
            alt="Health, sleep, movement, routine, family, confidence, daily life and history coming together around a person."
            width={850}
            height={270}
            maxWidthClass="max-w-[1050px]"
            className="justify-self-end"
          />
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-10 border-t border-hairline pt-12 md:grid-cols-3 md:gap-12">
        {triad.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={70 + i * 70}>
            <p className="text-[0.9375rem] font-semibold tracking-[0.18em] text-ink-teal uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-[clamp(1.45rem,2vw,1.85rem)] leading-snug font-semibold text-[var(--vascurra-deep-teal)]">
              {item.phrase}
            </h3>
            <p className="home-mid-body mt-4 text-ink-body">{item.body}</p>
          </Reveal>
        ))}
      </ol>

      <HomeMidClose>{triad.closing}</HomeMidClose>
    </HomeMidShell>
  );
}
