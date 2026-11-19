<template>
  <footer class="bottom">
    <div class="wrap">
      <svg class="logo" viewBox="0 0 212 112" role="img" aria-label="별명"><use href="#logo" /></svg>
      <p>오락과 자기 성찰을 위한 내용입니다. © 2026 별명</p>
      <nav aria-label="약관과 문의">
        <NuxtLink to="/terms">이용약관</NuxtLink>
        <!-- 개인정보 처리방침은 다른 링크보다 눈에 띄게 둔다 -->
        <NuxtLink to="/privacy" class="strong">개인정보 처리방침</NuxtLink>
        <a href="mailto:support@byeolmyeong.com">문의 support@byeolmyeong.com</a>
      </nav>
    </div>
  </footer>
</template>
