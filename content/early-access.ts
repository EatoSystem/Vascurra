export const earlyAccess = {
  title: "Request Access",
  heading: "Request early access.",
  body: "Tell us who you are and how we should reach you. We will only use this to follow up about Vascurra. Please do not include health details.",
  nameLabel: "Name",
  emailLabel: "Email",
  roleLabel: "I am joining as",
  consentLabel:
    "I agree that Vascurra may email me about this project. I can unsubscribe at any time.",
  submit: "Request Access",
  submitting: "Sending…",
  privacyPrefix: "Read how we handle this information in our",
  privacyLink: "privacy notice",
  successTitle: "Thank you.",
  successBody:
    "Your request has been sent. We will be in touch as Vascurra takes its next steps.",
  unavailableTitle: "We could not send this just now.",
  unavailableBody:
    "Early-access registration is not connected in this environment yet. Your details were not stored. Please try again later.",
  errorGeneric: "Something went wrong. Please check the form and try again.",
} as const;

export const roles = [
  { value: "individual", label: "Individual" },
  { value: "family", label: "Family member" },
  { value: "clinician", label: "Clinician" },
  { value: "researcher", label: "Researcher" },
  { value: "partner", label: "Partner / funder" },
] as const;

export type RoleValue = (typeof roles)[number]["value"];
