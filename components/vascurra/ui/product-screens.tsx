import { mockups } from "@/content/home";

function ScreenChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
      <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
        Vascurra
      </p>
      <p className="text-[0.7rem] text-ink-muted">{title}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-mist/80 px-4 py-3">
      <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-ink-teal uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-navy">{value}</p>
    </div>
  );
}

function Spark({ tone }: { tone: "mint" | "cyan" }) {
  const stroke = tone === "mint" ? "var(--color-energy-mint)" : "var(--color-energy-cyan)";
  return (
    <svg viewBox="0 0 240 64" className="mt-3 h-14 w-full" aria-hidden="true">
      <path
        d="M4 42 C 28 40, 40 28, 58 30 S 90 48, 112 36 S 150 14, 176 22 S 214 40, 236 26"
        fill="none"
        stroke={stroke}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PeopleScreen() {
  const copy = mockups.people;
  return (
    <div className="flex h-full flex-col bg-[linear-gradient(180deg,#ffffff,var(--color-mist))] text-left">
      <ScreenChrome title={copy.title} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <Row label={copy.checkIn} value={copy.checkInState} />
        <div className="rounded-2xl bg-white px-4 py-3 ring-1 ring-hairline">
          <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-ink-teal uppercase">
            {copy.trend}
          </p>
          <p className="mt-1 text-sm font-medium text-navy">{copy.trendNote}</p>
          <Spark tone="mint" />
        </div>
        <Row label={copy.support} value={copy.supportNote} />
        <p className="mt-auto text-[0.65rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function FamilyScreen() {
  const copy = mockups.families;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <ScreenChrome title={copy.title} />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="rounded-2xl bg-mist px-4 py-4">
          <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-ink-teal uppercase">
            {copy.circle}
          </p>
          <p className="mt-2 text-base font-semibold text-navy">{copy.person}</p>
        </div>
        <Row label={copy.update} value={copy.updateNote} />
        <Row label={copy.next} value={copy.nextNote} />
        <p className="mt-auto text-[0.65rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function ClinicianScreen() {
  const copy = mockups.clinicians;
  return (
    <div className="flex h-full flex-col bg-[#f8fcfd] text-left">
      <ScreenChrome title={copy.title} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Row label={copy.changed} value={copy.changedNote} />
        <Row label={copy.source} value={copy.sourceNote} />
        <Row label={copy.review} value={copy.reviewNote} />
        <p className="mt-auto text-[0.65rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}

export function ResearchScreen() {
  const copy = mockups.research;
  return (
    <div className="flex h-full flex-col bg-white text-left">
      <ScreenChrome title={copy.title} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="rounded-2xl bg-mist/70 px-4 py-3">
          <p className="text-[0.7rem] font-semibold tracking-[0.12em] text-ink-teal uppercase">
            {copy.series}
          </p>
          <p className="mt-1 text-sm font-medium text-navy">{copy.seriesNote}</p>
          <Spark tone="cyan" />
        </div>
        <Row label={copy.signal} value={copy.signalNote} />
        <Row label={copy.structure} value={copy.structureNote} />
        <p className="mt-auto text-[0.65rem] text-ink-muted">{mockups.concept}</p>
      </div>
    </div>
  );
}
