import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { principles } from "@/content/home";

export function Principles() {
  return (
    <Section labelledBy="principles-heading" className="bg-canvas-deep/50">
      <h2
        id="principles-heading"
        className="max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl"
      >
        {principles.heading}
      </h2>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {principles.items.map((item) => (
          <li key={item.id}>
            <Card>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-navy-700">{item.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
