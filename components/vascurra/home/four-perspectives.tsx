"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
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

const slots = {
  people: "s06-people",
  families: "s06-family",
  clinicians: "s06-clinician",
  research: "s06-research",
} as const;

type PerspectiveId = keyof typeof screens;

export function FourPerspectives() {
  const [active, setActive] = useState<PerspectiveId>("people");
  const ActiveScreen = screens[active];

  return (
    <HomeMidShell labelledBy="perspectives-heading">
      <Reveal>
        <h2 id="perspectives-heading" className="home-mid-heading max-w-4xl text-[var(--vascurra-deep-teal)]">
          <span className="block">{perspectives.heading}</span>
          <span className="text-mark">{perspectives.headingLine}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[1.25rem] leading-[1.55] text-ink-body">
          {perspectives.subheading}
        </p>
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
                className={`min-h-12 shrink-0 rounded-full px-4 text-base font-semibold ${
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
                <div data-asset-slot={slots[item.id as PerspectiveId]}>
                  <DeviceFrame
                    variant={devices[item.id as PerspectiveId]}
                    size="stage"
                    label={item.name}
                    className="mx-auto"
                  >
                    <ActiveScreen />
                  </DeviceFrame>
                </div>
              ) : null}
              <h3 className="mt-8 text-[1.65rem] font-semibold text-[var(--vascurra-deep-teal)]">
                {item.headline}
              </h3>
              <p className="home-mid-body mt-3 text-ink-body">{item.body}</p>
            </div>
          );
        })}
      </div>

      {/* SECTION 06 ART SLOT — connected product ecosystem */}
      <div className="relative mx-auto mt-16 hidden min-h-[36rem] items-end justify-center pb-10 lg:flex">
        <div data-asset-slot="s06-people" className="relative z-30 shrink-0">
          <DeviceFrame variant="phone" size="stage" label="People" decorative>
            <PeopleScreen />
          </DeviceFrame>
        </div>
        <div data-asset-slot="s06-family" className="relative z-20 -ml-4 mb-8 shrink-0">
          <DeviceFrame variant="tablet" size="stage" label="Families" decorative>
            <FamilyScreen />
          </DeviceFrame>
        </div>
        <div data-asset-slot="s06-clinician" className="relative z-10 min-w-[38rem] flex-1">
          <DeviceFrame variant="laptop" size="stage" label="Clinicians" decorative>
            <ClinicianScreen />
          </DeviceFrame>
          <div
            data-asset-slot="s06-research"
            className="absolute -right-4 -bottom-6 z-20 w-[22rem] xl:-right-8 xl:w-[26rem]"
          >
            <DeviceFrame variant="desktop" size="stage" label="Research" decorative>
              <ResearchScreen />
            </DeviceFrame>
          </div>
        </div>
      </div>

      <ul className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
        {perspectives.items.map((item, i) => (
          <li
            key={item.id}
            id={item.id}
            className={i === 2 ? "lg:col-span-7" : i === 3 ? "lg:col-span-5" : "lg:col-span-6"}
          >
            <p className="text-[0.9375rem] font-semibold tracking-[0.16em] text-ink-teal uppercase">
              {item.name}
            </p>
            <h3 className="mt-2 text-[clamp(1.5rem,2.1vw,2rem)] font-semibold text-[var(--vascurra-deep-teal)]">
              {item.headline}
            </h3>
            <p className="home-mid-body mt-4 max-w-xl text-ink-body">{item.body}</p>
            <p className="mt-3 text-[1.0625rem] text-ink-teal">{item.summary}</p>
          </li>
        ))}
      </ul>
      <p className="home-mid-body mt-12 max-w-2xl text-ink-muted">{perspectives.note}</p>
    </HomeMidShell>
  );
}
