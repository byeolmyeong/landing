<!-- 이렇게 써요(디딧 "How it works" 의 구조 · 움직임): 왼쪽 폰 · 오른쪽 단계 넷. 2초마다 다음 단계, 누르면 그 단계. 1024 아래는 단계 목록 대신 폰 아래에 지금 단계 + 점.
     구간이 화면에 보일 때만 넘어가고, 동작 줄이기면 저절로 넘기지 않는다(눌러야 바뀐다) -->
<script setup lang="ts">
const STEP_MS = 2000
const steps = [
  { t: '출생 정보 알려 주기', d: '생년월일 · 태어난 시각 · 태어난 곳. 시각을 몰라도 괜찮아요.', img: '/screens/birth.png', alt: '출생 정보 화면: 생년월일, 태어난 시각(모름), 태어난 곳' },
  { t: '나의 별명 받기', d: '별이 하늘을 읽고 나에게 맞는 별명을 지어 줘요.', img: '/screens/reveal.png', alt: '별명 공개 화면' },
  { t: '매일 오늘의 하늘', d: '오늘 하늘이 나에게 어떤 날인지, 작은 실천과 함께.', img: '/screens/today-sky.png', alt: '오늘의 하늘 화면: 사람 · 일 · 마음의 흐름과 이렇게 풀이한 이유' },
  { t: '나 · 시기 더 알아보기', d: '성격 · 연애 · 관계 · 일 · 감정, 그리고 이번 달 · 올해 · 인생.', img: '/screens/me-personality.png', alt: '나 탭 화면: 성격 · 연애 · 관계 · 일 · 감정 칩' },
]

const at = ref(0)
const root = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined
let visible = false
let observer: IntersectionObserver | undefined

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const num = (i: number) => String(i + 1).padStart(2, '0')

function schedule() {
  clearTimeout(timer)
  if (!visible || reduceMotion()) return
  timer = setTimeout(() => {
    at.value = (at.value + 1) % steps.length
    schedule()
  }, STEP_MS)
}

function go(i: number) {
  at.value = i
  schedule()
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    visible = !!entry?.isIntersecting
    if (visible) schedule()
    else clearTimeout(timer)
  }, { threshold: 0.35 })
  if (root.value) observer.observe(root.value)
})
onBeforeUnmount(() => {
  clearTimeout(timer)
  observer?.disconnect()
})
</script>

<template>
  <section id="flow" ref="root" class="sec" aria-labelledby="flow-title" :style="{ '--step-ms': `${STEP_MS}ms` }">
    <div class="wrap">
      <div class="sec-head">
        <span class="eyebrow">How it works</span>
        <h2 id="flow-title" class="h2">이렇게 써요</h2>
        <p class="lead">출생 정보만 알려 주면, 나머지는 별이 해요.</p>
      </div>
      <div class="flow-grid">
        <div class="flow-phone">
          <div class="glow" aria-hidden="true" />
          <PhoneFrame>
            <img
              v-for="(s, i) in steps"
              :key="s.img"
              :src="s.img"
              :alt="i === at ? s.alt : ''"
              :aria-hidden="i === at ? undefined : 'true'"
              :class="{ on: i === at }"
              width="780"
              height="1688"
              loading="lazy"
              decoding="async"
            >
          </PhoneFrame>
          <div class="flow-cap" aria-live="polite">
            <span class="step-n">{{ num(at) }}</span>
            <span class="cap-t">{{ steps[at]!.t }}</span>
            <span class="cap-d">{{ steps[at]!.d }}</span>
            <div class="dots" role="group" aria-label="단계 고르기">
              <button
                v-for="(s, i) in steps"
                :key="s.t"
                class="dot"
                type="button"
                :aria-label="`${i + 1}단계 ${s.t}`"
                :aria-current="i === at ? 'step' : undefined"
                @click="go(i)"
              />
            </div>
          </div>
        </div>
        <ol class="steps">
          <li v-for="(s, i) in steps" :key="s.t">
            <button
              type="button"
              class="step"
              :class="{ on: i === at, done: i < at }"
              :aria-current="i === at ? 'step' : undefined"
              @click="go(i)"
            >
              <span class="step-l">
                <span class="step-n">{{ num(i) }}</span>
                <span class="step-track"><span :key="i === at ? `on-${at}-${i}` : `off-${i}`" /></span>
              </span>
              <span>
                <span class="step-t">{{ s.t }}</span>
                <span class="step-d">{{ s.d }}</span>
              </span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
