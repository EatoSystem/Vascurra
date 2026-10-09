import type { Metadata } from "next";
import { PublicAgentPage } from "@/components/vascurra/veyai/PublicAgentPage";
export const metadata: Metadata = { title: "VeyAI Capital | Vascurra", description: "Proposed capability and capital scenarios for human consideration." };
export default function Page() { return <PublicAgentPage name="Capital" />; }
