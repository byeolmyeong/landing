<!-- 머리. 메뉴는 첫 화면의 구간으로 간다(다른 페이지에서도 / 로 돌아와 그 구간으로) -->
<template>
  <header class="top">
    <div class="wrap">
      <NuxtLink to="/" aria-label="별명 처음으로"><svg class="logo" viewBox="0 0 212 112" role="img" aria-label="별명"><use href="#logo" /></svg></NuxtLink>
      <nav class="nav" aria-label="주요 메뉴">
        <a class="link" href="/#reading">풀이</a>
        <a class="link" href="/#features">기능</a>
        <a class="link" href="/#timing">시기</a>
        <a class="link" href="/#synastry">궁합</a>
        <a class="btn btn-line" href="/#start">시작하는 법</a>
      </nav>
    </div>
  </header>
</template>
