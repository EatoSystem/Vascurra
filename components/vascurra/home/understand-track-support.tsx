import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { FlowMark } from "@/components/vascurra/ui/flow-mark";
import { triad } from "@/content/home";

const marks = ["dots", "arc", "nodes"] as const;

export function UnderstandTrackSupport() {
  return (
    <SectionShell labelledBy="triad-heading" tone="mist" bloom="teal" flow="band">
      <Reveal>
        <h2 id="triad-heading" className="type-section max-w-3xl">
          {triad.heading}
        </h2>
      </Reveal>
      <ul className="mt-16 divide-y divide-hairline">
        {triad.items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={80 + i * 70}>
            <div className="grid items-center gap-8 py-10 sm:grid-cols-[10rem_minmax(0,1fr)]">
              <FlowMark variant={marks[i] ?? "dots"} />
              <div>
                <h3 className="font-serif text-3xl font-semibold">{item.name}</h3>
                <p className="mt-3 max-w-xl text-ink-body">{item.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}
