import {
  brainCellHorizons,
  brainCellMissionNumber,
  formatMissionEuro,
  formatScale,
  horizonBrainCellsById,
  missionFlow,
  ultimateBrainCellTarget,
  ultimateCapitalTargetCents,
  type CapitalHorizonId,
} from "./brain-cells";

/** Research context only. These sources do not endorse Vascurra or validate its proposals. */
export const researchSources = {
  ninds: {
    title: "NINDS: Dementias",
    href: "https://www.ninds.nih.gov/health-information/disorders/dementias",
    scope: "Background on vascular contributions to cognitive impairment and dementia, mixed pathology, vascular factors and imaging.",
  },
  ukDri: {
    title: "UK DRI: Centre for Vascular Dementia Research",
    href: "https://ukdri.ac.uk/our-story/centres/vascular-dementia-research/research",
    scope: "Research context for blood flow, blood-brain barrier function, white matter, biomarkers and experimental and human validation.",
  },
  nhlbi: {
    title: "NHLBI: Vascular Dementia",
    href: "https://www.nhlbi.nih.gov/health/vascular-dementia",
    scope: "Background on vascular dementia and vascular health factors; not evidence for a Vascurra intervention.",
  },
  vcidWorkshop: {
    title: "NHLBI: VCID Working Group executive summary",
    href: "https://www.nhlbi.nih.gov/events/2018/nhlbi-working-group-vascular-contributions-cognitive-impairment-and-dementia-executive",
    scope: "Research priorities and questions concerning vascular contributions, mechanisms, mixed pathology and translation.",
  },
  markVcid: {
    title: "MarkVCID: Consortium overview",
    href: "https://markvcid.partners.org/about/m2-consortium-overview",
    scope: "Context for rigorous development and validation of candidate VCID biomarkers across research settings.",
  },
  strive2: {
    title: "STRIVE-2: Neuroimaging standards for small vessel disease",
    href: "https://idealab.ucdavis.edu/sites/g/files/dgvnsk16256/files/media/documents/1-s2.0-S147444222300131X-main.pdf",
    scope: "Terminology and methodological context for imaging research; not evidence of automated Vascurra diagnosis.",
  },
  nihAi: {
    title: "NIH: Artificial Intelligence in research",
    href: "https://osp.od.nih.gov/policies/artificial-intelligence/",
    scope: "Responsible AI research, participant protections, data stewardship, privacy and governance considerations.",
  },
} as const;

export type ResearchSourceId = keyof typeof researchSources;
export type ResearchProgrammeStatus =
  | "Proposed research programme"
  | "Proposed research capability"
  | "Proposed long-term research programme"
  | "Proposed long-term therapeutics research"
  | "Proposed long-term infrastructure";

export type ResearchProgramme = {
  readonly id: string;
  readonly name: string;
  readonly status: ResearchProgrammeStatus;
  readonly headline: string;
  readonly description: string;
  readonly domains: readonly string[];
  readonly aiRoles: readonly string[];
  readonly humanExpertise: readonly string[];
  readonly question?: string;
  readonly boundary: string;
  readonly sourceIds: readonly ResearchSourceId[];
};

