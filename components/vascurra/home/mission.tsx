import { missionArtwork } from "./mission-artwork";

const missionItems = [
  {
    label: "Help today",
    body: "Support independence, identity, confidence and daily life.",
    position: "left center",
  },
  {
    label: "Learn every day",
    body: "Understand meaningful change across time, connecting what matters to what’s possible.",
    position: "center center",
  },
  {
    label: "Fight for tomorrow",
    body: "Accelerate research into better treatments and the long-term search for a cure.",
    position: "right center",
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative overflow-hidden bg-white px-5 py-[clamp(6rem,10vw,9.5rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-[96rem]">
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

        <div className="relative mt-[clamp(3.5rem,6vw,5.5rem)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] top-[12%] h-[70%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(46,207,196,0.10)_0%,rgba(73,199,104,0.04)_42%,rgba(255,255,255,0)_72%)] blur-2xl"
          />

          <div
            aria-hidden="true"
            className="relative z-10 hidden h-[clamp(11rem,18vw,15rem)] w-full bg-center bg-contain bg-no-repeat md:block"
            style={{ backgroundImage: `url("${missionArtwork}")` }}
          />

          <div className="relative z-10 grid gap-14 md:mt-7 md:grid-cols-3 md:gap-12">
            {missionItems.map((item) => (
              <article key={item.label} className="text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-6 h-44 w-full max-w-[30rem] bg-white bg-no-repeat md:hidden"
                  style={{
                    backgroundImage: `url("${missionArtwork}")`,
                    backgroundPosition: item.position,
                    backgroundSize: "300% auto",
                  }}
                />
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
