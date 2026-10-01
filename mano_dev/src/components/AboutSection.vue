<template>
  <section id="about" class="section">
    <div class="container-x">
      <div v-reveal>
        <span class="eyebrow">À propos</span>
        <h2 class="section-title">Du concept à l'application <span class="text-gradient">en production</span></h2>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <!-- Texte -->
        <div v-reveal v-spotlight class="card p-6 sm:p-9 md:col-span-2">
          <div class="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              Je suis développeur Full-Stack et Mobile, passionné par la création de solutions numériques à fort
              impact, avec plus de 4 ans d’expérience. Titulaire d’un diplôme en informatique, j’ai construit mon
              parcours à travers différents projets et missions au sein de startups et d’entreprises technologiques,
              où j’ai su transformer des idées en applications performantes et utiles.
            </p>
            <p>
              Je suis spécialisé dans la conception et le développement d’applications web et mobiles avec React
              Native, React.js et Node.js, fort d’une expérience concrète sur des projets académiques et
              professionnels. Je crois en l’écriture d’un code propre et maintenable et au respect des meilleures
              pratiques pour une architecture évolutive.
            </p>
            <p>
              Lorsque je ne suis pas en train de coder, vous me trouverez en train de contribuer à des projets open
              source, d’encadrer des apprenants développeurs ou d’explorer les dernières tendances technologiques.
              Je suis toujours prêt à relever de nouveaux défis et à apprendre les technologies émergentes.
            </p>
          </div>
        </div>

        <!-- Photo -->
        <div v-reveal="120" class="card group min-h-[22rem]">
          <img
            :src="photo"
            alt="Hermane Junior N'Guessan, médaille de la meilleure équipe autour du cou"
            class="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <!-- En bref -->
        <div v-reveal v-spotlight class="card p-6 sm:p-7 md:col-span-2">
          <h3 class="text-lg font-semibold">En bref</h3>
          <dl class="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            <div v-for="fact in facts" :key="fact.label" class="min-w-0">
              <dt class="font-mono text-[11px] uppercase tracking-widest text-muted">{{ fact.label }}</dt>
              <dd class="mt-1 text-sm font-medium text-white [overflow-wrap:anywhere] sm:text-base">
                <a v-if="fact.href" :href="fact.href" class="transition-colors hover:text-accent">{{ fact.value }}</a>
                <template v-else>{{ fact.value }}</template>
              </dd>
            </div>
          </dl>
        </div>

        <!-- Intérêts -->
        <div v-reveal="120" v-spotlight class="card p-6 sm:p-7">
          <h3 class="text-lg font-semibold">Atouts</h3>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="interest in interests" :key="interest" class="chip">{{ interest }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import photo from '@/assets/ja.jpg'
import { interests, profile } from '@/data/portfolio'

const facts = [
  { label: 'Localisation', value: profile.location },
  { label: 'Expérience', value: profile.experience },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Téléphone', value: profile.phone, href: `tel:${profile.phoneHref}` },
]
</script>
