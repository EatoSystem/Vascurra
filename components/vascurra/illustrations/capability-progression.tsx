"use client";

import { useId } from "react";
import { philosophy } from "@/content/home";

export function CapabilityProgression() {
  const uid = useId().replace(/:/g, "");
  const steps = philosophy.steps;
  const start = 48;
  const end = 852;
  const step = (end - start) / (steps.length - 1);

  return (
    <svg
      viewBox="0 0 900 220"
      role="img"
      aria-label="Recall, then hint, then guide, then answer"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id={`cap-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0.2" />
          <stop offset="35%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <path
        d={`M ${start} 88 C 220 20, 360 170, 450 88 S 700 20, ${end} 88`}
        fill="none"
        stroke={`url(#cap-${uid})`}
        strokeWidth="3"
        strokeLinecap="round"
        className="v-illuminate"
        pathLength={1}
      />
      {steps.map((stepItem, i) => {
        const x = start + i * step;
        const lit = 0.35 + i * 0.2;
        return (
          <g key={stepItem.name}>
            <circle cx={x} cy="88" r={18 + i * 3} fill="var(--color-energy-cyan)" opacity={lit * 0.22} />
            <circle
              cx={x}
              cy="88"
              r="11"
              fill="#0c4d5c"
              stroke="var(--color-energy-mint)"
              strokeWidth="2"
              opacity={0.55 + i * 0.15}
            />
            <text
              x={x}
              y="148"
              textAnchor="middle"
              fill="#f2fbfa"
              fontSize="28"
              fontWeight="650"
              fontFamily="var(--font-sans)"
            >
              {stepItem.name}
            </text>
            {i < steps.length - 1 ? (
              <text x={x + step / 2} y="86" textAnchor="middle" fill="#43d6ff" fontSize="22" fontFamily="var(--font-sans)">
                →
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
