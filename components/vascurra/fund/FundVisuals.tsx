import styles from "./fund-page.module.css";

export function ReinvestmentVisual({ flow }: { flow: readonly string[] }) {
  return (
    <figure className={styles.reinvestmentVisual}>
      <figcaption className={styles.srOnly}>An open loop connects products, revenue, research and development, better systems and better products.</figcaption>
      <svg viewBox="0 0 1000 300" aria-hidden="true"><path d="M60 155 C220 30 375 30 500 155 S775 285 940 155"/><path d="M940 155 C795 250 670 250 555 175"/></svg>
      <ol>{flow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
      <p>Return capacity to the work</p>
    </figure>
  );
}

export function TransparencyVisual({ items }: { items: readonly string[] }) {
  return (
    <div className={styles.transparencyVisual}>
      <p>Future reporting architecture</p>
      <ul>{items.map((item) => <li key={item}><span aria-hidden="true"/><strong>{item}</strong><small>Category — no current metric</small></li>)}</ul>
    </div>
  );
}
