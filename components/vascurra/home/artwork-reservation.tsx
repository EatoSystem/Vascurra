import styles from "./homepage-scaffold.module.css";

type ArtworkReservationProps = {
  assetKey: string;
  brief: string;
  chapter: string;
  variant: "mission" | "system" | "layers" | "lab";
};

export function ArtworkReservation({ assetKey, brief, chapter, variant }: ArtworkReservationProps) {
  return (
    <figure
      className={`${styles.artworkReservation} ${styles[`artworkReservation${variant}`]}`}
      data-artwork-key={assetKey}
      aria-labelledby={`${assetKey}-caption`}
    >
      <div className={styles.artworkGuide} aria-hidden="true"><span /><span /><span /></div>
      <figcaption id={`${assetKey}-caption`} className={styles.artworkCaption}>
        <span>{chapter} artwork in development</span>
        <strong>{assetKey}</strong>
        <p>{brief}</p>
      </figcaption>
    </figure>
  );
}