/** Static programme proposals, not active studies, services, datasets or clinical tools. */
export const researchProgrammes = {
  atlas: {
    id: "atlas",
    name: "Vascurra Atlas",
    status: "Proposed research programme",
    headline: "Map what the world already knows.",
    description: "A proposed source-aware map of vascular cognitive health research, connecting findings, methods, uncertainties and unanswered questions.",
    domains: ["Mechanisms", "Vascular factors", "Candidate biomarkers", "Intervention hypotheses", "Outcomes", "Evidence", "Studies", "Researchers"],
    aiRoles: ["Assist a scientific literature watch", "Extract findings for review", "Link mechanisms, candidate markers and intervention hypotheses to sources", "Record contradictions and gaps", "Assist evidence-quality review", "Track published trials and research activity"],
    humanExpertise: ["Evidence reviewers", "Domain researchers", "Research librarians", "Knowledge engineers"],
    question: "What is known, what remains uncertain, and where could careful investigation add knowledge?",
    boundary: "The Atlas is proposed. A connected knowledge map would not establish clinical truth or replace expert appraisal.",
    sourceIds: [],
  },
  evidence: {
    id: "evidence",
    name: "Vascurra Evidence Engine",
    status: "Proposed research programme",
    headline: "Turn evidence into better questions.",
    description: "A proposed evidence-review capability that would retain sources, uncertainty and conflicting results while helping researchers formulate questions.",
    domains: ["Cerebral perfusion", "Hypertension", "Diabetes", "Small vessel disease", "White matter injury", "Inflammation", "Blood-brain barrier function", "Sleep", "Exercise", "Nutrition", "Medication context", "Mixed Alzheimer’s and vascular pathology"],
    aiRoles: ["Assist evidence synthesis", "Compare study methods", "Surface uncertainty", "Propose questions for review"],
    humanExpertise: ["Vascular neurologists", "Evidence reviewers", "Statisticians", "Clinical researchers"],
    question: "Which findings are sufficiently supported, which conflict, and which questions merit formal study?",
    boundary: "Evidence maps and research hypotheses would require human review. They would not provide personal medical advice or treatment recommendations.",
    sourceIds: ["ninds", "ukDri"],
  },
  "patient-0": {
    id: "patient-0",
    name: "Patient 0 Longitudinal Model",
    status: "Proposed research programme",
    headline: "Start with one person. Learn what matters.",
    description: "Beginning with Dad, Patient 0 is a proposed co-design and longitudinal-learning approach grounded in the person’s experience and questions.",
    domains: ["Cognition and everyday function", "Routines", "Medication context", "Blood pressure context", "Metabolic context", "Sleep", "Movement", "Nutrition", "Clinical events", "Tests and imaging", "Chosen family observations", "Chosen Veya conversations"],
    aiRoles: ["Help organise chosen context", "Retain the source of each observation", "Prepare questions for human review"],
    humanExpertise: ["The person and chosen supporters", "Co-design researchers", "Appropriately qualified clinicians", "Privacy and governance specialists"],
    question: "What information is useful when trying to understand one person’s vascular cognitive experience over time?",
    boundary: "Co-design is not a clinical trial. One person’s experience cannot establish causation or generalisable efficacy. The website does not collect this information; future research use would require separate consent and governance.",
    sourceIds: [],
  },
  "research-infrastructure": {
    id: "research-infrastructure",
    name: "Research Infrastructure",
    status: "Proposed research capability",
    headline: "Prepare the foundations for careful investigation.",
    description: "Future research operations, methods, secure environments and evaluation processes would need to be established before studies begin.",
    domains: ["Research operations", "Study methods", "Evaluation", "Secure research environments"],
    aiRoles: ["Assist documented research workflows under review"],
    humanExpertise: ["Research operations teams", "Methodologists", "Security engineers", "Governance specialists"],
    boundary: "These are future requirements, not safeguards or research infrastructure already operating in production.",
    sourceIds: [],
  },
  "scientific-advisory-network": {
    id: "scientific-advisory-network",
    name: "Scientific Advisory Network",
    status: "Proposed research capability",
    headline: "Give the work scientific direction.",
    description: "A future multidisciplinary advisory network could help challenge priorities, methods and interpretations.",
    domains: ["Scientific review", "Methods", "Prioritisation"],
    aiRoles: [],
    humanExpertise: ["Clinicians", "Scientists", "Statisticians", "Ethics and governance specialists"],
    boundary: "No advisory appointments, partnerships or institutional endorsements are announced here.",
    sourceIds: [],
  },
  "data-governance": {
    id: "data-governance",
    name: "Data and Governance Architecture",
    status: "Proposed research capability",
    headline: "Keep provenance, permission and responsibility visible.",
    description: "Future research architecture would need explicit consent, access, source, retention and review boundaries before personal information is used.",
    domains: ["Consent", "Permissions", "Provenance", "Retention", "Research governance"],
    aiRoles: [],
    humanExpertise: ["Privacy specialists", "Research ethics specialists", "Data stewards", "Security engineers"],
    boundary: "The marketing preview gate is not research consent or health-data authentication. A language model would never be the permissions system or authoritative record.",
    sourceIds: ["nihAi"],
  },
  cohort: {
    id: "cohort",
    name: "Vascurra Cohort",
    status: "Proposed research programme",
    headline: "Study change through time.",
    description: "Potential governed longitudinal studies could examine distinct or overlapping populations, including people with vascular factors, subjective cognitive change, mild vascular cognitive impairment, vascular dementia or mixed pathology.",
    domains: ["Blood pressure", "Glucose", "Sleep", "Mobility", "Speech", "Cognition", "Medication context", "Cardiovascular history", "Laboratory measures", "MRI", "Everyday function", "Chosen family observations"],
    aiRoles: ["Assist research data organisation", "Explore longitudinal associations", "Support documented cohort stratification methods"],
    humanExpertise: ["Epidemiologists", "Clinical researchers", "Statisticians", "Research governance teams"],
    question: "How do biological, clinical and lived-context measures relate to cognitive and functional change over time?",
    boundary: "These groups are not stages of inevitable progression. There are no active Vascurra cohorts or participant targets here. Any future study would require an approved protocol, appropriate consent and independent ethical and governance review.",
    sourceIds: ["ninds", "vcidWorkshop"],
  },
  imaging: {
    id: "imaging",
    name: "Vascurra Imaging",
    status: "Proposed research programme",
    headline: "Connect imaging with carefully defined questions.",
    description: "A proposed imaging research programme would study vascular and brain measures alongside cognitive and functional change, using documented methods and expert interpretation.",
    domains: ["MRI", "White matter hyperintensities", "Lacunes", "Microbleeds", "Perivascular spaces", "Diffusion", "Perfusion", "Brain volume", "Vascular measures"],
    aiRoles: ["Assist research image analysis", "Explore multimodal associations", "Compare methods and uncertainty"],
    humanExpertise: ["Imaging scientists", "Neuroradiologists", "Vascular neurologists", "Statisticians"],
    question: "Could multimodal research connect imaging change with cognitive and functional change over time?",
    boundary: "Research image analysis would require evaluation and expert validation. This is not an automated diagnostic service.",
    sourceIds: ["strive2"],
  },
  biomarkers: {
    id: "biomarkers",
    name: "Vascurra Biomarkers",
    status: "Proposed research programme",
    headline: "Investigate candidate measures with rigour.",
    description: "A proposed programme would investigate candidate biological measures, their reproducibility and their relationship to vascular cognitive change and mixed pathology.",
    domains: ["Blood markers", "Genetics", "Metabolomics", "Inflammation", "Endothelial markers", "Blood-brain barrier measures", "Neurodegeneration markers", "Alzheimer’s-related markers"],
    aiRoles: ["Assist research modelling", "Explore associations", "Compare measurement uncertainty"],
    humanExpertise: ["Biomarker scientists", "Laboratory researchers", "Clinical researchers", "Statisticians"],
    question: "Which candidate measures are reproducible, what do they reflect, and how do their associations vary across populations and mixed pathology?",
    boundary: "Candidate biomarkers require validation for each intended use. No Vascurra biomarker, health score or risk score is presented as validated.",
    sourceIds: ["markVcid"],
  },
  "multimodal-ai": {
    id: "multimodal-ai",
    name: "Multimodal AI",
    status: "Proposed research capability",
    headline: "Explore relationships without erasing differences.",
    description: "Future methods could investigate relationships among research data types while retaining their sources, limitations and measurement context.",
    domains: ["Imaging", "Biological measures", "Clinical measures", "Lived context"],
    aiRoles: ["Assist multimodal research modelling", "Generate testable hypotheses"],
    humanExpertise: ["AI researchers", "Domain scientists", "Statisticians", "Evaluation specialists"],
    boundary: "Model outputs would be hypotheses or analyses for validation, not clinical findings. Benefits would have to be evaluated.",
    sourceIds: [],
  },
  "research-compute": {
    id: "research-compute",
    name: "Research Compute",
    status: "Proposed research capability",
    headline: "Provide resources for reproducible work.",
    description: "Future controlled compute access could support research models, analysis, evaluation and reproducible methods.",
    domains: ["Compute", "Evaluation", "Reproducibility"],
    aiRoles: ["Support evaluated research workloads"],
    humanExpertise: ["Research engineers", "Compute specialists", "Security engineers"],
    boundary: "This is proposed capacity, not a claim that Vascurra owns compute infrastructure or operates a data centre.",
    sourceIds: [],
  },
  "international-cohorts": {
    id: "international-cohorts",
    name: "International Cohorts",
    status: "Proposed research programme",
    headline: "Ask questions across different populations.",
    description: "Future collaboration could support appropriately governed studies across countries, with attention to population differences and comparable methods.",
    domains: ["Longitudinal research", "Population diversity", "Method comparability"],
    aiRoles: ["Assist harmonisation research", "Explore associations across datasets"],
    humanExpertise: ["Epidemiologists", "Local clinical researchers", "Statisticians", "Governance teams"],
    boundary: "No institutions or cohorts are committed. Cross-border work would need local approvals, lawful data arrangements and validation across settings.",
    sourceIds: [],
  },
  prevention: {
    id: "prevention",
    name: "Vascurra Prevention Engine",
    status: "Proposed research programme",
    headline: "Investigate vascular factors and intervention hypotheses.",
    description: "The proposed programme would explore research questions concerning modifiable vascular factors, trajectories and candidate interventions.",
    domains: ["Hypertension", "Diabetes", "Atrial fibrillation", "Cholesterol", "Obesity", "Sleep disorders", "Physical activity", "Diet", "Smoking", "Stroke and TIA history", "Renal health", "Inflammation", "Genetics"],
    aiRoles: ["Map evidence", "Compare published research", "Propose intervention hypotheses for formal study"],
    humanExpertise: ["Vascular neurologists", "Epidemiologists", "Clinical researchers", "Statisticians"],
    question: "Which modifiable vascular factors and candidate interventions merit formal study in relation to cognitive and functional outcomes?",
    boundary: "The name describes a research ambition. It does not mean Vascurra prevents disease, predicts individual outcomes or recommends interventions.",
    sourceIds: ["nhlbi", "vcidWorkshop"],
  },
  "digital-phenotyping": {
    id: "digital-phenotyping",
    name: "Digital Phenotyping",
    status: "Proposed research programme",
    headline: "Study potential measures with consent and care.",
    description: "A proposed research programme could evaluate whether optional, purpose-specific digital measures are useful for defined scientific questions.",
    domains: ["Speech", "Language", "Typing", "Walking", "Sleep", "Routine change", "Planning difficulty", "Reaction time", "Device interaction"],
    aiRoles: ["Explore research associations", "Evaluate measurement limitations"],
    humanExpertise: ["Behavioural scientists", "Measurement researchers", "Statisticians", "Privacy and ethics specialists"],
    question: "Which optional measures, if any, are reliable and useful for a specific research question?",
    boundary: "Every proposed measure would need validation before clinical interpretation. This would not authorise surveillance, continuous monitoring or passive clinical inference; participation would need separate explicit consent and governance.",
    sourceIds: [],
  },
  "multimodal-intelligence": {
    id: "multimodal-intelligence",
    name: "Multimodal Intelligence",
    status: "Proposed research capability",
    headline: "Compare patterns, then test the explanation.",
    description: "Future research methods could help investigators examine relationships among imaging, biomarkers, clinical measures and lived context.",
    domains: ["Multimodal methods", "Association", "Uncertainty", "Validation"],
    aiRoles: ["Explore patterns", "Generate competing hypotheses", "Assist evaluation"],
    humanExpertise: ["Domain researchers", "AI researchers", "Statisticians", "Methodologists"],
    boundary: "A pattern would not establish causation or clinical meaning. Each proposed method would require independent evaluation.",
    sourceIds: [],
  },
  "common-data-model": {
    id: "common-data-model",
    name: "Vascurra Common Data Model",
    status: "Proposed research capability",
    headline: "Connect information without losing its source.",
    description: "A proposed research structure would distinguish lived context, clinical information, imaging, biomarkers, cognition, vascular measures and research outcomes.",
    domains: ["Lived context", "Clinical information", "Imaging", "Biomarkers", "Cognition", "Vascular measures", "Research outcomes"],
    aiRoles: ["Assist mapping and consistency review under defined permissions"],
    humanExpertise: ["Data stewards", "Clinical informaticians", "Research engineers", "Privacy and governance specialists"],
    boundary: "Reported information, measured data, verified records, calculations, AI interpretation and clinician confirmation must remain distinct. Source, uncertainty, consent and permissions would be explicit; no research data platform is live here.",
    sourceIds: [],
  },
  "institutional-partnerships": {
    id: "institutional-partnerships",
    name: "Clinical and Institutional Partnerships",
    status: "Proposed research capability",
    headline: "Build collaboration around defined questions.",
    description: "Future partnerships could bring complementary scientific, clinical and institutional expertise to approved research programmes.",
    domains: ["Collaboration", "Governance", "Research operations"],
    aiRoles: [],
    humanExpertise: ["Researchers", "Clinicians", "Research institutions", "Governance specialists"],
    boundary: "These are potential forms of collaboration, not announced or endorsed partnerships.",
    sourceIds: [],
  },
  "global-research-network": {
    id: "global-research-network",
    name: "Global Research Network",
    status: "Proposed research capability",
    headline: "Connect durable research capacity.",
    description: "A long-term network could connect research teams, shared methods and infrastructure around defined scientific questions.",
    domains: ["Research collaboration", "Methods", "Knowledge infrastructure"],
    aiRoles: ["Assist source-aware knowledge exchange"],
    humanExpertise: ["Scientific leaders", "Research teams", "Institutional and governance partners"],
    boundary: "This is a long-term proposal. No global network, partner institutions or active programmes are announced.",
    sourceIds: [],
  },
  "experimental-medicine": {
    id: "experimental-medicine",
    name: "Experimental Medicine",
    status: "Proposed research programme",
    headline: "Test hypotheses through formal investigation.",
    description: "Future experimental work could investigate mechanisms and candidate interventions through appropriate laboratory, experimental and clinical research stages.",
    domains: ["Mechanisms", "Experimental methods", "Candidate interventions", "Validation"],
    aiRoles: ["Assist evidence review and hypothesis prioritisation"],
    humanExpertise: ["Neurovascular biologists", "Laboratory scientists", "Clinical researchers", "Trialists"],
    boundary: "Any experimental or clinical research would require its own approvals, qualified teams and validation. No treatment benefit is promised.",
    sourceIds: ["ukDri"],
  },
  therapeutics: {
    id: "therapeutics",
    name: "AI-Assisted Therapeutics Discovery",
    status: "Proposed research programme",
    headline: "Investigate therapeutic hypotheses.",
    description: "A proposed research capability could support the exploration and prioritisation of therapeutic hypotheses for subsequent investigation.",
    domains: ["Target hypotheses", "Pathway mapping", "Drug repurposing research", "Compound prioritisation", "Published safety findings", "Blood-brain barrier properties", "Multimodal biological modelling"],
    aiRoles: ["Integrate literature", "Map pathways", "Propose candidates for expert review", "Assist research modelling"],
    humanExpertise: ["Neurovascular biologists", "Pharmacologists", "Laboratory scientists", "Clinical researchers", "Trialists"],
    question: "Which hypotheses warrant laboratory, experimental and, if justified, clinical investigation?",
    boundary: "AI-generated therapeutic hypotheses would require laboratory, experimental and clinical validation. Vascurra does not prescribe, recommend medication changes or claim a cure.",
    sourceIds: ["ukDri"],
  },
  "trial-intelligence": {
    id: "trial-intelligence",
    name: "Trial Intelligence",
    status: "Proposed research programme",
    headline: "Learn from study design and its limitations.",
    description: "A proposed methods programme would examine published trial designs, outcomes, negative findings and uncertainty to help researchers frame future studies.",
    domains: ["Historical trials", "Recruitment methods", "Heterogeneity", "Endpoints", "Duration", "Candidate biomarkers", "Failure modes", "Subgroups"],
    aiRoles: ["Assist published trial review", "Compare design choices", "Explore study-design simulations"],
    humanExpertise: ["Trialists", "Statisticians", "Epidemiologists", "Clinical researchers", "Ethics specialists"],
    question: "What can researchers learn from previous designs, null results and failed assumptions?",
    boundary: "Simulation is not clinical evidence. This is proposed methods research, not trial matching, recruitment, enrolment or automated study approval.",
    sourceIds: [],
  },
  "dedicated-compute": {
    id: "dedicated-compute",
    name: "Dedicated Compute",
    status: "Proposed research capability",
    headline: "Sustain controlled scientific workloads.",
    description: "Long-term dedicated compute arrangements could support larger research workloads, evaluation and reproducible analysis.",
    domains: ["Compute access", "Secure environments", "Research engineering", "Evaluation"],
    aiRoles: ["Support approved and evaluated research workloads"],
    humanExpertise: ["Compute specialists", "Research engineers", "Security and governance teams"],
    boundary: "No dedicated compute infrastructure or data centre is represented as operating today.",
    sourceIds: [],
  },
  "research-fellowships": {
    id: "research-fellowships",
    name: "Research Fellowships",
    status: "Proposed research capability",
    headline: "Invest in the people who ask better questions.",
    description: "Future fellowships could support researchers and multidisciplinary expertise around defined programmes.",
    domains: ["Research expertise", "Training", "Collaboration"],
    aiRoles: [],
    humanExpertise: ["Scientists", "Clinical researchers", "Statisticians", "AI researchers"],
    boundary: "No fellowship scheme, funded positions or appointments are announced.",
    sourceIds: [],
  },
  "open-infrastructure": {
    id: "open-infrastructure",
    name: "Open Research Infrastructure",
    status: "Proposed research capability",
    headline: "Make methods and knowledge useful beyond one team.",
    description: "Future infrastructure could support responsible sharing of methods, tools and research knowledge where lawful and appropriate.",
    domains: ["Open methods", "Reproducibility", "Knowledge exchange"],
    aiRoles: ["Assist documented, source-aware research tooling"],
    humanExpertise: ["Research engineers", "Data stewards", "Methodologists", "Governance specialists"],
    boundary: "Open research does not mean unrestricted access to personal information. Consent, privacy, licensing and governance would remain necessary.",
    sourceIds: [],
  },
} as const satisfies Readonly<Record<string, ResearchProgramme>>;

