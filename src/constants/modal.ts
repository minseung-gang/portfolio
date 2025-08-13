import Close from '@/components/icons/Close';
import { PROJECT_ROUTE } from './project';

import { Github, Link } from '@/components/icons';

export const PROJECT_HAPPYPILL_CONTENTS = {
  title: '해피필(happyPill)',
  period: '2025-07 ~ 진행 중',
  team: '6명(FE 2, BE 3, 디자이너 1)',
  teckStack: ['React', 'TailwindCSS', 'Typescript', 'React Query', 'Zustand', 'HookForm', 'Zod'],
  description:
    '바쁜 현대 사회에서 현대인들이 신경쓸 수 있도록 영양제를 주기적으로 배송해주는 정기 구독 서비스입니다.',
  actions: [
    { type: 'close', icon: Close },
    { type: 'github', icon: Github, url: PROJECT_ROUTE.happyPill.github },
    { type: 'domain', icon: Link, url: PROJECT_ROUTE.happyPill.domain },
  ],
  features: {
    icon: '⚙️',
    title: '주요기능  및 특징',
    items: [
      'Compound Pattern 기반 공통 컴포넌트 설계',
      '커스텀 Carousel 컴포넌트 개발',
      '장바구니 상태 관리 및 UI 구현',
      '전역 모달 상태 관리 시스템 구축',
      '결제 페이지 유효성 검사 및 결제 모듈 연동',
      'React Query를 활용한 데이터 페칭 및 페이징 처리',
      'Tailwind CSS 기반 디자인 토큰 적용',
    ],
  },
  contributions: {
    icon: '💡',
    title: '작업 기여도',
    contents: [
      {
        icon: '🔹',
        section: '커스텀 Carousel 슬라이더 구현',
        items: [
          'AI들을 활용하여 마우스 드래그 기반 슬라이드, 무한스크롤, 3가지 슬라이드 모드(peek/center/basic) 구현',
          'transform과 드래그 offset 계산을 통해 자연스러운 인덱스 전환 및 슬라이딩 애니메이션 처리',
        ],
      },
      {
        icon: '🔹',
        section: '합성 컴포넌트 패턴 구현',
        items: [
          'Select, Tabs, Modal, Carousel 등을 합성 컴포넌트 패턴으로 구현 재사용성과 확장성을 고려한 구조로 설계하여, 팀원들과 협업 시 컴포넌트 일관성',
        ],
      },
      {
        icon: '🔹',
        section: 'TailwindCSS v4의 CSS 기반 디자인 토큰 시스템 활용',
        items: [
          'CSS 변수와 @layer theme을 활용해 색상, 폰트, 간격 등 디자인 토큰을 체계적으로 관리',
        ],
      },
      {
        icon: '🔹',
        section: '아토믹 디자인 패턴을 통한 체계적인 컴포넌트 구조 설계',
        items: [
          '컴포넌트를 atoms, molecules, organisms 단위로 체계적으로 설계하여 유지보수성과 확장성 향상',
        ],
      },
      {
        icon: '🔹',
        section: '포트원 결제 모듈 연동',
        items: [
          '테스트 환경에서 신뢰가능 검증 폼으로 구현 및 검증 완료',
          'React Hook Form과 Zod를 활용한 검증 정보 입력 및 유효성 검사 구현',
          '결제 취소 시 사용자 친화적 모달 안내 처리',
        ],
      },
      {
        icon: '🔹',
        section: 'TanStack Query 활용한 효율적인 데이터 패칭',
        items: [
          'useMutation, useQuery를 사용해 개선된 데이터 활용으로 불필요한 네트워크 요청 최소화',
          'staleTime을 활용해서 캐시 데이터의 최신 상태를 유지',
          'useInfiniteQuery를 활용해 무한 스크롤 방식의 페이징 처리 구현',
        ],
      },
    ],
  },
  troubleShooting: [
    {
      icon: '🚨',
      title: '트러블 슈팅',
      contents: [
        {
          icon: '🔹',
          title: 'React Carousel 드래그 후 클릭 이벤트 문제',
          details: [
            {
              type: '문제점',
              content:
                'Tailwind CSS v4로 업그레이드 후 twMerge 라이브러리와의 호환성 문제가 발생했습니다. 기존 코드에서 클래스 병합이 제대로 동작하지 않아 스타일이 의도대로 적용되지 않는 문제가 있었습니다.',
            },
            {
              type: '해결',
              content:
                'Tailwind v4의 새로운 클래스명 체계와 twMerge의 호환성을 확인하고, extendTailwindMerge를 사용해서 다른 클래스 그룹으로 분리하여 충돌을 해결했습니다. 이를 통해 클래스 병합 로직을 개선했습니다. ',
            },
            {
              type: '회고',
              content:
                '버전 업그레이드 시 의존성 라이브러리와의 호환성을 사전에 검토하는 것이 중요함을 배웠습니다. 앞으로는 새로운 버전 도입 전 충분한 테스트와 문서 확인을 통해 문제를 사전에 방지할 계획입니다.',
            },
          ],
        },
        {
          icon: '🔹',
          title: 'Tailwind CSS v4와 twMerge 충돌 이슈',
          details: [
            {
              type: '문제점',
              content:
                'Tailwind CSS v4로 업그레이드 후 twMerge 라이브러리와의 호환성 문제가 발생했습니다. 기존 코드에서 클래스 병합이 제대로 동작하지 않아 스타일이 의도대로 적용되지 않는 문제가 있었습니다.',
            },
            {
              type: '해결',
              content:
                'Tailwind v4의 새로운 클래스명 체계와 twMerge의 호환성을 확인하고, extendTailwindMerge를 사용해서 다른 클래스 그룹으로 분리하여 충돌을 해결했습니다. 이를 통해 클래스 병합 로직을 개선했습니다',
            },
            {
              type: '회고',
              content:
                '버전 업그레이드 시 의존성 라이브러리와의 호환성을 사전에 검토하는 것이 중요함을 배웠습니다. 앞으로는 새로운 버전 도입 전 충분한 테스트와 문서 확인을 통해 문제를 사전에 방지할 계획입니다.',
            },
          ],
        },
        {
          icon: '🔹',
          title: '페이지네이션 lastProductId 잘림 이슈',
          details: [
            {
              type: '문제점',
              content:
                '무한 스크롤 페이지네이션에서 lastProductId가 잘려서 전달되어 다음 페이지 데이터를 올바르게 가져오지 못하는 문제가 발생했습니다.',
            },
            {
              type: '해결',
              content:
                '네트워크 탭과 콘솔을 통해 API 요청 과정을 디버깅하여 ID 값이 어느 시점에서 잘리는지 파악했습니다. URL 인코딩 문제와 데이터 타입 변환 과정에서 발생하는 이슈를 해결하고, ID 값의 안전한 전달을 위한 검증 로직을 추가했습니다.',
            },
            {
              type: '회고',
              content:
                '이번 이슈를 통해 디버깅 시 전체 데이터 흐름을 체계적으로 추적하는 것이 중요하다는 것을 느꼈습니다.  또한 ID와 같은 핵심 데이터는 중간 단계에서 변형되거나 손실되지 않도록 꼼꼼한 검증이 필요하다는 교훈을 얻었습니다.',
            },
          ],
        },
      ],
    },
  ],
  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: {},
  },
};

