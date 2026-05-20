import { FinalCTA } from "@/components/sections/FinalCTA";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Service } from "@/content/en/services";

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <>
      <section className="aurora-bg relative overflow-hidden py-20">
        <div className="technical-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">{service.detail?.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.detail?.intro ?? service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">{service.cta}</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading title={service.detail?.headline ?? service.description} copy={service.description} />
            <div className="grid gap-4">
              {service.detail?.outcomes.map((outcome) => (
                <Card key={outcome}>
                  <p className="text-slate-200">{outcome}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            <Card>
              <h2 className="text-xl font-semibold text-white">Best for</h2>
              <p className="mt-4 leading-7 text-muted">{service.bestFor}</p>
            </Card>
            <Card>
              <h2 className="text-xl font-semibold text-white">Deliverables</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.deliverables?.map((item) => (
                  <li key={item} className="text-sm text-slate-300">
                    <span className="mr-2 text-success">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
