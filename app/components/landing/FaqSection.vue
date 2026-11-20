<!-- 자주 묻는 질문: 글은 app/data/faq.ts(검색엔진용 FAQPage JSON-LD 와 같은 곳). 첫 질문만 펼쳐 둔다.
     펼치고 접을 때 높이 · 투명도 · 화살표(닫힘 ⌃ · 펼침 ⌄)가 함께 움직인다. 닫힌 답도 HTML 에는 들어 있다 -->
<script setup lang="ts">
import { faq } from '~/data/faq'

const open = ref<boolean[]>(faq.map((_, i) => i === 0))
const toggle = (i: number) => { open.value[i] = !open.value[i] }
</script>

<template>
  <section id="faq" class="sec faq-sec" aria-labelledby="faq-title">
    <div class="wrap faq-grid">
      <div v-reveal>
        <span class="eyebrow">FAQ</span>
        <h2 id="faq-title" class="h2">자주 묻는 질문</h2>
      </div>
      <div>
        <div v-for="(item, i) in faq" :key="item.q" v-reveal="80 + i * 60" class="faq-i" :class="{ open: open[i] }">
          <h3>
            <button
              :id="`faq-q-${i}`"
              type="button"
              class="faq-q"
              :aria-expanded="open[i] ? 'true' : 'false'"
              :aria-controls="`faq-a-${i}`"
              @click="toggle(i)"
            >
              <span>{{ item.q }}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="#7C7E8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </button>
          </h3>
          <div :id="`faq-a-${i}`" class="faq-a" role="region" :aria-labelledby="`faq-q-${i}`">
            <p><span>{{ item.a }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
