import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { philosophy } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Philosophy() {
  return (
    <HomeMidShell id={sectionIds.approach} labelledBy="philosophy-heading" tone="deep">
      <Reveal>
        <p className="home-mid-kicker">{philosophy.eyebrow}</p>
        <h2 id="philosophy-heading" className="home-mid-heading mx-auto mt-5 max-w-4xl text-center">
          <span className="block text-on-deep">{philosophy.headingLines[0]}</span>
          <span className="text-mark-lum">{philosophy.headingLines[1]}</span>
        </h2>
        <p className="home-mid-body mx-auto mt-7 max-w-2xl text-center text-on-deep">
          {philosophy.body}
        </p>
        <div className="mt-8 flex justify-center">
          <CtaLink href={`#${sectionIds.people}`} variant="onDeep">
            {philosophy.cta} →
          </CtaLink>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <HomeMidArt
          slot="s04-support-journey"
          src="/vascurra/homepage-hd/04-dont-replace-capability-support-it.png"
          alt="Support growing from recall to hint, guide and answer along a single path."
          width={1672}
          height={941}
          maxWidthClass="mt-14 w-full max-w-none"
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      </Reveal>

      <ol className="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
