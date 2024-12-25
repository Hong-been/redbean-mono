# Snow Step Client

## 프로젝트 구조

이 프로젝트는 도메인 주도 설계(DDD) 구조를 따릅니다:

```shell
src/
├── domain/          # 도메인별 비즈니스 로직
│   └── auth/        # 인증 관련 기능
│       └── repositories/
│           └── authRepository.ts  # 인증 관련 API 통신 처리
├── app/            # Next.js 앱 라우터 페이지
└── _components/     # 공통 UI 컴포넌트
```

### 도메인 레이어
- 각 도메인(예: auth)은 자체 로직과 데이터 처리를 포함
- `repositories/`: 외부 시스템과의 통신 담당(API 호출, DB 접근, 외부 서비스 통합 등)


### 도메인 레이어
- 각 도메인(예: auth)은 자체 로직과 데이터 처리를 포함
- `repositories/`: 외부 통신 및 데이터 작업 처리

### Application 레이어 추가 기준
현재는 단순 인증 처리만 있어 repository 레이어만 사용중이나, 다음과 같은 경우 application 레이어(service)를 추가할 예정입니다:

1. 여러 repository의 조합이 필요한 경우
   - 예: 사용자 인증 후 프로필 정보도 함께 가져와야 하는 경우
   - `authService.ts`에서 `googleAuthRepository`와 `userProfileRepository` 조합

2. 복잡한 비즈니스 로직이 추가되는 경우
   - 예: 인증 후 사용자 권한 검사, 세션 관리 등
   - 토큰 관리, 권한 검증 등의 로직을 `authService.ts`로 분리

3. 도메인 규칙이 복잡해지는 경우
   - 예: 소셜 로그인 통합 (Google, Kakao 등)
   - 각 소셜 로그인의 공통 로직을 service 레이어에서 처리

이러한 경우 다음과 같은 구조로 확장될 수 있습니다:
```shell
domain/
└── auth/
    ├── application/
    │   └── authService.ts     # 비즈니스 로직, 여러 repository 조합
    └── repositories/
        ├── googleAuthRepository.ts
        ├── kakaoAuthRepository.ts
        └── userProfileRepository.ts
```