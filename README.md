# 서경진 포트폴리오 웹사이트

React, TypeScript, Next.js를 활용한 프론트엔드 개발자 서경진의 포트폴리오 웹사이트입니다.

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적의 사용자 경험 제공
- **SEO 최적화**: Next.js SSG 기능으로 검색 엔진 최적화
- **모던 UI/UX**: shadcn/ui와 Tailwind CSS를 활용한 깔끔한 디자인
- **스무스 스크롤**: 섹션 간 부드러운 네비게이션
- **접근성 고려**: 키보드 네비게이션과 스크린 리더 지원

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter, Noto Sans KR
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 글로벌 스타일
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── sections/          # 페이지 섹션 컴포넌트
│   │   ├── hero.tsx       # 메인 히어로 섹션
│   │   ├── about.tsx      # 소개 섹션
│   │   ├── tech-stack.tsx # 기술 스택 섹션
│   │   ├── projects.tsx   # 프로젝트 섹션
│   │   └── contact.tsx    # 연락처 섹션
│   ├── navigation.tsx     # 네비게이션 컴포넌트
│   └── footer.tsx         # 푸터 컴포넌트
```

## 🚀 시작하기

### 필수 조건

- Node.js 18 이상
- npm 또는 yarn

### 설치 및 실행

1. 의존성 설치:

```bash
npm install
```

2. 개발 서버 실행:

```bash
npm run dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint
```

## 📝 페이지 구성

### 1. Hero Section (홈)

- 개발자 소개 및 핵심 메시지
- 주요 연락처 링크
- 스킬 하이라이트

### 2. About Section (소개)

- 개발 동기 및 목표
- 개인적인 강점과 특징
- 개발 철학

### 3. Tech Stack Section (기술 스택)

- 기술별 숙련도 시각화
- 카테고리별 기술 분류
- 학습 중인 기술들

### 4. Projects Section (프로젝트)

- 주요 프로젝트 소개
- 기술 스택 및 주요 기능
- GitHub 및 라이브 데모 링크

### 5. Contact Section (연락처)

- 다양한 연락 방법 제공
- 소셜 미디어 링크
- 협업 관련 정보

## 🎨 디자인 시스템

- **색상**: Neutral 기반 색상 팔레트
- **타이포그래피**: Inter(영문), Noto Sans KR(한글)
- **간격**: Tailwind CSS 기본 spacing 시스템
- **반응형**: Mobile-first 접근법

## ♿ 접근성

- 시맨틱 HTML 마크업
- 키보드 네비게이션 지원
- 적절한 색상 대비 (WCAG 2.1 AA 준수)
- 스크린 리더 친화적 구조
- 모션 감소 옵션 지원

## 📱 반응형 지원

- **Mobile**: 360px ~ 767px
- **Tablet**: 768px ~ 1023px
- **Desktop**: 1024px 이상

## 🔧 커스터마이징

1. **개인 정보 수정**: 각 섹션 컴포넌트에서 텍스트 및 링크 수정
2. **스타일 변경**: `globals.css` 또는 Tailwind 클래스 수정
3. **새 섹션 추가**: `src/components/sections/` 에 새 컴포넌트 생성

## 📞 연락처

- **이메일**: kyoungjin.dev@gmail.com
- **GitHub**: [github.com/kyoungjin](https://github.com)
- **LinkedIn**: [linkedin.com/in/kyoungjin](https://linkedin.com)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

⭐ 이 프로젝트가 도움이 되었다면 star를 눌러주세요!
