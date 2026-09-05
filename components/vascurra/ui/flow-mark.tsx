import { useId } from "react";

/** Abstract vascular-flow marks for middle sections — not the brain. */
export function FlowMark({
  variant,
  className = "",
}: {
  variant: "dots" | "arc" | "nodes" | "bars";
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const gid = `fm-${uid}`;
  return (
    <svg
      viewBox="0 0 160 88"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`h-20 w-36 ${className}`}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-energy-mint)" />
          <stop offset="55%" stopColor="var(--color-energy-teal)" />
          <stop offset="100%" stopColor="var(--color-energy-cyan)" />
        </linearGradient>
      </defs>
      {variant === "dots" ? (
        <>
          <path d="M8 52 C 40 18, 70 70, 152 34" stroke={`url(#${gid})`} strokeWidth="2" />
          <circle cx="28" cy="40" r="4" fill="var(--color-energy-mint)" />
          <circle cx="78" cy="48" r="4" fill="var(--color-energy-teal)" />
          <circle cx="128" cy="36" r="4" fill="var(--color-energy-cyan)" />
        </>
      ) : null}
      {variant === "arc" ? (
        <>
          <path d="M10 70 C 50 10, 110 10, 150 70" stroke={`url(#${gid})`} strokeWidth="2.2" />
          <path d="M24 70 C 55 28, 105 28, 136 70" stroke={`url(#${gid})`} strokeWidth="1.4" opacity="0.6" />
        </>
      ) : null}
      {variant === "nodes" ? (
        <>
          <path d="M20 64 C 48 20, 80 72, 140 28" stroke={`url(#${gid})`} strokeWidth="2" />
          <circle cx="20" cy="64" r="5" fill="var(--color-energy-mint)" />
          <circle cx="70" cy="44" r="5" fill="var(--color-energy-teal)" />
          <circle cx="140" cy="28" r="5" fill="var(--color-energy-cyan)" />
        </>
      ) : null}
      {variant === "bars" ? (
        <>
          <rect x="18" y="48" width="10" height="28" rx="3" fill="var(--color-energy-mint)" opacity="0.7" />
          <rect x="40" y="32" width="10" height="44" rx="3" fill="var(--color-energy-teal)" opacity="0.75" />
          <rect x="62" y="20" width="10" height="56" rx="3" fill="var(--color-energy-cyan)" opacity="0.7" />
          <rect x="84" y="36" width="10" height="40" rx="3" fill="var(--color-energy-teal)" opacity="0.65" />
          <rect x="106" y="28" width="10" height="48" rx="3" fill="var(--color-energy-mint)" opacity="0.7" />
        </>
      ) : null}
    </svg>
  );
}
