const REVEAL_DURATION = 900

const observer =
  typeof IntersectionObserver === 'undefined'
    ? null
    : new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const el = entry.target
            observer.unobserve(el)
            el.classList.add('is-visible')
            // Une fois l'animation terminée, on rend la main aux transitions propres à l'élément (hover, etc.)
            setTimeout(() => {
              el.classList.remove('reveal', 'reveal-left', 'reveal-right', 'reveal-zoom', 'is-visible')
              el.style.removeProperty('--reveal-delay')
            }, REVEAL_DURATION + (el._revealDelay || 0))
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )

// v-reveal, v-reveal:left, v-reveal:right, v-reveal:zoom — la valeur est un délai en ms
export const reveal = {
  mounted(el, binding) {
    if (!observer) return
    el.classList.add('reveal')
    if (binding.arg) el.classList.add(`reveal-${binding.arg}`)
    if (binding.value) {
      el._revealDelay = binding.value
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}

// v-spotlight — expose la position du curseur à la classe .card
export const spotlight = {
  mounted(el) {
    el._onSpot = (e) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    el.addEventListener('pointermove', el._onSpot)
  },
  unmounted(el) {
    el.removeEventListener('pointermove', el._onSpot)
  },
}

// v-tilt — inclinaison 3D qui suit le curseur ; la valeur est l'angle max en degrés
export const tilt = {
  mounted(el, binding) {
    const max = binding.value || 10
    el.style.transition = 'transform 0.25s ease-out'
    el.style.transformStyle = 'preserve-3d'
    el._onTilt = (e) => {
      if (e.pointerType === 'touch') return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(1100px) rotateY(${x * max * 2}deg) rotateX(${-y * max * 2}deg)`
    }
    el._onTiltEnd = () => {
      el.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)'
    }
    el.addEventListener('pointermove', el._onTilt)
    el.addEventListener('pointerleave', el._onTiltEnd)
  },
  unmounted(el) {
    el.removeEventListener('pointermove', el._onTilt)
    el.removeEventListener('pointerleave', el._onTiltEnd)
  },
}
