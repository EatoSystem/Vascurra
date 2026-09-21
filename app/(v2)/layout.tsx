import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { VascurraFooter } from "@/components/vascurra/public/VascurraFooter";
import { primaryNav } from "@/content/vascurra/public-site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function V2Layout({ children }: Readonly<{ children: ReactNode }>) {
  return <><SiteHeader links={primaryNav} homeHref="/preview" ctaHref="/support" ctaLabel="Support" />{children}<VascurraFooter /></>;
}
