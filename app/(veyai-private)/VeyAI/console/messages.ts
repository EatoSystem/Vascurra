export const actionMessages: Record<string, string> = {
  unavailable: "This action is unavailable. Check the current run and workspace configuration before continuing.",
  permission: "This identity cannot perform that action. Use the assigned researcher or reviewer role.",
  stale: "This version or review has changed. Open the current Research and Evidence outputs before continuing.",
  limit: "The usage ceiling has been reached. Local fixtures allow 10 runs per identity per UTC day, including revisions and Evidence reviews. No model cost was incurred.",
  invalid: "Check the selected scenario, reviewer and required fields, then try again.",
  expired: "The development session has expired. Sign in to a new synthetic session to continue.",
  recorded: "Decision recorded for the displayed versions. No programme, payment or downstream workflow was started.",
};

export const executionMessages: Record<string, string> = {
  queued: "The request is queued. Start the synthetic worker step to see the running state.",
  running: "The fixture is running. Complete the synthetic worker step to validate its output and provenance.",
  awaiting_review: "A validated output is ready for review. Completion is not scientific validation or human approval.",
  incomplete: "Required provenance or review coverage is missing. This output cannot proceed to approval.",
  failed: "Execution stopped without a usable output. The failure remains in this run’s history.",
  cancelled: "This run was cancelled. It cannot produce an output or approval.",
};

export const errorMessages: Record<string, string> = {
  tool_failure: "The simulated source retrieval failed.",
  timeout: "The simulated execution deadline was reached.",
  schema_validation_failed: "The simulated output did not satisfy the structured contract.",
  provider_or_validation_failure: "The provider or output validation failed.",
  cancelled: "Execution was cancelled.",
};
