<!-- 약속 셋: 기능 카드 바로 아래에 붙여 둔다 -->
<script setup lang="ts">
const promises = [
  { t: '출생 정보는 내 계정에만', d: '다른 사람에게 보이지 않아요.' },
  { t: '공유 카드엔 출생 정보가 없어요', d: '별명과 한 줄만 담겨요.' },
  { t: '단정하지 않아요', d: '건강 · 돈 · 앞일을 못 박지 않아요.' },
]
</script>

<template>
  <div class="deep promise-band">
    <div class="wrap">
      <ul v-reveal class="promise" aria-label="별명의 약속">
        <li v-for="p in promises" :key="p.t"><b>{{ p.t }}</b><span>{{ p.d }}</span></li>
      </ul>
    </div>
  </div>
</template>
