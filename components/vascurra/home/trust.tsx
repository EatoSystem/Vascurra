import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { trust } from "@/content/home";
import { privacyHref } from "@/content/site";

export function Trust() {
  return (
    <HomeMidShell labelledBy="trust-heading">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="home-mid-kicker">{trust.eyebrow}</p>
          <h2 id="trust-heading" className="home-mid-heading mt-4">
            <span className="block text-[var(--vascurra-deep-teal)]">{trust.heading}</span>
            <span className="text-mark">{trust.headingLine}</span>
          </h2>
          <p className="home-mid-body mt-6 max-w-md text-ink-body">{trust.intro}</p>
          <ul className="mt-10 space-y-6">
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

        <Reveal delay={70} className="lg:col-span-7">
          <HomeMidArt
            slot="s07-control-system"
            src="/vascurra/homepage-hd/07-privacy-by-design-security-by-default.png"
            alt="A person at the centre of privacy, consent, access, sharing and research."
            width={1672}
            height={941}
            maxWidthClass="max-w-none"
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </Reveal>
      </div>

      <HomeMidClose>{trust.lockup.join(" ")}</HomeMidClose>
    </HomeMidShell>
  );
}
