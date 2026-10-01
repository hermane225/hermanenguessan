<template>
  <div class="phone-stage relative mx-auto w-full max-w-[15.5rem] sm:max-w-[17.5rem]">
    <!-- Halo aux couleurs de l'application -->
    <div class="phone-glow absolute -inset-10 rounded-full"></div>

    <div v-tilt="9" class="relative">
      <div class="animate-float">
        <div class="phone relative rounded-[2.6rem] p-2.5">
          <div class="relative aspect-[9/16] overflow-hidden rounded-[2rem] bg-white">
            <!-- Captures d'écran qui défilent -->
            <template v-if="screen.type === 'slides'">
              <img
                v-for="(slide, i) in screen.slides"
                :key="slide.label"
                :src="slide.image"
                :alt="`${name} — écran ${slide.label}`"
                class="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                :class="i === current ? 'scale-100 opacity-100' : 'scale-105 opacity-0'"
                loading="lazy"
              />
            </template>

            <!-- Écran d'accueil composé à partir du logo et de l'illustration de l'application -->
            <div v-else class="flex h-full flex-col bg-white">
              <div class="flex flex-1 items-center justify-center px-8 pt-6">
                <img :src="logo" :alt="`Logo ${name}`" class="w-full max-w-[9.5rem]" />
              </div>
              <img :src="screen.image" alt="" class="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div class="flex flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center">
                <p class="font-display text-[15px] font-bold leading-tight text-slate-900">{{ tagline }}</p>
                <span class="welcome-cta w-full rounded-full py-2.5 text-xs font-semibold text-white">
                  Commencer
                </span>
              </div>
            </div>

            <!-- Caméra : assez petite pour tenir dans la barre d'état des captures -->
            <div class="absolute left-1/2 top-[3px] h-2 w-2 -translate-x-1/2 rounded-full bg-black"></div>
          </div>
        </div>
      </div>

      <!-- Étiquettes flottantes -->
      <span
        v-for="(label, i) in highlights"
        :key="label"
        class="highlight absolute flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-ink/85 px-3 py-1.5 text-[11px] font-semibold sm:px-3.5 sm:py-2 sm:text-xs text-white shadow-xl shadow-black/40 backdrop-blur-md"
        :class="i === 0 ? '-left-3 top-[22%] animate-float-slow sm:-left-24' : '-right-3 bottom-[34%] animate-float sm:-right-24'"
      >
        <span class="highlight-dot h-2 w-2 rounded-full"></span>
        {{ label }}
      </span>
    </div>

    <!-- Sélecteur d'écran -->
    <div v-if="screen.type === 'slides'" class="relative -mx-2 mt-7 flex flex-wrap justify-center gap-1.5">
      <button
        v-for="(slide, i) in screen.slides"
        :key="slide.label"
        type="button"
        class="rounded-full px-3 py-2 text-[11px] font-medium transition-all duration-300"
        :class="i === current ? 'slide-tab-active text-white' : 'bg-white/5 text-muted hover:text-white'"
        @click="select(i)"
      >
        {{ slide.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  logo: { type: String, required: true },
  tagline: { type: String, default: '' },
  screen: { type: Object, required: true },
  highlights: { type: Array, default: () => [] },
})

const current = ref(0)
let timer

function start() {
  if (props.screen.type !== 'slides') return
  timer = setInterval(() => {
    current.value = (current.value + 1) % props.screen.slides.length
  }, 3200)
}

function select(index) {
  current.value = index
  clearInterval(timer)
  start()
}

onMounted(start)
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped>
.phone {
  background: linear-gradient(145deg, #2a2f3a, #0b0d12 55%);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.12),
    0 50px 90px -30px rgba(0, 0, 0, 0.9),
    0 30px 80px -30px var(--brand);
}

.phone-glow {
  background: radial-gradient(closest-side, var(--brand), transparent);
  opacity: 0.28;
  filter: blur(30px);
}

.welcome-cta,
.slide-tab-active {
  background: var(--brand);
}

.highlight-dot {
  background: var(--brand2);
  box-shadow: 0 0 10px var(--brand2);
}
</style>
