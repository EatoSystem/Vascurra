import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { clinical } from "@/content/clinical";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${clinical.title} — ${site.name}`,
  description: clinical.lead,
  alternates: { canonical: "/clinical" },
  robots: { index: false, follow: false },
};

export default function ClinicalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:px-12">
          <h1 className="type-section max-w-3xl">{clinical.heading}</h1>
          <p className="mt-6 max-w-2xl text-ink-body">{clinical.lead}</p>
          <p className="mt-4 max-w-2xl text-ink-muted">{clinical.note}</p>
          <div className="mt-12 max-w-2xl space-y-12">
            {clinical.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
                <p className="mt-4 text-ink-body">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
