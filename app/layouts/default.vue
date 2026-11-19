<!-- 모든 페이지의 뼈대: 브랜드 그림 정의 · 별 배경 · 머리 · 본문 · 바닥 -->
<template>
  <div>
    <BrandDefs />
    <SkyCanvas />
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
