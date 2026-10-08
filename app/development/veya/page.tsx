import Link from "next/link";
import { requireDevelopmentSession } from "@/lib/development/server";
import { VeyaFixturePreview } from "@/components/development/VeyaFixturePreview";
import styles from "@/components/veyai/console.module.css";
export const dynamic = "force-dynamic";
export const metadata = { title: "Veya support preview | Vascurra", robots: { index: false, follow: false } };
export default async function VeyaPreview() {
  await requireDevelopmentSession();
  return <main id="main" className={styles.shell}><Link href="/development">← Development previews</Link><p className={styles.eyebrow}>Veya · Synthetic support journeys</p><h1>Support shaped by the person.</h1><p>Explore continuity, chosen context, daily support and clear boundaries without a live model or personal information.</p><div className={styles.notice}>Concept preview. Veya does not diagnose, prescribe, make clinical findings, provide emergency care or replace clinicians.</div><VeyaFixturePreview /></main>;
}
