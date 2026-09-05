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
  | "journey"
  | "health"
  | "history"
  | "movement"
  | "sleep"
  | "routine"
  | "confidence"
  | "family"
  | "daily"
  | "judgement"
  | "evidence";

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
      {name === "privacy" || name === "trust" ? (
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
      {name === "person" || name === "judgement" ? (
        <>
          <circle cx="18" cy="16" r="5" stroke={stroke} strokeWidth="1.7" />
          <circle cx="32" cy="18" r="4.2" stroke={stroke} strokeWidth="1.7" />
          <path d="M8 36 C10 28, 14 26, 18 26 C22 26, 26 28, 28 34" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
          <path d="M26 36 C28 30, 30 28, 32 28 C36 28, 40 30, 42 36" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "document" || name === "evidence" ? (
        <>
          <path d="M16 8 H28 L36 16 V40 H16 Z" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M28 8 V16 H36 M20 24 H32 M20 30 H28" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M20 36 H26" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
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
      {name === "health" ? (
        <>
          <circle cx="24" cy="24" r="12" stroke={stroke} strokeWidth="1.7" />
          <path d="M24 16 V32 M16 24 H32" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "history" ? (
        <>
          <circle cx="24" cy="24" r="12" stroke={stroke} strokeWidth="1.7" />
          <path d="M24 14 V24 L31 28" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : null}
      {name === "movement" ? (
        <path
          d="M10 32 C16 18, 22 18, 24 26 S32 34, 38 16"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      ) : null}
      {name === "sleep" ? (
        <path
          d="M30 12 C22 12, 16 18, 16 26 C16 34, 22 38, 30 36 C24 36, 20 32, 20 26 C20 20, 24 14, 30 12 Z"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "routine" ? (
        <>
          <rect x="12" y="12" width="24" height="24" rx="4" stroke={stroke} strokeWidth="1.7" />
          <path d="M12 20 H36 M20 12 V20 M28 12 V20" stroke={stroke} strokeWidth="1.7" />
        </>
      ) : null}
      {name === "confidence" ? (
        <path
          d="M24 10 L28 20 H38 L30 26 L33 36 L24 30 L15 36 L18 26 L10 20 H20 Z"
          stroke={stroke}
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      ) : null}
      {name === "family" ? (
        <>
          <circle cx="16" cy="16" r="4" stroke={stroke} strokeWidth="1.7" />
          <circle cx="32" cy="16" r="4" stroke={stroke} strokeWidth="1.7" />
          <circle cx="24" cy="22" r="4" stroke={stroke} strokeWidth="1.7" />
          <path d="M8 36 C10 28, 14 26, 16 26 C20 26, 22 30, 24 30 C26 30, 28 26, 32 26 C36 26, 40 30, 40 36" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
      {name === "daily" ? (
        <>
          <rect x="10" y="16" width="28" height="22" rx="3" stroke={stroke} strokeWidth="1.7" />
          <path d="M16 16 V12 M32 16 V12 M10 24 H38" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </>
      ) : null}
    </svg>
  );
}
