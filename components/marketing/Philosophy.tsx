import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <HomeMidShell id={sectionIds.approach} labelledBy="philosophy-heading" tone="deep">
      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-8">
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
          <HomeMidArt
            slot="s04-support-journey"
            src="/vascurra/homepage-v2/final-art/04-support-capability-art.webp"
            alt="A path from recall to hint, guide and answer, growing brighter toward the horizon."
            width={875}
            height={240}
            maxWidthClass="max-w-none"
            className="lg:min-h-[18rem]"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
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
