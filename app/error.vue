<!-- 없는 주소(404)와 그 밖의 오류 화면. 머리 · 바닥 없이 화면 가운데에 별이 · 한 줄 · "첫 화면으로" 만 둔다(소유자 2026-11-20).
     nuxt generate 가 이 화면으로 404.html 을 만들고, Vercel 은 없는 주소에 그 파일을 보낸다 -->
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const notFound = computed(() => props.error.statusCode === 404)

useHead({
  title: notFound.value ? '페이지를 찾을 수 없어요 | 별명' : '잠시 문제가 생겼어요 | 별명',
  meta: [{ name: 'robots', content: 'noindex' }],
})

const home = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="nf" aria-labelledby="nf-title">
    <div class="glow" aria-hidden="true" />
    <div class="wrap nf-in">
      <img src="/brand/byeoli.svg" alt="" width="96" height="96">
      <span class="eyebrow">{{ notFound ? '404' : error.statusCode }}</span>
      <h1 id="nf-title" class="h2">{{ notFound ? '찾는 페이지가 없어요' : '잠시 문제가 생겼어요' }}</h1>
      <p class="lead">{{ notFound ? '주소가 바뀌었거나 없어진 페이지예요. 첫 화면에서 다시 둘러봐 주세요.' : '잠시 뒤에 다시 열어 주세요.' }}</p>
      <a class="btn btn-primary" href="/" @click.prevent="home">첫 화면으로</a>
    </div>
  </main>
</template>
