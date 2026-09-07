import Image from "next/image";

export function PatientZero() {
  return (
    <section
      id="patient-zero"
      aria-labelledby="patient-zero-heading"
      className="overflow-hidden bg-white px-5 py-[clamp(5rem,10vw,9rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        <div className="max-w-[39rem]">
          <p className="text-[1rem] font-semibold tracking-[0.24em] text-ink-cyan uppercase md:text-[1.125rem]">
            Where Vascurra begins
          </p>

          <h2
            id="patient-zero-heading"
            className="mt-6 text-[clamp(2.75rem,7vw,5.2rem)] leading-[0.99] font-semibold tracking-[-0.045em] text-[var(--vascurra-ink)]"
          >
            <span className="block">One person.</span>
            <span className="text-mark block">One lived experience.</span>
            <span className="text-mark block">A system that learns.</span>
          </h2>

          <div className="mt-8 lg:hidden">
            <Image
              src="/vascurra/v2/section-04-patient-zero-illustration.webp"
              alt=""
              width={895}
              height={860}
              sizes="(max-width: 1023px) 100vw, 1px"
              className="mx-auto h-auto w-full max-w-[42rem] object-contain"
            />
          </div>

          <p className="mt-8 max-w-[36rem] text-[1.25rem] leading-[1.45] font-semibold text-[var(--vascurra-ink)] md:text-[1.5rem]">
            Patient 0 is the first person Vascurra is being developed with and for.
          </p>

          <div className="mt-6 max-w-[37rem] space-y-4 text-[1rem] leading-[1.7] text-ink-body md:text-[1.125rem]">
            <p>
              Daily life becomes the development environment: what helps, what creates friction, what changes, what matters, what should be remembered, and what information becomes useful to family or clinicians.
            </p>
            <p>
              The objective is not to measure everything. It is to discover what genuinely helps.
            </p>
          </div>

          <p className="mt-8 text-[1.25rem] leading-[1.4] font-semibold text-ink-teal md:text-[1.5rem]">
            Patient 0 · Doctor 0
          </p>
          <p className="mt-3 max-w-[38rem] text-[1rem] leading-[1.7] text-ink-body md:text-[1.125rem]">
            Dad brings another perspective: not only “Would this help me now?” but also “Would this have helped me when I was caring for a patient?”
          </p>
        </div>

        <div className="hidden justify-end lg:flex">
          <Image
            src="/vascurra/v2/section-04-patient-zero-illustration.webp"
            alt=""
            width={895}
            height={860}
            sizes="(min-width: 1024px) min(54vw, 710px), 1px"
            className="h-auto w-full max-w-[44rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
