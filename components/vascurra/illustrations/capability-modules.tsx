"use client";

import { useId } from "react";
import { triad } from "@/content/home";

export function UnderstandConstellation() {
  const uid = useId().replace(/:/g, "");
  const signals = [
    { x: 70, y: 48, label: "Health" },
    { x: 210, y: 28, label: "Sleep" },
    { x: 360, y: 44, label: "History" },
    { x: 70, y: 196, label: "Family" },
    { x: 360, y: 208, label: "Routine" },
    { x: 40, y: 118, label: "Movement" },
    { x: 400, y: 120, label: "Daily life" },
  ];

  return (
    <svg viewBox="0 0 440 248" className="h-auto w-full" aria-hidden="true">
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
      {signals.map((s) => (
        <g key={s.label}>
          <path
            d={`M ${s.x} ${s.y} Q ${(s.x + 220) / 2} ${(s.y + 124) / 2 - 18} 220 124`}
            fill="none"
            stroke={`url(#un-${uid})`}
            strokeWidth="1.35"
            opacity="0.65"
          />
          <circle cx={s.x} cy={s.y} r="7" fill="#fff" stroke={`url(#un-${uid})`} strokeWidth="2" />
          <text x={s.x} y={s.y - 16} textAnchor="middle" fill="#0b2b4a" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
            {s.label}
          </text>
        </g>
      ))}
      <rect x="154" y="86" width="132" height="76" rx="18" fill={`url(#un-core-${uid})`} stroke="var(--color-energy-teal)" strokeWidth="1.5" />
      <text x="220" y="122" textAnchor="middle" fill="#083d4a" fontSize="13" fontWeight="700" letterSpacing="0.16em" fontFamily="var(--font-sans)">
        CONTEXT
      </text>
      <text x="220" y="142" textAnchor="middle" fill="#3a5f80" fontSize="12" fontFamily="var(--font-sans)">
        One picture
      </text>
    </svg>
  );
}

export function TrackTrajectory() {
  const uid = useId().replace(/:/g, "");
  const marks = [
    { x: 36, label: "Check-in" },
    { x: 132, label: "Routine" },
    { x: 228, label: "Note" },
    { x: 324, label: "Visit" },
    { x: 412, label: "Today" },
  ];

  return (
    <svg viewBox="0 0 440 248" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`tr-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="55%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <linearGradient id={`tr-fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-cyan)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M20 210 H420" stroke="#d4e8ea" strokeWidth="1.2" />
      <path
        d="M20 210 L20 168 C 70 168, 90 92, 132 108 S 190 176, 228 128 S 290 64, 324 96 S 380 150, 420 78 L420 210 Z"
        fill={`url(#tr-fill-${uid})`}
      />
      <path
        d="M20 168 C 70 168, 90 92, 132 108 S 190 176, 228 128 S 290 64, 324 96 S 380 150, 420 78"
        fill="none"
        stroke={`url(#tr-${uid})`}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {marks.map((m, i) => {
        const y = [168, 108, 128, 96, 78][i] ?? 120;
        return (
          <g key={m.label}>
            <line x1={m.x} y1={y} x2={m.x} y2="210" stroke="#d4e8ea" strokeWidth="1" />
            <circle cx={m.x} cy={y} r="7" fill="#fff" stroke={`url(#tr-${uid})`} strokeWidth="2.4" />
            <text x={m.x} y="230" textAnchor="middle" fill="#0b2b4a" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">
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
  const width = 400;
  const start = 28;
  const step = width / (stages.length - 1);

  return (
    <svg viewBox="0 0 440 248" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`su-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <path
        d={`M ${start} 128 C 110 40, 200 216, 220 128 S 330 40, ${start + width} 128`}
        fill="none"
        stroke={`url(#su-${uid})`}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {stages.map((stage, i) => {
        const x = start + i * step;
        const y = i % 2 === 0 ? 118 : 148;
        const r = 10 + i * 2.2;
        return (
          <g key={stage}>
            <circle cx={x} cy={y} r={r} fill="#083d4a" opacity={0.2 + i * 0.14} />
            <circle cx={x} cy={y} r="8" fill="#fff" stroke={`url(#su-${uid})`} strokeWidth="2.2" />
            <text
              x={x}
              y={i % 2 === 0 ? 86 : 196}
              textAnchor="middle"
              fill="#0b2b4a"
              fontSize="12"
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
