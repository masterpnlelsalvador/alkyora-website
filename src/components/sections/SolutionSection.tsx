import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/en/site";

export function SolutionSection() {
  return (
    <section className="bg-surface/50 py-24">
      <Container>
        <SectionHeading eyebrow="Alkyora method" title="We turn AI-built systems into business-ready infrastructure." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {site.pillars.map((pillar, index) => (
            <Card key={pillar.title}>
              <span className="font-mono text-sm text-accent">0{index + 1}</span>
              <h3 className="mt-5 text-2xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 leading-7 text-muted">{pillar.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
