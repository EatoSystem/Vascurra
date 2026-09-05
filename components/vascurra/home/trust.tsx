import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { trust } from "@/content/home";
import { privacyHref } from "@/content/site";

export function Trust() {
  return (
    <HomeMidShell labelledBy="trust-heading">
      <Reveal>
        <p className="home-mid-kicker">{trust.eyebrow}</p>
        <h2 id="trust-heading" className="home-mid-heading mt-4 max-w-4xl">
          <span className="block text-[var(--vascurra-deep-teal)]">{trust.heading}</span>
          <span className="text-mark">{trust.headingLine}</span>
        </h2>
        <p className="home-mid-body mt-6 max-w-2xl text-ink-body">{trust.intro}</p>
      </Reveal>

      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-12">
        <Reveal>
          <ul className="space-y-6">
            {trust.principles.map((item) => (
              <li key={item.id}>
                <h3 className="text-[1.25rem] font-semibold text-[var(--vascurra-deep-teal)]">
                  {item.name}
                </h3>
                <p className="mt-1 text-[1.125rem] leading-relaxed text-ink-body">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaLink href={privacyHref}>{trust.cta} →</CtaLink>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <HomeMidArt
            slot="s07-control-system"
            src="/vascurra/homepage-v2/final-art/07-privacy-control.png"
            alt="A person at the centre of privacy, control, access, respect and security."
            width={1672}
            height={941}
            maxWidthClass="max-w-none"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </Reveal>
      </div>

      <HomeMidClose>{trust.lockup.join(" ")}</HomeMidClose>
    </HomeMidShell>
  );
}
