"use client";

import { useActionState } from "react";
import { unlockHolding, type HoldingUnlockState } from "@/app/holding/actions";
import { holding } from "@/content/holding";

export function HoldingUnlockForm() {
  const [state, action, pending] = useActionState<HoldingUnlockState, FormData>(
    unlockHolding,
    null,
  );

  return (
    <section
      aria-labelledby="holding-unlock-heading"
      className="bg-white px-5 pb-24 sm:px-8 lg:px-12"
    >
      <form
        action={action}
        className="mx-auto max-w-sm"
        aria-describedby={state && !state.ok ? "holding-unlock-error" : undefined}
      >
        <h2 id="holding-unlock-heading" className="sr-only">
          {holding.title}
        </h2>
        <label htmlFor="holding-password" className="block text-base font-semibold text-navy">
          {holding.passwordLabel}
        </label>
        <input
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
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--vascurra-deep-teal)] px-8 text-base font-semibold text-white disabled:opacity-70"
        >
          {pending ? holding.submitting : holding.submit}
        </button>
      </form>
    </section>
  );
}
