import { mockups } from "@/content/home";

function WeekStrip() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="flex justify-between gap-1">
      {days.map((day, i) => (
        <div key={`${day}-${i}`} className="flex flex-1 flex-col items-center gap-1.5">
          <span className="text-[0.62rem] font-semibold text-ink-muted">{day}</span>
          <span
            className={`size-2.5 rounded-full ${
              i < 5 ? "bg-[var(--color-energy-mint)]" : "bg-hairline"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function AreaChart({ tall = false }: { tall?: boolean }) {
  return (
    <svg viewBox="0 0 320 120" className={tall ? "h-28 w-full" : "h-[4.5rem] w-full"} aria-hidden="true">
      <path
        d="M0 92 C 40 92, 52 48, 88 54 S 140 96, 176 70 S 240 28, 280 40 L320 48 L320 120 L0 120 Z"
        fill="var(--color-energy-cyan)"
        opacity="0.12"
      />
      <path
        d="M0 92 C 40 92, 52 48, 88 54 S 140 96, 176 70 S 240 28, 280 40 L320 48"
        fill="none"
        stroke="var(--color-energy-teal)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeopleScreen() {
  const copy = mockups.people;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
            Vascurra
          </p>
          <p className="mt-1 text-xl font-semibold text-navy">{copy.title}</p>
        </div>
        <span className="rounded-full bg-[#e6f7f6] px-3 py-1 text-[0.68rem] font-semibold text-ink-teal">
          {copy.checkInState}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-5 pb-5">
        <div className="rounded-[1.4rem] border border-hairline px-4 py-4">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.checkIn}
          </p>
          <p className="mt-2 text-sm font-medium text-navy">Kept in your own words</p>
        </div>
        <div className="rounded-[1.4rem] border border-hairline px-4 py-4">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.trend}
          </p>
          <p className="mt-2 mb-3 text-sm font-medium text-navy">{copy.trendNote}</p>
          <WeekStrip />
          <AreaChart />
        </div>
        <div className="mt-auto rounded-[1.4rem] bg-[#083d4a] px-4 py-4 text-[#f2fbfa]">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--color-energy-cyan)] uppercase">
            {copy.support}
          </p>
          <p className="mt-2 text-sm font-medium">{copy.supportNote}</p>
        </div>
        <p className="text-[0.62rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function FamilyScreen() {
  const copy = mockups.families;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <div className="border-b border-hairline px-5 py-4">
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Vascurra
        </p>
        <p className="mt-1 text-lg font-semibold text-navy">{copy.title}</p>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="rounded-[1.4rem] bg-[#eaf8f7] px-4 py-4">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.circle}
          </p>
          <p className="mt-2 text-xl font-semibold text-navy">{copy.person}</p>
          <div className="mt-4 flex -space-x-2">
            {["A", "J", "S"].map((initial) => (
              <span
                key={initial}
                className="flex size-9 items-center justify-center rounded-full border-2 border-white bg-[#083d4a] text-xs font-semibold text-white"
              >
                {initial}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-[1.2rem] border border-hairline px-4 py-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.update}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.updateNote}</p>
          </div>
          <div className="rounded-[1.2rem] border border-hairline px-4 py-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.next}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.nextNote}</p>
          </div>
        </div>
        <p className="mt-auto text-[0.62rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function ClinicianScreen() {
  const copy = mockups.clinicians;
  return (
    <div className="flex h-full bg-white text-left">
      <aside className="w-[8.25rem] shrink-0 border-r border-hairline bg-[#f8fcfc] px-3 py-5">
        <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Visit
        </p>
        <ul className="mt-5 space-y-4 text-[0.78rem] text-ink-muted">
          <li className="font-semibold text-navy">Context</li>
          <li>Timeline</li>
          <li>Sources</li>
          <li>Questions</li>
        </ul>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
          <p className="text-base font-semibold text-navy">{copy.title}</p>
          <p className="text-[0.68rem] text-ink-muted">{mockups.concept}</p>
        </div>
        <div className="grid flex-1 gap-4 p-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="rounded-2xl border border-hairline px-4 py-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.changed}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.changedNote}</p>
            <AreaChart tall />
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-hairline px-4 py-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
                {copy.source}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">{copy.sourceNote}</p>
            </div>
            <div className="rounded-2xl border border-hairline px-4 py-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
                {copy.review}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">{copy.reviewNote}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResearchScreen() {
  const copy = mockups.research;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
            Vascurra
          </p>
          <p className="text-base font-semibold text-navy">{copy.title}</p>
        </div>
        <p className="text-[0.68rem] text-ink-muted">{copy.seriesNote}</p>
      </div>
      <div className="grid flex-1 gap-4 p-5 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]">
        <div className="rounded-2xl border border-hairline px-4 py-4">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.series}
          </p>
          <svg viewBox="0 0 360 140" className="mt-4 h-32 w-full" aria-hidden="true">
            <path d="M0 110 C 50 110, 70 70, 110 78 S 170 120, 210 84 S 280 40, 360 52 L360 140 L0 140 Z" fill="var(--color-energy-mint)" opacity="0.14" />
            <path d="M0 110 C 50 110, 70 70, 110 78 S 170 120, 210 84 S 280 40, 360 52" fill="none" stroke="var(--color-energy-teal)" strokeWidth="2.4" />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl border border-hairline px-4 py-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.signal}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.signalNote}</p>
          </div>
          <div className="rounded-2xl border border-hairline px-4 py-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.structure}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.structureNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
