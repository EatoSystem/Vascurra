import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, earlyAccessHref, site } from "@/content/site";
import { hero } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-canvas/80 backdrop-blur-xl relative">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md"
            aria-label={`${site.name} — home`}
          >
            <BrainGlyph size={36} />
            <Wordmark className="text-xl sm:text-[1.375rem]" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Site" className="hidden lg:block">
              <ul className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-full px-3 text-[0.95rem] font-medium text-ink-body transition-[color] duration-200 hover:text-ink-teal xl:px-3.5"
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
        </div>
      </Container>
    </header>
  );
}
