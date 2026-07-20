import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <Container className="flex flex-col gap-6 py-12 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="mt-1">{site.role}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/projets" className="hover:text-foreground">
            Projets
          </Link>
          <Link href="/#avis" className="hover:text-foreground">
            Avis
          </Link>
          <Link href="/#services" className="hover:text-foreground">
            Services
          </Link>
          <a href={site.maltUrl} target="_blank" rel="noreferrer" className="hover:text-foreground">
            Profil Malt
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            {site.email}
          </a>
        </nav>
        <p>© {year} {site.name}. Tous droits réservés.</p>
      </Container>
    </footer>
  );
}
