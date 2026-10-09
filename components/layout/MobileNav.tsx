"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, earlyAccessHref } from "@/content/site";
import { hero } from "@/content/home";
import type { NavigationItem } from "@/content/vascurra/public-site";
import styles from "./site-header.module.css";

export function MobileNav({ links = navLinks, ctaHref = earlyAccessHref, ctaLabel = hero.primaryCta }: { links?: readonly NavigationItem[]; ctaHref?: string; ctaLabel?: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={styles.mobileNavigation} data-mobile-navigation>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className={styles.menuButton}
      >
        <span aria-hidden="true" className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ""}`}>
          <span />
          <span />
        </span>
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className={styles.mobilePanel}
      >
        <nav aria-label="Site" className={styles.mobilePanelInner}>
          <p className={styles.mobileEyebrow}>Explore Vascurra</p>
          <ul className="flex flex-col">
            {links.map((link) => <li key={link.label} className={styles.mobileItem}>
              {link.children ? <div className={styles.mobileGroup}>
                <p className={styles.mobileGroupLabel}>{link.label}</p>
                <ul className={styles.mobileSubmenu}>
                  {link.children.map((child) => <li key={child.href}><Link href={child.href} onClick={() => setOpen(false)} className={styles.mobileSubmenuLink}>{child.label}</Link></li>)}
                </ul>
              </div> : <Link href={link.href ?? "/"} onClick={() => setOpen(false)} className={styles.mobileLink}>{link.label}</Link>}
            </li>)}
          </ul>

          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--vascurra-deep-teal)] px-6 text-base font-semibold text-white"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </div>
  );
}
