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

const stageShells: Record<Variant, string> = {
  phone:
    "w-[min(100%,320px)] rounded-[2.6rem] border border-hairline-strong bg-[#16343d] p-[11px] shadow-[0_36px_80px_-28px_rgba(8,61,74,0.48)] lg:w-[340px]",
  compact:
    "w-[176px] rounded-[1.8rem] border border-hairline-strong bg-[#16343d] p-[7px] sm:w-[188px]",
  tablet:
    "w-[min(100%,460px)] rounded-[1.6rem] border border-hairline-strong bg-[#16343d] p-[12px] shadow-[0_36px_80px_-28px_rgba(8,61,74,0.46)] lg:w-[500px]",
  laptop:
    "w-full max-w-[860px] rounded-[1.15rem] border border-hairline-strong bg-[#122c34] p-[14px] pb-0 shadow-[0_40px_88px_-30px_rgba(8,61,74,0.5)]",
  desktop:
    "w-full max-w-[680px] rounded-[0.9rem] border border-hairline-strong bg-[#122c34] p-[12px] shadow-[0_40px_88px_-30px_rgba(8,61,74,0.5)]",
};

export function DeviceFrame({
  variant,
  label,
  children,
  className = "",
  decorative = false,
  size = "default",
}: {
  variant: Variant;
  label?: string;
  children: ReactNode;
  className?: string;
  decorative?: boolean;
  size?: "default" | "stage";
}) {
  const shell = size === "stage" ? stageShells[variant] : shells[variant];
  const screenRadius =
    variant === "phone"
      ? size === "stage"
        ? "min-h-[580px] rounded-[1.95rem]"
        : "min-h-[540px] rounded-[1.85rem]"
      : variant === "compact"
        ? "min-h-[320px] rounded-[1.35rem]"
        : variant === "tablet"
          ? size === "stage"
            ? "min-h-[380px] rounded-[1.15rem]"
            : "min-h-[340px] rounded-[1.05rem]"
          : variant === "desktop"
            ? size === "stage"
              ? "min-h-[340px] rounded-[0.55rem]"
              : "min-h-[300px] rounded-[0.5rem]"
            : size === "stage"
              ? "min-h-[460px] rounded-[0.65rem]"
              : "min-h-[400px] rounded-[0.55rem]";

  return (
    <figure className={`relative ${className}`} aria-hidden={decorative || undefined}>
      <div className={shell}>
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
