# 별명 랜딩페이지 (byeolmyeong-landing)

앱 "별명" 의 소개 페이지. `byeolmyeong.com` 에 올린다. Nuxt 4 로 만들고 `nuxt generate` 로 정적 HTML 을 만들어 올린다(서버 없음). Node 22(`.nvmrc`).

## 파일
- `app/pages/index.vue` — 첫 화면(메타 · 구조화 정보 · 섹션 순서)
- `app/components/landing/` — 첫 화면의 섹션: `HeroSection` → `WhySection` → `FlowSection`(이렇게 써요) → `FeatureSection` → `PromiseSection` → `FaqSection` → `CtaSection`(다운로드)
- `app/layouts/default.vue` — 모든 페이지의 뼈대(머리 · 본문 · 바닥)
- `app/components/` — `AppHeader` · `AppFooter` · `PhoneFrame`(폰 틀) · `LaunchButtons`(웹에서 체험하기 + 스토어 배지) · `LegalDoc`(약관 한 편)
- `app/data/faq.ts` — 자주 묻는 질문. 화면과 FAQPage JSON-LD 가 여기서 나온다
- `app/data/links.ts` — 밖으로 나가는 주소(웹 앱. 스토어 링크는 출시 때 여기에)
- `app/plugins/reveal.ts` — `v-reveal`: 화면에 들어올 때 아래에서 떠오르며 나타난다(`v-reveal="120"` 은 120ms 늦게). 동작 줄이기면 움직이지 않고, 스크립트가 없으면 모두 보인다
- `app/assets/css/main.css` — 스타일 전부(`:root` 의 값은 앱 theme.ts 와 같다)
- `public/` — 그대로 올라가는 파일(파비콘 · 앱 아이콘 · 공유 이미지 · robots.txt · sitemap.xml · `brand/byeoli.svg`(별이) · `screens/`(앱 화면 그림))
- `nuxt.config.ts` — 사이트 전체의 `<head>`(언어 · 파비콘 · 글꼴 · 네이버 소유 확인 · og 공통값)

## 디자인의 출처 (여기서 새로 정하지 않는다)
- 시안: 캔버스 https://claude.ai/artifact/Rt33TzPSEe4PdxNRCej3xT 의 "랜딩" 페이지 — L1 첫 화면(데스크톱 1440 · 태블릿 768 · 폰 390, 같은 반응형 페이지) · L2 약관 페이지. 피그마 `PNrWFsXHhF8crQkLA3SYBn` "랜딩" 페이지. 구조 · 움직임은 디딧 랜딩(Hero → Why → How it works → Features → Download)을 참고했고, 디딧의 글 · 그림 · 상표 · 색은 쓰지 않는다
- 반응형 기준: 1024 이상 두 단 · 640~1023 한 단 가운데 정렬(위 메뉴 숨김 · 기능 카드 2열) · 640 아래 버튼 꽉 차게 · 기능 카드 1열 · 첫 화면 폰 하나
- 색 · 글꼴 · 굵기: 앱 저장소 `src/constants/theme.ts` (결정 033). `app/assets/css/main.css` 의 `:root` 가 같은 값을 쓴다
- 별이(`public/brand/byeoli.svg`): 앱 저장소 `assets/brand/` 의 별이와 같은 그림 (결정 035)
- 화면 그림: 캔버스의 앱 보드를 위에 상태 막대(9:41)를 얹어 2배(780×1688)로 찍은 PNG 가 원본(`store/screens/*.png`)이고, 랜딩은 그것을 WebP 로 바꾼 `public/screens/*.webp`(780 폭)와 `*-480.webp`(480 폭)를 쓴다(브라우저가 화면에 맞는 쪽을 고른다 — 성능). 앱 시안이 바뀌면 PNG 를 다시 찍고 WebP(품질 0.82)도 다시 만든다
- 문구 규칙은 앱과 같다: 건강 · 투자 · 미래 사건을 단정하지 않는다. 궁합은 1.1.0 이라 메뉴 · 섹션 · 자주 묻는 질문 · 메타에 넣지 않는다(앱 결정 055)

