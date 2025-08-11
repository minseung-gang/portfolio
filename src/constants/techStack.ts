import {
  React,
  Javascript,
  Typescript,
  Nextjs,
  Nodejs,
  Express,
  Github,
  Figma,
  Mysql,
} from '@/components/icons';

export const TECH_STACKS = [
  {
    title: 'Frontend',
    icons: [
      { component: React, label: 'React' },
      { component: Javascript, label: 'JavaScript' },
      { component: Typescript, label: 'TypeScript' },
      { component: Nextjs, label: 'Next.js' },
    ],
  },
  {
    title: 'Backend',
    icons: [
      { component: Nodejs, label: 'Node.js' },
      { component: Express, label: 'Express' },
      { component: Mysql, label: 'MySQL' },
    ],
  },
  {
    title: 'Tools',
    icons: [
      { component: Github, label: 'GitHub' },
      { component: Figma, label: 'Figma' },
    ],
  },
];
