import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { humanContext } from "@/content/home";
import { sectionIds } from "@/content/site";

const principleIcons = ["privacy", "support", "thrive"] as const;
const humanContextAccent = "vascular cognitive change.";

export function HumanContext() {
  return (
    <section
      id={sectionIds.why}
      aria-labelledby="human-context-heading"
      className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <h2
            id="human-context-heading"
            className="home-mid-heading max-w-[38rem] text-[var(--vascurra-deep-teal)]"
          >
            {humanContext.heading.endsWith(humanContextAccent) ? (
              <>
                {humanContext.heading.slice(0, -humanContextAccent.length)}
                <span className="text-mark">{humanContextAccent}</span>
              </>
            ) : (
              humanContext.heading
            )}
          </h2>
          <p className="mt-6 text-[clamp(1.25rem,2vw,1.75rem)] font-medium text-ink-teal">
            {humanContext.supporting}
          </p>
          <div className="mt-6 max-w-[35rem] space-y-4 text-[1.125rem] leading-[1.65] text-ink-body md:text-[1.25rem]">
            <p>{humanContext.body1}</p>
            <p>{humanContext.body2}</p>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-hairline">
            {humanContext.principles.map((name, i) => (
              <li key={name} className="sm:px-3 sm:first:pl-0 sm:last:pr-0">
                <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full border border-hairline text-ink-teal">
                  <LineIcon name={principleIcons[i] ?? "privacy"} className="size-6" />
                </span>
                <p className="text-[1.0625rem] leading-snug font-medium text-[var(--vascurra-deep-teal)]">
                  {name}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-7">
          <Image
            src="/vascurra/homepage-hd/02-living-better-with-vascular-cognitive-change.png"
            alt={humanContext.graphicAlt}
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
