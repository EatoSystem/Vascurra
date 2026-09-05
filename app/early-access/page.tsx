import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { EarlyAccessForm } from "@/components/vascurra/forms/early-access-form";
import { VascularFlow } from "@/components/vascurra/ui/vascular-flow";
import { earlyAccess } from "@/content/early-access";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${earlyAccess.title} — ${site.name}`,
  description: earlyAccess.body,
  alternates: { canonical: "/early-access" },
};

export default function EarlyAccessPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative overflow-hidden">
        <VascularFlow variant="mist" />
        <div className="relative z-10 mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:px-12">
          <h1 className="type-section max-w-3xl">{earlyAccess.heading}</h1>
          <p className="mt-6 max-w-2xl text-ink-body">{earlyAccess.body}</p>
          <div className="mt-12">
            <EarlyAccessForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
