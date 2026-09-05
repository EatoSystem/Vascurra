"use client";

import { useId } from "react";

export function JudgementIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`ju-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <rect x="132" y="36" width="156" height="118" rx="18" fill="#f7fbfb" stroke={`url(#ju-${uid})`} strokeWidth="1.8" />
      <path d="M152 72 H268 M152 96 H244 M152 120 H220" stroke="var(--color-energy-teal)" strokeWidth="2.2" opacity="0.4" />
      <circle cx="74" cy="118" r="22" fill="#083d4a" />
      <path d="M38 232 C 42 168, 54 154, 74 154 C 94 154, 106 168, 110 232 Z" fill="#083d4a" />
      <circle cx="346" cy="126" r="18" fill="#0e6e7a" />
      <path d="M316 232 C 320 176, 328 164, 346 164 C 364 164, 372 176, 376 232 Z" fill="#0e6e7a" />
      <path d="M110 140 C 148 108, 176 108, 210 132" fill="none" stroke={`url(#ju-${uid})`} strokeWidth="2" />
      <path d="M288 140 C 312 120, 330 120, 340 136" fill="none" stroke={`url(#ju-${uid})`} strokeWidth="2" />
      <text x="210" y="276" textAnchor="middle" fill="#3a5f80" fontSize="13" fontFamily="var(--font-sans)">
        Person and clinician, with intelligence between them
      </text>
    </svg>
  );
}

export function PrivacyLayerIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`pl-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="138" r="118" fill="#e6f7f6" stroke={`url(#pl-${uid})`} />
      <circle cx="210" cy="138" r="86" fill="#ffffff" stroke={`url(#pl-${uid})`} />
      <circle cx="210" cy="138" r="54" fill="#0e6e7a" opacity="0.18" stroke={`url(#pl-${uid})`} />
      <circle cx="210" cy="138" r="34" fill="#083d4a" />
      <path d="M210 108 L236 120 V142 C236 158, 224 168, 210 176 C196 168, 184 158, 184 142 V120 Z" fill="none" stroke="#f2fbfa" strokeWidth="2.2" />
      <text x="210" y="276" textAnchor="middle" fill="#3a5f80" fontSize="13" fontFamily="var(--font-sans)">
        Control held closest to the person
      </text>
    </svg>
  );
}

export function EvidenceIllustration() {
  const uid = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`ev-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      <rect x="28" y="48" width="108" height="148" rx="12" fill="#f7fbfb" stroke="#d4e8ea" />
      <rect x="48" y="72" width="68" height="10" rx="3" fill="var(--color-energy-teal)" opacity="0.35" />
      <rect x="48" y="96" width="54" height="10" rx="3" fill="#d4e8ea" />
      <rect x="48" y="120" width="62" height="10" rx="3" fill="#d4e8ea" />
      <rect x="48" y="144" width="40" height="10" rx="3" fill="#d4e8ea" />
      <path d="M168 196 C 214 196, 228 88, 278 108 S 340 48, 392 64" fill="none" stroke={`url(#ev-${uid})`} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="168" cy="196" r="8" fill="var(--color-energy-mint)" />
      <circle cx="278" cy="108" r="8" fill="var(--color-energy-teal)" />
      <circle cx="392" cy="64" r="8" fill="var(--color-energy-cyan)" />
      <text x="168" y="236" textAnchor="middle" fill="#0b2b4a" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)">Observe</text>
      <text x="278" y="236" textAnchor="middle" fill="#0b2b4a" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)">Review</text>
      <text x="392" y="236" textAnchor="middle" fill="#0b2b4a" fontSize="14" fontWeight="600" fontFamily="var(--font-sans)">Share</text>
    </svg>
  );
}
