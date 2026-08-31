# AI Provider Abstraction

## Principle

Vascurra should benefit from OpenAI capabilities without making the product architecture equivalent to one model vendor.

## Vascurra Intelligence Gateway

Future AI calls should pass through a Vascurra-owned abstraction responsible for:

- task routing;
- prompt/version management;
- tool permissions;
- safety guardrails;
- provider configuration;
- logging and traceability;
- structured output validation;
- fallback policy;
- model evaluation.

## Provider adapters

Potential adapters may include:

- OpenAI;
- other approved model providers;
- deterministic/rules engines;
- local/non-generative services.

No provider may directly own the domain model or authoritative user record.

## Traceability

For future high-impact outputs, record as appropriate:

- model/provider;
- model version;
- prompt/policy version;
- tool calls;
- source records;
- structured output;
- validation result;
- timestamp.

## Phase 1

Do not add API dependencies simply to make the website appear “AI-powered”. The product story can describe the planned architecture without a live chatbot.
