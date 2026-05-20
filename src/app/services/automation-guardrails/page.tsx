import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { getService } from "@/content/en/services";
import { createMetadata } from "@/lib/seo";

const service = getService("automation-guardrails")!;

export const metadata = createMetadata({
  title: "Automation Guardrails - Alkyora",
  description: service.description,
  path: service.href,
});

export default function AutomationGuardrailsPage() {
  return <ServiceDetailPage service={service} />;
}
