import type { Metadata } from "next";
import { VeyAIPage } from "@/components/vascurra/veyai/VeyAIPage";

export const metadata: Metadata = {
  title: "VeyAI — Vascurra’s Internal AI Agent System",
  description: "VeyAI is the proposed internal AI agent network behind Vascurra, supporting research, evidence, operations, capital allocation and programme development.",
  alternates: { canonical: "/VeyAI" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: "VeyAI — Vascurra’s Internal AI Agent System",
    description: "Veya is built for the person. VeyAI is built for the mission. Proposed specialist agents, scoped access and human responsibility.",
    url: "/VeyAI",
    type: "website",
  },
};

export default function Page() {
  return <VeyAIPage />;
}
