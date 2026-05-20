import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" &&
          "bg-white text-background shadow-[0_0_32px_rgba(34,211,238,0.18)] hover:bg-cyan-50",
        variant === "secondary" &&
          "border border-white/15 bg-white/6 text-white hover:border-accent/55 hover:bg-white/10",
        variant === "ghost" && "text-muted hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
