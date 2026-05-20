import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PlaceholderPage({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">Future-ready page</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{copy}</p>
        <Button href="/contact" className="mt-8">
          Book a Review
        </Button>
      </Container>
    </section>
  );
}
