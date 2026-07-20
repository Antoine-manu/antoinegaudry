import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ScrollRow, ScrollRowItem } from "@/components/scroll-row";

export function Services() {
  return (
    <section id="services" className="border-t border-border/70 bg-surface/60 py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ce que je fais"
          title="Des missions ciblées, de l'audit à la mise en ligne"
          description="J'interviens seul ou en renfort de votre équipe, sur tout ou partie de votre projet Shopify."
        />

        <ScrollRow className="mt-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3" fadeClassName="from-surface">
          {site.services.map((service) => (
            <ScrollRowItem key={service.title}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent">
                <h3 className="text-base font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </div>
            </ScrollRowItem>
          ))}
        </ScrollRow>
      </Container>
    </section>
  );
}
