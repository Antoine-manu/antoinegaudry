export interface ProjectResult {
  /** Ex: "Temps de chargement" */
  label: string;
  /** Ex: "-40%" */
  value: string;
}

export interface Project {
  /** Identifiant unique utilisé dans l'URL: /projets/[slug] */
  slug: string;
  /** Nom du projet affiché en titre */
  title: string;
  /** Nom du client ou "Sous NDA" si confidentiel */
  client: string;
  /** Année de réalisation */
  year: number;
  /** Catégorie courte affichée en badge, ex: "Boutique Shopify", "App custom", "Migration" */
  category: string;
  /** Rôle occupé sur la mission */
  role: string;
  /** Résumé en une phrase, utilisé sur les cartes et en meta description */
  summary: string;
  /** Image de couverture, ratio 16:9 recommandé */
  coverImage: string;
  /** Images additionnelles affichées en galerie sur la page projet */
  gallery: string[];
  /** Paragraphes de contexte / problématique client */
  context: string[];
  /** Liste des objectifs de la mission */
  objectives: string[];
  /** Paragraphes décrivant la solution mise en place */
  solution: string[];
  /** Résultats chiffrés, si disponibles */
  results: ProjectResult[];
  /** Stack technique / outils utilisés */
  stack: string[];
  /** URL publique de la boutique/du projet, si partageable */
  liveUrl: string | null;
  /** Met le projet en avant sur la page d'accueil */
  featured: boolean;
}
