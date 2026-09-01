"use client";

import { useId } from "react";
import { triad } from "@/content/home";

export function UnderstandConstellation() {
  const uid = useId().replace(/:/g, "");
  const signals = [
    { x: 96, y: 72, label: "Health" },
    { x: 340, y: 44, label: "Sleep" },
    { x: 590, y: 70, label: "History" },
    { x: 88, y: 320, label: "Family" },
    { x: 600, y: 328, label: "Routine" },
    { x: 48, y: 188, label: "Movement" },
    { x: 672, y: 196, label: "Daily life" },
    { x: 360, y: 360, label: "Confidence" },
  ];

  return (
    <svg viewBox="0 0 720 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`un-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <radialGradient id={`un-core-${uid}`} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e6f7f6" />
        </radialGradient>
      </defs>
      <circle cx="360" cy="200" r="148" fill="#eaf8f7" opacity="0.7" />
      {signals.map((s) => (
        <g key={s.label}>
          <path
            d={`M ${s.x} ${s.y} Q ${(s.x + 360) / 2} ${(s.y + 200) / 2 - 24} 360 200`}
            fill="none"
            stroke={`url(#un-${uid})`}
            strokeWidth="1.7"
            opacity="0.7"
          />
          <circle cx={s.x} cy={s.y} r="11" fill="#fff" stroke={`url(#un-${uid})`} strokeWidth="2.2" />
          <text x={s.x} y={s.y - 20} textAnchor="middle" fill="#0b2b4a" fontSize="16" fontWeight="600" fontFamily="var(--font-sans)">
            {s.label}
          </text>
        </g>
      ))}
      <rect x="252" y="146" width="216" height="108" rx="28" fill={`url(#un-core-${uid})`} stroke="var(--color-energy-teal)" strokeWidth="1.8" />
      <text x="360" y="194" textAnchor="middle" fill="#083d4a" fontSize="18" fontWeight="700" letterSpacing="0.18em" fontFamily="var(--font-sans)">
        CONTEXT
      </text>
      <text x="360" y="222" textAnchor="middle" fill="#3a5f80" fontSize="16" fontFamily="var(--font-sans)">
        One picture
      </text>
    </svg>
  );
}

export function TrackTrajectory() {
  const uid = useId().replace(/:/g, "");
  const marks = [
    { x: 56, label: "Check-in" },
    { x: 196, label: "Routine" },
    { x: 360, label: "Note" },
    { x: 524, label: "Visit" },
    { x: 664, label: "Today" },
  ];
  const ys = [268, 168, 204, 148, 112];

  return (
    <svg viewBox="0 0 720 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`tr-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="55%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <linearGradient id={`tr-fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-cyan)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M40 320 H680" stroke="#d4e8ea" strokeWidth="1.4" />
      <path
        d="M40 320 L40 268 C 110 268, 140 150, 196 168 S 300 280, 360 204 S 470 100, 524 148 S 620 230, 680 112 L680 320 Z"
        fill={`url(#tr-fill-${uid})`}
      />
      <path
        d="M40 268 C 110 268, 140 150, 196 168 S 300 280, 360 204 S 470 100, 524 148 S 620 230, 680 112"
        fill="none"
        stroke={`url(#tr-${uid})`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {marks.map((m, i) => {
        const y = ys[i] ?? 180;
        return (
          <g key={m.label}>
            <line x1={m.x} y1={y} x2={m.x} y2="320" stroke="#d4e8ea" strokeWidth="1.2" />
            <circle cx={m.x} cy={y} r="10" fill="#fff" stroke={`url(#tr-${uid})`} strokeWidth="3" />
            <text x={m.x} y="352" textAnchor="middle" fill="#0b2b4a" fontSize="16" fontWeight="600" fontFamily="var(--font-sans)">
              {m.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function SupportJourney() {
  const uid = useId().replace(/:/g, "");
  const stages = triad.supportStages;
  const start = 48;
  const width = 624;
  const step = width / (stages.length - 1);

  return (
    <svg viewBox="0 0 720 400" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`su-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <path
        d={`M ${start} 200 C 180 64, 300 336, 360 200 S 540 64, ${start + width} 200`}
        fill="none"
        stroke={`url(#su-${uid})`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {stages.map((stage, i) => {
        const x = start + i * step;
        const y = i % 2 === 0 ? 188 : 228;
        const r = 16 + i * 4;
        return (
          <g key={stage}>
            <circle cx={x} cy={y} r={r} fill="#083d4a" opacity={0.16 + i * 0.12} />
            <circle cx={x} cy={y} r="12" fill="#fff" stroke={`url(#su-${uid})`} strokeWidth="2.6" />
            <text
              x={x}
              y={i % 2 === 0 ? 140 : 292}
              textAnchor="middle"
              fill="#0b2b4a"
              fontSize="16"
              fontWeight="600"
              fontFamily="var(--font-sans)"
            >
              {stage}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
