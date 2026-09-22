import styles from "./fund-page.module.css";

export function ReinvestmentVisual({ flow }: { flow: readonly string[] }) {
  return (
    <figure className={styles.reinvestmentVisual}>
      <figcaption className={styles.srOnly}>An open loop connects products, revenue, research and development, better systems and better products.</figcaption>
      <svg viewBox="0 0 1100 430" aria-hidden="true"><defs><linearGradient id="reinvestment-flow" x1="0" x2="1"><stop stopColor="#087486"/><stop offset=".36" stopColor="#0aa3bc"/><stop offset=".68" stopColor="#2ecfc4"/><stop offset="1" stopColor="#49c768"/></linearGradient></defs><path d="M55 200 C210 55 390 70 520 205 S815 350 1045 185"/><path d="M1045 185 C870 350 625 385 445 270"/><path d="M445 270 l45 5 -29 34"/></svg>
      <ol>{flow.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}</ol>
      <p>Return capacity to the work <span aria-hidden="true">↺</span></p>
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
