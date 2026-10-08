import type { Metadata } from "next";
import { PublicAgentPage } from "@/components/vascurra/veyai/PublicAgentPage";
export const metadata: Metadata = { title: "VeyAI Operations | Vascurra", description: "A proposed programme-planning specialist with human approval boundaries." };
export default function Page() { return <PublicAgentPage name="Operations" />; }
