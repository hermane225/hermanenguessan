<template>
  <section id="contact" class="section overflow-hidden">
    <div class="blob -bottom-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 bg-accent/20"></div>

    <div class="container-x relative">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <span class="eyebrow">Contact</span>
        <h2 class="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Travaillons <span class="text-gradient">ensemble</span>
        </h2>
        <p class="mt-5 text-base text-muted sm:text-lg">
          Prêt à donner vie à vos idées ? Discutons de votre prochain projet.
        </p>
      </div>

      <div class="mt-14 grid gap-5 lg:grid-cols-5">
        <!-- Coordonnées -->
        <div class="min-w-0 space-y-5 lg:col-span-2">
          <component
            :is="item.href ? 'a' : 'div'"
            v-for="(item, i) in contacts"
            :key="item.label"
            v-reveal:left="i * 100"
            v-spotlight
            :href="item.href"
            class="card group flex items-center gap-4 p-4 sm:p-5"
          >
            <span
              class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent transition-transform duration-300 group-hover:scale-110"
            >
              <AppIcon :name="item.icon" class="h-5 w-5" />
            </span>
            <span class="min-w-0">
              <span class="block font-mono text-[11px] uppercase tracking-widest text-muted">{{ item.label }}</span>
              <span class="mt-0.5 block text-sm font-medium text-white [overflow-wrap:anywhere] sm:text-base">
                {{ item.value }}
              </span>
            </span>
          </component>

          <a
            v-reveal:left="300"
            :href="profile.github"
            target="_blank"
            rel="noopener"
            class="btn btn-ghost w-full"
          >
            <AppIcon name="github" class="h-4 w-4" />
            Mon GitHub
          </a>
        </div>

        <!-- Formulaire -->
        <div v-reveal:right v-spotlight class="card p-5 sm:p-9 lg:col-span-3">
          <form class="grid gap-5 sm:grid-cols-2" @submit.prevent="sendEmail">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-slate-300">Nom</label>
              <input id="name" v-model="form.name" type="text" name="name" required class="field" placeholder="Votre nom" />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-slate-300">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                required
                class="field"
                placeholder="yao.email@example.com"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="subject" class="mb-2 block text-sm font-medium text-slate-300">Objet</label>
              <input
                id="subject"
                v-model="form.object"
                type="text"
                name="subject"
                class="field"
                placeholder="Discutons du projet"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="mb-2 block text-sm font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="5"
                required
                class="field resize-none"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary sm:col-span-2" :disabled="sending" :class="{ 'opacity-70': sending }">
              <span
                v-if="sending"
                class="h-4 w-4 rounded-full border-2 border-ink/30 border-t-ink"
                style="animation: spin-slow 0.7s linear infinite"
              ></span>
              <AppIcon v-else name="send" class="h-4 w-4" />
              {{ sending ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </form>

          <!-- message de confirmation -->
          <Transition name="notice">
            <p
              v-if="succesMessage"
              class="mt-5 rounded-2xl border border-mint/30 bg-mint/10 p-4 text-center text-sm text-mint"
              role="status"
            >
              {{ succesMessage }}
            </p>
            <p
              v-else-if="errorMessage"
              class="mt-5 rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-center text-sm text-red-300"
              role="alert"
            >
              {{ errorMessage }}
            </p>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { profile } from '@/data/portfolio'

const contacts = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Téléphone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: 'map-pin', label: 'Localisation', value: 'Abidjan, Cocody' },
]

const form = ref({
  name: '',
  email: '',
  object: '',
  message: '',
})

const sending = ref(false)
const succesMessage = ref('')
const errorMessage = ref('')

// Envoi sans backend via FormSubmit : le message arrive directement dans la boîte `profile.email`
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

const sendEmail = async () => {
  sending.value = true
  succesMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        Nom: form.value.name,
        Email: form.value.email,
        Objet: form.value.object,
        Message: form.value.message,
        _subject: `Portfolio — ${form.value.object || `message de ${form.value.name}`}`,
        _replyto: form.value.email,
        _template: 'table',
        _captcha: 'false',
      }),
    })
    const result = await response.json()
    if (!response.ok || String(result.success) !== 'true') throw new Error(result.message || response.statusText)

    succesMessage.value = 'Merci ! Votre message a été envoyé avec succès.'
    form.value = { name: '', email: '', object: '', message: '' }
  } catch (error) {
    console.error("Erreur d'envoi du formulaire :", error)
    errorMessage.value = `Une erreur s'est produite. Vous pouvez m'écrire directement à ${profile.email}.`
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
.notice-enter-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.notice-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
</style>
