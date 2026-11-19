<!-- 홈의 빛나는 카드(앱 glow.tsx 와 같은 겹침: 빛무리 → 푸른 번짐 → 옅은 보라 → 흰 심). 모양은 BrandDefs 의 #p-* -->
<script setup lang="ts">
defineProps<{ shape: 'star' | 'flame' | 'heart' | 'moon'; tilt: string }>()
</script>

<template>
  <div class="tile" :style="{ '--tilt': tilt }" aria-hidden="true">
    <svg viewBox="-60 -60 120 120">
      <circle r="46" fill="url(#halo)" />
      <use :href="`#p-${shape}`" fill="#3843F4" opacity=".9" filter="url(#bXL)" />
      <use :href="`#p-${shape}`" fill="#4F5BFF" filter="url(#bL)" />
      <use :href="`#p-${shape}`" fill="#9AA3FF" filter="url(#bM)" />
      <use :href="`#p-${shape}`" fill="#F4F7FF" transform="scale(.86)" filter="url(#bS)" />
    </svg>
  </div>
</template>
