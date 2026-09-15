import type { InnerStoryPage as InnerStoryPageContent } from "@/content/inner-site";
import { ArtworkToFollow, CTA, CTAGroup, NextChapter, SafetyBoundary, VascurraHeadline } from "./inner-page";
import styles from "./story-page.module.css";

function Chapter({ chapter, index }: { chapter: InnerStoryPageContent["chapters"][number]; index: number }) {
  const id = `chapter-${index + 1}`;
  const tone = chapter.tone === "deep" ? styles.deep : chapter.tone === "quiet" ? styles.quiet : "";
  const layout = chapter.layout === "statement" ? styles.statement : chapter.layout === "sequence" ? styles.sequenceSection : chapter.layout === "principles" ? styles.principlesSection : styles.splitSection;
  const copy = <div className={styles.chapterCopy}><p className={styles.eyebrow}>{chapter.eyebrow}</p><VascurraHeadline className={styles.storyHeadline} id={id} lines={chapter.headline} accent={chapter.accent} />{chapter.body.map((paragraph) => <p className={styles.body} key={paragraph}>{paragraph}</p>)}{chapter.boundary ? <SafetyBoundary className={styles.storySafety}>{chapter.boundary}</SafetyBoundary> : null}</div>;

  return <section className={`${styles.chapter} ${tone} ${layout}`} aria-labelledby={id}><div className={styles.shell}>
    {chapter.layout === "split" && chapter.artwork ? <div className={`${styles.split} ${chapter.reverse ? styles.reverse : ""}`}>{copy}<ArtworkToFollow artwork={chapter.artwork} /></div> : copy}
    {chapter.artwork && chapter.layout !== "split" ? <ArtworkToFollow artwork={chapter.artwork} className={styles.chapterArt} /> : null}
    {chapter.items ? <ol className={`${styles.items} ${chapter.layout === "sequence" ? styles.sequence : ""}`}>{chapter.items.map((item, itemIndex) => <li key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol> : null}
  </div></section>;
}

export function InnerStoryPage({ page }: { page: InnerStoryPageContent }) {
  return <main className={styles.page} id="main">
    <header className={styles.hero} aria-labelledby={`${page.slug}-title`}><div className={styles.shell}><div className={styles.heroGrid}><div className={styles.heroCopy}><p className={styles.eyebrow}>{page.eyebrow}</p><VascurraHeadline as="h1" className={styles.storyHeadline} id={`${page.slug}-title`} lines={page.title} accent={page.accent} />{page.proposition ? <p className={styles.proposition}>{page.proposition}</p> : null}<p className={styles.lead}>{page.lead}</p>{page.qualifier ? <SafetyBoundary className={styles.storySafety}>{page.qualifier}</SafetyBoundary> : null}</div><ArtworkToFollow artwork={page.heroArtwork} className={styles.heroArt} /></div></div></header>
    {page.chapters.map((chapter, index) => <Chapter chapter={chapter} index={index} key={chapter.eyebrow} />)}
    <section className={styles.closing} aria-labelledby={`${page.slug}-closing`}><div className={styles.shell}><VascurraHeadline id={`${page.slug}-closing`} lines={page.closing.headline} accent={page.closing.accent} align="center" /><p className={styles.closingBody}>{page.closing.body}</p><CTAGroup align="center" label="Continue exploring">{page.closing.ctas.map((cta, index) => <CTA href={cta.href} secondary={index > 0} key={cta.href}>{cta.label}</CTA>)}</CTAGroup></div></section>
    <NextChapter {...page.next} />
  </main>;
}
