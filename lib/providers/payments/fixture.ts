import { cellsFromCents, ultimateCapitalTargetCents } from "@/content/brain-cells";
import type { CheckoutIntent, CreateCheckoutInput, PaymentCommand, PaymentProvider, PaymentStatus, ParticipationRecord } from "./contract";
import { PaymentProviderError } from "./contract";
import type { PaymentSnapshot, PaymentStore } from "./store";
import { InMemoryPaymentStore } from "./store";

/** A development routing threshold, not an approved commercial or payment limit. */
export const exploratoryParticipationThresholdCents = 1_000_000;
export const fixtureCheckoutLifetimeMs = 30 * 60 * 1000;

const descriptions: Record<PaymentStatus, string> = {
  idle: "Synthetic participation selected. No money has moved.",
  checkout_ready: "Mock checkout prepared.",
  processing: "Mock processing started. No card or bank details are collected.",
  successful: "Simulated success. A synthetic confirmation was created.",
  failed: "Simulated payment failure. No participation record was created.",
  cancelled: "Mock checkout cancelled. No money has moved.",
  refunded: "Simulated refund recorded. No real funds were returned.",
  expired: "Mock checkout expired. Start a new selection to continue.",
};

const transitions: Record<PaymentStatus, readonly PaymentStatus[]> = {
  idle: ["checkout_ready", "cancelled", "expired"],
  checkout_ready: ["processing", "cancelled", "expired"],
  processing: ["successful", "failed", "cancelled", "expired"],
  successful: ["refunded"],
  failed: [],
  cancelled: [],
  refunded: [],
  expired: [],
};

function token(value: string): void {
  if (typeof value !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(value)) {
    throw new PaymentProviderError("invalid_input", "Use a valid synthetic identifier or command key.");
  }
}

export interface FixturePaymentOptions {
  store?: PaymentStore;
  now?: () => Date;
  nextId?: () => string;
}

export class FixturePaymentProvider implements PaymentProvider {
  readonly name = "fixture";
  readonly mode = "fixture";
  private readonly store: PaymentStore;
  private readonly clock: () => Date;
  private readonly nextId: () => string;

  constructor(options: FixturePaymentOptions = {}) {
    this.store = options.store ?? new InMemoryPaymentStore();
    this.clock = options.now ?? (() => new Date());
    this.nextId = options.nextId ?? (() => `fixture-${crypto.randomUUID()}`);
  }

  async createCheckoutIntent(input: CreateCheckoutInput): Promise<CheckoutIntent> {
    token(input.participantId);
    token(input.commandKey);
    if (!["individual", "family", "enterprise"].includes(input.kind)) {
      throw new PaymentProviderError("invalid_input", "Choose a participation type.");
    }
    let brainCells: number;
    try { brainCells = cellsFromCents(input.amountCents); }
    catch { throw new PaymentProviderError("invalid_input", "Use whole symbolic Brain Cells in integer EUR cents."); }
    if (input.amountCents < 10 || input.amountCents > ultimateCapitalTargetCents) {
      throw new PaymentProviderError("invalid_input", "Choose an amount within the symbolic mission scale.");
    }
    const fingerprint = JSON.stringify(["create", input.kind, input.amountCents]);
    return this.store.transact(input.participantId, (snapshot) => {
      const existing = this.replay(snapshot, input.commandKey, fingerprint);
      if (existing) return this.refreshExpiry(existing);
      const createdAt = this.clock().toISOString();
      const id = this.nextId();
      token(id);
      if (snapshot.intents.some((intent) => intent.id === id)) throw new Error("Fixture checkout identifier collision.");
      const intent: CheckoutIntent = {
        id, participantId: input.participantId, kind: input.kind,
        currency: "EUR", amountCents: input.amountCents, brainCells,
        provider: this.name, mode: this.mode,
        route: input.kind === "enterprise" || input.amountCents >= exploratoryParticipationThresholdCents ? "exploration" : "checkout",
        status: "idle", createdAt, updatedAt: createdAt,
        expiresAt: new Date(Date.parse(createdAt) + fixtureCheckoutLifetimeMs).toISOString(),
        history: [{ status: "idle", at: createdAt, description: descriptions.idle }],
      };
      snapshot.intents.push(intent);
      snapshot.commands[input.commandKey] = { fingerprint, intentId: id };
      return intent;
    });
  }

