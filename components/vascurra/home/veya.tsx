import Image from "next/image";
import Link from "next/link";
import { veyaHomepage } from "@/content/veya";
import { v5Artwork, v5ArtworkSrc } from "@/content/v5-artwork";
import styles from "./veya-home.module.css";

export function Veya() {
  return (
    <section id="veya" aria-labelledby="veya-heading" className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>{veyaHomepage.eyebrow}</p>
            <h2 id="veya-heading" className={styles.heading}>
              <span>{veyaHomepage.headline[0]}</span>
              <span className={styles.gradient}>{veyaHomepage.headline[1]}</span>
            </h2>
          </div>
          <div className={styles.introCopy}>
            <p className={styles.supporting}>{veyaHomepage.supporting.map((line) => <span key={line}>{line}</span>)}</p>
            <p className={styles.secondary}>{veyaHomepage.secondary}</p>
            <p>{veyaHomepage.introduction}</p>
          </div>
        </div>

        <div className={styles.dayChapter}>
          <header className={styles.chapterHeading}>
            <div><p className={styles.eyebrow}>Everyday rhythm</p><h3>{veyaHomepage.rhythmLabel}.</h3></div>
            <p>Morning. During the day. Preparation. Evening. Over time.<br/><span>{veyaHomepage.rhythmNote}</span></p>
          </header>
          <figure className={styles.artwork} data-v5-artwork={v5Artwork.veyaDay.filename}>
            <Image src={v5ArtworkSrc(v5Artwork.veyaDay)} alt={v5Artwork.veyaDay.alt} width={v5Artwork.veyaDay.width} height={v5Artwork.veyaDay.height} sizes="(max-width: 768px) 100vw, 92vw" quality={90}/>
          </figure>
        </div>

        <div className={styles.frequency}>
          <p>{veyaHomepage.frequency.map((line) => <span key={line}>{line}</span>)}</p>
          <small>{veyaHomepage.frequencyBody}</small>
        </div>

        <div className={styles.context}>
          <header className={styles.contextCopy}>
            <p className={styles.eyebrow}>Context over time</p>
            <h3>{veyaHomepage.contextLead}</h3>
            <p>{veyaHomepage.contextBody}</p>
            <ul>{veyaHomepage.contextInputs.map((item) => <li key={item}>{item}</li>)}</ul>
          </header>
          <figure className={styles.contextArtwork} data-v5-artwork={v5Artwork.veyaContext.filename}>
            <Image src={v5ArtworkSrc(v5Artwork.veyaContext)} alt={v5Artwork.veyaContext.alt} width={v5Artwork.veyaContext.width} height={v5Artwork.veyaContext.height} sizes="(max-width: 768px) 100vw, 76vw" quality={90}/>
          </figure>
        </div>

        <div className={styles.outputs} aria-label="Potential Veya perspectives">
          <p>{veyaHomepage.outputs.map((output, index) => <span key={output.label}>{output.label.replace(/^For /i, "")}{index < veyaHomepage.outputs.length - 1 ? <i aria-hidden="true">·</i> : null}</span>)}</p>
          <div><strong>{veyaHomepage.outputsSummary}</strong>{veyaHomepage.outputsBoundaries.map((boundary) => <span key={boundary}>{boundary}</span>)}</div>
        </div>

        <div className={styles.close}>
          <p>{veyaHomepage.boundary}</p>
          <Link href={veyaHomepage.cta.href}>{veyaHomepage.cta.label}<span aria-hidden="true"> →</span></Link>
        </div>
      </div>
    </section>
  );
}
