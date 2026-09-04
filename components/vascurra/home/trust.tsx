import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { ArtSlot, ControlSystemStage, PrincipleGlyph } from "@/components/vascurra/home/mid-art";
import { trust } from "@/content/home";
import { privacyHref } from "@/content/site";

const principleIcons = ["shared", "who", "mind", "research"] as const;

export function Trust() {
  return (
    <HomeMidShell labelledBy="trust-heading">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,0.95fr)] lg:gap-10">
        <Reveal>
          <p className="home-mid-kicker">{trust.eyebrow}</p>
          <h2 id="trust-heading" className="home-mid-heading mt-4">
            <span className="block text-[var(--vascurra-deep-teal)]">{trust.heading}</span>
            <span className="text-mark">{trust.headingLine}</span>
          </h2>
          <p className="home-mid-body mt-6 max-w-md text-ink-body">{trust.intro}</p>
          <div className="mt-8">
            <CtaLink href={privacyHref}>{trust.cta} →</CtaLink>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <ArtSlot
            slot="s07-control-system"
            label="Control system centred on the person"
            className="mx-auto aspect-square w-full max-w-[28rem] min-h-[18rem]"
          >
            <ControlSystemStage />
          </ArtSlot>
        </Reveal>

        <Reveal delay={110}>
          <ul className="space-y-7">
            {trust.principles.map((item, i) => (
              <li key={item.id} className="flex gap-4">
                <span className="mt-0.5 text-ink-teal">
                  <PrincipleGlyph name={principleIcons[i] ?? "shared"} />
                </span>
                <div>
                  <h3 className="text-[1.25rem] font-semibold text-[var(--vascurra-deep-teal)]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[1.125rem] leading-relaxed text-ink-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <HomeMidClose>{trust.lockup.join(" ")}</HomeMidClose>
    </HomeMidShell>
  );
}
