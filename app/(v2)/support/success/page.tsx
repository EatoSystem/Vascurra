import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import styles from "./success-page.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Payment confirmation | Vascurra",
  description: "Confirmation for a Stripe-hosted Vascurra checkout.",
};

type Props = {
  searchParams: Promise<{ session_id?: string | string[] }>;
};

type Confirmation = {
  heading: string;
  message: string;
  verified: boolean;
};

async function getConfirmation(sessionId: string | undefined): Promise<Confirmation> {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  const enabled = process.env.STRIPE_CHECKOUT_ENABLED === "true";

  if (!enabled || !secretKey || !sessionId || !sessionId.startsWith("cs_")) {
    return {
      heading: "We could not verify this checkout.",
      message: "Return to the support page and begin again if you still want to continue.",
      verified: false,
    };
  }

  try {
    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.status === "complete" && session.payment_status === "paid") {
      return {
        heading: "Thank you for supporting Vascurra.",
        message: "Stripe has confirmed that your payment was completed. Please keep the receipt sent by Stripe for your records.",
        verified: true,
      };
    }

    return {
      heading: "Your payment is still being confirmed.",
      message: "Stripe has not yet reported this Checkout Session as paid. Please check your Stripe receipt before trying again.",
      verified: false,
    };
  } catch {
    return {
      heading: "We could not verify this checkout.",
      message: "Return to the support page and begin again if you still want to continue.",
      verified: false,
    };
  }
}

export default async function CheckoutSuccessPage({ searchParams }: Props) {
  const parameters = await searchParams;
  const rawSessionId = parameters.session_id;
  const confirmation = await getConfirmation(typeof rawSessionId === "string" ? rawSessionId : undefined);

  return (
    <main id="main" className={styles.page}>
      <section className={styles.panel} aria-labelledby="confirmation-heading">
        <p className={styles.eyebrow}>{confirmation.verified ? "Payment confirmed" : "Checkout status"}</p>
        <h1 id="confirmation-heading" className={styles.heading}>{confirmation.heading}</h1>
        <p className={styles.message}>{confirmation.message}</p>
        <p className={styles.note}>This payment is not represented as a tax-deductible donation or investment.</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/preview">Return to Vascurra</Link>
          {!confirmation.verified ? <Link className={styles.secondary} href="/support">Return to support</Link> : null}
        </div>
      </section>
    </main>
  );
}
