import Link from "next/link";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { Wordmark } from "@/components/brand/Wordmark";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomeHero } from "@/components/vascurra/home/hero";
import { HoldingUnlockForm } from "@/components/vascurra/forms/holding-unlock-form";
import { HoldingOverview } from "@/components/vascurra/holding/HoldingOverview";
import { holdingOverview } from "@/content/holding";
import { privacyHref } from "@/content/site";
import holdingStyles from "@/components/vascurra/holding/holding-hero.module.css";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <SiteHeader className={holdingStyles.header} links={holdingOverview.navigation} ctaHref="#development" ctaLabel={holdingOverview.statusCta} />
      <main id="main">
        <HomeHero
          variant="holding"
          discoveryFirst
          discoverHref="#overview"
          secondaryCtaHref="#development"
          secondaryCtaLabel={holdingOverview.statusCta}
        />
        <HoldingOverview />
      </main>
      <HoldingUnlockForm>
        <div className={holdingStyles.footerContent}>
          <div className={holdingStyles.footerIdentity}>
            <Link href="#top" className={holdingStyles.footerLockup} aria-label={`${holdingOverview.footer.name} — back to top`}>
              <BrainGlyph size={38} />
              <Wordmark className={holdingStyles.footerName} />
            </Link>
            <p className={holdingStyles.footerTagline}>{holdingOverview.footer.tagline}</p>
            <p className={holdingStyles.footerStatement}>{holdingOverview.footer.statement}</p>
            <p className={holdingStyles.footerStatus}>{holdingOverview.footer.status}</p>
          </div>
          <div className={holdingStyles.footerNavigation}>
            <nav aria-label={holdingOverview.footer.exploreLabel}>
              <h2>{holdingOverview.footer.exploreLabel}</h2>
              <ul>
                {holdingOverview.navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
              </ul>
            </nav>
            <nav aria-label={holdingOverview.footer.projectLabel}>
              <h2>{holdingOverview.footer.projectLabel}</h2>
              <ul>
                <li><Link href="#development">{holdingOverview.statusCta}</Link></li>
                <li><Link href={privacyHref}>{holdingOverview.privacy}</Link></li>
                <li><Link href="#top">{holdingOverview.footer.backToTop}</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </HoldingUnlockForm>
    </>
  );
}
