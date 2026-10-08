# Stripe Checkout integration checklist

The server-side hosted Checkout foundation and confirmation page are present but disabled by default and disconnected from production credentials. This file is the single source of truth for completing and activating the integration.

## Values to replace

The following values are placeholders and must be updated before any connected test or live use.

**Files containing placeholders:**

- [.env.example](.env.example)

| Field | Current value | What to set |
|---|---|---|
| `STRIPE_CHECKOUT_ENABLED` | `false` | Keep `false` until the test-mode integration and activation gates are approved. Set to `true` only in an environment with the other required values. |
| `STRIPE_SECRET_KEY` | `sk_test_...` | A restricted Stripe test-mode secret key. Store the real value in the deployment secret manager, never in Git. |
| `STRIPE_PRICE_ID` | `price_...` | The approved one-time Stripe Price ID for the product or participation unit. |
| `STRIPE_SITE_URL` | `http://localhost:3100` | The canonical origin for the environment, without a trailing slash. |
| `mode` | `payment` | Confirm that the approved product is a one-time charge. Use `subscription` only after recurring billing is explicitly approved and designed. |
| `success_url` | `${STRIPE_SITE_URL}/support/success?session_id={CHECKOUT_SESSION_ID}` | The confirmation route retrieves the Checkout Session server-side. Keep the `{CHECKOUT_SESSION_ID}` template. |
| `cancel_url` | `${STRIPE_SITE_URL}/support` | Confirm the approved return route. |
| `line_items[].price` | `STRIPE_PRICE_ID` | The approved Stripe Price ID from the Dashboard or API. |

## Configured parameters

These parameters came from Checkout Studio and are already represented in the server endpoint.

**Files containing these parameters:**

- [app/api/create-checkout-session/route.ts](app/api/create-checkout-session/route.ts)

| Parameter | Value |
|---|---|
| `ui_mode` | `hosted_page` |
| `billing_address_collection` | `auto` |
| `phone_number_collection.enabled` | `false` |
| `automatic_tax.enabled` | `false` |
| `allow_promotion_codes` | `false` |
| `submit_type` | `auto` |
| `integration_identifier` | `hosted_web_0001` |
| `origin_context` | `web` |

`payment_method_collection` is intentionally omitted because this integration currently uses one-time `payment` mode. The Checkout Studio instruction requires that parameter only for `subscription` mode.

## Setup and next steps

1. Approve the commercial purpose, product/participation definition, price, currency, refund policy, receipts, tax and accounting treatment, privacy notice and consumer terms.
2. Create the approved Product and one-time Price in Stripe test mode. Put the Price ID in `STRIPE_PRICE_ID`.
3. Store `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID` and `STRIPE_SITE_URL` as environment-specific server variables. Never expose the secret key to browser code. Keep `STRIPE_CHECKOUT_ENABLED=false` until activation is approved.
4. Review the success route in Stripe test mode. It retrieves the Checkout Session server-side and does not trust the query parameter as proof of payment.
5. Implement a signed Stripe webhook for `checkout.session.completed`, asynchronous payment success/failure, refunds and disputes. Make fulfillment idempotent and persist the Stripe event/session identifiers through the approved payment data boundary.
6. Connect Checkout through the existing `PaymentProvider` only after the test-mode lifecycle, failure handling, refunds and reconciliation have passed review. Do not bypass the provider with page-level Stripe calls.
7. Test with Stripe test mode and documented test cards, including successful payment, decline, authentication, cancellation, repeated webhook delivery and delayed payment methods.
8. Reconcile Checkout Sessions, PaymentIntents, refunds and local participation records before considering live mode.
9. Complete Stripe's go-live checklist and explicitly approve production credentials and public activation.

## Project structure

- `app/api/create-checkout-session/route.ts` creates a Stripe-hosted Checkout Session and redirects the caller to the returned Stripe URL.
- `components/vascurra/payments/CheckoutButton.tsx` provides the server-posted Vascurra checkout panel. It is rendered on `/support` only when all Stripe configuration is present and `STRIPE_CHECKOUT_ENABLED=true` at build time.
- `app/(v2)/support/success/page.tsx` retrieves the returned Checkout Session server-side and displays a paid, pending or unverifiable status without exposing payment details.
- `.env.example` documents the three server-side values used by the route.
- `lib/providers/payments/stripe.ts` remains disabled and is the required domain boundary for the later connected implementation.

## Flow overview

1. An approved server-rendered form sends `POST /api/create-checkout-session`.
2. The route verifies that all server-only Stripe configuration is present.
3. Stripe creates a hosted one-time Checkout Session with the configured Checkout Studio parameters.
4. The browser receives a `303` redirect to Stripe Checkout.
5. Stripe returns the customer to the configured success or cancellation route.
6. A future signed webhook becomes the authoritative trigger for recording successful participation or fulfillment.

## Test resources

- Stripe test cards: <https://docs.stripe.com/testing>
- Stripe Checkout: <https://docs.stripe.com/payments/checkout>
- Stripe go-live checklist: <https://docs.stripe.com/get-started/checklist/go-live>
- Stripe support: <https://support.stripe.com>
- Stripe MCP documentation: <https://docs.stripe.com/mcp>