export type ResearchProgrammeId = keyof typeof researchProgrammes;

/** Detailed proposals on the page; enabling capabilities also appear in the horizons. */
export const researchProgrammeOrder = [
  "atlas", "evidence", "patient-0", "cohort", "imaging", "biomarkers",
  "prevention", "digital-phenotyping", "common-data-model", "therapeutics", "trial-intelligence",
] as const satisfies readonly ResearchProgrammeId[];

export const homepageResearchCapabilities = {
  "01": {
    capabilityLine: "Vascurra Atlas · Evidence Engine · Longitudinal Model",
    descriptor: "Build the systems required to ask better questions.",
  },
  "02": {
    capabilityLine: "Imaging · Biomarkers · Longitudinal Research",
    descriptor: "Move from individual learning to structured research capability.",
  },
  "03": {
    capabilityLine: "Vascular Factor Research · Digital Phenotyping · Multimodal Intelligence · International Cohorts",
    descriptor: "Connect institutions, populations and research programmes.",
  },
  "04": {
    capabilityLine: "Global Research Network · Experimental Medicine · Compute · Therapeutics · Trial Intelligence · Discovery",
    descriptor: "Build durable research infrastructure capable of operating continuously.",
  },
} as const satisfies Readonly<Record<CapitalHorizonId, { readonly capabilityLine: string; readonly descriptor: string }>>;

