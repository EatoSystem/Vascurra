import { describe, expect, it } from "vitest";
import { rm } from "node:fs/promises";
import path from "node:path";
import { brainCellsForEuro, cellsFromCents, parseEuroToCents, ultimateCapitalTargetCents } from "@/content/brain-cells";
import type { PaymentCommand, PaymentProvider } from "@/lib/providers/payments/contract";
import { FixturePaymentProvider, fixtureCheckoutLifetimeMs } from "@/lib/providers/payments/fixture";
import { FilePaymentStore, InMemoryPaymentStore } from "@/lib/providers/payments/store";
import { StripePaymentProvider } from "@/lib/providers/payments/stripe";

const participantId = "synthetic-participant-1";

function fixture() {
  let sequence = 0;
  let time = Date.parse("2026-10-07T10:00:00Z");
  const store = new InMemoryPaymentStore();
  const provider = new FixturePaymentProvider({ store, now: () => new Date(time), nextId: () => `fixture-${++sequence}` });
  return { provider, store, advance: (ms: number) => { time += ms; } };
}

async function create(provider: PaymentProvider, commandKey = "select-1", amountCents = 1_000) {
  return provider.createCheckoutIntent({ participantId, kind: "individual", amountCents, commandKey });
}

function command(intentId: string, commandKey: string): PaymentCommand { return { participantId, intentId, commandKey }; }

async function processing(provider: PaymentProvider) {
  const intent = await create(provider);
  await provider.prepareCheckout(command(intent.id, "prepare"));
  return provider.startProcessing(command(intent.id, "process"));
}

