<!-- 약관 · 정책 한 편(캔버스 "랜딩" L2 보드). 글은 app/data/legal.ts 에 있고 여기서 바꾸지 않는다(앱과 같은 글 — 앱 결정 043).
     제목 + 시행일 → 문서 탭 넷 → 데스크톱은 왼쪽 조항 목록(스크롤에 따라 지금 조항 밝게) + 본문(읽기 폭 740),
     1024 아래는 조항 목록을 접기 상자로, 640 아래 표는 줄마다 카드로 -->
<script setup lang="ts">
import { legalInfo, type LegalDocument } from '~/data/legal'

const props = defineProps<{ doc: LegalDocument }>()

const tabs = [
  { to: '/terms', label: '이용약관' },
  { to: '/privacy', label: '개인정보 처리방침' },
  { to: '/privacy-consent', label: '개인정보 수집 · 이용 동의' },
  { to: '/marketing-terms', label: '마케팅 정보 수신 동의' },
]
const route = useRoute()
const here = computed(() => route.path.replace(/\/$/, '') || '/')

const sid = (i: number) => `jo-${i + 1}`
const current = ref(0)
const tocOpen = ref(false)
const tabRow = ref<HTMLElement | null>(null)
let frame = 0

/** 머리에서 140 안으로 들어온 마지막 조항이 지금 조항. 맨 아래에 닿으면 마지막 조항 */
function measure() {
  frame = 0
  let at = 0
  props.doc.sections.forEach((_, i) => {
    const el = document.getElementById(sid(i))
    if (el && el.getBoundingClientRect().top <= 140) at = i
  })
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) at = props.doc.sections.length - 1
  current.value = at
}
const onScroll = () => {
  if (!frame) frame = requestAnimationFrame(measure)
}

onMounted(() => {
  measure()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  // 폰에서 옆으로 밀리는 탭 줄: 지금 문서 탭이 화면 밖이면 보이게 민다
  const row = tabRow.value
  const on = row?.querySelector<HTMLElement>('[aria-current="page"]')
  if (row && on) {
    const r = on.getBoundingClientRect()
    const box = row.getBoundingClientRect()
    if (r.right > box.right) row.scrollLeft += r.left - box.left - 20
  }
})
onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <article class="legal">
    <div class="wrap lg-head">
      <h1>{{ doc.title }}</h1>
      <p class="lg-date">시행일 {{ legalInfo.effective }}</p>
      <nav ref="tabRow" class="lg-tabs" aria-label="약관과 정책">
        <NuxtLink
          v-for="t in tabs"
          :key="t.to"
          :to="t.to"
          class="lg-tab"
          :class="{ on: here === t.to }"
          :aria-current="here === t.to ? 'page' : undefined"
        >{{ t.label }}</NuxtLink>
      </nav>
      <details class="lg-tocbox" :open="tocOpen" @toggle="tocOpen = ($event.target as HTMLDetailsElement).open">
        <summary><span>조항 목록 · {{ doc.sections[current]?.title }}</span><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="#7C7E8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></summary>
        <nav aria-label="조항 목록">
          <a v-for="(s, i) in doc.sections" :key="s.title" :href="`#${sid(i)}`" :class="{ on: i === current }" @click="tocOpen = false">{{ s.title }}</a>
        </nav>
      </details>
    </div>

    <div class="wrap lg-grid">
      <aside class="lg-toc">
        <nav class="lg-toc-in" aria-label="조항">
          <span class="lg-toc-t">조항</span>
          <a v-for="(s, i) in doc.sections" :key="s.title" :href="`#${sid(i)}`" :class="{ on: i === current }" :aria-current="i === current ? 'location' : undefined">{{ s.title }}</a>
        </nav>
      </aside>

      <div class="lg-art">
        <p class="lg-intro">{{ doc.intro }}</p>
        <section v-for="(section, i) in doc.sections" :id="sid(i)" :key="section.title" class="lg-sec">
          <h2>{{ section.title }}</h2>
          <template v-for="(block, b) in section.blocks" :key="b">
            <p v-if="'p' in block">{{ block.p }}</p>
            <ul v-else-if="'ul' in block">
              <li v-for="item in block.ul" :key="item">{{ item }}</li>
            </ul>
            <ol v-else-if="'ol' in block">
              <li v-for="item in block.ol" :key="item">{{ item }}</li>
            </ol>
            <template v-else-if="'table' in block">
              <div class="lg-tbl">
                <table>
                  <thead>
                    <tr><th v-for="h in block.table.head" :key="h" scope="col">{{ h }}</th></tr>
                  </thead>
                  <tbody>
                    <tr v-for="row in block.table.rows" :key="row.join('|')">
                      <td v-for="(cell, c) in row" :key="c">{{ cell }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="lg-cards">
                <dl v-for="row in block.table.rows" :key="row.join('|')" class="lg-card">
                  <div v-for="(cell, c) in row" :key="c"><dt>{{ block.table.head[c] }}</dt><dd>{{ cell }}</dd></div>
                </dl>
              </div>
            </template>
          </template>
        </section>
        <p class="lg-close">{{ doc.closing }}</p>
      </div>
    </div>
  </article>
</template>
