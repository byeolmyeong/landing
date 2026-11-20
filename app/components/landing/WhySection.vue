<!-- Why: 점성술이 어려웠던 이유 셋과 별명이 푸는 법 -->
<script setup lang="ts">
const reasons = [
  { t: '낯선 용어', d: '태양 · 상승궁 · 5하우스… 뜻을 몰라도 읽히게, 쉬운 말로 풀어요.' },
  { t: '누구에게나 맞는 말', d: '글마다 내 출생 차트에서 나온 이유를 함께 보여 드려요.' },
  { t: '한 번 보고 끝', d: '오늘의 하늘 · 이번 달로 매일 다시 열어 볼 이유가 생겨요.' },
]
</script>

<template>
  <section class="sec deep why" aria-labelledby="why-title">
    <div class="wrap two">
      <div>
        <span class="eyebrow">Why 별명</span>
        <h2 id="why-title" class="h2">점성술,<br>이래서 어려웠죠</h2>
        <p class="lead">별명은 출생 차트를 서버가 계산하고, 그 결과를 용어 없이 나를 설명하는 글로 바꿔요.</p>
      </div>
      <ol class="why-list">
        <li v-for="(r, i) in reasons" :key="r.t" class="card why-card">
          <span class="why-n" aria-hidden="true">{{ i + 1 }}</span>
          <div>
            <h3>{{ r.t }}</h3>
            <p>{{ r.d }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
