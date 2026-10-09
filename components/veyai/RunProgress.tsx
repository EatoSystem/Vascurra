"use client";
import { useFormStatus } from "react-dom";

export function RunProgress({ children, pendingLabel = "Saving…", disabled = false, className }: { children: React.ReactNode; pendingLabel?: string; disabled?: boolean; className?: string }) {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={disabled || pending} aria-disabled={disabled || pending} className={className}>{pending ? pendingLabel : children}</button>;
}
