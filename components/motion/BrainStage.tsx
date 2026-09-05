import { BrainMark } from "@/components/brand/BrainMark";
import { BrainAura } from "./BrainAura";
import { VascularField } from "./VascularField";
import type { BrainSlot } from "@/components/brand/brain-assets";

/**
 * Canonical brain mark with optional quiet field.
 * The brain should read as floating — flow is an accent, not wallpaper.
 */
export function BrainStage({
  slot,
  tone = "light",
  priority = false,
  field = "quiet",
  className = "",
}: {
  slot: BrainSlot;
  tone?: "light" | "deep";
  priority?: boolean;
  field?: "full" | "quiet" | "none";
  className?: string;
}) {
  return (
    <div
      className={`relative isolate flex items-center justify-center ${className}`}
    >
      <BrainAura
        tone={tone}
        className={field === "none" ? "inset-[18%] -z-10 opacity-70" : "inset-[10%] -z-10"}
      />
      {field === "none" ? null : (
        <VascularField
          tone={tone}
          intensity={field === "full" ? "full" : "quiet"}
          className="absolute inset-[-6%] -z-10 h-[112%] w-[112%]"
        />
      )}

      <div
        className="v-stage-mark v-anim relative"
        style={{
          animationName: "v-resolve",
          animationDuration: "1.5s",
          animationDelay: "0.4s",
        }}
      >
        <BrainMark slot={slot} priority={priority} alt="" />
      </div>
    </div>
  );
}
