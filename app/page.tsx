import { SiteHeader } from "@/components/layout/SiteHeader";
import { HomeHero } from "@/components/vascurra/home/hero";
import { HoldingUnlockForm } from "@/components/vascurra/forms/holding-unlock-form";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <SiteHeader markOnly />
      <main id="main">
        <HomeHero showCtas={false} animateBrain />
      </main>
      <HoldingUnlockForm />
    </>
  );
}
