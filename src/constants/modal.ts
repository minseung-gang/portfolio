import Close from '@/components/icons/Close';
import { PROJECT_ROUTE } from './project';

import { Github, Link } from '@/components/icons';
import { IMAGES_ROUTE } from './common';

export const COMMON_ACTIONS = {
  CLOSE: {
    type: 'close',
    icon: Close,
  },
  GITHUB: (url: string) => ({
    type: 'github',
    icon: Github,
    url,
  }),
  DOMAIN: (url: string) => ({
    type: 'domain',
    icon: Link,
    url,
  }),
} as const;

export const PROJECT_HAPPYPILL_CONTENTS = {
  title: '해피필(happyPill)',
  period: '2025-07 ~ 진행 중',
  team: '6명(FE 2, BE 3, 디자이너 1)',
  teckStack: ['React', 'TailwindCSS', 'Typescript', 'React Query', 'Zustand', 'HookForm', 'Zod'],
  description:
    '바쁜 현대 사회에서 현대인들이 신경쓸 수 있도록 영양제를 주기적으로 배송해주는 정기 구독 서비스입니다.',
  actions: [
    COMMON_ACTIONS.CLOSE,
    COMMON_ACTIONS.GITHUB(PROJECT_ROUTE.happyPill?.github),
    COMMON_ACTIONS.DOMAIN(PROJECT_ROUTE.happyPill?.domain ?? '#'),
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
          'AI을 활용하여 마우스 드래그와 무한스크롤로 사용자가 직관적이고 부드럽게 콘텐츠를 탐색할 수 있도록 UX 개선',
          '3가지 슬라이드 모드(peek/center/basic)를 통해 콘텐츠 특성에 맞는 최적의 시각적 경험 제공',
          'transform과 드래그 offset 계산을 통해 자연스러운 인덱스 전환 및 슬라이딩 애니메이션 처리',
        ],
      },
      {
        icon: '🔹',
        section: '합성 컴포넌트 패턴 구현',
        items: [
          '컴포넌트 재사용성 부족과 props drilling 문제를 해결하기 위해 합성 컴포넌트 패턴 도입',
          'Select, Tabs, Modal, Carousel을 모듈화하여 개발 생산성 향상 및 코드 중복 제거',
        ],
      },
      {
        icon: '🔹',
        section: 'TailwindCSS v4의 CSS 기반 디자인 토큰 시스템 활용',
        items: ['CSS 변수와 @layer theme을 활용해 스타일 관리 복잡성을 해결하여 유지보수성 개선'],
      },
      {
        icon: '🔹',
        section: '아토믹 디자인 패턴을 통한 체계적인 컴포넌트 구조 설계',
        items: [
          '컴포넌트 간 의존성과 재사용성 문제를 해결하기 위해 아토믹 디자인 패턴 적용',
          'atoms, molecules, organisms 단위로 계층화하여 컴포넌트 재사용성 및 개발 효율성 향상',
        ],
      },
      {
        icon: '🔹',
        section: '포트원 결제 모듈 연동',
        items: [
          '테스트 환경에서 신뢰가능 검증 폼으로 구현 및 검증 완료',
          'React Hook Form과 Zod를 활용한 실시간 유효성 검사로 사용자 입력 오류 방지',
          '결제 취소 시 명확한 안내 모달로 사용자 혼란을 최소화하고 고객 만족도 개선',
        ],
      },
      {
        icon: '🔹',
        section: 'TanStack Query 활용한 효율적인 데이터 패칭',
        items: [
          '불필요한 API 호출과 로딩 시간 문제를 해결하기 위해 캐싱 전략 도입',
          'staleTime과 캐시 최적화로 페이지 로딩 속도를 개선하여 사용자 대기시간 단축',
          'useInfiniteQuery를 활용해 무한 스크롤 방식의 페이징 처리 구현',
        ],
      },
    ],
  },
  troubleShooting: {
    icon: '🚨',
    title: '트러블 슈팅',
    contents: [
      {
        icon: '🔹',
        title: 'React Carousel 드래그 후 클릭 이벤트 문제',
        details: [
          {
            type: '[문제점]',
            content: '드래그 동작 후 클릭 이벤트가 의도치 않게 발생하는 문제 발생',
          },
          {
            type: '[해결]',
            content:
              '드래그 거리를 기준으로 일정 이상이면 클릭을 막고, useRef와 마우스 이벤트로 드래그 상태를 실시간 추적해 클릭 발생을 제어',
          },
          {
            type: '[회고]',
            content:
              '사용자 인터랙션의 복잡성을 고려하여 드래그와 클릭이 함께 있는 컴포넌트는 이벤트 충돌 방지 로직이 필수임을 깨달음',
          },
        ],
      },
      {
        icon: '🔹',
        title: 'Tailwind CSS v4와 twMerge 충돌 이슈',
        details: [
          {
            type: '[문제점]',
            content:
              'Tailwind v4 업그레이드 후 twMerge 호환성 문제로 클래스 병합이 제대로 작동하지 않는 문제 발생.',
          },
          {
            type: '[해결]',
            content:
              'Tailwind v4 클래스명 체계와 twMerge 호환성을 확인하고, extendTailwindMerge로 클래스 그룹을 분리해 충돌을 해결하고 병합 로직을 개선',
          },
          {
            type: '[회고]',
            content:
              '버전 업그레이드 전 의존성 호환성을 항상 확인하고 테스트와 문서 검토가 필요함을 배움',
          },
        ],
      },
      {
        icon: '🔹',
        title: '페이지네이션 lastProductId 잘림 이슈',
        details: [
          {
            type: '[문제점]',
            content: '무한 스크롤에서 lastProductId가 잘려 다음 페이지 데이터를 가져오지 못함',
          },
          {
            type: '[해결]',
            content:
              '디버깅으로 잘림 지점을 확인하고, 인코딩·타입 변환 문제를 수정하며 안전한 전달을 위한 검증 로직 추가',
          },
          {
            type: '[회고]',
            content: '핵심 데이터는 중간 단계에서 변형·손실되지 않도록 검증이 필요함을 배움',
          },
        ],
      },
    ],
  },

  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: IMAGES_ROUTE.project.happyPill.images,
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
    COMMON_ACTIONS.CLOSE,
    COMMON_ACTIONS.GITHUB(PROJECT_ROUTE.georim.github ?? '#'),
    COMMON_ACTIONS.DOMAIN(PROJECT_ROUTE.georim.domain ?? '#'),
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
          'Framer-motion을 활용한 애니메이션 효과로 정적인 페이지의 시각적 몰입도 개선',
          '다양한 디바이스에서 일관된 사용자 경험을 위한 반응형 UI 설계',
        ],
      },
      {
        icon: '🔹',
        section: '무한 스크롤 구현',
        items: [
          'Intersection Observer API로 대량 데이터 로딩 속도 개선 및 사용자 경험 최적화',
          'Skeleton UI 컴포넌트로 로딩 중 사용자 이탈률 감소',
        ],
      },
      {
        icon: '🔹',
        section: '백엔드 API 개발',
        items: [
          'Node.js와 Express.js 기반 RESTful API로 확장 가능한 서버 아키텍처 구축',
          'JWT 기반 인증 시스템으로 보안성과 사용자 편의성 향상',
          'MySQL 정규화 및 Sequelize ORM으로 데이터 무결성과 개발 효율성 확보',
          'Multer를 활용한 이미지 업로드 시스템으로 매물 등록 과정 간소화',
        ],
      },
      {
        icon: '🔹',
        section: '서버 배포 및 인프라 구축',
        items: [
          'AWS EC2 기반 Ubuntu 서버 구성으로 안정적인 서비스 운영 환경 구축',
          'Nginx 리버스 프록시와 정적 파일 캐싱으로 웹 서버 응답 속도 최적화',
          'PM2 프로세스 매니저로 자동 재시작 및 서비스 안정성 확보',
        ],
      },
    ],
  },

  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: IMAGES_ROUTE.project.georim.images,
  },
};

