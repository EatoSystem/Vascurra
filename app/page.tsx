import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
import { HumanContext } from "@/components/vascurra/home/human-context";
import { ConnectedSystem } from "@/components/vascurra/home/connected-system";
import { Idea } from "@/components/vascurra/home/idea";
import { FourPerspectives } from "@/components/vascurra/home/four-perspectives";
import { People } from "@/components/vascurra/home/people";
import { Families } from "@/components/vascurra/home/families";
import { Clinicians } from "@/components/vascurra/home/clinicians";
import { Research } from "@/components/vascurra/home/research";
import { UnderstandTrackSupport } from "@/components/vascurra/home/understand-track-support";
import { Trust } from "@/components/vascurra/home/trust";
import { Philosophy } from "@/components/marketing/Philosophy";
import { Principles } from "@/components/marketing/Principles";
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
        <ConnectedSystem />
        <Idea />
        <FourPerspectives />
        <People />
        <Families />
        <Clinicians />
        <Research />
        <UnderstandTrackSupport />
        <Trust />
        <Philosophy />
        <Principles />
        <ProjectStatus />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