describe("Brain Cells exact currency arithmetic", () => {
  it("preserves all approved participation examples without float multiplication", () => {
    const examples = [["10", 100], ["100", 1_000], ["1000", 10_000], ["10000", 100_000], ["100000", 1_000_000], ["1000000", 10_000_000]] as const;
    for (const [amount, cells] of examples) expect(brainCellsForEuro(amount)).toBe(cells);
    expect(parseEuroToCents("0.29")).toBe(29);
    expect(brainCellsForEuro("0.10")).toBe(1);
    expect(cellsFromCents(ultimateCapitalTargetCents)).toBe(100_000_000_000);
    expect(parseEuroToCents("90071992547409.91")).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("rejects excess precision, malformed amounts, unsafe sums and fractional cells", () => {
    for (const input of ["-1", "+10", "1e3", "1,000", "01", "10.001", "Infinity", "NaN", "", "90071992547409.92"]) {
      expect(() => parseEuroToCents(input)).toThrow(RangeError);
    }
    expect(() => brainCellsForEuro("10.01")).toThrow(RangeError);
  });
});

describe("fixture payment provider contract", () => {
  it("atomically records a complete mock lifecycle and a clearly labelled confirmation", async () => {
    const { provider } = fixture();
    const running = await processing(provider);
    expect(running.status).toBe("processing");
    expect(await provider.listParticipation(participantId)).toEqual([]);
    const completed = await provider.handlePaymentResult({ ...command(running.id, "result"), result: "successful" });
    expect(completed.history.map((event) => event.status)).toEqual(["idle", "checkout_ready", "processing", "successful"]);
    const records = await provider.listParticipation(participantId);
    expect(records).toHaveLength(1);
    expect(records[0]).toMatchObject({ intentId: running.id, mode: "fixture", amountCents: 1000, brainCells: 100, status: "active" });
    expect(records[0]?.confirmation).toContain("No payment was collected");
    expect(records[0]?.confirmation).toContain("not a tax invoice");
  });

  it("deduplicates concurrent repeated commands and rejects changed idempotency arguments", async () => {
    const { provider } = fixture();
    const [first, second] = await Promise.all([create(provider), create(provider)]);
    expect(first.id).toBe(second.id);
    expect(await provider.listCheckouts(participantId)).toHaveLength(1);
    await expect(create(provider, "select-1", 10_000)).rejects.toMatchObject({ code: "idempotency_conflict" });
    await provider.prepareCheckout(command(first.id, "prepare"));
    await provider.startProcessing(command(first.id, "process"));
    const result = { ...command(first.id, "result"), result: "successful" as const };
    await Promise.all([provider.handlePaymentResult(result), provider.handlePaymentResult(result)]);
    expect(await provider.listParticipation(participantId)).toHaveLength(1);
    await expect(provider.handlePaymentResult({ ...result, result: "failed" })).rejects.toMatchObject({ code: "idempotency_conflict" });
  });

  it("does not create participation when failure or cancellation occurs", async () => {
    const { provider } = fixture();
    const running = await processing(provider);
    expect((await provider.handlePaymentResult({ ...command(running.id, "failed"), result: "failed" })).status).toBe("failed");
    const other = await create(provider, "select-2");
    expect((await provider.cancelCheckout(command(other.id, "cancel"))).status).toBe("cancelled");
    await expect(provider.prepareCheckout(command(other.id, "prepare-cancelled"))).rejects.toMatchObject({ code: "invalid_transition" });
    expect(await provider.listParticipation(participantId)).toEqual([]);
  });

  it("expires unattended checkout before accepting a late simulated success", async () => {
    const { provider, advance } = fixture();
    const running = await processing(provider);
    advance(fixtureCheckoutLifetimeMs);
    const late = await provider.handlePaymentResult({ ...command(running.id, "late"), result: "successful" });
    expect(late.status).toBe("expired");
    expect(await provider.listParticipation(participantId)).toEqual([]);
    expect((await provider.getPaymentStatus(participantId, running.id))?.history.filter((event) => event.status === "expired")).toHaveLength(1);
  });

  it("supports an explicit expiry fixture and retains refund history", async () => {
    const { provider } = fixture();
    const running = await processing(provider);
    await provider.handlePaymentResult({ ...command(running.id, "success"), result: "successful" });
    const refunded = await provider.refundPayment(command(running.id, "refund"));
    expect(refunded.status).toBe("refunded");
    expect((await provider.listParticipation(participantId))[0]).toMatchObject({ status: "refunded", refundedAt: refunded.updatedAt });
    await provider.refundPayment(command(running.id, "refund"));
    expect((await provider.listParticipation(participantId))).toHaveLength(1);
    const expiring = await create(provider, "select-2");
    expect((await provider.expireCheckout(command(expiring.id, "expire"))).status).toBe("expired");
  });

  it("isolates synthetic participants and returns defensive snapshots", async () => {
    const { provider } = fixture();
    const intent = await create(provider);
    expect(await provider.getPaymentStatus("synthetic-participant-2", intent.id)).toBeNull();
    expect(await provider.listCheckouts("synthetic-participant-2")).toEqual([]);
    await expect(provider.cancelCheckout({ ...command(intent.id, "cancel"), participantId: "synthetic-participant-2" })).rejects.toMatchObject({ code: "not_found" });
    intent.amountCents = 99;
    intent.history.length = 0;
    const reread = await provider.getPaymentStatus(participantId, intent.id);
    expect(reread?.amountCents).toBe(1000);
    expect(reread?.history).toHaveLength(1);
  });

  it("prevents out-of-order success and refund commands from mutating state", async () => {
    const { provider } = fixture();
    const intent = await create(provider);
    await expect(provider.handlePaymentResult({ ...command(intent.id, "early"), result: "successful" })).rejects.toMatchObject({ code: "invalid_transition" });
    await expect(provider.refundPayment(command(intent.id, "refund"))).rejects.toMatchObject({ code: "invalid_transition" });
    expect((await provider.getPaymentStatus(participantId, intent.id))?.status).toBe("idle");
    expect(await provider.listParticipation(participantId)).toEqual([]);
  });

  it("routes every enterprise selection and large individual amounts to exploration", async () => {
    const { provider } = fixture();
    for (const [index, kind, amountCents] of [[1, "enterprise", 1000], [2, "individual", 1_000_000], [3, "family", ultimateCapitalTargetCents]] as const) {
      const intent = await provider.createCheckoutIntent({ participantId, kind, amountCents, commandKey: `select-${index}` });
      expect(intent.route).toBe("exploration");
      await expect(provider.prepareCheckout(command(intent.id, `prepare-${index}`))).rejects.toMatchObject({ code: "exploration_required" });
    }
    expect(await provider.listParticipation(participantId)).toEqual([]);
  });

  it("bounds money inputs and accepts family checkout with exact cell conversion", async () => {
    const { provider } = fixture();
    for (const amount of [0, -10, 11, 10.5, Number.NaN, Number.MAX_SAFE_INTEGER, ultimateCapitalTargetCents + 10]) {
      await expect(create(provider, "invalid", amount)).rejects.toMatchObject({ code: "invalid_input" });
    }
    const family = await provider.createCheckoutIntent({ participantId, kind: "family", amountCents: 10_000, commandKey: "family" });
    expect(family).toMatchObject({ kind: "family", route: "checkout", brainCells: 1000 });
  });

  it("shares an injected store across provider instances while retaining atomic rollback", async () => {
    const { provider, store } = fixture();
    const intent = await create(provider);
    const replacement = new FixturePaymentProvider({ store, now: () => new Date("2026-10-07T10:00:00Z") });
    expect((await replacement.getPaymentStatus(participantId, intent.id))?.id).toBe(intent.id);
    await expect(store.transact(participantId, (snapshot) => {
      snapshot.intents.length = 0;
      throw new Error("Simulated persistence failure");
    })).rejects.toThrow("Simulated persistence failure");
    expect(await provider.listCheckouts(participantId)).toHaveLength(1);
  });

  it("persists a synthetic checkout across local request-store instances", async () => {
    const session = crypto.randomUUID();
    const root = path.join(process.cwd(), ".tmp", `payment-store-${session}`);
    try {
      const first = new FixturePaymentProvider({ store: new FilePaymentStore(session, root), nextId: () => "fixture-persisted" });
      const intent = await first.createCheckoutIntent({ participantId: session, kind: "individual", amountCents: 1_000, commandKey: "create" });
      const second = new FixturePaymentProvider({ store: new FilePaymentStore(session, root) });
      expect((await second.getPaymentStatus(session, intent.id))?.amountCents).toBe(1_000);
      await expect(second.listCheckouts(crypto.randomUUID())).rejects.toThrow("isolation");
    } finally { await rm(root, { recursive: true, force: true }); }
  });
});

describe("disabled Stripe provider", () => {
  it("fails closed for every contract operation without using a payment network", async () => {
    const provider: PaymentProvider = new StripePaymentProvider();
    const input = command("synthetic-checkout", "request");
    const operations = [
      () => create(provider), () => provider.prepareCheckout(input), () => provider.startProcessing(input),
      () => provider.handlePaymentResult({ ...input, result: "successful" }), () => provider.cancelCheckout(input),
      () => provider.expireCheckout(input), () => provider.refundPayment(input),
      () => provider.getPaymentStatus(participantId, input.intentId), () => provider.listCheckouts(participantId), () => provider.listParticipation(participantId),
    ];
    expect(provider.mode).toBe("disabled");
    for (const operation of operations) await expect(operation()).rejects.toMatchObject({ code: "provider_unavailable" });
  });
});
