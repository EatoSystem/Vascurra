import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { trust } from "@/content/home";

export function Trust() {
  return (
    <SectionShell labelledBy="trust-heading" bloom="mint" flow="mist">
      <Reveal>
        <h2 id="trust-heading" className="type-section max-w-3xl">
          <span className="block">{trust.heading}</span>
          <span className="text-gradient">{trust.headingLine}</span>
        </h2>
        <p className="mt-6 text-lg font-medium text-ink-teal">{trust.subhead}</p>
      </Reveal>

      <ul className="mt-16 grid gap-10 sm:grid-cols-2">
        {trust.principles.map((item, i) => (
          <Reveal as="li" key={item.id} delay={80 + i * 50} className="max-w-md">
            <h3 className="text-xl font-semibold sm:text-2xl">{item.name}</h3>
            <p className="mt-3 text-base text-ink-body">{item.body}</p>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
