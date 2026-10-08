import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { veyaiConfiguration } from "@/lib/veyai/config";
import { sendSignIn, developmentSignIn } from "@/app/(veyai-auth)/actions";
import styles from "@/components/veyai/console.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Staff sign-in | VeyAI", robots: { index: false, follow: false } };
export default async function SignIn({ searchParams }: { searchParams: Promise<{ notice?: string }> }) {
  if (!veyaiConfiguration().enabled) notFound();
  const { notice } = await searchParams;
  if (veyaiConfiguration().auth === "development") return <main id="main" className={styles.auth}>
    <p className={styles.eyebrow}>Local development · Synthetic identities</p><h1>Explore the workspace.</h1>
    <p>Build and review Vascurra with fictional Research, Evidence and decisions. This local sign-in simulates staff identity; it does not verify a real person.</p>
    <div className={styles.notice}>No credentials or personal information needed. Fixture records last for this development session and reset when the server restarts.</div>
    {notice && <p role="status">{notice === "expired" ? "Your development session has ended. Start a new session to continue." : "Permission denied in this simulation. Choose an available synthetic role."}</p>}
    <form action={developmentSignIn} className={styles.form}><label htmlFor="role">Synthetic role</label><select name="role" id="role"><option value="researcher">Researcher — prepare Research</option><option value="reviewer">Reviewer — independent human decisions</option><option value="admin">Administrator — scoped research access</option><option value="denied">Simulate permission denied</option></select><button>Start a development session</button></form>
    <p>Production requires invited staff accounts, MFA and verified permissions. No real authentication or services are activated here.</p>
  </main>;
  return <main id="main" className={styles.auth}>
    <p className={styles.eyebrow}>Vascurra · Internal workspace</p><h1>Staff sign-in</h1>
    <p>VeyAI is available to invited staff. A staff membership and authenticator verification are required.</p>
    {notice && <p role="status" className={styles.notice}>{notice === "sent" ? "If this address has an invited account, a sign-in link is on its way." : "Access could not be completed. Check your invitation or contact your workspace administrator."}</p>}
    <form action={sendSignIn} className={styles.form}>
      <label htmlFor="email">Staff email</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <button type="submit">Email a sign-in link</button>
    </form><p>No public account registration is available.</p>
  </main>;
}
