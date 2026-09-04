import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { Reveal } from "@/components/motion/Reveal";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { comingSoon, hero } from "@/content/home";
import { earlyAccessHref, sectionIds } from "@/content/site";

const closingAccent = "just beginning.";

export function FinalCta() {
  return (
    <section
      id={sectionIds.closing}
      aria-labelledby="closing-heading"
      className="relative isolate overflow-hidden bg-deep py-24 sm:py-28 lg:py-32"
    >
      <VascularFlow variant="single" className="right-0 left-auto top-1/2 h-[70%] w-[58%] -translate-y-1/2" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <h2 id="closing-heading" className="type-display-xl max-w-xl text-on-deep">
            {comingSoon.heading.endsWith(closingAccent) ? (
              <>
                {comingSoon.heading.slice(0, -closingAccent.length)}
                <span className="text-mark-lum">{closingAccent}</span>
              </>
            ) : (
              comingSoon.heading
            )}
          </h2>
          <p className="type-lead mt-8 max-w-lg font-medium text-on-deep">
            {comingSoon.statement}
          </p>
          <p className="mt-6 max-w-lg text-[1.125rem] leading-[1.7] text-on-deep-muted">
            {comingSoon.body}
          </p>
          <div className="mt-12">
            <CtaLink href={earlyAccessHref} variant="onDeep">
              {hero.primaryCta}
            </CtaLink>
          </div>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-7">
          <Image
            src="/vascurra/homepage-hd/08-vascurra-is-just-beginning.png"
            alt="Vascurra brain mark glowing on a deep teal field."
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}
