import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-cyan-300/25 bg-gradient-to-br from-primary/24 via-surface to-accent/10 p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to turn your AI-built system into something you can trust?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Whether you are launching a website, connecting automations, or experimenting with AI agents, Alkyora helps you build with speed, structure, and security from day one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a System Review</Button>
              <Button href="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
