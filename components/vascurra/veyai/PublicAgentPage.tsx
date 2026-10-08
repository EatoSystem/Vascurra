import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { foundationPages, type FoundationName } from "@/content/veyai-foundation";
import styles from "./public-agent.module.css";
export function PublicAgentPage({ name }: { name: FoundationName }) {
  const agent = foundationPages[name];
  return <main id="main" className={styles.page}><Container>
    <p className={styles.eyebrow}>Vascurra · VeyAI · Proposed capability</p><h1>VeyAI {name}</h1><p className={styles.question}>{agent.question}</p><p>{agent.purpose}</p>
    <div className={styles.grid}><section><h2>Responsibilities</h2><ul>{agent.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Proposed outputs</h2><ul>{agent.outputs.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
    <section><h2>Human oversight</h2><p>{agent.oversight}</p><p><strong>Agents propose. Humans decide.</strong></p></section>
    <section><h2>Boundaries</h2><p>{agent.boundary}</p><p>Personal Veya context and Patient 0 information are outside VeyAI v0.1.</p></section>
    <section><h2>Development status</h2><p>{name === "Research" || name === "Evidence" ? "The first workflow is being developed with fictional fixtures. A live research service is not available on this website." : "Architectural shell only. This specialist has no executable workflow in v0.1."}</p><p>These foundation roles sit within the proposed mission-capacity horizons. Their descriptions do not imply funding, deployment or validated outcomes.</p><Link href="/100-Billion">Explore the mission-capacity horizons</Link></section>
    <section><h2>Connected by review</h2><p>Research → requested Evidence critique → human decision. Operations and Capital remain later steps requiring further approval.</p><nav aria-label="VeyAI foundation agents">{Object.keys(foundationPages).filter((key) => key !== name).map((key) => <Link href={`/VeyAI-${key}`} key={key}>VeyAI {key}</Link>)}</nav></section>
    <Link href="/VeyAI" className={styles.cta}>Explore VeyAI</Link>
  </Container></main>;
}
