import { mockups } from "@/content/home";

function ScreenChrome({ title, wide = false }: { title: string; wide?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b border-hairline ${wide ? "px-5 py-3.5" : "px-4 py-3"}`}>
      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
        Vascurra
      </p>
      <p className="text-[0.68rem] text-ink-muted">{title}</p>
    </div>
  );
}

function Spark({
  tone,
  tall = false,
}: {
  tone: "mint" | "cyan";
  tall?: boolean;
}) {
  const stroke = tone === "mint" ? "var(--color-energy-mint)" : "var(--color-energy-cyan)";
  const fill = tone === "mint" ? "var(--color-energy-mint)" : "var(--color-energy-cyan)";
  return (
    <svg viewBox="0 0 280 88" className={tall ? "mt-3 h-20 w-full" : "mt-2 h-14 w-full"} aria-hidden="true">
      <path
        d="M0 70 L0 88 L280 88 L280 48 C 240 62, 210 28, 176 36 S 120 70, 88 54 S 40 22, 0 70 Z"
        fill={fill}
        opacity="0.12"
      />
      <path
        d="M0 70 C 40 22, 64 70, 88 54 S 140 18, 176 36 S 240 62, 280 48"
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeopleScreen() {
  const copy = mockups.people;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <ScreenChrome title={copy.title} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="rounded-2xl border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.checkIn}
          </p>
          <p className="mt-1.5 text-sm font-semibold text-navy">{copy.checkInState}</p>
        </div>
        <div className="rounded-2xl border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.trend}
          </p>
          <p className="mt-1.5 text-sm font-medium text-navy">{copy.trendNote}</p>
          <Spark tone="mint" />
        </div>
        <div className="rounded-2xl bg-[#083d4a] px-4 py-3.5 text-[#f2fbfa]">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--color-energy-cyan)] uppercase">
            {copy.support}
          </p>
          <p className="mt-1.5 text-sm font-medium">{copy.supportNote}</p>
        </div>
        <p className="mt-auto text-[0.65rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function FamilyScreen() {
  const copy = mockups.families;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <ScreenChrome title={copy.title} wide />
      <div className="grid flex-1 gap-3 p-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-hairline px-4 py-4 sm:col-span-2">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.circle}
          </p>
          <p className="mt-2 text-lg font-semibold text-navy">{copy.person}</p>
        </div>
        <div className="rounded-2xl border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.update}
          </p>
          <p className="mt-1.5 text-sm font-medium text-navy">{copy.updateNote}</p>
        </div>
        <div className="rounded-2xl border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.next}
          </p>
          <p className="mt-1.5 text-sm font-medium text-navy">{copy.nextNote}</p>
        </div>
        <p className="mt-auto text-[0.65rem] text-ink-muted sm:col-span-2">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function ClinicianScreen() {
  const copy = mockups.clinicians;
  return (
    <div className="flex h-full bg-white text-left">
      <aside className="hidden w-[7.5rem] shrink-0 border-r border-hairline bg-[#fbfefe] px-3 py-4 sm:block">
        <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Visit
        </p>
        <ul className="mt-4 space-y-3 text-[0.72rem] text-ink-muted">
          <li className="font-semibold text-navy">Context</li>
          <li>Timeline</li>
          <li>Sources</li>
        </ul>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <ScreenChrome title={copy.title} wide />
        <div className="grid flex-1 gap-3 p-4 lg:grid-cols-3">
          <div className="rounded-xl border border-hairline px-4 py-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.changed}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.changedNote}</p>
          </div>
          <div className="rounded-xl border border-hairline px-4 py-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.source}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.sourceNote}</p>
          </div>
          <div className="rounded-xl border border-hairline px-4 py-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.review}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.reviewNote}</p>
          </div>
          <p className="text-[0.65rem] text-ink-muted lg:col-span-3">{mockups.concept}</p>
        </div>
      </div>
    </div>
  );
}

export function ResearchScreen() {
  const copy = mockups.research;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <ScreenChrome title={copy.title} wide />
      <div className="grid flex-1 gap-3 p-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="rounded-xl border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.series}
          </p>
          <p className="mt-1.5 text-sm font-medium text-navy">{copy.seriesNote}</p>
          <Spark tone="cyan" tall />
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-hairline px-4 py-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.signal}
            </p>
            <p className="mt-1.5 text-sm font-medium text-navy">{copy.signalNote}</p>
          </div>
          <div className="rounded-xl border border-hairline px-4 py-3.5">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.structure}
            </p>
            <p className="mt-1.5 text-sm font-medium text-navy">{copy.structureNote}</p>
          </div>
        </div>
        <p className="text-[0.65rem] text-ink-muted sm:col-span-2">{mockups.concept}</p>
      </div>
    </div>
  );
}
