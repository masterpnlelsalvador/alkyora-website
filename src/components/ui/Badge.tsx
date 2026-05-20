import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
