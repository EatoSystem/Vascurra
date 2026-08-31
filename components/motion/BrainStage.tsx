import { BrainMark } from "@/components/brand/BrainMark";
import { BrainAura } from "./BrainAura";
import { VascularField } from "./VascularField";
import type { BrainSlot } from "@/components/brand/brain-assets";

/**
 * Composes the full signature experience: the vascular field and luminous aura
 * around the approved Vascurra brain, which resolves at stage 4 and then holds
 * an ambient state.
 *
 * Server-rendered. The whole sequence is declarative CSS, so it costs zero
 * client JavaScript and cannot block the hero heading from painting.
 *
 * Structured so a Rive/Lottie/video asset can replace or augment the CSS/SVG
 * layers later without any layout change (spec §10).
 */
export function BrainStage({
  slot,
  tone = "light",
  priority = false,
  className = "",
}: {
  slot: BrainSlot;
  tone?: "light" | "deep";
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative isolate flex items-center justify-center ${className}`}
    >
      <BrainAura tone={tone} className="inset-[4%] -z-10" />
      <VascularField
        tone={tone}
        className="absolute inset-[-16%] -z-10 h-[132%] w-[132%]"
      />

      {/* Stage 4 — the approved mark resolves out of the field. */}
      <div
        className="v-stage-mark v-anim relative"
        style={{
          animationName: "v-resolve",
          animationDuration: "1.5s",
          animationDelay: "2.5s",
        }}
      >
        <BrainMark slot={slot} priority={priority} alt="" />
      </div>
    </div>
  );
}
