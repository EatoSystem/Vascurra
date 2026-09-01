import { useId } from "react";

/**
 * Reusable vascular-flow motif: branching paths, soft ribbons, quiet nodes.
 * Decorative only — never the sole carrier of meaning.
 */
export function VascularFlow({
  variant = "band",
  className = "",
}: {
  variant?: "band" | "mist" | "deep" | "footer";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const opacity = variant === "deep" || variant === "footer" ? 0.55 : 0.42;
  const gradientId = `vf-${uid}`;

  return (
    <svg
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-x-0 h-[min(420px,55%)] w-full ${
        variant === "footer" ? "bottom-0" : "top-0"
      } ${className}`}
      style={{ opacity }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" stopOpacity="0" />
          <stop offset="22%" stopColor="var(--color-energy-mint)" stopOpacity="0.7" />
          <stop offset="55%" stopColor="var(--color-energy-teal)" stopOpacity="0.65" />
          <stop offset="82%" stopColor="var(--color-energy-cyan)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g
        className="v-ambient"
        style={{
          animationName: "v-drift-slow",
          animationDuration: "28s",
          ["--v-rest-opacity" as string]: String(opacity),
        }}
      >
        <path
          d="M-40 210 C 180 90, 320 300, 540 180 S 900 40, 1180 190 S 1380 310, 1500 220"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={variant === "mist" ? 46 : 28}
          strokeLinecap="round"
        />
        <path
          d="M-20 260 C 200 320, 380 140, 620 250 S 980 360, 1500 200"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M120 300 C 260 240, 310 180, 400 170"
          fill="none"
          stroke="var(--color-energy-teal)"
          strokeWidth="1.4"
          opacity="0.55"
        />
        <circle cx="400" cy="170" r="3.5" fill="var(--color-energy-mint)" />
        <circle cx="720" cy="155" r="3" fill="var(--color-energy-cyan)" />
        <circle cx="1040" cy="205" r="3.2" fill="var(--color-energy-mint)" />
      </g>
    </svg>
  );
}
