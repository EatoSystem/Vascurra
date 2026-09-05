import { Reveal } from "@/components/motion/Reveal";
import { SectionShell } from "@/components/vascurra/ui/section-shell";
import { EditorialHeading } from "@/components/vascurra/ui/editorial-heading";
import { DeviceFrame } from "@/components/vascurra/ui/device-frame";
import { ClinicianScreen } from "@/components/vascurra/ui/product-screens";
import { clinicians } from "@/content/home";
import { sectionIds } from "@/content/site";

export function Clinicians() {
  return (
    <SectionShell id={sectionIds.clinicians} labelledBy="clinicians-heading">
      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <Reveal>
            <EditorialHeading id="clinicians-heading" kicker="Clinical">
              {clinicians.heading}
            </EditorialHeading>
            <p className="type-lead mt-6 max-w-xl font-medium text-navy">
              {clinicians.lead}
            </p>
            <p className="mt-4 text-lg font-medium text-ink-teal">{clinicians.support}</p>
            <p className="mt-6 max-w-xl text-ink-body">{clinicians.body}</p>
          </Reveal>
        </div>
        <Reveal delay={90} className="flex justify-center lg:justify-end">
          <DeviceFrame variant="laptop" label={clinicians.heading}>
            <ClinicianScreen />
          </DeviceFrame>
        </Reveal>
      </div>
    </SectionShell>
  );
}
