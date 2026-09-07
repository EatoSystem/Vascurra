import { cookies } from "next/headers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { Origin } from "@/components/vascurra/home/origin";
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
