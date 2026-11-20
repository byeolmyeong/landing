<!-- 모든 페이지의 뼈대: 머리 · 본문 · 바닥(첫 화면과 약관 페이지가 같은 머리 · 바닥을 쓴다) -->
<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
