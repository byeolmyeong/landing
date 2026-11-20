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
      ],
      // 글꼴 CSS 는 화면 그리기를 막지 않게 스크립트로 붙인다(성능 — 휴대폰에서 첫 글자가 0.8초 늦던 것). 오기 전에는 시스템 글꼴로 보이고 오면 바뀐다(font-display: swap)
      noscript: [{ innerHTML: '<link rel="stylesheet" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css">' }],
      script: [
        { innerHTML: "(function(){var l=document.createElement('link');l.rel='stylesheet';l.crossOrigin='anonymous';l.href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css';document.head.appendChild(l)})()" },
        // 나타나는 움직임(app/plugins/reveal.ts): 그리기 전에 html 에 reveal-on 을 붙여 깜빡임 없이 숨겨 두고, 3초 안에 플러그인이 돌지 못하면 모두 보이게 한다
        { innerHTML: "(function(d){d.classList.add('reveal-on');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.add('reveal-all')},3000)})(document.documentElement)" },
      ],
    },
  },
  nitro: {
    prerender: { crawlLinks: true, routes: ['/'] },
  },
})
