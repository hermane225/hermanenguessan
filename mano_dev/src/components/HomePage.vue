<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <TechMarquee />
    <AboutSection />
    <ExperienceSection />
    <QuoteSection />
    <SkillsSection />
    <AppsShowcase />
    <ContactSection />
  </main>
  <TheFooter />
</template>

<script setup>
import TheNavbar from './TheNavbar.vue'
import HeroSection from './HeroSection.vue'
import TechMarquee from './TechMarquee.vue'
import AboutSection from './AboutSection.vue'
import AppsShowcase from './AppsShowcase.vue'
import ExperienceSection from './ExperienceSection.vue'
import QuoteSection from './QuoteSection.vue'
import SkillsSection from './SkillsSection.vue'
import ContactSection from './ContactSection.vue'
import TheFooter from './TheFooter.vue'
</script>
