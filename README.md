# Create Danver App

React와 Go 프로젝트를 빠르게 시작할 수 있는 CLI 도구입니다.

## 설치 방법

```bash
npm install -g create-danver-app
```

또는

```bash
yarn global add create-danver-app
```

## 사용 방법

### React 프로젝트 생성

```bash
create-danver-app react my-app
```

### Go 프로젝트 생성

```bash
create-danver-app go my-app
```

## 지원하는 템플릿

### React 템플릿

- Vite + React + TypeScript
- Tailwind CSS
- Shadcn/ui 컴포넌트
- 표준화된 API 클라이언트
- 환경 변수 설정
- ESLint + Prettier

### Go 템플릿

- Go 1.21+
- 표준 라이브러리
- 간단한 HTTP 서버
- 기본적인 프로젝트 구조

## React 템플릿 구조

```
my-app/
├── src/
│   ├── apis/           # API 클라이언트 및 엔드포인트
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── utils/          # 유틸리티 함수
│   └── App.tsx         # 메인 애플리케이션
├── public/             # 정적 파일
├── index.html          # HTML 템플릿
├── package.json        # 의존성 관리
└── vite.config.ts      # Vite 설정
```

## API 클라이언트 사용법

```typescript
import { apiGet, apiPost } from "@/apis";

// GET 요청
const response = await apiGet<User>("/users", { page: 1 });

// POST 요청
const response = await apiPost<User>("/users", { name: "John" });
```

## 환경 변수 설정

`.env` 파일을 생성하여 다음 환경 변수를 설정할 수 있습니다:

```env
VITE_API_URL=https://api.example.com
```

## 개발 서버 실행

```bash
cd my-app
npm install
npm run dev
```

또는

```bash
cd my-app
yarn
yarn dev
```

## 빌드

```bash
npm run build
```

또는

```bash
yarn build
```

## 라이선스

MIT
