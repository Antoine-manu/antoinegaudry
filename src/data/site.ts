export const site = {
  // À REMPLACER par le nom de domaine définitif une fois branché sur le VPS.
  url: "https://antoinegaudry.com",
  name: "Antoine Gaudry",
  avatar: "/images/antoine-gaudry.png",
  role: "Développeur & Expert Shopify freelance",
  location: "Lille, France — missions à distance ou sur site",
  tagline: "Votre boutique Shopify, du code à la conversion.",
  intro:
    "Développeur Shopify freelance, j'aide les marques et les retailers à lancer, refondre et faire évoluer leur boutique en ligne : thèmes Liquid sur mesure, apps métier, intégrations ERP et optimisation de la conversion.",
  email: "antoine.gaudry60@gmail.com",
  maltUrl: "https://www.malt.fr/profile/antoinegaudry",
  // À compléter si tu veux les afficher dans le footer / la section contact.
  linkedinUrl: null as string | null,
  stats: [
    { label: "Ans d'expérience Shopify", value: "5+" },
    { label: "Boutiques lancées ou refondues", value: "20+" },
    { label: "Note moyenne sur Malt", value: "5/5" },
    { label: "Taux de missions renouvelées", value: "80%" },
  ],
  about: {
    heading: "À propos",
    paragraphs: [
      "Je suis développeur freelance spécialisé sur l'écosystème Shopify depuis plusieurs années, après avoir accompagné des marques retail et des enseignes en franchise sur des projets d'e-commerce à fort enjeu business.",
      "Je fonctionne comme un développeur senior autonome : je peux intervenir seul sur une mission complète (audit, développement, mise en ligne) ou en renfort d'une équipe produit déjà en place, en m'intégrant à vos outils et à votre rythme.",
    ],
  },
  process: {
    heading: "Comment je travaille",
    steps: [
      {
        title: "Audit",
        description:
          "Analyse de l'existant (thème, apps, performance, process) et cadrage précis du besoin avant tout devis.",
      },
      {
        title: "Proposition transparente",
        description:
          "Un périmètre clair, un chiffrage détaillé et des délais réalistes — sans surprise en cours de mission.",
      },
      {
        title: "Développement itératif",
        description:
          "Livraisons régulières et testables, points d'avancement fréquents, retours intégrés au fil de l'eau.",
      },
      {
        title: "Transfert autonome",
        description:
          "Documentation, formation de vos équipes et passation propre pour que vous restiez autonomes après la mission.",
      },
    ],
  },
  services: [
    {
      title: "Boutiques Shopify clé en main",
      description:
        "Lancement complet : architecture, thème personnalisé, configuration des apps et de la logistique.",
    },
    {
      title: "Refonte & migration vers Shopify",
      description:
        "Migration depuis PrestaShop, Magento, WooCommerce ou un développement propriétaire, sans perte de données ni de référencement.",
    },
    {
      title: "Développement de thèmes Liquid sur mesure",
      description:
        "Thèmes performants et maintenables, pensés pour la conversion et fidèles à votre identité de marque.",
    },
    {
      title: "Applications & fonctionnalités custom",
      description:
        "Apps métier, logique B2B, devis, fidélité, POS — développées sur mesure quand les apps du store ne suffisent pas.",
    },
    {
      title: "Intégrations API & ERP",
      description:
        "Connexion temps réel à vos outils existants : ERP, PIM, stock, CRM, solutions de paiement ou de livraison.",
    },
    {
      title: "Performance & optimisation de la conversion",
      description:
        "Audit technique, Core Web Vitals, tunnel d'achat : des boutiques rapides qui convertissent mieux.",
    },
  ],
  skills: {
    heading: "Stack & compétences",
    groups: [
      {
        title: "Shopify",
        items: [
          "Liquid",
          "Shopify CLI",
          "Theme Architecture (OS 2.0)",
          "Admin API (GraphQL)",
          "Storefront API",
          "Hydrogen / Remix",
          "Shopify Functions",
        ],
      },
      {
        title: "Développement",
        items: ["JavaScript / TypeScript", "React / Next.js", "Node.js", "REST & GraphQL"],
      },
      {
        title: "Intégrations",
        items: ["ERP & PIM", "Webhooks", "Paiement & livraison", "Automatisations"],
      },
    ],
  },
  contact: {
    heading: "Discutons de votre projet",
    description:
      "Une refonte à cadrer, une app métier à développer ou juste une question technique ? Le plus simple est de m'écrire directement ou de me contacter via Malt.",
  },
} as const;
