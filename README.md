# 별명 랜딩페이지 (byeolmyeong-landing)

앱 "별명" 의 소개 페이지. `byeolmyeong.com` 에 올린다. 빌드 없는 정적 페이지 하나다.

## 파일
- `index.html` — 페이지 전부(CSS · 그림 · 스크립트가 한 파일 안에 있다)
- `favicon.png` · `apple-touch-icon.png` — 앱 아이콘(앱 저장소 `assets/images/`)에서 가져왔다

## 디자인의 출처 (여기서 새로 정하지 않는다)
- 색 · 글꼴 · 굵기: 앱 저장소 `src/constants/theme.ts` (결정 033). `index.html` 의 `:root` 가 같은 값을 쓴다
- 로고 · 별이 · 빛나는 아이콘: 앱 저장소 `assets/brand/*.svg` · `src/components/glow.tsx` (결정 035). 같은 좌표로 그렸다
- 빛 · 유리 · 별이는 브랜드 자리(히어로 · 홈 아이콘 · 공유 카드 · 마지막 로고)에만. 버튼 · 카드 · 글은 평평하게
- 문구 규칙은 앱과 같다: 건강 · 투자 · 미래 사건을 단정하지 않는다. 궁합 점수 · 별명 문장 · 시기 연도는 화면에 "예시" 로 표시한 지어낸 값이다

## 공유 이미지 (링크 미리보기)
- `og.png`(1200×630)는 `og/og-image.html` 을 찍은 것이다. 카카오톡 · 메신저 · SNS 에 링크를 붙이면 나온다
- 다시 찍기: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=6000 --screenshot="$PWD/og.png" "file://$PWD/og/og-image.html"`
- 카카오톡은 미리보기를 한동안 저장해 둔다. 바꾼 뒤에는 카카오 개발자 사이트의 공유 디버거(도구 → 공유 디버거)에서 주소를 넣고 캐시를 지운다
- `og/` 와 README 는 배포에 넣지 않는다(`.vercelignore`)

## 로컬에서 보기
```
python3 -m http.server 8000   # http://localhost:8000
```

## 배포
- Vercel `swyp` 팀의 `byeolmyeong-landing` 프로젝트가 이 저장소의 `main` 을 그대로 올린다(빌드 명령 없음). `main` 에 푸시하면 1분 안에 https://byeolmyeong.com 이 바뀐다.
- 브랜치는 `main` 하나만 쓴다(develop · 스테이징 없음).
- 도메인: `byeolmyeong.com`(대표) · `www.byeolmyeong.com`(대표로 308 이동). DNS 는 Cloudflare 에 있다(CNAME → Vercel, 프록시 끔). 같은 도메인의 메일(`support@`) 레코드는 건드리지 않는다.

## 검색(SEO)
- 검색 결과의 제목 · 설명은 `<title>` · `<meta name="description">`, 링크 미리보기는 `og:` 값이다(서로 다르게 둔다)
- `robots.txt` · `sitemap.xml` · JSON-LD(Organization · WebSite · SoftwareApplication · FAQPage)가 있다. 페이지가 늘면 `sitemap.xml` 에 더한다
- "자주 묻는 질문"(`#faq`)을 고치면 `<head>` 의 FAQPage JSON-LD 도 같은 글로 고친다. 답은 앱의 실제 동작(docs/release-1.0.0.md)과 맞아야 한다
- 구글 서치 콘솔 · 네이버 서치어드바이저에 `byeolmyeong.com` 을 등록하고 사이트맵을 제출한다(소유 확인은 Cloudflare DNS 의 TXT 레코드)

## 출시 전에 할 것
- "출시 준비 중" 표시(`btn-soon` · `is-soon` 인 `<span>` 두 곳: 히어로 · 마지막 권유)를 웹 앱 · 앱스토어 · 플레이스토어 링크(`<a>`)로 바꾸기
- 출시 전이라 바꿔 둔 문구 되돌리기: 마지막 권유 제목 "곧 받아 볼 수 있어요" → "받아 보세요", 머리 메뉴 "시작하는 법" → "시작하기"
- 바닥의 이용약관 · 개인정보처리방침 · 문의하기 링크 채우기
- "지금은 모두 무료" 문구는 1.1.0(유료 기능) 때 고치기
