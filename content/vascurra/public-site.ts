export type PublicSection = {
  readonly eyebrow: string;
  readonly title: string;
  readonly body: readonly string[];
  readonly items?: readonly { readonly title: string; readonly body: string }[];
  readonly tone?: "light" | "deep";
};

export type ArtworkBrief = {
  readonly section: string;
  readonly title: string;
  readonly purpose: string;
  readonly format: "Portrait / 4:5" | "Landscape / 16:9" | "Wide / 16:7";
  readonly mobileFormat: string;
  readonly visualDirection: string;
  readonly background: string;
  readonly assetKey: string;
  readonly status: "Awaiting approved artwork";
};

export type PublicPageContent = {
  readonly slug: string;
  readonly eyebrow: string;
  readonly title: readonly string[];
  readonly accent?: string;
  readonly lead: string;
  readonly qualifier?: string;
  readonly artwork?: ArtworkBrief;
  readonly sections: readonly PublicSection[];
  readonly closing: string;
  readonly ctas: readonly { readonly label: string; readonly href: string }[];
};

const artwork = (
  section: string,
  title: string,
  purpose: string,
  format: ArtworkBrief["format"],
  mobileFormat: string,
  visualDirection: string,
  assetKey: string,
  background = "White / transparent",
): ArtworkBrief => ({ section, title, purpose, format, mobileFormat, visualDirection, background, assetKey, status: "Awaiting approved artwork" });

