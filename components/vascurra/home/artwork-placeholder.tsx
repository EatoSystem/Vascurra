import type { ReactNode } from "react";
import styles from "./homepage-scaffold.module.css";

export type ArtworkPlaceholderVariant = "portrait" | "landscape" | "wide" | "immersive";

export function ArtworkPlaceholder({
  description,
  variant,
  tone = "light",
  className = "",
  children,
}: {
  description: string;
  variant: ArtworkPlaceholderVariant;
  tone?: "light" | "deep";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.artwork} ${styles[variant]} ${styles[`${tone}Artwork`]} ${className}`}
      data-artwork-placeholder={variant}
    >
      <span className={styles.artworkRule} />
      <span className={styles.artworkLabel}>Artwork to follow</span>
      <span className={styles.artworkDescription}>{description}</span>
      {children}
    </div>
  );
}
