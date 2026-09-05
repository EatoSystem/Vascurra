"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Marks its children revealed once they enter the viewport, so connectors can
 * draw and content can rise into place on scroll.
 *
 * Deliberately tiny and shared: it sets one data attribute and disconnects.
 * All the actual motion lives in CSS (`[data-reveal]`, `[data-reveal-draw]`).
 *
 * Nothing is gated behind it — without JavaScript the `<noscript>` rule and the
 * reduced-motion block both leave content fully visible, so no information is
 * only reachable through animation (§17).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.setAttribute("data-revealed", "true");
      node.querySelectorAll("[data-reveal-draw]").forEach((el) => {
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.setAttribute("data-revealed", "true");
          node.querySelectorAll("[data-reveal-draw]").forEach((el) => {
            el.setAttribute("data-revealed", "true");
          });
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -64px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-reveal=""
      style={delay ? ({ ["--v-delay" as string]: `${delay}ms` }) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
