import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/content/en/site";

export function HeroSection() {
  return (
    <section className="aurora-bg relative overflow-hidden">
      <div className="technical-grid absolute inset-0" aria-hidden="true" />
      <Container className="relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[1.02fr_0.98fr]">
        <FadeIn>
          <Badge>{site.hero.eyebrow}</Badge>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{site.hero.subheadline}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">{site.hero.primaryCta}</Button>
            <Button href="/services" variant="secondary">
              {site.hero.secondaryCta}
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {site.hero.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn className="relative">
          <div className="glass-border relative overflow-hidden rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">System readiness</p>
                <p className="mt-1 text-sm text-muted">AI workflow review map</p>
              </div>
              <span className="rounded-full bg-success/15 px-3 py-1 font-mono text-xs text-emerald-200">Guarded</span>
            </div>
            <div className="grid gap-3">
              {["Public surface", "Form intake", "Webhook path", "AI processing", "CRM update", "Recovery logic"].map((item, index) => (
                <div key={item} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div>
                    <p className="text-sm font-medium text-white">{item}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      layer {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-accent via-primary to-success" style={{ width: `${72 + index * 4}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
