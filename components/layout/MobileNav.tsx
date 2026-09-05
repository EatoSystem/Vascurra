"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks, earlyAccessHref } from "@/content/site";
import { hero } from "@/content/home";

export function MobileNav() {
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
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full border border-hairline-strong bg-surface/80 px-4 text-base font-semibold text-navy"
      >
        <span aria-hidden="true" className="flex flex-col justify-center gap-[5px]">
          <span className="block h-0.5 w-5 rounded-full bg-navy" />
          <span className="block h-0.5 w-5 rounded-full bg-navy" />
        </span>
        {open ? "Close" : "Menu"}
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-hairline bg-surface/95 shadow-[0_18px_40px_-24px_rgba(8,61,74,0.35)] backdrop-blur-md"
      >
        <nav aria-label="Site" className="px-5 py-4 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-hairline last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center text-lg font-medium text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href={earlyAccessHref}
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--vascurra-deep-teal)] px-6 text-base font-semibold text-white"
          >
            {hero.primaryCta}
          </Link>
        </nav>
      </div>
    </div>
  );
}
