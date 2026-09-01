import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { PrivacyArchitecture } from "@/components/vascurra/illustrations/privacy-architecture";
import { trust } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Trust() {
  return (
    <SectionShell labelledBy="trust-heading">
      <Reveal>
        <h2 id="trust-heading" className="type-section mx-auto max-w-4xl text-center">
          <span className="block text-[var(--vascurra-deep-teal)]">{trust.heading}</span>
          <span className="text-[var(--vascurra-teal)]">{trust.headingLine}</span>
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-10 sm:mt-14">
          <PrivacyArchitecture />
        </div>
      </Reveal>
      <ul className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {trust.principles.map((item) => (
          <li key={item.id} className="text-center">
            <h3 className="text-lg font-semibold text-navy">{item.name}</h3>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center">
        <a
          href={`#${sectionIds.approach}`}
          className="inline-flex min-h-11 items-center font-semibold text-ink-teal underline-offset-4 hover:underline"
        >
          {trust.cta}
        </a>
      </p>
    </SectionShell>
  );
}
