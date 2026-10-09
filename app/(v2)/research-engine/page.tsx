import type { Metadata } from "next";
import { ResearchEnginePage } from "@/components/vascurra/research-engine/ResearchEnginePage";

export const metadata: Metadata = {
  title: "Vascurra Research Engine — Intelligence for Vascular Cognitive Health",
  description: "How Vascurra proposes to build AI, research, scientific and institutional capability for vascular cognitive health.",
  alternates: { canonical: "/research-engine" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "Vascurra Research Engine — Intelligence for Vascular Cognitive Health",
    description: "Proposed programmes, human expertise and the capability that capital could build.",
    url: "/research-engine",
    type: "website",
  },
};

export default function Page() {
  return <ResearchEnginePage />;
}
