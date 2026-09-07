import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { Origin } from "@/components/vascurra/home/origin";
import { Mission } from "@/components/vascurra/home/mission";
import { PatientZero } from "@/components/vascurra/home/patient-zero";
import { HOLDING_COOKIE, isHoldingUnlocked } from "@/lib/holding-gate";

export default async function PreviewPage() {
  const jar = await cookies();
  if (!(await isHoldingUnlocked(jar.get(HOLDING_COOKIE)?.value))) {
    redirect("/");
  }

  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main id="main">
        <HomeHero />
        <Origin />
        <Mission />
        <PatientZero />
      </main>
      <SiteFooter />
    </>
  );
}
