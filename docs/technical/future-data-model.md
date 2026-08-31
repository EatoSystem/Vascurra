# Future Data Model — Conceptual Only

This file is intentionally non-implementation-specific. No production health database should be created during Phase 1.

## Proposed domain areas

### Person

- identity reference;
- preferences;
- communication preferences;
- support preferences.

### Relationships and permissions

- family/care-circle relationship;
- clinician relationship;
- role;
- permission scope;
- valid-from / valid-to;
- legal authority where applicable;
- consent history.

### Medical context

Future and clinician-reviewed:

- diagnoses;
- medications;
- allergies;
- relevant conditions;
- source provenance.

### Observation

- observer;
- timestamp;
- domain;
- original text;
- structured representation;
- confidence/verification status;
- source.

### Event

- appointment;
- medication change;
- hospitalisation;
- fall;
- acute episode;
- other material event.

### Summary

- time window;
- source observations;
- deterministic calculations;
- AI-generated text;
- model/version provenance;
- clinician confirmation status.

### Consent

- purpose;
- scope;
- recipient;
- legal/decision-support basis;
- status;
- timestamp;
- revocation.

## Key principle

Store structured facts and provenance. Do not treat an endless AI chat transcript as the clinical data model.
