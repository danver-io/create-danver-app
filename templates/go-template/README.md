# Go Template

간단한 HTTP 서버를 빠르게 시작할 수 있는 Go 템플릿입니다.

## 기능

- 표준 HTTP 서버
- MongoDB 연결
- JSON 응답 포맷
- CORS 지원
- 환경 변수 설정
- 기본적인 라우팅
- 상태 확인 엔드포인트
- 사용자 관리 API

## 시작하기

1. 프로젝트 생성

```bash
create-danver-app go my-app
```

2. 프로젝트 디렉토리로 이동

```bash
cd my-app
```

3. 의존성 설치

```bash
go mod tidy
```

4. 환경 변수 설정

```bash
export MONGODB_URI="mongodb://localhost:27017"
export PORT="8080"
```

5. 서버 실행

```bash
go run main.go
```

## API 엔드포인트

### GET /

기본 웰컴 메시지를 반환합니다.

### GET /health

서버의 상태를 확인합니다.

### 사용자 관리 API

#### GET /users

모든 사용자 목록을 반환합니다.

#### POST /users

새로운 사용자를 생성합니다.

요청 본문:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### GET /users/:id

특정 사용자의 정보를 반환합니다.

#### PUT /users/:id

사용자 정보를 업데이트합니다.

요청 본문:

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### DELETE /users/:id

사용자를 삭제합니다.

## 환경 변수

- `PORT`: 서버 포트 (기본값: 8080)
- `MONGODB_URI`: MongoDB 연결 URI

## 응답 형식

모든 API 응답은 다음 형식을 따릅니다:

```json
{
  "data": {},
  "status": 200,
  "error": "",
  "success": true
}
```

## 프로젝트 구조

```
my-app/
├── main.go     # 메인 애플리케이션
├── go.mod      # Go 모듈 정의
└── README.md   # 프로젝트 문서
```
