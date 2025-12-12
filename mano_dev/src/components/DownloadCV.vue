<template>
  <div class="text-center">
    <button
      @click="downloadCV"
      class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
    >
      Télécharger mon CV
    </button>
    <!-- <p v-if="isDownloading" class="mt-2 text-sm text-gray-500">Téléchargement en cours...</p> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDownloading = ref(false)

function downloadCV() {
  isDownloading.value = true

  // Créaction d'un lien temporaire pour le téléchargement
  const link = document.createElement('a')
  link.href = '/CV_Hermane_Nguessan.pdf' // chemin vers le CV dans /public/
  link.download = '/CV_Hermane_Nguessan.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Optionnel : masquer le message après 2 secondes
  setTimeout(() => {
    isDownloading.value = false
  }, 2000)
}
</script>
