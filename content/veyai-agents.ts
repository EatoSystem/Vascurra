import { brainCellHorizons, horizonBrainCellsById, type CapitalHorizonId } from "./brain-cells";

export type VeyAIAgent = {
  readonly id: string;
  readonly name: string;
  readonly family: "mission" | "organisation";
  readonly horizon: CapitalHorizonId;
  readonly placement: "horizon" | "organisation";
  readonly status: "proposed" | "future" | "long-term";
  readonly purpose: string;
  readonly description: string;
  readonly responsibilities: readonly string[];
  readonly outputs?: readonly string[];
  readonly domains?: readonly string[];
  readonly prohibitedActions: readonly string[];
  readonly humanOwner: string;
};

export const agentStatusLabels = {
  proposed: "Proposed agent",
  future: "Future agent",
  "long-term": "Long-term capability",
} as const;

export const veyaiAgents = [
  {
    id: "research", name: "Research", family: "mission", horizon: "01", placement: "horizon", status: "proposed",
    purpose: "What should Vascurra investigate next?",
    description: "Search and organise scientific literature, connect questions across disciplines and prepare research directions for expert review.",
    responsibilities: ["Literature and science watch", "Evidence discovery and study comparison", "Researcher and laboratory mapping", "Hypothesis generation and evidence-gap mapping", "Emerging-science and programme proposals"],
    outputs: ["Research briefs", "Evidence maps", "Hypothesis registers", "Scientific questions", "Scientist maps", "Programme proposals"],
    prohibitedActions: ["Does not establish clinical truth or approve a research programme."], humanOwner: "An appointed scientific lead, with relevant subject experts.",
  },
  {
    id: "evidence", name: "Evidence", family: "mission", horizon: "01", placement: "horizon", status: "proposed",
    purpose: "What do we actually know?",
    description: "An internal sceptic: challenge a proposed interpretation, trace its sources and make uncertainty visible before it informs a decision.",
    responsibilities: ["Source and provenance checks", "Study quality, sample and population context", "Contradictions and replication", "Causal versus observational evidence", "Uncertainty and evidence grading", "Challenge unsupported claims"],
    prohibitedActions: ["Cannot certify evidence or turn an AI assessment into scientific authority."], humanOwner: "A qualified evidence reviewer, with independent scientific review where needed.",
  },
  {
    id: "operations", name: "Operations", family: "organisation", horizon: "01", placement: "horizon", status: "proposed",
    purpose: "What needs to happen next?",
    description: "Translate an approved idea into a practical proposal with dependencies, accountable owners and a sequence of work.",
    responsibilities: ["Plans, milestones and schedules", "Dependencies, owners and budget assumptions", "Risk registers", "Progress reporting and coordination"],
    prohibitedActions: ["Cannot independently approve major programmes, budgets or external commitments."], humanOwner: "The accountable programme or operations lead.",
  },
  {
    id: "capital", name: "Capital", family: "organisation", horizon: "01", placement: "horizon", status: "proposed",
    purpose: "Where can the next euro create the most useful capability?",
    description: "Prepare resource scenarios that connect evidence, priorities and proposed capability. Make assumptions and trade-offs open to review.",
    responsibilities: ["Programme costing and allocation models", "Runway and capability economics", "Funding scenarios and priorities", "Resource matching", "Reinvestment and capital-horizon planning"],
    prohibitedActions: ["Cannot move money, approve budgets or allocate capital autonomously."], humanOwner: "Human leadership and the authorised finance or capital decision-maker.",
  },
  {
    id: "cohorts", name: "Cohorts", family: "mission", horizon: "02", placement: "horizon", status: "future",
    purpose: "Help shape research that can be followed over time.",
    description: "Support formal study design and review of research populations, variables and follow-up requirements.",
    responsibilities: ["Cohort structure and proposed participant segmentation", "Longitudinal-variable and follow-up planning", "Missing-data checks", "Heterogeneity analysis", "Research feasibility"],
    prohibitedActions: ["Cannot recruit, enrol or clinically classify participants autonomously."], humanOwner: "The principal investigator, study team and statistical lead.",
  },
  {
    id: "imaging", name: "Imaging", family: "mission", horizon: "02", placement: "horizon", status: "future",
    purpose: "Explore imaging measures as research evidence.",
    description: "Assist qualified teams with image-derived feature exploration and comparison of research methods.",
    domains: ["MRI", "White-matter change", "Lacunes", "Microbleeds", "Diffusion", "Perfusion", "Vascular markers"],
    responsibilities: ["Research analysis", "Model benchmarking", "Image-derived feature exploration", "Multimodal research integration"],
    prohibitedActions: ["Is not an autonomous diagnostic system. Research outputs require specialist review and intended-use validation."], humanOwner: "Qualified imaging researchers and relevant clinical specialists.",
  },
  {
    id: "biomarkers", name: "Biomarkers", family: "mission", horizon: "02", placement: "horizon", status: "future",
    purpose: "Which candidate measures merit further study?",
    description: "Link evidence about candidate measures and prepare combinations or study designs for scientific review.",
    domains: ["Blood and metabolic markers", "Inflammation", "Genetics", "Endothelial markers", "Blood–brain barrier signals", "Neurodegenerative markers"],
    responsibilities: ["Evidence linking", "Combination analysis", "Candidate prioritisation", "Study-design support"],
    prohibitedActions: ["Cannot establish a validated biomarker or make a clinical interpretation. Intended-use validation is required."], humanOwner: "Biomarker scientists, statisticians and appropriate clinical specialists.",
  },
  {
    id: "compute", name: "Compute", family: "organisation", horizon: "02", placement: "horizon", status: "future",
    purpose: "Make research work reproducible and reviewable.",
    description: "A proposed assistant for planning compute, comparing methods and maintaining traceability across experiments.",
    responsibilities: ["Model evaluation and benchmarking", "Research-compute allocation proposals", "Secure-execution planning", "Reproducibility and workload analysis", "Model and version tracking"],
    prohibitedActions: ["Cannot independently provision infrastructure, broaden access or approve model deployment."], humanOwner: "Research engineering, security and infrastructure leads.",
  },
  {
    id: "partnerships", name: "Partnerships", family: "organisation", horizon: "03", placement: "horizon", status: "future",
    purpose: "Who already has capability that Vascurra should connect with rather than recreate?",
    description: "Prepare a considered map of potential collaborators and complementary capability. No partnership is implied by this proposal.",
    responsibilities: ["Map laboratories, universities and hospitals", "Research groups and technology capability", "Foundations and institutions", "Strategic collaborator research and fit assessment"],
    prohibitedActions: ["Cannot contact researchers, enter partnerships or sign contracts without human approval and appropriate permissions."], humanOwner: "The partnerships lead and authorised institutional representatives.",
  },
  {
    id: "clinical-research", name: "Clinical Research", family: "mission", horizon: "03", placement: "horizon", status: "future",
    purpose: "Prepare stronger questions for formal study.",
    description: "Support investigators as they assess a potential study and the expertise, infrastructure and approvals it would require.",
    responsibilities: ["Protocol analysis and feasibility", "Eligibility-framework and endpoint mapping", "Trial-infrastructure planning", "Site-coordination support", "Regulatory dependency tracking"],
    prohibitedActions: ["Cannot run trials, make clinical decisions, change clinical records or enrol participants autonomously. Human investigators remain responsible."], humanOwner: "The principal investigator, study sponsor and appropriately qualified study team.",
  },
  {
    id: "prevention", name: "Prevention", family: "mission", horizon: "03", placement: "horizon", status: "future",
    purpose: "Which modifiable vascular factors and candidate interventions merit formal study?",
    description: "A research role for reviewing questions about vascular factors and cognitive or functional outcomes. The name expresses a research interest, not a claim that Vascurra prevents disease.",
    domains: ["Hypertension", "Diabetes", "Atrial fibrillation", "Cholesterol", "Sleep", "Physical activity", "Diet", "Obesity", "Smoking", "Stroke and TIA", "Renal health", "Inflammation", "Genetics"],
    responsibilities: ["Evidence synthesis across research domains", "Compare study questions and populations", "Surface gaps for qualified review"],
    prohibitedActions: ["Cannot provide personal prevention prescriptions, treatment advice or medication recommendations."], humanOwner: "Qualified vascular, cognitive-health and prevention researchers.",
  },
  {
    id: "governance", name: "Governance", family: "organisation", horizon: "03", placement: "horizon", status: "future",
    purpose: "Are we allowed to do this? Should we do this? Can we explain why?",
    description: "Assist people in reviewing consent requirements, policy questions and records of decisions. Governance is required from the foundation; a specialist agent would be a later aid.",
    responsibilities: ["Consent and permission requirement review", "Data-access and research boundaries", "Privacy, ethics and policy checks", "Audit-history review", "Agent-access and model-use boundary review"],
    prohibitedActions: ["A language model cannot grant permission or serve as the permissions system. Deterministic services enforce access; accountable humans approve policy and exceptions."], humanOwner: "Named privacy, security, ethics and governance owners, with independent review where required.",
  },
  {
    id: "therapeutics", name: "Therapeutics", family: "mission", horizon: "04", placement: "horizon", status: "long-term",
    purpose: "Prepare therapeutic hypotheses worth testing.",
    description: "A possible future research assistant for linking mechanisms and evidence into questions for experimental teams.",
    responsibilities: ["Pathway mapping and target identification", "Drug-repurposing and compound-prioritisation hypotheses", "Evidence integration and safety-signal review", "Blood–brain barrier property analysis", "Therapeutic hypothesis generation"],
    prohibitedActions: ["AI-generated therapeutic hypotheses require laboratory, experimental and clinical validation. No prescribing, treatment recommendation or cure promise."], humanOwner: "Therapeutics scientists, experimental teams and qualified clinical investigators.",
  },
  {
    id: "trial-intelligence", name: "Trial Intelligence", family: "mission", horizon: "04", placement: "horizon", status: "long-term",
    purpose: "Learn from how studies are designed.",
    description: "Review previous study designs and prepare scenarios that help investigators question assumptions.",
    responsibilities: ["Historic trial designs and failure modes", "Endpoint comparison", "Recruitment assumptions and population heterogeneity", "Biomarker strategies", "Study-design scenario testing"],
    prohibitedActions: ["Simulation is not clinical evidence. Formal trials and qualified human oversight remain necessary."], humanOwner: "Trial-methodology experts, statisticians and clinical investigators.",
  },
  {
    id: "discovery", name: "Discovery", family: "mission", horizon: "04", placement: "horizon", status: "long-term",
    purpose: "Search beyond the obvious.",
    description: "Connect research across disciplines and propose experiments that deserve human attention.",
    responsibilities: ["Cross-domain hypotheses and mechanism linking", "Contradiction and evidence-gap discovery", "Interdisciplinary synthesis", "Proposals for experiments"],
    prohibitedActions: ["Cannot claim a scientific discovery without independent investigation and validation."], humanOwner: "An interdisciplinary scientific team with relevant experimental expertise.",
  },
  {
    id: "global-operations", name: "Global Operations", family: "organisation", horizon: "04", placement: "horizon", status: "long-term",
    purpose: "Help many programmes work with shared purpose.",
    description: "Support a possible international organisation with coordinated plans and clear dependencies.",
    responsibilities: ["Multi-country programme coordination", "Institutional dependencies and research operations", "Shared milestones", "Infrastructure planning", "Programme reporting"],
    prohibitedActions: ["Cannot make external commitments or override local institutional, legal or study responsibilities."], humanOwner: "Accountable programme directors and institutional leads in each jurisdiction.",
  },
  {
    id: "global-capital", name: "Global Capital", family: "organisation", horizon: "04", placement: "horizon", status: "long-term",
    purpose: "Sustain capability across a long research horizon.",
    description: "Prepare portfolio scenarios that connect mission priorities, resource constraints and reinvestment.",
    responsibilities: ["Portfolio allocation proposals", "Programme-level capital and research balance", "Long-horizon funding scenarios", "Reinvestment", "Global infrastructure prioritisation"],
    prohibitedActions: ["Cannot move money or approve investment. AI recommends; humans approve."], humanOwner: "Authorised leadership, finance and capital-allocation bodies.",
  },
  {
    id: "fundraising", name: "Fundraising", family: "organisation", horizon: "01", placement: "organisation", status: "proposed",
    purpose: "Prepare the next funding conversation.",
    description: "Help people find suitable funding opportunities and prepare grounded proposals.",
    responsibilities: ["Funding-source and grant discovery", "Investor and partner research", "Opportunity qualification", "Proposal and outreach preparation", "Fundraising pipeline and diligence preparation"],
    prohibitedActions: ["Cannot send fundraising messages or contact potential funders automatically. External communication requires human approval."], humanOwner: "The fundraising lead and authorised external spokesperson.",
  },
  {
    id: "product", name: "Product", family: "organisation", horizon: "01", placement: "organisation", status: "proposed",
    purpose: "Connect the person, the product, research and learning.",
    description: "Turn appropriately shared feedback into questions, requirements and proposals that can be tested with people.",
    responsibilities: ["User-feedback synthesis", "Requirements and roadmap analysis", "Issue clustering and usability themes", "Experiment analysis", "Product-learning loops"],
    prohibitedActions: ["Cannot repurpose personal feedback for research without an approved purpose and permissions, or approve product releases."], humanOwner: "The product lead, with people participating voluntarily in appropriate co-design.",
  },
  {
    id: "finance", name: "Finance", family: "organisation", horizon: "02", placement: "organisation", status: "future",
    purpose: "Make financial assumptions traceable.",
    description: "A supporting role for preparing internal financial summaries and questions for professional review.",
    responsibilities: ["Budget-versus-plan summaries", "Cost assumptions and scenario documentation", "Reporting preparation"],
    prohibitedActions: ["Cannot authorise payments, submit accounts or replace qualified financial judgement."], humanOwner: "The authorised finance lead and qualified financial professionals.",
  },
  {
    id: "communications", name: "Communications", family: "organisation", horizon: "01", placement: "organisation", status: "proposed",
    purpose: "Explain the work without overstating it.",
    description: "Prepare clear internal and public drafts that keep sources, uncertainty and proposed capability visible.",
    responsibilities: ["Internal briefings and programme summaries", "Research translation", "Evidence-aware public communication", "Consistency checks and claim review"],
    prohibitedActions: ["Cannot publish without human approval or promote unsupported medical claims."], humanOwner: "The communications owner, with scientific and legal review where relevant.",
  },
] as const satisfies readonly VeyAIAgent[];

