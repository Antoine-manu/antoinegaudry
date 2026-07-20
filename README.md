# Site freelance — Antoine Gaudry

Landing page + fiches projets, construite avec Next.js (App Router), export statique et Tailwind CSS v4.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Où éditer le contenu

Tout le contenu texte/données est centralisé, pas besoin de toucher aux composants React pour une mise à jour courante :

- **`src/data/site.ts`** — identité, accroche, bio, services, compétences, coordonnées (email, lien Malt).
- **`src/data/projects.json`** — un objet par projet (voir schéma commenté dans `src/types/project.ts`). Chaque projet génère automatiquement sa page `/projets/[slug]`. Les champs marqués `À REMPLACER` / `À COMPLÉTER` sont des exemples à remplacer par ton vrai contenu.
- **`src/data/reviews.json`** — avis clients (voir schéma dans `src/types/review.ts`). Les 4 entrées actuelles sont des **avis d'exemple à remplacer** par tes vrais avis copiés depuis [ton profil Malt](https://www.malt.fr/profile/antoinegaudry) (le scraping automatique du profil est bloqué par Malt, donc c'est un copier-coller manuel).
  - `projectSlug` permet de rattacher un avis à un projet précis (doit correspondre à un `slug` de `projects.json`), ou `null` si l'avis n'est lié à aucun projet du site.

### Ajouter/remplacer des images

- Dépose tes images dans `public/images/projects/` (ou un sous-dossier de ton choix).
- Référence-les dans `projects.json` via un chemin commençant par `/`, ex. `"coverImage": "/images/projects/mon-projet-cover.jpg"`.
- `coverImage` : ratio 16:9 conseillé (utilisée en carte et en bannière de la fiche projet).
- `gallery` : tableau d'images supplémentaires affichées sur la fiche projet (peut inclure ou non `coverImage`).
- Les 5 fichiers `placeholder-*.svg` sont des visuels temporaires — à remplacer par de vraies captures d'écran/photos de projets.

## Build de production

```bash
npm run build
```

Génère un export 100% statique dans le dossier `out/` (HTML/CSS/JS), grâce à `output: "export"` dans `next.config.ts`.

## Déploiement sur le VPS OVH (nginx)

1. Build en local (ou en CI) : `npm run build`.
2. Envoie le contenu de `out/` sur le serveur, par exemple :
   ```bash
   rsync -avz --delete out/ user@ton-vps:/var/www/antoine-gaudry/
   ```
3. Configuration nginx minimale (le site utilise `trailingSlash: true`, donc pas besoin de règles de réécriture particulières) :
   ```nginx
   server {
     listen 80;
     server_name ton-domaine.fr;

     root /var/www/antoine-gaudry;

     location / {
       try_files $uri $uri.html $uri/ =404;
     }

     error_page 404 /404.html;
     location = /404.html {
       internal;
     }
   }
   ```
4. Pense à mettre à jour `url` dans `src/data/site.ts` avec le nom de domaine définitif (utilisé pour les balises Open Graph) et à brancher un certificat HTTPS (ex. Let's Encrypt / Certbot) sur le VPS.

## Structure

- `src/app/page.tsx` — page d'accueil (assemble les sections `src/components/*`).
- `src/app/projets/page.tsx` — liste de tous les projets.
- `src/app/projets/[slug]/page.tsx` — fiche projet générée statiquement pour chaque entrée de `projects.json`.
- `src/lib/projects.ts`, `src/lib/reviews.ts` — fonctions d'accès aux données (lecture des JSON).
