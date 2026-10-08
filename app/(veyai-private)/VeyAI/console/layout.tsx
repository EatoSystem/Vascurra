import Link from "next/link";
import type { Metadata } from "next";
import { requireWorkspace } from "@/lib/providers/server";
import { signOut, switchDevelopmentRole } from "@/app/(veyai-auth)/actions";
import styles from "@/components/veyai/console.module.css";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: { default: "VeyAI Console", template: "%s | VeyAI" }, robots: { index: false, follow: false }, alternates: { canonical: null } };
export default async function ConsoleLayout({ children }: { children: React.ReactNode }) {
  const { mode, identityLabel, memberships } = await requireWorkspace();
  return <div className={styles.shell}>
    <header className={styles.header}><Link href="/VeyAI/console" className={styles.wordmark}>Vascurra / VeyAI</Link><form action={signOut}><button className={styles.secondary}>Sign out</button></form></header>
    {mode === "fixture" && <aside className={styles.notice} aria-label="Development identity"><p><strong>Local fixture mode · {identityLabel}</strong><br />Synthetic data only. This session is temporary and does not represent a real staff account. Research and reviewer permissions are exercised separately.</p><form action={switchDevelopmentRole} className={styles.form}><label htmlFor="development-role">Synthetic identity</label><select id="development-role" name="role" defaultValue={memberships[0]?.role ?? "researcher"}><option value="researcher">Synthetic researcher</option><option value="reviewer">Synthetic reviewer</option><option value="admin">Synthetic administrator</option></select><button className={styles.secondary}>Switch identity</button></form><Link href="/development">Development previews</Link></aside>}
    <nav aria-label="VeyAI workspace" className={styles.nav}>{["Overview", "Research", "Evidence", "Approvals", "Atlas", "Operations", "Capital"].map((name) => <Link key={name} prefetch={false} href={`/VeyAI/console${name === "Overview" ? "" : `/${name.toLowerCase()}`}`}>{name}</Link>)}</nav>
    <main id="main">{children}</main>
  </div>;
}

