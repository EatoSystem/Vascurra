"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./site-header.module.css";

export function HeaderVisibility({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;
      const headerHasFocus = headerRef.current?.contains(document.activeElement) ?? false;

      if (currentY <= 24 || delta < -8 || headerHasFocus) {
        setHidden(false);
      } else if (currentY > 96 && delta > 8) {
        setHidden(true);
      }

      lastY.current = currentY;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`relative sticky top-0 z-50 border-b border-hairline/60 bg-white/90 backdrop-blur-xl ${styles.header} ${hidden ? styles.headerHidden : ""} ${className}`}
      onFocusCapture={() => setHidden(false)}
    >
      {children}
    </header>
  );
}
