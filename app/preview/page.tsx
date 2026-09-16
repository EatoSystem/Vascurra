import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { VascurraFooter } from "@/components/vascurra/public/VascurraFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { Origin } from "@/components/vascurra/home/origin";
import { Mission } from "@/components/vascurra/home/mission";
import { Framework } from "@/components/vascurra/home/framework";
import { Veya } from "@/components/vascurra/home/veya";
import { Lab } from "@/components/vascurra/home/lab";
import { FinalMission } from "@/components/vascurra/home/final-mission";
import { HOLDING_COOKIE, isHoldingUnlocked } from "@/lib/holding-gate";
import { primaryNav } from "@/content/vascurra/public-site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function PreviewPage() {
  const jar = await cookies();
  if (!(await isHoldingUnlocked(jar.get(HOLDING_COOKIE)?.value))) {
    redirect("/");
  }

  return (
    <>
      <span id="top" />
      <SiteHeader links={primaryNav} homeHref="/preview" ctaHref="/access" ctaLabel="Request Access" />
      <main id="main">
        <HomeHero discoverHref="#origin" />
        <Origin />
        <Mission />
        <Framework />
        <Veya />
        <Lab />
        <FinalMission />
      </main>
      <VascurraFooter />
    </>
  );
}
