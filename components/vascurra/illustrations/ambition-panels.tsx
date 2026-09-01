"use client";

import { useId } from "react";

export function JudgementIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 240" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`ju-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <rect x="148" y="48" width="124" height="86" rx="14" fill="#f7fbfb" stroke={`url(#ju-${uid})`} strokeWidth="1.6" />
      <path d="M164 78 H256 M164 96 H232" stroke="var(--color-energy-teal)" strokeWidth="2" opacity="0.45" />
      <circle cx="88" cy="92" r="16" fill="#083d4a" />
      <path d="M60 168 C 64 128, 72 118, 88 118 C 104 118, 112 128, 116 168 Z" fill="#083d4a" />
      <circle cx="332" cy="96" r="14" fill="#0e6e7a" />
      <path d="M308 168 C 312 132, 318 124, 332 124 C 346 124, 352 132, 356 168 Z" fill="#0e6e7a" />
      <path d="M118 108 C 148 92, 180 92, 210 108" fill="none" stroke={`url(#ju-${uid})`} strokeWidth="1.6" />
      <path d="M272 108 C 292 96, 312 96, 322 108" fill="none" stroke={`url(#ju-${uid})`} strokeWidth="1.6" />
    </svg>
  );
}

export function PrivacyLayerIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 240" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`pl-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="120" r="96" fill="#e6f7f6" stroke={`url(#pl-${uid})`} />
      <circle cx="210" cy="120" r="68" fill="#ffffff" stroke={`url(#pl-${uid})`} />
      <circle cx="210" cy="120" r="40" fill="#083d4a" />
      <path d="M210 88 L236 100 V124 C236 140, 224 150, 210 158 C196 150, 184 140, 184 124 V100 Z" fill="none" stroke="#f2fbfa" strokeWidth="2" />
    </svg>
  );
}

export function EvidenceIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 240" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`ev-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <rect x="48" y="54" width="90" height="118" rx="10" fill="#f7fbfb" stroke="#d4e8ea" />
      <rect x="68" y="74" width="50" height="8" rx="3" fill="var(--color-energy-teal)" opacity="0.35" />
      <rect x="68" y="92" width="40" height="8" rx="3" fill="#d4e8ea" />
      <rect x="68" y="110" width="46" height="8" rx="3" fill="#d4e8ea" />
      <path d="M176 168 C 210 168, 220 80, 258 96 S 320 40, 360 56" fill="none" stroke={`url(#ev-${uid})`} strokeWidth="3" strokeLinecap="round" />
      <circle cx="176" cy="168" r="6" fill="var(--color-energy-mint)" />
      <circle cx="258" cy="96" r="6" fill="var(--color-energy-teal)" />
      <circle cx="360" cy="56" r="6" fill="var(--color-energy-cyan)" />
      <text x="176" y="196" textAnchor="middle" fill="#0b2b4a" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">Observe</text>
      <text x="258" y="196" textAnchor="middle" fill="#0b2b4a" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">Review</text>
      <text x="360" y="196" textAnchor="middle" fill="#0b2b4a" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">Share</text>
    </svg>
  );
}
