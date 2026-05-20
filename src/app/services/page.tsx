import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offers, serviceCards } from "@/content/en/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services - Alkyora AI Systems Studio",
  description: "Explore Alkyora services for AI system reviews, SmartWeb builds, automation workflows, and workflow guardrails.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="AI systems built, reviewed, and hardened for real business use."
          copy="Choose the right engagement for your AI-built website, automation, workflow, funnel, or connected business system."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <Card key={service.title}>
              <h2 className="text-lg font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{service.copy}</p>
            </Card>
          ))}
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <Card key={offer.slug} className="flex flex-col">
              <h2 className="text-2xl font-semibold text-white">{offer.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{offer.description}</p>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                <span className="font-semibold text-white">Best for: </span>
                {offer.bestFor}
              </p>
              <Button href={offer.href} className="mt-8">
                {offer.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
