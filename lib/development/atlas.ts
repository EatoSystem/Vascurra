export const atlasFixtures = {
  question: { id: "Q-001", label: "Question", text: "What can a fictional observational study tell us about a fictional routine?", status: "Open" },
  sources: [
    { id: "S-001", label: "Source", text: "Fictional observational study — training fixture", detail: "Synthetic source · 12 fictional participants" },
    { id: "S-002", label: "Source", text: "Fictional replication note — training fixture", detail: "Synthetic source · no external publication" },
  ],
  findings: [
    { id: "F-001", label: "Finding", text: "The fixture reports an association.", detail: "Reported information · linked to S-001" },
    { id: "F-002", label: "Finding", text: "A second fixture does not reproduce the direction.", detail: "Reported information · linked to S-002" },
  ],
  interpretation: { id: "I-001", label: "Interpretation", text: "The synthetic records conflict and do not establish causality.", detail: "VeyAI proposal · requires human review" },
  hypothesis: { id: "H-001", label: "Hypothesis", text: "A larger, pre-specified study could clarify whether the observed difference persists.", detail: "Candidate question · not a conclusion" },
  unknowns: ["Independent replication", "Generalisability", "Causal mechanism"],
  researcher: { id: "R-001", label: "Researcher", text: "Fictional Researcher A", detail: "Synthetic identity · no outreach enabled" },
  institution: { id: "ORG-001", label: "Institution", text: "Fictional Research Institute", detail: "Synthetic organisation · no partnership implied" },
  decision: { id: "D-001", label: "Decision", text: "Investigate further", detail: "Human decision on versions Q-001 / E-001" },
  programme: { id: "P-001", label: "Programme concept", text: "Replication design exploration", detail: "Proposal only · no programme initiated" },
} as const;

export const programmeFixture = {
  objective: "Design a human-reviewable replication proposal for a fictional research question.",
  workstreams: ["Protocol framing", "Evidence gap review", "Governance and feasibility"],
  milestones: ["Question approved", "Protocol reviewed", "Feasibility decision"],
  dependencies: ["Current Evidence output", "Named human owner", "Approved governance route"],
  roles: ["Programme owner", "Evidence reviewer", "Scientific adviser"],
  risks: ["Overinterpreting synthetic evidence", "Unclear ownership", "Premature external action"],
  decisions: ["Proceed to design", "Return to Research", "Hold"],
  timeline: "Illustrative 12-week planning horizon; no schedule committed.",
  measures: ["Traceable decisions", "Explicit unknowns", "Reviewed source set"],
} as const;

export const capitalFixture = {
  range: "€1–5M illustrative capability horizon",
  capability: "A small, governed research and product team with durable evidence operations.",
  categories: ["People", "Research operations", "Product infrastructure", "Governance"],
  readiness: "Requires an approved programme and reviewed cost model.",
  learning: "Tests whether institutional learning can improve the next support question.",
  fit: "Supports the Research → Evidence → Human Decision loop.",
  risks: ["Capital before evidence", "Unreviewed commercial assumptions", "Concentration of authority"],
  horizon: "Foundation · Brain Cells remain symbolic participation.",
} as const;
