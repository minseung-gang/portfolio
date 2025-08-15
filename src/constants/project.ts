import { ProjectRoute } from '@/types/project';
import { IMAGES_ROUTE } from './common';

export const PROJECT_DATA = [
  {
    id: 'happyPill',
    title: '해피필',
    description:
      '바쁜 현대인들이 건강을 신경 쓸 수 있도록, 영양제를 주기적으로 배송해주는 정기 구독 서비스입니다.',
    tags: ['반응형', '사이드'],
    image: IMAGES_ROUTE.project.happyPill.thumbnail,
  },
  {
    id: 'georim',
    title: '거림',
    description: '자사 사업과 공고를 소개하고, 관리자 기능을 통해 운영을 지원하는 웹 플랫폼입니다.',
    tags: ['반응형', '사내 서비스'],
    image: IMAGES_ROUTE.project.georim.thumbnail,
  },
  {
    id: 'pulbatte',
    title: '풀밭에',
    description: '식물 정보를 나누고 반려식물을 추천받아 일상을 기록할 수 있는 공간입니다.',
    tags: ['반응형', '사이드'],
    image: IMAGES_ROUTE.project.pulbatte.thumbnail,
  },
  {
    id: 'portfolio',
    title: '포트폴리오 사이트',
    description: '프론트엔드 개발자 강민승의 포트폴리오 사이트입니다.',
    tags: ['반응형', '사이드'],
    image: IMAGES_ROUTE.project.portfolio.thumbnail,
  },
];

export const PROJECT_ROUTE: Record<string, ProjectRoute> = {
  happyPill: {
    domain: 'https://happy-pill-front-ulbp.vercel.app/',
    github: 'https://github.com/happy-pill/happyPill_Front',
  },
  georim: {
    domain: 'http://www.georim.net',
    github: 'https://github.com/minseung-gang/georim-frontend',
  },
  pulbatte: {
    github: 'https://github.com/minseung-gang/PULBATTE_FE',
  },
  portfolio: {
    domain: 'https://minseung-portfolio.com/',
    github: 'https://github.com/minseung-gang/portfolio',
  },
};
