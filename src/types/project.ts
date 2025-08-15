import { ElementType } from 'react';

export interface ProjectRoute {
  domain?: string;
  github: string;
}

export interface BaseProject {
  title: string;
  period: string;
  team?: string;
  teckStack: string[];
  description: string;
  actions: {
    type: string;
    icon: React.ElementType;
    url?: string;
  }[];
  features: {
    icon: string;
    title: string;
    items: string[];
  };
  contributions: {
    icon: string;
    title: string;
    contents: {
      icon: string;
      section: string;
      items: string[];
    }[];
  };
  troubleShooting?: {
    icon: string;
    title: string;
    contents: {
      icon: string;
      title: string;
      details: {
        type: string;
        content: string;
      }[];
    }[];
  };
  screenShot?: {
    icon?: string;
    title?: string;
    images: string[];
  };
  result?: {
    icon: string;
    title: string;
    items: string[];
  };
}

export interface commonAction {
  type: string;
  icon: ElementType;
  url?: string;
}