export const PROJECT_PULBATTE_CONTENTS = {
  title: '풀밭에(pulbatte)',
  period: '2022.12 - 2023.02',
  team: '6명(FE 2, BE3, 디자이너 1)',
  teckStack: ['React', 'Typescript', 'Redux', 'StyledComponents', 'React Query'],
  description:
    '식물에 대한 정보를 공유하는 공간입니다. 테스트를 통해 성향에 맞는 반려식물을 소개 받거나, 함께하는 식물과의 일상을 기록할 수 있습니다.',
  actions: [COMMON_ACTIONS.CLOSE, COMMON_ACTIONS.GITHUB(PROJECT_ROUTE.pulbatte.github)],
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
          'API 연동 및 인증 플로우 구현으로 사용자 접근성 향상',
          '사용자 권한에 따른 페이지 접근 제어로 보안성 강화',
          '로그인 후 원래 페이지 복귀 기능으로 UX 개선',
        ],
      },
      {
        icon: '🔹',
        section: '식집사 테스트 페이지 구현',
        items: [
          '반려식물 찾기 테스트로 개인 맞춤형 서비스 제공',
          '16가지 성격 테스트 로직으로 정확한 식물 매칭',
          '직관적인 가이드 및 식물 추천 시스템 UI/UX 설계',
        ],
      },
      {
        icon: '🔹',
        section: '식물 검색 페이지 구현',
        items: [
          '무한 스크롤로 대용량 데이터 처리 성능 향상',
          '5가지 필터링으로 맞춤 검색 경험 제공',
          '300여종 식물 데이터 검색 및 정렬 시스템',
        ],
      },
      {
        icon: '🔹',
        section: '성능 최적화 및 상태 관리',
        items: [
          'useState 상태 변경으로 인한 불필요한 리렌더링 문제를 useMemo와 useCallback으로 최적화',
          'Dataset 처리 중 발생하는 다중 렌더링을 배치 업데이트로 해결하여 성능 개선',
          'Custom Hook 내 디바운싱과 상태 관리 로직 분리로 데이터 손실 및 동기화 문제 해결',
        ],
      },
    ],
  },
};

