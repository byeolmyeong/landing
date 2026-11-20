<!-- 바닥: 로고 · 약관 넷 · ©. 문의 메일은 적지 않는다(문의는 앱 안에서 — 앱 결정 024 · 058) -->
<template>
  <footer class="bottom">
    <div class="wrap">
      <NuxtLink to="/" class="logo" aria-label="별명 처음으로"><img src="/brand/byeoli.svg" alt="" width="24" height="24">별명</NuxtLink>
      <nav aria-label="약관과 정책">
        <NuxtLink to="/terms">이용약관</NuxtLink>
        <NuxtLink to="/privacy">개인정보 처리방침</NuxtLink>
        <NuxtLink to="/marketing-terms">마케팅 정보 수신 동의</NuxtLink>
        <NuxtLink to="/privacy-consent">개인정보 수집 · 이용 동의</NuxtLink>
      </nav>
      <span>© 2026 별명</span>
    </div>
  </footer>
</template>
