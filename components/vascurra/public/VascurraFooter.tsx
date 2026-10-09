import Link from "next/link";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { Wordmark } from "@/components/brand/Wordmark";
import { footerGroups, footerUtilityLinks, publicDisclaimer } from "@/content/vascurra/public-site";
import { site } from "@/content/site";
import styles from "./vascurra-footer.module.css";

export function VascurraFooter({ hideAccessLink = false }: { hideAccessLink?: boolean }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.identity}>
            <Link href="/preview" className={styles.lockup} aria-label={`${site.name} — home`}>
              <BrainGlyph size={40} />
              <Wordmark className={styles.name} />
            </Link>
            <p className={styles.tagline}>{site.tagline}</p>
            <p className={styles.statement}>Support today. Learn over time. Ask better questions. Build better evidence.</p>
            <p className={styles.status}>In development</p>
          </div>
          <nav aria-label="Footer" className={styles.groups}>{footerGroups.map((group) => <div key={group.title}><h2 className={styles.groupTitle}>{group.title}</h2><ul className={styles.links}>{group.links.filter((link) => !hideAccessLink || link.href !== "/access").map((link) => <li key={link.href}><Link className={styles.link} href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.disclaimer}>{publicDisclaimer}</p>
          <div className={styles.meta}>
            <nav aria-label="Legal"><ul className={styles.utility}>{footerUtilityLinks.map((link) => <li key={link.href}><Link className={styles.utilityLink} href={link.href}>{link.label}</Link></li>)}</ul></nav>
            <a className={styles.website} href={site.url}>{site.displayUrl}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
