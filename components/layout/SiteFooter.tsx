import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { BrainGlyph } from "@/components/brand/BrainGlyph";
import { site } from "@/content/site";
import { footer } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-canvas-deep/50">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <BrainGlyph size={28} />
            <Wordmark className="text-2xl" />
          </div>
          <p className="text-ink-body">{site.tagline}</p>
          <a
            href={site.url}
            className="w-fit font-medium text-ink-teal underline decoration-hairline-strong underline-offset-4 hover:decoration-current"
          >
            {site.displayUrl}
          </a>
        </div>

        <p className="mt-12 max-w-2xl border-t border-hairline pt-8 text-base text-ink-muted">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
