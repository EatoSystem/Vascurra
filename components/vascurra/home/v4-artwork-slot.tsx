import Image from "next/image";
import styles from "./v4-artwork-slot.module.css";

export type V4ArtworkSource = {
  alt: string;
  height: number;
  kind: "raster" | "svg";
  src: string;
  width: number;
};

type V4ArtworkSlotProps = {
  sizes: string;
  slot: "mission-flow" | "vascurra-system" | "veya-flow" | "support-flow" | "lab-trust-lived-evidence";
  source: V4ArtworkSource;
};

export function V4ArtworkSlot({
  sizes,
  slot,
  source,
}: V4ArtworkSlotProps) {
  return (
    <figure
      className={styles.slot}
      data-artwork-slot={slot}
    >
      <Image
        alt={source.alt}
        className={styles.image}
        height={source.height}
        sizes={sizes}
        src={source.src}
        unoptimized={source.kind === "svg"}
        width={source.width}
      />
    </figure>
  );
}

export const v4Artwork = {
  mission: {
    alt: "Three flowing Vascurra streams converging toward a future pathway, representing help today, continuous learning and insights for tomorrow.",
    height: 941,
    kind: "raster",
    src: "/vascurra/homepage/v4/mission-flow.png",
    width: 1672,
  },
  system: {
    alt: "Vascurra system visual connecting personal, family, clinician and research perspectives through a continuous learning model.",
    height: 941,
    kind: "raster",
    src: "/vascurra/homepage/v4/vascurra-system.png",
    width: 1672,
  },
  veya: {
    alt: "Questions flowing through Veya into clearer context, relevant evidence, practical options and greater understanding.",
    height: 941,
    kind: "raster",
    src: "/vascurra/homepage/v4/veya-flow.png",
    width: 1672,
  },
  support: {
    alt: "AI and compute, research, systems development and co-design converging to support accelerated learning.",
    height: 941,
    kind: "raster",
    src: "/vascurra/homepage/v4/support-flow.png",
    width: 1672,
  },
  labTrust: {
    alt: "Lived experience and research evidence flowing toward a shared learning point while their distinct sources remain visible.",
    height: 941,
    kind: "raster",
    src: "/vascurra/homepage/v4/lab-trust-lived-evidence.png",
    width: 1672,
  },
} satisfies Record<string, V4ArtworkSource>;
