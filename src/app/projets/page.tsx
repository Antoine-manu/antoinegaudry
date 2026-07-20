import type { Metadata } from "next";
import { site } from "@/data/site";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { JsonLd } from "@/components/json-ld";
import { getAllProjects } from "@/lib/projects";

const description =
  "Sélection de missions Shopify réalisées en freelance : boutiques, migrations, apps custom et intégrations.";

export const metadata: Metadata = {
  title: "Projets",
  description,
  alternates: {
    canonical: `${site.url}/projets`,
  },
  openGraph: {
    url: `${site.url}/projets`,
    title: `Projets — ${site.name}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `Projets — ${site.name}`,
    description,
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
      { "@type": "ListItem", position: 2, name: "Projets", item: `${site.url}/projets` },
    ],
  };

  return (
    <div className="py-14 sm:py-20 lg:py-28">
      <JsonLd data={breadcrumbJsonLd} />
      <Container>
        <SectionHeading
          eyebrow="Réalisations"
          title="Tous les projets"
          description="Boutiques Shopify, migrations, apps custom et intégrations réalisées en mission freelance."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
