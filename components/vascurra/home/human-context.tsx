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
      className="bg-white px-[clamp(1.25rem,6vw,6rem)] py-[clamp(4.5rem,10vw,10.625rem)] max-[899px]:py-[clamp(4.5rem,12vw,6rem)]"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-[clamp(2.5rem,6vw,6rem)] min-[900px]:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
        <Reveal>
          <div className="max-w-[38.75rem]">
            <h2
              id="human-context-heading"
              className="max-w-[620px] text-left font-semibold tracking-[-0.035em] text-[var(--vascurra-deep-teal)] max-[899px]:text-[clamp(2.375rem,11vw,3.25rem)] min-[900px]:text-[clamp(3rem,5vw,4.5rem)]"
              style={{ lineHeight: 1.02 }}
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
            <span
              aria-hidden="true"
              className="rule-mark mt-6 block h-px w-16"
            />
            <p className="mt-6 font-medium text-ink-teal max-[899px]:text-[clamp(1.25rem,3.5vw,1.5rem)] min-[900px]:text-[clamp(1.375rem,2vw,1.875rem)]">
              {humanContext.supporting}
            </p>
            <div className="mt-6 max-w-[35rem] space-y-4 text-[1.125rem] leading-[1.65] text-ink-body min-[900px]:text-[1.25rem] min-[900px]:leading-[1.65]">
              <p>{humanContext.body1}</p>
              <p>{humanContext.body2}</p>
            </div>

            <ul className="mt-10 hidden min-[900px]:grid min-[900px]:grid-cols-3 min-[900px]:divide-x min-[900px]:divide-hairline">
              {humanContext.principles.map((name, i) => (
                <li
                  key={name}
                  className="flex flex-col items-center px-3 text-center first:pl-0 last:pr-0"
                >
                  <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full border border-hairline text-ink-teal">
                    <LineIcon name={principleIcons[i] ?? "privacy"} className="size-6" />
                  </span>
                  <p className="text-[0.9375rem] leading-snug font-medium text-[var(--vascurra-deep-teal)]">
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex justify-center min-[900px]:justify-end">
            <Image
              src="/vascurra/homepage/02-life-system/living-better-couple.png"
              alt={humanContext.graphicAlt}
              width={1672}
              height={941}
              sizes="(max-width: 899px) min(100vw, 620px), min(58vw, 760px)"
              className="h-auto w-full max-w-[760px] object-contain"
            />
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 min-[900px]:hidden">
          {humanContext.principles.map((name, i) => (
            <li
              key={name}
              className={`flex flex-col items-center text-center ${
                i === 2 ? "col-span-2" : ""
              }`}
            >
              <span className="mb-3 inline-flex size-11 items-center justify-center rounded-full border border-hairline text-ink-teal">
                <LineIcon name={principleIcons[i] ?? "privacy"} className="size-6" />
              </span>
              <p className="max-w-[12rem] text-[0.9375rem] leading-snug font-medium text-[var(--vascurra-deep-teal)]">
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
