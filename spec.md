# 거짓말쟁이 메뉴봇 — 기술 스펙

## 프로젝트 개요

사용자가 먹고 싶은 음식 카테고리나 재료를 입력하면, "거짓말쟁이 메뉴봇"이 진실과 거짓을 뒤섞은 호들갑스러운 메뉴 추천을 해주는 챗봇. 텍스트 응답과 함께 OpenAI TTS 스트리밍으로 음성도 동시에 재생.

---

## 아키텍처

```
[Browser]
  ├── Chat UI (Next.js)
  │     ├── POST /api/chat   → LLM 텍스트 스트리밍 (SSE)
  │     └── POST /api/tts    → OpenAI TTS 오디오 스트리밍 (ReadableStream)
  └── Audio Player (Web Audio API)

[API Layer]
  - Next.js App Router의 Route Handlers (서버리스 함수)
  - NestJS는 사용하지 않음 → 결정 필요 항목 참조
```

> **아키텍처 결정**: NestJS는 이 규모에서 불필요한 오버엔지니어링. API 엔드포인트 2개, DB/인증 없는 구조라 Next.js Route Handlers만으로 충분.

---

## 기능 스펙

### 1. 챗 플로우

1. 사용자가 음식 카테고리(일식, 중식 등) 또는 재료(삼겹살, 두부 등)를 입력
2. 봇이 단일 메뉴를 추천하며 다음을 포함:
   - **메뉴 이름**: 실제처럼 들리지만 지어낸 이름
   - **가게 이름**: 한국에 있을법한 실제처럼 들리는 가게 (주소/동네 포함)
   - **맛 설명**: 극도로 호들갑스럽게
   - **위치/주변 경치**: 주변 풍경, 먹은 후 갈 곳까지 호들갑
   - **TTS용 3줄 요약**: 짧고 명확한 문장 3개
3. 진실 정보에 거짓 정보를 자연스럽게 섞음 (예: 실제 동네명 + 허구의 가게명 + 과장된 메뉴 설명)

### 2. 어투 진행 시스템

대화 횟수에 따라 봇의 어투가 변화. 세션 단위로 카운트.

| 회차 | 어투 |
|------|------|
| 1회차 | 친절하고 다정하게 |
| 2회차 | 퉁명스럽게 |
| 3회차 | 싸가지 없게 |
| 4회차~ | 단답형 |

### 3. TTS 스트리밍

- OpenAI TTS API (`tts-1` 모델) 사용
- 텍스트 응답이 완성된 후 TTS_SUMMARY 3줄 추출 → TTS 요청 → 오디오 청크를 브라우저로 스트리밍
- 브라우저에서 Web Audio API로 실시간 재생 (버퍼 언더런 방지 처리 필요)
- 재생 중 스킵/정지 버튼 제공

---

## 기술 스택

| 구분 | 선택 |
|------|------|
| Frontend | Next.js 15 (App Router) |
| Backend | Next.js Route Handlers (서버리스) |
| LLM | OpenAI GPT-4o-mini |
| TTS | OpenAI TTS (`tts-1`) |
| 배포 | Vercel |
| 스타일링 | Tailwind CSS |
| 상태관리 | React 내장 (useState/useReducer) |

---

## API 설계

### `POST /api/chat`

**Request**
```json
{
  "message": "일식 먹고 싶어",
  "turnCount": 1
}
```

**Response**: SSE (text/event-stream)
```
data: {"delta": "오늘은 정말이지..."}
data: {"delta": " 도쿄 감성 물씬 풍기는..."}
data: [DONE]
```

응답 본문 끝에 `TTS_SUMMARY:` 마커로 3줄 요약 포함:
```
TTS_SUMMARY:
오늘은 홍대 골목 깊숙이 숨어있는 스시집, 나미야 스시 본점을 추천해.
참치 뱃살이 입에서 녹아 없어지는 마법 같은 맛이야.
식사 후엔 홍대 거리 야경도 꼭 즐겨봐!
```

### `POST /api/tts`

**Request**
```json
{
  "text": "오늘은 홍대 골목...\n참치 뱃살이...\n식사 후엔..."
}
```

**Response**: `audio/mpeg` 스트리밍 바이너리

---

## 시스템 프롬프트 구조

```
너는 거짓말쟁이 메뉴봇이야. 현재 어투: {tone}

[응답 형식]
1. 가게명(지어낸 것) + 위치(실제 동네 + 허구 주소) + 메뉴명
2. 맛 설명: 호들갑 극대화, 불가능한 묘사 1~2개 포함
3. 위치/주변 풍경: 호들갑 + 식후 코스 추천
4. 마지막에 반드시 아래 형식으로 TTS 요약 포함:
   TTS_SUMMARY:
   (첫 번째 줄: 가게/메뉴 소개, 30자 이내)
   (두 번째 줄: 맛 포인트, 30자 이내)
   (세 번째 줄: 위치/식후 추천, 30자 이내)

[거짓말 규칙]
- 맛 설명에 물리적으로 불가능한 묘사 포함 (예: "먹는 순간 시간이 멈추는 느낌")
- 가게 수상 이력/역사를 지어냄
- 위치는 실제 동네 + 허구의 세부 주소
```

---

## 폴더 구조

```
/
├── app/
│   ├── page.tsx              # 메인 챗 UI
│   ├── api/
│   │   ├── chat/route.ts     # LLM 스트리밍
│   │   └── tts/route.ts      # TTS 스트리밍
│   └── layout.tsx
├── components/
│   ├── ChatWindow.tsx
│   ├── MessageBubble.tsx
│   └── AudioPlayer.tsx
├── lib/
│   ├── openai.ts             # OpenAI 클라이언트
│   └── prompts.ts            # 시스템 프롬프트 + tone 생성
└── vercel.json               # 함수 타임아웃 설정
```

---

## 환경 변수

```env
OPENAI_API_KEY=sk-...
```

---

## Vercel 배포 고려사항

- Route Handler 기본 타임아웃 10초 → TTS 스트리밍은 `export const maxDuration = 30` 설정
- Edge Runtime은 OpenAI Node SDK 미호환 → **Node.js Runtime 사용**
- `vercel.json` 예시:
```json
{
  "functions": {
    "app/api/tts/route.ts": { "maxDuration": 30 },
    "app/api/chat/route.ts": { "maxDuration": 30 }
  }
}
```

---

## 결정이 필요한 항목

### 1. TTS 음성
**확정: `fable`** (이야기꾼 느낌, 코믹한 캐릭터에 적합)

### 2. TTS 트리거 타이밍
**확정: 병렬 방식** — 텍스트 스트리밍 중 `TTS_SUMMARY:` 마커 감지 즉시 TTS 요청 시작

구현 방식:
1. `/api/chat` SSE 스트림을 프론트에서 청크 단위로 읽으며 버퍼링
2. 버퍼에서 `TTS_SUMMARY:` 감지되는 순간 → 이후 3줄 수집 후 `/api/tts` 요청
3. 텍스트 렌더링과 오디오 재생이 거의 동시에 시작

### 3. UI 스타일
**확정: Google Stitch에서 디자인 가져올 예정** — 디자인 확인 후 반영
