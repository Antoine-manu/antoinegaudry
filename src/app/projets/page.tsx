import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projets — Antoine Gaudry",
  description: "Sélection de missions Shopify réalisées en freelance : boutiques, migrations, apps custom et intégrations.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-14 sm:py-20 lg:py-28">
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
