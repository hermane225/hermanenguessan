<template>
  <div lang="en" class="scroll-smooth">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hermane Junior N'Guessan</title>
    </head>
    <body class="bg-gray-50 dark:bg-gray-900 font-sans leading-relaxed">
      <!-- Navigation -->
      <nav
        class="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm no-print"
      >
        <div class="max-w-6xl mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <div class="text-xl font-bold text-gray-900 dark:text-white">Mano Dev</div>
            <div class="hidden md:flex space-x-8">
              <a
                href="#home"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >Accuiel</a
              >
              <a
                href="#about"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >A propos</a
              >
              <a
                href="#experience"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >Experience</a
              >
              <a
                href="#skills"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >Competances</a
              >
              <a
                href="#projects"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >Projects</a
              >
              <a
                href="#contact"
                class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >Contact</a
              >
            </div>
            <div class="flex items-center space-x-4">
              <button
                onclick="toggleDarkMode()"
                class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span class="dark:hidden">🌙</span>
                <span class="hidden dark:inline">☀️</span>
              </button>
              <button
                onclick="window.print()"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Técharger -PDF
              </button>
            </div>
          </div>
        </div>
      </nav>

      <!-- Hero Section -->
      <section
        id="home"
        class="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
      >
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <div class="lg:w-2/3 mb-8 lg:mb-0 animate-fade-in">
              <h1 class="text-5xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                N'GUESSAN HERMANE JUNIOR
              </h1>
              <h2 class="text-2xl lg:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
                - Developpeur front-end et Mobile
              </h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Développeur Front-End Passionné Je transforme vos idées en applications web et
                mobiles modernes, réactives et intuitives, offrant des expériences digitales fluides
                et captivantes.
              </p>
              <div class="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Me Conctactez
                </a>
                <a
                  href="#projects"
                  class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Voir mes Projets
                </a>
              </div>
            </div>
            <div class="lg:w-1/3 flex justify-center animate-slide-up">
              <div class="relative">
                <div
                  class="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
                >
                  <img
                    src="/src/assets/opah.jpg"
                    alt="Alex Johnson"
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div
                  class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg"
                >
                  <span class="text-2xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-16 bg-white dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">A Propos de Moi</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
              <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  Je suis un développeur front-end passionné avec plus de 1 ans d’expérience dans la
                  création de solutions numériques qui font la différence. Mon parcours a commencé
                  par un diplôme en informatique et a évolué à travers divers rôles dans des
                  startups et des entreprises technologiques.
                </p>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  Je me spécialise dans les frameworks JavaScript modernes, en particulier Vue.js ,
                  Nuxt js et Node.js, et j’ai une expérience des plateformes cloud comme Azure. Je
                  crois en l’écriture d’un code propre et maintenable et en le respect des
                  meilleures pratiques pour une architecture évolutive.
                </p>
                <p class="text-gray-600 dark:text-gray-300">
                  Lorsque je ne suis pas en train de coder, vous me trouverez en train de contribuer
                  à des projets open source, d’encadrer des appprenants développeurs ou d’explorer
                  les dernières tendances technologiques. Je suis toujours prêt à relever de
                  nouveaux défis et à apprendre les technologies émergentes.
                </p>
              </div>
            </div>
         <!-- image de hermane  -->

             <div class="w-full h-45 overflow-hidden">
              <img
                class="w-full h-auto object-cover"
                src="/src/assets/ja.jpg"
                alt="Description de l'image"
              />
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">En brief</h3>
                <div class="space-y-3">
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Localisation</span>
                    <span class="text-gray-900 dark:text-white">ABIDJAN , COTE D'IVOIRE</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Experience</span>
                    <span class="text-gray-900 dark:text-white">1 ANS</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Email</span>
                    <span class="text-gray-900 dark:text-white">hermanenguessan525@gmail.com</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600 dark:text-gray-300">Télephone</span>
                    <span class="text-gray-900 dark:text-white">+225 0151600402</span>
                  </div>
                </div>
              </div>
              <div
                class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Intérêts</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-green-500 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >Créatif</span
                  >
                  <span
                    class="bg-blue-500 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >AI/cloud</span
                  >
                  <span
                    class="bg-red-500 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >Orienté Solution</span
                  >
                  <span
                    class="bg-yellow-500 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >Organisé</span
                  >
                  <span
                    class="bg-orange-500 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >Createur de Contenue</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- Experience Section -->
      <section id="experience" class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div class="space-y-8">
            <!-- Job 1 -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div class="flex items-center mb-4 md:mb-0">
                  <div
                    class="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4"
                  >
                    CG
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                      Coordinateur et Developeur frontend
                    </h3>
                    <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                      corex global strategy.
                    </p>
                  </div>
                </div>
                <div class="text-gray-600 dark:text-gray-300 font-medium">
                  Jan 2024 - septembre 2024
                </div>
              </div>
              <ul class="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2 mt-1">▸</span>
                  Développé une architecture front-end performante supportant 2M+ utilisateurs,
                  améliorant la stabilité et la réactivité de l’application de 40%
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2 mt-1">▸</span>
                  Conçu et maintenu un dashboard interactif React, réduisant de 35% les demandes de
                  support grâce à une UX optimisée
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2 mt-1">▸</span>
                  Mis en place une pipeline CI/CD front-end avec AWS, accélérant les déploiements de
                  2 heures à 15 minutes
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2 mt-1">▸</span>
                  Encadré et mentoré 5 développeurs apprenants, en réalisant des revues de code
                  front-end pour garantir des standards élevés de qualité et maintenabilité
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >Vue js</span
                >
                <span
                  class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                  >Node.js</span
                >
                <span
                  class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm"
                  >Azure</span
                >
                <span
                  class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                  >SQL</span
                >
                <span
                  class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm"
                  >JavaScript</span
                >
              </div>
            </div>

            <!-- Job 2 -->
            <div
              class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div class="flex items-center mb-4 md:mb-0">
                  <div
                    class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4"
                  >
                    IS
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                      Developeur Frontend
                    </h3>
                    <p class="text-lg text-green-600 dark:text-green-400 font-semibold">
                      InnovateSoft
                    </p>
                  </div>
                </div>
                <div class="text-gray-600 dark:text-gray-300 font-medium">
                  Janvier 2025 - Mars 2025
                </div>
              </div>
              <ul class="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li class="flex items-start">
                  <span class="text-purple-600 mr-2 mt-1">▸</span>
                  Développé et lancé 3 produits SaaS du concept à la production, générant plus de
                  500K$ de revenu annuel récurrent
                </li>
                <li class="flex items-start">
                  <span class="text-purple-600 mr-2 mt-1">▸</span>
                  Mis en place une suite de tests automatisés front-end, augmentant la couverture de
                  code de 20% à 85%
                </li>
                <li class="flex items-start">
                  <span class="text-purple-600 mr-2 mt-1">▸</span>
                  Optimisé les requêtes API et interactions front-end, améliorant les performances
                  des applications de 60%
                </li>
                <li class="flex items-start">
                  <span class="text-purple-600 mr-2 mt-1">▸</span>
                  Collaboré avec l’équipe design pour créer des composants UI réactifs et
                  réutilisables, déployés sur 5 applications
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >Vue.js</span
                >
                <span
                  class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                  >Express.js</span
                >
                <span
                  class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm"
                  >MongoDB</span
                >
                <span
                  class="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm"
                  >Nuxt js</span
                >
                <span
                  class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                  >JavaScript</span
                >
              </div>
            </div>



   <section class="bg-white lg:grid lg:min-h-screen lg:place-content-center dark:bg-gray-900">
  <div
    class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div class="max-w-prose text-left">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Je suis le prophète du web, parce que
        <strong class="text-indigo-600"> je c<>de par  </strong>
        revelation
      </h1>

      <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        « Chaque grande idée commence par une simple pensée. Le code, ce n’est pas seulement des lignes écrites sur un écran, c’est la traduction d’un rêve en réalité. Si tu peux l’imaginer, tu peux le coder. Et si tu peux le coder, tu peux changer le monde. »
      </p>

      <div class="mt-4 flex gap-4 sm:mt-6">
        <!-- <a
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Get Started
        </a> -->

        <!-- <a
          class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#"
        >
          Learn More
        </a> -->
      </div>
    </div>

   <!-- Responsive Image -->
    <div class="mt-6 md:mt-0 sm:p-10">
      <img
        class="w-full h-auto max-w-full rounded-lg object-cover md:h-[400px] lg:h-[500px]"
        src="/src/assets/we.jpg"
        alt="Any Image Here"
      />
    </div>
  </div>
