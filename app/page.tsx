import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/marketing/Hero";
import { ProjectIntro } from "@/components/marketing/ProjectIntro";
import { Perspectives } from "@/components/marketing/Perspectives";
import { Philosophy } from "@/components/marketing/Philosophy";
import { Principles } from "@/components/marketing/Principles";
import { ProjectStatus } from "@/components/marketing/ProjectStatus";
import { ComingSoon } from "@/components/marketing/ComingSoon";

export default function HomePage() {
  return (
    <>
      <span id="top" />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProjectIntro />
        <Perspectives />
        <Philosophy />
        <Principles />
        <ProjectStatus />
        <ComingSoon />
      </main>
      <SiteFooter />
    </>
  );
}
