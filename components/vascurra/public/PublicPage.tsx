import Link from "next/link";
import type { ReactNode } from "react";
import type { PublicPageContent } from "@/content/vascurra/public-site";
import styles from "./public-page.module.css";

function ArtworkToFollow({ artwork }: { artwork: NonNullable<PublicPageContent["artwork"]> }) {
  return (
    <aside className={styles.artwork} aria-label={`Artwork placeholder: ${artwork.title}`} data-artwork-key={artwork.assetKey}>
      <div className={styles.artworkMeta}>
        <strong>Artwork to follow</strong>
        <span>{artwork.purpose}</span>
        <span className={styles.artworkDetails}>{artwork.format} · Mobile: {artwork.mobileFormat}<br />Asset key: {artwork.assetKey} · {artwork.status}</span>
      </div>
    </aside>
  );
}

export function PublicPage({ page, children }: { page: PublicPageContent; children?: ReactNode }) {
  return (
    <main id="main" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{page.eyebrow}</p>
            <h1 className={styles.title}>{page.title.map((line) => <span key={line} className={line === page.accent ? styles.accent : undefined}>{line}</span>)}</h1>
            <p className={styles.lead}>{page.lead}</p>
            {page.qualifier ? <p className={styles.qualifier}>{page.qualifier}</p> : null}
          </div>
          {page.artwork ? <ArtworkToFollow artwork={page.artwork} /> : null}
          {children ? <div className={styles.formWrap}>{children}</div> : null}
        </div>
      </header>

      {page.sections.map((section) => (
        <section key={section.eyebrow} className={`${styles.section} ${section.tone === "deep" ? styles.deep : ""}`}>
          <div className={`${styles.inner} ${styles.sectionGrid}`}>
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>{section.eyebrow}</p>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.body.length ? <div className={styles.body}>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : null}
            </div>
            {section.items ? <ul className={styles.items}>{section.items.map((item) => <li className={styles.item} key={item.title}><h3>{item.title}</h3><p>{item.body}</p></li>)}</ul> : null}
          </div>
        </section>
      ))}

      <section className={styles.closing} aria-label="Next steps">
        <div className={styles.inner}>
          <p className={styles.closingText}>{page.closing}</p>
          <nav className={styles.ctas} aria-label="Related pages">{page.ctas.map((cta) => <Link className={styles.cta} href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav>
        </div>
      </section>
    </main>
  );
}
