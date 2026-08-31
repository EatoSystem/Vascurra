/**
 * The signature vascular field that surrounds the Vascurra brain.
 *
 * Pure inline SVG driven by CSS keyframes — no animation library, no
 * JavaScript, nothing added to the client bundle, and nothing that could delay
 * the hero heading painting.
 *
 * Stage order follows spec §10 and docs/brand/motion-guidelines.md:
 *   0.0s particles gather
 *   0.8s fine vascular branches emerge and draw outward
 *   1.7s teal / cyan / mint ribbons flow in
 *   2.5s (the approved brain resolves — see BrainMark)
 *   3.3s luminous nodes illuminate, staggered
 *   4.2s a soft pulse travels the network
 *   then a slow ambient breath, no rotation
 *
 * Decorative throughout: it depicts energy and connection, never detection,
 * prediction or measurement of disease.
 */

/** Branches radiate outward from the centre so they read around the mark. */
const branches = [
  "M500 500 C 420 470, 350 430, 286 356",
  "M500 500 C 580 470, 650 430, 714 356",
  "M500 500 C 420 530, 350 570, 286 644",
  "M500 500 C 580 530, 650 570, 714 644",
  "M500 500 C 476 410, 462 330, 486 232",
  "M500 500 C 524 590, 538 670, 514 768",
  "M500 500 C 400 496, 316 486, 226 500",
  "M500 500 C 600 496, 684 486, 774 500",
  "M286 356 C 234 314, 186 294, 122 292",
  "M714 356 C 766 314, 814 294, 878 292",
  "M286 644 C 234 686, 186 706, 122 708",
  "M714 644 C 766 686, 814 706, 878 708",
];

const nodes = [
  { cx: 122, cy: 292, r: 5 },
  { cx: 878, cy: 292, r: 5 },
  { cx: 122, cy: 708, r: 4.5 },
  { cx: 878, cy: 708, r: 4.5 },
  { cx: 486, cy: 232, r: 5.5 },
  { cx: 514, cy: 768, r: 5 },
  { cx: 226, cy: 500, r: 4 },
  { cx: 774, cy: 500, r: 4 },
  { cx: 286, cy: 356, r: 3.5 },
  { cx: 714, cy: 356, r: 3.5 },
  { cx: 286, cy: 644, r: 3.5 },
  { cx: 714, cy: 644, r: 3.5 },
];

const particles = [
  { cx: 96, cy: 430, r: 3, dx: "-18px", dy: "12px" },
  { cx: 210, cy: 200, r: 2.4, dx: "-14px", dy: "-16px" },
  { cx: 392, cy: 118, r: 3.2, dx: "-4px", dy: "-20px" },
  { cx: 606, cy: 116, r: 2.6, dx: "6px", dy: "-18px" },
  { cx: 792, cy: 198, r: 3, dx: "16px", dy: "-14px" },
  { cx: 906, cy: 436, r: 2.5, dx: "20px", dy: "10px" },
  { cx: 892, cy: 612, r: 3.1, dx: "18px", dy: "14px" },
  { cx: 760, cy: 838, r: 2.4, dx: "10px", dy: "20px" },
  { cx: 574, cy: 892, r: 2.9, dx: "2px", dy: "22px" },
  { cx: 358, cy: 886, r: 2.5, dx: "-8px", dy: "20px" },
  { cx: 178, cy: 806, r: 3, dx: "-18px", dy: "16px" },
  { cx: 108, cy: 574, r: 2.3, dx: "-20px", dy: "6px" },
  { cx: 336, cy: 268, r: 1.9, dx: "-8px", dy: "-8px" },
  { cx: 668, cy: 742, r: 1.9, dx: "8px", dy: "8px" },
];

export function BrainField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 1000"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id="vf-branch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="52%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <linearGradient id="vf-ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
          <stop offset="42%" stopColor="var(--color-energy-teal)" stopOpacity="0.9" />
          <stop offset="72%" stopColor="var(--color-energy-cyan)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="vf-node">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-teal)" />
        </radialGradient>
      </defs>

      {/* Stage 3 — ribbons flow through the field, then drift on a slow breath. */}
      <g
        className="v-stage-ribbons v-anim"
        style={{
          animationName: "v-ribbon, v-breathe",
          animationDuration: "1.7s, 12s",
          animationDelay: "1.7s, 5.4s",
          animationIterationCount: "1, infinite",
          animationTimingFunction: "var(--ease-organic), ease-in-out",
          transformOrigin: "center",
          ["--v-opacity" as string]: "0.62",
        }}
      >
        <path
          d="M40 606 C 220 500, 360 690, 520 556 S 790 372, 962 452"
          fill="none"
          stroke="url(#vf-ribbon)"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <path
          d="M50 404 C 240 516, 372 282, 540 396 S 800 596, 952 516"
          fill="none"
          stroke="url(#vf-ribbon)"
          strokeWidth="19"
          strokeLinecap="round"
          opacity="0.72"
        />
        <path
          d="M84 682 C 260 640, 430 774, 618 692 S 856 578, 946 640"
          fill="none"
          stroke="url(#vf-ribbon)"
          strokeWidth="11"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>

      {/* Stage 2 — vascular branches draw outward from the centre. */}
      <g fill="none" stroke="url(#vf-branch)" strokeWidth="2.4" strokeLinecap="round">
        {branches.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="v-stage-branch v-anim"
            style={{
              strokeDasharray: 1,
              animationName: "v-draw",
              animationDuration: "1.5s",
              animationDelay: `${0.8 + i * 0.06}s`,
            }}
          />
        ))}
      </g>

      {/* Stage 6 — a soft pulse travels the network once, then settles. */}
      <g
        fill="none"
        stroke="var(--color-energy-cyan)"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.9"
      >
        {branches.slice(0, 8).map((d, i) => (
          <path
            key={`pulse-${d}`}
            d={d}
            pathLength={1}
            className="v-stage-pulse v-anim"
            style={{
              strokeDasharray: "0.14 0.86",
              animationName: "v-pulse-travel",
              animationDuration: "2.6s",
              animationDelay: `${4.2 + i * 0.08}s`,
              ["--v-opacity" as string]: "0",
            }}
          />
        ))}
      </g>

      {/* Stage 1 — particles gather. */}
      <g fill="var(--color-energy-teal)">
        {particles.map((p, i) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            className="v-stage-particle v-anim"
            style={{
              animationName: "v-gather",
              animationDuration: "1.5s",
              animationDelay: `${i * 0.055}s`,
              ["--v-dx" as string]: p.dx,
              ["--v-dy" as string]: p.dy,
              ["--v-opacity" as string]: "0.55",
            }}
          />
        ))}
      </g>

      {/* Stage 5 — nodes illuminate, then hold a slow glow cycle. */}
      <g fill="url(#vf-node)">
        {nodes.map((n, i) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            className="v-stage-node v-anim"
            style={{
              animationName: "v-ignite, v-node-glow",
              animationDuration: "1.2s, 9s",
              animationDelay: `${3.3 + i * 0.07}s, ${4.9 + i * 0.07}s`,
              animationIterationCount: "1, infinite",
              animationTimingFunction: "var(--ease-organic), ease-in-out",
              ["--v-r-min" as string]: `${n.r}`,
              ["--v-r-max" as string]: `${n.r * 1.8}`,
              ["--v-opacity" as string]: "0.85",
            }}
          />
        ))}
      </g>
    </svg>
  );
}
