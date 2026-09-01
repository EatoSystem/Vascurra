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
  clinicians: "laptop",
  research: "desktop",
} as const;

type PerspectiveId = keyof typeof screens;

export function FourPerspectives() {
  const [active, setActive] = useState<PerspectiveId>("people");
  const ActiveScreen = screens[active];

  return (
    <SectionShell labelledBy="perspectives-heading">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="perspectives-heading" className="type-display text-[var(--vascurra-deep-teal)]">
            <span className="block">{perspectives.heading}</span>
            <span className="text-mark">{perspectives.headingLine}</span>
          </h2>
          <p className="type-lead mt-6 text-ink-body">{perspectives.subheading}</p>
        </div>
      </Reveal>

      <div className="mt-12 lg:hidden">
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
                <DeviceFrame
                  variant={devices[item.id as PerspectiveId]}
                  label={item.name}
                  className="mx-auto"
                >
                  <ActiveScreen />
                </DeviceFrame>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto mt-16 hidden max-w-[80rem] items-end justify-center pb-16 lg:flex">
        <div className="relative z-30 shrink-0">
          <DeviceFrame variant="phone" label="People" decorative>
            <PeopleScreen />
          </DeviceFrame>
        </div>
        <div className="relative z-20 -ml-6 mb-10 shrink-0">
          <DeviceFrame variant="tablet" label="Families" decorative>
            <FamilyScreen />
          </DeviceFrame>
        </div>
        <div className="relative z-10 min-w-[34rem] flex-1">
          <DeviceFrame variant="laptop" label="Clinicians" decorative>
            <ClinicianScreen />
          </DeviceFrame>
          <div className="absolute -right-6 -bottom-4 z-20 w-[20.5rem] xl:-right-10 xl:w-[22rem]">
            <DeviceFrame variant="desktop" label="Research" decorative>
              <ResearchScreen />
            </DeviceFrame>
          </div>
        </div>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {perspectives.items.map((item) => (
          <li key={item.id} id={item.id} className="text-center">
            <h3 className="text-lg font-semibold text-navy">{item.name}</h3>
            <p className="mt-2 text-base text-ink-teal">{item.summary}</p>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-muted">
        {perspectives.note}
      </p>
    </SectionShell>
  );
}
