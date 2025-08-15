import { IMAGES_ROUTE } from './common';

export const DECORATE_STARS = [
  {
    id: 'star-01',
    src: IMAGES_ROUTE.stars.star01,
    position: { left: '5%', top: '50%' },
    animation: { rotate: [0, -10, -10, 0, 0] },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'star-02',
    src: IMAGES_ROUTE.stars.star02,
    position: { left: '25%', top: '20%' },
    animation: { rotate: [0, 0, 15, 15, 0, 0] },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'star-03',
    src: IMAGES_ROUTE.stars.star03,
    position: { right: '15%', top: '25%' },
    animation: { rotate: [0, -12, -12, 0, 0] },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'loop' as const,
      ease: 'easeInOut' as const,
    },
  },
  {
    id: 'star-04',
    src: IMAGES_ROUTE.stars.star04,
    position: { right: '10%', top: '60%' },
    animation: { rotate: [0, 0, 20, 20, 0, 0] },
    transition: {
      duration: 0.8,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
    },
  },
];
