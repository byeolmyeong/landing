<!-- 폰 틀(디딧과 같은 얇은 유리 테두리 · 둥근 섬). 화면 그림은 public/screens/ 의 2배 PNG(위에 상태 막대 9:41). mini 는 기능 카드 안의 윗부분만 보이는 작은 틀 -->
<script setup lang="ts">
withDefaults(defineProps<{ src?: string; alt?: string; mini?: boolean; priority?: boolean }>(), {
  src: undefined,
  alt: '',
  mini: false,
  priority: false,
})
</script>

<template>
  <div :class="mini ? 'mini' : 'phone'">
    <span class="isl" aria-hidden="true" />
    <div class="scr">
      <slot>
        <img
          :src="src"
          :alt="alt"
          width="780"
          height="1688"
          :loading="priority ? 'eager' : 'lazy'"
          :fetchpriority="priority ? 'high' : 'auto'"
          decoding="async"
        >
      </slot>
    </div>
  </div>
</template>
