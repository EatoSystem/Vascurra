import type { Metadata } from "next";
import { VeyaPage } from "@/components/vascurra/veya/VeyaPage";
import { veyaPage } from "@/content/veya";

export const metadata: Metadata = {
  title: veyaPage.metadata.title,
  description: veyaPage.metadata.description,
  alternates: { canonical: "/veya" },
};

export default function VeyaRoute() {
  return <VeyaPage />;
}