const horizonProgrammeIds = {
  "01": ["atlas", "evidence", "patient-0", "research-infrastructure", "scientific-advisory-network", "data-governance"],
  "02": ["cohort", "imaging", "biomarkers", "multimodal-ai", "research-compute"],
  "03": ["international-cohorts", "prevention", "digital-phenotyping", "multimodal-intelligence", "common-data-model", "institutional-partnerships"],
  "04": ["global-research-network", "experimental-medicine", "therapeutics", "trial-intelligence", "dedicated-compute", "research-fellowships", "open-infrastructure"],
} as const satisfies Readonly<Record<CapitalHorizonId, readonly ResearchProgrammeId[]>>;

const researchHorizonTitles = {
  "01": "Build the research foundation.",
  "02": "Build the Research Engine.",
  "03": "Build the international network.",
  "04": "Build permanent global capacity.",
} as const satisfies Readonly<Record<CapitalHorizonId, string>>;

export type ResearchHorizon = {
  readonly id: CapitalHorizonId;
  readonly title: string;
  readonly status: "Proposed planning horizon";
  readonly amount: (typeof brainCellHorizons)[number]["amount"];
  readonly brainCells: string;
  readonly programmeIds: readonly ResearchProgrammeId[];
  readonly capabilityLine: string;
  readonly descriptor: string;
};

