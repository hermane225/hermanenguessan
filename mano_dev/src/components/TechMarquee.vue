<template>
  <div class="marquee relative overflow-hidden border-y border-line bg-surface/60 py-5" aria-hidden="true">
    <div class="marquee-track flex w-max items-center">
      <!-- La liste est doublée pour que la boucle soit continue -->
      <template v-for="copy in 2" :key="copy">
        <span
          v-for="item in marquee"
          :key="`${copy}-${item}`"
          class="flex items-center font-display text-lg font-medium text-slate-400 sm:text-xl"
        >
          <span class="px-6 sm:px-8">{{ item }}</span>
          <span class="text-accent">✦</span>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
import { marquee } from '@/data/portfolio'
</script>

<style scoped>
.marquee {
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.marquee-track {
  animation: marquee 38s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}
</style>
