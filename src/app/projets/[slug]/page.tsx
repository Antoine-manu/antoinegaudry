import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { ContactCta } from "@/components/contact-cta";
import { JsonLd } from "@/components/json-ld";
import { HeroLightboxImage, GalleryLightbox } from "@/components/image-lightbox";
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { getReviewsForProject } from "@/lib/reviews";
import { StarRating } from "@/components/star-rating";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${site.url}/projets/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: project.title,
      description: project.summary,
      images: [{ url: project.coverImage, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);
  const relatedReviews = getReviewsForProject(slug);
  const gallery = project.gallery.filter((src) => src !== project.coverImage);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projets", item: `${site.url}/projets` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${site.url}/projets/${project.slug}`,
      },
    ],
  };

  return (
    <div className="pb-14 sm:pb-24">
      <JsonLd data={breadcrumbJsonLd} />
      <div className="border-b border-border/70 py-10 sm:py-16 lg:py-20">
        <Container>
          <Link href="/projets" className="text-sm font-semibold text-accent hover:underline">
            ← Tous les projets
          </Link>

          <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Client</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{project.client}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Année</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted">Rôle</dt>
              <dd className="mt-1 text-sm font-medium text-foreground">{project.role}</dd>
            </div>
            {project.liveUrl ? (
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted">Site</dt>
                <dd className="mt-1 text-sm font-medium">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Voir la boutique →
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </Container>
      </div>

      <Container className="mt-10 sm:mt-16">
        <HeroLightboxImage src={project.coverImage} alt={project.title} />
      </Container>

      <Container className="mt-10 grid gap-16 sm:mt-16 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-10 sm:space-y-14">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Contexte</h2>
            <div className="mt-4 space-y-4 text-muted">
              {project.context.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Objectifs</h2>
            <ul className="mt-4 space-y-3">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Solution</h2>
            <div className="mt-4 space-y-4 text-muted">
              {project.solution.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {gallery.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold text-foreground">Galerie</h2>
              <GalleryLightbox images={gallery} alt={project.title} />
            </section>
          ) : null}

          {relatedReviews.length > 0 ? (
            <section>
              <h2 className="text-xl font-semibold text-foreground">Avis sur ce projet</h2>
              <div className="mt-4 space-y-4">
                {relatedReviews.map((review) => (
                  <figure key={review.id} className="rounded-2xl border border-border bg-surface p-6">
                    <StarRating rating={review.rating} />
                    <blockquote className="mt-3 text-sm text-foreground">“{review.text}”</blockquote>
                    <figcaption className="mt-3 text-sm text-muted">
                      {review.author} — {review.role}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {project.results.length > 0 ? (
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
                Résultats
              </h2>
              <dl className="mt-4 space-y-4">
                {project.results.map((result) => (
                  <div key={result.label}>
                    <dt className="text-xs text-muted">{result.label}</dt>
                    <dd className="text-lg font-semibold text-foreground">{result.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Stack technique
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </Container>

      {(previous || next) ? (
        <Container className="mt-12 flex flex-col gap-4 border-t border-border/70 pt-10 sm:mt-20 sm:flex-row sm:justify-between">
          {previous ? (
            <Link href={`/projets/${previous.slug}`} className="group max-w-sm">
              <span className="text-xs uppercase tracking-widest text-muted">Projet précédent</span>
              <p className="mt-1 font-semibold text-foreground group-hover:text-accent">
                ← {previous.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/projets/${next.slug}`} className="group max-w-sm text-right">
              <span className="text-xs uppercase tracking-widest text-muted">Projet suivant</span>
              <p className="mt-1 font-semibold text-foreground group-hover:text-accent">
                {next.title} →
              </p>
            </Link>
          ) : null}
        </Container>
      ) : null}

      <div className="mt-14 sm:mt-24">
        <ContactCta />
      </div>
    </div>
  );
}
