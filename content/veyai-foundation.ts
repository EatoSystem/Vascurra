/** Public explanation only. Never import private runtime contracts here. */
export const foundationPages = {
  Research: {
    question: "What should Vascurra investigate next?",
    purpose: "A proposed research assistant for finding, organising and comparing evidence, with questions and uncertainty kept visible.",
    responsibilities: ["Organise source material", "Distinguish reported findings from interpretation", "Identify unknowns and candidate research questions"],
    outputs: ["Source-linked findings", "Contradictions and limitations", "Questions for human investigation"],
    boundary: "No diagnosis, clinical recommendation, researcher outreach or programme initiation.",
    oversight: "A person requests the work. Evidence review is a separate, explicitly requested step; scientific judgement remains with people.",
  },
  Evidence: {
    question: "What do we actually know?",
    purpose: "A proposed critical appraisal assistant that challenges research claims and makes their limitations easier to inspect.",
    responsibilities: ["Examine source quality and study design", "Distinguish association from causation", "Identify uncertainty, contradictions and limits to generalisation"],
    outputs: ["Structured critiques", "Traceable supporting material", "Explicit missing evidence and review needs"],
    boundary: "An AI critique is not independent scientific validation and cannot approve its own conclusions.",
    oversight: "An assigned human reviewer compares Research, Evidence and the underlying sources before recording a decision.",
  },
  Operations: {
    question: "What needs to happen next?",
    purpose: "A future specialist for turning human-approved concepts into structured programme proposals.",
    responsibilities: ["Outline workstreams and dependencies", "Identify roles, risks and decision points", "Describe milestones for human review"],
    outputs: ["Programme proposals", "Dependency and risk registers", "Milestones and review points"],
    boundary: "No autonomous programme launch, external contact, contracts or budget changes. Execution is not enabled in v0.1.",
    oversight: "A programme-planning decision records human intent. It does not silently start Operations.",
  },
  Capital: {
    question: "Where can the next euro create useful capability?",
    purpose: "A future specialist for exploring the capital and capabilities a proposed programme could require.",
    responsibilities: ["Describe cost categories and dependencies", "Compare capability scenarios", "Make assumptions and uncertainty visible"],
    outputs: ["Illustrative capital scenarios", "Capability requirements", "Assumptions and risks for review"],
    boundary: "No movement of funds or investment decisions. Execution is not enabled in v0.1.",
    oversight: "Capital allocation remains a human responsibility. AI proposals confer no spending authority.",
  },
} as const;
export type FoundationName = keyof typeof foundationPages;
