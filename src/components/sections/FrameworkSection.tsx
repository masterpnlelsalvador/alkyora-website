import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/en/site";

export function FrameworkSection() {
  return (
    <section id="framework" className="bg-surface/45 py-24">
      <Container>
        <SectionHeading
          eyebrow="Framework"
          title="The Alkyora AI System Review Framework"
          copy="A practical lens for reviewing AI-built websites, automations, workflows, and connected business systems."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.framework.map((item, index) => (
            <Card key={item.title}>
              <span className="font-mono text-xs text-cyan-200">AREA {String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