export const PROJECT_GEORIM_CONTENTS = {
  title: '거림(georim)',
  period: '2023-04.07 ~ 2023.05.20',
  team: '2명(FE 1, 디자이너 1)',
  teckStack: [
    'React',
    'Typescript',
    'Recoil',
    'StyledComponents',
    'Nodejs',
    'Express',
    'MySQL',
    'EC2',
    'PM2',
  ],
  description: '부동산 업종의 회사를 소개하는 반응형 웹페이지입니다.',
  actions: [
    { type: 'close', icon: Close },
    { type: 'github', icon: Github, url: PROJECT_ROUTE.georim.github },
    { type: 'domain', icon: Link, url: PROJECT_ROUTE.georim.domain },
  ],
  features: {
    icon: '⚙️',
    title: '주요기능  및 특징',
    items: [
      'Framer-motion 라이브러리를 활용하여 애니메이션 구현',
      '브라우저, 화면의 원칙에 적합한 반응형 UI 구현',
      'Intersection Observer API를 활용하여 무한 스크롤 구현 및 Skeleton UI를 적용',
      'JWT 토큰 및 리프레시 토큰 구현',
      'Node.js와 MySQL을 이용하여 CRUD 기능 구현',
      'multer 라이브러리를 활용하여 이미지 업로드 및 플레이터 처리를 효율적으로 처리',
      'AWS EC2를 활용하여 서버 배포',
      'Nginx 리버스 프록시를 적용하여 안정적이고 확장 가능한 서비스 환경 구축',
    ],
  },
  contributions: {
    icon: '💡',
    title: '작업 기여도',
    contents: [
      {
        icon: '🔹',
        section: '프론트엔드 애니메이션 구현',
        items: [
          'Framer-motion 라이브러리를 활용하여 부동산 프로젝트 소개 페이지에 부드러운 페이드인/아웃 효과 적용',
          '브라우저 호환성을 고려한 반응형 UI 설계 및 구현으로 모바일, 태블릿, 데스크톱 환경에서 일관된 사용자 경험 제공',
        ],
      },
      {
        icon: '🔹',
        section: '무한 스크롤 구현',
        items: [
          'Intersection Observer API를 활용한 부동산 매물 리스트 무한 스크롤 기능 개발',
          'Skeleton UI 컴포넌트 설계 및 구현으로 데이터 로딩 중 사용자에게 즉각적인 피드백 제공',
        ],
      },
      {
        icon: '🔹',
        section: '백엔드 API 개발',
        items: [
          'Node.js와 Express.js 기반 RESTful API 설계 및 개발',
          'JWT 토큰 및 Refresh Token 기반 사용자 인증 시스템 구현',
          'MySQL 데이터베이스 스키마 설계 및 정규화 작업을 통한 데이터 무결성 보장',
          'Sequelize ORM 활용한 데이터베이스 모델링 및 마이그레이션 관리',
          'multer 라이브러리를 활용한 부동산 매물 이미지 업로드 시스템 구현',
        ],
      },
      {
        icon: '🔹',
        section: '서버 배포 및 인프라 구축',
        items: [
          'AWS EC2 인스턴스 설정 및 Ubuntu 서버 환경 구성',
          'Nginx 웹 서버 설정 및 리버스 프록시 구성으로 정적 파일 서빙 최적화',
          'PM2 프로세스 매니저를 통한 Node.js 애플리케이션 상시 운영 및 자동 재시작 설정',
        ],
      },
      {
        icon: '🔹',
        section: '포트원 결제 모듈 연동',
        items: [
          '테스트 환경에서 신뢰가능 검증 폼으로 구현 및 검증 완료',
          'React Hook Form과 Zod를 활용한 검증 정보 입력 및 유효성 검사 구현',
          '결제 취소 시 사용자 친화적 모달 안내 처리',
        ],
      },
      {
        icon: '🔹',
        section: 'TanStack Query 활용한 효율적인 데이터 패칭',
        items: [
          'useMutation, useQuery를 사용해 개선된 데이터 활용으로 불필요한 네트워크 요청 최소화',
          'staleTime을 활용해서 캐시 데이터의 최신 상태를 유지',
          'useInfiniteQuery를 활용해 무한 스크롤 방식의 페이징 처리 구현',
        ],
      },
    ],
  },
  troubleShooting: [
    {
      icon: '🚨',
      title: '트러블 슈팅',
      contents: [
        {
          icon: '🔹',
          title: 'React Carousel 드래그 후 클릭 이벤트 문제',
          details: [
            {
              type: '문제점',
              content:
                'Tailwind CSS v4로 업그레이드 후 twMerge 라이브러리와의 호환성 문제가 발생했습니다. 기존 코드에서 클래스 병합이 제대로 동작하지 않아 스타일이 의도대로 적용되지 않는 문제가 있었습니다.',
            },
            {
              type: '해결',
              content:
                'Tailwind v4의 새로운 클래스명 체계와 twMerge의 호환성을 확인하고, extendTailwindMerge를 사용해서 다른 클래스 그룹으로 분리하여 충돌을 해결했습니다. 이를 통해 클래스 병합 로직을 개선했습니다. ',
            },
            {
              type: '회고',
              content:
                '버전 업그레이드 시 의존성 라이브러리와의 호환성을 사전에 검토하는 것이 중요함을 배웠습니다. 앞으로는 새로운 버전 도입 전 충분한 테스트와 문서 확인을 통해 문제를 사전에 방지할 계획입니다.',
            },
          ],
        },
        {
          icon: '🔹',
          title: 'Tailwind CSS v4와 twMerge 충돌 이슈',
          details: [
            {
              type: '문제점',
              content:
                'Tailwind CSS v4로 업그레이드 후 twMerge 라이브러리와의 호환성 문제가 발생했습니다. 기존 코드에서 클래스 병합이 제대로 동작하지 않아 스타일이 의도대로 적용되지 않는 문제가 있었습니다.',
            },
            {
              type: '해결',
              content:
                'Tailwind v4의 새로운 클래스명 체계와 twMerge의 호환성을 확인하고, extendTailwindMerge를 사용해서 다른 클래스 그룹으로 분리하여 충돌을 해결했습니다. 이를 통해 클래스 병합 로직을 개선했습니다',
            },
            {
              type: '회고',
              content:
                '버전 업그레이드 시 의존성 라이브러리와의 호환성을 사전에 검토하는 것이 중요함을 배웠습니다. 앞으로는 새로운 버전 도입 전 충분한 테스트와 문서 확인을 통해 문제를 사전에 방지할 계획입니다.',
            },
          ],
        },
        {
          icon: '🔹',
          title: '페이지네이션 lastProductId 잘림 이슈',
          details: [
            {
              type: '문제점',
              content:
                '무한 스크롤 페이지네이션에서 lastProductId가 잘려서 전달되어 다음 페이지 데이터를 올바르게 가져오지 못하는 문제가 발생했습니다.',
            },
            {
              type: '해결',
              content:
                '네트워크 탭과 콘솔을 통해 API 요청 과정을 디버깅하여 ID 값이 어느 시점에서 잘리는지 파악했습니다. URL 인코딩 문제와 데이터 타입 변환 과정에서 발생하는 이슈를 해결하고, ID 값의 안전한 전달을 위한 검증 로직을 추가했습니다.',
            },
            {
              type: '회고',
              content:
                '이번 이슈를 통해 디버깅 시 전체 데이터 흐름을 체계적으로 추적하는 것이 중요하다는 것을 느꼈습니다.  또한 ID와 같은 핵심 데이터는 중간 단계에서 변형되거나 손실되지 않도록 꼼꼼한 검증이 필요하다는 교훈을 얻었습니다.',
            },
          ],
        },
      ],
    },
  ],
  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: {},
  },
};

