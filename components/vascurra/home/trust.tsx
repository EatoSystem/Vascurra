import { Reveal } from "@/components/motion/Reveal";
import { HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { ArtSlot, ControlSystemStage } from "@/components/vascurra/home/mid-art";
import { trust } from "@/content/home";

export function Trust() {
  return (
    <HomeMidShell labelledBy="trust-heading">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <p className="home-mid-kicker">{trust.eyebrow}</p>
          <h2 id="trust-heading" className="home-mid-heading mt-4">
            <span className="block text-[var(--vascurra-deep-teal)]">{trust.heading}</span>
            <span className="text-mark">{trust.headingLine}</span>
          </h2>
          <p className="home-mid-body mt-6 max-w-xl text-ink-body">{trust.intro}</p>
          <ol className="mt-10 space-y-7">
            {trust.principles.map((item, i) => (
              <li key={item.id}>
                <h3 className="text-[1.35rem] font-semibold text-[var(--vascurra-deep-teal)]">
                  <span className="mr-2 text-[0.9375rem] tracking-[0.14em] text-ink-teal uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.name}
                </h3>
                <p className="home-mid-body mt-2 text-ink-body">{item.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[1.25rem] leading-[1.5] font-medium text-[var(--vascurra-deep-teal)]">
            {trust.lockup.join(" ")}
          </p>
        </Reveal>

        <Reveal delay={80}>
          {/* SECTION 07 ART SLOT — control radiates outward from the person */}
          <ArtSlot
            slot="s07-control-system"
            label="Control system centred on the person"
            className="mx-auto aspect-square w-full max-w-[36rem] min-h-[22rem]"
          >
            <ControlSystemStage />
          </ArtSlot>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[1.0625rem] font-medium text-ink-teal">
            {trust.architecture.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </HomeMidShell>
  );
}
