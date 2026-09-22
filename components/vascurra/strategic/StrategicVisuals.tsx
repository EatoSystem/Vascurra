import type { StrategicChapter } from "@/content/strategic-pages";
import type { CSSProperties } from "react";
import styles from "./strategic-page.module.css";

function Ribbon({ className = "" }: { className?: string }) {
  return <svg className={`${styles.ribbon} ${className}`} viewBox="0 0 800 500" aria-hidden="true"><defs><linearGradient id="strategic-ribbon" x1="0" x2="1"><stop stopColor="#0aa3bc"/><stop offset=".52" stopColor="#2ecfc4"/><stop offset="1" stopColor="#49c768"/></linearGradient></defs><path d="M35 250 C170 55 250 455 390 245 S610 70 765 250"/><path className={styles.ribbonFine} d="M55 315 C205 175 275 365 405 290 S605 205 740 320"/></svg>;
}

const systemLayers = ["Person", "Veya", "Information system"] as const;
const perspectives = ["Personal", "Family — with permission", "Clinician", "Research — separately governed"] as const;

export function SystemHeroVisual() {
  return <figure className={`${styles.visual} ${styles.systemHeroVisual}`} data-artwork-key="system-human-network"><figcaption className={styles.srOnly}>The person connects through Veya and the information system to permission-specific perspectives and a human-reviewed learning loop.</figcaption><Ribbon/><div className={styles.systemSpine}>{systemLayers.map((layer, index) => <div className={index === 0 ? styles.personNode : styles.systemNode} key={layer}><span>{index === 0 ? "Human origin" : String(index + 1).padStart(2,"0")}</span><strong>{layer}</strong></div>)}</div><ul className={styles.heroPerspectives}>{perspectives.map((item, index) => <li className={index === 1 || index === 3 ? styles.restrictedPath : ""} key={item}>{item}</li>)}</ul><div className={styles.learningReturn}><span>Vascurra Lab</span><strong>Human review → learning → person</strong></div></figure>;
}

export function SystemTimeline({ steps, markers }: { steps: readonly string[]; markers: readonly { readonly title: string }[] }) {
  return <figure className={`${styles.visual} ${styles.timelineVisual}`} data-artwork-key="system-context-timeline"><figcaption className={styles.srOnly}>A continuous timeline connects today, days, weeks, months and longitudinal context while preserving provenance.</figcaption><ol>{steps.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></li>)}</ol><ul>{markers.map(item=><li key={item.title}>{item.title}</li>)}</ul></figure>;
}

export function SystemPerspectivesVisual({ items }: { items: NonNullable<StrategicChapter["items"]> }) {
  return <figure className={`${styles.visual} ${styles.perspectivesVisual}`} data-artwork-key="system-perspectives"><figcaption className={styles.srOnly}>Four distinct perspectives connect selectively to a person at the centre.</figcaption><div className={styles.perspectivePerson}><span>Person</span><strong>Choice · purpose · permission</strong></div><ul>{items.map((item,index)=><li className={index===1||index===3?styles.selectivePerspective:""} key={item.title}><span>{item.title}</span>{item.body?<small>{item.body}</small>:null}</li>)}</ul></figure>;
}

export function SystemResearchLoop({ steps }: { steps: readonly string[] }) {
  return <figure className={`${styles.visual} ${styles.researchLoop}`} data-artwork-key="system-research-loop"><figcaption className={styles.srOnly}>Real-life questions pass through research infrastructure and explicit human review before learning returns to the system.</figcaption><Ribbon/><ol>{steps.map((step,index)=><li className={step.toLowerCase().includes("human review")?styles.humanReview:""} key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></li>)}</ol><p>Return to the person</p></figure>;
}

export function FundTransparencyVisual({items}:{items:readonly string[]}){return <figure className={`${styles.visual} ${styles.transparencyVisual}`}><figcaption>Future reporting categories — no current metrics</figcaption><div aria-hidden="true" className={styles.ledgerLine}/><ul>{items.map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span><strong>{item}</strong><small>Future reporting category</small></li>)}</ul></figure>}

export function RoadmapJourney({chapters}:{chapters:readonly StrategicChapter[]}){const items=chapters.flatMap(chapter=>chapter.items??[]);return <section className={styles.roadmapJourney} aria-labelledby="roadmap-journey-title" data-artwork-key="roadmap-human-to-global"><div className={styles.shell}><div className={styles.roadmapIntro}><p className={styles.eyebrow}>01–10 — One continuous journey</p><h2 id="roadmap-journey-title">One human beginning.<span>A widening path.</span></h2><p>Complexity grows only as purpose, evidence and governance grow with it.</p></div><div className={styles.journeyCanvas}><Ribbon/><ol>{items.map((item,index)=><li className={`${styles.journeyStep} ${index===0?styles.journeyOrigin:""}`} key={item.title}><span className={styles.status}>{item.status}</span><strong>{item.title}</strong>{item.body?<small>{item.body}</small>:null}</li>)}</ol></div></div></section>}

export function RoadmapGlobalVisual(){return <figure className={`${styles.visual} ${styles.globalVisual}`} data-artwork-key="roadmap-global-network"><figcaption className={styles.srOnly}>Knowledge paths spread responsibly from one human starting point into a wider international network.</figcaption><div className={styles.globalOrigin}><span>01</span><strong>One person</strong></div><Ribbon/><div className={styles.globalField}>{["Products","Research collaboration","Shared knowledge","Governed infrastructure","International learning"].map((item,index)=><span style={{"--node":index} as CSSProperties} key={item}>{item}</span>)}</div></figure>}
