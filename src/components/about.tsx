import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollRow, ScrollRowItem } from "@/components/scroll-row";

export function About() {
  return (
    <section id="a-propos" className="py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Image
              src={site.avatar}
              alt={site.name}
              width={240}
              height={240}
              className="h-40 w-40 rounded-2xl object-cover"
            />
            <div className="mt-8">
              <SectionHeading eyebrow="Qui je suis" title={site.about.heading} />
            </div>
          </div>

          <div className="space-y-5 text-lg text-muted">
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ScrollRow className="mt-14 sm:mt-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {site.process.steps.map((step, index) => (
            <ScrollRowItem key={step.title}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </ScrollRowItem>
          ))}
        </ScrollRow>
      </Container>
    </section>
  );
}
