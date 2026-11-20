/**
 * v-reveal: 화면에 들어올 때 아래에서 떠오르며 나타난다. v-reveal="120" 처럼 숫자를 주면 그만큼(ms) 늦게.
 * 숨기는 것은 CSS(.reveal-on .reveal)가 하고, <head> 의 짧은 스크립트가 html 에 reveal-on 을 붙인다(nuxt.config.ts).
 * 이 플러그인이 3초 안에 돌지 못하면(스크립트가 안 받아지면) 그 스크립트가 모두 보이게 한다. 동작 줄이기면 숨기지도 움직이지도 않는다.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let io: IntersectionObserver | undefined
  if (import.meta.client) {
    io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        io?.unobserve(entry.target)
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' })
    document.documentElement.classList.add('reveal-ready')
  }

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: binding => ({ class: 'reveal', style: binding.value ? { '--d': `${binding.value}ms` } : undefined }),
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.setProperty('--d', `${binding.value}ms`)
      io?.observe(el)
    },
    unmounted(el) {
      io?.unobserve(el)
    },
  })
})
