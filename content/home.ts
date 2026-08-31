/**
 * Every public sentence on the Vascurra holding page lives in this file.
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
  eyebrow: "Introducing Vascurra",
  heading: "AI for vascular cognitive health.",
  statement: "Support independence. Preserve identity.",
  body: "A new human-centred AI project being developed to explore how technology can better support people experiencing vascular cognitive change, their families and the clinicians around them.",
  badge: "Coming Soon",
  primaryCta: "Explore the project",
  secondaryCta: "Follow the journey",
} as const;

export const projectIntro = {
  heading: "A different way to think about cognitive support.",
  body: "Cognitive change affects far more than memory. It can affect routines, confidence, independence, relationships and the ability to make sense of health information over time.",
  question:
    "How can AI support what a person can still do — rather than simply measuring what has been lost?",
  closing:
    "Vascurra is being developed around the idea that technology should support independence, preserve identity and help people, families and clinicians understand meaningful change over time.",
} as const;

export type Perspective = {
  readonly id: string;
  readonly name: string;
  readonly summary: string;
  readonly body: string;
};

export const perspectives = {
  heading: "One vision. Four connected perspectives.",
  items: [
    {
      id: "personal",
      name: "Personal",
      summary: "Support for everyday life.",
      body: "A future voice-first experience exploring routines, orientation, memory scaffolding, understanding and preparation — designed around the individual.",
    },
    {
      id: "family",
      name: "Family",
      summary: "Support without surveillance.",
      body: "Helping families understand meaningful change, coordinate appropriately and remain connected while respecting the person's choices.",
    },
    {
      id: "clinical",
      name: "Clinical",
      summary: "Better context for better conversations.",
      body: "Exploring how longitudinal information could become concise, source-linked context for clinical conversations.",
    },
    {
      id: "research",
      name: "Research",
      summary: "Learning responsibly.",
      body: "A future evidence and research layer designed around consent, governance and scientific integrity.",
    },
  ] satisfies readonly Perspective[],
  note: "Vascurra is currently in development. These experiences describe the product direction, not live medical functionality.",
} as const;

export const philosophy = {
  headingLines: ["Don't replace capability.", "Support it."],
  /** Shown as an ordered list so the progression is carried by markup, not by arrows alone. */
  steps: ["Recall", "Hint", "Guide", "Answer"],
  body: "Vascurra's proposed approach starts with the least assistance necessary and progressively offers more support when it is wanted.",
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
      body: "AI can organise and explain. People and clinicians make important decisions.",
    },
  ] satisfies readonly Principle[],
} as const;

export const projectStatus = {
  heading: "Built carefully from the beginning.",
  lead: "Vascurra is currently a project in development.",
  boundaries:
    "It is not currently a diagnostic tool, treatment system or medical device. It does not diagnose vascular dementia, predict stroke, recommend medication changes or provide emergency medical care.",
  closing:
    "Clinical, privacy, regulatory and research considerations are being designed into the project from the outset.",
} as const;

export const comingSoon = {
  heading: "Vascurra is just beginning.",
  body: [
    "We are developing the first foundations of Vascurra and exploring how AI can responsibly support people living with vascular cognitive change.",
    "Over the months ahead we will share more about the product, science, design and research helping shape it.",
  ],
} as const;

export const footer = {
  disclaimer:
    "Vascurra is currently a project in development and does not provide medical advice, diagnosis or treatment.",
} as const;
