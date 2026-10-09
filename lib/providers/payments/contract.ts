export const paymentStatuses = ["idle", "checkout_ready", "processing", "successful", "failed", "cancelled", "refunded", "expired"] as const;
export type PaymentStatus = (typeof paymentStatuses)[number];
export type ParticipationKind = "individual" | "family" | "enterprise";
export type PaymentProviderName = "fixture" | "stripe";

export interface PaymentHistoryEvent {
  status: PaymentStatus;
  at: string;
  description: string;
}

export interface CheckoutIntent {
  id: string;
  participantId: string;
  kind: ParticipationKind;
  currency: "EUR";
  amountCents: number;
  brainCells: number;
  provider: PaymentProviderName;
  mode: "fixture" | "connected";
  route: "checkout" | "exploration";
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  history: PaymentHistoryEvent[];
}

export interface ParticipationRecord {
  id: string;
  intentId: string;
  participantId: string;
  kind: ParticipationKind;
  amountCents: number;
  currency: "EUR";
  brainCells: number;
  provider: PaymentProviderName;
  mode: "fixture" | "connected";
  status: "active" | "refunded";
  recordedAt: string;
  refundedAt: string | null;
  confirmation: string;
  definition: "A Brain Cell is a symbolic unit of participation in the Vascurra mission.";
}

export interface CreateCheckoutInput {
  participantId: string;
  kind: ParticipationKind;
  amountCents: number;
  commandKey: string;
}

export interface PaymentCommand {
  participantId: string;
  intentId: string;
  commandKey: string;
}

/** Product operations, not a vendor session or card-processing API. */
export interface PaymentProvider {
  readonly name: PaymentProviderName;
  readonly mode: "fixture" | "connected" | "disabled";
  createCheckoutIntent(input: CreateCheckoutInput): Promise<CheckoutIntent>;
  prepareCheckout(input: PaymentCommand): Promise<CheckoutIntent>;
  startProcessing(input: PaymentCommand): Promise<CheckoutIntent>;
  handlePaymentResult(input: PaymentCommand & { result: "successful" | "failed" }): Promise<CheckoutIntent>;
  cancelCheckout(input: PaymentCommand): Promise<CheckoutIntent>;
  expireCheckout(input: PaymentCommand): Promise<CheckoutIntent>;
  refundPayment(input: PaymentCommand): Promise<CheckoutIntent>;
  getPaymentStatus(participantId: string, intentId: string): Promise<CheckoutIntent | null>;
  listCheckouts(participantId: string): Promise<CheckoutIntent[]>;
  listParticipation(participantId: string): Promise<ParticipationRecord[]>;
}

export type PaymentErrorCode = "provider_unavailable" | "invalid_input" | "not_found" | "invalid_transition" | "idempotency_conflict" | "exploration_required";

export class PaymentProviderError extends Error {
  constructor(readonly code: PaymentErrorCode, message: string) {
    super(message);
    this.name = "PaymentProviderError";
  }
}
