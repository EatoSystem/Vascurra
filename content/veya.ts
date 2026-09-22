export type VeyaMoment = {
  readonly time: string;
  readonly label: string;
  readonly quote?: string;
  readonly description: string;
  readonly details?: readonly string[];
};

export type VeyaArtworkBrief = {
  readonly assetKey: string;
  readonly title: string;
  readonly aspectRatio: string;
  readonly mobileAspectRatio: string;
  readonly recommendedDimensions: string;
  readonly desktopUse: string;
  readonly mobileUse: string;
  readonly brief: string;
  readonly status: "coded placeholder";
};

export const veyaMoments = [
  {
    time: "08:00",
    label: "Morning",
    quote: "How are you feeling today?",
    description: "An optional check-in shaped around the person's day.",
    details: ["Sleep", "Plans", "Mood", "Questions", "Agreed medication schedule"],
  },
  {
    time: "09:00",
    label: "Routine",
    description: "A reminder based on an agreed medication schedule.",
  },
  {
    time: "13:15",
    label: "Question",
    quote: "Something felt different after lunch.",
    description: "Veya could help capture the observation and its context.",
  },
  {
    time: "16:30",
    label: "Prepare",
    description: "A question is saved for a future conversation or appointment.",
  },
  {
    time: "20:00",
    label: "Reflect",
    quote: "How did today go?",
    description: "An optional evening reflection on what mattered.",
  },
] as const satisfies readonly VeyaMoment[];

export const veyaHomepage = {
  eyebrow: "Veya",
  headline: ["Your everyday", "intelligence companion."],
  accent: "intelligence companion.",
  supporting: ["There when you need it.", "Learning with you over time."],
  secondary: "Making complexity more understandable.",
  introduction: "A morning check-in. A medication reminder. A question over lunch. A longer conversation in the evening. Veya can support the moments that matter while helping build a clearer picture over time.",
  rhythmLabel: "A day with Veya",
  rhythmNote: "Illustrative moments, not a required schedule.",
  frequency: ["Once.", "Several times.", "Or not at all."],
  frequencyBody: "Veya adapts to the person — not the other way around.",
  contextLead: "A conversation today should not disappear tomorrow.",
  contextBody: "Chosen questions, routines, observations and source-aware context could become more useful when understood over time.",
  contextInputs: ["Daily questions", "Conversations", "Routines", "Agreed medication information", "Observations", "Appointments"],
  contextOutcome: ["Better context", "Better questions"],
  outputs: [
    { label: "For you", body: "A clearer picture of your day, questions, routines and priorities." },
    { label: "For family — with permission", body: "Selected context that may support practical help and better conversations." },
    { label: "For clinicians", body: "Concise longitudinal context and better-prepared conversations for human review." },
    { label: "For research — separately governed", body: "Lived questions may help inform responsible research directions. Personal information does not automatically become research data." },
  ],
  outputsSummary: "Different useful perspectives. Always governed by purpose and permission.",
  outputsBoundaries: ["Family access is never automatic.", "Research use remains separately governed."],
  boundary: "Veya is a proposed companion, not a doctor, diagnosis, emergency service or autonomous medical decision-maker.",
  cta: { label: "Discover Veya", href: "/veya" },
} as const;

