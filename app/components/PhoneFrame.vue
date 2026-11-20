<!-- 폰 틀: 실제 아이폰 모양(은색 테두리 · 검은 베젤 · 노치 · 옆 버튼 · 홈 막대 — 소유자 2026-11-20 "sou.zip 처럼").
     화면 그림은 public/screens/ 의 WebP(위에 상태 막대 9:41) — 원래 크기(780 폭)와 -480(480 폭) 둘 중 화면에 맞는 것을 브라우저가 고른다.
     sizes 는 폰이 화면에 그려지는 폭(기본: 첫 화면). mini 는 기능 카드 안의 윗부분만 보이는 작은 틀 -->
<script setup lang="ts">
const props = withDefaults(defineProps<{ src?: string; alt?: string; mini?: boolean; priority?: boolean; sizes?: string }>(), {
  src: undefined,
  alt: '',
  mini: false,
  priority: false,
  sizes: '(max-width: 639px) 250px, (max-width: 1023px) 260px, 300px',
})
const srcset = computed(() => (props.src ? screenSrcset(props.src) : undefined))
</script>

<template>
  <div class="iphone" :class="mini ? 'mini' : 'phone'">
    <span class="ip-btn ip-silent" aria-hidden="true" />
    <span class="ip-btn ip-vol1" aria-hidden="true" />
    <span class="ip-btn ip-vol2" aria-hidden="true" />
    <span class="ip-btn ip-power" aria-hidden="true" />
    <div class="ip-frame">
      <div class="scr">
        <slot>
          <img
            :src="src"
            :srcset="srcset"
            :sizes="mini ? '224px' : sizes"
            :alt="alt"
            width="780"
            height="1688"
            :loading="priority ? 'eager' : 'lazy'"
            :fetchpriority="priority ? 'high' : 'auto'"
            decoding="async"
          >
        </slot>
      </div>
      <span class="ip-notch" aria-hidden="true" />
      <span v-if="!mini" class="ip-home" aria-hidden="true" />
    </div>
  </div>
</template>
