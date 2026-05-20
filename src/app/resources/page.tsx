import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/content/en/resources";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Resources - Alkyora",
  description: "Practical resources for safer AI automations, AI-built websites, workflow guardrails, and business-ready systems.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Practical notes for safer AI-powered systems."
          copy="Checklists and guides for founders, agencies, and small teams moving from AI experiments to reliable operations."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <a key={resource.title} href={resource.href} className="block">
              <Card className="h-full">
                <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
                <p className="mt-4 leading-7 text-muted">{resource.description}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-cyan-200">Read more</span>
              </Card>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
