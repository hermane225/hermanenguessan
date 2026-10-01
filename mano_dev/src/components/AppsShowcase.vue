<template>
  <section id="projects" class="section">
    <div class="container-x">
      <div v-reveal class="max-w-2xl">
        <span class="eyebrow">Projets</span>
        <h2 class="section-title">Quelques projets <span class="text-gradient">réalisés</span></h2>
        <p class="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Deux applications conçues pour le marché ivoirien, développées de bout en bout : application mobile, API
          et base de données.
        </p>
      </div>

      <div class="mt-14 space-y-8">
        <article
          v-for="(app, i) in apps"
          :key="app.id"
          v-reveal
          v-spotlight
          class="card app-panel"
          :style="{ '--brand': app.brand, '--brand2': app.brand2, '--spot': app.spot }"
        >
          <div class="app-panel-bg absolute inset-0"></div>

          <div class="relative grid items-center gap-12 p-5 sm:p-10 lg:grid-cols-2 lg:gap-8 lg:p-14">
            <!-- Présentation -->
            <div class="min-w-0" :class="{ 'lg:order-2': i % 2 === 1 }">
              <div class="flex items-center gap-4">
                <span
                  class="grid h-14 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg"
                  :class="app.logoWide ? 'w-28 px-3' : 'w-14 p-1.5'"
                >
                  <img :src="app.logo" :alt="`Logo ${app.name}`" class="max-h-full w-full object-contain" />
                </span>
                <div>
                  <p class="app-category font-mono text-[11px] uppercase tracking-[0.2em]">{{ app.category }}</p>
                  <p class="mt-1 text-xs text-muted">{{ app.role }} · {{ app.platforms }}</p>
                </div>
              </div>

              <h3 class="mt-7 text-3xl font-bold sm:text-4xl">{{ app.name }}</h3>
              <p class="mt-2 font-display text-lg text-slate-300">{{ app.tagline }}</p>
              <p class="mt-5 text-[15px] leading-relaxed text-muted sm:text-base">{{ app.description }}</p>

              <ul class="mt-7 space-y-3">
                <li
                  v-for="feature in app.features"
                  :key="feature"
                  class="flex items-start gap-3 text-sm leading-relaxed text-slate-300"
                >
                  <span class="app-check mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full">
                    <AppIcon name="check" class="h-3 w-3" />
                  </span>
                  {{ feature }}
                </li>
              </ul>

              <div class="mt-8 flex flex-wrap gap-2">
                <span v-for="tech in app.stack" :key="tech" class="chip">{{ tech }}</span>
              </div>

              <a
                v-if="app.playStore"
                :href="app.playStore"
                target="_blank"
                rel="noopener"
                class="store-btn btn mt-8 text-center text-white"
              >
                <AppIcon name="play" class="h-4 w-4" />
                Télécharger sur Google Play
                <AppIcon name="arrow-up-right" class="h-4 w-4" />
              </a>
            </div>

            <!-- Téléphone -->
            <div class="min-w-0 py-4" :class="{ 'lg:order-1': i % 2 === 1 }">
              <PhoneMockup
                :name="app.name"
                :logo="app.logo"
                :tagline="app.tagline"
                :screen="app.screen"
                :highlights="app.highlights"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import PhoneMockup from './PhoneMockup.vue'
import { apps } from '@/data/portfolio'
</script>

<style scoped>
.app-panel-bg {
  background:
    radial-gradient(60% 80% at 100% 0%, color-mix(in srgb, var(--brand) 22%, transparent), transparent 70%),
    radial-gradient(50% 70% at 0% 100%, color-mix(in srgb, var(--brand2) 14%, transparent), transparent 70%);
}

.store-btn {
  background: var(--brand);
  box-shadow: 0 12px 30px -12px var(--brand);
}

.store-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.12);
}

.app-category {
  color: color-mix(in srgb, var(--brand) 55%, white);
}

.app-check {
  background: color-mix(in srgb, var(--brand) 25%, transparent);
  color: color-mix(in srgb, var(--brand) 45%, white);
}
</style>