export const publicPages = {
  "why-vascurra": {
    slug: "why-vascurra", eyebrow: "Why Vascurra", title: ["Cognitive health does not only happen", "in the consultation room."], accent: "in the consultation room.",
    lead: "People live their lives between appointments. Meaningful changes can emerge gradually while relevant context remains distributed between the person, family members, clinicians and different systems.",
    artwork: artwork("Why Vascurra", "Everyday context", "Show everyday life and information gradually forming meaningful context.", "Wide / 16:7", "Portrait crop / 4:5", "A calm field of daily-life moments connected by one subtle Vascurra ribbon; no diagnostic meaning.", "why-everyday-context"),
    sections: [
      { eyebrow: "01 — The human problem", title: "Life happens every day.", body: ["Routine, confidence, mobility, sleep, eating, social connection, memory, behaviour, function and meaningful events can all form part of a person's lived context.", "These experiences do not automatically indicate disease progression."] },
      { eyebrow: "02 — The information problem", title: "No single perspective sees everything.", body: ["Information can be fragmented across people, appointments and systems. Vascurra is exploring how chosen, relevant context might be organised more clearly."] },
      { eyebrow: "03 — The clinical challenge", title: "Better-prepared conversations.", body: ["A consultation is valuable but necessarily limited in time and context. Vascurra is intended to support preparation and understanding—never replace clinical judgement."] },
      { eyebrow: "04 — The research opportunity", title: "Better questions can begin with lived experience.", body: ["Questions emerging from real life may identify meaningful areas for future research. Vascurra has not produced research breakthroughs and does not claim clinical outcomes."] },
      { eyebrow: "05 — It began with Dad", title: "One human starting point.", body: ["Vascurra began with a father, a retired GP, and a determination to build with the person rather than around him.", "That origin continues through Patient 0: careful co-design grounded in dignity, agency and everyday usefulness."] },
    ], closing: "Help today. Learn every day. Fight for tomorrow.", ctas: [{ label: "Discover Patient 0", href: "/patient-0" }, { label: "How Vascurra works", href: "/how-it-works" }],
  },
  "patient-0": {
    slug: "patient-0", eyebrow: "Patient 0", title: ["Start with one person.", "Learn deeply.", "Build for many."], accent: "Build for many.",
    lead: "Patient 0 is Vascurra's co-design starting point: a way to learn from real life with care, humility and continuous feedback.", qualifier: "Patient 0 means co-design—not a clinical trial, medical experiment, diagnosis or outcome claim.",
    artwork: artwork("Patient 0", "Co-design starting point", "A dignified human-centred Patient 0 visual.", "Landscape / 16:9", "Portrait / 4:5", "Derived from the approved human-ribbon language; calm, capable and never clinicalised.", "patient-zero-signature"),
    sections: [
      { eyebrow: "Real life", title: "Understand daily realities.", body: ["Begin with needs, routines, strengths and friction as they are experienced—not as assumptions made at a distance."] },
      { eyebrow: "Real questions", title: "Ask what would genuinely help.", body: ["What does the person want to understand, remember, prepare for or accomplish tomorrow morning?"] },
      { eyebrow: "Real friction", title: "Notice unnecessary difficulty.", body: ["Learn where healthcare systems, information and technology create avoidable work or confusion."] },
      { eyebrow: "Continuous co-design", title: "Build. Use. Observe. Discuss. Improve.", body: ["Feedback should shape the project iteratively while important decisions remain with people and appropriately qualified professionals."] },
    ], closing: "Would this genuinely be useful tomorrow morning?", ctas: [{ label: "Explore how it works", href: "/how-it-works" }, { label: "Meet Veya", href: "/veya" }],
  },
  "how-it-works": {
    slug: "how-it-works", eyebrow: "How Vascurra works", title: ["Observe. Understand.", "Support. Learn."], accent: "Support. Learn.",
    lead: "A conceptual framework for bringing chosen context together over time and making it easier to use.", qualifier: "A conceptual framework—not a clinical score or diagnostic device.",
    artwork: artwork("How it works", "Observe to learn", "Show one continuous Vascurra loop across the four stages.", "Wide / 16:7", "Vertical sequence", "One flowing ribbon moving through Observe, Understand, Support and Learn.", "framework-continuous-loop"),
    sections: [
      { eyebrow: "The framework", title: "One continuous system.", body: ["Each stage informs the next without turning a person's life into constant measurement."], items: [
        { title: "Observe", body: "Gather meaningful context a person chooses to share." }, { title: "Understand", body: "Bring relevant information together and identify context worthy of attention." }, { title: "Support", body: "Help people understand, prepare and act more confidently." }, { title: "Learn", body: "Use feedback, evidence and responsible research to improve understanding." },
      ] },
      { eyebrow: "Multiple perspectives", title: "Permission-appropriate views.", body: ["Personal, Family, Clinician and Research perspectives may eventually offer different views into appropriate underlying context. Access would depend on purpose, consent and controls."] },
      { eyebrow: "Over time", title: "A living picture—not a score.", body: ["Not a snapshot. Not a hidden conclusion. A growing body of source-aware context that can support better questions and conversations."] },
    ], closing: "Experience → Context → Interpretation → Support → Learning", ctas: [{ label: "Meet Veya", href: "/veya" }, { label: "Explore Vascurra Intelligence", href: "/intelligence" }],
  },
  veya: {
    slug: "veya", eyebrow: "Veya", title: ["Your way", "through Vascurra."], accent: "through Vascurra.",
    lead: "A calm conversational layer designed to help make complexity more understandable. Veya echoes ‘via’ and ‘way’—a route through complexity.", qualifier: "Veya is proposed. It is not a doctor, diagnostic system, emergency service, medication adviser or replacement for clinicians.",
    artwork: artwork("Veya", "Veya signature", "Introduce Veya as a calm conversational presence.", "Portrait / 4:5", "Portrait / 4:5", "A simple luminous form emerging from the Vascurra ribbon; no chatbot, robot, face or brain.", "veya-signature"),
    sections: [
      { eyebrow: "Proposed capabilities", title: "Complexity made more usable.", body: ["Veya could explain information in plain language, capture context a person chooses to share, prepare questions, organise what matters and surface meaningful changes for review."], items: [
        { title: "Conversation", body: "A calm route into the wider Vascurra experience." }, { title: "Preparation", body: "Help organise questions and relevant context before conversations." }, { title: "Control", body: "The person chooses what to share and what support is useful." },
      ] },
      { eyebrow: "A clear distinction", title: "Understanding and usefulness.", body: ["Vascurra Intelligence helps make sense of the system. Veya helps make that understanding useful to people. Vascurra Lab connects future research and learning."] },
    ], closing: "Conversation → Context and governed reasoning → Research and learning", ctas: [{ label: "Explore Vascurra Intelligence", href: "/intelligence" }],
  },
  intelligence: {
    slug: "intelligence", eyebrow: "Vascurra Intelligence", title: ["From information", "to understanding."], accent: "to understanding.",
    lead: "A proposed governed reasoning and interpretation layer beneath Veya.", qualifier: "A future concept—not an autonomous clinical decision-maker or authoritative health record.",
    artwork: artwork("Vascurra Intelligence", "Governed context", "Show information becoming understandable while retaining source and uncertainty.", "Wide / 16:7", "Landscape / 4:3", "An evolved branching context field derived from the Hero language; no brain reuse or generic neural network.", "intelligence-context-field"),
    sections: [
      { eyebrow: "Context over time", title: "Bring relevant information together.", body: ["Future work could connect observations, measurements, behaviours, events, clinical context and evidence while keeping different information types distinct."] },
      { eyebrow: "Core principles", title: "Reasoning that can be questioned.", body: [], items: [
        { title: "Provenance", body: "Where did this information come from?" }, { title: "Context", body: "What does it relate to?" }, { title: "Interpretation", body: "What is observed fact and what is interpretation?" }, { title: "Uncertainty", body: "What is known, and how confidently?" }, { title: "Human review", body: "Important questions should be surfaced for appropriate review, not silently converted into conclusions." },
      ] },
    ], closing: "Not to replace judgement. To make context easier to understand.", ctas: [{ label: "Explore Vascurra Lab", href: "/lab" }],
  },
  lab: {
    slug: "lab", eyebrow: "Vascurra Lab", title: ["Where lived experience", "meets research."], accent: "meets research.",
    lead: "A future research-learning environment connecting questions from real life with evidence.", qualifier: "Vascurra Lab is a proposed environment. It does not imply existing studies, datasets, partners or discoveries.",
    artwork: artwork("Vascurra Lab", "Converging questions", "Show lived experience and evidence meeting in a learning loop.", "Wide / 16:7", "Vertical loop", "Two elegant streams converge into one iterative learning system; no brain imagery.", "lab-converging-streams", "Deep Vascurra navy"),
    sections: [
      { eyebrow: "A research-learning loop", title: "Better questions, carefully developed.", body: ["Questions from lived experience → evidence and literature → responsible AI-assisted research → human review → new understanding → better questions."], tone: "deep" },
      { eyebrow: "Questions worth asking", title: "Lived experience can inspire research.", body: ["Questions grounded in daily life may point toward areas worth investigating, but inspiration is not evidence and must not be presented as a finding."] },
      { eyebrow: "Governance", title: "Research participation must be explicit.", body: ["Personal data must never silently become research material. Any future participation or secondary use would require appropriate consent, governance and applicable legal and ethical review."] },
    ], closing: "Open learning, responsible methods and human oversight.", ctas: [{ label: "For researchers", href: "/research" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  people: {
    slug: "people", eyebrow: "For People", title: ["Your life is more", "than a snapshot."], accent: "than a snapshot.",
    lead: "Vascurra is being explored as a way to help people organise meaningful context, understand information and prepare more confidently—while preserving independence and identity.", qualifier: "These are future product concepts, not live medical functionality.",
    artwork: artwork("For People", "Life beyond a snapshot", "Represent a capable older adult within everyday life.", "Landscape / 16:9", "Portrait / 4:5", "One dignified older adult integrated into light Vascurra ribbon language; no frailty stereotype.", "people-life-context"),
    sections: [{ eyebrow: "Designed around agency", title: "Support independence. Preserve identity.", body: ["Potential experiences may include chosen daily context, questions, preparation, personal history, longitudinal patterns and conversation with Veya."], items: [
      { title: "Stay oriented", body: "Support that respects what a person can already do." }, { title: "Understand more", body: "Plain language and visible sources where appropriate." }, { title: "Prepare better", body: "Organise questions and context for useful conversations." }, { title: "Remain in control", body: "Assistance and sharing should be configurable choices." },
    ] }], closing: "Your context. Your choices. Support when it helps.", ctas: [{ label: "For families", href: "/families" }, { label: "Request access", href: "/access" }],
  },
  families: {
    slug: "families", eyebrow: "For Families", title: ["Closer together.", "Without taking over."], accent: "Without taking over.",
    lead: "Family support should help people stay connected and prepared without removing control from the individual.", qualifier: "Family access would never be automatic. Sharing must be permission-appropriate and subject to consent, capacity and access controls.",
    artwork: artwork("For Families", "Connected with permission", "Show supportive connection without surveillance.", "Landscape / 16:9", "Portrait / 4:5", "A person and family connected by one gentle ribbon with the individual visually centred.", "family-permission-connection"),
    sections: [{ eyebrow: "Support without surveillance", title: "Know what matters—where the person has chosen to share.", body: ["Future family experiences could support appointment preparation and shared understanding while respecting independence, relationships and changing permissions."], items: [
      { title: "Meaningful context", body: "Relevant information, not constant monitoring." }, { title: "Preparation", body: "Questions and context for appointments." }, { title: "Permission", body: "Clear, revisitable choices about who can see what." }, { title: "Capacity and agency", body: "Support should not assume that cognitive change removes control." },
    ] }], closing: "Connection should strengthen agency—not replace it.", ctas: [{ label: "For clinicians", href: "/clinicians" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  clinicians: {
    slug: "clinicians", eyebrow: "For Clinicians", title: ["Better context.", "Better conversations."], accent: "Better conversations.",
    lead: "Vascurra is exploring ways to help clinicians review relevant longitudinal context efficiently while preserving clinical judgement.", qualifier: "All experiences described here are proposed. Vascurra does not currently provide clinical functionality.",
    artwork: artwork("For Clinicians", "Longitudinal context", "Show concise source-linked context prepared for human review.", "Wide / 16:7", "Landscape / 4:3", "A clean longitudinal context field; no generic doctor photography or diagnostic score.", "clinician-longitudinal-context"),
    sections: [{ eyebrow: "Proposed experiences", title: "Relevant history without unnecessary noise.", body: ["Potential future concepts include visit preparation, longitudinal context, source-linked information, questions for review and workflow-light summaries."], items: [
      { title: "Source-linked", body: "Keep reported, measured and verified information distinguishable." }, { title: "Prepared for review", body: "Surface useful questions rather than autonomous conclusions." }, { title: "Human judgement", body: "Clinicians remain responsible for clinical decisions." },
    ] }], closing: "Support clinical judgement. Never replace it.", ctas: [{ label: "For research", href: "/research" }, { label: "Vascurra Intelligence", href: "/intelligence" }],
  },
  research: {
    slug: "research", eyebrow: "For Research", title: ["Better questions begin", "with better context."], accent: "with better context.",
    lead: "Vascurra is exploring how researchers may eventually interact with permissioned, well-governed questions and context.", qualifier: "There is no existing Vascurra research dataset and no external researcher access is implied.",
    artwork: artwork("For Research", "Evidence pattern", "Show small evidence nodes gradually revealing a meaningful pattern.", "Wide / 16:7", "Landscape / 4:3", "Sparse source-aware nodes and one emerging pattern; no clinical finding or certainty cue.", "research-evidence-pattern"),
    sections: [
      { eyebrow: "Research principles", title: "Context with governance.", body: [], items: [
        { title: "Consent", body: "Participation and secondary use must be explicit and understood." }, { title: "De-identification", body: "Risk can be reduced, not eliminated." }, { title: "Provenance", body: "Sources and transformations should remain traceable." }, { title: "Reproducibility", body: "Methods and limitations should be open to scrutiny." }, { title: "Responsible AI", body: "AI-assisted work requires bounded tasks, validation and human review." },
      ] },
      { eyebrow: "A clear distinction", title: "Lab and research participation are different.", body: ["Vascurra Lab is the proposed research-learning environment. For Research describes how future collaborators might engage under appropriate governance."] },
    ], closing: "Future collaboration must begin with purpose, permission and accountability.", ctas: [{ label: "Vascurra Lab", href: "/lab" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  responsible: {
    slug: "responsible", eyebrow: "Responsible by Design", title: ["Trust is part", "of the architecture."], accent: "of the architecture.",
    lead: "Vascurra is being developed with dignity, permission, provenance, uncertainty and human judgement as system constraints.",
    artwork: artwork("Responsible by Design", "Permission architecture", "Show control and permissions radiating from the individual.", "Wide / 16:7", "Portrait / 4:5", "Elegant protective ribbon architecture; avoid central padlocks, shields or compliance badges.", "responsible-permission-architecture"),
    sections: [
      { eyebrow: "Core principles", title: "Responsible foundations.", body: [], items: [
        { title: "Consent and control", body: "People should understand and control appropriate sharing and access." }, { title: "Purpose limitation", body: "Information should be used only for legitimate, stated purposes." }, { title: "Data minimisation", body: "Collect what is genuinely useful—not everything technically available." }, { title: "Provenance", body: "Important information should retain its source and context." }, { title: "Uncertainty", body: "Uncertainty should remain visible rather than hidden behind false precision." }, { title: "Human review", body: "Important interpretation should support appropriate human judgement." }, { title: "Responsible claims", body: "Evidence must come before marketing claims." }, { title: "Privacy by design", body: "Privacy is a system constraint, not an addition made later." },
      ] },
      { eyebrow: "Safety boundaries", title: "What Vascurra must not do.", body: ["No autonomous diagnosis or treatment decisions. No medication changes by the system. No automatic family access. No silent research use. No unsupported outcome claims. No invented health score presented as established clinical evidence."] },
    ], closing: "Useful intelligence should never require surrendering dignity or agency.", ctas: [{ label: "Privacy", href: "/privacy" }, { label: "Support Vascurra", href: "/support" }],
  },
  support: {
    slug: "support", eyebrow: "Support Vascurra", title: ["Help fund", "the next question."], accent: "the next question.",
    lead: "Vascurra is looking for mission-aligned people and organisations interested in careful development, research capacity and future collaboration.", qualifier: "No payments are accepted on this website. Support is not represented as a tax-deductible donation or investment.",
    artwork: artwork("Support Vascurra", "Capacity for questions", "Show support flowing into questions, research capacity and knowledge.", "Wide / 16:7", "Landscape / 4:3", "Restrained streams feeding an open field of questions; no hands-and-plant cliché.", "support-research-capacity"),
    sections: [{ eyebrow: "Ways to take part", title: "Support careful progress.", body: [], items: [
      { title: "Support the project", body: "For individuals who want to help development." }, { title: "Fund AI research", body: "Support defined research, compute and investigation capacity." }, { title: "Philanthropy", body: "Explore mission-aligned larger-scale support." }, { title: "Clinical and research partnerships", body: "Discuss future design partnerships, pilots or collaborative work." }, { title: "Grants and programmes", body: "Explore institutional and non-dilutive support." },
    ] }], closing: "Every useful answer begins with a question worth asking.", ctas: [{ label: "Register interest", href: "/access" }, { label: "Contact Vascurra", href: "/contact" }],
  },
  about: {
    slug: "about", eyebrow: "About Vascurra", title: ["A human problem.", "An ambitious project.", "A careful way forward."], accent: "A careful way forward.",
    lead: "Vascurra is a human-centred project exploring how carefully governed intelligence might support people experiencing vascular cognitive change and the people around them.",
    artwork: artwork("About", "From one person outward", "Connect one human starting point to the wider Vascurra system.", "Landscape / 16:9", "Portrait / 4:5", "One human origin connected gently to family, clinical and research contexts.", "about-human-system"),
    sections: [
      { eyebrow: "Why Vascurra exists", title: "Life contains more context than an appointment can hold.", body: ["Vascurra began with a family's experience and a belief that people deserve clearer, more humane ways to organise what matters."] },
      { eyebrow: "Patient 0", title: "Co-design from a real starting point.", body: ["The project begins by learning deeply with one person while protecting private health information and avoiding claims that exceed the evidence."] },
      { eyebrow: "Our principles", title: "Human judgement first.", body: ["Preserve agency. Make permissions understandable. Keep uncertainty visible. Let evidence earn every claim. Build assistance that can step back when it is not useful."] },
      { eyebrow: "How we are building", title: "Ambitious in vision. Careful in development.", body: ["Vascurra remains a project in development. Concepts shown describe direction, not live medical functionality."] },
    ], closing: "Support independence. Preserve identity.", ctas: [{ label: "Why Vascurra", href: "/why-vascurra" }, { label: "Contact", href: "/contact" }],
  },
  access: {
    slug: "access", eyebrow: "Request Access", title: ["Help shape", "what Vascurra becomes."], accent: "what Vascurra becomes.",
    lead: "Vascurra is still in development. Register your interest in future co-design, collaboration or project updates without sharing health information.", qualifier: "Please do not submit diagnoses, symptoms, medication details or other medical information.",
    sections: [{ eyebrow: "What happens next", title: "A careful invitation—not automatic enrolment.", body: ["A request records interest only. It is not access to a live health product, a clinical trial or a promise of participation."] }],
    closing: "Start with interest. Continue with informed choice.", ctas: [{ label: "Privacy", href: "/privacy" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  contact: {
    slug: "contact", eyebrow: "Contact", title: ["A simple way", "to begin a conversation."], accent: "to begin a conversation.",
    lead: "Contact Vascurra about the project, clinical or research collaboration, partnerships, funding or media.", qualifier: "Please do not send private medical information or ask for medical advice through this form.",
    sections: [{ eyebrow: "Enquiries", title: "Choose the context that fits.", body: ["General · Clinical collaboration · Research · Partnerships · Funding and philanthropy · Media"] }],
    closing: "Clear questions make better beginnings.", ctas: [{ label: "About Vascurra", href: "/about" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  terms: {
    slug: "terms", eyebrow: "Terms", title: ["Clear boundaries", "for a project in development."], accent: "for a project in development.", lead: "These interim website terms explain the limited purpose of this review-stage public information site.", qualifier: "Internal draft—legal review required before public launch.",
    sections: [
      { eyebrow: "Website purpose", title: "Information, not medical services.", body: ["This website describes a project in development. It does not provide medical advice, diagnosis, treatment, emergency support or a clinician–patient relationship."] },
      { eyebrow: "Use of content", title: "Do not rely on this site for health decisions.", body: ["Seek appropriate professional or emergency support for health concerns. Project concepts, availability and wording may change as work is reviewed."] },
      { eyebrow: "Accuracy and availability", title: "Careful, but still evolving.", body: ["We aim to keep public information clear and accurate, but no warranty or clinical assurance is offered through this development-stage site. [LEGAL REVIEW REQUIRED]"] },
      { eyebrow: "Contact", title: "Questions about these terms.", body: ["Use the contact page for website or project enquiries. Do not submit private medical information."] },
    ], closing: "These terms require founder and legal review before launch.", ctas: [{ label: "Contact", href: "/contact" }, { label: "Privacy", href: "/privacy" }],
  },
  accessibility: {
    slug: "accessibility", eyebrow: "Accessibility", title: ["A clearer experience", "for more people."], accent: "for more people.", lead: "Vascurra is being designed for high legibility, calm navigation and practical access across devices and ways of interacting.", qualifier: "Development-stage accessibility statement—review required before launch.",
    sections: [
      { eyebrow: "Our approach", title: "Accessibility is part of the design system.", body: ["We target WCAG 2.2 AA where practical, including semantic structure, keyboard access, visible focus, readable contrast, text reflow and reduced-motion support."] },
      { eyebrow: "Current status", title: "Testing continues.", body: ["The Wave 1 preview is undergoing automated and manual review across mobile, tablet and desktop layouts. This statement does not claim formal certification."] },
      { eyebrow: "Tell us about a barrier", title: "Feedback helps us improve.", body: ["If something is difficult to read, navigate or use, contact us without including medical or other sensitive information."] },
    ], closing: "Access should feel considered—not added later.", ctas: [{ label: "Contact", href: "/contact" }, { label: "Responsible by Design", href: "/responsible" }],
  },
  disclaimer: {
    slug: "disclaimer", eyebrow: "Disclaimer", title: ["Vascurra is a project", "in development."], accent: "in development.", lead: "Vascurra does not provide medical advice, diagnosis or treatment.",
    sections: [
      { eyebrow: "Medical boundary", title: "Information is not clinical advice.", body: ["Nothing on this website should be used to diagnose a condition, change medication, choose treatment or delay seeking professional care."] },
      { eyebrow: "Emergencies", title: "This is not an emergency service.", body: ["If you believe someone needs urgent medical help, contact the appropriate local emergency service or qualified healthcare professional."] },
      { eyebrow: "Future concepts", title: "Proposed does not mean available.", body: ["Product illustrations and descriptions communicate possible direction. They do not demonstrate validated medical functionality, clinical outcomes, regulatory status or current availability."] },
      { eyebrow: "Research", title: "Questions are not findings.", body: ["References to future research describe an approach to learning and governance. They do not imply an existing dataset, study, partnership or discovery."] },
    ], closing: "Clinical decisions belong with people and appropriately qualified professionals.", ctas: [{ label: "Responsible by Design", href: "/responsible" }, { label: "Contact", href: "/contact" }],
  },
} as const satisfies Record<string, PublicPageContent>;

export type PublicPageSlug = keyof typeof publicPages;

export const primaryNav = [
  { label: "Why Vascurra", href: "/why-vascurra" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Veya", href: "/veya" },
  { label: "For You", href: "/personal" },
  { label: "Research", href: "/lab" },
  { label: "Support", href: "/support" },
] as const;

export const footerGroups = [
  { title: "Project", links: [{ label: "Why Vascurra", href: "/why-vascurra" }, { label: "Patient 0", href: "/patient-0" }, { label: "How It Works", href: "/how-it-works" }, { label: "Veya", href: "/veya" }, { label: "Vascurra Intelligence", href: "/intelligence" }, { label: "Vascurra Lab", href: "/lab" }] },
  { title: "For You", links: [{ label: "People", href: "/personal" }, { label: "Families", href: "/families" }, { label: "Clinicians", href: "/clinicians" }, { label: "Research", href: "/research" }] },
  { title: "Take Part", links: [{ label: "About", href: "/about" }, { label: "Support", href: "/support" }, { label: "Contact", href: "/contact" }, { label: "Request Access", href: "/access" }] },
  { title: "Trust", links: [{ label: "Responsible by Design", href: "/responsible" }, { label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Accessibility", href: "/accessibility" }, { label: "Disclaimer", href: "/disclaimer" }] },
] as const;

export const publicDisclaimer = "Vascurra is currently a project in development and does not provide medical advice, diagnosis or treatment.";

export const artworkManifest = Object.values(publicPages).flatMap((page) => "artwork" in page ? [{ route: `/${page.slug}`, ...page.artwork }] : []);
