import type { ReactNode } from "react";

type Variant = "phone" | "compact" | "tablet" | "laptop";

const shells: Record<Variant, string> = {
  phone:
    "w-[220px] rounded-[2.2rem] border border-hairline-strong bg-[#1a3d48] p-[8px] shadow-[0_30px_60px_-28px_rgba(8,61,74,0.45)] sm:w-[240px]",
  compact:
    "w-[168px] rounded-[1.8rem] border border-hairline-strong bg-[#1a3d48] p-[7px] shadow-[0_24px_50px_-24px_rgba(8,61,74,0.4)] sm:w-[176px]",
  tablet:
    "w-[280px] rounded-[1.6rem] border border-hairline-strong bg-[#1a3d48] p-[10px] shadow-[0_30px_60px_-28px_rgba(8,61,74,0.4)] sm:w-[320px]",
  laptop:
    "w-[min(100%,520px)] rounded-[1.1rem] border border-hairline-strong bg-[#16343d] p-[12px] pb-0 shadow-[0_34px_70px_-30px_rgba(8,61,74,0.5)]",
};

export function DeviceFrame({
  variant,
  label,
  children,
  className = "",
  decorative = false,
}: {
  variant: Variant;
  label?: string;
  children: ReactNode;
  className?: string;
  decorative?: boolean;
}) {
  return (
    <figure className={`relative ${className}`} aria-hidden={decorative || undefined}>
      <div className={shells[variant]}>
        {variant === "phone" || variant === "compact" ? (
          <div
            aria-hidden="true"
            className="mx-auto mb-2 h-4 w-20 rounded-full bg-black/35"
          />
        ) : null}
        <div
          className={`overflow-hidden bg-white ${
            variant === "phone"
              ? "min-h-[390px] rounded-[1.7rem]"
              : variant === "compact"
                ? "min-h-[300px] rounded-[1.4rem]"
              : variant === "tablet"
                ? "min-h-[360px] rounded-[1.1rem]"
                : "min-h-[280px] rounded-[0.7rem]"
          }`}
        >
          {children}
        </div>
        {variant === "laptop" ? (
          <div
            aria-hidden="true"
            className="mx-auto mt-2 h-3 w-[112%] -translate-x-[5%] rounded-b-[1rem] bg-[#0e2a32]"
          />
        ) : null}
      </div>
      {label && !decorative ? (
        <figcaption className="sr-only">{label}</figcaption>
      ) : null}
    </figure>
  );
}
