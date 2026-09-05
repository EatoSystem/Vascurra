/**
 * Atmospheric light. The page's colour arrives as glow rather than as filled
 * panels — this is what separates "luminous" from "tinted".
 *
 * Three stacked, blurred radial layers rather than one flat wash: a single
 * low-opacity gradient over near-white reads as a compression artefact, which
 * was a real failure of the previous pass. Spec §13: soft outer bloom and
 * radial halo, never neon or flare.
 *
 * Purely decorative and always hidden from assistive technology.
 */

type Tone = "mint" | "cyan" | "teal" | "dual" | "deep";

const palettes: Record<Tone, [string, string, string]> = {
  mint: ["var(--color-energy-mint)", "var(--color-energy-teal)", "var(--color-energy-mint)"],
  cyan: ["var(--color-energy-cyan)", "var(--color-energy-teal)", "var(--color-energy-cyan)"],
  teal: ["var(--color-energy-teal)", "var(--color-energy-mint)", "var(--color-energy-cyan)"],
  dual: ["var(--color-energy-mint)", "var(--color-energy-cyan)", "var(--color-energy-teal)"],
  deep: ["var(--color-energy-teal)", "var(--color-energy-cyan)", "var(--color-energy-mint)"],
};

export function BloomField({
  tone = "dual",
  intensity = 26,
  className = "",
}: {
  tone?: Tone;
  intensity?: number;
  className?: string;
}) {
  const [a, b, c] = palettes[tone];
  const mid = Math.round(intensity * 0.72);
  const low = Math.round(intensity * 0.5);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-[-15%] blur-3xl"
        style={{
          backgroundImage: `radial-gradient(closest-side at 30% 32%, color-mix(in srgb, ${a} ${intensity}%, transparent), transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-[-20%] blur-3xl"
        style={{
          backgroundImage: `radial-gradient(closest-side at 74% 62%, color-mix(in srgb, ${b} ${mid}%, transparent), transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-[-10%] blur-2xl"
        style={{
          backgroundImage: `radial-gradient(closest-side at 52% 88%, color-mix(in srgb, ${c} ${low}%, transparent), transparent 100%)`,
        }}
      />
    </div>
  );
}
