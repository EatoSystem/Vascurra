import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { Origin } from "@/components/vascurra/home/origin";
import { Mission } from "@/components/vascurra/home/mission";
import { PatientZero } from "@/components/vascurra/home/patient-zero";
import { Framework } from "@/components/vascurra/home/framework";
import { Perspectives } from "@/components/vascurra/home/perspectives";
import { Veya } from "@/components/vascurra/home/veya";
import { Intelligence } from "@/components/vascurra/home/intelligence";
import { Lab } from "@/components/vascurra/home/lab";
import { SupportVascurra } from "@/components/vascurra/home/support-vascurra";
import { Responsible } from "@/components/vascurra/home/responsible";
import { Journey } from "@/components/vascurra/home/journey";
import { FinalMission } from "@/components/vascurra/home/final-mission";
import { HOLDING_COOKIE, isHoldingUnlocked } from "@/lib/holding-gate";
import { v2NavLinks } from "@/content/homepage-v2";

export default async function PreviewPage() {
  const jar = await cookies();
  if (!(await isHoldingUnlocked(jar.get(HOLDING_COOKIE)?.value))) {
    redirect("/");
  }

  return (
    <>
      <span id="top" />
      <SiteHeader links={v2NavLinks} />
      <main id="main">
        <HomeHero discoverHref="#origin" />
        <Origin />
        <Mission />
        <PatientZero />
        <Framework />
        <Perspectives />
        <Veya />
        <Intelligence />
        <Lab />
        <Responsible />
        <SupportVascurra />
        <Journey />
        <FinalMission />
      </main>
      <SiteFooter links={v2NavLinks} />
    </>
  );
}