  prepareCheckout(input: PaymentCommand): Promise<CheckoutIntent> { return this.move(input, "checkout_ready"); }
  startProcessing(input: PaymentCommand): Promise<CheckoutIntent> { return this.move(input, "processing"); }
  handlePaymentResult(input: PaymentCommand & { result: "successful" | "failed" }): Promise<CheckoutIntent> {
    if (input.result !== "successful" && input.result !== "failed") {
      return Promise.reject(new PaymentProviderError("invalid_input", "Unknown mock payment result."));
    }
    return this.move(input, input.result);
  }
  cancelCheckout(input: PaymentCommand): Promise<CheckoutIntent> { return this.move(input, "cancelled"); }
  expireCheckout(input: PaymentCommand): Promise<CheckoutIntent> { return this.move(input, "expired"); }
  refundPayment(input: PaymentCommand): Promise<CheckoutIntent> { return this.move(input, "refunded"); }

  async getPaymentStatus(participantId: string, intentId: string): Promise<CheckoutIntent | null> {
    token(participantId);
    token(intentId);
    return this.store.transact(participantId, (snapshot) => {
      const intent = snapshot.intents.find((candidate) => candidate.id === intentId);
      return intent ? this.refreshExpiry(intent) : null;
    });
  }

  async listCheckouts(participantId: string): Promise<CheckoutIntent[]> {
    token(participantId);
    return this.store.transact(participantId, (snapshot) => snapshot.intents.map((intent) => this.refreshExpiry(intent)).reverse());
  }

  async listParticipation(participantId: string): Promise<ParticipationRecord[]> {
    token(participantId);
    return this.store.transact(participantId, (snapshot) => [...snapshot.participation].reverse());
  }

  private replay(snapshot: PaymentSnapshot, key: string, fingerprint: string): CheckoutIntent | null {
    const command = Object.hasOwn(snapshot.commands, key) ? snapshot.commands[key] : undefined;
    if (!command) return null;
    if (command.fingerprint !== fingerprint) {
      throw new PaymentProviderError("idempotency_conflict", "This command key was already used for a different request.");
    }
    const intent = snapshot.intents.find((candidate) => candidate.id === command.intentId);
    if (!intent) throw new Error("Fixture payment command has no checkout record.");
    return intent;
  }

  private refreshExpiry(intent: CheckoutIntent): CheckoutIntent {
    if (["idle", "checkout_ready", "processing"].includes(intent.status) && this.clock().getTime() >= Date.parse(intent.expiresAt)) {
      this.recordState(intent, "expired");
    }
    return intent;
  }

  private recordState(intent: CheckoutIntent, status: PaymentStatus): void {
    const at = this.clock().toISOString();
    intent.status = status;
    intent.updatedAt = at;
    intent.history.push({ status, at, description: descriptions[status] });
  }

  private async move(input: PaymentCommand, target: PaymentStatus): Promise<CheckoutIntent> {
    token(input.participantId);
    token(input.intentId);
    token(input.commandKey);
    const fingerprint = JSON.stringify([target, input.intentId]);
    return this.store.transact(input.participantId, (snapshot) => {
      const replay = this.replay(snapshot, input.commandKey, fingerprint);
      if (replay) return this.refreshExpiry(replay);
      const intent = snapshot.intents.find((candidate) => candidate.id === input.intentId);
      if (!intent) throw new PaymentProviderError("not_found", "The mock checkout could not be found.");
      this.refreshExpiry(intent);
      if (intent.status === "expired") {
        snapshot.commands[input.commandKey] = { fingerprint, intentId: intent.id };
        return intent;
      }
      if (intent.route === "exploration" && target !== "cancelled" && target !== "expired") {
        throw new PaymentProviderError("exploration_required", "This participation level uses an exploratory next step, without checkout.");
      }
      if (!transitions[intent.status].includes(target)) {
        throw new PaymentProviderError("invalid_transition", "This action is not available for the current mock payment state.");
      }
      this.recordState(intent, target);
      if (target === "successful") {
        const id = this.nextId();
        token(id);
        if (snapshot.participation.some((record) => record.id === id)) throw new Error("Fixture participation identifier collision.");
        snapshot.participation.push({
          id, intentId: intent.id, participantId: intent.participantId, kind: intent.kind,
          amountCents: intent.amountCents, currency: intent.currency, brainCells: intent.brainCells,
          provider: this.name, mode: this.mode, status: "active", recordedAt: intent.updatedAt, refundedAt: null,
          confirmation: "Synthetic participation confirmation. No payment was collected. This is not a tax invoice.",
          definition: "A Brain Cell is a symbolic unit of participation in the Vascurra mission.",
        });
      }
      if (target === "refunded") {
        const record = snapshot.participation.find((candidate) => candidate.intentId === intent.id);
        if (!record) throw new Error("Fixture successful checkout has no participation record.");
        record.status = "refunded";
        record.refundedAt = intent.updatedAt;
      }
      snapshot.commands[input.commandKey] = { fingerprint, intentId: intent.id };
      return intent;
    });
  }
}
