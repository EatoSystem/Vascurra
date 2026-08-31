/**
 * Soft radial light. The page's colour arrives as glow rather than as filled
 * panels — this is what separates "luminous" from "tinted".
 *
 * Uses the energy tier (spec §12) at low alpha, layered and blurred, per the
 * glow rules in §13: soft outer bloom and radial halo, never neon or flare.
 * Purely decorative and always hidden from assistive technology.
 */

type Tone = "mint" | "cyan" | "teal" | "dual";

const tones: Record<Tone, string> = {
  mint: "var(--color-energy-mint)",
  cyan: "var(--color-energy-cyan)",
  teal: "var(--color-energy-teal)",
  dual: "var(--color-energy-mint)",
};

export function BloomField({
  tone = "dual",
  intensity = 16,
  className = "",
}: {
  tone?: Tone;
  intensity?: number;
  className?: string;
}) {
  const primary = tones[tone];
  const secondary =
    tone === "dual" ? "var(--color-energy-cyan)" : "var(--color-energy-teal)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(closest-side at 34% 36%, color-mix(in srgb, ${primary} ${intensity}%, transparent), transparent 100%),
          radial-gradient(closest-side at 70% 64%, color-mix(in srgb, ${secondary} ${Math.round(intensity * 0.85)}%, transparent), transparent 100%)
        `,
      }}
    />
  );
}
