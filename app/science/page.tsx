import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { science } from "@/content/science";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${science.title} — ${site.name}`,
  description: science.intro,
  alternates: { canonical: "/science" },
  robots: { index: false, follow: false },
};

export default function SciencePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <article className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:px-12">
          <h1 className="type-section max-w-3xl">{science.heading}</h1>
          <p className="mt-8 max-w-2xl text-ink-body">{science.intro}</p>
          <div className="mt-14 max-w-2xl space-y-12">
            {science.sections.map((section) => (
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
