<!-- 배경의 옅은 별 점: 한 번 그리고 움직이지 않는다(창 크기가 바뀌면 다시 그린다) -->
<script setup lang="ts">
const sky = ref<HTMLCanvasElement | null>(null)
let resizeTimer: ReturnType<typeof setTimeout> | undefined

function draw() {
  const canvas = sky.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const w = window.innerWidth
  const h = window.innerHeight
  canvas.width = w * dpr
  canvas.height = h * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, w, h)
  let seed = 7
  const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  const n = Math.round((w * h) / 7000)
  for (let i = 0; i < n; i++) {
    const x = rand() * w
    const y = rand() * h
    const r = 0.3 + rand() * 0.9
    const a = 0.08 + rand() * 0.38
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(220, 226, 245, ${a})`
    ctx.fill()
  }
}

function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(draw, 120)
}

onMounted(() => {
  draw()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  clearTimeout(resizeTimer)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <canvas id="sky" ref="sky" aria-hidden="true" />
</template>
