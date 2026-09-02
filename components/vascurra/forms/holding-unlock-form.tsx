"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { unlockHolding, type HoldingUnlockState } from "@/app/holding/actions";
import { holding } from "@/content/holding";

export function HoldingUnlockForm() {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState<HoldingUnlockState, FormData>(
    unlockHolding,
    null,
  );
  const passwordRef = useRef<HTMLInputElement>(null);
  const headingId = useId();
  const showForm = open || (state !== null && !state.ok);

  useEffect(() => {
    if (showForm) {
      passwordRef.current?.focus();
    }
  }, [showForm]);

  return (
    <footer className="border-t border-hairline/60 bg-white">
      <div className="mx-auto flex max-w-[80rem] flex-col items-end gap-4 px-5 py-5 sm:px-8 lg:px-12">
        {showForm ? (
          <form
            action={action}
            className="w-full max-w-sm"
            aria-labelledby={headingId}
            aria-describedby={state && !state.ok ? "holding-unlock-error" : undefined}
          >
            <h2 id={headingId} className="sr-only">
              {holding.title}
            </h2>
            <label htmlFor="holding-password" className="block text-sm font-semibold text-navy">
              {holding.passwordLabel}
            </label>
            <input
              ref={passwordRef}
              id="holding-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
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
          <button
            type="button"
            className="inline-flex min-h-11 items-center text-sm font-medium text-ink-teal underline-offset-4 hover:underline"
            aria-expanded={false}
            onClick={() => setOpen(true)}
          >
            {holding.login}
          </button>
        )}
      </div>
    </footer>
  );
}
