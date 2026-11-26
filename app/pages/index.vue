<script setup lang="ts">
import { faq } from '~/data/faq'

const site = 'https://byeolmyeong.com'

// 검색 결과의 제목 · 설명에는 사람들이 실제로 찾는 말(출생 차트 · 네이탈 차트 · 점성술)을 넣는다. 링크 미리보기는 og 값을 쓴다. 궁합은 1.1.0 이라 넣지 않는다(앱 결정 055)
useSeoMeta({
  title: '별명 | 점성술 몰라도 읽히는 출생 차트 풀이',
  description: '생년월일과 태어난 시각, 태어난 곳으로 출생 차트(네이탈 차트)를 계산해서 점성술 용어 없이 나를 설명하는 별명과 풀이로 바꿔 드려요. 성격과 연애, 일과 감정, 이번 달과 올해의 시기, 매일의 오늘의 하늘까지 지금은 무료로 볼 수 있어요.',
  ogTitle: '별명 | 태어난 순간의 하늘로 읽는 나',
  ogDescription: '점성술을 몰라도 읽히는 나의 별명, 매일의 오늘의 하늘까지.',
  ogUrl: `${site}/`,
  ogImage: `${site}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: '빛나는 별 캐릭터 별이와 "점성술을 몰라도 읽히는 나의 별명" 문구, 별명 로고',
  twitterCard: 'summary_large_image',
  twitterImage: `${site}/og.png`,
})

// 검색엔진용 구조화 정보. 가격(무료)은 1.1.0 에서 유료 기능이 붙으면 고친다
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site}/#org`,
      name: '별명',
      url: `${site}/`,
      logo: `${site}/icon-512.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: `${site}/`,
      name: '별명',
      inLanguage: 'ko-KR',
      publisher: { '@id': `${site}/#org` },
    },
    {
      '@type': 'SoftwareApplication',
      name: '별명',
      url: `${site}/`,
      image: `${site}/og.png`,
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'iOS, Android, Web',
      inLanguage: 'ko-KR',
      description: '태어난 순간의 하늘을 계산한 출생 차트를 점성술 용어 없이 나를 설명하는 별명과 풀이로 바꿔 주는 서양 점성술 앱. 성격 · 연애 · 관계 · 일 · 감정, 이번 달 · 올해 · 인생의 시기, 매일의 오늘의 하늘을 함께 본다.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
      publisher: { '@id': `${site}/#org` },
    },
  ],
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

useHead({
  link: [{ rel: 'canonical', href: `${site}/` }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(graph) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqPage) },
  ],
})
</script>

<!-- 디딧 랜딩의 구조: 첫 화면 → Why → 이렇게 써요 → 주요 기능(+약속) → 자주 묻는 질문 → 다운로드. 글 · 값은 캔버스 "랜딩" L1 보드 그대로 -->
<template>
  <div class="landing">
    <LandingHeroSection />
    <LandingWhySection />
    <LandingFlowSection />
    <LandingFeatureSection />
    <LandingPromiseSection />
    <LandingFaqSection />
    <LandingCtaSection />
  </div>
</template>