## 공유 이미지 (링크 미리보기)
- `public/og.png`(1200×630)는 `og/og-image.html` 을 찍은 것이다. 카카오톡 · 메신저 · SNS 에 링크를 붙이면 나온다
- 다시 찍기: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=6000 --screenshot="$PWD/public/og.png" "file://$PWD/og/og-image.html"`
- 카카오톡은 미리보기를 한동안 저장해 둔다. 바꾼 뒤에는 카카오 개발자 사이트의 공유 디버거(도구 → 공유 디버거)에서 주소를 넣고 캐시를 지운다
- `og/` 와 README 는 배포에 넣지 않는다(`.vercelignore`)

## 스토어 등록 이미지
- `store/out/ios/01~08.png`(1290×2796 원본 — **App Store Connect 에는 1179×2556 으로 줄여 올린다**, 아래) · `store/out/play/01~08.png`(1080×1920, 플레이 휴대폰) · `store/out/play/feature.png`(1024×500, 플레이 대표 그래픽). 앱스토어 · 플레이스토어 앱 페이지의 "미리보기" 칸에 올린다. 아이패드는 앱이 지원하지 않아 없다
- 원본은 `store/shot.html`(sou.zip 스토어 이미지처럼: 위 두 줄 제목 + 실제 아이폰 모양 + 별 하늘. 1 장은 브랜드). 폰 화면은 `store/screens/*.png`(캔버스 앱 보드를 2배로 찍은 것)
- **플레이는 아이폰 틀을 쓰지 않는다**: 틀 없는 둥근 화면에 안드로이드 상태 막대(시계 왼쪽 · 와이파이 · 신호 · 배터리 오른쪽)와 아래 제스처 막대를 얹는다. 화면 그림에 박힌 iOS 상태 막대(9:41 · 아이폰 배터리)는 그 막대로 덮는다(덮는 색은 `SLIDES` 의 `bar`, 없으면 앱 바탕 #0D0E12). 구글 [미리보기 애셋 안내](https://support.google.com/googleplay/android-developer/answer/9866151)가 기기 그림을 피하라고 하고, 안드로이드 사용자에게 노치 있는 아이폰을 보여 주지 않으려고(2026-11-27). 제목 줄은 그림의 20% 안(지금 약 11%), "최고 · 1위 · 지금 받기" 같은 말은 넣지 않는다
- 플레이 콘솔에 올리는 파일(알파 없는 1080×1920 PNG 8장 · 대표 그래픽 · 512 아이콘)은 저장소 밖 `_shared/play-1.0.0/` 에 둔다
- **앱스토어 올리는 크기(2026-11 기준)**: App Store Connect 의 iPhone 필수 칸은 "Dynamic Island 지원 iPhone(중형 디스플레이)"이고 1179×2556 · 1206×2622 만 받는다. 1290×2796(옛 6.9형)은 "파일 크기가 유효하지 않습니다"로 거절된다(대형 칸은 선택이라 기본 화면에 없다). 찍은 뒤 `sips -z 2556 1179 -s format jpeg -s formatOptions 95 store/out/ios/0N.png --out 0N.jpg` 로 줄인다 — 비율이 거의 같아 잘리지 않는다. 올리기 전에 [스크린숏 규격](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications/)에서 필수 칸 크기를 다시 본다
- 다시 찍기: 저장소 맨 위에서 `python3 -m http.server 47817` 을 띄우고 `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1290,2796 --virtual-time-budget=6000 --screenshot="$PWD/store/out/ios/02.png" "http://127.0.0.1:47817/store/shot.html?s=ios&n=2"` (플레이는 `--window-size=1080,1920` · `s=play`, 대표 그래픽은 `--window-size=1024,500` · `s=feature`)
- `store/` 는 배포에 넣지 않는다(`.vercelignore`)

## 로컬에서 보기
```
npm install
npm run dev        # http://localhost:3000
npm run generate   # 정적 HTML → .output/public (배포와 같은 결과)
```

## 배포
- Vercel `swyp` 팀의 `byeolmyeong-landing` 프로젝트가 이 저장소의 `main` 을 빌드해 올린다(`vercel.json`: Nuxt, `nuxt generate`). `main` 에 푸시하면 몇 분 안에 https://byeolmyeong.com 이 바뀐다.
- 브랜치는 `main` 하나만 쓴다(develop · 스테이징 없음).
- 도메인: `byeolmyeong.com`(대표) · `www.byeolmyeong.com`(대표로 308 이동). DNS 는 Cloudflare 에 있다(CNAME → Vercel, 프록시 끔). 같은 도메인의 메일(`support@`) 레코드는 건드리지 않는다.

## 검색(SEO)
- 검색 결과의 제목 · 설명은 `<title>` · `<meta name="description">`, 링크 미리보기는 `og:` 값이다(서로 다르게 둔다)
- `robots.txt` · `sitemap.xml` · JSON-LD(Organization · WebSite · SoftwareApplication · FAQPage)가 있다. 페이지가 늘면 `sitemap.xml` 에 더한다
- "자주 묻는 질문"(`#faq`)을 고치면 `<head>` 의 FAQPage JSON-LD 도 같은 글로 고친다. 답은 앱의 실제 동작(docs/release-1.0.0.md)과 맞아야 한다
- 구글 서치 콘솔 · 네이버 서치어드바이저에 `byeolmyeong.com` 을 등록하고 사이트맵을 제출한다(소유 확인은 Cloudflare DNS 의 TXT 레코드)

## 이용약관 · 개인정보 처리방침
- `/terms` · `/privacy` · `/privacy-consent` · `/marketing-terms`. 화면은 `LegalDoc` 하나(캔버스 "랜딩" L2): 제목 + 시행일 → 문서 탭 넷 → 데스크톱은 왼쪽 조항 목록(스크롤에 따라 지금 조항 밝게) + 본문 740, 1024 아래는 조항 목록을 접기 상자로, 640 아래 표는 줄마다 카드
- 글은 `app/data/legal.ts` 한 곳에 있고, 형식은 소유자의 다른 서비스(souzip.com)를 따른다("제N조", 짧게)
- `/delete-account`(계정 삭제 안내): Google Play 데이터 보안의 "계정 삭제 URL" 이다. 구글 요건대로 Play 앱 이름(`legalInfo.playAppName`), 앱 없이 메일로 요청하는 방법, 지우는 데이터, 남는 데이터와 기간을 보인다. 같은 `LegalDoc` 을 `guide` 로 쓴다(문서 탭 대신 Play 앱 이름 · 운영자 줄, 목록 이름 "차례"). 글은 `legal.ts` 의 `accountDeletion` 이고 앱 사본은 없다. 처리방침의 보유 기간 · 위탁이 바뀌면 함께 고친다. 처리방침 제7조와 바닥글에서 링크한다
- 처리방침은 실제 동작대로 쓴다(근거: 서버 저장소 db/migration · 결정 010 · 013 · 014 · 015 · 020 · 021 · 022). 모으는 정보나 맡기는 업체가 바뀌면(1.1.0 광고 · 결제 · 푸시) 이 글을 먼저 고친다
- 처리방침에 "서비스 이용 기록 1년" 을 적었다. 서버는 지금 이용 기록(감사 기록)을 기한 없이 쌓으므로, 1년 지난 기록을 지우는 작업을 서버에 넣어야 한다

## 앱이 스토어에 나오면 할 것
- `app/components/LaunchButtons.vue` 의 흐린 스토어 배지(`store-b pre` 인 `<span>` 둘)를 스토어 링크(`<a>`, 주소는 `app/data/links.ts`)로 바꾸고, 아래 한 줄("앱은 출시를 준비하고 있어요 …")과 다운로드 설명("앱은 곧 스토어에 나와요 …")을 고친다
- "1.0.0 은 모두 무료" · 자주 묻는 질문 "무료예요?" · JSON-LD 의 가격은 1.1.0(유료 기능) 때 고친다
