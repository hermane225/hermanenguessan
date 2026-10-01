<template>
  <section id="experience" class="section">
    <div class="container-x">
      <div v-reveal>
        <span class="eyebrow">Parcours</span>
        <h2 class="section-title">Expérience</h2>
      </div>

      <!-- Frise chronologique -->
      <ol class="relative mt-14 space-y-8 pl-8 sm:pl-12">
        <span
          class="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-accent via-white/15 to-transparent sm:left-[11px]"
        ></span>

        <li v-for="job in experiences" :key="job.company" v-reveal class="relative">
          <span
            class="absolute -left-8 top-8 grid h-4 w-4 place-items-center rounded-full bg-ink ring-2 ring-accent sm:-left-12 sm:h-6 sm:w-6"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2"></span>
          </span>

          <div v-spotlight class="card p-6 sm:p-8">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-4">
                <span
                  class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-bold text-accent"
                >
                  {{ job.initials }}
                </span>
                <div>
                  <h3 class="text-lg font-semibold sm:text-xl">{{ job.role }}</h3>
                  <p class="text-sm font-medium text-accent">{{ job.company }}</p>
                </div>
              </div>
              <span class="chip self-start font-mono sm:self-center">{{ job.period }}</span>
            </div>

            <ul class="mt-6 space-y-3">
              <li
                v-for="point in job.points"
                :key="point"
                class="flex items-start gap-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
                {{ point }}
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tech in job.stack" :key="tech" class="chip">{{ tech }}</span>
            </div>
          </div>
        </li>
      </ol>

      <!-- Formation -->
      <h3 v-reveal class="mt-20 text-2xl font-bold sm:text-3xl">Formation académique</h3>
      <div class="mt-8 grid gap-5 md:grid-cols-2">
        <div
          v-for="(item, i) in education"
          :key="item.title"
          v-reveal="i * 100"
          v-spotlight
          class="card p-7 sm:p-9"
        >
          <span class="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent">
            <AppIcon name="award" class="h-6 w-6" />
          </span>
          <h4 class="mt-6 text-xl font-semibold">{{ item.title }}</h4>
          <p class="mt-3 text-base font-medium text-white">{{ item.school }}</p>
          <p class="mt-1 font-mono text-xs uppercase tracking-widest text-accent">{{ item.meta }}</p>
          <p v-if="item.summary" class="mt-5 text-sm leading-relaxed text-muted sm:text-[15px]">
            {{ item.summary }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { education, experiences } from '@/data/portfolio'
</script>
