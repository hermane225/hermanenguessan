import { createRouter, createWebHistory } from 'vue-router'
// import pageAccueil from '@/components/pageAccueil.vue'
// import footerPage from '@/components/footerPage.vue'
import testPage from '@/components/testPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'pageAccuiel',
    //   component: pageAccueil,
    // },

    // {
    //   path: '/footerPage',
    //   name: 'footerPage',
    //   component: footerPage,
    // },

    {
      path: '/',
      name: 'testPage',
      component: testPage,
    },
  ],
})

export default router