export const researchHorizons = brainCellHorizons.map((horizon) => ({
  id: horizon.id,
  title: researchHorizonTitles[horizon.id],
  status: "Proposed planning horizon",
  amount: horizon.amount,
  brainCells: horizonBrainCellsById(horizon.id),
  programmeIds: horizonProgrammeIds[horizon.id],
  ...homepageResearchCapabilities[horizon.id],
})) satisfies readonly ResearchHorizon[];

export const longTermProgrammes = [
  {
    id: "prevention-project",
    name: "Vascurra Prevention Project",
    status: "Proposed long-term research programme",
    headline: "Investigate prevention hypotheses at a larger scale.",
    description: "A long-term proposal for coordinated research into vascular factors and candidate interventions, guided by evidence and formal evaluation.",
    domains: ["Vascular factors", "Candidate interventions", "Longitudinal research", "Validation"],
    aiRoles: ["Assist evidence review and hypothesis generation"],
    humanExpertise: ["Clinical researchers", "Epidemiologists", "Trialists", "Statisticians"],
    boundary: "The name is an ambition for research, not a claim that Vascurra prevents dementia, stroke or cognitive change.",
    sourceIds: [],
  },
  {
    id: "human-vascular-brain-atlas",
    name: "Human Vascular Brain Atlas",
    status: "Proposed long-term research programme",
    headline: "Connect knowledge across scales.",
    description: "A long-term proposal to connect source-aware knowledge from biological, imaging, clinical and population research.",
    domains: ["Vascular biology", "Brain imaging", "Cognition", "Metabolism", "Genetics", "Everyday function", "Environment", "Lived experience"],
    aiRoles: ["Assist knowledge mapping", "Generate questions for review"],
    humanExpertise: ["Neurovascular scientists", "Imaging scientists", "Clinical researchers", "Knowledge engineers"],
    boundary: "No completed atlas or integrated research dataset exists as part of this website.",
    sourceIds: [],
  },
  {
    id: "cure-programme",
    name: "Vascurra Cure Programme",
    status: "Proposed long-term therapeutics research",
    headline: "Pursue disease-modifying solutions.",
    description: "A long-term therapeutics research ambition: investigate competing biological hypotheses and candidate approaches through appropriate experimental and clinical validation.",
    domains: ["Neurovascular unit", "Endothelium", "Pericytes", "Blood-brain barrier", "White matter", "Inflammation", "Metabolism", "Microvascular dysfunction", "Repair hypotheses", "Neuroprotection hypotheses"],
    aiRoles: ["Assist literature integration and hypothesis prioritisation"],
    humanExpertise: ["Neurovascular biologists", "Pharmacologists", "Laboratory scientists", "Clinical researchers", "Trialists"],
    boundary: "The name expresses an ambition, not a cure promise. No disease-modifying effect, treatment benefit or clinical outcome is claimed; hypotheses may fail and priorities must change with evidence.",
    sourceIds: [],
  },
  {
    id: "experimental-medicine-network",
    name: "Experimental Medicine Network",
    status: "Proposed long-term research programme",
    headline: "Bring hypotheses to appropriately governed investigation.",
    description: "A future network could connect expertise and facilities for formal investigation when evidence, capability and approvals justify it.",
    domains: ["Experimental methods", "Research collaboration", "Validation"],
    aiRoles: ["Assist research coordination and evidence review"],
    humanExpertise: ["Laboratory scientists", "Clinical researchers", "Trialists", "Ethics and governance teams"],
    boundary: "No network, facilities, clinical studies or institutional partnerships are announced.",
    sourceIds: [],
  },
  {
    id: "permanent-ai-infrastructure",
    name: "Permanent AI Research Infrastructure",
    status: "Proposed long-term infrastructure",
    headline: "Sustain the ability to keep investigating.",
    description: "A long-term proposal for controlled compute, research methods, evaluation and expertise that could support continued scientific work.",
    domains: ["Compute", "Research engineering", "Evaluation", "Knowledge infrastructure"],
    aiRoles: ["Support approved, evaluated and human-reviewed research workloads"],
    humanExpertise: ["AI researchers", "Research engineers", "Compute specialists", "Security and governance teams"],
    boundary: "Permanent describes the ambition for durable capacity. No operational infrastructure, continuous autonomous research service or guaranteed AI benefit is claimed.",
    sourceIds: [],
  },
] as const satisfies readonly ResearchProgramme[];

