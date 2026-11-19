<!-- 히어로의 "나의 별명" 예시 카드. 예시 셋이 5초마다 바뀐다(동작 줄이기면 바뀌지 않고, 점을 눌러야 바뀐다) -->
<script setup lang="ts">
const examples = [
  { line: '자유로운 상상력과 단단한 책임감을 함께 지닌, 따뜻하고 독창적인 사람', signs: ['물병자리', '염소자리', '천칭자리'] },
  { line: '조용히 오래 지켜보다가, 한번 마음을 주면 끝까지 곁에 남는 사람', signs: ['전갈자리', '게자리', '처녀자리'] },
  { line: '새로운 길 앞에서 먼저 걸음을 떼고, 그 길을 기꺼이 나누는 사람', signs: ['양자리', '사수자리', '사자자리'] },
]
const cells = [
  { label: '나의 중심', why: '힘을 내는 방식' },
  { label: '나의 마음', why: '편안함을 느끼는 방식' },
  { label: '나의 첫인상', why: '처음 보이는 모습' },
]

const at = ref(0)
const out = ref(false)
let timer: ReturnType<typeof setInterval> | undefined
let swapTimer: ReturnType<typeof setTimeout> | undefined

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function show(i: number) {
  const next = (i + examples.length) % examples.length
  if (reduceMotion()) {
    at.value = next
    return
  }
  out.value = true
  clearTimeout(swapTimer)
  swapTimer = setTimeout(() => {
    at.value = next
    out.value = false
  }, 280)
}

function auto() {
  clearInterval(timer)
  if (!reduceMotion()) timer = setInterval(() => show(at.value + 1), 5200)
}

function pick(i: number) {
  show(i)
  auto()
}

onMounted(auto)
onBeforeUnmount(() => {
  clearInterval(timer)
  clearTimeout(swapTimer)
})
</script>

<template>
  <article class="name-card" aria-roledescription="예시 카드">
    <div class="nc-head"><span class="label">나의 별명</span><span class="tag">예시</span></div>
    <p class="nc-line swap" :class="{ out }" aria-live="polite">{{ examples[at]!.line }}</p>
    <dl class="nc-cells">
      <div v-for="(cell, k) in cells" :key="cell.label">
        <dt>{{ cell.label }}</dt>
        <dd class="sign swap" :class="{ out }">{{ examples[at]!.signs[k] }}</dd>
        <dd class="why">{{ cell.why }}</dd>
      </div>
    </dl>
    <div class="nc-dots" role="group" aria-label="다른 예시 보기">
      <button
        v-for="(_, k) in examples"
        :key="k"
        class="dot"
        type="button"
        :aria-pressed="k === at ? 'true' : 'false'"
        :aria-label="`예시 ${k + 1}`"
        @click="pick(k)"
      />
    </div>
  </article>
</template>
