import type { Metadata } from "next";
import { BrainCellPage } from "@/components/vascurra/brain-cells/BrainCellPage";

export const metadata: Metadata = {
  title: "100 Billion Brain Cells — Vascurra",
  description: "Explore Vascurra’s proposed symbolic participation mission and long-term research capacity ambition.",
  alternates: { canonical: "/100-Billion" },
  robots: { index: false, follow: false },
  openGraph: { title: "100 Billion Brain Cells — Vascurra", description: "For the people we love now. For all of us in the future.", url: "/100-Billion", type: "website" },
};

export default function Page() { return <BrainCellPage />; }
