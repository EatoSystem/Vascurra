"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { earlyAccess, roles } from "@/content/early-access";
import { privacyHref } from "@/content/site";
import { submitEarlyAccess, type ActionState } from "@/app/early-access/actions";

import { EARLY_ACCESS_LIMITS } from "@/lib/early-access";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-[#9b2c2c]">
      {message}
    </p>
  );
}

export function EarlyAccessForm() {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    submitEarlyAccess,
    null,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state?.ok) {
      resultRef.current?.focus();
      return;
    }
    if (state && !state.ok && state.code === "invalid") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    } else if (state && !state.ok) {
      resultRef.current?.focus();
    }
  }, [state]);

  if (state?.ok) {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="rounded-[1.75rem] border border-hairline bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-semibold">{earlyAccess.successTitle}</h2>
        <p className="mt-4 text-ink-body">{earlyAccess.successBody}</p>
      </div>
    );
  }

  const fields = state && !state.ok && state.code === "invalid" ? state.fields : {};

  return (
    <form ref={formRef} action={action} className="max-w-xl space-y-6" noValidate aria-busy={pending}>
      <p className="sr-only" aria-live="polite">
        {pending ? earlyAccess.submitting : ""}
      </p>
      {state && !state.ok && state.code === "unavailable" ? (
        <div ref={resultRef} tabIndex={-1} className="rounded-2xl border border-hairline bg-mist/80 p-5" role="status">
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
          maxLength={EARLY_ACCESS_LIMITS.name}
          aria-invalid={Boolean(fields.name)}
          aria-describedby={fields.name ? "name-error" : undefined}
          className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
        />
        <FieldError id="name-error" message={fields.name} />
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
          maxLength={EARLY_ACCESS_LIMITS.email}
          aria-invalid={Boolean(fields.email)}
          aria-describedby={fields.email ? "email-error" : undefined}
          className="mt-2 min-h-12 w-full rounded-2xl border border-hairline-strong bg-white px-4 text-base text-navy"
        />
        <FieldError id="email-error" message={fields.email} />
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
          aria-invalid={Boolean(fields.role)}
          aria-describedby={fields.role ? "role-error" : undefined}
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
        <FieldError id="role-error" message={fields.role} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-base text-ink-body">
          <input
            id="consent"
            type="checkbox"
            name="consent"
            required
            aria-invalid={Boolean(fields.consent)}
            aria-describedby={fields.consent ? "consent-error" : undefined}
            className="mt-1 size-5 rounded border-hairline-strong"
          />
          <span>{earlyAccess.consentLabel}</span>
        </label>
        <FieldError id="consent-error" message={fields.consent} />
      </div>

      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
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
