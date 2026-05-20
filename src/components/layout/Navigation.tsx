import Link from "next/link";
import { navigation } from "@/content/en/navigation";

export function Navigation() {
  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
      {navigation.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
