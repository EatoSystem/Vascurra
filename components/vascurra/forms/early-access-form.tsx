"use client";

import Link from "next/link";
import { useActionState } from "react";
import { earlyAccess, roles } from "@/content/early-access";
import { privacyHref } from "@/content/site";
import { submitEarlyAccess, type ActionState } from "@/app/early-access/actions";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-sm text-[#9b2c2c]" role="alert">
      {message}
    </p>
  );
}

export function EarlyAccessForm() {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    submitEarlyAccess,
    null,
  );

  if (state?.ok) {
    return (
      <div className="rounded-[1.75rem] border border-hairline bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-semibold">{earlyAccess.successTitle}</h2>
        <p className="mt-4 text-ink-body">{earlyAccess.successBody}</p>
      </div>
    );
  }

  const fields = state && !state.ok && state.code === "invalid" ? state.fields : {};

  return (
    <form action={action} className="max-w-xl space-y-6" noValidate>
      {state && !state.ok && state.code === "unavailable" ? (
        <div className="rounded-2xl border border-hairline bg-mist/80 p-5" role="status">
          <p className="font-semibold text-navy">{earlyAccess.unavailableTitle}</p>
          <p className="mt-2 text-base text-ink-body">{earlyAccess.unavailableBody}</p>
        </div>
      ) : null}

      <div>
        <label htmlFor="name" className="block text-base font-semibold text-navy">
          {earlyAccess.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
        />
        <FieldError message={fields.name} />
      </div>

      <div>
        <label htmlFor="email" className="block text-base font-semibold text-navy">
          {earlyAccess.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
        />
        <FieldError message={fields.email} />
      </div>

      <div>
        <label htmlFor="role" className="block text-base font-semibold text-navy">
          {earlyAccess.roleLabel}
        </label>
        <select
          id="role"
          name="role"
          required
          defaultValue=""
          className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
        >
          <option value="" disabled>
            {earlyAccess.roleLabel}
          </option>
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
        <FieldError message={fields.role} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-base text-ink-body">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 size-5 rounded border-hairline-strong"
          />
          <span>{earlyAccess.consentLabel}</span>
        </label>
        <FieldError message={fields.consent} />
      </div>

      <p className="text-sm text-ink-muted">
        {earlyAccess.privacyPrefix}{" "}
        <Link href={privacyHref} className="font-medium text-ink-teal underline underline-offset-4">
          {earlyAccess.privacyLink}
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--vascurra-deep-teal)] px-8 text-base font-semibold text-white disabled:opacity-70"
      >
        {pending ? earlyAccess.submitting : earlyAccess.submit}
      </button>
    </form>
  );
}
