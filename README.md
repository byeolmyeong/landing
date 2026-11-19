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

## 로컬에서 보기
```
python3 -m http.server 8000   # http://localhost:8000
```

## 배포
Cloudflare Pages 가 이 저장소의 `main` 을 그대로 올린다(빌드 명령 없음, 출력 디렉터리 `/`). `main` 에 합치면 몇 분 안에 바뀐다.

## 출시 전에 할 것
- `index.html` 의 `<meta name="robots" content="noindex">` 지우기
- 버튼 링크(`#start`)를 웹 앱 주소 · 앱스토어 · 플레이스토어 주소로 바꾸기
- 바닥의 이용약관 · 개인정보처리방침 · 문의하기 링크 채우기
- "지금은 모두 무료" 문구는 1.1.0(유료 기능) 때 고치기
