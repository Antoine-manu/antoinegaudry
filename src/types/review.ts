export interface Review {
  /** Identifiant unique */
  id: string;
  /** Nom du client (tel qu'affiché publiquement sur Malt) */
  author: string;
  /** Poste / entreprise du client, ex: "CEO chez Exemple" */
  role: string;
  /** Note de 1 à 5 */
  rating: number;
  /** Date de l'avis au format "AAAA-MM" ou "AAAA-MM-JJ" */
  date: string;
  /** Texte complet de l'avis */
  text: string;
  /** Slug du projet lié dans projects.json, si applicable */
  projectSlug: string | null;
  /** Plateforme source de l'avis */
  source: "Malt" | "Autre";
}
