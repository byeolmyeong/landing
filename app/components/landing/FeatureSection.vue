<!-- 주요 기능 여섯: 카드마다 앱 화면의 윗부분. 3열 → 2열(1024 아래) → 1열(640 아래) -->
<script setup lang="ts">
const features = [
  { k: '내 별명', t: '한 줄로 읽는 나', d: '태어난 날의 하늘이 지어 준 별명과, 그렇게 풀이한 이유.', img: '/screens/my-nickname.png', alt: '내 별명 화면: 별명 한 줄과 물병자리 별자리, 나의 중심 · 마음 · 첫인상' },
  { k: '나', t: '성격 · 연애 · 관계 · 일 · 감정', d: '다섯 가지로 나를 더 자세히. 영역마다 한눈에 보기와 작은 실천.', img: '/screens/me-personality.png', alt: '나 탭 성격 화면: 다섯 칩과 성격 한 줄, 키워드' },
  { k: '시기', t: '이번 달 · 올해 · 인생', d: '눈여겨볼 날, 올해의 흐름, 인생의 다음 큰 변화까지.', img: '/screens/timing-year.png', alt: '시기 화면: 지금 나의 시기와 올해의 흐름' },
  { k: '오늘의 하늘', t: '매일 아침 나에게 오는 하늘', d: '오늘의 흐름과 작은 실천 셋. 원하는 시간에 알림으로.', img: '/screens/today-sky.png', alt: '오늘의 하늘 화면' },
  { k: '내 하늘 지도', t: '태어난 순간의 하늘', d: '별마다 있던 자리와 서로의 관계를 그림으로.', img: '/screens/sky-map.png', alt: '내 하늘 지도 화면: 열두 자리 원 위의 해 · 달 · 행성' },
  { k: '공유', t: '인스타그램 스토리로', d: '출생 정보 없이, 별명과 한 줄만 담은 카드.', img: '/screens/share-nickname.png', alt: '공유 카드: 물병자리 별자리와 새벽별 님의 별명' },
]
</script>

<template>
  <section id="features" class="sec deep features" aria-labelledby="features-title">
    <div class="wrap">
      <div v-reveal class="sec-head">
        <span class="eyebrow">Features</span>
        <h2 id="features-title" class="h2">주요 기능</h2>
        <p class="lead">나를 읽는 글부터 매일의 하늘까지, 한 앱에서.</p>
      </div>
      <div class="feats">
        <article v-for="(f, i) in features" :key="f.k" v-reveal="(i % 3) * 90" class="card feat">
          <div class="feat-txt">
            <span class="eyebrow">{{ f.k }}</span>
            <h3>{{ f.t }}</h3>
            <p>{{ f.d }}</p>
          </div>
          <PhoneFrame :src="f.img" :alt="f.alt" mini />
        </article>
      </div>
    </div>
  </section>
</template>
