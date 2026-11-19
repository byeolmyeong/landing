<template>
<!-- 브랜드 그림의 원본(앱 assets/brand/*.svg · glow.tsx 와 같은 좌표). 아래에서 <use> 로 불러 쓴다 -->
<svg width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">
  <defs>
    <filter id="bXL" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="bL" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="7"/></filter>
    <filter id="bM" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="bS" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.2"/></filter>
    <radialGradient id="halo"><stop offset="0" stop-color="#5B66FF" stop-opacity=".55"/><stop offset=".45" stop-color="#3843F4" stop-opacity=".18"/><stop offset="1" stop-color="#3843F4" stop-opacity="0"/></radialGradient>
    <radialGradient id="glassBody" cx=".42" cy=".38" r=".75"><stop offset="0" stop-color="#1C2A6B" stop-opacity=".55"/><stop offset=".6" stop-color="#101642" stop-opacity=".35"/><stop offset="1" stop-color="#4752FF" stop-opacity=".35"/></radialGradient>
    <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9AE8FF"/><stop offset=".35" stop-color="#4752FF"/><stop offset=".7" stop-color="#00C8E2"/><stop offset="1" stop-color="#C9B8FF"/></linearGradient>

    <!-- 로고: 구슬 받침 레터링 -->
    <symbol id="logo" viewBox="-6 -6 212 112" overflow="visible">
      <g stroke="#F2F3F7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M12,10 V50 H44 V10 M12,30 H44"/>
        <path d="M80,6 V54 M60,21 H80 M60,39 H80"/>
        <path d="M16,64 H84 V79 H16 V94 H84"/>
        <path d="M112,10 H144 V50 H112 Z"/>
        <path d="M180,6 V54 M160,21 H180 M160,39 H180"/>
      </g>
      <g transform="translate(146 79)">
        <circle r="22" fill="url(#halo)" opacity=".8"/>
        <circle r="14.5" fill="url(#glassBody)"/>
        <circle r="14.5" fill="none" stroke="url(#rim)" stroke-width="8"/>
        <circle r="14.5" fill="none" stroke="url(#rim)" stroke-width="14" opacity=".25" filter="url(#bM)"/>
        <ellipse cx="-5" cy="-7" rx="5" ry="2.6" fill="#fff" opacity=".35" transform="rotate(-28 -5 -7)"/>
        <g transform="scale(.36)">
          <circle r="26" fill="url(#halo)"/>
          <path d="M0,-22 Q4.4,-4.4 22,0 Q4.4,4.4 0,22 Q-4.4,4.4 -22,0 Q-4.4,-4.4 0,-22Z" fill="#3843F4" filter="url(#bXL)" opacity=".9"/>
          <path d="M0,-22 Q4.4,-4.4 22,0 Q4.4,4.4 0,22 Q-4.4,4.4 -22,0 Q-4.4,-4.4 0,-22Z" fill="#4F5BFF" filter="url(#bL)"/>
          <path d="M0,-22 Q4.4,-4.4 22,0 Q4.4,4.4 0,22 Q-4.4,4.4 -22,0 Q-4.4,-4.4 0,-22Z" fill="#9AA3FF" filter="url(#bM)"/>
          <path d="M0,-22 Q4.4,-4.4 22,0 Q4.4,4.4 0,22 Q-4.4,4.4 -22,0 Q-4.4,-4.4 0,-22Z" fill="#F4F7FF" transform="scale(0.86)" filter="url(#bS)"/>
        </g>
      </g>
    </symbol>

    <!-- 별이의 몸 -->
    <g id="byeoli-body">
      <circle r="78" fill="url(#halo)"/>
      <path d="M0,-52 Q17.68,-17.68 52,0 Q17.68,17.68 0,52 Q-17.68,17.68 -52,0 Q-17.68,-17.68 0,-52Z" fill="#3843F4" filter="url(#bXL)"/>
      <path d="M0,-50 Q17,-17 50,0 Q17,17 0,50 Q-17,17 -50,0 Q-17,-17 0,-50Z" fill="#5B66FF" filter="url(#bL)" stroke="#5B66FF" stroke-width="10" stroke-linejoin="round"/>
      <path d="M0,-48 Q16.32,-16.32 48,0 Q16.32,16.32 0,48 Q-16.32,16.32 -48,0 Q-16.32,-16.32 0,-48Z" fill="#F4F7FF" stroke="#F4F7FF" stroke-width="10" stroke-linejoin="round"/>
    </g>
    <g id="sparkle">
      <path d="M0,-6 Q0.96,-0.96 6,0 Q0.96,0.96 0,6 Q-0.96,0.96 -6,0 Q-0.96,-0.96 0,-6Z" fill="#C9CEFF" filter="url(#bS)"/>
      <path d="M0,-4.2 Q0.67,-0.67 4.2,0 Q0.67,0.67 0,4.2 Q-0.67,0.67 -4.2,0 Q-0.67,-0.67 0,-4.2Z" fill="#fff"/>
    </g>
    <!-- 별이: 기본 -->
    <symbol id="byeoli" viewBox="-90 -90 180 180" overflow="visible">
      <use href="#byeoli-body"/>
      <ellipse cx="-10.35" cy="2.3" rx="2.99" ry="4.37" fill="#161A3E"/>
      <ellipse cx="10.35" cy="2.3" rx="2.99" ry="4.37" fill="#161A3E"/>
      <circle cx="-9.32" cy="0.8" r="1.04" fill="#fff"/>
      <circle cx="11.39" cy="0.8" r="1.04" fill="#fff"/>
      <use href="#sparkle" transform="translate(62 -50)" opacity=".85"/>
      <use href="#sparkle" transform="translate(-66 40) scale(.7)" opacity=".6"/>
    </symbol>
    <!-- 별이: 반가움(궁합 카드) -->
    <symbol id="byeoli-happy" viewBox="-90 -90 180 180" overflow="visible">
      <g transform="rotate(10)">
        <use href="#byeoli-body"/>
        <path d="M-14.26,3.45 Q-10.35,-2.76 -6.44,3.45" fill="none" stroke="#161A3E" stroke-width="2.53" stroke-linecap="round"/>
        <path d="M6.44,3.45 Q10.35,-2.76 14.26,3.45" fill="none" stroke="#161A3E" stroke-width="2.53" stroke-linecap="round"/>
        <path d="M-3.45,9.2 Q0,12.19 3.45,9.2" fill="none" stroke="#161A3E" stroke-width="2.07" stroke-linecap="round"/>
      </g>
      <use href="#sparkle" transform="translate(-64 -40)"/>
      <use href="#sparkle" transform="translate(66 30) scale(.75)" opacity=".8"/>
    </symbol>

    <!-- 홈의 빛나는 모양 넷 (glow.tsx 의 shapePath) -->
    <path id="p-star" d="M0,-26 Q5.2,-5.2 26,0 Q5.2,5.2 0,26 Q-5.2,5.2 -26,0 Q-5.2,-5.2 0,-26Z"/>
    <path id="p-flame" d="M1.72,-25.8 C10.32,-13.76 18.92,-5.16 17.2,7.74 C15.48,18.92 7.74,24.08 0,24.08 C-8.6,24.08 -16.34,18.06 -16.34,6.88 C-16.34,-2.58 -9.46,-8.6 -6.02,-14.62 C-4.3,-7.74 -1.72,-4.3 2.58,-6.02 C6.02,-11.18 5.16,-18.06 1.72,-25.8Z"/>
    <path id="p-heart" d="M0,21.6 C-24.3,6.3 -27,-9 -15.3,-17.1 C-8.1,-21.6 -1.8,-18 0,-10.8 C1.8,-18 8.1,-21.6 15.3,-17.1 C27,-9 24.3,6.3 0,21.6Z"/>
    <path id="p-moon" d="M7.2,-21.6 A22.5,22.5 0 1 0 7.2,21.6 A17.1,17.1 0 1 1 7.2,-21.6Z"/>
  </defs>
</svg>
</template>
