import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { footerGroups, publicDisclaimer } from "@/content/vascurra/public-site";
import { site } from "@/content/site";

export function VascurraFooter({ hideAccessLink = false }: { hideAccessLink?: boolean }) {
  return (
    <footer className="border-t border-hairline bg-white px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[86rem]">
        <div className="grid gap-12 xl:grid-cols-[1.15fr_3fr]">
          <div><Wordmark className="text-2xl" /><p className="mt-4 max-w-xs text-base text-ink-muted">{site.tagline}</p><a className="mt-4 inline-block text-base font-semibold text-ink-teal underline underline-offset-4" href={site.url}>{site.displayUrl}</a></div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 md:grid-cols-4">{footerGroups.map((group) => <div key={group.title}><h2 className="text-sm font-bold tracking-[.14em] text-ink-teal uppercase">{group.title}</h2><ul className="mt-4 space-y-3 text-base">{group.links.filter((link) => !hideAccessLink || link.href !== "/access").map((link) => <li key={link.href}><Link className="text-navy hover:text-ink-teal" href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>
        </div>
        <p className="mt-14 max-w-3xl border-t border-hairline pt-8 text-base text-ink-muted">{publicDisclaimer}</p>
      </div>
    </footer>
  );
}
