import type { ReactNode } from "react";

export function EditorialHeading({
  id,
  kicker,
  children,
  className = "",
}: {
  id?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker ? <p className="type-kicker mb-5">{kicker}</p> : null}
      <h2 id={id} className="type-section max-w-4xl">
        {children}
      </h2>
    </div>
  );
}
