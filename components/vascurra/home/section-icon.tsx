type SectionIconName = "person" | "book" | "insight" | "family" | "clinical" | "research" | "conversation" | "context" | "prepare" | "compute" | "systems";

export function SectionIcon({ name }: { name: SectionIconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.6 };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {name === "person" && <><circle {...common} cx="12" cy="7" r="3" /><path {...common} d="M5.5 20c.5-5 2.7-7.5 6.5-7.5s6 2.5 6.5 7.5" /></>}
      {name === "family" && <><circle {...common} cx="8" cy="8" r="2.5" /><circle {...common} cx="16" cy="8" r="2.5" /><path {...common} d="M2.5 19c.4-4 2.2-6 5.5-6 1.8 0 3.1.6 4 1.8 1-1.2 2.2-1.8 4-1.8 3.3 0 5.1 2 5.5 6" /></>}
      {name === "book" && <><path {...common} d="M3.5 5.5c3.2-.8 5.8-.2 8.5 1.8v12c-2.7-2-5.3-2.6-8.5-1.8zM20.5 5.5c-3.2-.8-5.8-.2-8.5 1.8v12c2.7-2 5.3-2.6 8.5-1.8z" /></>}
      {name === "insight" && <><path {...common} d="M5 19V13M12 19V8M19 19V4" /><path {...common} d="M3 21h18" /></>}
      {name === "clinical" && <><path {...common} d="M7 3v7a5 5 0 0 0 10 0V3M5 3h4M15 3h4" /><circle {...common} cx="18.5" cy="16.5" r="2.5" /><path {...common} d="M12 15v2a3 3 0 0 0 3 3h1" /></>}
      {name === "research" && <><path {...common} d="M5 19V14M10 19V10M15 19V6M20 19V3" /><path {...common} d="M3 21h19" /></>}
      {name === "conversation" && <><path {...common} d="M4 5h12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H10l-4 3v-3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" /><path {...common} d="M6 10h1M10 10h1M14 10h1" /></>}
      {name === "context" && <><circle {...common} cx="12" cy="5" r="2" /><circle {...common} cx="5" cy="18" r="2" /><circle {...common} cx="19" cy="18" r="2" /><path {...common} d="M12 7v5M7 17l5-5 5 5" /></>}
      {name === "prepare" && <><rect {...common} x="5" y="3" width="14" height="18" rx="1" /><path {...common} d="M8 8h8M8 12h8M8 16h5" /></>}
      {name === "compute" && <><rect {...common} x="6" y="6" width="12" height="12" rx="1" /><path {...common} d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></>}
      {name === "systems" && <><path {...common} d="m12 3 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" /></>}
    </svg>
  );
}