export const PROJECT_PULLBATTE_CONTENTS = {
  title: '풀밭에(pullbatte)',
  period: '2022.12 - 2023.02',
  team: '6명(FE 2, BE3, 디자이너 1)',
  teckStack: ['React', 'Typescript', 'Redux', 'StyledComponents', 'React Query'],
  description:
    '식물에 대한 정보를 공유하는 공간입니다. 테스트를 통해 성향에 맞는 반려식물을 소개 받거나, 함께하는 식물과의 일상을 기록할 수 있습니다.',
  actions: [
    { type: 'close', icon: Close },
    { type: 'github', icon: Github, url: PROJECT_ROUTE.georim.github },
    { type: 'domain', icon: Link, url: PROJECT_ROUTE.georim.domain },
  ],
  features: {
    icon: '⚙️',
    title: '주요기능  및 특징',
    items: [
      '16가지 유형의 성격 테스트를 통한 반려식물 추천 시스템',
      '300여종의 식물 검색 및 5가지 필터링 기능 (초보자, 잎, 열매, 꽃, 다육/선인장)',
      '내가 키우는 식물 등록 및 관리, 관리도 그래프 및 일기 작성 기능',
      '태그별 커뮤니티 게시판 (질문과 답변, 식물자랑, 기타, 추천 게시판)',
      '소셜 로그인 기능',
      'useInfiniteQuery와 react-intersection-observer를 활용한 무한 스크롤 구현',
      'Chart.js, Swiper 등 라이브러리를 활용한 동적 UI 구현',
    ],
  },
  contributions: {
    icon: '💡',
    title: '작업 기여도',
    contents: [
      {
        icon: '🔹',
        section: '카카오 소셜 로그인 구현',
        items: [
          '카카오 소셜 로그인 API 연동 및 인증 플로우 구현',
          '사용자 권한에 따른 페이지 접근 제어 및 리다이렉트 로직 구현',
          '로그인 후 원래 접속하려던 페이지로 돌아가는 UX 개선 기능 개발',
        ],
      },
      {
        icon: '🔹',
        section: '식집사 테스트 페이지 구현',
        items: [
          '나만의 반려식물 찾기 테스트 페이지 개발',
          '16가지 유형의 성격 테스트 로직 및 결과 페이지 구현',
          '가이드 페이지 및 식물 추천 시스템 UI/UX 설계',
        ],
      },
      {
        icon: '🔹',
        section: '식물 검색 페이지 구현',
        items: [
          'useInfiniteQuery와 react-intersection-observer를 활용한 무한 스크롤 기능 구현',
          '5가지 필터링 (초보자, 잎, 열매, 꽃, 다육/선인장) 검색 기능 개발',
          '300여종의 식물 데이터 검색 및 정렬 시스템 구현',
        ],
      },
      {
        icon: '🔹',
        section: '성능 최적화 및 상태 관리',
        items: [
          'useState 상태값 변경으로 인한 렌더링 이슈 해결 및 성능 최적화',
          'dataset 값 처리 과정에서 발생하는 다중 렌더링 문제 해결',
          '디바운싱 기능과 Custom Hook 내부 상태 관리 최적화로 데이터 손실 방지',
        ],
      },
    ],
  },

  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: {},
  },
};

