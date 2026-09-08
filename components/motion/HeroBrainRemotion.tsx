"use client";

import { useEffect, useState } from "react";
import { Player } from "@remotion/player";
import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { BrainStage } from "./BrainStage";
import { brainSizing } from "@/components/brand/brain-assets";

const DURATION = 240;
const FPS = 30;

const nodes = [
  { left: "13%", top: "37%", size: 10, phase: 0, color: "#2ecfc4" },
  { left: "25%", top: "14%", size: 7, phase: 36, color: "#43d6ff" },
  { left: "76%", top: "19%", size: 9, phase: 72, color: "#49c768" },
  { left: "85%", top: "48%", size: 6, phase: 108, color: "#2ecfc4" },
  { left: "70%", top: "81%", size: 8, phase: 144, color: "#43d6ff" },
  { left: "19%", top: "73%", size: 6, phase: 180, color: "#49c768" },
] as const;

function LivingBrainComposition() {
  const frame = useCurrentFrame();
  const loopFrame = frame % DURATION;
  const driftY = interpolate(loopFrame, [0, 60, 120, 180, 239], [2, -5, 0, 4, 2]);
  const entrance = interpolate(loopFrame, [0, 32], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#ffffff", overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          opacity: interpolate(loopFrame, [0, 60, 120, 180, 239], [0.34, 0.62, 0.4, 0.68, 0.34]),
          scale: interpolate(loopFrame, [0, 60, 120, 180, 239], [0.96, 1.035, 0.98, 1.02, 0.96]),
          background: "radial-gradient(circle at 50% 49%, rgba(46,207,196,.28) 0%, rgba(67,214,255,.12) 34%, rgba(255,255,255,0) 68%)",
        }}
      />

      {nodes.map((node) => {
        const pulseFrame = (loopFrame + node.phase) % 120;
        return (
          <div
            key={`${node.left}-${node.top}`}
            style={{
              position: "absolute",
              left: node.left,
              top: node.top,
              width: node.size,
              height: node.size,
              borderRadius: "50%",
              backgroundColor: node.color,
              opacity: interpolate(pulseFrame, [0, 30, 72, 119], [0.16, 0.7, 0.28, 0.16]),
              scale: interpolate(pulseFrame, [0, 30, 72, 119], [0.8, 1.35, 0.92, 0.8]),
              boxShadow: `0 0 ${node.size * 2}px ${node.color}`,
            }}
          />
        );
      })}

      <Img
        src={staticFile("vascurra/brain/vascurra-brain-hero.webp")}
        pauseWhenLoading={false}
        style={{
          position: "absolute",
          inset: "10%",
          width: "80%",
          height: "80%",
          objectFit: "contain",
          opacity: interpolate(entrance, [0, 1], [0.82, 1]),
          filter: `drop-shadow(0 18px 32px rgba(8,116,134,${interpolate(loopFrame, [0, 120, 239], [0.12, 0.25, 0.12])}))`,
          scale: interpolate(loopFrame, [0, 60, 120, 180, 239], [0.995, 1.012, 1, 1.008, 0.995]),
          translate: `0px ${driftY}px`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "15%",
          bottom: "15%",
          width: "26%",
          borderRadius: "50%",
          opacity: interpolate(loopFrame, [18, 54, 86], [0, 0.2, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          translate: `${interpolate(loopFrame, [18, 86], [-30, 390], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}% 0px`,
          rotate: "14deg",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,.9), transparent)",
          filter: "blur(18px)",
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
}

export function HeroBrainRemotion() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reducedMotion) {
    return <BrainStage slot="hero" field="quiet" priority />;
  }

  return (
    <div aria-hidden="true" className={`relative aspect-square ${brainSizing.hero.className}`}>
      <Player
        component={LivingBrainComposition}
        durationInFrames={DURATION}
        compositionWidth={1024}
        compositionHeight={1024}
        fps={FPS}
        autoPlay
        loop
        controls={false}
        clickToPlay={false}
        acknowledgeRemotionLicense
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
