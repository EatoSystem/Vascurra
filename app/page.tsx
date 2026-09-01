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

export default function HomePage() {
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
