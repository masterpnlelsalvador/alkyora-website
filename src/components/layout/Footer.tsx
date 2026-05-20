import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerNavigation } from "@/content/en/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040714]">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/25 bg-white/6">
                <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-accent to-primary" />
              </span>
              <span className="text-sm font-semibold tracking-[0.28em] text-white">ALKYORA</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              AI Systems Studio with Security Built In. Build, audit, and harden AI-powered websites, automations, and workflows.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-4">
            {Object.entries(footerNavigation).map(([group, links]) => (
              <div key={group}>
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">{group}</h2>
                <div className="mt-4 space-y-3">
                  {links.map((link) => (
                    <Link key={link.label} href={link.href} className="block text-sm text-slate-300 transition hover:text-white">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Alkyora. Practical security-aware implementation guidance, not a replacement for formal compliance or penetration testing.
        </div>
      </Container>
    </footer>
  );
}
