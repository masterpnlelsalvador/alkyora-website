import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactDisclaimer } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact - Book an Alkyora System Review",
  description: "Tell Alkyora about your website, automation, workflow, or AI-powered system and request a practical review.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's review what you are building."
              copy="Tell us about your website, automation, workflow, or AI-powered system. We will help you identify the best next step."
            />
            <p className="mt-8 rounded-lg border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-muted">{contactDisclaimer}</p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
