// 별명 랜딩. 빌드 없는 정적 사이트로 만든다(`nuxt generate` → Vercel). 디자인 값은 앱 저장소 src/constants/theme.ts 와 같다
export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  devtools: { enabled: false },
  telemetry: false,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0D0E12' },
        // 네이버 서치어드바이저 소유 확인. 지우면 네이버 소유 확인이 풀린다
        { name: 'naver-site-verification', content: 'f55d3e68b4898e7d0fe3f59ba967b71dc7f140ab' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ko_KR' },
        { property: 'og:site_name', content: '별명' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        // 글꼴: Pretendard 공식 배포(쓰는 글자만 내려받는 동적 서브셋). 앱과 같은 굵기 400 · 500 · 600 만 쓴다
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' },
        { rel: 'stylesheet', crossorigin: '', href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css' },
      ],
    },
  },
  nitro: {
    prerender: { crawlLinks: true, routes: ['/'] },
  },
})
