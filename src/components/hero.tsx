import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-96 bg-[radial-gradient(circle_at_top,_var(--accent)_0%,_transparent_60%)] opacity-[0.12]"
      />
      <Container className="relative py-14 sm:py-24 lg:py-32">
        <div className="flex items-center gap-4">
          <Image
            src={site.avatar}
            alt={site.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-border"
            priority
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {site.role}
          </p>
        </div>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{site.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Me contacter
          </a>
          <a
            href={site.maltUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Voir mon profil Malt
          </a>
          <Link
            href="/projets"
            className="text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Voir mes projets →
          </Link>
        </div>

        {/* Masqué visuellement mais gardé dans le DOM pour le SEO / les lecteurs d'écran */}
        <dl className="sr-only">
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
