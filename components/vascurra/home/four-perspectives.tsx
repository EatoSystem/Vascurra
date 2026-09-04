import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { perspectives } from "@/content/home";
import { sectionIds } from "@/content/site";

export function FourPerspectives() {
  return (
    <HomeMidShell labelledBy="perspectives-heading">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-10">
        <Reveal>
          <p className="home-mid-kicker">{perspectives.eyebrow}</p>
          <h2
            id="perspectives-heading"
            className="home-mid-heading mt-4 max-w-xl text-[var(--vascurra-deep-teal)]"
          >
            <span className="block">{perspectives.heading}</span>
            <span className="text-mark">{perspectives.headingLine}</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.25rem] leading-[1.55] text-ink-body">
            {perspectives.subheading}
          </p>
          <div className="mt-8">
            <CtaLink href={`#${sectionIds.people}`}>{perspectives.cta} →</CtaLink>
          </div>
        </Reveal>

        <div className="w-full overflow-x-auto overscroll-x-contain pb-2">
          <HomeMidArt
            slot="s06-perspectives-ecosystem"
            src="/vascurra/homepage-v2/final-art/06-multiple-perspectives-art.webp"
            alt="Conceptual personal, family, clinician and research views on connected devices."
            width={850}
            height={220}
            maxWidthClass="max-w-[1100px] min-w-[40rem] lg:min-w-0"
            className="mx-auto"
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
        </div>
      </div>

      <ul className="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {perspectives.items.map((item) => (
          <li key={item.id} id={item.id}>
            <p className="text-[0.9375rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
              {item.name}
            </p>
            <h3 className="mt-2 text-[clamp(1.25rem,1.8vw,1.55rem)] font-semibold text-[var(--vascurra-deep-teal)]">
              {item.headline}
            </h3>
            <p className="mt-3 text-[1.125rem] leading-relaxed text-ink-body">{item.body}</p>
          </li>
        ))}
      </ul>

      <HomeMidClose>{perspectives.note}</HomeMidClose>
    </HomeMidShell>
  );
}
