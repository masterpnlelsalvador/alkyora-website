import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ServiceNotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-semibold text-white">Service not found</h1>
      <p className="mt-4 max-w-xl text-muted">This service page is not available yet.</p>
      <Button href="/services" className="mt-8">
        View services
      </Button>
    </Container>
  );
}
