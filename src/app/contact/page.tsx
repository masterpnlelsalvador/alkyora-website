import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactDisclaimer } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact - Book an Alkyora System Review",
  description: "Tell Alkyora about your website, automation, workflow, or AI-powered system and request a practical review.",
  path: "/contact",
});

const projectTypes = ["AI website", "Landing page or funnel", "n8n automation", "Make/Zapier automation", "AI agent", "Internal workflow", "Not sure yet"];
const helpOptions = ["System review", "SmartWeb build", "Automation guardrails", "Launch readiness", "Data flow review", "Not sure yet"];
const timelines = ["This week", "This month", "Next 60 days", "Planning ahead"];
const budgets = ["Not sure yet", "Under $1,500", "$1,500 - $5,000", "$5,000 - $10,000", "$10,000+"];

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
          <form className="glass-border rounded-lg p-6" aria-label="Request review form">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Name" name="name" />
              <FormField label="Email" name="email" type="email" />
              <FormField label="Company or project name" name="company" />
              <SelectField label="What are you building?" name="projectType" options={projectTypes} />
              <SelectField label="What do you need help with?" name="help" options={helpOptions} />
              <SelectField label="Timeline" name="timeline" options={timelines} />
              <SelectField label="Budget range, optional" name="budget" options={budgets} required={false} />
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-medium text-slate-200">Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent"
              />
            </label>
            {/* Connect this form to a CRM, email tool, Google Sheet, or secure automation webhook after choosing the operational stack. */}
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-background transition hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Request Review
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function FormField({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input required name={name} type={type} className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent" />
    </label>
  );
}

function SelectField({ label, name, options, required = true }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select required={required} name={name} className="mt-2 w-full rounded-lg border border-white/12 bg-background px-4 py-3 text-white outline-none focus:border-accent">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
