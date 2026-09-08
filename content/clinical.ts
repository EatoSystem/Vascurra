export const clinical = {
  title: "Clinical",
  heading: "For Clinicians",
  lead:
    "Clearer context for better‑prepared conversations — relevant history, reported change and provenance.",
  note:
    "Concepts shown describe product direction. They do not provide medical functionality.",
  sections: [
    {
      heading: "Visit preparation",
      body:
        "A proposed concise view of meaningful change between appointments, with sources kept distinct from interpretation.",
    },
    {
      heading: "Longitudinal summary principles",
      body:
        "Facts remain separate from inference. Provenance is first‑class so each item can be traced.",
    },
    {
      heading: "Clinical boundary",
      body:
        "Designed to support human judgement and clinical conversation. It is not a treatment system or emergency protocol.",
    },
  ] as const,
} as const;