export const PROJECT_PORTFOLIO_CONTENTS = {
  title: '포트폴리오 사이트',
  period: '2025.08.02 - 2025-08-13',
  teckStack: ['Nextjs', 'Typescript', 'Zustand', 'S3', 'Github Action'],
  description: '프론트엔드 개발자 강민승의 포트폴리오 사이트입니다.',
  actions: [
    { type: 'close', icon: Close },
    { type: 'github', icon: Github, url: PROJECT_ROUTE.portfolio.github },
    { type: 'domain', icon: Link, url: PROJECT_ROUTE.portfolio.domain },
  ],
  features: {
    icon: '⚙️',
    title: '주요기능  및 특징',
    items: [
      'Framer-motion를 활용한 스크롤 기반 애니메이션 구현',
      'clip-path를 활용한 원형 전환 이펙트로 섹션 간 자연스러운 페이지 이동',
      'mix-blend-difference를 이용해 배경/텍스트 대비를 극대화한 다크 UI',
      '반응형 레이아웃 적용 (모바일 ~ 데스크탑)',
      '프로젝트 상세 정보 모달 팝업 구현',
    ],
  },
  contributions: {
    icon: '💡',
    title: '작업 기여도',
    contents: [
      {
        icon: '🔹',
        section: 'UI/UX 설계',
        items: [
          '스크롤 진행도에 따른 색상 변화와 애니메이션 배치로 몰입감 향상',
          'Orbitron 폰트를 활용한 타이틀 디자인과 다크톤 메인 배경으로 브랜드 이미지 강화',
        ],
      },
      {
        icon: '🔹',
        section: '프론트엔드 개발',
        items: ['useScroll과 Zustand 상태 관리를 결합해 섹션별 애니메이션 상태 제어'],
      },
      {
        icon: '🔹',
        section: '배포 및 유지보수',
        items: [
          'AWS S3를 이용한 정적 웹 사이트 배포',
          'GitHub Actions를 통한 CI/CD 파이프라인 구축',
        ],
      },
    ],
  },
  result: {
    icon: '🚀',
    title: '성과',
    items: [
      '웹 애니메이션과 인터랙션 설계 능력 강화',
      'GitHub Actions 기반 CI/CD 환경 구축 경험',
      '배포 전략(AWS S3) 경험',
    ],
  },
  troubleShooting: [
    {
      icon: '🚨',
      title: '트러블 슈팅',
      contents: [
        {
          icon: '🔹',
          title: '모달과 배경 영역 스크롤 충돌 문제',
          details: [
            {
              type: '문제점',
              content:
                'React Portal 기반 모달에서 내부 스크롤이 작동하지 않고, 대신 배경 영역이 스크롤되는 문제가 발생했습니다. 처음에는 Lenis 라이브러리 때문이라고 생각했지만, 실제 원인은 이벤트 전파에 있었습니다.React Portal 기반 모달에서 내부 스크롤이 작동하지 않고, 대신 배경 영역이 스크롤되는 문제가 발생했습니다. 처음에는 Lenis 라이브러리 때문이라고 생각했지만, 실제 원인은 이벤트 전파에 있었습니다.',
            },
            {
              type: '해결',
              content:
                '모달 내부에서 발생한 휠/터치 이벤트가 버블링되어 배경으로 전달되고 있었으므로, onWheel 및 onTouchMove 이벤트에서 e.stopPropagation()을 호출해 이벤트 전파를 차단했습니다.',
            },
            {
              type: '회고',
              content:
                '문제는 복잡한 스크롤 라이브러리가 아니라 DOM 이벤트 버블링 제어에 있었습니다. 이벤트 전파 흐름을 이해하는 것이 실시간 UI 동작 문제 해결에 매우 중요함을 다시 느꼈습니다.',
            },
          ],
        },
      ],
    },
  ],
  screenShot: {
    title: '📌 스크린샷',
    images: {},
  },
};
