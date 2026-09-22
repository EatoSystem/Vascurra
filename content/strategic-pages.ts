export type StrategicChapter = {
  readonly eyebrow: string;
  readonly title: readonly string[];
  readonly body: readonly string[];
  readonly items?: readonly { readonly title: string; readonly body?: string; readonly status?: "Current" | "Next" | "Future" }[];
  readonly flow?: readonly string[];
  readonly note?: string;
  readonly tone?: "light" | "quiet" | "deep";
};

export type StrategicPage = {
  readonly slug: "system" | "fund" | "roadmap";
  readonly eyebrow: string;
  readonly title: readonly string[];
  readonly accent: string;
  readonly lead: string;
  readonly qualifier: string;
  readonly chapters: readonly StrategicChapter[];
  readonly closing: { readonly title: readonly string[]; readonly body: string; readonly ctas: readonly { readonly label: string; readonly href: string }[] };
};

export const strategicPages = {
  system: {
    slug: "system", eyebrow: "The Vascurra System", title: ["A Vascular Dementia", "Information System."], accent: "Information System.",
    lead: "Vascurra is being designed to help meaningful information stay connected across everyday life, family support, clinical conversations and responsible research.",
    qualifier: "Vascurra is in development. This page describes project direction and conceptual functionality, not a clinically validated medical system.",
    chapters: [
      { eyebrow: "02 — Start with the person", title: ["One person.", "One life. One changing picture."], body: ["The purpose is not to turn a person into a dataset. The system begins with priorities, questions, routines, conversations, observations, appointments, relevant records, chosen measurements where appropriate and agreed medication context."], items: [{ title: "Priorities" }, { title: "Questions" }, { title: "Routines" }, { title: "Conversations" }, { title: "Chosen context" }], tone: "quiet" },
      { eyebrow: "03 — Veya", title: ["The everyday relationship", "with the system."], body: ["Veya is the proposed human-facing conversational layer. It could make interaction feel natural without requiring someone to manage a complex dashboard."], items: [{ title: "Conversation" }, { title: "Optional check-ins" }, { title: "Preparation" }, { title: "Reflection" }] },
      { eyebrow: "04 — Information over time", title: ["Not another snapshot.", "Context over time."], body: ["Meaning depends on context. Vascurra should preserve what happened, who contributed it, when it happened, its source and type, uncertainty and intended purpose."], flow: ["Today", "Days", "Weeks", "Months", "Longitudinal context"], items: [{ title: "What" }, { title: "Who" }, { title: "When" }, { title: "Source" }, { title: "Type" }, { title: "Uncertainty" }, { title: "Purpose" }], tone: "deep" },
      { eyebrow: "05 — Human perspectives", title: ["One system.", "Different permitted views."], body: ["Different people may need different views for different purposes. Connection never means automatic access."], items: [{ title: "Personal", body: "Centred on the person's choices and context." }, { title: "Family — with permission", body: "Specific support without assumed access." }, { title: "Clinician", body: "Context prepared for qualified human review." }, { title: "Research — separately governed", body: "A distinct purpose, consent and governance path." }] },
      { eyebrow: "06 — From information to support", title: ["Connect context.", "Keep people responsible."], body: ["The proposed system connects information to useful support and learning while preserving human judgement."], flow: ["Observe", "Understand", "Support", "Learn", "Return to the person"], tone: "quiet" },
      { eyebrow: "07 — From support to research", title: ["Daily questions can become", "research questions."], body: ["Questions from real life may enter a governed research-learning process."], flow: ["Real life", "Questions", "Vascurra Lab", "AI + compute + evidence + experts", "Human review", "New learning", "System improvement"], note: "A lived question is not scientific evidence. AI-generated output is not automatically a scientific finding.", tone: "deep" },
      { eyebrow: "08 — Continuous improvement", title: ["Build. Use. Learn.", "Improve."], body: ["Vascurra is being designed with Dad, a former GP living with early vascular dementia. Patient 0 means the human starting point for co-design and learning—not a clinical trial or evidence of effectiveness."], flow: ["Build", "Use", "Observe", "Discuss", "Learn", "Improve"] },
      { eyebrow: "09 — Boundaries", title: ["A powerful information system", "needs clear boundaries."], body: ["Important decisions remain with people and appropriately qualified professionals."], items: [{ title: "No autonomous diagnosis" }, { title: "No autonomous treatment" }, { title: "No medication changes" }, { title: "No automatic family access" }, { title: "No silent research use" }, { title: "No unsupported clinical claims" }], tone: "deep" },
    ],
    closing: { title: ["Start with one person.", "Build for many."], body: "Learn carefully from one human starting point, then earn every responsible next step.", ctas: [{ label: "Explore Patient 0", href: "/patient-0" }, { label: "Explore the Roadmap", href: "/roadmap" }] },
  },
  fund: {
    slug: "fund", eyebrow: fundPage.hero.eyebrow, title: fundPage.hero.title, accent: "permanent capacity",
    lead: fundPage.hero.lead,
    qualifier: fundPage.hero.qualifier,
    chapters: [
      { eyebrow: "02 — Why continuous finance", title: ["Continuous learning", "needs continuous capacity."], body: ["Careful development may require AI model access, compute, research staff, engineers, clinicians, researchers, data and science expertise, legal and ethical work, governance and infrastructure."], note: "This capacity does not imply continuous clinical monitoring." },
      { eyebrow: "03 — What funding enables", title: ["Resource the work", "behind every next question."], body: ["The financing model is intended to build capability across six connected areas."], items: [{ title: "AI + Compute", body: "Model access, evaluation and bounded research runs." }, { title: "Research", body: "Evidence work, research questions and governed programmes." }, { title: "Systems Development", body: "Auditable product and information-system engineering." }, { title: "Experts", body: "Clinical, scientific, technical, legal and ethical review." }, { title: "Patient 0 / Co-design", body: "Daily learning with Dad while protecting his privacy." }, { title: "Open Knowledge", body: "Responsible methods and outputs that others can scrutinise." }], tone: "quiet" },
      { eyebrow: "04 — Capital horizons", title: ["Build capacity.", "Expand with evidence."], body: ["These horizons are strategic direction, not fundraising commitments, valuations, forecasts or guarantees."], flow: ["Build capacity", "Expand research", "Scale validated products", "Global infrastructure"], tone: "deep" },
      { eyebrow: "05 — The flywheel", title: ["Capacity can create", "capacity to learn."], body: ["The ambition is a reinforcing relationship between support, knowledge, responsible products and future research capacity."], flow: ["Support + revenue", "AI + compute + research + experts", "Better knowledge + better systems", "Better products", "More users + more value", "More capacity to research"], note: "This is a mission aspiration, not a proven business model." },
      { eyebrow: "06 — Ways to support", title: ["Different contributions.", "One careful direction."], body: ["Potential future streams may include individual supporters, philanthropy, foundations, grants, research programmes, AI or compute contributions, strategic collaborators, commercial product revenue, institutional licences and in-kind technical support."], note: "No current source, commitment or partnership is implied." },
      { eyebrow: "07 — Transparency", title: ["Show what", "support enables."], body: ["Future reporting should make supported work understandable: research questions investigated, evidence reviews, AI research runs, compute funded, expert reviews, system iterations and open outputs."], note: "No current metrics are claimed." },
      { eyebrow: "08 — Fund the next question", title: ["Every answer should lead", "to a better question."], body: ["The present action is a conversation about support, expertise or partnership—not a payment."], tone: "deep" },
    ],
    closing: { title: ["Fund the work.", "Keep the purpose visible."], body: "Help build the capacity to ask better questions and develop responsibly.", ctas: [{ label: "Support Vascurra", href: "/support" }, { label: "Partner with Vascurra", href: "/contact" }] },
  },
  roadmap: {
    slug: "roadmap", eyebrow: "Roadmap", title: ["Start with Dad.", "Build for many."], accent: "Build for many.",
    lead: "Vascurra begins with one person's real needs and grows through disciplined co-design, evidence, research and responsible development.",
    qualifier: "The roadmap distinguishes current direction from planned and longer-term work. Future phases are not completed products, clinical adoption, trials or validated outcomes.",
    chapters: [
      { eyebrow: "Current", title: ["Begin where", "the need is real."], body: ["The current public project establishes the direction and learns through carefully bounded co-design."], items: [{ title: "01 — Patient 0", status: "Current", body: "Build with Dad around real questions, daily needs, dignity, usefulness and continuous feedback." }, { title: "02 — Veya + daily support", status: "Next", body: "Develop the optional everyday interaction layer: conversation, check-ins, reminders, routines, preparation and agreed medication-schedule support." }, { title: "03 — Information System", status: "Next", body: "Develop structured longitudinal context with provenance, time, permissions, uncertainty and distinct perspectives." }], tone: "deep" },
      { eyebrow: "Next", title: ["Widen support", "without widening access by default."], body: ["Each perspective requires a distinct purpose, permission model and validation path."], items: [{ title: "04 — Family", status: "Next", body: "Develop permission-based family support." }, { title: "05 — Clinical", status: "Future", body: "Develop clinician-oriented preparation and summaries without implying current clinical adoption." }, { title: "06 — Vascurra Lab", status: "Next", body: "Build a continuous research-learning environment around AI, compute, evidence, experts and human review." }] },
      { eyebrow: "Future", title: ["Earn the right", "to expand."], body: ["Expansion depends on governance, evaluation, validation and evidence."], items: [{ title: "07 — Cohorts + validation", status: "Future", body: "Future appropriately governed cohorts, evaluation and validation—not automatic clinical trials." }, { title: "08 — Products", status: "Future", body: "Potential Personal, Family, Clinical and Research product families; none are presented as commercially available." }, { title: "09 — Open knowledge", status: "Future", body: "Open what can responsibly be opened while protecting people and acknowledging residual privacy risk." }] },
      { eyebrow: "10 — Global scale", title: ["From one person", "to a global system."], body: ["The long-term direction includes international products, research collaboration, appropriately governed datasets, research infrastructure, shared knowledge and continuous investment."], note: "Global datasets would exist only where lawful, ethical and explicitly governed. No scale outcome is claimed.", tone: "deep" },
    ],
    closing: { title: ["The destination is ambitious.", "The next step stays practical."], body: "Build with discipline, learn openly where responsible and keep the person at the centre.", ctas: [{ label: "Support the roadmap", href: "/fund" }, { label: "Explore Vascurra Lab", href: "/lab" }] },
  },
} as const satisfies Record<string, StrategicPage>;

export type StrategicPageSlug = keyof typeof strategicPages;
import { fundPage } from "./fund";
