import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/container";

const navLinks = [
  { href: "/projets", label: "Projets" },
  { href: "/#avis", label: "Avis" },
  { href: "/#services", label: "Services" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <Image
            src={site.avatar}
            alt={site.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
          />
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Me contacter
        </Link>
      </Container>
    </header>
  );
}