const horizonDescriptions: Record<CapitalHorizonId, { title: string; description: string }> = {
  "01": { title: "Build the foundation.", description: "Start with VeyAI Core and four specialist roles supporting Patient 0 co-design, Veya, the core system and proposed research infrastructure. These are architecture proposals, not deployed agents or an active study." },
  "02": { title: "Build the Research Engine.", description: "Specialist scientific assistance could follow the foundations: formal study design, imaging, candidate biomarkers and reproducible research compute." },
  "03": { title: "Build the international network.", description: "Future roles could help coordinate capability beyond Vascurra. Collaborations, studies and permissions would require separate agreement and approval." },
  "04": { title: "Build permanent global capacity.", description: "A long-term ambition for experimental research and sustained international coordination, conditional on funding, evidence, expertise and approvals." },
};

export const veyaiHorizons = brainCellHorizons.map((horizon) => ({
  ...horizon,
  ...horizonDescriptions[horizon.id],
  brainCells: horizonBrainCellsById(horizon.id),
  agents: veyaiAgents.filter((agent) => agent.horizon === horizon.id && agent.placement === "horizon"),
}));

export const agentContract = [
  { name: "Purpose", description: "A specific question, responsibility and intended use." },
  { name: "Permitted data", description: "Approved sources, purpose, sensitivity and minimum necessary access." },
  { name: "Prohibited actions", description: "Explicit limits on decisions, tools and external actions." },
  { name: "Evidence standard", description: "Required source quality, provenance, uncertainty and verification." },
  { name: "Confidence requirements", description: "Defined uncertainty and abstention rules; a model's confidence is not evidence." },
  { name: "Human owner", description: "An accountable person assigned before any agent is activated." },
  { name: "Escalation rules", description: "When to stop, ask for review or refer to appropriate expertise." },
  { name: "Audit history", description: "Traceable inputs, versions, proposals, approvals and actions, with sensitive logging minimised." },
] as const;

export const veyaiWorkflow = [
  { role: "Research", action: "Surfaces a potentially relevant finding with its source." },
  { role: "Evidence", action: "Appraises its quality, limits and contradictions." },
  { role: "Capital", action: "Models resources and states the assumptions." },
  { role: "Operations", action: "Prepares an executable programme proposal." },
  { role: "Human review", action: "Approves, changes or rejects the proposal before any action." },
] as const;

export const veyaiBoundaries = {
  status: "Proposed architecture. This page describes responsibilities to design and evaluate; it does not announce operational agents. Later horizons are future planning, not a delivery promise.",
  access: "Agents would receive only the minimum information necessary for an approved purpose. Access depends on role, purpose, permission, sensitivity and need. Consent and access must be enforced by deterministic services, never a language model.",
  authority: "A language model must never be the authoritative record, permissions system, medication source of truth, emergency protocol or clinical authority.",
  external: "External messages, contracts, payments, budget approvals, public claims, clinical-record changes and participant enrolment require appropriate permissions and accountable human approval; this website performs none of these actions.",
} as const;
