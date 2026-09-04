import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import {
  PeopleScreen,
  FamilyScreen,
  ClinicianScreen,
  ResearchScreen,
} from "@/components/vascurra/ui/product-screens";
import { PerspectiveGlyph } from "@/components/vascurra/home/mid-art";
import { perspectives } from "@/content/home";
import { sectionIds } from "@/content/site";

export function FourPerspectives() {
  return (
    <HomeMidShell labelledBy="perspectives-heading">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-8">
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

        <div
          className="relative flex min-h-[22rem] flex-wrap items-end justify-center gap-4 pb-2 sm:gap-3 lg:min-h-[28rem] lg:flex-nowrap lg:justify-end lg:gap-0"
          aria-hidden="true"
        >
          <div data-asset-slot="s06-people" className="relative z-30 shrink-0 lg:translate-x-6">
            <DeviceFrame variant="phone" size="eco" label="Personal" decorative>
              <PeopleScreen />
            </DeviceFrame>
          </div>
          <div
            data-asset-slot="s06-family"
            className="relative z-20 shrink-0 lg:-ml-8 lg:mb-6 lg:translate-x-2"
          >
            <DeviceFrame variant="tablet" size="eco" label="Family" decorative>
              <FamilyScreen />
            </DeviceFrame>
          </div>
          <div
            data-asset-slot="s06-clinician"
            className="relative z-10 w-full max-w-[32rem] shrink-0 sm:w-auto lg:-ml-10"
          >
            <DeviceFrame variant="laptop" size="eco" label="Clinician" decorative>
              <ClinicianScreen />
            </DeviceFrame>
          </div>
          <div
            data-asset-slot="s06-research"
            className="relative z-20 shrink-0 lg:-ml-8 lg:mb-10"
          >
            <DeviceFrame variant="desktop" size="eco" label="Research" decorative>
              <ResearchScreen />
            </DeviceFrame>
          </div>
        </div>
      </div>

      <ul className="mt-16 grid gap-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
        {perspectives.items.map((item) => (
          <li key={item.id} id={item.id}>
            <p className="text-ink-teal">
              <PerspectiveGlyph name={item.id} />
            </p>
            <p className="mt-3 text-[0.9375rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
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
