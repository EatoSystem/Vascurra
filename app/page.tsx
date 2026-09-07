import { cookies } from "next/headers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { Origin } from "@/components/vascurra/home/origin";
import { Mission } from "@/components/vascurra/home/mission";
import { PatientZero } from "@/components/vascurra/home/patient-zero";
import { FourPerspectives } from "@/components/vascurra/home/four-perspectives";
import { UnderstandTrackSupport } from "@/components/vascurra/home/understand-track-support";
import { Trust } from "@/components/vascurra/home/trust";
import { Philosophy } from "@/components/marketing/Philosophy";
import { ProjectStatus } from "@/components/marketing/ProjectStatus";
import { FinalCta } from "@/components/vascurra/home/final-cta";
import { HoldingUnlockForm } from "@/components/vascurra/forms/holding-unlock-form";
import { HOLDING_COOKIE, isHoldingUnlocked } from "@/lib/holding-gate";

function FullHomePage() {
  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main id="main">
        <HomeHero />
        <Origin />
        <Mission />
        <PatientZero />
        <UnderstandTrackSupport />
        <Philosophy />
        <ProjectStatus />
        <FourPerspectives />
        <Trust />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}

function HoldingPage() {
  return (
    <>
      <span id="top" />
      <SiteHeader markOnly />
      <main id="main">
        <HomeHero showCtas={false} />
      </main>
      <HoldingUnlockForm />
    </>
  );
}

export default async function HomePage() {
  const jar = await cookies();
  if (await isHoldingUnlocked(jar.get(HOLDING_COOKIE)?.value)) {
    return <FullHomePage />;
  }
  return <HoldingPage />;
}
