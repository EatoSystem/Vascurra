import { mockups } from "@/content/home";

function AreaChart({ tall = false }: { tall?: boolean }) {
  return (
    <svg viewBox="0 0 320 120" className={tall ? "h-24 w-full" : "h-16 w-full"} aria-hidden="true">
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

function BottomNav() {
  return (
    <div className="mt-auto grid grid-cols-4 border-t border-hairline px-2 py-3 text-center text-[0.58rem] font-semibold tracking-[0.08em] text-ink-muted uppercase">
      <span className="text-ink-teal">Today</span>
      <span>Notes</span>
      <span>Support</span>
      <span>Me</span>
    </div>
  );
}

export function PeopleScreen() {
  const copy = mockups.people;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <div className="px-5 pt-5 pb-3">
        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Vascurra
        </p>
        <p className="mt-1 text-xl font-semibold text-navy">{copy.title}</p>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5">
        <div className="rounded-[1.25rem] border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.checkIn}
          </p>
          <p className="mt-1.5 text-sm font-semibold text-navy">{copy.checkInState}</p>
        </div>
        <div className="rounded-[1.25rem] border border-hairline px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.trend}
          </p>
          <p className="mt-1.5 text-sm font-medium text-navy">{copy.trendNote}</p>
          <AreaChart />
        </div>
        <div className="rounded-[1.25rem] bg-[#083d4a] px-4 py-3.5 text-[#f2fbfa]">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--color-energy-cyan)] uppercase">
            {copy.support}
          </p>
          <p className="mt-1.5 text-sm font-medium">{copy.supportNote}</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export function FamilyScreen() {
  const copy = mockups.families;
  return (
    <div className="flex h-full bg-white text-left">
      <aside className="hidden w-[6.5rem] shrink-0 border-r border-hairline bg-[#f8fcfc] px-3 py-4 sm:block">
        <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Hub
        </p>
        <ul className="mt-4 space-y-3 text-[0.7rem] text-ink-muted">
          <li className="font-semibold text-navy">Overview</li>
          <li>Circle</li>
          <li>Week</li>
        </ul>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="border-b border-hairline px-4 py-3">
          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
            Vascurra
          </p>
          <p className="text-base font-semibold text-navy">{copy.title}</p>
        </div>
        <div className="grid flex-1 gap-3 p-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#eaf8f7] px-4 py-3 sm:col-span-2">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.circle}
            </p>
            <p className="mt-1 text-lg font-semibold text-navy">{copy.person}</p>
            <div className="mt-3 flex -space-x-2">
              {["A", "J", "S"].map((initial) => (
                <span
                  key={initial}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#083d4a] text-[0.7rem] font-semibold text-white"
                >
                  {initial}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-hairline px-4 py-3">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.update}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.updateNote}</p>
          </div>
          <div className="rounded-2xl border border-hairline px-4 py-3">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.next}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.nextNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClinicianScreen() {
  const copy = mockups.clinicians;
  return (
    <div className="flex h-full bg-white text-left">
      <aside className="w-[7.75rem] shrink-0 border-r border-hairline bg-[#f8fcfc] px-3 py-4">
        <p className="text-[0.58rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
          Visit
        </p>
        <ul className="mt-4 space-y-3 text-[0.72rem] text-ink-muted">
          <li className="font-semibold text-navy">Context</li>
          <li>Timeline</li>
          <li>Sources</li>
          <li>Questions</li>
        </ul>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <p className="text-sm font-semibold text-navy">{copy.title}</p>
          <p className="text-[0.62rem] text-ink-muted">{mockups.concept}</p>
        </div>
        <div className="grid flex-1 gap-3 p-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-hairline px-4 py-3">
            <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.changed}
            </p>
            <p className="mt-2 text-sm font-medium text-navy">{copy.changedNote}</p>
            <AreaChart tall />
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-hairline px-4 py-3">
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
                {copy.source}
              </p>
              <p className="mt-2 text-sm font-medium text-navy">{copy.sourceNote}</p>
            </div>
            <div className="rounded-2xl border border-hairline px-4 py-3">
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
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <div>
          <p className="text-[0.62rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
            Vascurra
          </p>
          <p className="text-sm font-semibold text-navy">{copy.title}</p>
        </div>
        <p className="text-[0.62rem] text-ink-muted">{copy.seriesNote}</p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="rounded-2xl border border-hairline px-4 py-3">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
            {copy.series}
          </p>
          <svg viewBox="0 0 360 110" className="mt-3 h-24 w-full" aria-hidden="true">
            <path d="M0 86 C 50 86, 70 54, 110 60 S 170 94, 210 66 S 280 28, 360 40 L360 110 L0 110 Z" fill="var(--color-energy-mint)" opacity="0.14" />
            <path d="M0 86 C 50 86, 70 54, 110 60 S 170 94, 210 66 S 280 28, 360 40" fill="none" stroke="var(--color-energy-teal)" strokeWidth="2.4" />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-hairline px-3 py-3">
            <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.signal}
            </p>
            <p className="mt-1.5 text-xs font-medium text-navy">{copy.signalNote}</p>
          </div>
          <div className="rounded-2xl border border-hairline px-3 py-3">
            <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-ink-teal uppercase">
              {copy.structure}
            </p>
            <p className="mt-1.5 text-xs font-medium text-navy">{copy.structureNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
