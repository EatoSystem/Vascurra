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
  body1:
    "It lives within your routines, relationships, rest, confidence, movement, health and the stories you want to keep telling.",
  body2:
    "Vascurra is designed around that wider picture — so you can move forward with clarity, support and calm, with you at the centre.",
  principles: [
    "Whole-person understanding",
    "Personalised support",
    "Stronger today, better tomorrow",
  ],
  graphicAlt:
    "A man and woman at the centre of connected influences: health, history, movement, sleep, routine, confidence, family and daily life.",
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
  readonly headline: string;
  readonly summary: string;
  readonly body: string;
  readonly capabilities: readonly string[];
};

export const perspectives = {
  eyebrow: "One system. Many perspectives.",
  heading: "One platform.",
  headingLine: "Multiple perspectives.",
  subheading: "One story, seen differently by the people who need it.",
  cta: "Explore the platform",
  items: [
    {
      id: "people",
      name: "Personal",
      href: "#people",
      headline: "A calmer view of today.",
      summary: "Routines, check-ins, orientation and preparation.",
      body: "Routines, check-ins, orientation and preparation.",
      capabilities: ["Routines", "Check-ins", "Orientation", "Preparation"],
    },
    {
      id: "families",
      name: "Family",
      href: "#families",
      headline: "Useful context, without surveillance.",
      summary: "Shared understanding while respecting independence.",
      body: "Shared understanding while respecting independence.",
      capabilities: ["Shared updates", "Care circle", "Organisation", "Preparation"],
    },
    {
      id: "clinicians",
      name: "Clinician",
      href: "#clinicians",
      headline: "Relevant history, without the noise.",
      summary: "Clearer context for better-prepared conversations.",
      body: "Clearer context for better-prepared conversations.",
      capabilities: ["Timeline", "Sources", "Reported change", "Consultation context"],
    },
    {
      id: "research",
      name: "Research",
      href: "#research",
      headline: "Longitudinal learning, with consent.",
      summary: "Responsible patterns over time.",
      body: "Responsible patterns over time.",
      capabilities: ["Longitudinal patterns", "Provenance", "Consent", "De-identified analysis"],
    },
  ] satisfies readonly Perspective[],
  note: "Vascurra is currently in development. These views describe product direction, not live clinical functionality.",
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
  eyebrow: "How Vascurra helps",
  heading: "Understand. Track. Support.",
  headingWords: ["Understand.", "Track.", "Support."] as const,
  subheading:
    "Make sense of today. See change over time. Get the right support when it helps.",
  intro:
    "Vascular cognitive change is rarely one thing. Vascurra is being designed to bring the wider picture together, follow meaningful change over time, and offer support that adapts to the person.",
  cta: "Learn more",
  items: [
    {
      name: "Understand",
      body: "Health, routines, sleep, movement, confidence, family and daily life — understood together.",
      phrase: "Bring the whole picture into view.",
      slot: "s03-understand",
    },
    {
      name: "Track",
      body: "Build a clearer picture over time without turning life into constant measurement.",
      phrase: "Notice what changes — and what stays steady.",
      slot: "s03-track",
    },
    {
      name: "Support",
      body: "Start with what the person can already do. Add support only when it is useful.",
      phrase: "Add help gradually, without taking over.",
      slot: "s03-support",
    },
  ],
  closing: "Clarity without overwhelm. Support without dependence.",
  closingLine: "Clarity without overwhelm. Support without dependence.",
  supportStages: ["Independent", "Recall", "Hint", "Guide", "Help"],
} as const;

export const trust = {
  eyebrow: "Trust by design",
  heading: "Privacy by design.",
  headingLine: "Security by default.",
  intro:
    "Your information should never become harder to understand than your health.",
  architecture: ["Privacy", "Consent", "Access", "Sharing", "Research"],
  lockup: ["Your information.", "Your relationships.", "Your choice."],
  cta: "See how it works",
  principles: [
    {
      id: "privacy",
      name: "See what is shared.",
      body: "Know what information is being used.",
    },
    {
      id: "consent",
      name: "Know who can see it.",
      body: "Access should always be understandable.",
    },
    {
      id: "control",
      name: "Change your mind.",
      body: "Consent and permissions should be easy to revisit.",
    },
    {
      id: "architecture",
      name: "Keep research separate.",
      body: "Participation should be explicit and governed.",
    },
  ],
} as const;

export const philosophy = {
  eyebrow: "Built around human capability",
  headingLines: ["Don’t replace capability.", "Support it."],
  body: "The best support does not take over. It starts with what a person can still do — then adds only what helps.",
  cta: "See the approach",
  steps: [
    {
      name: "Recall",
      body: "Start with what you know.",
      phrase: "Start with what you know.",
    },
    {
      name: "Hint",
      body: "A gentle cue.",
      phrase: "A gentle cue.",
    },
    {
      name: "Guide",
      body: "A little more structure.",
      phrase: "A little more structure.",
    },
    {
      name: "Answer",
      body: "Clear support when needed.",
      phrase: "Clear support when needed.",
    },
  ],
  closing:
    "Support should grow only when needed — and step back when it isn’t.",
  lockup: ["Support that adapts.", "Independence that lasts."],
  principle: "Start with what the person can do. Add support only when it helps.",
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
  readonly label: string;
  readonly slot: string;
};

export const projectStatus = {
  eyebrow: "How we are building",
  heading: "Ambitious in vision. Careful in development.",
  headingLead: "Ambitious in vision.",
  headingAccent: "Careful in development.",
  intro:
    "Vascurra is being built deliberately — with human judgement first, privacy from the start and evidence before claims.",
  cta: "Our approach",
  themes: [
    {
      id: "human-judgement",
      name: "Human judgement first.",
      body: "Technology can inform. People still decide.",
      label: "Human judgement first.",
      slot: "s05-human",
    },
    {
      id: "privacy",
      name: "Privacy from the start.",
      body: "Control and consent are part of the product, not additions later.",
      label: "Privacy from the start.",
      slot: "s05-privacy",
    },
    {
      id: "evidence",
      name: "Evidence before claims.",
      body: "Possibility can move quickly. Clinical claims must earn their place.",
      label: "Evidence before claims.",
      slot: "s05-evidence",
    },
  ] satisfies readonly TrustTheme[],
  responsible: {
    name: "Responsible development.",
    body: "Vascurra is currently in development. Concepts shown describe product direction, not live medical functionality.",
    label: "Capability with responsibility.",
  },
  lead: "Vascurra is currently in development.",
  note: "Vascurra is currently in development. Concepts shown describe product direction, not live medical functionality.",
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
    title: "Good morning",
    checkIn: "Morning routine",
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
