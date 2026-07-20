import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="competences" className="py-14 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Stack" title={site.skills.heading} />

        <div className="mt-10 grid gap-10 sm:mt-14 sm:grid-cols-3">
          {site.skills.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
