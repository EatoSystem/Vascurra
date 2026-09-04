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
  heading: "One platform.",
  headingLine: "Multiple perspectives.",
  subheading:
    "One connected system, shaped differently for the people around it.",
  cta: "Explore all perspectives",
  items: [
    {
      id: "people",
      name: "People",
      href: "#people",
      headline: "Designed around the person.",
      summary: "Routines · Check-ins · Orientation · Preparation",
      body: "A calm personal experience for routines, orientation, check-ins, notes and preparation — designed around the individual, not the condition.",
      capabilities: ["Routines", "Check-ins", "Orientation", "Preparation"],
    },
    {
      id: "families",
      name: "Families",
      href: "#families",
      headline: "Connected without surveillance.",
      summary: "Shared updates · Care circle · Organisation · Preparation",
      body: "A shared support experience that helps families stay organised and informed while respecting the person’s choices, privacy and boundaries.",
      capabilities: ["Shared updates", "Care circle", "Organisation", "Preparation"],
    },
    {
      id: "clinicians",
      name: "Clinicians",
      href: "#clinicians",
      headline: "Context without the noise.",
      summary: "Timeline · Sources · Reported change · Consultation context",
      body: "A concise, source-linked view of change over time designed to support better-prepared conversations and clearer clinical context.",
      capabilities: ["Timeline", "Sources", "Reported change", "Consultation context"],
    },
    {
      id: "research",
      name: "Research",
      href: "#research",
      headline: "Learning with consent.",
      summary: "Longitudinal patterns · Provenance · Consent · De-identified analysis",
      body: "A future consent-led, de-identified research layer for longitudinal learning, provenance and responsible analysis.",
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
  subheading: "Three connected capabilities. One continuous flow.",
  intro:
    "Vascular cognitive change is rarely one thing. Vascurra is being designed to bring the wider picture together, follow meaningful change over time, and offer support that adapts to the person.",
  items: [
    {
      name: "Understand",
      body: "Bring together the context that matters — health, history, routines, movement, sleep, confidence, family and daily life.",
      phrase: "See the whole picture.",
      slot: "s03-understand",
    },
    {
      name: "Track",
      body: "Build a clearer picture over time through check-ins, notes and information the person chooses to keep.",
      phrase: "See meaningful change.",
      slot: "s03-track",
    },
    {
      name: "Support",
      body: "Use the lightest useful level of support first — helping the person stay oriented, prepared and in control.",
      phrase: "Support the next step.",
      slot: "s03-support",
    },
  ],
  closing: "One continuous flow.",
  closingLine: "Always centred on the person.",
  supportStages: ["Independent", "Recall", "Hint", "Guide", "Help"],
} as const;

export const trust = {
  eyebrow: "Trust by design",
  heading: "Privacy by design.",
  headingLine: "Security by default.",
  intro:
    "A connected platform only works if control is clear. Vascurra is being designed so people can understand what is collected, who can see it, and what can be changed.",
  architecture: ["Privacy", "Consent", "Access", "Sharing", "Research"],
  lockup: ["Your information.", "Your relationships.", "Your control."],
  cta: "Our approach",
  principles: [
    {
      id: "privacy",
      name: "Privacy first.",
      body: "Collect only what is necessary for the experience being offered.",
    },
    {
      id: "consent",
      name: "Clear consent.",
      body: "Explain sharing in plain language and make choices easy to revisit.",
    },
    {
      id: "control",
      name: "Human control.",
      body: "Make access visible. Let people change permissions and relationships.",
    },
    {
      id: "architecture",
      name: "Secure architecture.",
      body: "Use simple, auditable systems now and stronger controls before any special-category data is held.",
    },
    {
      id: "responsible",
      name: "Responsible data use.",
      body: "No secondary use by default. Research participation should be explicit, governed and consent-led.",
    },
  ],
} as const;

export const philosophy = {
  eyebrow: "Built around human capability",
  headingLines: ["Don’t replace capability.", "Support it."],
  body: "The goal is not to make decisions for someone. It is to help them use what they know, hold on to routines and reach the next step with as little intervention as needed.",
  steps: [
    {
      name: "Recall",
      body: "Start with what the person already knows.",
      phrase: "Reconnect with what is already there.",
    },
    {
      name: "Hint",
      body: "Offer a gentle cue when it helps.",
      phrase: "A small nudge in the right direction.",
    },
    {
      name: "Guide",
      body: "Add structure or context when more support is useful.",
      phrase: "Clarity for the next step.",
    },
    {
      name: "Answer",
      body: "Provide a clear answer when it is genuinely needed.",
      phrase: "Direct support when required.",
    },
  ],
  closing: "Support should increase only when needed — and recede when it is not.",
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
    "Vascurra is currently in development. We are deliberately separating ambition from evidence, and product possibility from clinical claims.",
  themes: [
    {
      id: "human-judgement",
      name: "Human judgement remains central.",
      body: "Vascurra is being designed to support people, families and professionals — not to replace personal agency or clinical judgement.",
      label: "Human first.",
      slot: "s05-human",
    },
    {
      id: "privacy",
      name: "Privacy designed from the beginning.",
      body: "Collect less. Make consent understandable. Build clear access controls before sensitive information is introduced.",
      label: "Privacy from day one.",
      slot: "s05-privacy",
    },
    {
      id: "evidence",
      name: "Evidence before clinical claims.",
      body: "Ideas can be explored quickly. Claims cannot. Clinical statements should follow appropriate evidence, review and governance.",
      label: "Evidence before claims.",
      slot: "s05-evidence",
    },
  ] satisfies readonly TrustTheme[],
  responsible: {
    name: "Responsible development.",
    body: "The product should become more capable only as its safeguards, evidence and accountability become stronger.",
    label: "Capability with responsibility.",
  },
  lead: "Vascurra is currently a project in development.",
  note: "Concepts shown on this website describe product direction, not live medical functionality.",
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
