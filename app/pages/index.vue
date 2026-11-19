<script setup lang="ts">
import { faq } from '~/data/faq'

const site = 'https://byeolmyeong.com'

// 검색 결과의 제목 · 설명에는 사람들이 실제로 찾는 말(출생 차트 · 네이탈 차트 · 별자리 궁합 · 점성술)을 넣는다. 링크 미리보기는 og 값을 쓴다
useSeoMeta({
  title: "별명 — 점성술 몰라도 읽히는 출생 차트 풀이 · 별자리 궁합",
  description: "생년월일과 태어난 시각, 태어난 곳으로 출생 차트(네이탈 차트)를 계산하고, 점성술 용어 없이 나를 설명하는 글로 풀어 드려요. 별자리 궁합 점수와 랭킹, 사람마다 다른 인생의 변곡점까지 지금은 무료로 볼 수 있어요.",
  ogTitle: "별명 — 태어난 순간의 하늘로 읽는 나",
  ogDescription: "태어난 순간의 하늘을 점성술 용어 없이 풀어 드려요.",
  ogUrl: `${site}/`,
  ogImage: `${site}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "빛나는 별 캐릭터 별이와 별명 로고, 태어난 순간의 하늘로 읽는 나",
  twitterCard: 'summary_large_image',
  twitterImage: `${site}/og.png`,
})

// 검색엔진용 구조화 정보. 가격(무료)은 1.1.0 에서 유료 기능이 붙으면 고친다
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://byeolmyeong.com/#org",
      "name": "별명",
      "url": "https://byeolmyeong.com/",
      "logo": "https://byeolmyeong.com/icon-512.png",
      "email": "support@byeolmyeong.com"
    },
    {
      "@type": "WebSite",
      "@id": "https://byeolmyeong.com/#website",
      "url": "https://byeolmyeong.com/",
      "name": "별명",
      "inLanguage": "ko-KR",
      "publisher": {
        "@id": "https://byeolmyeong.com/#org"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "별명",
      "url": "https://byeolmyeong.com/",
      "image": "https://byeolmyeong.com/og.png",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "iOS, Android, Web",
      "inLanguage": "ko-KR",
      "description": "태어난 순간의 하늘을 계산한 출생 차트를 점성술 용어 없이 나를 설명하는 글로 풀어 주는 서양 점성술 앱. 별자리 궁합 점수 · 랭킹과 인생의 변곡점을 함께 본다.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KRW"
      },
      "publisher": {
        "@id": "https://byeolmyeong.com/#org"
      }
    }
  ]
}

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

useHead({
  link: [{ rel: 'canonical', href: `${site}/` }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(graph) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqPage) },
  ],
})
</script>

<template>
  <div>
  <!-- 히어로 -->
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <p class="eyebrow">서양 점성술 · 출생 차트 풀이</p>
        <h1>별이 붙여 준<br>나의<svg class="mark" viewBox="0 0 212 112" role="img" aria-label="별명"><use href="#logo"/></svg></h1>
        <p class="lead">생년월일과 태어난 시각, 태어난 곳으로 내 출생 차트(네이탈 차트)를 계산하고, 점성술 용어 없이 나를 설명하는 글로 풀어 드려요.</p>
        <LaunchButtons />
        <p class="fine">지금은 모두 무료 · 횟수 제한 없음 · 만 14세 이상</p>
      </div>

      <div class="hero-visual">
      <div class="hero-byeoli" aria-hidden="true">
        <svg viewBox="0 0 180 180"><use href="#byeoli"/></svg>
      </div>

      <NameCard />
      </div>
    </div>
  </section>

  <!-- 읽히는 글 -->
  <section class="sec rule" id="reading">
    <div class="wrap split">
      <div>
        <div class="sec-head">
          <p class="eyebrow">풀이</p>
          <h2>점성술을 몰라도<br>읽히는 글</h2>
          <p class="lead">별과 행성의 자리는 계산으로 구하고, AI는 그 출생 차트를 보고 글만 써요. 본문에는 하우스나 각도 같은 말을 쓰지 않고, 근거가 된 자리는 문단 머리에 작게 남겨 둬요.</p>
        </div>
        <ul class="points">
          <li><b>문단마다 근거</b><span>어느 별, 어느 자리에서 나온 말인지 궁금하면 바로 볼 수 있어요.</span></li>
          <li><b>같은 차트, 같은 글</b><span>한 번 지은 별명은 다시 열어도 그대로예요.</span></li>
          <li><b>단정하지 않는 말투</b><span>미래를 예언하지 않고, 지금의 나를 관찰하듯 써요.</span></li>
        </ul>
      </div>

      <figure class="reader" aria-label="요약 풀이 화면 예시">
        <div class="reader-nav"><span aria-hidden="true">←</span><span>내 별명</span><span></span></div>
        <div class="reader-body">
          <div class="para">
            <span class="basis">근거 · 태양 · 물병 · 5하우스</span>
            <h3>나답게 표현하는 삶</h3>
            <p>남들과 같은 길보다 나만의 방식을 찾을 때 가장 생기가 도는 편이에요. 무언가를 만들고, 놀고, 즐기는 순간에 진짜 자신이 드러나기 쉬워요.</p>
          </div>
          <div class="para">
            <span class="basis">근거 · 달 · 염소 · 4하우스</span>
            <h3>차분히 다지는 마음</h3>
            <p>편안함은 정돈된 하루에서 와요. 내 자리가 단단하다고 느낄 때 마음도 놓이는 편이에요.</p>
          </div>
          <div class="para">
            <span class="basis">근거 · 상승점 · 천칭 · 중천 · 게</span>
            <h3>부드러운 인상, 돌보는 꿈</h3>
            <p>처음 만난 사람에게는 부드럽고 균형 잡힌 사람으로 보이기 쉬워요. 바라는 삶은 가까운 사람을 살피고 돌보는 쪽에 가까워요.</p>
          </div>
        </div>
        <p class="reader-foot">오락과 자기 성찰을 위한 내용입니다.</p>
      </figure>
    </div>
  </section>

  <!-- 네 장의 카드 (브랜드 자리: 홈 아이콘) -->
  <section class="sec rule" id="features">
    <div class="wrap">
      <div class="sec-head">
        <p class="eyebrow">기능</p>
        <h2>나, 나의 사람들, 나의 타이밍</h2>
      </div>
      <div class="cards">
        <article class="feat">
          <GlowTile shape="star" tilt="-4deg" />
          <h3>나</h3>
          <p>한 줄 총평부터 성격 · 관계 · 일 · 감정 · 시기, 다섯 갈래의 긴 리포트까지.</p>
          <ul><li>요약 풀이</li><li>내 차트</li><li>심층 리포트</li></ul>
        </article>
        <article class="feat">
          <GlowTile shape="flame" tilt="3deg" />
          <h3>관계</h3>
          <p>사람을 대할 때 나는 어떤 편인지, 연애에서 무엇을 해 보면 좋을지.</p>
          <ul><li>사람을 대하는 성향</li><li>연애에서 해 볼 만한 것</li></ul>
        </article>
        <article class="feat">
          <GlowTile shape="heart" tilt="-2deg" />
          <h3>궁합</h3>
          <p>두 사람의 출생 차트를 겹쳐 보는 별자리 궁합. 나에게 이 사람이 어떤 사이인지 봐요.</p>
          <ul><li>상대와 궁합 보기</li><li>궁합 랭킹</li></ul>
        </article>
        <article class="feat">
          <GlowTile shape="moon" tilt="4deg" />
          <h3>시기</h3>
          <p>지금 지나는 시기와 다음 변곡점. 같은 나이라도 사람마다 달라요.</p>
          <ul><li>지금 나의 구간</li><li>다가오는 변곡점</li></ul>
        </article>
      </div>
    </div>
  </section>

  <!-- 시기 -->
  <section class="sec rule" id="timing">
    <div class="wrap">
      <div class="split">
        <div class="sec-head">
          <p class="eyebrow">시기</p>
          <h2>누구에게나 오는 네 번의 마디, 나에게만 오는 구간</h2>
        </div>
        <p class="lead" style="align-self:end">변곡점은 누구나 비슷한 나이, 만 21 · 29 · 42 · 58세 무렵에 한 번씩 지나요. 그 사이에는 내 차트에만 생기는 구간이 있어요. 익숙한 방식이 달라지기 쉬운 시기, 인연이 열리기 쉬운 시기, 운명처럼 느껴지는 만남이 생기기 쉬운 시기를 기간으로 보여 드려요.</p>
      </div>

      <figure class="timeline">
        <div class="tl-scroll">
          <svg class="tl" viewBox="0 0 960 262" role="img" aria-label="예시: 만 27세인 사람의 변곡점과 구간. 지금은 변화 구간을 지나는 중이고, 다음 변곡점은 만 29~30세 무렵이다.">
            <!-- 축: 만 16세(x=170) ~ 62세(x=930), 1년 = 16.52 -->
            <g stroke="#2A2B33" stroke-width="1">
              <line x1="170" y1="70" x2="930" y2="70"/>
              <line x1="170" y1="110" x2="930" y2="110"/>
              <line x1="170" y1="150" x2="930" y2="150"/>
            </g>
            <text class="lane" x="150" y="75" text-anchor="end">만남</text>
            <text class="lane" x="150" y="115" text-anchor="end">기회</text>
            <text class="lane" x="150" y="155" text-anchor="end">변화</text>

            <!-- 네 번의 변곡점 -->
            <g stroke="#4D4F5A" stroke-width="1" stroke-dasharray="3 5">
              <line x1="260.9" y1="52" x2="260.9" y2="190"/>
              <line x1="393" y1="52" x2="393" y2="190"/>
              <line x1="599.5" y1="52" x2="599.5" y2="190"/>
              <line x1="872.1" y1="52" x2="872.1" y2="190"/>
            </g>
            <g text-anchor="middle">
              <text class="mile" x="260.9" y="20">첫 번째</text><text class="mile-age" x="260.9" y="39">만 21~22세</text>
              <text class="mile" x="393" y="20">두 번째</text><text class="mile-age" x="393" y="39">만 29~30세</text>
              <text class="mile" x="599.5" y="20">세 번째</text><text class="mile-age" x="599.5" y="39">만 42세</text>
              <text class="mile" x="872.1" y="20">네 번째</text><text class="mile-age" x="872.1" y="39">만 58~59세</text>
            </g>

            <!-- 나에게만 오는 구간 -->
            <g fill="#4D4F5A">
              <rect x="318.7" y="65" width="13.2" height="10" rx="5"/>
              <rect x="459.1" y="65" width="16.5" height="10" rx="5"/>
              <rect x="715.2" y="65" width="16.5" height="10" rx="5"/>
              <rect x="285.6" y="105" width="16.5" height="10" rx="5"/>
              <rect x="409.5" y="105" width="16.5" height="10" rx="5"/>
              <rect x="550" y="105" width="16.5" height="10" rx="5"/>
              <rect x="690.4" y="105" width="16.5" height="10" rx="5"/>
              <rect x="814.3" y="105" width="19.8" height="10" rx="5"/>
              <rect x="483.9" y="145" width="41.3" height="10" rx="5"/>
              <rect x="632.6" y="145" width="33" height="10" rx="5"/>
              <rect x="748.2" y="145" width="33" height="10" rx="5"/>
            </g>
            <rect x="338.5" y="145" width="29.7" height="10" rx="5" fill="#4752FF"/>

            <!-- 나이 눈금 -->
            <line x1="170" y1="190" x2="930" y2="190" stroke="#4D4F5A" stroke-width="1"/>
            <g class="tick" text-anchor="middle">
              <text x="236.1" y="212">20</text><text x="318.7" y="212">25</text><text x="401.3" y="212">30</text>
              <text x="483.9" y="212">35</text><text x="566.5" y="212">40</text><text x="649.1" y="212">45</text>
              <text x="731.7" y="212">50</text><text x="814.3" y="212">55</text><text x="896.9" y="212">60</text>
            </g>
            <text class="tick" x="150" y="212" text-anchor="end">만 나이</text>

            <!-- 지금 -->
            <line x1="351.7" y1="52" x2="351.7" y2="190" stroke="#4752FF" stroke-width="1.5"/>
            <circle cx="351.7" cy="190" r="5" fill="#4752FF"/>
            <rect x="313.7" y="226" width="76" height="26" rx="13" fill="#4752FF"/>
            <text class="now" x="351.7" y="244" text-anchor="middle">지금 · 27</text>
          </svg>
        </div>
        <figcaption class="tl-caption">예시: 만 27세인 사람의 시기. 세로선은 변곡점, 막대는 그 사람에게만 오는 구간이에요. 정확한 해와 기간은 내 차트로 계산해요.</figcaption>
      </figure>

      <div class="when">
        <article>
          <span class="k"><span class="pill-now">지금</span>변화 · 일</span>
          <span class="big">익숙한 방식이 달라지기 쉬운 시기</span>
          <span class="sub">2027년 가을까지</span>
        </article>
        <article>
          <span class="k">다음 변곡점</span>
          <span class="big">두 번째 변곡점</span>
          <span class="sub">2029년 봄 · 만 29~30세 무렵</span>
        </article>
      </div>
    </div>
  </section>

  <!-- 궁합 · 공유 -->
  <section class="sec rule" id="synastry">
    <div class="wrap split">
      <div>
        <div class="sec-head">
          <p class="eyebrow">궁합 · 공유</p>
          <h2>별자리 궁합은 점수와 랭킹으로, 결과는 스토리 카드로</h2>
          <p class="lead">두 사람의 출생 차트를 겹쳐 나에게 어떤 사이인지 봐요. 연애 · 친구 · 일 · 가족, 사이마다 랭킹이 쌓여요. 내 별명과 궁합 점수, 랭킹, 다음 변곡점은 카드 한 장으로 만들어 인스타그램 스토리에 바로 올릴 수 있어요.</p>
        </div>
      </div>

      <div class="syn-visual">
        <div class="rank" aria-label="궁합 랭킹 예시">
          <h3>궁합 랭킹</h3>
          <div class="chips" aria-hidden="true"><span class="chip">연애</span><span class="chip on">친구</span><span class="chip">일</span><span class="chip">가족</span></div>
          <ol class="rows">
            <li class="row"><span class="n">1</span><span class="who">지우</span><span class="score">92<small>점</small></span></li>
            <li class="row"><span class="n">2</span><span class="who">하린</span><span class="score">86<small>점</small></span></li>
            <li class="row"><span class="n">3</span><span class="who">도윤</span><span class="score">79<small>점</small></span></li>
            <li class="row"><span class="n">4</span><span class="who">서진</span><span class="score">71<small>점</small></span></li>
          </ol>
        </div>

        <figure class="share" aria-label="궁합 공유 카드 예시">
          <svg class="specks" viewBox="0 0 248 441" preserveAspectRatio="none" aria-hidden="true">
            <g fill="#DCE2F5">
              <circle cx="22" cy="40" r=".9" opacity=".5"/><circle cx="214" cy="26" r="1.1" opacity=".6"/><circle cx="196" cy="150" r=".8" opacity=".4"/>
              <circle cx="34" cy="190" r="1" opacity=".35"/><circle cx="226" cy="260" r=".9" opacity=".45"/><circle cx="18" cy="318" r=".8" opacity=".4"/>
              <circle cx="120" cy="12" r=".7" opacity=".4"/><circle cx="64" cy="98" r=".7" opacity=".3"/><circle cx="232" cy="380" r="1" opacity=".35"/>
            </g>
          </svg>
          <svg class="by" viewBox="0 0 180 180" aria-hidden="true"><use href="#byeoli-happy"/></svg>
          <span class="k">궁합</span>
          <span class="pair">나 × 지우</span>
          <span class="num">92<small>점</small></span>
          <span class="one">말이 잘 통하고, 함께 있으면 편안해지는 사이</span>
          <span class="foot">
            <svg viewBox="0 0 212 112" role="img" aria-label="별명"><use href="#logo"/></svg>
            <span>태어난 순간의 하늘로 읽는 나</span>
          </span>
        </figure>
      </div>
    </div>
  </section>

  <!-- 약속 -->
  <section class="rule">
    <ul class="wrap promise">
      <li><b>지금은 모두 무료</b><span>요약 풀이부터 심층 리포트, 궁합까지 결제 없이 봐요.</span></li>
      <li><b>횟수 제한 없음</b><span>궁합은 몇 명이든, 몇 번이든 볼 수 있어요.</span></li>
      <li><b>웹 · iOS · Android</b><span>같은 계정으로 어디서든 이어서 봐요.</span></li>
      <li><b>출생 정보는 내 계정에만</b><span>내 출생 정보는 내 계정에만 두고, 궁합에 넣은 상대의 출생 정보는 저장하지 않아요.</span></li>
    </ul>
  </section>

  <!-- 자주 묻는 질문: 사람들이 실제로 검색하는 질문에 답한다. 글은 app/data/faq.ts 한 곳에 있다 -->
  <section class="sec rule" id="faq">
    <div class="wrap split">
      <div class="sec-head faq-head">
        <p class="eyebrow">자주 묻는 질문</p>
        <h2>처음이라면 궁금한 것들</h2>
      </div>
      <div class="faq">
        <div v-for="item in faq" :key="item.q" class="faq-item"><h3>{{ item.q }}</h3><p>{{ item.a }}</p></div>
      </div>
    </div>
  </section>

  <!-- 마지막 권유 (브랜드 자리: 로고) -->
  <section class="closing rule" id="start">
    <div class="wrap split">
      <div class="name-meaning">
        <svg class="big-mark" viewBox="0 0 212 112" role="img" aria-label="별명"><use href="#logo"/></svg>
        <dl>
          <div><dt>별 + 名</dt><dd>별이 지어 준 이름</dd></div>
          <div><dt>別名</dt><dd>나를 부르는 또 하나의 이름</dd></div>
        </dl>
      </div>
      <div>
        <h2>내 하늘이 지어 준 이름, 곧 받아 볼 수 있어요</h2>
        <ol class="steps">
          <li><span>구글 · 애플 · 카카오로 로그인<small>만 14세 이상</small></span></li>
          <li><span>생년월일 · 태어난 시각 · 태어난 곳<small>시각을 몰라도 돼요</small></span></li>
          <li><span>‘내 요약 보기’ 한 번</span></li>
        </ol>
        <LaunchButtons />
      </div>
    </div>
  </section>
  </div>
</template>
