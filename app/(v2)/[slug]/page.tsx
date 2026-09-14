import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicPage } from "@/components/vascurra/public/PublicPage";
import { ParticipationForm } from "@/components/vascurra/forms/participation-form";
import { publicPages, type PublicPageSlug } from "@/content/vascurra/public-site";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

function getPage(slug: string) {
  return slug in publicPages ? publicPages[slug as PublicPageSlug] : null;
}

export function generateStaticParams() {
  return Object.keys(publicPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.eyebrow} — ${site.name}`,
    description: page.lead,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title: `${page.eyebrow} — ${site.name}`, description: page.lead, url: `/${page.slug}`, type: "website" },
  };
}

export default async function V2PublicPage({ params }: Props) {
  const page = getPage((await params).slug);
  if (!page) notFound();
  const formKind = page.slug === "access" ? "access" : page.slug === "contact" ? "contact" : null;
  return <PublicPage page={page}>{formKind ? <ParticipationForm kind={formKind} /> : null}</PublicPage>;
}
