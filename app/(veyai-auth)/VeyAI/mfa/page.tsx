import type { Metadata } from "next";
import { requireStaff } from "@/lib/veyai/server/auth";
import { MfaEnrolment } from "@/components/veyai/MfaEnrolment";
import { signOut, verifyAuthenticator, verifyDevelopmentSession } from "@/app/(veyai-auth)/actions";
import { providerConfiguration } from "@/lib/providers/config";
import { requireDevelopmentSession } from "@/lib/development/server";
import styles from "@/components/veyai/console.module.css";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Verify staff identity | VeyAI", robots: { index: false, follow: false } };
export default async function Mfa({ searchParams }: { searchParams: Promise<{ notice?: string }> }) {
  if (providerConfiguration().auth === "development") {
    const session = await requireDevelopmentSession(false);
    return <main id="main" className={styles.auth}><p className={styles.eyebrow}>Development identity · simulation</p><h1>A separate verification step.</h1><p>Continue as {session.identity.displayName}. This control demonstrates the MFA boundary without an authenticator or a verified identity.</p><form action={verifyDevelopmentSession}><button>Simulate MFA verification</button></form><form action={signOut}><button className={styles.secondary}>End session</button></form></main>;
  }
  const { client } = await requireStaff(false);
  const { data } = await client.auth.mfa.listFactors();
  const factor = data?.totp.find((item) => item.status === "verified");
  const { notice } = await searchParams;
  return <main id="main" className={styles.auth}>
    <p className={styles.eyebrow}>VeyAI · Staff identity</p><h1>Verify with your authenticator</h1>
    <p>Multi-factor authentication is required before viewing research or making decisions.</p>
    {notice && <p role="alert">The code could not be verified. Try the current code from your authenticator.</p>}
    {factor ? <form action={verifyAuthenticator} className={styles.form}>
      <input type="hidden" name="factorId" value={factor.id} /><label htmlFor="code">Six-digit code</label>
      <input id="code" name="code" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required /><button>Verify and continue</button>
    </form> : <MfaEnrolment />}
    <form action={signOut}><button className={styles.secondary}>Sign out</button></form>
  </main>;
}
