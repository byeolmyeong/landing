<!-- 바닥: 로고 · 약관 넷과 계정 삭제 안내 · 문의 메일 · ©. 계정 삭제 안내는 Google Play 계정 삭제 요건의 페이지라 찾기 쉽게 둔다(2026-11-27). 문의 메일은 App Store 지원 URL(이 랜딩)에 연락처가 있어야 해서 넣는다(소유자 2026-11-26) — 앱 안 문의(앱 결정 024 · 058)는 그대로. 주소는 약관 원본(legalInfo.contact) 하나에서 -->
<script setup lang="ts">
import { legalInfo } from '~/data/legal'

const { contact } = legalInfo
</script>

<template>
  <footer class="bottom">
    <div class="wrap">
      <NuxtLink to="/" class="logo" aria-label="별명 처음으로"><img src="/brand/byeoli.svg" alt="" width="24" height="24">별명</NuxtLink>
      <nav aria-label="약관과 정책">
        <NuxtLink to="/terms">이용약관</NuxtLink>
        <NuxtLink to="/privacy">개인정보 처리방침</NuxtLink>
        <NuxtLink to="/marketing-terms">마케팅 정보 수신 동의</NuxtLink>
        <NuxtLink to="/privacy-consent">개인정보 수집 · 이용 동의</NuxtLink>
        <NuxtLink to="/delete-account">계정 삭제</NuxtLink>
      </nav>
      <div class="meta">
        <a :href="`mailto:${contact}`">문의 {{ contact }}</a>
        <span>© 2026 별명</span>
      </div>
    </div>
  </footer>
</template>
