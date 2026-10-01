<template>
  <section class="relative overflow-hidden border-y border-line bg-surface/50 py-20 sm:py-28">
    <div class="blob left-1/3 top-0 h-80 w-80 bg-accent/15"></div>

    <div class="container-x relative grid items-center gap-12 md:grid-cols-2">
      <div v-reveal:left>
        <span class="font-display text-7xl leading-none text-accent/60">“</span>
        <h2 class="-mt-4 text-3xl font-bold leading-tight sm:text-5xl">
          Je suis le prophète du web, parce que
          <span class="text-gradient">je c<span class="font-mono">&lt;/&gt;</span>de par révélation</span>
        </h2>
        <p class="mt-6 text-base leading-relaxed text-muted sm:text-lg">
          Chaque grande idée commence par une simple pensée. Le code, ce n’est pas seulement des lignes écrites sur
          un écran, c’est la traduction d’un rêve en réalité. Si tu peux l’imaginer, tu peux le coder. Et si tu peux
          le coder, tu peux changer le monde.
        </p>
      </div>

      <div v-reveal:right class="relative mx-auto w-full max-w-sm">
        <div class="absolute -inset-3 rotate-3 rounded-[2rem] border border-accent/40"></div>
        <img
          :src="photo"
          alt="Hermane Junior N'Guessan, casque autour du cou"
          class="relative aspect-[4/5] w-full -rotate-2 rounded-[2rem] object-cover object-center transition-transform duration-700 hover:rotate-0"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import photo from '@/assets/we.jpg'
</script>
