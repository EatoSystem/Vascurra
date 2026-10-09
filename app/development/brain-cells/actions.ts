"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireDevelopmentSession } from "@/lib/development/server";
import { FixturePaymentProvider } from "@/lib/providers/payments/fixture";
import { PaymentProviderError } from "@/lib/providers/payments/contract";
import { parseEuroToCents } from "@/content/brain-cells";
import { randomUUID } from "node:crypto";
import { FilePaymentStore } from "@/lib/providers/payments/store";

async function payment() {
  const session = await requireDevelopmentSession();
  return { session, provider: new FixturePaymentProvider({ store: new FilePaymentStore(session.id) }) };
}
const notice = (error: unknown) => error instanceof PaymentProviderError ? error.code : "provider_unavailable";
export async function createMockCheckout(form: FormData) {
  const input = z.object({ amount: z.string().min(1), kind: z.enum(["individual", "family", "enterprise"]) }).safeParse(Object.fromEntries(form));
  if (!input.success) redirect("/development/brain-cells?notice=invalid_input");
  const { session, provider } = await payment();
  let id: string; let exploration = false;
  try {
    const intent = await provider.createCheckoutIntent({ participantId: session.id, kind: input.data.kind, amountCents: parseEuroToCents(input.data.amount), commandKey: randomUUID() });
    id = intent.id; exploration = intent.route === "exploration";
    if (!exploration) await provider.prepareCheckout({ participantId: session.id, intentId: intent.id, commandKey: randomUUID() });
  } catch (error) { redirect(`/development/brain-cells?notice=${notice(error)}`); }
  redirect(`/development/brain-cells?intent=${id}${exploration ? "&notice=exploration_required" : ""}`);
}
export async function progressMockCheckout(form: FormData) {
  const parsed = z.object({ intent: z.string().min(1), result: z.enum(["processing", "successful", "failed", "cancelled", "expired", "refunded"]) }).safeParse(Object.fromEntries(form));
  if (!parsed.success) redirect("/development/brain-cells?notice=invalid_input");
  const { session, provider } = await payment(); const command = { participantId: session.id, intentId: parsed.data.intent, commandKey: randomUUID() };
  try {
    if (parsed.data.result === "processing") await provider.startProcessing(command);
    else if (parsed.data.result === "successful" || parsed.data.result === "failed") await provider.handlePaymentResult({ ...command, result: parsed.data.result });
    else if (parsed.data.result === "cancelled") await provider.cancelCheckout(command);
    else if (parsed.data.result === "expired") await provider.expireCheckout(command);
    else await provider.refundPayment(command);
    revalidatePath("/development/brain-cells");
  } catch (error) { redirect(`/development/brain-cells?intent=${parsed.data.intent}&notice=${notice(error)}`); }
  redirect(`/development/brain-cells?intent=${parsed.data.intent}`);
}
