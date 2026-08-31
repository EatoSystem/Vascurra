import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { site } from "@/content/site";
import { footer } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-deep-hairline bg-deep">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <BrainGlyph size={28} />
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

        <p className="mt-12 max-w-2xl border-t border-deep-hairline pt-8 text-base text-on-deep-muted">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