export const PROJECT_PORTFOLIO_CONTENTS = {
  title: '포트폴리오 사이트',
  period: '2025.08.02 - 2025-08-13',
  teckStack: ['Nextjs', 'Typescript', 'Zustand', 'S3', 'Github Action'],
  description:
    '프론트엔드 개발자 강민승의 포트폴리오 사이트입니다. 더 나은 사용자 경험을 위해 꾸준히 개선하고 있습니다.',
  actions: [
    COMMON_ACTIONS.CLOSE,
    COMMON_ACTIONS.GITHUB(PROJECT_ROUTE.portfolio.github),
    COMMON_ACTIONS.DOMAIN(PROJECT_ROUTE.portfolio.domain ?? '#'),
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
          '스크롤 진행도 기반 색상/애니메이션으로 몰입감 향상',
          'Orbitron 폰트와 다크톤 배경으로 브랜드 이미지 강화',
        ],
      },
      {
        icon: '🔹',
        section: '프론트엔드 개발',
        items: ['useScroll과 Zustand로 섹션별 애니메이션 상태 제어'],
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
  troubleShooting: {
    icon: '🚨',
    title: '트러블 슈팅',
    contents: [
      {
        icon: '🔹',
        title: '모달과 배경 영역 스크롤 충돌 문제',
        details: [
          {
            type: '[문제점]',
            content:
              'React Portal 모달에서 내부 스크롤이 작동하지 않고 배경 영역이 스크롤되는 문제 발생',
          },
          {
            type: '[해결]',
            content: '모달 내부 onWheel 이벤트에서 e.stopPropagation()을 호출해 이벤트 버블링 차단',
          },
          {
            type: '[회고]',
            content:
              'DOM 이벤트 전파 흐름을 정확히 이해하는 것이 UI 상호작용 문제 해결의 핵심임을 깨달음',
          },
        ],
      },
    ],
  },

  screenShot: {
    icon: '📌',
    title: '스크린샷',
    images: IMAGES_ROUTE.project.portfolio.images,
  },
};
