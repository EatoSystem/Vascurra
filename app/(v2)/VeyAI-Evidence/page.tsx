import type { Metadata } from "next";
import { PublicAgentPage } from "@/components/vascurra/veyai/PublicAgentPage";
export const metadata: Metadata = { title: "VeyAI Evidence | Vascurra", description: "Proposed critical appraisal, uncertainty and accountable human review." };
export default function Page() { return <PublicAgentPage name="Evidence" />; }
