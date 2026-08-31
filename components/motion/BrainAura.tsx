/**
 * The luminous halo around the approved brain.
 *
 * Three stacked radial layers on independent, deliberately co-prime cycles
 * (7s / 9s / 11s) so the glow never pulses in lockstep. Opacity and a maximum
 * 1.2% scale only — no rotation, no positional drift (spec §10).
 *
 * Sits behind the mark and never alters it.
 */
export function BrainAura({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "deep";
  className?: string;
}) {
  const strength = tone === "deep" ? [30, 24, 18] : [22, 17, 12];

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div
        className="v-ambient absolute inset-0 rounded-full blur-2xl"
        style={{
          background: `radial-gradient(closest-side, color-mix(in srgb, var(--color-energy-mint) ${strength[0]}%, transparent), transparent 100%)`,
          animationName: "v-breathe-glow",
          animationDuration: "7s",
          ["--v-rest-opacity" as string]: "0.6",
        }}
      />
      <div
        className="v-ambient absolute inset-[-12%] rounded-full blur-3xl"
        style={{
          background: `radial-gradient(closest-side, color-mix(in srgb, var(--color-energy-cyan) ${strength[1]}%, transparent), transparent 100%)`,
          animationName: "v-halo-vary",
          animationDuration: "9s",
          animationDelay: "1.4s",
          ["--v-rest-opacity" as string]: "0.5",
        }}
      />
      <div
        className="v-ambient absolute inset-[6%] rounded-full blur-xl"
        style={{
          background: `radial-gradient(closest-side, color-mix(in srgb, var(--color-energy-teal) ${strength[2]}%, transparent), transparent 100%)`,
          animationName: "v-shimmer",
          animationDuration: "11s",
          animationDelay: "2.7s",
          ["--v-rest-opacity" as string]: "0.45",
        }}
      />
    </div>
  );
}
