import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ScrollRow, ScrollRowItem } from "@/components/scroll-row";
import { getFeaturedProjects } from "@/lib/projects";

export function ProjectsPreview() {
  const projects = getFeaturedProjects();

  return (
    <section id="projets" className="py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Réalisations"
            title="Quelques projets récents"
            description="Une sélection de missions Shopify menées ces dernières années."
          />
          <Link
            href="/projets"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Voir tous les projets →
          </Link>
        </div>

        <ScrollRow className="mt-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ScrollRowItem key={project.slug}>
              <ProjectCard project={project} />
            </ScrollRowItem>
          ))}
        </ScrollRow>
      </Container>
    </section>
  );
}
