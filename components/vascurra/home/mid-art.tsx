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
    <div data-asset-slot={slot} className={`relative ${className}`}>
      <span className="sr-only">{label}</span>
      <div aria-hidden="true" className="h-full w-full">
        {children}
      </div>
    </div>
  );
}

const personSilhouette =
  "M110 86c11.6 0 21-9.2 21-20.6S121.6 45 110 45s-21 9.1-21 20.4S98.4 86 110 86Zm-32 64c4.8-22 16.6-34 32-34s27.2 12 32 34v10H78v-10Z";

export function UnderstandFlowStage() {
  const nodes = [
    { x: 58, y: 78, icon: "heart" },
    { x: 118, y: 42, icon: "moon" },
    { x: 178, y: 70, icon: "move" },
    { x: 54, y: 148, icon: "cal" },
    { x: 126, y: 176, icon: "apple" },
    { x: 196, y: 148, icon: "people" },
    { x: 86, y: 228, icon: "shield" },
    { x: 168, y: 232, icon: "note" },
  ] as const;

  return (
    <svg viewBox="0 0 920 320" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="s03-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--vascurra-grad-deep)" stopOpacity="0.2" />
          <stop offset="42%" stopColor="var(--vascurra-grad-cyan)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--vascurra-grad-green)" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="s03-wave-core" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9ee7ee" />
          <stop offset="55%" stopColor="#13b8c6" />
          <stop offset="100%" stopColor="#50c98a" />
        </linearGradient>
        <radialGradient id="s03-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#50c98a" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#13b8c6" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#13b8c6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b) => (
          <line
            key={`${a.x}-${b.x}-${a.y}-${b.y}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--vascurra-grad-cyan)"
            strokeWidth="0.8"
            opacity="0.18"
          />
        )),
      )}

      {nodes.map((node) => (
        <g key={`${node.x}-${node.y}`} transform={`translate(${node.x} ${node.y})`}>
          <circle r="22" fill="#f4fbfb" stroke="#b7d6da" strokeWidth="1.2" />
          <NodeGlyph name={node.icon} />
        </g>
      ))}

      <path
        d="M214 156 C 310 148, 360 118, 430 128 S 540 188, 620 150 S 710 96, 768 128"
        fill="none"
        stroke="url(#s03-wave)"
        strokeWidth="28"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M214 156 C 310 148, 360 118, 430 128 S 540 188, 620 150 S 710 96, 768 128"
        fill="none"
        stroke="url(#s03-wave-core)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle cx="820" cy="150" r="92" fill="url(#s03-glow)" />
      <circle cx="820" cy="150" r="78" fill="none" stroke="#50c98a" strokeWidth="1" opacity="0.28" />
      <circle cx="820" cy="150" r="58" fill="none" stroke="#13b8c6" strokeWidth="1.1" opacity="0.4" />
      <circle cx="820" cy="150" r="38" fill="#ffffff" stroke="#d4e8ea" strokeWidth="1.4" />
      <g transform="translate(710 64) scale(1)">
        <path d={personSilhouette} fill="var(--vascurra-deep-teal)" />
      </g>
    </svg>
  );
}

function NodeGlyph({ name }: { name: string }) {
  const stroke = "var(--vascurra-deep-teal)";
  if (name === "heart") {
    return (
      <path
        d="M0 -6 C -8 -14, -16 -4, 0 8 C 16 -4, 8 -14, 0 -6 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
      />
    );
  }
  if (name === "moon") {
    return (
      <path
        d="M4 -9 A 11 11 0 1 0 4 9 A 8 8 0 1 1 4 -9 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
      />
    );
  }
  if (name === "move") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
        <circle cy="-7" r="2.2" />
        <path d="M-6 2 L0 -2 L6 2 M0 -2 V12 M-7 16 L0 8 L7 16" />
      </g>
    );
  }
  if (name === "cal") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="1.6">
        <rect x="-8" y="-7" width="16" height="14" rx="2" />
        <path d="M-8 -2 H8 M-3 -10 V-5 M3 -10 V-5" />
      </g>
    );
  }
  if (name === "apple") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="1.6">
        <path d="M-7 2 C -7 -8, 7 -8, 7 2 C 7 10, 3 12, 0 12 S -7 10, -7 2 Z" />
        <path d="M0 -6 C 0 -10, 4 -12, 6 -10" />
      </g>
    );
  }
  if (name === "people") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="1.6">
        <circle cx="-5" cy="-5" r="3" />
        <circle cx="6" cy="-4" r="2.4" />
        <path d="M-12 10 C -12 4, 2 4, 2 10 M2 10 C 2 5, 13 5, 13 10" />
      </g>
    );
  }
  if (name === "shield") {
    return (
      <path
        d="M0 -10 L10 -6 V2 C 10 8, 4 12, 0 14 C -4 12, -10 8, -10 2 V-6 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
      />
    );
  }
  return (
    <g fill="none" stroke={stroke} strokeWidth="1.6">
      <rect x="-7" y="-9" width="14" height="18" rx="1.5" />
      <path d="M-3 -3 H3 M-3 1 H5 M-3 5 H2" />
    </g>
  );
}

export function SupportJourneyStage() {
  return (
    <svg viewBox="0 0 920 280" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="s04-path" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fe8ef" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#13b8c6" />
          <stop offset="100%" stopColor="#50c98a" />
        </linearGradient>
        <filter id="s04-glow" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M36 188 C 140 188, 190 150, 280 158 S 430 210, 540 148 S 700 78, 880 96"
        fill="none"
        stroke="url(#s04-path)"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="url(#s04-glow)"
      />
      {[
        [80, 186],
        [300, 156],
        [540, 148],
        [840, 98],
      ].map(([x, y], i) => (
        <g key={x}>
          <circle cx={x} cy={y} r={10 + i * 2} fill="none" stroke="#f2fbfa" strokeWidth="1.4" opacity={0.4 + i * 0.15} />
          <circle cx={x} cy={y} r="4.5" fill="#f2fbfa" />
        </g>
      ))}
    </svg>
  );
}

export function DuneField() {
  return (
    <svg viewBox="0 0 1440 720" className="h-full w-full" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="s04-sun" cx="86%" cy="46%" r="28%">
          <stop offset="0%" stopColor="#d7fff4" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#50c98a" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#083d4a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="720" fill="#062832" />
      <circle cx="1240" cy="330" r="220" fill="url(#s04-sun)" />
      <path d="M0 520 C 220 470, 380 560, 620 500 S 980 430, 1440 480 L1440 720 L0 720 Z" fill="#083d4a" />
      <path d="M0 560 C 260 520, 480 610, 760 540 S 1100 500, 1440 560 L1440 720 L0 720 Z" fill="#0a4552" opacity="0.9" />
      <path d="M0 620 C 300 580, 540 660, 860 600 S 1180 580, 1440 640 L1440 720 L0 720 Z" fill="#051c22" />
    </svg>
  );
}

export function HumanChapterStage() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="s05-h" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9ee7ee" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#13b8c6" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${28 + i * 38} ${18 + i * 6})`}>
          <path
            d="M54 44c14 0 25-11 25-25S68 -6 54 -6 29 5 29 19 40 44 54 44Zm-38 78c6-28 20-42 38-42s32 14 38 42v14H16v-14Z"
            fill="url(#s05-h)"
            stroke="#13b8c6"
            strokeWidth="1.2"
            opacity={0.95 - i * 0.22}
          />
        </g>
      ))}
    </svg>
  );
}

