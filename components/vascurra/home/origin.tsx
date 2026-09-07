import Image from "next/image";

export function Origin() {
  return (
    <section
      id="why-vascurra"
      aria-labelledby="origin-heading"
      className="overflow-hidden bg-white px-5 py-[clamp(6.5rem,12vw,11rem)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[80rem] items-center gap-[clamp(3rem,7vw,7rem)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="max-w-[38rem]">
          <p className="text-[1rem] font-semibold tracking-[0.24em] text-[#0aa3bc] uppercase md:text-[1.125rem]">
            It began with Dad
          </p>

          <h2
            id="origin-heading"
            className="mt-7 text-[clamp(3rem,6.1vw,5.45rem)] leading-[0.98] font-semibold tracking-[-0.047em] text-[#0b2b4a]"
          >
            <span className="block">A father.</span>
            <span className="block">A doctor.</span>
            <span className="text-mark block">A reason to fight.</span>
          </h2>

          <div className="mt-9 lg:hidden">
            <Image
              src="/vascurra/v2/section-02-origin-illustration.webp"
              alt=""
              width={880}
              height={850}
              sizes="(max-width: 1023px) 92vw, 1px"
              className="mx-auto h-auto w-full max-w-[43rem] object-contain"
            />
          </div>

          <p className="mt-9 max-w-[35rem] text-[1.25rem] leading-[1.45] font-semibold text-[#0b2b4a] md:text-[1.5rem]">
            Vascurra is being developed with and for my father, a retired GP living with early vascular dementia.
          </p>

          <div className="mt-6 max-w-[35rem] space-y-5 text-[1rem] leading-[1.75] text-[#1c3f60] md:text-[1.125rem]">
            <p>
              He spent his working life helping other people understand and manage their health. Today, he is experiencing healthcare from the other side.
            </p>
            <p>
              We are building Vascurra together — first to support him in daily life, and then to make everything we learn capable of helping other people, families, clinicians and researchers facing vascular dementia.
            </p>
          </div>

          <p className="mt-9 max-w-[36rem] text-[1.25rem] leading-[1.45] font-semibold text-[#0b2b4a] md:text-[1.5rem]">
            He is not simply the first person Vascurra is being built for. He is helping us build it.
          </p>
        </div>

        <div className="hidden items-center justify-end lg:flex">
          <Image
            src="/vascurra/v2/section-02-origin-illustration.webp"
            alt=""
            width={880}
            height={850}
            sizes="(min-width: 1024px) min(54vw, 760px), 1px"
            className="h-auto w-full max-w-[47rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
