import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, earlyAccessHref, site } from "@/content/site";
import { hero } from "@/content/home";
import type { NavigationItem } from "@/content/vascurra/public-site";

export function SiteHeader({ markOnly = false, links = navLinks, homeHref = "/", ctaHref = earlyAccessHref, ctaLabel = hero.primaryCta }: { markOnly?: boolean; links?: readonly NavigationItem[]; homeHref?: string; ctaHref?: string; ctaLabel?: string }) {
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
    <header className="relative sticky top-0 z-50 border-b border-hairline/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[4.5rem] items-center justify-between gap-4 py-3">
          {markOnly ? (
            <div className="flex min-w-0 items-center gap-2.5">{lockup}</div>
          ) : (
            <Link
              href={homeHref}
              className="flex min-w-0 items-center gap-2.5 rounded-md"
              aria-label={`${site.name} — home`}
            >
              {lockup}
            </Link>
          )}

          {markOnly ? null : (
            <div className="flex items-center gap-2 sm:gap-3">
              <nav aria-label="Site" className="hidden lg:block">
                <ul className="flex items-center">
                  {links.map((link) => <li key={link.label} className="relative">
                    {link.children ? <details className="group">
                      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-1 px-2.5 text-[0.9rem] font-medium text-ink-body transition-[color] duration-200 hover:text-ink-teal focus-visible:text-ink-teal [&::-webkit-details-marker]:hidden xl:px-3">
                        {link.label}<span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">⌄</span>
                      </summary>
                      <ul className="absolute left-1/2 top-full min-w-60 -translate-x-1/2 rounded-2xl border border-hairline bg-white p-2 shadow-[0_20px_45px_-22px_rgba(8,61,74,0.4)]">
                        {link.children.map((child) => <li key={child.href}><Link href={child.href} className="flex min-h-11 items-center rounded-xl px-4 text-sm font-medium text-navy hover:bg-surface hover:text-ink-teal focus-visible:bg-surface">{child.label}</Link></li>)}
                      </ul>
                    </details> : <Link href={link.href ?? "/"} className="inline-flex min-h-11 items-center px-2.5 text-[0.9rem] font-medium text-ink-body transition-[color] duration-200 hover:text-ink-teal xl:px-3">{link.label}</Link>}
                  </li>)}
                </ul>
              </nav>

              <div className="hidden md:block">
                <CtaLink href={ctaHref} className="min-h-11 px-6 py-2.5 text-sm">
                  {ctaLabel}
                </CtaLink>
              </div>

              <MobileNav links={links} ctaHref={ctaHref} ctaLabel={ctaLabel} />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
