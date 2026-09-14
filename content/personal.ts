export type PersonalArtwork = {
  readonly assetKey: string;
  readonly title: string;
  readonly description: string;
  readonly aspectRatio: "4 / 5" | "16 / 7" | "1 / 1" | "16 / 8";
  readonly mobileAspectRatio: "4 / 5" | "1 / 1" | "4 / 3";
  readonly brief: string;
};

const artwork = (assetKey: string, title: string, description: string, aspectRatio: PersonalArtwork["aspectRatio"], mobileAspectRatio: PersonalArtwork["mobileAspectRatio"], brief: string): PersonalArtwork => ({ assetKey, title, description, aspectRatio, mobileAspectRatio, brief });

export const personal = {
  metadata: {
    title: "For People — Vascurra",
    description: "Explore how Vascurra may help people organise meaningful context, prepare more confidently and remain in control.",
  },
  hero: {
    eyebrow: "For People",
    headline: ["Your life is more", "than a snapshot."],
    accent: "than a snapshot.",
    proposition: "Support independence. Preserve identity.",
    body: "Vascurra is being explored as a way to help people organise meaningful context, understand information and prepare more confidently — without allowing technology to take over everyday life.",
    qualifier: "Vascurra is currently in development. The experiences described on this page represent product direction, not live medical functionality.",
    artwork: artwork("personal-hero", "Personal hero", "One person. A life understood over time.", "4 / 5", "4 / 5", "One dignified older adult shown as active and capable, surrounded by a restrained Vascurra ribbon representing daily context over time. White or transparent background; cyan, teal and green only; sculptural finish; no text, hospital setting, examination or frailty stereotype."),
  },
  everyday: {
    eyebrow: "Everyday life",
    headline: ["The important context often happens", "between appointments."],
    accent: "between appointments.",
    lead: "Daily life contains information that a short consultation can never fully capture.",
    body: "Routines change. Questions appear. Some days feel easier. Other things become harder. Confidence, sleep, mobility, eating, memory, social connection and everyday function can all provide useful context when the person chooses to record them.",
    qualifier: "An individual observation does not automatically indicate disease progression. The purpose is context, not diagnosis.",
    sequence: ["Morning", "Day", "Evening", "Over time"],
  },
  adaptive: {
    eyebrow: "Support that adapts",
    headline: ["Start with what works.", "Add support only where it helps."],
    accent: "Add support only where it helps.",
    body: ["Vascurra should begin with the person's existing abilities, habits and preferences.", "Support should increase only when it is useful — not because a system has decided to take over. The level of support should remain contextual, chosen and revisitable."],
    stages: ["Independent", "Assisted", "More supported"],
    details: ["Familiar routines", "Gentle reminders", "Preparation", "Context when needed"],
    artwork: artwork("personal-adaptive-support", "Adaptive support", "Support that can grow — and step back.", "16 / 7", "4 / 3", "One Vascurra ribbon moving smoothly through three degrees of support without becoming restrictive or implying an inevitable decline pathway."),
  },
  veya: {
    eyebrow: "Veya",
    headline: ["Your way", "through Vascurra."],
    accent: "through Vascurra.",
    lead: "A calm conversational layer designed to help make complexity more understandable.",
    body: "Veya may help someone understand information in plain language, capture context they choose to share, prepare questions, find important information again, organise what matters and surface meaningful changes for review.",
    distinction: "Vascurra Intelligence helps make sense of the system. Veya helps make that understanding useful to people.",
    safety: "Veya is not a doctor, is not a diagnostic system, is not an emergency service and is not a replacement for clinical judgement.",
    artwork: artwork("personal-veya", "Veya", "A calm way through complexity.", "1 / 1", "1 / 1", "A simple luminous Veya form emerging from the Vascurra ribbon. No robot, avatar, chat interface, repeated brain mark or science-fiction face."),
  },
  preparation: {
    eyebrow: "Preparation",
    headline: ["Prepare better.", "Not more anxiously."],
    accent: "Not more anxiously.",
    proposition: "Vascurra should help people prepare for conversations and decisions rather than reduce cognitive health to frightening predictions or unexplained scores.",
    questions: ["What changed?", "What matters today?", "What do I want to remember?", "What should I ask my clinician?", "What information should I bring?"],
  },
  control: {
    eyebrow: "Your control",
    headline: ["Share what helps.", "Keep control of what doesn’t."],
    accent: "Keep control of what doesn’t.",
    lead: "Being supported should not mean surrendering privacy.",
    body: "Vascurra should make sharing understandable, purpose-specific and permission-based. Family, clinician and research access should never be automatic. Permissions should be understandable and revisitable, with permission-appropriate context available only when the person chooses to share, subject to consent, capacity and applicable safeguards.",
    destinations: ["You", "Family", "Clinician", "Research"],
    artwork: artwork("personal-control", "Personal control", "Sharing opens only where chosen.", "16 / 8", "4 / 3", "A person at the centre with selective Vascurra paths opening only to chosen destinations. No automatic connections, padlock, shield or cybersecurity imagery."),
  },
  dignity: {
    eyebrow: "Human first",
    headline: ["Support the person.", "Not just the condition."],
    accent: "Support the person.",
    body: ["Vascurra should adapt around the person rather than asking the person to adapt around the technology.", "Technology should become quieter when it is not needed and clearer when it is."],
    principles: ["Agency", "Identity", "Choice", "Familiarity", "Confidence", "Connection"],
  },
  closing: {
    eyebrow: "Your Vascurra",
    headline: ["Stay yourself.", "Stay involved.", "Stay informed."],
    accent: "Stay informed.",
    body: "Vascurra is being developed to support people living with vascular cognitive change while protecting independence, identity and human judgement.",
  },
  next: {
    eyebrow: "Next",
    headline: ["Support can extend", "beyond one person."],
    body: "Explore how Vascurra could help families stay connected without turning support into surveillance.",
    cta: "Explore Vascurra for families",
    href: "/families",
  },
} as const;

export const personalArtworkManifest = [personal.hero.artwork, personal.adaptive.artwork, personal.veya.artwork, personal.control.artwork] as const;
