"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import {
  PeopleScreen,
  FamilyScreen,
  ClinicianScreen,
  ResearchScreen,
} from "@/components/vascurra/ui/product-screens";
import { perspectives } from "@/content/home";

const screens = {
  people: PeopleScreen,
  families: FamilyScreen,
  clinicians: ClinicianScreen,
  research: ResearchScreen,
} as const;

const devices = {
  people: "phone",
  families: "tablet",
  clinicians: "desktop",
  research: "laptop",
} as const;

type PerspectiveId = keyof typeof screens;

export function FourPerspectives() {
  const [active, setActive] = useState<PerspectiveId>("people");
  const ActiveScreen = screens[active];

  return (
    <SectionShell labelledBy="perspectives-heading">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="perspectives-heading" className="type-section">
            <span className="block">{perspectives.heading}</span>
            <span className="text-ink-teal">{perspectives.headingLine}</span>
          </h2>
          <p className="mt-6 text-[1.125rem] leading-[1.7] text-ink-body md:text-[1.25rem]">
            {perspectives.subheading}
          </p>
        </div>
      </Reveal>

      <div className="mt-16 lg:hidden">
        <div
          role="tablist"
          aria-label={perspectives.headingLine}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {perspectives.items.map((item) => {
            const selected = item.id === active;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`perspective-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`perspective-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(item.id as PerspectiveId)}
                className={`min-h-11 shrink-0 rounded-full px-4 text-sm font-semibold ${
                  selected
                    ? "bg-deep text-on-deep"
                    : "border border-hairline text-ink-body"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {perspectives.items.map((item) => {
          const selected = item.id === active;
          return (
            <div
              key={item.id}
              role="tabpanel"
              id={`perspective-panel-${item.id}`}
              aria-labelledby={`perspective-tab-${item.id}`}
              hidden={!selected}
              className="mt-8"
            >
              {selected ? (
                <>
                  <DeviceFrame
                    variant={devices[item.id as PerspectiveId]}
                    label={item.name}
                    className="mx-auto max-w-md"
                  >
                    <ActiveScreen />
                  </DeviceFrame>
                  <p className="mx-auto mt-5 max-w-md text-center text-base text-ink-body">
                    <span className="font-semibold text-navy">{item.summary} </span>
                    {item.body}
                  </p>
                </>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="relative mt-20 hidden min-h-[42rem] xl:min-h-[46rem] lg:block">
        <div className="absolute top-0 right-0 z-10 w-[62%]">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-ink-teal uppercase">
            Clinicians
          </p>
          <DeviceFrame variant="desktop" label="Clinicians" decorative>
            <ClinicianScreen />
          </DeviceFrame>
        </div>
        <div className="absolute right-[6%] bottom-0 z-20 w-[46%]">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-ink-teal uppercase">
            Research
          </p>
          <DeviceFrame variant="laptop" label="Research" decorative>
            <ResearchScreen />
          </DeviceFrame>
        </div>
        <div className="absolute bottom-8 left-[16%] z-30 w-[32%]">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-ink-teal uppercase">
            Families
          </p>
          <DeviceFrame variant="tablet" label="Families" decorative>
            <FamilyScreen />
          </DeviceFrame>
        </div>
        <div className="absolute top-10 left-0 z-40">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-ink-teal uppercase">
            People
          </p>
          <DeviceFrame variant="phone" label="People" decorative>
            <PeopleScreen />
          </DeviceFrame>
        </div>
      </div>

      <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {perspectives.items.map((item) => (
          <li key={item.id} id={item.id}>
            <h3 className="text-lg font-semibold text-navy">{item.name}</h3>
            <p className="mt-2 text-base text-ink-body">{item.summary}</p>
            <p className="mt-2 text-base text-ink-muted">{item.body}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-base text-ink-muted">
        {perspectives.note}
      </p>
    </SectionShell>
  );
}
