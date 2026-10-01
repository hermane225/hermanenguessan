<template>
  <header class="no-print fixed inset-x-0 top-0 z-50">
    <!-- Barre de progression de lecture -->
    <div
      class="h-0.5 origin-left bg-gradient-to-r from-accent via-amber-200 to-mint"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>

    <div class="container-x">
      <nav
        class="mt-3 flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5"
        :class="
          scrolled || menuOpen
            ? 'border-white/10 bg-ink/75 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        "
      >
        <a href="#home" class="flex items-center gap-2.5" @click="menuOpen = false">
          <span
            class="grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-sm font-bold text-ink"
          >
            M
          </span>
          <span class="font-display text-base font-semibold text-white">{{ profile.brand }}</span>
        </a>

        <ul class="hidden items-center gap-1 lg:flex">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300"
              :class="active === link.id ? 'text-white' : 'text-muted hover:text-white'"
            >
              <span
                v-if="active === link.id"
                class="absolute inset-0 -z-10 rounded-full bg-white/10"
              ></span>
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <DownloadCV class="hidden sm:block" compact />
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            :aria-expanded="menuOpen"
            aria-label="Ouvrir le menu"
            @click="menuOpen = !menuOpen"
          >
            <AppIcon :name="menuOpen ? 'close' : 'menu'" class="h-5 w-5" />
          </button>
        </div>
      </nav>

      <!-- Menu mobile -->
      <Transition name="menu">
        <div
          v-if="menuOpen"
          class="mt-2 rounded-3xl border border-white/10 bg-ink/90 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl lg:hidden"
        >
          <a
            v-for="(link, i) in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="menu-link flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium"
            :class="active === link.id ? 'bg-white/10 text-white' : 'text-slate-300'"
            :style="{ animationDelay: `${i * 45}ms` }"
            @click="menuOpen = false"
          >
            {{ link.label }}
            <span class="font-mono text-xs text-muted">0{{ i + 1 }}</span>
          </a>
          <div class="p-2 pt-3 sm:hidden">
            <DownloadCV />
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import DownloadCV from './DownloadCV.vue'
import { navLinks, profile } from '@/data/portfolio'

const menuOpen = ref(false)
const scrolled = ref(false)
const progress = ref(0)
const active = ref('home')

let ticking = false

function update() {
  ticking = false
  const y = window.scrollY
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrolled.value = y > 24
  progress.value = max > 0 ? Math.min(y / max, 1) : 0

  // Section active = la dernière dont le haut a dépassé le tiers de l'écran
  const line = window.innerHeight / 3
  let current = navLinks[0].id
  for (const { id } of navLinks) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= line) current = id
  }
  active.value = current
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(update)
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

.menu-link {
  animation: menu-link-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

@keyframes menu-link-in {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
}
</style>
