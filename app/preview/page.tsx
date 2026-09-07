import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HomeHero } from "@/components/vascurra/home/hero";
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
      </main>
      <SiteFooter />
    </>
  );
}
