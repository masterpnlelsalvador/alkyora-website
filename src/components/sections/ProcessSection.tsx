import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/en/site";

export function ProcessSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="Process" title="A clear process from idea to secure execution." />
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {site.process.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <span className="font-mono text-sm text-accent">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
