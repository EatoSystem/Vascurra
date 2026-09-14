import type { ReactNode } from "react";
import styles from "./homepage-scaffold.module.css";

export function VascurraGradientText({
  children,
  luminous = false,
}: {
  children: ReactNode;
  luminous?: boolean;
}) {
  return <span className={luminous ? styles.luminousGradient : styles.gradient}>{children}</span>;
}
