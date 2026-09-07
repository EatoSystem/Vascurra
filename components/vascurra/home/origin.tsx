import Image from "next/image";
import { sectionIds } from "@/content/site";

export function Origin() {
  return (
    <section
      id={sectionIds.why}
      aria-labelledby="origin-heading"
      className="overflow-hidden bg-white px-5 py-[clamp(5rem,10vw,9rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="max-w-[38rem]">
          <p className="text-[1rem] font-semibold tracking-[0.24em] text-ink-cyan uppercase md:text-[1.125rem]">
            It began with Dad
          </p>

          <h2
            id="origin-heading"
            className="mt-6 text-[clamp(2.75rem,7vw,5.35rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-[var(--vascurra-ink)]"
          >
            <span className="block">A father.</span>
            <span className="block">A doctor.</span>
            <span className="text-mark block">A reason to fight.</span>
          </h2>

          <div className="order-2 mt-8 lg:hidden">
            <Image
              src="/vascurra/v2/section-02-origin-illustration.webp"
              alt=""
              width={880}
              height={850}
              sizes="(max-width: 1023px) 100vw, 1px"
              className="mx-auto h-auto w-full max-w-[42rem] object-contain"
            />
          </div>

          <p className="mt-8 max-w-[36rem] text-[1.25rem] leading-[1.45] font-semibold text-[var(--vascurra-ink)] md:text-[1.5rem]">
            Vascurra is being developed with and for my father, a retired GP living with early vascular dementia.
          </p>

          <div className="mt-6 max-w-[36rem] space-y-4 text-[1rem] leading-[1.7] text-ink-body md:text-[1.125rem]">
            <p>
              He spent his working life helping other people understand and manage their health. Today, he is experiencing healthcare from the other side.
            </p>
            <p>
              We are building Vascurra together — first to support him in daily life, and then to make everything we learn capable of helping other people, families, clinicians and researchers facing vascular dementia.
            </p>
          </div>

          <p className="mt-8 max-w-[38rem] text-[1.25rem] leading-[1.4] font-semibold text-[var(--vascurra-ink)] md:text-[1.5rem]">
            He is not simply the first person Vascurra is being built for. He is helping us build it.
          </p>
        </div>

        <div className="hidden justify-end lg:flex">
          <Image
            src="/vascurra/v2/section-02-origin-illustration.webp"
            alt=""
            width={880}
            height={850}
            sizes="(min-width: 1024px) min(53vw, 700px), 1px"
            className="h-auto w-full max-w-[43rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
