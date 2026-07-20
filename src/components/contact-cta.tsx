import { site } from "@/data/site";
import { Container } from "@/components/container";

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border/70 bg-surface/60 py-14 sm:py-20 lg:py-28">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {site.contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          {site.contact.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.maltUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Me contacter sur Malt
          </a>
        </div>
      </Container>
    </section>
  );
}
