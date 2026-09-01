/**
 * Every public sentence on the Vascurra homepage lives in this file.
 *
 * This is deliberate: the claims guardrail in `AGENTS.md` §3 and
 * `docs/clinical/intended-purpose-and-claims.md` can then be reviewed by
 * reading one file, and enforced automatically by `content/home.test.ts`.
 *
 * Rules for editing:
 *   - no diagnostic, predictive, preventive or outcome claims;
 *   - no scores, probabilities, metrics or invented evidence;
 *   - no named people, partners, institutions or testimonials;
 *   - future capability is always described as proposed or in development.
 */

export const hero = {
  headingLead: "Intelligence for",
  headingMid: "vascular cognitive",
  headingAccent: "health.",
  statementLead: "Support independence.",
  statementTrail: "Preserve identity.",
  audience: "For people, families, clinicians, and research.",
  body: "A human-centred project exploring how intelligence can help people live well with vascular cognitive change — supporting independence, preserving identity, and organising meaningful context over time.",
  primaryCta: "Request Access",
  secondaryCta: "Discover Vascurra",
} as const;

export const humanContext = {
  heading: "Living better with vascular cognitive change.",
  supporting: "Cognition doesn’t change in isolation.",
} as const;

export const journey = {
  items: [
    { name: "Monitor", body: "Understand trends." },
    { name: "Inform", body: "Share context." },
    { name: "Support", body: "Live fully." },
    { name: "Thrive", body: "Stay independent." },
  ],
} as const;

export const connectedSystem = {
  heading: "Cognition doesn’t change in isolation.",
  body: "Health, history, movement, sleep, routine, confidence, family and daily life move together. Understanding any one of them in isolation is rarely enough.",
  factors: [
    "Health",
    "History",
    "Movement",
    "Sleep",
    "Routine",
    "Confidence",
    "Family",
    "Daily life",
  ],
} as const;

export const idea = {
  heading:
    "What if intelligence could help us understand the changing picture — while supporting the person at its centre?",
  body: "The person remains the centre of the story. Technology should organise context, offer support when it is useful, and leave judgement where it belongs: with people, families and clinicians.",
} as const;

export type Perspective = {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly summary: string;
  readonly body: string;
};

export const perspectives = {
  heading: "One platform.",
  headingLine: "Multiple perspectives.",
  subheading:
    "One connected system, shaped for people, families, clinicians and research.",
  cta: "Explore all perspectives",
  items: [
    {
      id: "people",
      name: "People",
      href: "#people",
      summary: "Understand · Track · Support",
      body: "A proposed personal experience.",
    },
    {
      id: "families",
      name: "Families",
      href: "#families",
      summary: "Coordinate · Understand · Support",
      body: "A proposed family hub.",
    },
    {
      id: "clinicians",
      name: "Clinicians",
      href: "#clinicians",
      summary: "Context · Trends · Decisions",
      body: "A proposed clinical context view.",
    },
    {
      id: "research",
      name: "Research",
      href: "#research",
      summary: "Observe · Analyse · Learn",
      body: "A proposed research layer.",
    },
  ] satisfies readonly Perspective[],
  note: "Vascurra is currently in development. These experiences describe the product direction, not live medical functionality.",
} as const;

export const people = {
  heading: "For People",
  lead: "Understand your health. Track your progress. Feel supported every day.",
  capabilities: [
    { name: "Understand", body: "Make sense of what is happening in language that stays human." },
    { name: "Track", body: "See change over time through check-ins, routines and notes you choose to keep." },
    { name: "Support", body: "Receive help that starts with what you can still do." },
  ],
} as const;

export const families = {
  heading: "For Families",
  lead: "Clear guidance. Better organisation. More confident support.",
  capabilities: [
    { name: "Daily check-ins", body: "A calm place to notice the day without turning care into surveillance." },
    { name: "Care coordination", body: "Appointments, updates and practical next steps in one shared view." },
    { name: "Shared understanding", body: "Context the whole circle can see — with permissions the person controls." },
  ],
} as const;

export const clinicians = {
  heading: "For Clinicians",
  lead: "Trusted intelligence for clinical care.",
  support: "Better insights. Earlier decisions.",
  body: "A proposed clinician-readable view of meaningful change between appointments — designed to support conversations, not to replace clinical judgement.",
} as const;

export const research = {
  heading: "For Research",
  lead: "Connected insight. Structured data. Longitudinal learning.",
  capabilities: [
    { name: "Longitudinal trends", body: "Change over time, organised so patterns can be studied with consent." },
    { name: "Clinical signals", body: "Structured observations kept distinct from interpretation." },
    { name: "Research-ready structures", body: "Data shaped for governance, provenance and responsible reuse." },
  ],
} as const;

export const triad = {
  heading: "Understand. Track. Support.",
  subheading: "Three connected capabilities. One continuous flow.",
  items: [
    {
      name: "Understand",
      body: "Signals from daily life, brought into one picture.",
    },
    {
      name: "Track",
      body: "Change over time, marked by the moments a person chooses to keep.",
    },
    {
      name: "Support",
      body: "Help that grows only as far as it is wanted.",
    },
  ],
  supportStages: ["Independent", "Recall", "Hint", "Guide", "Help"],
} as const;

