import styles from "./checkout-button.module.css";

export function CheckoutButton() {
  return (
    <aside className={styles.panel} aria-labelledby="stripe-checkout-heading">
      <p className={styles.eyebrow}>Secure checkout</p>
      <h2 id="stripe-checkout-heading" className={styles.heading}>Continue with Stripe.</h2>
      <p id="stripe-checkout-description" className={styles.description}>
        Payment details are entered on Stripe’s hosted checkout page. Vascurra does not collect card details directly.
      </p>
      <form action="/api/create-checkout-session" method="post">
        <button className={styles.button} type="submit" aria-describedby="stripe-checkout-description">
          Continue to secure checkout
        </button>
      </form>
    </aside>
  );
}