</section>

            <!-- <div class="w-30 h-30 overflow-hidden">
              <img
                class="w-23 h-25 object-cover"
                src="/src/assets/ja.jpg"
                alt="Description de l'image"
              />
            </div> -->


            <!-- Job 3 -->

            <!-- <div    class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div class="flex items-center mb-4 md:mb-0">
                  <div
                    class="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4"
                  >
                    WS
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                      Developeur Frontend
                    </h3>
                    <p class="text-lg text-green-600 dark:text-green-400 font-semibold">
                      WebSolutions Co.
                    </p>
                  </div>
                </div>
                <div class="text-gray-600 dark:text-gray-300 font-medium">Jun 2016 - Feb 2018</div>
              </div>
              <ul class="text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li class="flex items-start">
                  <span class="text-green-600 mr-2 mt-1">▸</span>
                  Créé des sites web responsives pour plus de 20 clients en utilisant des frameworks
                  JavaScript modernes
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2 mt-1">▸</span>
                  Amélioré la vitesse de chargement des sites de 50% grâce à l’optimisation du code
                  et à la compression des images
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2 mt-1">▸</span>
                  Collaboré avec les designers UX pour implémenter des designs pixel-perfect avec
                  des animations fluides
                </li>
                <li class="flex items-start">
                  <span class="text-green-600 mr-2 mt-1">▸</span>
                  Défini les standards de code et bonnes pratiques pour l’équipe de développement
                  front-end
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm"
                  >JavaScript</span
                >
                <span
                  class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                  >HTML/CSS</span
                >
                <span
                  class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
                >
                  TypeScript</span
                >
                <span
                  class="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm"
                  >Tailwind css</span
                >
                <span
                  class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm"
                  >jQuery</span
                > -->
            <!-- </div>
            </div>             -->
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="py-16 bg-white dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Education -->
            <div
              class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8"
            >
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-4"
                >
                  🎓
                </div>
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    Licence en informatiques Developeur d'Application et e-Service
                  </h3>
                  <p class="text-blue-600 dark:text-blue-400">
                    Informatique et Science du Numérique
                  </p>
                </div>
              </div>
              <div class="mb-4">
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  Université Virtuelle de cote d'ivoire -(UVCI)
                </p>
                <p class="text-gray-600 dark:text-gray-300">2022 - 2015 | Mention: très bien</p>
              </div>
              <p class="text-gray-600 dark:text-gray-300">
                Conception et architecture d’applications web performantes Développement
                d’interfaces web et applications interactives Tests, débogage et optimisation du
                code pour garantir la qualité et la stabilité
              </p>
            </div>

            <!-- Certifications -->
            <div class="space-y-4">
              <div
                class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Certifié Microsoft Azure
                  </h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2025</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">
                  architecture cloud, déploiement et optimisation d’infrastructures
                </p>
              </div>

              <div
                class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Master 1 Professionel
                  </h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2025</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Big Data Analytics</p>
              </div>

              <div
                class="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Google Cloud Professional Developer
                  </h3>
                  <span class="text-sm text-gray-600 dark:text-gray-400">2025</span>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm">Google Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="py-16 bg-gray-50 dark:bg-gray-900">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Competence</h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Technical Skills -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Competence technologiques
              </h3>
              <div class="space-y-6">
                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-700 dark:text-gray-300 font-medium"
                      >JavaScript / TypeScript</span
                    >
                    <span class="text-gray-600 dark:text-gray-400">95%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      class="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full progress-bar"
                      style="--progress-width: 82%"
                    ></div>
                  </div>
                </div>

                <div class="skill-item">
                  <div class="flex justify-between mb-2">
                    <span class="text-gray-700 dark:text-gray-300 font-medium"
                      >Docker / DevOps</span
                    >
                    <span class="text-gray-600 dark:text-gray-400">50%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      class="bg-gradient-to-r from-indigo-500 to-blue-500 h-3 rounded-full progress-bar"
                      style="--progress-width: 50%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            *

            <!-- image logo  -->

            <div class="w-full h-45 overflow-hidden">
              <img
                class="w-full h-auto object-cover"
                src="/src/assets/mdev.jpg"
                alt="Description de l'image"
              />
            </div>

            <!-- Soft Skills & Technologies -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Frameworks</h3>
              <div class="grid grid-cols-2 gap-4 mb-8">
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">🖖</div>
                  <div class="font-medium text-gray-900 dark:text-white">Vue js</div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">🟢</div>
                  <div class="font-medium text-gray-900 dark:text-white">Node.js</div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">☁️</div>
                  <div class="font-medium text-gray-900 dark:text-white">AZURE</div>
                </div>
                <!-- <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                > -->
                <!-- <div class="text-2xl mb-2">🐋</div>
                  <div class="font-medium text-gray-900 dark:text-white">Docker</div>
                </div> -->
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">📊</div>
                  <div class="font-medium text-gray-900 dark:text-white">SQL</div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">🔥</div>
                  <div class="font-medium text-gray-900 dark:text-white">MongoDB</div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">📱</div>
                  <div class="font-medium text-gray-900 dark:text-white">Flutter</div>
                </div>
                <div
                  class="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div class="text-2xl mb-2">🎨</div>
                  <div class="font-medium text-gray-900 dark:text-white">Tailwind CSS</div>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Soft Skills</h3>
              <div class="space-y-4">
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Leadership d’équipe et mentorat</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Résolution de problèmes et Esprit critique</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                  <span class="text-gray-700 dark:text-gray-300">Développement Agile</span>
                </div>
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-orange-500 rounded-full mr-3"></span>
                  <span class="text-gray-700 dark:text-gray-300"
                    >Communication avec les clients</span
                  >
                </div>
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                  <span class="text-gray-700 dark:text-gray-300">Gestion de projet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-16 bg-white dark:bg-gray-800">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quelques Projets réalisé
            </h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img src="/src/assets/nutri.png" alt="Project" class="w-full h-48 object-cover" />
                <div class="absolute top-4 right-4">
                  <!-- <span
                    class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                  ></span> -->
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  plateforme Nutriboost
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  site web de la boutique nutri boost
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >JavaScript</span
                  >
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >html</span
                  >
                  <span
                    class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs"
                    >SQL</span
                  >
                  <span
                    class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs"
                    >Css</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="https://hermane4.github.io/nutriboost/ "
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >Liens vers le site</a
                  >
                  <a
                    href="https://github.com/hermane4/nutriboost.git "
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>

            <!-- Project 2 -->
            <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img src="/src/assets/cvc.png" alt="Project" class="w-full h-48 object-cover" />
                <div class="absolute top-4 right-4">
                  <!-- <span
                    class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                  ></span> -->
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Communauté virtuelle de Cocody
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  C'est le site officiel de la communauté Virtuelle de Cocody
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >Vue js</span
                  >
                  <span
                    class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs"
                    >Email js
                  </span>
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >tailwind css</span
                  >
                  <span
                    class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs"
                    >JavaScript</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="https://communaute-virtuelle-cocody-gfvp.vercel.app/ "
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >liens vers le site</a
                  >
                  <a
                    href="#"
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>

            <!-- Project 3 -->
            <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop"
                  alt="Project"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute top-4 right-4">
                  <span class="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    SGEC-YAKRO</span
                  >
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Systeme de gestion des actes civil de yamousoukro
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  gérer les Actes civil de yamoussoukro
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs"
                    >php</span
                  >
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >html</span
                  >
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >Api</span
                  >
                  <span
                    class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs"
                    >JavaScript</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >liens vers le site</a
                  >
                  <a
                    href="#"
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div>

            <!-- Project 4 -->
            <!-- <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
                  alt="Project"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute top-4 right-4">
                  <span class="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >Web3</span
                  >
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  DeFi Trading Platform
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Decentralized finance platform for cryptocurrency trading with smart contract
                  integration.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs"
                    >Solidity</span
                  >
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >Web3.js</span
                  >
                  <span
                    class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs"
                    >Ethereum</span
                  >
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >Next.js</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >Live Demo</a
                  >
                  <a
                    href="#"
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div> -->

            <!-- Project 5 -->
            <!-- <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop"
                  alt="Project"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute top-4 right-4">
                  <span class="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >SaaS</span
                  >
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Video Streaming Platform
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Scalable video streaming service with CDN integration and real-time chat
                  functionality.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs"
                    >Node.js</span
                  >
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >WebRTC</span
                  >
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >AWS S3</span
                  >
                  <span
                    class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs"
                    >Socket.io</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >Live Demo</a
                  >
                  <a
                    href="#"
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div> -->

            <!-- Project 6 -->
            <!-- <div
              class="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
                  alt="Project"
                  class="w-full h-48 object-cover"
                />
                <div class="absolute top-4 right-4">
                  <span class="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >Open Source</span
                  >
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Developer Tools CLI
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  Command-line tool for automating development workflows with plugin architecture.
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs"
                    >Node.js</span
                  >
                  <span
                    class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs"
                    >CLI</span
                  >
                  <span
                    class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs"
                    >NPM</span
                  >
                </div>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >NPM Package</a
                  >
                  <a
                    href="#"
                    class="text-gray-600 dark:text-gray-400 hover:underline text-sm font-medium"
                    >GitHub</a
                  >
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div class="max-w-4xl mx-auto px-4">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Travaillons ensemble</h2>
            <p class="text-xl text-blue-100">
              Prêt à donner vie à vos idées ? Discutons de votre prochain projet.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Info -->
            <div class="space-y-8">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span class="text-xl">📧</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Email</h3>
                  <p class="text-blue-100">hermanenguessan525@gmail.com</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span class="text-xl">📱</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Télphone</h3>
                  <p class="text-blue-100">+225 01 51 60 04 02</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span class="text-xl">📍</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold">Localisation</h3>
                  <p class="text-blue-100">Abidjan , cocody</p>
                </div>
              </div>

              <!-- Social Links -->
              <div class="pt-8">
                <h3 class="text-lg font-semibold mb-4">Me Contacter</h3>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span class="text-sm">💼</span>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span class="text-sm">🐙</span>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span class="text-sm">🐦</span>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <span class="text-sm">📚</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div class="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <form @submit.prevent="sendEmail" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium mb-2">Nom</label>
                  <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="ton nom"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium mb-2">Email</label>
                  <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="yao.email@example.com"
                  />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium mb-2">Object</label>
                  <input
                    v-model="form.object"
                    type="text"
                    id="subject"
                    name="subject"
                    class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder=" Discuton du projet"
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    v-model="form.message"
                    id="message"
                    name="message"
                    rows="4"
                    class="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    placeholder="Parler moi de votre projet..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Envoyé
                </button>
              </form>

              <!-- message de confirmation -->

              <div
                v-if="succesMessage"
                class="mt-6 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700 text-center"
              >
                ✅ {{ succesMessage }}
              </div>

              <div
                v-if="errorMessage"
                class="mt-6 p-4 bg-red-100 border border-red-400 rounded-lg text-red-700 text-center"
              >
                ❌ {{ errorMessage }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <p class="text-gray-400">© 2025 Hermane junior . Construit avec passion.</p>
        </div>
      </footer>
    </body>
  </div>
</template>

<!-- Scripts -->
<script setup>
import { ref } from 'vue'

import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  object: '',
  message: '',
})

