import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { site } from "@/content/en/site";

export function ProblemSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading eyebrow="The risk of speed" title={site.problem.headline} copy={site.problem.copy} />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.problem.cards.map((card) => (
            <StaggerItem key={card.title}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{card.copy}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
