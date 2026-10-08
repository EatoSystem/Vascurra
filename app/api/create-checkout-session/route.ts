import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function requiredEnvironment(name: "STRIPE_SECRET_KEY" | "STRIPE_PRICE_ID" | "STRIPE_SITE_URL"): string | null {
  const value = process.env[name]?.trim();
  return value ? value : null;
}

export async function POST() {
  if (process.env.STRIPE_CHECKOUT_ENABLED !== "true") {
    return NextResponse.json(
      { error: "Stripe Checkout is not enabled." },
      { status: 503 },
    );
  }

  const secretKey = requiredEnvironment("STRIPE_SECRET_KEY");
  const priceId = requiredEnvironment("STRIPE_PRICE_ID");
  const siteUrl = requiredEnvironment("STRIPE_SITE_URL");

  if (!secretKey || !priceId || !siteUrl) {
    return NextResponse.json(
      { error: "Stripe Checkout is not configured." },
      { status: 503 },
    );
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.create({
    ui_mode: "hosted_page",
    mode: "payment",
    billing_address_collection: "auto",
    phone_number_collection: { enabled: false },
    automatic_tax: { enabled: false },
    allow_promotion_codes: false,
    submit_type: "auto",
    integration_identifier: "hosted_web_0001",
    origin_context: "web",
    success_url: `${siteUrl}/support/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/support`,
    line_items: [{ price: priceId, quantity: 1 }],
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Stripe Checkout did not return a hosted URL." },
      { status: 502 },
    );
  }

  return NextResponse.redirect(session.url, 303);
}
