<!-- 시작 버튼: 웹에서 체험하기(웹 앱) + 스토어 배지 둘. 앱 출시 전이라 배지는 흐리게 두고 누를 수 없다 — 출시하면 배지를 스토어 링크(<a>)로 바꾸고 아래 한 줄을 지운다. 첫 화면 · 다운로드 두 곳이 쓴다 -->
<script setup lang="ts">
import { webApp } from '~/data/links'

defineProps<{ center?: boolean }>()
</script>

<template>
  <div class="launch" :class="{ center }">
    <div class="acts">
      <a class="btn btn-primary" :href="webApp">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" fill="none" stroke="currentColor" stroke-width="1.8" /></svg>
        웹에서 체험하기
      </a>
    </div>
    <div class="stores-w">
      <div class="stores">
        <span class="store-b pre" aria-disabled="true">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.4 12.6c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2-1.1 2.8-2.3.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-.9-2.5-3.7zM14.2 5.5c.6-.8 1.1-1.8 1-2.9-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.7-1.3z" fill="currentColor" /></svg>
          <span class="store"><small>Download on the</small><b>App Store</b></span>
        </span>
        <span class="store-b pre" aria-disabled="true">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3.5v17a1 1 0 0 0 1.5.9l14.6-8.5a1 1 0 0 0 0-1.8L5.5 2.6A1 1 0 0 0 4 3.5z" fill="currentColor" /></svg>
          <span class="store"><small>GET IT ON</small><b>Google Play</b></span>
        </span>
      </div>
      <span class="stores-cap">앱은 출시를 준비하고 있어요 · 지금은 웹에서 체험할 수 있어요</span>
    </div>
  </div>
</template>
