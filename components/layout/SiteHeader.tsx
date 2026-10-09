import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, earlyAccessHref, site } from "@/content/site";
import { hero } from "@/content/home";
import type { NavigationItem } from "@/content/vascurra/public-site";
import styles from "./site-header.module.css";
import { HeaderVisibility } from "./HeaderVisibility";

export function SiteHeader({ markOnly = false, links = navLinks, homeHref = "/", ctaHref = earlyAccessHref, ctaLabel = hero.primaryCta, className = "" }: { markOnly?: boolean; links?: readonly NavigationItem[]; homeHref?: string; ctaHref?: string; ctaLabel?: string; className?: string }) {
  const lockup = (
    <>
      <BrainGlyph size={42} />
      <span className="min-w-0">
        <Wordmark className="block text-[1.35rem] leading-none sm:text-[1.5rem]" />
        <span
          className={`mt-1 text-[0.62rem] font-semibold tracking-[0.14em] text-ink-teal uppercase ${
            markOnly ? "block" : "hidden sm:block"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </>
  );

  return (
    <HeaderVisibility className={className}>
      <Container>
        <div className={styles.headerInner}>
          {markOnly ? (
            <div className={styles.brand}>{lockup}</div>
          ) : (
            <Link
              href={homeHref}
              className={styles.brand}
              aria-label={`${site.name} — home`}
            >
              {lockup}
            </Link>
          )}

          {markOnly ? null : (
            <div className={styles.headerActions}>
              <nav aria-label="Site" className={styles.desktopNavigation}>
                <ul className={styles.navigationList}>
                  {links.map((link) => <li key={link.label} className="relative">
                    {link.children ? <details className={styles.navigationGroup}>
                      <summary className={styles.navigationLink}>
                        {link.label}<span aria-hidden="true" className={styles.chevron}>⌄</span>
                      </summary>
                      <ul className={styles.submenu}>
                        {link.children.map((child) => <li key={child.href}><Link href={child.href} className={styles.submenuLink}>{child.label}</Link></li>)}
                      </ul>
                    </details> : <Link href={link.href ?? "/"} className={styles.navigationLink}>{link.label}</Link>}
                  </li>)}
                </ul>
              </nav>

              <div className={styles.desktopCta}>
                <CtaLink href={ctaHref} className="min-h-11 px-6 py-2.5 text-sm shadow-[0_12px_28px_-18px_rgba(8,61,74,0.75)]">
                  {ctaLabel}
                </CtaLink>
              </div>

              <MobileNav links={links} ctaHref={ctaHref} ctaLabel={ctaLabel} />
            </div>
          )}
        </div>
      </Container>
    </HeaderVisibility>
  );
}
