import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { perspectives } from "@/content/home";

export function Perspectives() {
  return (
    <Section labelledBy="perspectives-heading" className="bg-canvas-deep/50">
      <h2
        id="perspectives-heading"
        className="max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl"
      >
        {perspectives.heading}
      </h2>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-7">
        {perspectives.items.map((item) => (
          <li key={item.id}>
            <Card>
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-lg font-medium text-teal-700">
                {item.summary}
              </p>
              <p className="mt-4 text-navy-700">{item.body}</p>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mt-10 max-w-3xl rounded-2xl border border-hairline bg-surface/60 p-6 text-base text-navy-600">
        {perspectives.note}
      </p>
    </Section>
  );
}
