/**
 * The vascular field surrounding the approved brain: the reveal choreography
 * and the settled ambient state, entirely in inline SVG driven by CSS
 * keyframes. No animation library, no JavaScript, nothing added to the client
 * bundle, and nothing that can delay the hero heading painting.
 *
 * Reveal (spec §10, motion-guidelines):
 *   0.0s  particles gather from the outer field
 *   0.8s  vascular branches draw outward (pathLength="1")
 *   1.7s  teal / mint / cyan ribbons flow in
 *   2.5s  the approved brain resolves (see BrainMark)
 *   3.3s  luminous nodes illuminate, staggered
 *   4.2s  a soft pulse travels the network
 *   4.8s  settles
 *
 * Ambient cycles are deliberately asynchronous — 8s ribbons, 13s travelling
 * light, 22s particle drift, 4-8s staggered nodes — so nothing peaks together.
 *
 * Decorative throughout, and hidden from assistive technology: it depicts
 * energy and connection, never detection, prediction or measurement of disease.
 */

const branches = [
  "M500 500 C 424 472, 356 434, 292 362",
  "M500 500 C 576 472, 644 434, 708 362",
  "M500 500 C 424 528, 356 566, 292 638",
  "M500 500 C 576 528, 644 566, 708 638",
  "M500 500 C 478 414, 466 336, 488 240",
  "M500 500 C 522 586, 534 664, 512 760",
  "M500 500 C 406 496, 326 488, 238 500",
  "M500 500 C 594 496, 674 488, 762 500",
  "M292 362 C 242 322, 196 302, 134 300",
  "M708 362 C 758 322, 804 302, 866 300",
  "M292 638 C 242 678, 196 698, 134 700",
  "M708 638 C 758 678, 804 698, 866 700",
  "M488 240 C 470 190, 452 158, 418 126",
  "M512 760 C 530 810, 548 842, 582 874",
];

/** Endpoints of the branch tree — the nodes that illuminate. */
const nodes = [
  { cx: 134, cy: 300, r: 5.5 },
  { cx: 866, cy: 300, r: 5.5 },
  { cx: 134, cy: 700, r: 5 },
  { cx: 866, cy: 700, r: 5 },
  { cx: 418, cy: 126, r: 6 },
  { cx: 582, cy: 874, r: 5.5 },
  { cx: 238, cy: 500, r: 4.5 },
  { cx: 762, cy: 500, r: 4.5 },
  { cx: 292, cy: 362, r: 3.5 },
  { cx: 708, cy: 362, r: 3.5 },
  { cx: 292, cy: 638, r: 3.5 },
  { cx: 708, cy: 638, r: 3.5 },
];

const particles = [
  { cx: 88, cy: 424, r: 3.2, dx: "-20px", dy: "14px" },
  { cx: 206, cy: 190, r: 2.5, dx: "-15px", dy: "-18px" },
  { cx: 388, cy: 104, r: 3.4, dx: "-5px", dy: "-22px" },
  { cx: 612, cy: 102, r: 2.7, dx: "7px", dy: "-20px" },
  { cx: 798, cy: 188, r: 3.1, dx: "18px", dy: "-15px" },
  { cx: 916, cy: 430, r: 2.6, dx: "22px", dy: "11px" },
  { cx: 902, cy: 618, r: 3.2, dx: "20px", dy: "15px" },
  { cx: 768, cy: 846, r: 2.5, dx: "11px", dy: "22px" },
  { cx: 578, cy: 906, r: 3, dx: "3px", dy: "24px" },
  { cx: 352, cy: 900, r: 2.6, dx: "-9px", dy: "22px" },
  { cx: 172, cy: 814, r: 3.1, dx: "-20px", dy: "17px" },
  { cx: 100, cy: 580, r: 2.4, dx: "-22px", dy: "7px" },
  { cx: 330, cy: 262, r: 2, dx: "-9px", dy: "-9px" },
  { cx: 674, cy: 748, r: 2, dx: "9px", dy: "9px" },
  { cx: 640, cy: 246, r: 1.8, dx: "10px", dy: "-8px" },
  { cx: 356, cy: 756, r: 1.8, dx: "-10px", dy: "8px" },
];

/** Paths that occasionally carry a travelling light in the settled state. */
const travelPaths = [0, 3, 5, 7];

