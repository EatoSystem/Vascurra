import Link from "next/link";
import type { StrategicChapter, StrategicPage as StrategicPageContent } from "@/content/strategic-pages";
import styles from "./strategic-page.module.css";

function Flow({ steps }: { steps: readonly string[] }) {
  return <ol className={styles.flow} aria-label="Process sequence">{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < steps.length - 1 ? <i aria-hidden="true">↓</i> : null}</li>)}</ol>;
}

function Chapter({ chapter, index }: { chapter: StrategicChapter; index: number }) {
  const headingId = `chapter-${index + 2}`;
  return <section className={`${styles.chapter} ${chapter.tone === "deep" ? styles.deep : chapter.tone === "quiet" ? styles.quiet : ""}`} aria-labelledby={headingId}>
    <div className={styles.shell}>
      <div className={styles.chapterIntro}><p className={styles.eyebrow}>{chapter.eyebrow}</p><h2 id={headingId}>{chapter.title.map((line) => <span key={line}>{line}</span>)}</h2>{chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      {chapter.flow ? <Flow steps={chapter.flow} /> : null}
      {chapter.items ? <ul className={styles.items}>{chapter.items.map((item, itemIndex) => <li key={item.title}><span className={styles.itemNumber}>{String(itemIndex + 1).padStart(2, "0")}</span><div>{item.status ? <span className={styles.status}>{item.status}</span> : null}<h3>{item.title}</h3>{item.body ? <p>{item.body}</p> : null}</div></li>)}</ul> : null}
      {chapter.note ? <p className={styles.note}>{chapter.note}</p> : null}
    </div>
  </section>;
}

export function StrategicPage({ page }: { page: StrategicPageContent }) {
  return <main id="main" className={styles.page}>
    <header className={styles.hero}><div className={styles.shell}><p className={styles.eyebrow}>{page.eyebrow}</p><h1>{page.title.map((line) => <span className={line === page.accent ? styles.accent : undefined} key={line}>{line}</span>)}</h1><p className={styles.lead}>{page.lead}</p><p className={styles.qualifier}>{page.qualifier}</p><nav className={styles.heroLinks} aria-label="Page introduction">{page.slug === "system" ? <><Link href="/how-it-works">How it works</Link><Link href="/veya">Discover Veya</Link></> : page.slug === "fund" ? <><Link href="/support">Ways to support</Link><Link href="/roadmap">Explore the roadmap</Link></> : <><Link href="#chapter-2">View current phase</Link><Link href="/system">Explore the system</Link></>}</nav></div></header>
    {page.chapters.map((chapter, index) => <Chapter chapter={chapter} index={index} key={chapter.eyebrow} />)}
    <section className={styles.closing} aria-labelledby="strategic-close"><div className={styles.shell}><h2 id="strategic-close">{page.closing.title.map((line) => <span key={line}>{line}</span>)}</h2><p>{page.closing.body}</p><nav aria-label="Continue exploring">{page.closing.ctas.map((cta) => <Link href={cta.href} key={cta.href}>{cta.label}</Link>)}</nav></div></section>
  </main>;
}
