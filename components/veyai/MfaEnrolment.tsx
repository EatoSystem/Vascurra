"use client";
import { useActionState } from "react";
import { enrolAuthenticator, verifyAuthenticator, type MfaState } from "@/app/(veyai-auth)/actions";
import styles from "./console.module.css";

export function MfaEnrolment() {
  const [state, action, pending] = useActionState(enrolAuthenticator, {} as MfaState);
  return <>
    {!state.secret && <form action={action}><button disabled={pending}>{pending ? "Preparing…" : "Set up an authenticator"}</button></form>}
    {state.error && <p role="alert">{state.error}</p>}
    {state.secret && <div className={styles.notice}>
      <p>In your authenticator app, add a time-based code for “VeyAI staff” using this setup key. Keep it private.</p>
      <code className={styles.secret}>{state.secret}</code>
      <form action={verifyAuthenticator} className={styles.form}>
        <input type="hidden" name="factorId" value={state.factorId} />
        <label htmlFor="new-code">Six-digit authenticator code</label>
        <input id="new-code" name="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required />
        <button>Verify authenticator</button>
      </form>
    </div>}
  </>;
}