export const trust = {
  heading: "Privacy by design.",
  headingLine: "Security by default.",
  architecture: ["Person", "Control", "Consent", "Access", "Security"],
  cta: "Our approach",
  principles: [
    {
      id: "privacy",
      name: "Privacy first",
      body: "Collect only what is needed. Keep health information out of Phase 1. Make control understandable.",
    },
    {
      id: "architecture",
      name: "Secure architecture",
      body: "Simple, auditable systems now; stronger controls before any special-category data is ever held.",
    },
    {
      id: "control",
      name: "Human control",
      body: "People should see who can access their information, and be able to change that.",
    },
    {
      id: "responsible",
      name: "Responsible development",
      body: "Evidence before clinical claims. Human judgement remains central.",
    },
  ],
} as const;

export const philosophy = {
  headingLines: ["Don’t replace capability.", "Support it."],
  steps: [
    { name: "Recall", body: "Begin with what the person can still do." },
    { name: "Hint", body: "Offer a cue only when it helps." },
    { name: "Guide", body: "Support the next step, not the whole task." },
    { name: "Answer", body: "Fill in the rest only when asked." },
  ],
  principle: "Start with what the person can do. Add support only when it helps.",
  body: "Vascurra’s proposed approach starts with the least assistance necessary and progressively offers more support when it is wanted. Recall, hint, guide, then answer — never the other way around.",
} as const;

export type Principle = {
  readonly id: string;
  readonly name: string;
  readonly body: string;
};

export const principles = {
  heading: "Technology should adapt to the person.",
  items: [
    {
      id: "human-first",
      name: "Human first",
      body: "Technology should adapt to the person, not the other way around.",
    },
    {
      id: "independence",
      name: "Independence",
      body: "Support capability rather than unnecessarily taking over.",
    },
    {
      id: "respect",
      name: "Respect",
      body: "Cognitive change should never mean being spoken down to.",
    },
    {
      id: "privacy-control",
      name: "Privacy & control",
      body: "People should understand and control how their information is used.",
    },
    {
      id: "human-judgement",
      name: "Human judgement",
      body: "Intelligence can organise and explain. People and clinicians make important decisions.",
    },
  ] satisfies readonly Principle[],
} as const;

export type TrustTheme = {
  readonly id: string;
  readonly name: string;
  readonly body: string;
};

export const projectStatus = {
  heading: "Ambitious in vision. Careful in development.",
  themes: [
    {
      id: "human-judgement",
      name: "Human judgement remains central",
      body: "Intelligence can organise and explain. People and clinicians make the decisions that matter.",
    },
    {
      id: "privacy",
      name: "Privacy designed from the beginning",
      body: "How information is used should be understandable and controllable by the people it belongs to.",
    },
    {
      id: "evidence",
      name: "Evidence before clinical claims",
      body: "Product ambition must not outrun what has actually been shown.",
    },
  ] satisfies readonly TrustTheme[],
  lead: "Vascurra is currently a project in development.",
  boundaries:
    "It is not currently a diagnostic tool, treatment system or medical device. It does not diagnose vascular dementia, predict stroke, recommend medication changes or provide emergency medical care.",
  closing:
    "Clinical, privacy, regulatory and research considerations are being designed into the project from the outset.",
} as const;

export const comingSoon = {
  heading: "Vascurra is just beginning.",
  statement: "A new approach to vascular cognitive health is taking shape.",
  body: "We are building the first foundations and exploring how intelligence can responsibly support people living with vascular cognitive change — together with families, clinicians and research.",
} as const;

export const mockups = {
  concept: "Conceptual preview",
  people: {
    title: "Today",
    checkIn: "Morning check-in",
    checkInState: "Completed",
    trend: "This week",
    trendNote: "Routines held steadily",
    support: "Support",
    supportNote: "Hint available if you want it",
  },
  families: {
    title: "Family hub",
    circle: "Care circle",
    person: "Alex (fictional)",
    update: "Shared update",
    updateNote: "Walk completed · lunch together",
    next: "This week",
    nextNote: "GP conversation on Thursday",
  },
  clinicians: {
    title: "Visit context",
    changed: "What changed",
    changedNote: "Sleep reported as more fragmented",
    source: "Source",
    sourceNote: "Family note · 12 Aug",
    review: "For review",
    reviewNote: "Questions prepared by the person",
  },
  research: {
    title: "Longitudinal view",
    series: "Consented cohort trend",
    seriesNote: "Illustrative structure only",
    signal: "Observation type",
    signalNote: "Reported · not interpreted",
    structure: "Provenance",
    structureNote: "Timestamped · exportable",
  },
} as const;

export const footer = {
  disclaimer:
    "Vascurra is currently a project in development and does not provide medical advice, diagnosis or treatment.",
  privacy: "Privacy",
  earlyAccess: "Request Access",
} as const;
