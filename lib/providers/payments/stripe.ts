import type { CheckoutIntent, CreateCheckoutInput, PaymentCommand, PaymentProvider, ParticipationRecord } from "./contract";
import { PaymentProviderError } from "./contract";

/** Activation requires a later approval and integration verification. No SDK or network access. */
export class StripePaymentProvider implements PaymentProvider {
  readonly name = "stripe";
  readonly mode = "disabled";

  private unavailable(): never {
    throw new PaymentProviderError("provider_unavailable", "Real participation payments are not enabled.");
  }

  async createCheckoutIntent(_input: CreateCheckoutInput): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async prepareCheckout(_input: PaymentCommand): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async startProcessing(_input: PaymentCommand): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async handlePaymentResult(_input: PaymentCommand & { result: "successful" | "failed" }): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async cancelCheckout(_input: PaymentCommand): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async expireCheckout(_input: PaymentCommand): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async refundPayment(_input: PaymentCommand): Promise<CheckoutIntent> { void _input; return this.unavailable(); }
  async getPaymentStatus(_participantId: string, _intentId: string): Promise<CheckoutIntent | null> { void _participantId; void _intentId; return this.unavailable(); }
  async listCheckouts(_participantId: string): Promise<CheckoutIntent[]> { void _participantId; return this.unavailable(); }
  async listParticipation(_participantId: string): Promise<ParticipationRecord[]> { void _participantId; return this.unavailable(); }
}
