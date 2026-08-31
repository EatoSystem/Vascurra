import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { CtaLink } from "@/components/ui/CtaLink";
import { MobileNav } from "./MobileNav";
import { navLinks, followHref, site } from "@/content/site";
import { hero } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/70 bg-canvas/85 backdrop-blur-md">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <a
            href="#top"
            className="flex items-center gap-2.5 rounded-md"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden="true"
              className="size-8 rounded-xl border border-hairline bg-[radial-gradient(circle_at_35%_30%,color-mix(in_srgb,var(--color-mint-400)_45%,transparent),transparent_65%),radial-gradient(circle_at_70%_70%,color-mix(in_srgb,var(--color-cyan-400)_40%,transparent),transparent_62%)]"
            />
            <Wordmark className="text-xl sm:text-[1.375rem]" />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Site" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-11 items-center rounded-full px-4 text-base font-medium text-navy-700 transition-[color] duration-200 hover:text-teal-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Visibility is applied to a wrapper, not to CtaLink itself:
                CtaLink already sets a display utility, and Tailwind resolves
                conflicting display classes by stylesheet order rather than by
                the order they appear in the class attribute. */}
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
