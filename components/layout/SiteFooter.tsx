import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { site } from "@/content/site";
import { footer } from "@/content/home";
import { earlyAccessHref, privacyHref, navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-white">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex flex-col gap-4">
            <Wordmark className="text-2xl" />
            <p className="text-ink-muted">{site.tagline}</p>
            <a
              href={site.url}
              className="w-fit font-medium text-ink-teal underline decoration-hairline underline-offset-4 hover:decoration-current"
            >
              {site.displayUrl}
            </a>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 text-navy sm:grid-cols-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-ink-teal">
                {link.label}
              </a>
            ))}
            <Link href={earlyAccessHref} className="hover:text-ink-teal">
              {footer.earlyAccess}
            </Link>
            <Link href={privacyHref} className="hover:text-ink-teal">
              {footer.privacy}
            </Link>
          </nav>
        </div>

        <p className="mt-12 max-w-2xl border-t border-hairline pt-8 text-base text-ink-muted">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
