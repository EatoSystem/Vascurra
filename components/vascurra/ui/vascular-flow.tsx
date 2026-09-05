import { useId } from "react";

/**
 * Vascular-flow motif. Homepage rule: use only in the hero, the
 * “Don’t replace capability” section, and the final CTA.
 */
export function VascularFlow({
  variant = "quiet",
  className = "",
}: {
  variant?: "quiet" | "single" | "mist" | "deep" | "band" | "footer";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gradientId = `vf-${uid}`;
  const isDark = variant === "deep" || variant === "footer" || variant === "single";
  const opacity = variant === "quiet" ? 0.28 : variant === "single" ? 0.45 : 0.38;

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
          <stop offset="28%" stopColor="var(--color-energy-mint)" stopOpacity="0.65" />
          <stop offset="58%" stopColor="var(--color-energy-teal)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g
        className="v-ambient"
        style={{
          animationName: "v-drift-slow",
          animationDuration: "32s",
          ["--v-rest-opacity" as string]: String(opacity),
        }}
      >
        {variant === "quiet" || variant === "single" ? (
          <>
            <path
              d="M-40 230 C 280 140, 520 300, 820 210 S 1200 120, 1500 240"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth={variant === "single" ? 2.2 : 18}
              strokeLinecap="round"
            />
            {variant === "quiet" ? (
              <circle cx="820" cy="210" r="3.2" fill="var(--color-energy-mint)" />
            ) : (
              <>
                <circle cx="420" cy="196" r="3.5" fill="var(--color-energy-mint)" />
                <circle cx="820" cy="210" r="3.5" fill="var(--color-energy-cyan)" />
                <circle cx="1120" cy="168" r="3" fill="var(--color-energy-mint)" />
              </>
            )}
          </>
        ) : (
          <>
            <path
              d="M-40 210 C 180 90, 320 300, 540 180 S 900 40, 1180 190 S 1380 310, 1500 220"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth={isDark ? 22 : 28}
              strokeLinecap="round"
            />
            <path
              d="M-20 260 C 200 320, 380 140, 620 250 S 980 360, 1500 200"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </g>
    </svg>
  );
}
