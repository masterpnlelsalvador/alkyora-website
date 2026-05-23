import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Navigation } from "@/components/layout/Navigation";
import { navigation } from "@/content/en/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Alkyora home">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/25 bg-white/6 shadow-[0_0_30px_rgba(124,58,237,0.25)]">
            <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-accent to-primary" />
          </span>
          <span className="text-sm font-semibold tracking-[0.28em] text-white">ALKYORA</span>
        </Link>
        <Navigation />
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://es.alkyora.com"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
          >
            ES
          </a>
          <Button href="/contact" className="min-h-10 px-4">
            Book a Review
          </Button>
          <Button href="/free-mini-review" variant="secondary" className="min-h-10 px-4">
            Free Mini Review
          </Button>
        </div>
        <details className="group relative md:hidden">
          <summary className="list-none rounded-lg border border-white/15 px-3 py-2 text-sm text-white marker:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-56 rounded-lg border border-white/15 bg-surface p-3 shadow-2xl">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-md bg-white px-3 py-2 text-sm font-semibold text-background">
              Book a Review
            </Link>
            <Link href="/free-mini-review" className="mt-2 block rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white">
              Get a Free Mini Review
            </Link>
            <a
              href="https://es.alkyora.com"
              className="mt-2 block rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 hover:bg-white/8 hover:text-white"
            >
              ES
            </a>
          </div>
        </details>
      </Container>
    </header>
  );
}
