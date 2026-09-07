const missionItems = [
  {
    label: "Help today",
    body: "Support independence, identity, confidence and daily life.",
  },
  {
    label: "Learn every day",
    body: "Understand meaningful change across time, connecting what matters to what’s possible.",
  },
  {
    label: "Fight for tomorrow",
    body: "Accelerate research into better treatments and the long-term search for a cure.",
  },
];

function MissionRibbon() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 290"
        className="pointer-events-none absolute inset-x-0 top-3 hidden h-[18rem] w-full md:block"
      >
        <defs>
          <linearGradient id="mission-ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0aa3bc" />
            <stop offset="48%" stopColor="#2ecfc4" />
            <stop offset="100%" stopColor="#49c768" />
          </linearGradient>
          <linearGradient id="mission-ribbon-highlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#70e4ea" />
            <stop offset="55%" stopColor="#a6f3dc" />
            <stop offset="100%" stopColor="#93eca7" />
          </linearGradient>
          <filter id="mission-soft-glow" x="-30%" y="-100%" width="160%" height="300%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>

        <path
          d="M-20 164 C150 63 298 229 470 150 C622 80 729 68 886 146 C1048 228 1195 205 1460 86"
          fill="none"
          stroke="#2ecfc4"
          strokeOpacity="0.16"
          strokeWidth="58"
          strokeLinecap="round"
          filter="url(#mission-soft-glow)"
        />
        <path
          d="M-20 164 C150 63 298 229 470 150 C622 80 729 68 886 146 C1048 228 1195 205 1460 86"
          fill="none"
          stroke="url(#mission-ribbon)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M-20 157 C150 56 298 222 470 143 C622 73 729 61 886 139 C1048 221 1195 198 1460 79"
          fill="none"
          stroke="url(#mission-ribbon-highlight)"
          strokeOpacity="0.78"
          strokeWidth="6"
          strokeLinecap="round"
        />

        <g stroke="#20bfc5" strokeWidth="3" strokeLinecap="round" opacity="0.78">
          <path d="M248 129 C234 102 217 89 197 78" />
          <path d="M249 129 C272 101 294 91 315 85" />
          <path d="M718 96 C698 69 676 56 654 49" />
          <path d="M721 97 C747 67 772 57 797 53" />
          <path d="M1160 169 C1142 142 1123 130 1103 122" />
          <path d="M1163 169 C1189 139 1213 132 1235 129" />
        </g>

        <g fill="#2ecfc4">
          <circle cx="197" cy="78" r="7" />
          <circle cx="315" cy="85" r="6" />
          <circle cx="654" cy="49" r="7" />
          <circle cx="797" cy="53" r="6" />
          <circle cx="1103" cy="122" r="7" />
          <circle cx="1235" cy="129" r="6" />
        </g>
        <g fill="#49c768">
          <circle cx="248" cy="129" r="9" />
          <circle cx="720" cy="96" r="9" />
          <circle cx="1162" cy="169" r="9" />
        </g>
      </svg>

      <svg
        aria-hidden="true"
        viewBox="0 0 120 620"
        className="pointer-events-none absolute left-2 top-3 h-[39rem] w-24 md:hidden"
      >
        <defs>
          <linearGradient id="mission-ribbon-mobile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0aa3bc" />
            <stop offset="48%" stopColor="#2ecfc4" />
            <stop offset="100%" stopColor="#49c768" />
          </linearGradient>
        </defs>
        <path
          d="M60 -20 C18 72 104 123 60 212 C18 301 103 351 60 442 C23 520 79 568 57 650"
          fill="none"
          stroke="#2ecfc4"
          strokeOpacity="0.12"
          strokeWidth="38"
          strokeLinecap="round"
        />
        <path
          d="M60 -20 C18 72 104 123 60 212 C18 301 103 351 60 442 C23 520 79 568 57 650"
          fill="none"
          stroke="url(#mission-ribbon-mobile)"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <circle cx="56" cy="126" r="8" fill="#13b8c6" />
        <circle cx="63" cy="317" r="8" fill="#2ecfc4" />
        <circle cx="58" cy="506" r="8" fill="#49c768" />
      </svg>
    </>
  );
}

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden bg-white px-5 py-[clamp(6rem,10vw,9.5rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="mx-auto max-w-[78rem] text-center">
          <p className="text-[1rem] font-semibold tracking-[0.28em] text-[#0aa3bc] uppercase md:text-[1.125rem]">
            Our mission
          </p>

          <h2
            id="mission-heading"
            className="mx-auto mt-7 max-w-[75rem] text-[clamp(3rem,5.35vw,5.25rem)] leading-[1.03] font-semibold tracking-[-0.047em] text-[#062b4b]"
          >
            <span>Help today. </span>
            <span className="bg-[linear-gradient(90deg,#0aa3bc_0%,#2ecfc4_100%)] bg-clip-text text-transparent forced-colors:text-[#062b4b]">
              Learn every day.
            </span>{" "}
            <span className="bg-[linear-gradient(90deg,#2ecfc4_0%,#49c768_100%)] bg-clip-text text-transparent forced-colors:text-[#062b4b]">
              Fight for tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-9 max-w-[66rem] text-[clamp(1.18rem,1.6vw,1.5rem)] leading-[1.55] font-medium text-[#244a64]">
            To help people live as well as possible with vascular cognitive change today, while using lived experience, clinical knowledge and advanced AI to accelerate understanding, better treatments and the long-term search for a cure.
          </p>
        </div>

        <div className="relative mt-[clamp(3.5rem,6vw,5.5rem)] min-h-[39rem] md:min-h-0 md:pt-[8.5rem]">
          <MissionRibbon />

          <div className="relative z-10 grid gap-14 pl-24 md:grid-cols-3 md:gap-10 md:pl-0">
            {missionItems.map((item) => (
              <article key={item.label} className="md:text-center">
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b9ece8] bg-white/90 shadow-[0_12px_40px_rgba(12,170,181,0.13)] md:mx-auto md:h-16 md:w-16"
                >
                  <span className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#0aa3bc,#2ecfc4_52%,#49c768)] shadow-[0_0_0_7px_rgba(46,207,196,0.10)]" />
                </div>
                <p className="text-[1rem] leading-[1.35] font-semibold tracking-[0.12em] text-[#087486] uppercase md:text-[1.125rem]">
                  {item.label}
                </p>
                <p className="mx-auto mt-4 max-w-[24rem] text-[1rem] leading-[1.7] text-[#244a64] md:text-[1.125rem]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-[clamp(3rem,5vw,5rem)] max-w-[66rem] text-center text-[clamp(1.18rem,1.6vw,1.5rem)] leading-[1.5] font-semibold text-[#062b4b]">
          Vascurra will be ambitious about what might become possible and rigorous about what the evidence actually shows.
        </p>
      </div>
    </section>
  );
}
