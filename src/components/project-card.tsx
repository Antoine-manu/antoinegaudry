import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projets/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-accent"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.summary}</p>
        <span className="mt-4 text-sm font-semibold text-accent">
          Voir le projet →
        </span>
      </div>
    </Link>
  );
}
