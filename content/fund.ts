export type FundResource = {
  readonly name: string;
  readonly body: string;
};

export type CapitalHorizon = {
  readonly id: "01" | "02" | "03" | "04";
  readonly eyebrow: string;
  readonly amount: "€1–5M" | "€10–25M" | "€50–100M+" | "€1B+";
  readonly title: string;
  readonly subline: string;
  readonly headline?: string;
  readonly body: string;
  readonly uses: readonly string[];
  readonly themes?: readonly {
    readonly label: string;
    readonly body: string;
  }[];
  readonly statement: string;
  readonly status: "Planning horizon" | "Long-term mission";
  readonly featured?: boolean;
};

export type FundFlywheelStage = {
  readonly label: string;
  readonly items: readonly string[];
};

export const fundPage = {
  hero: {
    eyebrow: "Vascurra Fund",
    title: ["Build permanent capacity", "to fight vascular dementia."],
    lead: "Vascurra's ambition is to mobilise sustained capital, compute, research capacity and expertise — from Patient 0 to permanent global infrastructure.",
    statement: ["Not one round.", "Not one grant.", "A capital flywheel."],
    qualifier: "Vascurra Fund describes the project's proposed capital mobilisation and financing model. It is not represented as a registered charity, tax-deductible fund, investment product or proven business model, and this website accepts no payments.",
  },
  continuousCapital: {
    eyebrow: "Why continuous capital",
    title: ["Continuous research", "needs continuous capacity."],
    body: [
      "Vascurra is intended to learn, develop and investigate continuously. That requires more than periodic project grants.",
      "Potential ongoing requirements extend across technology, research, specialist review and the systems needed to develop responsibly.",
    ],
    requirements: ["Frontier AI access", "Compute", "AI evaluation", "Engineering", "Product design", "Data architecture", "Research staff", "Evidence review", "Clinicians", "Scientists", "Statisticians", "AI researchers", "Legal expertise", "Ethics", "Privacy", "Governance", "Security", "Validation", "Infrastructure", "International development"],
    distinction: "The work may be continuous. The person should never become an object of continuous surveillance.",
  },
  mobilisation: {
    eyebrow: "Capital mobilisation",
    title: ["Capacity is bigger", "than cash alone."],
    body: "Capital. Compute. Research. Expertise. Infrastructure.",
    explanation: "€100M of mission capacity does not necessarily mean €100M in cash. It may be cumulative across cash, compute, research funding, infrastructure, expertise and commercial reinvestment.",
    resources: [
      { name: "Cash capital", body: "Direct funding for development and research." },
      { name: "AI + compute", body: "Model access, GPUs, cloud capacity, inference, evaluation and technical infrastructure." },
      { name: "Research funding", body: "Grants, programmes, collaborative studies and dedicated research support." },
      { name: "Expertise", body: "Clinical, scientific, engineering, legal, ethical and research contribution." },
      { name: "Infrastructure", body: "Secure environments, tooling, appropriately governed datasets and institutional capability." },
      { name: "Commercial revenue", body: "Future product and institutional revenues that may be reinvested into development and research." },
      { name: "In-kind contributions", body: "Technical support, fellowships, secondees, compute credits and specialist resources." },
    ] satisfies readonly FundResource[],
  },
  horizonsQualifier: "The amounts below are illustrative strategic capital and resource horizons for potential mission capacity. They are not current funding, announced equity rounds, valuations, fundraising commitments or guarantees.",
  horizons: [
    {
      id: "01", eyebrow: "Capital horizon 01", amount: "€1–5M", title: "Build the foundation", subline: "Patient 0 · Veya · Core System · Research Infrastructure",
      body: "The first capital horizon would establish the foundations required to build Vascurra properly around Dad and the Patient 0 co-design programme.",
      uses: ["Veya and the everyday interaction layer", "Information-system and longitudinal-context foundations", "Provenance, permissions and uncertainty handling", "Governance and research infrastructure", "Advanced AI access and initial compute capacity", "Engineering and product design", "Privacy, security, regulatory and safety strategy", "Clinical, scientific and technical advisers", "The first multidisciplinary expert network", "Structured Patient 0 co-design"],
      themes: [
        { label: "Build", body: "Veya, the information system and product foundations." },
        { label: "Protect", body: "Privacy, security, provenance, consent and governance." },
        { label: "Prepare", body: "Research infrastructure, AI access and expert collaboration." },
      ],
      statement: "The goal is not scale. It is to build something useful, safe, research-capable and technically serious from the beginning.", status: "Planning horizon",
    },
    {
      id: "02", eyebrow: "Capital horizon 02", amount: "€10–25M", title: "Build the research engine", subline: "Vascurra Lab · AI · Compute · Cohorts · Family · Clinical",
      body: "The second capital horizon would begin turning Vascurra Lab into a substantial AI-native research and development capability.",
      uses: ["Dedicated Vascurra Lab infrastructure", "Larger AI and compute capacity", "Multi-model research systems", "Systematic evidence review and question pipelines", "Expert review networks", "Deeper information and data architecture", "Appropriately governed co-design cohorts", "Evaluation and validation programmes", "Family and Clinician product development", "Research engineering and collaboration", "Stronger security, governance and research operations"],
      themes: [
        { label: "Research", body: "Evidence pipelines, AI systems, compute and expert review." },
        { label: "Expand", body: "Vascurra Lab, Family and Clinician product capability." },
        { label: "Strengthen", body: "Evaluation, security, research operations and consented cohorts." },
      ],
      statement: "Move from one deeply understood human starting point toward a governed learning system capable of investigating questions across broader populations.", status: "Planning horizon",
    },
    {
      id: "03", eyebrow: "Capital horizon 03", amount: "€50–100M+", title: "Build the international network", subline: "International Research · Infrastructure · Clinical Collaboration · Multi-country Development",
      body: "At this level, Vascurra could begin developing as international infrastructure rather than simply a single product.",
      uses: ["International vascular-dementia research network", "Major AI and compute infrastructure", "Larger research programmes", "Multi-country development and governed evaluation", "Secure research environments", "Substantial longitudinal information infrastructure", "Lawful, consented and responsibly governed datasets", "Hospital, university and research-institute collaboration", "Clinical-system integration where appropriate", "International localisation, governance and regulatory work", "Open tools and methods"],
      themes: [
        { label: "Connect", body: "Researchers, clinicians, institutions and international partners." },
        { label: "Infrastructure", body: "AI, compute, secure environments and research operations." },
        { label: "Expand", body: "Programmes, methods, tools and knowledge where appropriate." },
      ],
      statement: "Connect people, information, researchers, clinicians, AI systems and evidence across countries.", status: "Planning horizon",
    },
    {
      id: "04", eyebrow: "The long-term mission", amount: "€1B+", title: "Permanent global capacity", headline: "Build permanent infrastructure to fight vascular dementia.", subline: "A global mission — not a single funding round.",
      body: "The long-term ambition is to mobilise more than €1B of cumulative mission capacity over time across capital, compute, research funding, expertise, infrastructure and commercial reinvestment.",
      uses: ["Global Vascurra products", "World-class AI research infrastructure", "Major dedicated compute", "International clinical and research networks", "Long-term studies", "Appropriately governed datasets", "Open scientific infrastructure", "Independent research programmes and fellowships", "Expert, university and hospital collaboration", "Continuous product development", "International deployment", "Permanent capacity to investigate difficult vascular-dementia questions"],
      statement: "The ambition is not €1B for its own sake. It is €1B+ of cumulative capacity to fight vascular dementia.", status: "Long-term mission", featured: true,
    },
  ] satisfies readonly CapitalHorizon[],
  flywheel: {
    eyebrow: "The capital flywheel",
    title: ["Build capacity.", "Create knowledge.", "Reinvest. Repeat."],
    stages: [
      { label: "Mobilise", items: ["Philanthropy", "Grants", "Research funding", "AI + compute support", "Partners", "Commercial revenue"] },
      { label: "Build", items: ["AI", "Compute", "Engineering", "Research", "Experts"] },
      { label: "Learn", items: ["Better questions", "Better evidence", "Better systems"] },
      { label: "Create", items: ["Personal", "Family", "Clinical", "Research products"] },
      { label: "Reinvest", items: ["More useful products", "More knowledge", "More support or revenue"] },
      { label: "Renew", items: ["More capacity for research and development"] },
    ],
    summary: "Capital → Capability → Knowledge → Products → Revenue/Support → More Capacity",
    note: "This is Vascurra's long-term mission and financing model, not a representation of current revenue, current funding or guaranteed future outcomes.",
  },
  sources: {
    eyebrow: "A diversified capital base",
    title: ["One mission.", "Many sources of capacity."],
    items: ["Founder capital", "Philanthropy", "Major supporters", "Foundations", "Grants", "Government + EU programmes", "Research funding", "AI + compute contributions", "Technical partners", "University + research collaboration", "Healthcare collaboration", "Corporate support", "Commercial revenue", "Institutional revenue", "Licensing — where appropriate", "In-kind expertise", "Permanent / endowment-style capital — longer term"],
    qualifier: "These are potential financing sources. No existing commitment, partnership, legal structure or eligibility is implied.",
    equityNote: "Vascurra's capital strategy is being designed without assuming that equity financing must be the default. Future financing structures will depend on what best supports the mission, protects long-term flexibility and responsibly funds the work.",
  },
  reinvestment: {
    eyebrow: "Reinvestment",
    title: ["Products can help", "fund research."],
    body: "Commercial products may eventually generate revenue. A core strategic ambition is that successful products help finance further development and research.",
    flow: ["Products", "Revenue", "Research + development", "Better systems", "Better products"],
    priorities: ["AI", "Compute", "Research", "Engineering", "Experts", "Open knowledge", "Future product development"],
    note: "This is an intended strategic relationship, not a binding allocation, revenue forecast or guaranteed outcome.",
  },
  transparency: {
    eyebrow: "Vascurra Research Ledger",
    title: ["Make the", "work visible."],
    items: ["What resources were mobilised?", "What questions were investigated?", "What evidence was reviewed?", "What compute was enabled?", "What experts reviewed the work?", "What was built?", "What was learned?", "What was opened to others?"],
    principle: "Every contribution should have a visible purpose. Every research programme should leave a trail of knowledge where appropriate.",
    note: "Future reporting architecture only. No current figures or results are claimed.",
  },
  closing: {
    eyebrow: "Fund the next question",
    title: ["It starts with one person.", "The ambition is millions."],
    body: "Vascurra begins with Dad. Building permanent capital, compute and research capacity is how one deeply understood starting point may ultimately support many more people.",
    ctas: [{ label: "Support Vascurra", href: "/support" }, { label: "Partner with Vascurra", href: "/contact" }],
  },
} as const;
