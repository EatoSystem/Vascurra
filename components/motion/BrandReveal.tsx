import { VascurraMark } from "@/components/brand/VascurraMark";
import { AmbientField } from "./AmbientField";

/**
 * Composes the signature Vascurra reveal: the ambient vascular field gathers,
 * grows and illuminates around the brand mark, which resolves at stage 4.
 *
 * Server-rendered. The entire sequence is declarative CSS, so it costs zero
 * client JavaScript and cannot block the hero heading from painting.
 */
export function BrandReveal({
  size = "hero",
  showCaption = true,
  className = "",
}: {
  size?: "hero" | "compact";
  showCaption?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative isolate flex items-center justify-center ${className}`}>
      {/* Soft luminous ground — keeps the field from reading as a flat drawing. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--color-teal-400)_24%,transparent),transparent_68%)]"
      />

      <AmbientField className="absolute inset-0 -z-10 h-full w-full" />

      {/* Stage 4 — the mark resolves out of the field. */}
      <div
        className="v-stage-mark v-anim"
        style={{
          animationName: "v-resolve",
          animationDuration: "1.4s",
          animationDelay: "2.6s",
        }}
      >
        <VascurraMark size={size} showCaption={showCaption} />
      </div>
    </div>
  );
}
