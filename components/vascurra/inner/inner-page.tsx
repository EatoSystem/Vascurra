import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { PersonalArtwork } from "@/content/personal";
import styles from "./personal-page.module.css";

export function VascurraHeadline({ as: Tag = "h2", lines, accent, id, align = "left", className = "" }: { as?: "h1" | "h2"; lines: readonly string[]; accent?: string; id?: string; align?: "left" | "center"; className?: string }) {
  return <Tag id={id} className={`${styles.headline} ${align === "center" ? styles.centerHeadline : ""} ${className}`}>{lines.map((line) => <span className={line === accent ? styles.gradient : undefined} key={line}>{line}</span>)}</Tag>;
}

export function ArtworkToFollow({ artwork, className = "" }: { artwork: PersonalArtwork; className?: string }) {
  return <aside className={`${styles.artwork} ${className}`} style={{ "--art-ratio": artwork.aspectRatio, "--art-mobile-ratio": artwork.mobileAspectRatio } as CSSProperties} aria-label={`Artwork to follow: ${artwork.title}`} data-artwork-key={artwork.assetKey}>
    <div className={styles.artworkThread} aria-hidden="true" />
    <div className={styles.artworkLabel}><strong>Artwork to follow</strong><span>{artwork.title}</span><small>{artwork.aspectRatio.replaceAll(" ", "")} · {artwork.assetKey}</small></div>
  </aside>;
}

export function CTAGroup({ children, label = "Next steps", align = "left" }: { children: ReactNode; label?: string; align?: "left" | "center" }) {
  return <nav aria-label={label} className={`${styles.ctaGroup} ${align === "center" ? styles.centerCtas : ""}`}>{children}</nav>;
}

export function CTA({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`${styles.cta} ${secondary ? styles.secondaryCta : ""}`} href={href}>{children}</Link>;
}

export function SafetyBoundary({ children }: { children: ReactNode }) {
  return <p className={styles.safety}>{children}</p>;
}

export function NextChapter({ eyebrow, headline, body, href, cta }: { eyebrow: string; headline: readonly string[]; body: string; href: string; cta: string }) {
  return <section className={styles.nextChapter} aria-labelledby="next-chapter-heading"><div className={styles.shell}><p className={styles.eyebrow}>{eyebrow}</p><div className={styles.nextGrid}><VascurraHeadline id="next-chapter-heading" lines={headline} /><div><p className={styles.nextBody}>{body}</p><Link className={styles.nextLink} href={href}>{cta}<span aria-hidden="true"> →</span></Link></div></div></div></section>;
}
