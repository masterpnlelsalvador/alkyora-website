import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "glass-border rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_28px_90px_rgba(34,211,238,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
