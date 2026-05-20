import { Container } from "@/components/ui/Container";

const items = ["Security-aware builds", "Clear data flow mapping", "Launch-ready documentation", "Practical guardrails"];

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-surface/70">
      <Container className="grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">
            {item}
          </div>
        ))}
      </Container>
    </section>
  );
}
