import type { Metadata } from "next";
import { site } from "@/data/site";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Reviews } from "@/components/reviews";
import { ProjectsPreview } from "@/components/projects-preview";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  alternates: {
    canonical: site.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <Reviews />
      <About />
      <Services />
      <Skills />
      <ContactCta />
    </>
  );
}
