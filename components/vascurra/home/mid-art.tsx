import type { ReactNode } from "react";

/** Production artwork slot for homepage sections 03–07. */
export function ArtSlot({
  slot,
  label,
  className = "",
  children,
}: {
  slot: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div data-asset-slot={slot} className={`relative overflow-hidden ${className}`}>
      <span className="sr-only">{label}</span>
      <div aria-hidden="true" className="h-full w-full">
        {children}
      </div>
    </div>
  );
}

export function UnderstandStage() {
  const nodes = [
    [18, 42],
    [38, 22],
    [62, 28],
    [82, 48],
    [70, 72],
    [42, 78],
    [22, 64],
    [50, 50],
  ] as const;
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="s03-u" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--vascurra-grad-cyan)" />
          <stop offset="100%" stopColor="var(--vascurra-grad-green)" />
        </linearGradient>
      </defs>
      {nodes.slice(0, 7).map(([x, y], i) => (
        <line
          key={`${x}-${y}`}
          x1="50"
          y1="50"
          x2={x}
          y2={y}
          stroke="url(#s03-u)"
          strokeWidth="0.6"
          opacity={0.45 + i * 0.04}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`n-${x}-${y}`}
          cx={x}
          cy={y}
          r={i === 7 ? 3.2 : 1.6}
          fill={i === 7 ? "var(--vascurra-deep-teal)" : "var(--vascurra-grad-cyan)"}
          opacity={i === 7 ? 1 : 0.75}
        />
      ))}
    </svg>
  );
}

export function TrackStage() {
  return (
    <svg viewBox="0 0 240 120" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="s03-t" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--vascurra-grad-deep)" />
          <stop offset="55%" stopColor="var(--vascurra-grad-cyan)" />
          <stop offset="100%" stopColor="var(--vascurra-grad-green)" />
        </linearGradient>
      </defs>
      <path
        d="M8 88 C 48 88, 62 40, 96 46 S 148 92, 176 58 S 210 28, 232 34"
        fill="none"
        stroke="url(#s03-t)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {[
        [8, 88],
        [96, 46],
        [176, 58],
        [232, 34],
      ].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r={2.2 + i * 0.4} fill="var(--vascurra-deep-teal)" />
      ))}
    </svg>
  );
}

export function SupportStage() {
  const steps = [28, 44, 62, 82];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <line x1="22" y1="78" x2="82" y2="22" stroke="var(--color-hairline-strong)" strokeWidth="1.2" />
      {steps.map((y, i) => (
        <g key={y}>
          <circle
            cx={22 + i * 18}
            cy={y}
            r={4 + i * 1.6}
            fill="none"
            stroke="var(--vascurra-grad-cyan)"
            strokeWidth="1.4"
            opacity={0.45 + i * 0.15}
          />
          <circle cx={22 + i * 18} cy={y} r={1.6} fill="var(--vascurra-grad-green)" />
        </g>
      ))}
    </svg>
  );
}

export function SupportJourneyStage() {
  return (
    <svg viewBox="0 0 920 120" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="s04-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fe8ef" stopOpacity="0.25" />
          <stop offset="55%" stopColor="#13b8c6" />
          <stop offset="100%" stopColor="#50c98a" />
        </linearGradient>
      </defs>
      <path
        d="M24 78 C 160 78, 220 40, 320 52 S 520 92, 620 48 S 780 24, 896 30"
        fill="none"
        stroke="url(#s04-path)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {[80, 300, 560, 840].map((x, i) => (
        <circle
          key={x}
          cx={x}
          cy={[78, 52, 48, 30][i]}
          r={6 + i * 3}
          fill="none"
          stroke="#f2fbfa"
          strokeWidth="1.5"
          opacity={0.45 + i * 0.18}
        />
      ))}
    </svg>
  );
}

export function HumanChapterStage() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="72" r="28" fill="none" stroke="var(--vascurra-grad-cyan)" strokeWidth="1.4" />
      <circle cx="100" cy="72" r="8" fill="var(--vascurra-deep-teal)" />
      {[0, 72, 144, 216].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={100 + Math.cos(a) * 48}
            cy={72 + Math.sin(a) * 32}
            r="3"
            fill="var(--vascurra-grad-green)"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

export function PrivacyChapterStage() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      {[18, 32, 46].map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="72"
          r={r}
          fill="none"
          stroke="var(--vascurra-grad-deep)"
          strokeWidth="1.2"
          opacity={0.25 + i * 0.18}
        />
      ))}
      <circle cx="100" cy="72" r="6" fill="var(--vascurra-grad-cyan)" />
    </svg>
  );
}

export function EvidenceChapterStage() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full" aria-hidden="true">
      <path
        d="M28 108 L28 32 L172 32"
        fill="none"
        stroke="var(--color-hairline-strong)"
        strokeWidth="1.2"
      />
      <path
        d="M40 92 L76 70 L108 78 L160 44"
        fill="none"
        stroke="var(--vascurra-grad-cyan)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="160" cy="44" r="4" fill="var(--vascurra-grad-green)" />
    </svg>
  );
}

export function ControlSystemStage() {
  const rings = [22, 38, 54, 70];
  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      {rings.map((r, i) => (
        <circle
          key={r}
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke="var(--vascurra-grad-cyan)"
          strokeWidth="1.1"
          opacity={0.22 + i * 0.12}
        />
      ))}
      <circle cx="110" cy="110" r="10" fill="var(--vascurra-deep-teal)" />
      {[
        [110, 40],
        [180, 90],
        [168, 168],
        [52, 168],
        [40, 90],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="var(--vascurra-grad-green)" />
      ))}
    </svg>
  );
}
