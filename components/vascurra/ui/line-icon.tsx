type IconName =
  | "monitor"
  | "inform"
  | "support"
  | "thrive"
  | "privacy"
  | "lock"
  | "person"
  | "document"
  | "trust"
  | "insight"
  | "enable"
  | "journey";

export function LineIcon({
  name,
  className = "size-8",
}: {
  name: IconName;
  className?: string;
}) {
  const stroke = "currentColor";
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {name === "monitor" ? (
        <>
          <circle cx="22" cy="22" r="10" stroke={stroke} strokeWidth="1.7" />
          <path d="M29 29 L36 36" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "inform" ? (
        <path
          d="M8 24 C12 12, 16 36, 20 24 S28 12, 32 24 S40 36, 44 24"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : null}
      {name === "support" ? (
        <>
          <circle cx="16" cy="20" r="4" stroke={stroke} strokeWidth="1.7" />
          <circle cx="32" cy="20" r="4" stroke={stroke} strokeWidth="1.7" />
          <circle cx="24" cy="32" r="4" stroke={stroke} strokeWidth="1.7" />
          <path d="M19.5 22.5 L21.5 29 M28.5 22.5 L26.5 29" stroke={stroke} strokeWidth="1.7" />
        </>
      ) : null}
      {name === "thrive" ? (
        <path
          d="M24 38 C12 28, 10 18, 18 14 C22 12, 24 16, 24 16 C24 16, 26 12, 30 14 C38 18, 36 28, 24 38 Z"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "privacy" ? (
        <>
          <path
            d="M24 8 L38 14 V24 C38 32, 32 38, 24 42 C16 38, 10 32, 10 24 V14 Z"
            stroke={stroke}
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M24 31 C16 24, 18 18, 24 20 C30 18, 32 24, 24 31 Z"
            stroke={stroke}
            strokeWidth="1.6"
          />
        </>
      ) : null}
      {name === "lock" ? (
        <>
          <rect x="12" y="22" width="24" height="16" rx="3" stroke={stroke} strokeWidth="1.7" />
          <path d="M18 22 V16 A6 6 0 0 1 30 16 V22" stroke={stroke} strokeWidth="1.7" />
          <circle cx="24" cy="30" r="1.8" fill={stroke} />
        </>
      ) : null}
      {name === "person" ? (
        <>
          <circle cx="24" cy="16" r="6" stroke={stroke} strokeWidth="1.7" />
          <path d="M10 38 C12 28, 18 26, 24 26 C30 26, 36 28, 38 38" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "document" ? (
        <>
          <path d="M16 8 H28 L36 16 V40 H16 Z" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M28 8 V16 H36 M20 24 H32 M20 30 H32" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
        </>
      ) : null}
      {name === "trust" ? (
        <path
          d="M24 10 L36 16 V26 C36 33, 30 38, 24 40 C18 38, 12 33, 12 26 V16 Z"
          stroke={stroke}
          strokeWidth="1.7"
        />
      ) : null}
      {name === "insight" ? (
        <>
          <circle cx="24" cy="22" r="8" stroke={stroke} strokeWidth="1.7" />
          <path d="M24 30 V38 M20 38 H28" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "enable" ? (
        <path
          d="M18 30 L24 14 L30 30 M20.5 24 H27.5"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "journey" ? (
        <path
          d="M10 34 C16 34, 16 14, 24 14 S32 34, 38 34"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}