export const veyaPage = {
  metadata: {
    title: "Veya — Your everyday intelligence companion",
    description: "Discover Veya, the proposed daily relationship layer of Vascurra: available when useful, learning with the person over time and designed around human control.",
  },
  hero: {
    eyebrow: "Veya",
    headline: ["Your everyday", "intelligence companion."],
    accent: "intelligence companion.",
    supporting: ["There when you need it.", "Learning with you over time."],
    lead: "Veya is the proposed conversational layer of Vascurra — designed to help a person make sense of everyday questions, routines and context while building continuity over time.",
    qualifier: "The experiences shown are conceptual and under development. Veya does not currently provide live medical, medication or emergency functionality.",
    primaryCta: { label: "See a day with Veya", href: "#day-with-veya" },
    secondaryCta: { label: "How Veya works", href: "#how-veya-works" },
  },
  day: {
    eyebrow: "A day with Veya",
    headline: ["Every day is different.", "Veya can adapt with it."],
    accent: "Veya can adapt with it.",
    lead: "Morning, afternoon or evening: Veya could be available for a quick question, a chosen reminder, a note or a longer conversation. The rhythm belongs to the person.",
    closing: "Over time, chosen moments can become connected context rather than isolated fragments.",
  },
  frequency: {
    eyebrow: "Interaction is flexible",
    headline: ["Once. Twice. Four times.", "Or not today."],
    accent: "Or not today.",
    body: "Veya is intended to adapt to the person rather than demand constant reporting. Check-ins and reminders could be chosen, changed, paused or left unused.",
    conversationEyebrow: "Conversation is the interface",
    conversationHeadline: ["Sometimes five seconds.", "Sometimes fifty minutes."],
    conversationBody: "A short check-in, a simple question, a deeper conversation, reflection, preparation or explanation — the interaction should be able to match the moment without forcing life into a form.",
    modes: ["Quick check-in", "Simple question", "Longer conversation", "Reflection", "Preparation", "Explanation"],
  },
  memory: {
    eyebrow: "Remember",
    headline: ["Context should not disappear", "when the conversation ends."],
    accent: "when the conversation ends.",
    body: "With the person's choice, Veya could preserve useful context across questions, routines, priorities, conversations, appointments, agreed medication information, observations and important preferences.",
    control: "The person should control what is retained, what is removed and what is shared.",
    days: ["A question", "A routine", "A conversation", "An appointment", "A preference"],
  },
  provenance: {
    eyebrow: "Provenance",
    headline: ["Remember the context.", "Remember where it came from."],
    accent: "Remember where it came from.",
    body: "Useful memory should not become an untraceable collection of facts. Important context should retain its origin, timing, type and uncertainty.",
    fields: [
      { label: "What", body: "What information was captured?" },
      { label: "Who", body: "Who provided it?" },
      { label: "When", body: "When was it recorded?" },
      { label: "Source", body: "Where did it originate?" },
      { label: "Type", body: "Report, observation, document or evidence?" },
      { label: "Uncertainty", body: "What remains uncertain?" },
    ],
  },
  patterns: {
    eyebrow: "Notice, don't diagnose",
    headline: ["Patterns can matter.", "Interpretation still needs people."],
    accent: "Interpretation still needs people.",
    body: "Over time, Veya may help surface recurring questions, changing routines, repeated observations or themes worth reviewing. It should not turn those patterns into a diagnosis or prediction.",
    examples: ["Recurring questions", "Changing routines", "Repeated observations", "Themes worth discussing"],
    review: "Surface → review → discuss",
  },
  medication: {
    eyebrow: "Medication + routines",
    headline: ["Support the routine.", "Don't replace the clinician."],
    accent: "Don't replace the clinician.",
    body: "Vascurra is being designed so Veya could help the person remember and record an agreed medication schedule while keeping timing and source information clear.",
    can: ["Provide a chosen reminder", "Record what the person reports", "Keep agreed timing and source visible", "Prepare medication questions for a clinician"],
    cannot: ["Prescribe medication", "Alter a dose", "Stop medication", "Independently recommend a change"],
    boundary: "Medication information would remain a source-linked aid for preparation, not an authoritative medication record or independent safety judgement.",
  },
  perspectives: {
    eyebrow: "One person, multiple perspectives",
    headline: ["Your context.", "Different useful views."],
    accent: "Different useful views.",
    body: "One underlying picture may support different people for different purposes. Access should be selective, understandable and permission-led.",
    views: [
      { label: "Person", qualifier: "Primary relationship", body: "Continuity, easier preparation, remembered questions, clearer explanations and less need to reconstruct context repeatedly." },
      { label: "Family", qualifier: "With permission", body: "Selected context for practical coordination and supportive conversations — without automatic access or taking over." },
      { label: "Clinician", qualifier: "Conceptual / under development", body: "Concise summaries, source-linked context, questions, priorities and longitudinal observations for human review." },
      { label: "Research", qualifier: "Separately governed", body: "Questions from real life may inform research directions. Participation and data use would require a separate, explicit process." },
    ],
  },
  learning: {
    eyebrow: "Veya + Vascurra Lab",
    headline: ["Daily questions can lead", "to better research questions."],
    accent: "to better research questions.",
    body: "Questions arising in everyday life may help shape what Vascurra Lab explores. Question generation is separate from research participation or personal-data use.",
    steps: ["Person", "Veya — daily relationship", "Context + questions", "Vascurra Lab — research learning", "Evidence + new questions", "Human review", "Better questions for Veya + person"],
    boundary: "This is a governed learning direction, not autonomous self-improving medicine.",
  },
  boundaries: {
    eyebrow: "Safety + boundaries",
    headline: ["Intelligence", "with boundaries."],
    accent: "with boundaries.",
    isNot: ["A doctor", "A diagnosis", "A treatment", "A medication prescriber", "An emergency service", "A replacement for clinical judgement"],
    maySupport: ["Understanding", "Preparation", "Questions", "Chosen reminders", "Contextual continuity"],
    emergency: "If someone believes they need urgent medical help, Veya should direct them to appropriate emergency or clinical services rather than attempt to manage the situation.",
  },
  permissions: {
    eyebrow: "Person in control",
    headline: ["Your context.", "Your permissions."],
    accent: "Your permissions.",
    body: "Vascurra is being designed so the person can understand and revisit how the experience works around them.",
    controls: ["Check-in preferences", "Reminder preferences", "What is remembered", "Family access", "Clinician sharing", "Research consent", "Revocation and changes"],
    closing: "Availability should never become surveillance. Control should remain visible, understandable and revisitable.",
  },
  closing: {
    headline: ["There when you need it.", "Learning with you over time."],
    accent: "Learning with you over time.",
    body: "Veya is being designed to help make everyday context more useful without taking control away from the person.",
    primaryCta: { label: "Discover Vascurra", href: "/how-it-works" },
    secondaryCta: { label: "Support Vascurra", href: "/support" },
  },
} as const;