export function VascularField({
  tone = "light",
  intensity = "full",
  className = "",
}: {
  tone?: "light" | "deep";
  intensity?: "full" | "quiet";
  className?: string;
}) {
  const uid = `${tone}-${intensity}`;
  const quiet = intensity === "quiet";
  const visibleBranches = quiet ? branches.slice(0, 6) : branches;
  const visibleNodes = quiet ? nodes.slice(0, 5) : nodes;
  const visibleParticles = quiet ? particles.slice(0, 6) : particles;
  const branchOpacity = quiet ? 0.45 : tone === "deep" ? 0.85 : 0.95;
  const ribbonOpacity = quiet ? "0.28" : tone === "deep" ? "0.5" : "0.6";

  return (
    <svg
      viewBox="0 0 1000 1000"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id={`vf-branch-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="52%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
        <linearGradient id={`vf-ribbon-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--color-energy-teal)" stopOpacity="0.9" />
          <stop offset="74%" stopColor="var(--color-energy-cyan)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`vf-node-${uid}`}>
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="100%" stopColor="var(--color-energy-teal)" />
        </radialGradient>
      </defs>

      {/* Stage 3 — ribbons flow in, then hold a slow shimmer and drift. */}
      <g
        className="v-stage-ribbons v-anim"
        style={{
          animationName: "v-ribbon, v-shimmer, v-drift-slow",
          animationDuration: "1.7s, 8s, 22s",
          animationDelay: "1.7s, 5.2s, 5.2s",
          animationIterationCount: "1, infinite, infinite",
          animationTimingFunction: "var(--ease-organic), ease-in-out, ease-in-out",
          transformOrigin: "center",
          ["--v-opacity" as string]: ribbonOpacity,
        }}
      >
        <path
          d="M30 610 C 220 494, 366 700, 528 552 S 800 366, 972 448"
          fill="none"
          stroke={`url(#vf-ribbon-${uid})`}
          strokeWidth={quiet ? 18 : 34}
          strokeLinecap="round"
        />
        {quiet ? null : (
          <>
            <path
              d="M40 396 C 236 512, 380 286, 548 404 S 806 594, 962 512"
              fill="none"
              stroke={`url(#vf-ribbon-${uid})`}
              strokeWidth="22"
              strokeLinecap="round"
              opacity="0.78"
            />
            <path
              d="M74 690 C 262 646, 434 780, 622 700 S 862 588, 950 646"
              fill="none"
              stroke={`url(#vf-ribbon-${uid})`}
              strokeWidth="13"
              strokeLinecap="round"
              opacity="0.6"
            />
          </>
        )}
      </g>

      {/* Stage 2 — vascular branches draw outward from the centre. */}
      <g
        fill="none"
        stroke={`url(#vf-branch-${uid})`}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity={branchOpacity}
      >
        {visibleBranches.map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="v-stage-branch v-anim"
            style={{
              strokeDasharray: 1,
              animationName: "v-draw",
              animationDuration: "1.5s",
              animationDelay: `${0.8 + i * 0.055}s`,
            }}
          />
        ))}
      </g>

      {/* Stage 6 — one pulse travels the network, then an occasional
          travelling light on selected paths (13s cycle, long dark interval). */}
      <g
        fill="none"
        stroke="var(--color-energy-cyan)"
        strokeWidth="3.4"
        strokeLinecap="round"
      >
        {(quiet ? visibleBranches.slice(0, 2) : branches.slice(0, 8)).map((d, i) => (
          <path
            key={`pulse-${d}`}
            d={d}
            pathLength={1}
            className="v-stage-pulse v-anim"
            style={{
              strokeDasharray: "0.15 0.85",
              animationName: "v-pulse-travel",
              animationDuration: "2.6s",
              animationDelay: `${4.2 + i * 0.08}s`,
              ["--v-opacity" as string]: "0",
            }}
          />
        ))}
        {(quiet ? [] : travelPaths).map((idx, i) => (
          <path
            key={`travel-${idx}`}
            d={branches[idx]}
            pathLength={1}
            className="v-ambient"
            style={{
              strokeDasharray: "0.1 0.9",
              animationName: "v-travel",
              animationDuration: "13s",
              animationDelay: `${6 + i * 3.1}s`,
              ["--v-rest-opacity" as string]: "0",
            }}
          />
        ))}
      </g>

      {/* Stage 1 — particles gather, then drift very slowly at the periphery. */}
      <g
        className="v-ambient"
        fill="var(--color-energy-teal)"
        style={{
          animationName: "v-drift-slow",
          animationDuration: "22s",
          animationDelay: "3s",
          ["--v-rest-opacity" as string]: "1",
        }}
      >
        {visibleParticles.map((p, i) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            className="v-stage-particle v-anim"
            style={{
              animationName: "v-gather",
              animationDuration: "1.5s",
              animationDelay: `${i * 0.05}s`,
              ["--v-dx" as string]: p.dx,
              ["--v-dy" as string]: p.dy,
              ["--v-opacity" as string]: tone === "deep" ? "0.7" : "0.55",
            }}
          />
        ))}
      </g>

      {/* Stage 5 — nodes illuminate, then hold staggered 4-8s glow cycles. */}
      <g fill={`url(#vf-node-${uid})`}>
        {visibleNodes.map((n, i) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            className="v-stage-node v-anim"
            style={{
              animationName: "v-ignite, v-node-glow",
              animationDuration: `1.2s, ${4 + (i % 5)}s`,
              animationDelay: `${3.3 + i * 0.07}s, ${5 + i * 0.42}s`,
              animationIterationCount: "1, infinite",
              animationTimingFunction: "var(--ease-organic), ease-in-out",
              ["--v-r-min" as string]: `${n.r}`,
              ["--v-r-max" as string]: `${n.r * 1.7}`,
              ["--v-opacity" as string]: "0.85",
            }}
          />
        ))}
      </g>
    </svg>
  );
}
