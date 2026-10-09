import type { Metadata } from "next";
import { PublicAgentPage } from "@/components/vascurra/veyai/PublicAgentPage";
export const metadata: Metadata = { title: "VeyAI Research | Vascurra", description: "Proposed research assistance, source provenance and human oversight." };
export default function Page() { return <PublicAgentPage name="Research" />; }
