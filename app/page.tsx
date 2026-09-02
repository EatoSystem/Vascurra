import { cookies } from "next/headers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { HumanContext } from "@/components/vascurra/home/human-context";
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
        <HumanContext />
        <FourPerspectives />
        <UnderstandTrackSupport />
        <Trust />
        <Philosophy />
        <ProjectStatus />
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
  if (isHoldingUnlocked(jar.get(HOLDING_COOKIE)?.value)) {
    return <FullHomePage />;
  }
  return <HoldingPage />;
}