const succesMessage = ref('')
const errorMessage = ref('')

const sendEmail = async () => {
  try {
    const response = await emailjs.send(
      'service_ryimbwc',
      'template_t2emtn5',

      {
        name: form.value.name,
        email: form.value.email,
        object: form.value.object,
        message: form.value.message,
      },
      'CTYOM3-o21mmbN9X1',
    )

    console.log('✅ Email envoyé avec succès:', response)

    succesMessage.value = 'Merci ! Votre message a été envoyé avec succès.'
    errorMessage.value = ' '
    form.value = { name: '', email: '', object: '', message: '' }
  } catch (error) {
    console.error('❌ Erreur:', error)
    errorMessage.value = "Une erreur s'est produite. Veuillez réessayer. "
    succesMessage.value = ' '
  }
}

// Dark mode toggle
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'))
}

// Initialize dark mode from localStorage
document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark')
  }

  // Initialize skill bar animations
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.progress-bar')
        skillBars.forEach(function (bar) {
          bar.style.animation = 'progress 2s ease-in-out forwards'
        })
        observer.unobserve(entry.target)
      }
    })
  })

  const skillsSection = document.querySelector('#skills')
  if (skillsSection) {
    observer.observe(skillsSection)
  }
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

// tailwind.config = {
//   darkMode: 'class',
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 0.5s ease-in',
//         'slide-up': 'slideUp 0.6s ease-out',
//         progress: 'progress 2s ease-in-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//         progress: {
//           '0%': { width: '0%' },
//           '100%': { width: 'var(--progress-width)' },
//         },
//       },
//     },
//   },
// }
</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
  .print-break {
    page-break-before: always;
  }
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
  .shadow-lg {
    box-shadow: none !important;
  }
}
.progress-bar {
  animation: progress 2s ease-in-out forwards;
}
</style>
