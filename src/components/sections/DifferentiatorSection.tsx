import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/en/site";

export function DifferentiatorSection() {
  return (
    <section className="bg-surface/45 py-24">
      <Container>
        <SectionHeading eyebrow="Why Alkyora" title={site.comparison.headline} copy={site.comparison.copy} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Comparison title="Generic AI Agency" items={site.comparison.generic} muted />
          <Comparison title="Alkyora" items={site.comparison.alkyora} />
        </div>
      </Container>
    </section>
  );
}

function Comparison({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <Card className={muted ? "opacity-80" : "border-cyan-300/30 bg-cyan-300/5"}>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-slate-300">
            <span className={muted ? "h-2 w-2 rounded-full bg-slate-500" : "h-2 w-2 rounded-full bg-success"} />
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}
