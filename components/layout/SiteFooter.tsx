import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/brand/Wordmark";
import { site } from "@/content/site";
import { footer } from "@/content/home";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-canvas-deep/60">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-3">
          <Wordmark className="text-2xl" />
          <p className="text-navy-700">{site.tagline}</p>
          <a
            href={site.url}
            className="w-fit font-medium text-teal-700 underline decoration-hairline-strong underline-offset-4 hover:decoration-teal-700"
          >
            {site.displayUrl}
          </a>
        </div>

        <p className="mt-10 max-w-2xl border-t border-hairline pt-8 text-base text-navy-600">
          {footer.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
