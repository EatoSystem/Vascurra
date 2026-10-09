import type { ReactNode } from "react";
import styles from "./homepage-scaffold.module.css";

/** Original bright brand family, including the hero's green continuation. */
export function VascurraGradientText({
  children,
  luminous = false,
  continuation = false,
}: {
  children: ReactNode;
  luminous?: boolean;
  continuation?: boolean;
}) {
  const className = continuation ? styles.gradientEnd : luminous ? styles.luminousGradient : styles.gradient;
  return <span className={className}>{children}</span>;
}
