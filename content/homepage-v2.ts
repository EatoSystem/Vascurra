/** Approved copy for the gated V2 homepage refinement. */
export const homepageV2 = {
  mission: {
    body: "To help people live as well as possible with vascular cognitive change today, while using lived experience, clinical knowledge, evidence and responsible AI-assisted research to deepen understanding and contribute better questions and evidence to longer-term research into care and treatments.",
    pillars: [
      ["Help today", "Support independence, identity, confidence and daily life."],
      ["Learn every day", "Understand meaningful change over time and connect what matters to emerging evidence."],
      ["Fight for tomorrow", "Turn better questions and better evidence into progress in research and care."],
    ],
  },
  patientZero: {
    intro: "Vascurra begins with one person and learns deeply from real life.",
    paragraphs: [
      "Dad is the first person helping us co-design Vascurra — bringing lived experience, clinical perspective and everyday questions into the development process.",
      "The aim is not to treat one person as a dataset. It is to understand what genuinely helps, what creates friction, what deserves attention and what we still do not know.",
      "His experience is helping shape how Vascurra, Veya and the wider research-learning model are designed — carefully, iteratively and with the hope that what we learn may eventually help many more people.",
    ],
    qualifier: "Patient 0 means co-design, not a clinical trial.",
  },
  framework: {
    qualifier: "A conceptual framework for organising context over time.",
  },
  veya: {
    lead: "Your way through Vascurra.",
    body: "Veya is the planned conversational layer of Vascurra. It is designed to explain information in plain language, capture context a person chooses to record, prepare questions and surface changes that may deserve review.",
    relationship: "Vascurra Intelligence helps make sense of the system. Veya helps make that understanding useful to people.",
    points: ["Explain information clearly.", "Capture chosen context.", "Prepare useful questions.", "Surface changes for review."],
  },
  intelligence: {
    principles: [
      ["Context", "Information becomes more meaningful when understood over time."],
      ["Provenance", "Where information came from remains visible."],
      ["Uncertainty", "What is known and what remains uncertain stay distinct."],
      ["Human review", "Important interpretations remain subject to appropriate human judgement."],
    ],
  },
  lab: {
    body: "Vascurra Lab is the proposed research-learning environment around longer-term questions — exploring how questions arising from lived experience, emerging evidence and responsible AI-assisted research can inform one another.",
    governance: "Participation and any future research use of information would require explicit consent, appropriate permissions and research governance.",
  },
  responsible: {
    lead: "The person should remain in control of who sees what.",
    body: "Vascurra is intended to be developed around explicit permissions, careful use of information, visible provenance and clear uncertainty. Sensitive health context should never become a hidden assumption or an automatic family permission.",
    principles: [
      ["Consent and control", "Participation and sharing remain choices."],
      ["Purpose-limited access", "Information is available only for an understood purpose."],
      ["Data minimisation", "Use only what is genuinely needed."],
      ["Provenance", "Keep where information came from visible."],
      ["Uncertainty", "Do not disguise what remains unknown."],
      ["Human review", "Keep important interpretations with people and qualified professionals."],
      ["Responsible claims", "Let evidence determine what can be said."],
    ],
    closing: "Useful intelligence should never require surrendering dignity or agency.",
  },
  support: {
    headingAccent: "next question.",
  },
  journey: {
    progression: ["One Person", "Family", "Clinicians", "Research", "Many"],
  },
} as const;

export const v2NavLinks = [
  { label: "Why Vascurra", href: "#origin" },
  { label: "Patient 0", href: "#patient-zero" },
  { label: "How It Works", href: "#framework" },
  { label: "Veya", href: "#veya" },
  { label: "Research", href: "#lab" },
  { label: "Support", href: "#support" },
] as const;
