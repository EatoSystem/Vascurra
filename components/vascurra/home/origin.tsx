import Image from "next/image";

export function Origin() {
  return (
    <section
      id="origin"
      aria-labelledby="origin-heading"
      className="overflow-hidden bg-white px-5 py-[clamp(5.5rem,9vw,8.5rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[92rem] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
        <div className="max-w-[43rem] lg:pl-4">
          <p className="text-[1rem] font-semibold tracking-[0.28em] text-[#0aa3bc] uppercase md:text-[1.125rem]">
            It began with Dad
          </p>

          <h2
            id="origin-heading"
            className="mt-7 text-[clamp(3rem,5.7vw,5.4rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-[#062b4b]"
          >
            <span className="block">A father.</span>
            <span className="block">A doctor.</span>
            <span className="block bg-[linear-gradient(90deg,#0aa3bc_0%,#2ecfc4_48%,#49c768_100%)] bg-clip-text text-transparent forced-colors:text-[#062b4b]">
              A reason to fight.
            </span>
          </h2>

          <div className="mt-10 lg:hidden">
            <Image
              src="/vascurra/v2/section-02-origin-illustration.webp"
              alt=""
              width={760}
              height={735}
              sizes="(max-width: 1023px) 94vw, 1px"
              className="mx-auto h-auto w-full max-w-[42rem] object-contain"
            />
          </div>

          <p className="mt-10 max-w-[39rem] text-[clamp(1.18rem,1.55vw,1.5rem)] leading-[1.45] font-semibold text-[#062b4b]">
            Vascurra is being developed with and for my father, a retired GP living with early vascular dementia.
          </p>

          <div className="mt-7 max-w-[39rem] space-y-5 text-[1rem] leading-[1.72] text-[#244a64] md:text-[1.125rem]">
            <p>
              He spent his working life helping other people understand and manage their health. Today, he is experiencing healthcare from the other side.
            </p>
            <p>
              We are building Vascurra together — first to support him in daily life, and then to make everything we learn capable of helping other people, families, clinicians and researchers facing vascular dementia.
            </p>
          </div>

          <p className="mt-9 max-w-[40rem] text-[clamp(1.18rem,1.55vw,1.5rem)] leading-[1.42] font-semibold text-[#062b4b]">
            He is not simply the first person Vascurra is being built for. He is helping us build it.
          </p>
        </div>

        <div className="relative hidden min-h-[42rem] items-center justify-end lg:flex">
          <div className="absolute inset-y-0 right-[-3vw] flex w-[112%] items-center justify-center">
            <Image
              src="/vascurra/v2/section-02-origin-illustration.webp"
              alt=""
              width={760}
              height={735}
              sizes="(min-width: 1024px) min(55vw, 820px), 1px"
              className="h-auto w-full max-w-[52rem] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
