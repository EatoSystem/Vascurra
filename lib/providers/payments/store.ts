import type { CheckoutIntent, ParticipationRecord } from "./contract";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

export interface PaymentSnapshot {
  intents: CheckoutIntent[];
  participation: ParticipationRecord[];
  commands: Record<string, { fingerprint: string; intentId: string }>;
}

/** The callback and commit must be atomic per participant, including on exceptions. */
export interface PaymentStore {
  transact<T>(participantId: string, update: (snapshot: PaymentSnapshot) => T): Promise<T>;
}

/** Process-local synthetic state; restart clears it. No durable-persistence claim. */
export class InMemoryPaymentStore implements PaymentStore {
  private readonly snapshots = new Map<string, PaymentSnapshot>();

  async transact<T>(participantId: string, update: (snapshot: PaymentSnapshot) => T): Promise<T> {
    const draft = structuredClone(this.snapshots.get(participantId) ?? { intents: [], participation: [], commands: {} });
    const result = update(draft);
    this.snapshots.set(participantId, draft);
    return structuredClone(result);
  }
}

/** Local development persistence across Next.js request workers. Synthetic data only. */
export class FilePaymentStore implements PaymentStore {
  private static queues = new Map<string, Promise<unknown>>();
  private readonly file: string;
  private readonly sessionId: string;
  constructor(sessionId: string, root = path.join(process.cwd(), ".tmp", "fixture-payments")) {
    if (!/^[a-f0-9-]{36}$/.test(sessionId)) throw new Error("Invalid development session identifier");
    this.sessionId = sessionId;
    this.file = path.join(root, `${sessionId}.json`);
  }
  transact<T>(participantId: string, update: (snapshot: PaymentSnapshot) => T): Promise<T> {
    if (participantId !== this.sessionId) return Promise.reject(new Error("Fixture participant isolation failure"));
    const previous = FilePaymentStore.queues.get(this.file) ?? Promise.resolve();
    const operation = previous.then(async () => {
      await mkdir(path.dirname(this.file), { recursive: true });
      let snapshot: PaymentSnapshot = { intents: [], participation: [], commands: {} };
      try { snapshot = JSON.parse(await readFile(this.file, "utf8")) as PaymentSnapshot; }
      catch (error) { if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error; }
      const draft = structuredClone(snapshot);
      const result = update(draft);
      const temporary = `${this.file}.${process.pid}.${Date.now()}.tmp`;
      await writeFile(temporary, JSON.stringify(draft), { encoding: "utf8", flag: "wx" });
      await rename(temporary, this.file);
      return structuredClone(result);
    });
    FilePaymentStore.queues.set(this.file, operation.catch(() => undefined));
    return operation;
  }
}
