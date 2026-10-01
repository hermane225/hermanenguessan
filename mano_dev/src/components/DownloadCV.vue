<template>
  <div>
    <button
      type="button"
      class="btn btn-ghost w-full"
      :class="compact ? 'px-4 py-2 text-xs' : ''"
      @click="downloadCV"
    >
      <AppIcon name="download" class="h-4 w-4" :class="{ 'animate-bounce': isDownloading }" />
      {{ compact ? 'Mon CV' : 'Télécharger mon CV' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'

defineProps({
  compact: { type: Boolean, default: false },
})

const isDownloading = ref(false)

function downloadCV() {
  isDownloading.value = true

  // Création d'un lien temporaire pour le téléchargement
  const link = document.createElement('a')
  link.href = '/CV_Hermane_Nguessan.pdf' // chemin vers le CV dans /public/
  link.download = 'CV_Hermane_Nguessan.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  setTimeout(() => {
    isDownloading.value = false
  }, 2000)
}
</script>
