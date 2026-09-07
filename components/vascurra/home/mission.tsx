import { LineIcon } from "@/components/vascurra/ui/line-icon";

const missionPillars = [
  {
    title: "Help today",
    body: "Support independence, identity, confidence and daily life.",
    icon: "person" as const,
  },
  {
    title: "Learn every day",
    body: "Understand meaningful change across time, connecting what matters to what’s possible.",
    icon: "evidence" as const,
  },
  {
    title: "Fight for tomorrow",
    body: "Accelerate research into better treatments and the long-term search for a cure.",
    icon: "journey" as const,
  },
];

function MissionRibbon() {
  return (
    <svg
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className="pointer-events-none absolute inset-x-[-10%] top-1/2 h-[18rem] w-[120%] -translate-y-1/2"
    >
      <defs>
        <linearGradient id="mission-ribbon-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-cyan)" stopOpacity="0.24" />
          <stop offset="35%" stopColor="var(--color-energy-teal)" stopOpacity="0.58" />
          <stop offset="68%" stopColor="var(--color-energy-mint)" stopOpacity="0.62" />
          <stop offset="100%" stopColor="var(--color-energy-green)" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="mission-ribbon-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-cyan)" stopOpacity="0.12" />
          <stop offset="50%" stopColor="var(--color-energy-mint)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-energy-green)" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path
        d="M-40 140 C 130 55, 250 205, 405 118 S 700 58, 850 142 S 1080 210, 1240 96"
        fill="none"
        stroke="url(#mission-ribbon-a)"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M-30 168 C 150 225, 280 85, 450 158 S 720 220, 930 112 S 1120 74, 1240 150"
        fill="none"
        stroke="url(#mission-ribbon-b)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {[120, 220, 348, 526, 650, 820, 1020, 1110].map((cx, index) => (
        <circle
          key={cx}
          cx={cx}
          cy={[115, 178, 100, 166, 98, 178, 102, 158][index]}
          r={index % 3 === 0 ? 7 : 4}
          fill={index < 3 ? "var(--color-energy-cyan)" : index < 6 ? "var(--color-energy-teal)" : "var(--color-energy-mint)"}
          opacity="0.78"
        />
      ))}
    </svg>
  );
}

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="overflow-hidden bg-white px-5 py-[clamp(5rem,10vw,9rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[88rem]">
        <div className="mx-auto max-w-[76rem] text-center">
          <p className="text-[1rem] font-semibold tracking-[0.24em] text-ink-cyan uppercase md:text-[1.125rem]">
            Our mission
          </p>
          <h2
            id="mission-heading"
            className="mt-6 text-[clamp(2.75rem,6.5vw,5.4rem)] leading-[1] font-medium tracking-[-0.045em] text-[var(--vascurra-ink)]"
          >
            <span>Help today. </span>
            <span className="text-ink-cyan">Learn every day. </span>
            <span className="text-mark">Fight for tomorrow.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-[57rem] text-[1.25rem] leading-[1.5] text-ink-body md:text-[1.5rem]">
            To help people live as well as possible with vascular cognitive change today, while using lived experience, clinical knowledge and advanced AI to accelerate understanding, better treatments and the long-term search for a cure.
          </p>
        </div>

        <div className="relative mt-[clamp(4rem,7vw,6.5rem)]">
          <MissionRibbon />
          <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {missionPillars.map((pillar, index) => (
              <div key={pillar.title} className="flex flex-col items-center text-center">
                <div
                  className={`flex size-24 items-center justify-center rounded-full border bg-white/90 shadow-[0_18px_50px_-28px_rgba(8,61,74,0.45)] backdrop-blur-sm md:size-28 ${
                    index === 0
                      ? "border-cyan-200 text-ink-cyan"
                      : index === 1
                        ? "border-emerald-200 text-ink-teal"
                        : "border-green-200 text-ink-mint"
                  }`}
                >
                  <LineIcon name={pillar.icon} className="size-11 md:size-12" />
                </div>
                <h3 className="mt-6 text-[1rem] font-semibold tracking-[0.16em] text-[var(--vascurra-ink)] uppercase md:text-[1.125rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 max-w-[22rem] text-[1rem] leading-[1.65] text-ink-body md:text-[1.125rem]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-[clamp(4rem,7vw,6rem)] max-w-[72rem] text-center text-[1.25rem] leading-[1.45] font-medium text-[var(--vascurra-ink)] md:text-[1.5rem]">
          Vascurra will be <span className="text-mark">ambitious</span> about what might become possible and <span className="text-mark">rigorous</span> about what the evidence actually shows.
        </p>
      </div>
    </section>
  );
}
