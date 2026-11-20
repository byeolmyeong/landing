<!-- 첫 화면: 한 줄 소개 · 시작 버튼 · 폰 둘(별명 공개 · 홈, 640 아래는 홈 하나) -->
<template>
  <section class="hero-band" aria-labelledby="hero-title">
    <div class="glow" aria-hidden="true" />
    <div class="wrap hero">
      <div>
        <span v-reveal class="eyebrow">별이 지어 준 이름</span>
        <h1 id="hero-title" v-reveal="80">점성술을 몰라도<br>읽히는 나의 별명</h1>
        <p v-reveal="160" class="lead">생년월일과 태어난 시각, 태어난 곳으로 그날의 하늘을 계산하고 <br>용어 없이 나를 설명하는 글로 풀어 드려요.</p>
        <LaunchButtons v-reveal="240" />
        <p v-reveal="320" class="trust"><span>1.0.0 은 모두 무료</span><span aria-hidden="true">·</span><span>출생 정보는 내 계정에만</span></p>
      </div>
      <div v-reveal="200" class="hero-art">
        <PhoneFrame class="p1" src="/screens/reveal.png" alt="별명 공개 화면: 새벽별 님의 별명은 자유로운 상상력과 단단한 책임감을 함께 지닌, 따뜻하고 독창적인 사람" priority />
        <PhoneFrame class="p2" src="/screens/home.png" alt="홈 화면: 내 별명 카드, 오늘의 하늘, 지금 나의 시기, 이 시기의 작은 실천" priority />
      </div>
    </div>
  </section>
</template>
