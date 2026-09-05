"use client";

import { useId } from "react";
import { trust } from "@/content/home";

export function PrivacyArchitecture() {
  const uid = useId().replace(/:/g, "");
  const layers = trust.architecture;
  const radii = [52, 100, 148, 198, 250];

  return (
    <svg
      viewBox="0 0 760 560"
      role="img"
      aria-label="Layered privacy architecture from person through control, consent, access and security"
      className="mx-auto h-auto w-full max-w-[46rem]"
    >
      <defs>
        <linearGradient id={`pr-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="55%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <g transform="translate(270 280)">
        {[...radii].reverse().map((r, i) => (
          <circle
            key={r}
            r={r}
            fill={i === 0 ? "#eaf8f7" : "transparent"}
            stroke={`url(#pr-${uid})`}
            strokeWidth={i === 0 ? 1.2 : 1.6}
            opacity={1 - i * 0.08}
          />
        ))}
        <circle r="52" fill="#083d4a" />
        <circle cy="-11" r="11" fill="#f2fbfa" />
        <path d="M-21 26 C -19 6, -11 2, 0 2 C 11 2, 19 6, 21 26 Z" fill="#f2fbfa" />
      </g>
      {layers.map((label, i) => {
        const y = 280 - radii[i]! + 8;
        return (
          <g key={label}>
            <circle cx="270" cy={280 - (radii[i] ?? 52)} r="4.5" fill="var(--color-energy-cyan)" />
            <path
              d={`M 286 ${280 - (radii[i] ?? 52)} H 520`}
              stroke={`url(#pr-${uid})`}
              strokeWidth="1.2"
              fill="none"
              opacity="0.7"
            />
            <text
              x="536"
              y={y}
              fill="#0b2b4a"
              fontSize="24"
              fontWeight="650"
              fontFamily="var(--font-sans)"
            >
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
