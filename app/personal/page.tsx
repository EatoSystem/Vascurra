import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { personal } from "@/content/personal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${personal.title} — ${site.name}`,
  description: personal.lead,
  alternates: { canonical: "/personal" },
  robots: { index: false, follow: false },
};

export default function PersonalPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:px-12">
          <h1 className="type-section max-w-3xl">{personal.heading}</h1>
          <p className="mt-6 max-w-2xl text-ink-body">{personal.lead}</p>
          <p className="mt-4 max-w-2xl text-ink-muted">{personal.note}</p>
          <div className="mt-12 max-w-2xl space-y-12">
            {personal.sections.map((section) => (
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
