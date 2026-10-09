"use client";

import { useActionState, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { unlockHolding, type HoldingUnlockState } from "@/app/holding/actions";
import { holding } from "@/content/holding";

export function HoldingUnlockForm({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState<HoldingUnlockState, FormData>(
    unlockHolding,
    null,
  );
  const passwordRef = useRef<HTMLInputElement>(null);
  const headingId = useId();
  const showForm = open || (state !== null && !state.ok);

  useEffect(() => {
    if (!showForm) return;
    const frame = requestAnimationFrame(() => passwordRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [showForm, state]);

  return (
    <footer className="border-t border-hairline/60 bg-white">
      <div className="mx-auto grid max-w-[86rem] gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)] lg:gap-16 lg:px-12 lg:py-16">
        {children ? <div className="min-w-0">{children}</div> : null}
        <div className="flex w-full flex-col gap-4 rounded-[1.5rem] border border-hairline bg-surface/70 p-5 sm:p-6">
        {showForm ? (
          <form
            action={action}
            className="w-full max-w-sm"
            aria-labelledby={headingId}
            aria-describedby={state && !state.ok ? "holding-unlock-error" : undefined}
          >
            <h2 id={headingId} className="text-lg font-semibold text-navy">
              {holding.title}
            </h2>
            <p className="mt-1 text-sm leading-6 text-ink-muted">{holding.accessDescription}</p>
            <label htmlFor="holding-password" className="mt-5 block text-sm font-semibold text-navy">
              {holding.passwordLabel}
            </label>
            <input
              ref={passwordRef}
              id="holding-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              maxLength={256}
              aria-invalid={state && !state.ok ? true : undefined}
              aria-describedby={state && !state.ok ? "holding-unlock-error" : undefined}
              className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
            />
            {state && !state.ok ? (
              <p id="holding-unlock-error" className="mt-2 text-sm text-[#9b2c2c]" role="alert">
                {holding.error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={pending}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[var(--vascurra-deep-teal)] px-8 text-sm font-semibold text-white disabled:opacity-70"
            >
              {pending ? holding.submitting : holding.submit}
            </button>
          </form>
        ) : (
          <>
            <div>
              <p className="text-lg font-semibold text-navy">{holding.title}</p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">{holding.accessDescription}</p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 w-fit items-center rounded-full border border-hairline-strong bg-white px-5 text-sm font-semibold text-ink-teal transition-colors hover:border-ink-teal hover:bg-white"
              aria-expanded={false}
              onClick={() => setOpen(true)}
            >
              {holding.login}
            </button>
          </>
        )}
        </div>
      </div>
    </footer>
  );
}
