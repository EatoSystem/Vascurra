import type { ReactNode } from "react";

type Variant = "phone" | "compact" | "tablet" | "laptop" | "desktop";

const shells: Record<Variant, string> = {
  phone:
    "w-[220px] rounded-[2.2rem] border border-hairline-strong bg-[#16343d] p-[9px] shadow-[0_28px_56px_-30px_rgba(8,61,74,0.42)] sm:w-[248px]",
  compact:
    "w-[176px] rounded-[1.8rem] border border-hairline-strong bg-[#16343d] p-[7px] shadow-[0_22px_48px_-26px_rgba(8,61,74,0.38)] sm:w-[188px]",
  tablet:
    "w-[min(100%,340px)] rounded-[1.5rem] border border-hairline-strong bg-[#16343d] p-[10px] shadow-[0_28px_56px_-30px_rgba(8,61,74,0.4)] sm:w-[360px]",
  laptop:
    "w-[min(100%,560px)] rounded-[1rem] border border-hairline-strong bg-[#122c34] p-[11px] pb-0 shadow-[0_32px_64px_-32px_rgba(8,61,74,0.48)]",
  desktop:
    "w-full rounded-[0.9rem] border border-hairline-strong bg-[#122c34] p-[10px] shadow-[0_32px_64px_-34px_rgba(8,61,74,0.48)]",
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
      ? "min-h-[420px] rounded-[1.7rem]"
      : variant === "compact"
        ? "min-h-[320px] rounded-[1.35rem]"
        : variant === "tablet"
          ? "min-h-[400px] rounded-[1.05rem]"
          : variant === "desktop"
            ? "min-h-[320px] rounded-[0.55rem]"
            : "min-h-[300px] rounded-[0.55rem]";

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
            className="mx-auto mb-2 h-4 w-20 rounded-full bg-black/35"
          />
        ) : null}
        <div className={`overflow-hidden bg-white ${screenRadius}`}>{children}</div>
        {variant === "laptop" ? (
          <div
            aria-hidden="true"
            className="mx-auto mt-2 h-3 w-[112%] -translate-x-[5%] rounded-b-[1rem] bg-[#0c242b]"
          />
        ) : null}
      </div>
      {label && !decorative ? (
        <figcaption className="sr-only">{label}</figcaption>
      ) : null}
    </figure>
  );
}
