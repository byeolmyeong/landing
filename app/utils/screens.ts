/** 화면 그림(public/screens/*.webp)의 srcset: 원래 크기(780 폭)와 -480(480 폭). 폰 틀 · 이렇게 써요가 같이 쓴다 */
export const screenSrcset = (src: string) => `${src.replace(/\.webp$/, '-480.webp')} 480w, ${src} 780w`
