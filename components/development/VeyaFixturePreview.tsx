"use client";
import { useState } from "react";
import { veyaJourneys } from "@/lib/development/veya-fixtures";
import styles from "@/components/veyai/console.module.css";

export function VeyaFixturePreview() {
  const [selected, setSelected] = useState(veyaJourneys[0]!.id);
  const [memory, setMemory] = useState<Record<string,string>>({});
  const journey = veyaJourneys.find((item) => item.id === selected)!;
  return <>
    <section className={styles.section}><h2>Choose a synthetic journey</h2><div className={styles.form}><label htmlFor="veya-journey">Journey</label><select id="veya-journey" value={selected} onChange={(event) => setSelected(event.target.value)}>{veyaJourneys.map((item) => <option value={item.id} key={item.id}>{item.title}</option>)}</select></div></section>
    <section className={styles.section} aria-live="polite"><p className={styles.eyebrow}>{journey.title}</p><h2>A person remains in control.</h2><div className={styles.grid}><article className={styles.source}><h3>Person</h3><p>{journey.person}</p></article><article className={styles.source}><h3>Veya · fixture response</h3><p>{journey.veya}</p><p><strong>Source:</strong> {journey.source}</p></article></div>{journey.boundary && <p className={styles.notice}>{journey.boundary}</p>}{journey.memory && !memory[journey.memory.key] && <button onClick={() => setMemory((current) => ({ ...current, [journey.memory!.key]: journey.memory!.value }))}>Retain this chosen preference</button>}</section>
    <section className={styles.section}><h2>Chosen context</h2>{!Object.keys(memory).length && <p>No preferences retained in this browser preview.</p>}{Object.entries(memory).map(([key,value]) => <div className={styles.source} key={key}><p><strong>{value}</strong></p><p>Person-stated preference · synthetic · private to this preview</p><div className={styles.nav}><button onClick={() => setMemory((current) => ({ ...current, [key]: value === "Short summaries" ? "Detailed summaries" : "Short summaries" }))}>Change preference</button><button className={styles.secondary} onClick={() => setMemory((current) => { const next = { ...current }; delete next[key]; return next; })}>Remove retained context</button></div></div>)}</section>
  </>;
}
