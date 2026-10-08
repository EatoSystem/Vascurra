export type AgentId = "research" | "evidence" | "operations" | "capital";
export interface AgentContract {
  id: AgentId; name: string; version: string; promptVersion: string; schemaVersion: string;
  status: "fixture" | "shell"; family: "mission"; purpose: string; question: string;
  modelPolicy: string; tools: readonly string[]; scopes: readonly string[];
  prohibited: readonly string[]; handoffs: readonly string[]; outputSchema: string;
  evidenceRequirements: string; approvalRules: string; humanOwner: string;
  escalation: string;
}
const base = {
  version: "0.1.0", schemaVersion: "0.1.0", family: "mission",
  modelPolicy: "Synthetic fixtures only. Live models require a separate activation review and hard cost reservation.",
  scopes: ["synthetic-fixtures"],
  prohibited: ["personal-health-data", "veya-context", "patient-0", "external-writes", "outreach", "spending", "publishing", "programme-initiation", "clinical-recommendations", "self-approval"],
  humanOwner: "Unassigned — required before live activation",
  evidenceRequirements: "Every factual finding needs a captured source and exact supporting excerpt. Missing provenance makes the result incomplete.",
  approvalRules: "Authenticated human decision bound to immutable Research, Evidence and source-set versions. No automatic continuation.",
  escalation: "Stop on missing evidence, scope violation, invalid output, tool failure or exhausted limits.",
} as const;

export const contracts: Record<AgentId, AgentContract> = {
  research: { ...base, id: "research", name: "VeyAI Research", status: "fixture", promptVersion: "research-0.1.0", purpose: "Organise research and propose questions for investigation.", question: "What should Vascurra investigate next?", tools: ["read_synthetic_source_bundle"], handoffs: ["human-requested-evidence"], outputSchema: "ResearchOutput@0.1.0" },
  evidence: { ...base, id: "evidence", name: "VeyAI Evidence", status: "fixture", promptVersion: "evidence-0.1.0", purpose: "Challenge claims against the exact captured source bundle.", question: "What do we actually know?", tools: ["read_parent_output", "read_parent_sources"], handoffs: ["human-decision"], outputSchema: "EvidenceOutput@0.1.0" },
  operations: { ...base, id: "operations", name: "VeyAI Operations", status: "shell", promptVersion: "disabled", purpose: "Eventually structure human-approved programme proposals.", question: "What needs to happen next?", tools: [], handoffs: [], outputSchema: "Not executable" },
  capital: { ...base, id: "capital", name: "VeyAI Capital", status: "shell", promptVersion: "disabled", purpose: "Eventually explore the capability created by capital scenarios.", question: "Where can the next euro create useful capability?", tools: [], handoffs: [], outputSchema: "Not executable" },
};
