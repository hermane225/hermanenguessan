<template>
  <section id="skills" class="section">
    <div class="container-x">
      <div v-reveal>
        <span class="eyebrow">Compétences</span>
        <h2 class="section-title">Ma boîte à <span class="text-gradient">outils</span></h2>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.title"
          v-reveal="i * 90"
          v-spotlight
          class="card p-6 hover:-translate-y-1.5"
        >
          <span class="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent">
            <AppIcon :name="group.icon" class="h-5 w-5" />
          </span>
          <h3 class="mt-5 text-lg font-semibold">{{ group.title }}</h3>
          <ul class="mt-4 space-y-2.5">
            <li v-for="item in group.items" :key="item" class="flex items-center gap-2.5 text-sm text-slate-300">
              <span class="h-1 w-3 rounded-full bg-gradient-to-r from-accent to-mint"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div v-reveal v-spotlight class="card mt-5 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
        <div class="flex shrink-0 items-center gap-4">
          <img :src="logo" alt="Logo Mano Dev" class="h-14 w-14 rounded-2xl object-cover" loading="lazy" />
          <h3 class="text-lg font-semibold">Langues</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="language in languages" :key="language" class="chip py-1.5 text-[13px]">
            <span class="h-1.5 w-1.5 rounded-full bg-mint"></span>
            {{ language }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import logo from '@/assets/mdev.jpg'
import { languages, skillGroups } from '@/data/portfolio'
</script>