export function PrivacyChapterStage() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="s05-p" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9f6e6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#13b8c6" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${88 + i * 28} ${36 + i * 8} L${128 + i * 28} ${50 + i * 8} V${88 + i * 8} C ${128 + i * 28} ${108 + i * 8}, ${108 + i * 28} ${120 + i * 8}, ${88 + i * 28} ${126 + i * 8} C ${68 + i * 28} ${120 + i * 8}, ${48 + i * 28} ${108 + i * 8}, ${48 + i * 28} ${88 + i * 8} V${50 + i * 8} Z`}
          fill="url(#s05-p)"
          stroke="#50c98a"
          strokeWidth="1.3"
          opacity={0.92 - i * 0.2}
        />
      ))}
    </svg>
  );
}

export function EvidenceChapterStage() {
  return (
    <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="s05-e" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e7fffb" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#13b8c6" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${24 + i * 28} ${22 + i * 10}) skewX(-12)`}>
          <rect
            width="92"
            height="92"
            rx="10"
            fill="url(#s05-e)"
            stroke="#13b8c6"
            strokeWidth="1.4"
            opacity={0.95 - i * 0.22}
          />
        </g>
      ))}
    </svg>
  );
}

export function ControlSystemStage() {
  const nodes = [
    { x: 110, y: 28, label: "Consent", icon: "note" },
    { x: 186, y: 78, label: "Sharing", icon: "share" },
    { x: 162, y: 176, label: "Research", icon: "chart" },
    { x: 58, y: 176, label: "Privacy", icon: "lock" },
    { x: 34, y: 78, label: "Access", icon: "people" },
  ] as const;

  return (
    <svg viewBox="0 0 220 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="s07-glow" cx="50%" cy="48%" r="42%">
          <stop offset="0%" stopColor="#50c98a" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#13b8c6" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#13b8c6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="96" fill="url(#s07-glow)" />
      {[36, 56, 76, 94].map((r, i) => (
        <circle
          key={r}
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke="var(--vascurra-grad-cyan)"
          strokeWidth="1"
          opacity={0.18 + i * 0.08}
        />
      ))}
      <circle cx="110" cy="110" r="28" fill="#e7fbf4" />
      <path d="M110 96c6.4 0 11.6-5 11.6-11.2S116.4 74 110 74s-11.6 4.9-11.6 10.8S103.6 96 110 96Zm-17.5 34c2.6-12 9-18.5 17.5-18.5s14.9 6.5 17.5 18.5v6H92.5v-6Z" fill="var(--vascurra-deep-teal)" />
      {nodes.map((node) => (
        <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
          <circle r="16" fill="#ffffff" stroke="#d4e8ea" strokeWidth="1.2" />
          <g transform="scale(0.72)">
            <NodeGlyph name={node.icon === "lock" ? "shield" : node.icon === "chart" ? "cal" : node.icon === "share" ? "people" : node.icon} />
          </g>
          <text
            y="28"
            textAnchor="middle"
            fill="var(--vascurra-deep-teal)"
            fontSize="8.5"
            fontWeight="600"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function PrincipleGlyph({ name }: { name: "shared" | "who" | "mind" | "research" }) {
  const stroke = "currentColor";
  if (name === "shared") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M9 8h6M9 12h6M9 16h3" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "who") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2.4" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M4 19c0-3.2 2.4-5 5-5s5 1.8 5 5M14 19c0-2.2 1.6-3.6 3.6-3.6" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "mind") {
    return (
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path d="M5 17V9M10 17V6M15 17v-5M20 17V8" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function PerspectiveGlyph({ name }: { name: string }) {
  const stroke = "currentColor";
  if (name === "people") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M5 20c1.2-4 3.6-6 7-6s5.8 2 7 6" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "families") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <circle cx="9" cy="8" r="2.8" fill="none" stroke={stroke} strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2.2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5M14 19c0-2 1.5-3.4 3.5-3.4" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "clinicians") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <path d="M9 4v6M7 6h4" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="15" cy="16" r="3.2" fill="none" stroke={stroke} strokeWidth="1.6" />
        <path d="M9 10c0 4 2 6 6 6" fill="none" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
      <path d="M5 17V9M10 17V6M15 17v-5M20 17V8" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
