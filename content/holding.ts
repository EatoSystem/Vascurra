export const holding = {
  title: "Private preview",
  login: "Reviewer access",
  accessDescription: "For invited reviewers of the full Vascurra website.",
  passwordLabel: "Password",
  submit: "Continue",
  submitting: "Checking…",
  error: "That password is not correct.",
} as const;

export const holdingHero = {
  eyebrow: "Vascurra · In development",
  description: "Vascurra is an intelligence, support and research system in development for vascular cognitive health. It began with one family and aims to connect everyday experience, context over time and research.",
  statements: ["Support independence.", "Preserve identity.", "Pursue breakthroughs."],
} as const;

/** Public Platform P0: a concise introduction, not the full product website. */
export const holdingOverview = {
  navigation: [
    { label: "Mission", href: "#overview" },
    { label: "Challenge", href: "#challenge" },
    { label: "The system", href: "#project" },
    { label: "Research", href: "#research" },
  ],
  statusCta: "How we’re building",
  mission: {
    eyebrow: "Our mission",
    heading: ["Help today.", "Learn every day.", "Insights for tomorrow."],
    originHeading: "It started with Dad.",
    origin: "A systems developer began Vascurra to help his father, a retired doctor living with early vascular dementia.",
    body: "Daily life comes first: questions, routines, changes and priorities that matter to a person.",
    detail: "Vascurra is being designed to build context over time, supporting everyday needs and informing future research questions.",
    closing: ["Start with one person.", "Build for many."],
  },
  challenge: {
    eyebrow: "The challenge",
    heading: ["Vascular cognitive health", "is a systems problem."],
    main: [
      "The brain depends on blood flow, vascular health and the wider systems that sustain it.",
      "When those systems are disrupted, cognition, function and independence can change.",
    ],
    fragmentationHeading: "But understanding what is changing is difficult.",
    fragmentation: "Everyday experience, family observations, clinical information and scientific research often exist in separate places — viewed at different moments, for different purposes.",
    responseHeading: "Vascurra is being built to connect those layers responsibly.",
    response: [
      "Support the person today.",
      "Learn over time.",
      "Turn better understanding into better questions.",
      "Turn better questions into better research.",
    ],
    closing: [
      "Better support. Better understanding. Better questions for research.",
      "And ultimately, contribute to wider research into risk reduction, treatment and the pursuit of a cure.",
    ],
  },
  project: {
    eyebrow: "The project",
    heading: ["One mission.", "Three connected layers."],
    introduction: "One connected system — from everyday support to responsible research.",
    layers: [
      {
        name: "Veya",
        role: "For the person",
        body: "Support for conversation, continuity and everyday context.",
      },
      {
        name: "VeyAI",
        role: "For the mission",
        body: "AI-supported research, evidence and system intelligence — with humans making the decisions.",
      },
      {
        name: "Vascurra Lab",
        role: "Research + learning",
        body: "Turns better questions into structured investigation, evidence and future research capability.",
      },
    ],
  },
  perspectives: {
    eyebrow: "Who it is for",
    heading: ["One system.", "Multiple perspectives."],
    introduction: "Proposed perspectives, connected by purpose, permission and choice.",
    artworkAlt: "A conceptual Vascurra system connects personal, family, clinician and research perspectives.",
    items: [
      { name: "People", body: "Everyday context, priorities, function and lived experience." },
      { name: "Families", body: "Observations and shared understanding with consent." },
      { name: "Clinicians", body: "Prepared conversations with qualified professionals." },
      { name: "Research", body: "Future participation, with separate consent and governance." },
    ],
    boundary: "Family access and research participation would never be automatic. Important decisions remain with people and appropriately qualified professionals.",
  },
  research: {
    eyebrow: "Research direction · In development",
    heading: ["From lived experience", "to better questions."],
    body: "Vascurra aims to connect everyday experience, longitudinal context and scientific evidence — without confusing one for another.",
    detail: "VeyAI can help organise questions and evidence. Vascurra Lab provides the research layer.",
    distinction: "Everyday observations are not clinical findings.",
    boundary: "Human researchers and clinicians remain responsible for scientific and clinical judgement.",
  },
  development: {
    eyebrow: "In development",
    heading: ["Ambitious in vision.", "Careful in development."],
    introduction: "Vascurra is currently in development. Concepts shown describe product and research direction, not live medical functionality.",
    principles: [
      { name: "People first", body: "Support dignity, independence and human judgement." },
      { name: "Choice and control", body: "Design around understandable consent and permissions." },
      { name: "Evidence before claims", body: "Keep possibility, uncertainty and evidence distinct." },
    ],
    status: [
      { name: "Today", qualifier: "Design and foundations", body: "System architecture, Veya concept design, lived context, consent, transparency and evidence principles." },
      { name: "Tomorrow", qualifier: "Proposed next steps", body: "Governed pilot studies, clinical and research collaboration, and formal evaluation." },
    ],
    privacyCta: "Read our privacy approach",
  },
  footer: {
    name: "Vascurra",
    tagline: "Intelligence for vascular cognitive health.",
    status: "In development",
    statement: "Support today. Learn over time. Ask better questions. Build better evidence.",
    exploreLabel: "Explore",
    projectLabel: "Project",
    backToTop: "Back to top",
  },
  privacy: "Privacy",
} as const;
