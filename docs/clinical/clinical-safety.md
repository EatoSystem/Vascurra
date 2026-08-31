# Clinical Safety Principles

## Purpose

Define the safety philosophy that future Vascurra product work must preserve.

Phase 1 contains no clinical AI workflow, but these rules shape product architecture and public claims.

## Non-negotiable boundaries

### Medication

Vascurra must not independently start, stop, dose or change prescription medication.

Future product experiences may support:

- medication-list organisation;
- education from trusted sources;
- reminders defined by the user/care plan;
- questions to raise with clinicians.

### Diagnosis

Vascurra must not present itself as autonomously diagnosing vascular dementia, stroke, delirium or other conditions.

### Acute deterioration

Future product design should distinguish sudden deterioration from assumed gradual cognitive progression and direct people toward appropriate real-world care according to approved clinical protocols.

### Emergency symptoms

Emergency logic must be deterministic, clinically reviewed and tested. It must not depend solely on generative-model judgement.

### Uncertainty

Outputs should distinguish:

- user/family report;
- measured data;
- verified clinical record;
- deterministic calculation;
- AI interpretation;
- clinician confirmation.

### Human review

Any high-impact future output should have explicit human-review pathways appropriate to its intended purpose.

## Safety case approach

Before clinical pilots:

- define hazards;
- define mitigations;
- create red-team scenarios;
- test model refusal and escalation behaviour;
- document residual risks;
- log incidents;
- establish change control.

## Phase 1 website rule

Public marketing must not imply that these future safety systems already exist in production.
