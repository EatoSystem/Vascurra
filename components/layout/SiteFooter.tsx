import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { site } from "@/content/site";
import { footer } from "@/content/home";
import { earlyAccessHref, privacyHref } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-deep-hairline bg-deep">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col justify-between gap-10 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <BrainGlyph size={40} />
              <Wordmark className="text-2xl !text-on-deep" />
            </div>
            <p className="text-on-deep-muted">{site.tagline}</p>
            <a
              href={site.url}
              className="w-fit font-medium text-[var(--color-energy-cyan)] underline decoration-deep-hairline underline-offset-4 hover:decoration-current"
            >
              {site.displayUrl}
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 text-on-deep sm:items-end">
              <li>
                <Link href={earlyAccessHref} className="hover:text-[var(--color-energy-cyan)]">
                  {footer.earlyAccess}
                </Link>
              </li>
              <li>
                <Link href={privacyHref} className="hover:text-[var(--color-energy-cyan)]">
                  {footer.privacy}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 max-w-2xl border-t border-deep-hairline pt-8 text-base text-on-deep-muted">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
