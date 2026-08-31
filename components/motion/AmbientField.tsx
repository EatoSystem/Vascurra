/**
 * Decorative vascular / neural field behind the brand mark.
 *
 * Entirely SVG + CSS: no animation library, no JavaScript, nothing to
 * hydrate, nothing added to the client bundle. Every element is inert and the
 * whole field is hidden from assistive technology — it carries no information,
 * so nothing is lost when it is not rendered or not animated.
 *
 * The reveal follows docs/brand/motion-guidelines.md:
 *   0.0s gather · 0.9s connect + grow · 1.8s form · 3.4s ignite · then breathe.
 *
 * Nothing here depicts detection, prediction or measurement of disease.
 */

const branches = [
  "M400 250 C 340 232, 292 206, 246 160",
  "M400 250 C 344 268, 300 300, 262 344",
  "M400 250 C 460 232, 508 206, 554 160",
  "M400 250 C 456 268, 500 300, 538 344",
  "M400 250 C 386 190, 380 140, 396 84",
  "M400 250 C 414 310, 420 360, 404 416",
  "M246 160 C 214 140, 186 132, 150 132",
  "M262 344 C 232 366, 206 376, 172 378",
  "M554 160 C 586 140, 614 132, 650 132",
  "M538 344 C 568 366, 594 376, 628 378",
];

/** Endpoints of the branch tree — these are the nodes that illuminate. */
const nodes = [
  { cx: 150, cy: 132, r: 3.5 },
  { cx: 172, cy: 378, r: 3 },
  { cx: 650, cy: 132, r: 3.5 },
  { cx: 628, cy: 378, r: 3 },
  { cx: 396, cy: 84, r: 4 },
  { cx: 404, cy: 416, r: 3.5 },
  { cx: 246, cy: 160, r: 2.5 },
  { cx: 262, cy: 344, r: 2.5 },
  { cx: 554, cy: 160, r: 2.5 },
  { cx: 538, cy: 344, r: 2.5 },
];

const particles = [
  { cx: 118, cy: 210, r: 2, dx: "-14px", dy: "10px" },
  { cx: 196, cy: 96, r: 1.6, dx: "-10px", dy: "-12px" },
  { cx: 314, cy: 60, r: 2.2, dx: "0px", dy: "-16px" },
  { cx: 486, cy: 62, r: 1.8, dx: "4px", dy: "-14px" },
  { cx: 606, cy: 96, r: 2, dx: "12px", dy: "-10px" },
  { cx: 684, cy: 214, r: 1.7, dx: "16px", dy: "8px" },
  { cx: 640, cy: 316, r: 2.1, dx: "14px", dy: "12px" },
  { cx: 500, cy: 430, r: 1.6, dx: "6px", dy: "16px" },
  { cx: 300, cy: 432, r: 2, dx: "-6px", dy: "16px" },
  { cx: 160, cy: 320, r: 1.8, dx: "-16px", dy: "12px" },
  { cx: 236, cy: 246, r: 1.5, dx: "-12px", dy: "0px" },
  { cx: 566, cy: 250, r: 1.5, dx: "12px", dy: "0px" },
];

export function AmbientField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id="v-branch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-mint-400)" />
          <stop offset="50%" stopColor="var(--color-teal-400)" />
          <stop offset="100%" stopColor="var(--color-cyan-400)" />
        </linearGradient>
        <linearGradient id="v-ribbon-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-mint-400)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--color-teal-400)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--color-cyan-400)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="v-node">
          <stop offset="0%" stopColor="var(--color-mint-400)" />
          <stop offset="100%" stopColor="var(--color-teal-400)" />
        </radialGradient>
      </defs>

      {/* Stage 4 — ribbons weave through the field. */}
      <g
        className="v-stage-ribbons v-anim"
        style={{
          animationName: "v-ribbon, v-drift",
          animationDuration: "1.6s, 14s",
          animationDelay: "1.8s, 3.4s",
          animationIterationCount: "1, infinite",
          animationTimingFunction: "var(--ease-organic), ease-in-out",
          ["--v-opacity" as string]: "0.62",
        }}
      >
        <path
          d="M40 300 C 200 210, 320 380, 480 268 S 700 150, 780 214"
          fill="none"
          stroke="url(#v-ribbon-a)"
          strokeWidth="30"
          strokeLinecap="round"
        />
        <path
          d="M20 190 C 190 268, 330 108, 500 196 S 690 320, 786 268"
          fill="none"
          stroke="url(#v-ribbon-a)"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.7"
        />
      </g>

      {/* Stages 2 and 3 — filaments connect, then vascular branches grow. */}
      <g
        fill="none"
        stroke="url(#v-branch)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="1"
      >
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
              animationDelay: `${0.9 + i * 0.07}s`,
            }}
          />
        ))}
      </g>

      {/* Stage 1 — particles gather. */}
      <g fill="var(--color-teal-400)">
        {particles.map((p, i) => (
          <circle
            key={`${p.cx}-${p.cy}`}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            className="v-stage-particle v-anim"
            style={{
              animationName: "v-gather",
              animationDuration: "1.4s",
              animationDelay: `${i * 0.06}s`,
              ["--v-dx" as string]: p.dx,
              ["--v-dy" as string]: p.dy,
              ["--v-opacity" as string]: "0.8",
            }}
          />
        ))}
      </g>

      {/* Stage 5 — nodes illuminate, then settle into a slow breath. */}
      <g fill="url(#v-node)">
        {nodes.map((n, i) => (
          <circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            className="v-stage-node v-anim"
            style={{
              animationName: "v-ignite, v-breathe",
              animationDuration: "1.1s, 11s",
              animationDelay: `${3.4 + i * 0.08}s, ${4.8 + i * 0.08}s`,
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
