"use client";

import { useId } from "react";
import { connectedSystem } from "@/content/home";

const CX = 460;
const CY = 368;
const ORBIT = 238;

function polar(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

export function LifeSystemGraphic() {
  const uid = useId().replace(/:/g, "");
  const factors = connectedSystem.factors;

  return (
    <svg
      viewBox="0 0 920 736"
      role="img"
      aria-label="A person at the centre of health, history, movement, sleep, routine, confidence, family and daily life"
      className="mx-auto h-auto w-full max-w-[52rem]"
    >
      <defs>
        <linearGradient id={`ls-ring-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="50%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <radialGradient id={`ls-core-${uid}`} cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#0c5462" />
          <stop offset="100%" stopColor="#083d4a" />
        </radialGradient>
        <filter id={`ls-soft-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle
        cx={CX}
        cy={CY}
        r="292"
        fill="none"
        stroke={`url(#ls-ring-${uid})`}
        strokeWidth="0.8"
        opacity="0.28"
      />
      <circle
        cx={CX}
        cy={CY}
        r={ORBIT}
        fill="none"
        stroke={`url(#ls-ring-${uid})`}
        strokeWidth="1.15"
        opacity="0.55"
      />
      <circle cx={CX} cy={CY} r="118" fill="#e8f7f6" opacity="0.7" />

      {factors.map((name, i) => {
        const angle = i * 45;
        const node = polar(angle, ORBIT);
        const label = polar(angle, 318);
        const inner = polar(angle, 92);
        return (
          <g key={name}>
            <path
              d={`M ${inner.x} ${inner.y} Q ${polar(angle, 160).x} ${polar(angle, 160).y} ${node.x} ${node.y}`}
              fill="none"
              stroke={`url(#ls-ring-${uid})`}
              strokeWidth="1.4"
              opacity="0.7"
            />
            <circle cx={node.x} cy={node.y} r="9" fill="#ffffff" stroke={`url(#ls-ring-${uid})`} strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r="3.2" fill="var(--color-energy-mint)" />
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#0b2b4a"
              fontSize="18"
              fontWeight="600"
              fontFamily="var(--font-sans)"
            >
              {name}
            </text>
          </g>
        );
      })}

      <g filter={`url(#ls-soft-${uid})`}>
        <circle cx={CX} cy={CY} r="74" fill={`url(#ls-core-${uid})`} />
      </g>
      <circle cx={CX} cy={CY} r="74" fill={`url(#ls-core-${uid})`} />
      <circle cx={CX} cy={CY - 18} r="14" fill="#f2fbfa" />
      <path
        d={`M ${CX - 28} ${CY + 38} C ${CX - 26} ${CY + 8}, ${CX - 16} ${CY + 2}, ${CX} ${CY + 2} C ${CX + 16} ${CY + 2}, ${CX + 26} ${CY + 8}, ${CX + 28} ${CY + 38} Z`}
        fill="#f2fbfa"
      />
      <text
        x={CX}
        y={CY + 98}
        textAnchor="middle"
        fill="#083d4a"
        fontSize="13"
        fontWeight="600"
        letterSpacing="0.28em"
        fontFamily="var(--font-sans)"
      >
        PERSON
      </text>
    </svg>
  );
}
