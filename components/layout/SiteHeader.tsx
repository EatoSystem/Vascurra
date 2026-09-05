import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, earlyAccessHref, site } from "@/content/site";
import { hero } from "@/content/home";

export function SiteHeader({ markOnly = false }: { markOnly?: boolean }) {
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
              href="/"
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
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="inline-flex min-h-11 items-center px-2.5 text-[0.9rem] font-medium text-ink-body transition-[color] duration-200 hover:text-ink-teal xl:px-3"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="hidden md:block">
                <CtaLink href={earlyAccessHref} className="min-h-11 px-6 py-2.5 text-sm">
                  {hero.primaryCta}
                </CtaLink>
              </div>

              <MobileNav />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
