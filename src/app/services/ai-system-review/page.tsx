import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { getService } from "@/content/en/services";
import { createMetadata } from "@/lib/seo";

const service = getService("ai-system-review")!;

export const metadata = createMetadata({
  title: "AI System Review - Alkyora",
  description: service.description,
  path: service.href,
});

export default function AISystemReviewPage() {
  return <ServiceDetailPage service={service} />;
}
