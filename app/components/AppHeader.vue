<!-- 머리: 로고 · 메뉴(첫 화면의 구간으로, 1024 아래 숨김) · 체험하기(웹 앱) -->
<template>
  <header class="top">
    <div class="wrap">
      <NuxtLink to="/" class="logo" aria-label="별명 처음으로"><img src="/brand/byeoli.svg" alt="" width="30" height="30">별명</NuxtLink>
      <nav class="nav" aria-label="주요 메뉴">
        <a href="/#features">주요 기능</a>
        <a href="/#flow">이렇게 써요</a>
        <a href="/#faq">자주 묻는 질문</a>
      </nav>
      <a class="btn btn-primary btn-sm" :href="webApp">체험하기</a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { webApp } from '~/data/links'
</script>
