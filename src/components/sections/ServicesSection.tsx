import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offers, serviceCards } from "@/content/en/services";

export function ServicesSection() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services" title="Build, review, and harden AI-powered business systems." />
          <Button href="/services" variant="secondary">
            View all services
          </Button>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{service.copy}</p>
            </Card>
          ))}
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.slug} className="flex h-full flex-col">
              <h3 className="text-2xl font-semibold text-white">{offer.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{offer.description}</p>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-400">Deliverables</p>
                <ul className="mt-4 space-y-2">
                  {offer.deliverables?.slice(0, 4).map((item) => (
                    <li key={item} className="text-sm text-slate-300">
                      <span className="mr-2 text-success">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href={offer.href} variant="secondary" className="mt-8 w-full">
                {offer.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