export const veyaArtworkBriefs = [
  {
    assetKey: "veya-daily-rhythm",
    title: "A day with Veya",
    aspectRatio: "16 / 7",
    mobileAspectRatio: "2 / 3",
    recommendedDimensions: "2400 × 1050 desktop; 1200 × 1800 mobile",
    desktopUse: "Hero continuity field and full-width day timeline from morning to evening.",
    mobileUse: "Vertical chronological thread with generous separation between optional moments.",
    brief: "A fine cyan-to-aqua-to-green thread moves through five distinct moments in an ordinary day. Conversation traces, time markers and subtle accumulated context replace any avatar, chatbot, phone, brain or floating orb. The rhythm must feel optional, calm and human rather than scheduled or surveilled.",
    status: "coded placeholder",
  },
  {
    assetKey: "veya-context-over-time",
    title: "Context over time",
    aspectRatio: "2 / 1",
    mobileAspectRatio: "4 / 5",
    recommendedDimensions: "2400 × 1200 desktop; 1200 × 1500 mobile",
    desktopUse: "Wide memory chapter showing chosen context connecting across several days.",
    mobileUse: "Stacked day traces converging into one clearly labelled longitudinal context path.",
    brief: "Several quiet daily traces carry questions, routines, conversations, appointments and preferences forward without merging them into a score. Source markers remain visible and the visual resolves into a clearer longitudinal picture, not a diagnostic output.",
    status: "coded placeholder",
  },
  {
    assetKey: "veya-provenance",
    title: "Source-aware context",
    aspectRatio: "16 / 9",
    mobileAspectRatio: "4 / 5",
    recommendedDimensions: "2400 × 1350 desktop; 1200 × 1500 mobile",
    desktopUse: "Provenance chapter model linking What, Who, When, Source, Type and Uncertainty.",
    mobileUse: "Readable vertical source trail ending in a clearly bounded context record.",
    brief: "A precise editorial information model shows six provenance dimensions connected to one bounded context record. Each dimension stays distinct. Use fine scientific detail, restrained glow and real labels; avoid database dashboards, certainty scores or clinical findings.",
    status: "coded placeholder",
  },
  {
    assetKey: "veya-perspectives",
    title: "Permission-led perspectives",
    aspectRatio: "2 / 1",
    mobileAspectRatio: "4 / 5",
    recommendedDimensions: "2400 × 1200 desktop; 1200 × 1500 mobile",
    desktopUse: "Person-centred view with selective paths to Family, Clinician and separately governed Research.",
    mobileUse: "Person first, followed by three stacked purpose-and-permission paths.",
    brief: "The person and their relationship with Veya remain primary. Three selective open paths lead to Family with permission, Clinician for human review and Research under separate governance. Connections must look revocable and purpose-specific, never like automatic broadcasting.",
    status: "coded placeholder",
  },
  {
    assetKey: "veya-learning-loop",
    title: "Veya and Vascurra Lab learning loop",
    aspectRatio: "16 / 7",
    mobileAspectRatio: "2 / 3",
    recommendedDimensions: "2400 × 1050 desktop; 1200 × 1800 mobile",
    desktopUse: "Wide continuous flow from Person through Veya, questions, Lab, evidence and human review.",
    mobileUse: "Clear vertical sequence returning better questions to the person without a corporate loop diagram.",
    brief: "One open flowing ribbon connects Person, Veya, Context and Questions, Vascurra Lab, Evidence and New Questions, Human Review, then returns Better Questions to Veya and the person. Human review is visually explicit. Do not imply autonomous medicine, automatic research participation or self-improving clinical AI.",
    status: "coded placeholder",
  },
] as const satisfies readonly VeyaArtworkBrief[];
