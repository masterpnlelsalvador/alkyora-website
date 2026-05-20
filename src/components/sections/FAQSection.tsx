import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/en/faqs";

export function FAQSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="FAQ" title="Clear answers before we review your system." />
        <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.035]">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 open:bg-white/[0.025]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                {faq.question}
                <span className="text-accent group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
