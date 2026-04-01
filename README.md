# EasyMarket — Site Vitrine

Site vitrine de EasyMarket, une solution qui aide les commerçants africains
à mieux piloter leur activité grâce à des outils de gestion et d'aide à la décision.


##  Lancer le projet

### Prérequis
- Node.js v18+
- npm

### Installation
```bash
# Cloner le repo
git clone https://github.com/ColleFALL/easymarket.git

# Aller dans le dossier
cd easymarket

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev


Le projet sera disponible sur **http://localhost:5173**

### Build de production
bash
npm run build
npm run preview



##  Choix techniques

### Stack
| Technologie | Rôle | Justification |
|---|---|---|
| **React 19** | Framework UI | Composants réutilisables, état local |
| **Vite 8** | Bundler | Rapide, HMR instantané, build optimisé |
| **Tailwind CSS v4** | Styles utilitaires | Responsive rapide, classes cohérentes |
| **Framer Motion** | Animations | Animations légères et fluides |
| **React Hook Form** | Formulaire | Validation légère sans re-renders |
| **Swiper.js** | Carousel | Accessible, responsive, bien maintenu |

### Architecture
- **Un composant par section** — chaque section est isolée dans son propre dossier
- **Styles inline + CSS classes** — combinaison pour la flexibilité et la maintenabilité
- **Assets optimisés** — images en PNG/JPG compressées
- **Responsive Design** — Mobile First avec breakpoints 480px / 768px / 1024px

### Structure du projet
src/
├── assets/
│   └── images/          
├── components/
│   ├── Navbar/
│   ├── HeroSection/
│   ├── WhySection/
│   ├── HowItWorks/
│   ├── FeaturesSection/
│   ├── OffresSection/
│   ├── CTABanner/
│   ├── ClientsSection/
│   ├── ShopsSection/
│   ├── PartnersSection/
│   ├── ContactSection/
│   └── Footer/
├── index.css            
├── App.jsx             
└── main.jsx           


##  Sections intégrées

1. **Navbar** — Navigation fixe avec menu hamburger mobile
2. **Hero** — Titre principal, CTA, mockup mobile, badges stores
3. **Pourquoi EasyMarket** — 6 avantages avec icônes et cards
4. **Comment ça marche** — 4 étapes en grille 2x2
5. **Fonctionnalités clés** — 9 features + mockup mobile
6. **Formules tarifaires** — 3 plans (Solo, Team, Pro)
7. **CTA Banner** — Bannière orange avec téléphone débordant
8. **Clients** — Carousel avec navigation par flèches
9. **Boutiques** — Grille 4 cartes avec images
10. **Partenaires** — 6 logos institutionnels
11. **Contact** — Formulaire avec toast de confirmation
12. **Footer** — Logo, liens, réseaux sociaux, copyright


##  Bonus implémentés

- [x] Responsive design complet (mobile, tablette, desktop)
- [x] Animations au hover sur les cartes
- [x] Toast de confirmation sur le formulaire
- [x] Scroll smooth entre les sections
- [x] Menu hamburger animé sur mobile
- [x] Déploiement sur Vercel


##  Améliorations avec plus de temps

- **EmailJS** — Envoi réel des emails du formulaire sans backend
- **Animations Framer Motion** — Fade-in au scroll sur chaque section
- **SEO** — Balises meta, Open Graph, React Helmet
- **Google Tag Manager** — Tracking des clics CTA
- **Optimisation images** — Format WebP, lazy loading
- **Tests** — Tests unitaires avec Vitest + Testing Library
- **Dark mode** — Mode sombre
- **i18n** — Internationalisation Français / Anglais
- **CMS** — Intégration Strapi pour gérer les contenus dynamiquement


*Réalisé dans le cadre de l'épreuve technique EasyMarket — Avril 2026
