import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { LineIcon } from "@/components/vascurra/ui/line-icon";
import { trust } from "@/content/home";
import { sectionIds } from "@/content/site";

const icons = ["privacy", "lock", "person", "document"] as const;

export function Trust() {
  return (
    <SectionShell labelledBy="trust-heading">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <Reveal>
          <h2 id="trust-heading" className="type-section max-w-md">
            <span className="block">{trust.heading}</span>
            <span className="text-ink-teal">{trust.headingLine}</span>
          </h2>
          <a
            href={`#${sectionIds.approach}`}
            className="mt-8 inline-flex min-h-11 items-center font-semibold text-ink-teal underline-offset-4 hover:underline"
          >
            {trust.cta}
          </a>
        </Reveal>
        <ul className="grid gap-12 sm:grid-cols-2">
          {trust.principles.map((item, i) => (
            <Reveal as="li" key={item.id} delay={70 + i * 50} className="max-w-sm">
              <span className="mb-4 inline-flex text-ink-teal">
                <LineIcon name={icons[i] ?? "privacy"} />
              </span>
              <h3 className="text-xl font-semibold text-navy">{item.name}</h3>
              <p className="mt-3 text-[1.0625rem] leading-[1.65] text-ink-body">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
