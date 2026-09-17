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
  description: string;
  label: string;
  ratio?: "landscape" | "square";
  slot: "mission-flow" | "vascurra-system" | "veya-flow" | "support-flow";
  source?: V4ArtworkSource;
};

export function V4ArtworkSlot({
  description,
  label,
  ratio = "landscape",
  slot,
  source,
}: V4ArtworkSlotProps) {
  const assetPath = `/public/vascurra/homepage/v4/${slot}`;

  return (
    <figure
      className={`${styles.slot} ${styles[ratio]} ${source ? styles.ready : styles.pending}`}
      data-artwork-slot={slot}
    >
      {source ? (
        <Image
          alt={source.alt}
          className={styles.image}
          height={source.height}
          priority={false}
          sizes="(max-width: 639px) 100vw, (max-width: 1199px) 88vw, 52vw"
          src={source.src}
          unoptimized={source.kind === "svg"}
          width={source.width}
        />
      ) : (
        <div className={styles.pendingMessage}>
          <span>Final artwork reserved</span>
          <strong>{label}</strong>
          <small>{assetPath}</small>
        </div>
      )}
      <figcaption className={styles.visuallyHidden}>{description}</figcaption>
    </figure>
  );
}
