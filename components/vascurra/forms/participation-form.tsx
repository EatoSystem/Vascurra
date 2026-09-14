"use client";

import Link from "next/link";
import { useActionState, type ReactNode } from "react";
import { submitParticipation, type ParticipationState } from "@/app/(v2)/actions";
import { contactTopics, participationRoles } from "@/lib/participation";

const labels: Record<string, string> = { person: "Person", family: "Family member", clinician: "Clinician", researcher: "Researcher", partner: "Partner", supporter: "Supporter", other: "Other", general: "General", clinical: "Clinical collaboration", research: "Research", partnerships: "Partnerships", funding: "Funding / philanthropy", media: "Media" };

export function ParticipationForm({ kind }: { kind: "access" | "contact" }) {
  const [state, action, pending] = useActionState<ParticipationState, FormData>(submitParticipation, null);
  const fields = state && !state.ok && state.code === "invalid" ? state.fields : {};
  if (state?.ok) return <div role="status" className="rounded-[var(--vascurra-radius)] border border-hairline bg-white p-8"><h2 className="text-base font-bold text-navy">Thank you.</h2><p className="mt-3 text-base">Your message has been sent. We will respond when appropriate.</p></div>;
  const options = kind === "access" ? participationRoles : contactTopics;
  return <form action={action} className="grid gap-6 rounded-[var(--vascurra-radius)] border border-hairline bg-white p-6 shadow-[var(--vascurra-shadow)] sm:p-10" noValidate>
    <input type="hidden" name="kind" value={kind} />
    <Field id={`${kind}-name`} label="Name" error={fields.name}><input className="min-h-12 rounded-xl border border-hairline-strong px-4 text-base" id={`${kind}-name`} name="name" autoComplete="name" required aria-invalid={Boolean(fields.name)} aria-describedby={fields.name ? `${kind}-name-error` : undefined} /></Field>
    <Field id={`${kind}-email`} label="Email" error={fields.email}><input className="min-h-12 rounded-xl border border-hairline-strong px-4 text-base" id={`${kind}-email`} name="email" type="email" autoComplete="email" required aria-invalid={Boolean(fields.email)} aria-describedby={fields.email ? `${kind}-email-error` : undefined} /></Field>
    {kind === "access" ? <Field id={`${kind}-country`} label="Country" error={fields.country}><input className="min-h-12 rounded-xl border border-hairline-strong px-4 text-base" id={`${kind}-country`} name="country" autoComplete="country-name" required aria-invalid={Boolean(fields.country)} aria-describedby={fields.country ? `${kind}-country-error` : undefined} /></Field> : null}
    <Field id={`${kind}-category`} label={kind === "access" ? "I am interested as" : "Enquiry type"} error={fields.category}><select className="min-h-12 rounded-xl border border-hairline-strong bg-white px-4 text-base" id={`${kind}-category`} name="category" defaultValue="" required aria-invalid={Boolean(fields.category)} aria-describedby={fields.category ? `${kind}-category-error` : undefined}><option value="" disabled>Select one</option>{options.map((value) => <option value={value} key={value}>{labels[value]}</option>)}</select></Field>
    <Field id={`${kind}-message`} label={kind === "access" ? "What interests you about Vascurra? (optional)" : "Message (optional)"} error={fields.message}><textarea className="min-h-36 rounded-xl border border-hairline-strong px-4 py-3 text-base" id={`${kind}-message`} name="message" maxLength={2000} aria-invalid={Boolean(fields.message)} aria-describedby={fields.message ? `${kind}-message-error` : undefined} /></Field>
    <label className="flex gap-3 text-base"><input className="mt-1 size-5" type="checkbox" name="consent" required aria-describedby={fields.consent ? `${kind}-consent-error` : undefined} /><span>I agree that Vascurra may use these details to respond to this enquiry. I can withdraw this request at any time.</span></label>
    {fields.consent ? <p id={`${kind}-consent-error`} className="text-base font-semibold text-red-700">{fields.consent}</p> : null}
    <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true"><label htmlFor={`${kind}-website`}>Website</label><input id={`${kind}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>
    <p className="text-base text-ink-muted">Please do not include medical information. Read the <Link className="font-semibold text-ink-teal underline" href="/privacy">privacy notice</Link>.</p>
    {state && !state.ok && state.code !== "invalid" ? <p role="alert" className="text-base font-semibold text-red-700">{state.code === "rate-limited" ? "Please wait before trying again." : "This form is not connected in this environment. Your details were not stored."}</p> : null}
    <button disabled={pending} className="min-h-12 rounded-full bg-[var(--vascurra-deep-teal)] px-7 text-base font-bold text-white disabled:opacity-60">{pending ? "Sending…" : kind === "access" ? "Request Access" : "Send enquiry"}</button>
  </form>;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return <div className="grid gap-2"><label className="text-base font-semibold text-navy" htmlFor={id}>{label}</label>{children}{error ? <p id={`${id}-error`} className="text-base font-semibold text-red-700" role="alert">{error}</p> : null}</div>;
}
