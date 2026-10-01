<template>
  <footer class="relative overflow-hidden border-t border-line bg-surface">
    <div class="blob -top-40 left-1/4 h-72 w-72 bg-accent/10"></div>

    <div class="container-x relative">
      <!-- Appel à l'action -->
      <div
        class="flex flex-col items-start justify-between gap-8 border-b border-line py-14 md:flex-row md:items-center"
      >
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.2em] text-accent">Un projet en tête ?</p>
          <p class="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Construisons votre application <span class="text-gradient">ensemble</span>.
          </p>
        </div>
        <a :href="`mailto:${profile.email}`" class="btn btn-primary shrink-0">
          <AppIcon name="mail" class="h-4 w-4" />
          M'écrire
        </a>
      </div>

      <div class="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <!-- Présentation -->
        <div class="sm:col-span-2 lg:col-span-4">
          <div class="flex items-center gap-4">
            <img :src="logo" alt="Logo Mano Dev" class="h-14 w-14 rounded-2xl object-cover" loading="lazy" />
            <div>
              <p class="font-display text-lg font-semibold text-white">Hermane Junior N'Guessan</p>
              <p class="text-sm text-muted">Développeur Mobile & Full-Stack</p>
            </div>
          </div>
          <p class="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Je conçois et développe des applications web et mobiles, de l'idée à la mise en production.
          </p>
          <a
            :href="profile.github"
            target="_blank"
            rel="noopener"
            class="footer-link mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-white/30"
          >
            <AppIcon name="github" class="h-4 w-4" />
            GitHub
          </a>
        </div>

        <!-- Plan du site -->
        <nav class="no-print lg:col-span-2" aria-label="Plan du site">
          <h3 class="footer-title">Plan du site</h3>
          <ul class="mt-4 space-y-1">
            <li v-for="link in navLinks" :key="link.id">
              <a :href="`#${link.id}`" class="footer-link inline-block py-1.5">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <!-- Applications -->
        <div class="lg:col-span-2">
          <h3 class="footer-title">Sur Google Play</h3>
          <ul class="mt-4 space-y-1">
            <li v-for="app in apps" :key="app.id">
              <a :href="app.playStore" target="_blank" rel="noopener" class="footer-link inline-flex items-center gap-1.5 py-1.5">
                {{ app.name }}
                <AppIcon name="arrow-up-right" class="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Coordonnées -->
        <div class="lg:col-span-4">
          <h3 class="footer-title">Coordonnées</h3>
          <ul class="mt-4 space-y-1">
            <li>
              <a :href="`mailto:${profile.email}`" class="footer-link inline-flex items-center gap-2.5 py-1.5 !text-[13px] [overflow-wrap:anywhere] sm:!text-sm">
                <AppIcon name="mail" class="h-4 w-4 shrink-0 text-accent" />
                {{ profile.email }}
              </a>
            </li>
            <li>
              <a :href="`tel:${profile.phoneHref}`" class="footer-link inline-flex items-center gap-2.5 py-1.5">
                <AppIcon name="phone" class="h-4 w-4 shrink-0 text-accent" />
                {{ profile.phone }}
              </a>
            </li>
            <li class="flex items-center gap-2.5 py-1.5 text-sm text-muted">
              <AppIcon name="map-pin" class="h-4 w-4 shrink-0 text-accent" />
              {{ profile.location }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Mentions -->
      <div
        class="flex flex-col items-center justify-between gap-3 border-t border-line pb-24 pt-6 text-center text-xs text-muted sm:flex-row sm:pb-6 sm:text-left"
      >
        <p>© {{ year }} Hermane Junior N'Guessan. Tous droits réservés.</p>
      </div>
    </div>

    <!-- Signature -->
    <p class="wordmark pointer-events-none select-none text-center font-display font-bold" aria-hidden="true">
      {{ profile.brand }}
    </p>

    <!-- Retour en haut -->
    <Transition name="to-top">
      <a
        v-if="showTop"
        href="#home"
        aria-label="Retour en haut"
        class="no-print fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-accent text-ink shadow-lg shadow-accent/40 transition-transform hover:-translate-y-1"
      >
        <AppIcon name="arrow-up" class="h-5 w-5" />
      </a>
    </Transition>
  </footer>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import logo from '@/assets/mdev.jpg'
import { apps, navLinks, profile } from '@/data/portfolio'

const year = new Date().getFullYear()
const showTop = ref(false)

function onScroll() {
  showTop.value = window.scrollY > 700
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.footer-title {
  @apply font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400;
}

.footer-link {
  @apply text-sm text-muted transition-colors duration-200 hover:text-white;
}

/* Grand nom en filigrane, coupé par le bas de page */
.wordmark {
  font-size: clamp(4rem, 19vw, 17rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  margin-bottom: -0.12em;
  white-space: nowrap;
  color: transparent;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  background-clip: text;
}

.to-top-enter-active,
.to-top-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.to-top-enter-from,
.to-top-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.8);
}
</style>
