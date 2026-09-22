import styles from "./capital-amount.module.css";

export const CAPITAL_AMOUNT_LABELS = {
  "€1–5M": "1 to 5 million euro",
  "€10–25M": "10 to 25 million euro",
  "€50–100M+": "50 to 100 million euro or more",
  "€1B+": "1 billion euro or more",
} as const;

type CapitalAmountValue = keyof typeof CAPITAL_AMOUNT_LABELS;

const PARTS: Record<CapitalAmountValue, { start: string; end?: string; suffix: "M" | "B"; plus?: boolean }> = {
  "€1–5M": { start: "1", end: "5", suffix: "M" },
  "€10–25M": { start: "10", end: "25", suffix: "M" },
  "€50–100M+": { start: "50", end: "100", suffix: "M", plus: true },
  "€1B+": { start: "1", suffix: "B", plus: true },
};

export function CapitalAmount({ amount, className = "" }: { amount: CapitalAmountValue; className?: string }) {
  const parts = PARTS[amount];
  return (
    <span className={`${styles.amount} ${className}`} aria-label={CAPITAL_AMOUNT_LABELS[amount]} data-capital-amount={amount}>
      <span aria-hidden="true" className={styles.lockup}>
        <span className={styles.currency}>€</span>
        <span className={styles.value}>{parts.start}</span>
        {parts.end ? <><span className={styles.range}>–</span><span className={styles.value}>{parts.end}</span></> : null}
        <span className={styles.suffix}>{parts.suffix}</span>
        {parts.plus ? <span className={styles.plus}>+</span> : null}
      </span>
    </span>
  );
}
