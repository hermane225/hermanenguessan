<template>
  <section id="home" class="relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24">
    <!-- Décor -->
    <div class="bg-grid absolute inset-0"></div>
    <div class="blob -left-32 top-10 h-96 w-96 bg-accent/30"></div>
    <div class="blob -right-24 top-40 h-[28rem] w-[28rem] bg-mint/20" style="animation-delay: -6s"></div>

    <div class="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div
          v-reveal
          class="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-4 text-xs font-medium text-slate-300 backdrop-blur"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inset-0 rounded-full bg-mint" style="animation: pulse-ring 1.8s ease-out infinite"></span>
            <span class="relative h-2 w-2 rounded-full bg-mint"></span>
          </span>
          Disponible pour de nouveaux projets
        </div>

        <p v-reveal="80" class="mt-7 font-mono text-sm uppercase tracking-[0.22em] text-muted">
          {{ profile.name }}
        </p>

        <h1 v-reveal="160" class="mt-4 text-4xl font-bold leading-[1.08] sm:text-6xl lg:text-[4.25rem]">
          Je transforme vos <span class="text-gradient">idées</span> en applications web
          <span class="whitespace-nowrap">& mobiles</span>
        </h1>

        <p v-reveal="240" class="mt-6 flex h-8 items-center whitespace-nowrap font-display text-base text-slate-300 min-[380px]:text-xl sm:text-2xl">
          <span class="mr-2 text-accent">&gt;</span>{{ typed
          }}<span class="ml-0.5 inline-block h-6 w-0.5 bg-accent" style="animation: blink 1s step-end infinite"></span>
        </p>

        <div v-reveal="320" class="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" class="btn btn-primary">
            Commencer un projet
            <AppIcon name="arrow-right" class="h-4 w-4" />
          </a>
          <a href="#projects" class="btn btn-ghost">Voir mes projets</a>
          <DownloadCV class="sm:hidden" />
        </div>

        <dl v-reveal="400" class="mt-12 grid max-w-xs grid-cols-2 gap-6 border-t border-white/10 pt-7">
          <div v-for="stat in stats" :key="stat.label">
            <dt class="sr-only">{{ stat.label }}</dt>
            <dd class="font-display text-3xl font-bold text-white sm:text-4xl">{{ stat.value }}</dd>
            <dd class="mt-1 text-xs leading-snug text-muted sm:text-sm">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- Portrait -->
      <div v-reveal:zoom="200" class="relative mx-auto w-full max-w-sm lg:max-w-none">
        <div class="portrait-ring relative rounded-[2.25rem] p-[2px]">
          <div class="relative overflow-hidden rounded-[2.15rem] bg-surface">
            <img
              :src="portrait"
              alt="Portrait de Hermane Junior N'Guessan"
              class="aspect-[4/5] w-full object-cover object-top"
              width="800"
              height="1000"
            />
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 pt-20">
              <p class="font-display text-lg font-semibold text-white">Hermane Junior</p>
              <p class="font-mono text-xs uppercase tracking-widest text-accent">Développeur Mobile &amp; Full-Stack</p>
            </div>
          </div>
        </div>

        <!-- Pastilles flottantes : les deux applications -->
        <a
          v-for="(app, i) in apps"
          :key="app.id"
          href="#projects"
          class="absolute flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-md transition-colors hover:border-white/30"
          :class="[
            i === 0 ? '-left-3 top-10 animate-float xl:-left-10' : '-right-3 bottom-28 animate-float-slow xl:-right-8',
          ]"
        >
          <span
            class="grid h-9 place-items-center overflow-hidden rounded-xl bg-white"
            :class="app.logoWide ? 'w-16 px-1.5' : 'w-9'"
          >
            <img :src="app.logo" :alt="`Logo ${app.name}`" class="max-h-full w-full object-contain" />
          </span>
          <span>
            <span class="block text-sm font-semibold leading-tight text-white">{{ app.name }}</span>
            <span class="block text-[11px] leading-tight text-muted">{{ app.category }}</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import DownloadCV from './DownloadCV.vue'
import portrait from '@/assets/lepropheteduweb.jpeg'
import { apps, profile } from '@/data/portfolio'

const stats = [
  { value: profile.experience, label: "d'expérience" },
  { value: apps.length, label: 'applications mobiles' },
]

// Effet machine à écrire sur les rôles
const typed = ref(profile.roles[0])
let timer

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let role = 0
  let length = profile.roles[0].length
  let deleting = true

  const tick = () => {
    const full = profile.roles[role]
    let delay = deleting ? 35 : 70

    if (deleting) {
      length -= 1
      if (length === 0) {
        deleting = false
        role = (role + 1) % profile.roles.length
        delay = 350
      }
    } else {
      length += 1
      if (length === full.length) {
        deleting = true
        delay = 2200
      }
    }

    typed.value = profile.roles[role].slice(0, length)
    timer = setTimeout(tick, delay)
  }

  timer = setTimeout(tick, 2200)
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
/* Bordure dégradée en rotation autour du portrait */
.portrait-ring {
  overflow: hidden;
  box-shadow: 0 40px 90px -40px rgba(255, 122, 26, 0.55);
}

.portrait-ring::before {
  content: '';
  position: absolute;
  inset: -60%;
  background: conic-gradient(from 0deg, #ff7a1a, transparent 25%, #2fd98a 50%, transparent 75%, #ff7a1a);
  animation: spin-slow 7s linear infinite;
}
</style>
