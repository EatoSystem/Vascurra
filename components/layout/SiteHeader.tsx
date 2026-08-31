import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, followHref, site } from "@/content/site";
import { hero } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-canvas/80 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-md"
            aria-label={`${site.name} — home`}
          >
            {/* The approved mark at native resolution: 36px from a 141px
                source is downscaling, never the upscaling §20 prohibits. */}
            <BrainGlyph size={36} />
            <Wordmark className="text-xl sm:text-[1.375rem]" />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Site" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-full px-4 text-base font-medium text-ink-body transition-[color] duration-200 hover:text-ink-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Visibility on a wrapper, not on CtaLink: CtaLink sets its own
                display utility and Tailwind resolves display conflicts by
                stylesheet order, not class-attribute order. */}
            <div className="hidden md:block">
              <CtaLink href={followHref} variant="secondary">
                {hero.secondaryCta}
              </CtaLink>
            </div>

            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
