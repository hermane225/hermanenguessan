import urcoLogo from '@/assets/projects/urco-logo.png'
import urcoHero from '@/assets/projects/urco-hero.webp'
import pieceRareIcon from '@/assets/projects/piece-rare-icon.png'
import pieceRareAccueil from '@/assets/projects/piece-rare-accueil.webp'
import pieceRareRecherche from '@/assets/projects/piece-rare-recherche.webp'
import pieceRareAnnonce from '@/assets/projects/piece-rare-annonce.webp'
import pieceRareMessagerie from '@/assets/projects/piece-rare-messagerie.webp'

export const profile = {
  name: "N'Guessan Hermane Junior",
  brand: 'Mano Dev',
  roles: ['Développeur Full-Stack', 'Développeur Mobile', 'Créateur de URCO & Pièce Rare'],
  email: 'hermanenguessan.contact@gmail.com',
  phone: '+225 01 51 60 04 02',
  phoneHref: '+2250151600402',
  location: "Abidjan, Côte d'Ivoire",
  experience: '4 ans',
  github: 'https://github.com/hermane4',
}

export const navLinks = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' },
]

// Applications mobiles mises en avant. `brand` et `brand2` reprennent la charte de chaque app.
export const apps = [
  {
    id: 'urco',
    name: 'URCO',
    logo: urcoLogo,
    logoWide: true,
    category: 'Urban Connect · Covoiturage',
    role: 'Développeur Full Stack Mobile',
    tagline: 'Vos trajets, notre communauté',
    description:
      "Application de covoiturage pensée pour la Côte d'Ivoire : on recherche, on publie et on réserve des trajets entre les communes d'Abidjan et les villes du pays, puis on embarque avec un billet QR code.",
    features: [
      'Recherche, publication et réservation de trajets',
      'Billetterie de compagnies de transport avec billet QR code scanné à l’embarquement',
      'Paiement Mobile Money : Orange, MTN, Moov et Wave',
      'Suivi du trajet en direct sur la carte',
      'Messagerie conducteur – passager et vérification des documents',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'API REST'],
    platforms: 'Android · iOS · Web',
    playStore: 'https://play.google.com/store/apps/details?id=com.urco.covoiturage',
    brand: '#2563eb',
    brand2: '#e63946',
    spot: '37, 99, 235',
    highlights: ['Billet QR code', 'Mobile Money'],
    screen: { type: 'welcome', image: urcoHero },
  },
  {
    id: 'piece-rare',
    name: 'Pièce Rare',
    logo: pieceRareIcon,
    category: 'Marketplace',
    role: 'Développeur Mobile Full Stack',
    tagline: "Pièces détachées & techniciens en Côte d'Ivoire",
    description:
      'Marketplace ivoirienne qui met en relation acheteurs, vendeurs de pièces détachées et techniciens : téléphones, PC, auto & moto, électroménager… chaque annonce se négocie directement dans la messagerie intégrée.',
    features: [
      'Annonces par catégorie avec état de la pièce (neuf, reconditionné, seconde main)',
      'Messagerie temps réel entre acheteurs et vendeurs',
      'Annuaire de techniciens : réparation, plomberie, électricité…',
      'Vérification des vendeurs, avis et notes',
      'Notifications push et espace d’administration',
    ],
    stack: ['React Native', 'Expo Router', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Socket.IO', 'Cloudinary'],
    platforms: 'Android · iOS',
    playStore: 'https://play.google.com/store/apps/details?id=com.piecerare.app',
    brand: '#16a34a',
    brand2: '#f59e0b',
    spot: '22, 163, 74',
    highlights: ['Chat temps réel', 'Vendeurs vérifiés'],
    screen: {
      type: 'slides',
      slides: [
        { label: 'Accueil', image: pieceRareAccueil },
        { label: 'Recherche', image: pieceRareRecherche },
        { label: 'Annonce', image: pieceRareAnnonce },
        { label: 'Messagerie', image: pieceRareMessagerie },
      ],
    },
  },
]

export const experiences = [
  {
    initials: 'FL',
    role: 'Consultant',
    company: "Fab Lab — Université Virtuelle de Côte d'Ivoire (UVCI)",
    period: 'Depuis novembre 2025',
    points: [
      'Participation à des projets de développement web et applications interactives',
      'Développement front-end et back-end avec JavaScript, React.js, Node.js et MongoDB',
      'Conception et intégration de fonctionnalités pour des projets académiques et collaboratifs',
      'Collaboration avec l’équipe pour tester, déployer et maintenir des solutions numériques innovantes',
    ],
    stack: ['JavaScript', 'React.js', 'Node.js', 'MongoDB'],
  },
  {
    initials: 'CG',
    role: 'Développeur Web & Mobile',
    company: 'Corex Global Strategy',
    period: 'Septembre 2024 – Mars 2025',
    points: [
      'Développement d’interfaces utilisateurs avec Vue.js et Nuxt.js',
      'Contribution à des applications mobiles avec React Native et Expo',
      'Intégration de designs responsives et optimisation des performances UI',
      'Travail collaboratif en environnement agile',
    ],
    stack: ['Vue.js', 'Nuxt.js', 'React Native', 'Expo'],
  },
]

export const education = [
  {
    title: 'Licence professionnelle en développement d’applications',
    school: "Université Virtuelle de Côte d'Ivoire (UVCI)",
    meta: '2023 – 2025 · Mention très bien',
  },
  {
    title: 'Coding Academy by Epitech',
    school: 'WeCode',
    meta: 'Centre de formation d’excellence',
    summary: 'Formation intensive en développement web et applications modernes.',
  },
]

export const skillGroups = [
  {
    title: 'Mobile & UI',
    icon: 'smartphone',
    items: ['React Native', 'Expo', 'Material Design', 'Responsive Web Design', 'Intégration de maquettes'],
  },
  {
    title: 'Front-end',
    icon: 'code',
    items: ['JavaScript', 'TypeScript', 'React.js', 'Vue.js'],
  },
  {
    title: 'Back-end',
    icon: 'server',
    items: ['NestJS', 'Express.js', 'Node.js', 'API REST', 'Prisma'],
  },
  {
    title: 'Données & Outils',
    icon: 'cloud',
    items: ['PostgreSQL', 'MongoDB', 'SQL', 'Git · GitHub · GitLab', 'Linux (Ubuntu)', 'Notions de CI/CD'],
  },
]

export const languages = ['Français — bon niveau', 'Anglais — niveau scolaire']

export const interests = ['Curieux', 'Esprit d’équipe', 'Créatif', 'Orienté solution', 'Organisé']

// Bandeau défilant sous le hero
export const marquee = [
  'React Native',
  'Expo',
  'React.js',
  'Vue.js',
  'TypeScript',
  'JavaScript',
  'NestJS',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'API REST',
  'Git',
  'Linux',
]
