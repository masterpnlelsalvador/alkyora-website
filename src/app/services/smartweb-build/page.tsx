import { ServiceDetailPage } from "@/components/templates/ServiceDetailPage";
import { getService } from "@/content/en/services";
import { createMetadata } from "@/lib/seo";

const service = getService("smartweb-build")!;

export const metadata = createMetadata({
  title: "SmartWeb Build - Alkyora",
  description: service.description,
  path: service.href,
});

export default function SmartWebBuildPage() {
  return <ServiceDetailPage service={service} />;
}
