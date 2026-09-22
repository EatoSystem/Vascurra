import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicPage } from "@/components/vascurra/public/PublicPage";
import { InnerStoryPage } from "@/components/vascurra/inner/InnerStoryPage";
import { ParticipationPage } from "@/components/vascurra/inner/ParticipationPage";
import { StrategicPage } from "@/components/vascurra/strategic/StrategicPage";
import { innerSitePages, type InnerStorySlug } from "@/content/inner-site";
import { publicPages, type PublicPageSlug } from "@/content/vascurra/public-site";
import { strategicPages, type StrategicPageSlug } from "@/content/strategic-pages";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

function getPage(slug: string) {
  return slug in publicPages ? publicPages[slug as PublicPageSlug] : null;
}

export function generateStaticParams() {
  return [...Object.keys(publicPages), ...Object.keys(strategicPages)].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const story = slug in innerSitePages ? innerSitePages[slug as InnerStorySlug] : null;
  const strategic = slug in strategicPages ? strategicPages[slug as StrategicPageSlug] : null;
  const page = getPage(slug);
  if (strategic) return {
    title: `${strategic.eyebrow} — ${site.name}`,
    description: strategic.lead,
    alternates: { canonical: `/${strategic.slug}` },
    openGraph: { title: `${strategic.eyebrow} — ${site.name}`, description: strategic.lead, url: `/${strategic.slug}`, type: "website" },
  };
  if (!page) return {};
  return {
    title: `${story?.eyebrow ?? page.eyebrow} — ${site.name}`,
    description: story?.lead ?? page.lead,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: `${page.eyebrow} — ${site.name}`, description: page.lead, url: `/${page.slug}`, type: "website" },
  };
}

export default async function V2PublicPage({ params }: Props) {
  const slug = (await params).slug;
  const story = slug in innerSitePages ? innerSitePages[slug as InnerStorySlug] : null;
  const strategic = slug in strategicPages ? strategicPages[slug as StrategicPageSlug] : null;
  if (strategic) return <StrategicPage page={strategic} />;
  const page = getPage(slug);
  if (!page) notFound();
  if (story) return <InnerStoryPage page={story} />;
  const formKind = page.slug === "access" ? "access" : page.slug === "contact" ? "contact" : null;
  if (formKind) return <ParticipationPage page={page} kind={formKind} />;
  return <PublicPage page={page} />;
}
