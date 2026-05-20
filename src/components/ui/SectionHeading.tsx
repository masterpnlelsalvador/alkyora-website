import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  className,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
