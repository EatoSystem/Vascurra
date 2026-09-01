import type { ReactNode } from "react";

type Variant = "phone" | "compact" | "tablet" | "laptop" | "desktop";

const shells: Record<Variant, string> = {
  phone:
    "w-[250px] rounded-[2.4rem] border border-hairline-strong bg-[#16343d] p-[10px] shadow-[0_32px_70px_-30px_rgba(8,61,74,0.5)] lg:w-[268px]",
  compact:
    "w-[176px] rounded-[1.8rem] border border-hairline-strong bg-[#16343d] p-[7px] shadow-[0_22px_48px_-26px_rgba(8,61,74,0.38)] sm:w-[188px]",
  tablet:
    "w-[min(100%,360px)] rounded-[1.5rem] border border-hairline-strong bg-[#16343d] p-[11px] shadow-[0_32px_70px_-30px_rgba(8,61,74,0.46)] lg:w-[390px]",
  laptop:
    "w-[min(100%,680px)] rounded-[1.05rem] border border-hairline-strong bg-[#122c34] p-[12px] pb-0 shadow-[0_36px_76px_-32px_rgba(8,61,74,0.5)]",
  desktop:
    "w-full max-w-[520px] rounded-[0.85rem] border border-hairline-strong bg-[#122c34] p-[10px] shadow-[0_36px_80px_-34px_rgba(8,61,74,0.52)]",
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
  const screenRadius =
    variant === "phone"
            ? "min-h-[540px] rounded-[1.85rem]"
      : variant === "compact"
        ? "min-h-[320px] rounded-[1.35rem]"
        : variant === "tablet"
          ? "min-h-[340px] rounded-[1.05rem]"
          : variant === "desktop"
            ? "min-h-[300px] rounded-[0.5rem]"
            : "min-h-[400px] rounded-[0.55rem]";

  return (
    <figure className={`relative ${className}`} aria-hidden={decorative || undefined}>
      <div className={shells[variant]}>
        {variant === "desktop" ? (
          <div aria-hidden="true" className="mb-2 flex items-center gap-1.5 px-1">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
          </div>
        ) : null}
        {variant === "phone" || variant === "compact" ? (
          <div
            aria-hidden="true"
            className="mx-auto mb-2.5 h-4 w-24 rounded-full bg-black/35"
          />
        ) : null}
        <div className={`overflow-hidden bg-white ${screenRadius}`}>{children}</div>
        {variant === "laptop" ? (
          <div
            aria-hidden="true"
            className="mx-auto mt-2 h-3.5 w-[114%] -translate-x-[6%] rounded-b-[1.1rem] bg-[#0c242b]"
          />
        ) : null}
      </div>
      {label && !decorative ? (
        <figcaption className="sr-only">{label}</figcaption>
      ) : null}
    </figure>
  );
}