export const researchMission = {
  label: "The full long-term mission",
  brainCells: `${formatScale(ultimateBrainCellTarget)} Brain Cells`,
  capital: formatMissionEuro(ultimateCapitalTargetCents),
  number: brainCellMissionNumber,
  capabilityLine: "Proposed long-term programmes: Prevention Project · Human Vascular Brain Atlas · Cure Programme · Experimental Medicine Network · Permanent AI Research Infrastructure",
  homepageCapabilityLine: "Proposed long-term research: Vascular Factors · Human Vascular Brain Atlas · Cure Programme · Experimental Medicine Network · Permanent AI Research Infrastructure",
  boundary: "Proposed long-term research, separate from the four horizons: no active programmes, funding commitments or promised outcomes. The Cure Programme describes therapeutics research, not a cure promise.",
} as const;

export const reinvestmentFlow = missionFlow;

export const researchEngine = {
  hero: {
    eyebrow: "Vascurra Research Engine",
    title: ["Build the capability", "to investigate", "a different future."],
    lead: "Vascurra is being designed as more than a support system. Over time, the mission is to build permanent scientific, technological and institutional capability around vascular cognitive health.",
    aiLead: "AI may help organise evidence, connect data, surface patterns, generate hypotheses and support investigation. Human researchers remain responsible for scientific judgement, validation and clinical translation.",
    status: "Proposed research architecture · In development",
    boundary: "This page describes future research programmes and capabilities. It does not announce active studies, clinical services, enrolled participants, operational AI systems or validated outcomes.",
  },
  capital: {
    title: "Capital should not just fund activity. It should build capability.",
    body: "Financial resources could help build the people, methods, technology and institutions required for sustained investigation. These planning horizons describe potential capability, not fixed spending plans or guaranteed programmes. Brain Cells are symbolic units of mission capacity, not biological cell counts.",
    items: ["Expertise", "Software", "AI", "Compute", "Data infrastructure", "Cohorts", "Scientific methods", "Partnerships", "Research operations", "Durable knowledge"],
  },
  programmes: {
    title: "Programmes that turn capability into questions.",
    lead: "Each proposal would need the right expertise, evidence, methods and governance before it could become a research programme.",
    boundary: "All programmes below are proposed. The domains are candidate areas for investigation, not current measurements, validated indicators or inevitable stages of disease.",
  },
  ai: {
    title: ["AI is not the scientist.", "It is a research multiplier."],
    lead: "AI could increase research capacity in specific, evaluated tasks. Its usefulness, reliability and limitations would need to be tested; more output would not automatically mean better science.",
    roles: ["Literature surveillance", "Evidence synthesis", "Source-aware knowledge graphs", "Hypothesis generation", "Multimodal pattern research", "Research imaging analysis", "Candidate biomarker modelling", "Longitudinal modelling", "Cohort stratification research", "Trial-design analysis", "Drug-repurposing research", "Research simulation", "Controlled research-agent workflows"],
    humanResponsibilities: ["Scientific judgement", "Experimental and study design", "Ethics and governance", "Clinical interpretation", "Validation", "Regulatory responsibility", "Treatment decisions by appropriately qualified professionals"],
    limits: ["Establish clinical truth independently", "Replace researchers", "Diagnose patients", "Determine treatment", "Convert correlation into causation", "Bypass validation"],
    boundary: "These are proposed research roles. AI-generated analyses and hypotheses would require appropriate human review and validation; they would not become clinical findings by default.",
  },
  loop: {
    title: "A learning loop with clear boundaries.",
    steps: ["Lived experience", "Structured context", "Evidence", "AI-assisted analysis", "Research questions", "Formal study", "New knowledge", "Better tools and better questions", "Back to the person"],
    body: "The proposed loop would connect lived context to formal investigation while keeping observation, interpretation and research evidence distinct. Each transition would require an appropriate purpose, permission and review path.",
    boundary: "Everyday observations are not clinical findings. Product participation would not automatically mean research participation or access to personal information.",
  },
  compute: {
    title: "Research requires compute.",
    body: "Future secure, controlled compute arrangements could support reproducible scientific workloads alongside the people and methods needed to evaluate them.",
    items: ["Multimodal research models", "Imaging research", "Causal-inference methods", "Statistical modelling", "Genomics research", "Drug-discovery research", "Simulation", "Evaluated research-agent concepts"],
    boundary: "This is proposed research capacity, not an operating data centre or an autonomous clinical AI system.",
  },
  dailyJob: {
    title: "Every day, ask:",
    question: "What do we know today that we did not know yesterday?",
    inputs: ["Papers", "Appropriately accessible datasets", "Published trials", "Drug-research findings", "Candidate biomarkers", "Patents", "Conference findings", "Negative results", "Replication failures"],
    questions: ["Does this change a hypothesis?", "Does it contradict a previous finding?", "What new question does it raise?", "Is there an intervention hypothesis worth formal investigation?", "Could separate findings be connected?", "What should a human review next?"],
    boundary: "AI proposes. Humans review. This is a proposed research workflow, not a live ingestion service, autonomous experiment or clinical decision system.",
  },
  expertise: {
    title: ["AI may increase capacity.", "Expertise gives it direction."],
    body: "The ambition is to bring people with complementary expertise into carefully defined research programmes. Capital would need to support the people who design, challenge and validate the work as well as the technology.",
    roles: ["Vascular neurologists", "Neuroscientists", "Neurovascular biologists", "Geriatricians", "Imaging scientists", "Data scientists", "AI researchers", "Statisticians", "Trialists", "Epidemiologists", "Behavioural scientists", "Ethics, privacy and governance specialists", "Product and systems engineers"],
    boundary: "These are future expertise requirements, not announced staff, advisers or endorsements.",
  },
  capitalForms: {
    title: "Financial capital is only the beginning.",
    items: [
      { label: "Human capital", body: "Expertise, judgement and the people who do the work." },
      { label: "Technical capital", body: "Software, AI, compute and research engineering." },
      { label: "Scientific capital", body: "Evidence, data, methods and knowledge." },
      { label: "Institutional capital", body: "Partnerships, governance and trust." },
      { label: "Financial capital", body: "Resources to build and sustain the other forms of capability." },
    ],
  },
  reinvestment: {
    title: "Build capacity that can sustain further work.",
    body: "Future products and institutional services might generate revenue that could be reinvested in research and development. This is a proposed mission model, not current revenue or a proven financing mechanism.",
    flow: reinvestmentFlow,
    boundary: "Research, products, revenue and reinvestment remain future possibilities. No financial return or clinical outcome is guaranteed.",
  },
  principles: {
    title: "Research principles.",
    items: ["People first", "Evidence before claims", "AI assists; humans decide", "Observation is not diagnosis", "Provenance and uncertainty stay visible", "Negative results matter", "Research is separately consented and governed", "Capital follows evidence"],
  },
  allocation: {
    title: "Capital follows evidence.",
    flow: ["Evidence", "Decision", "Capital", "Capability", "Measurement", "Reallocation"],
    criteria: ["Strength of evidence", "Scientific opportunity", "Capability readiness", "Validation requirements", "Expert judgement", "Safety", "Potential impact"],
    body: "Research priorities would evolve as evidence and capability develop. Funding decisions would need to support promising questions, examine competing hypotheses and stop or redirect work when findings do not support it.",
  },
  closing: {
    title: ["Build the capability", "to keep learning."],
    humanLine: ["For the people we love now.", "For all of us in the future."],
    label: researchMission.label,
    boundary: "The ambition is durable research capacity. The route, priorities and outcomes remain uncertain and must be guided by evidence, expertise and responsible governance.",
  },
} as const;
