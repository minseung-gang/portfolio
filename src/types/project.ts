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
    icon: () => React.JSX.Element;
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
  }[];
  screenShot?: {
    icon?: string;
    title?: string;
    images: Record<string, unknown>;
  };
  result?: {
    icon: string;
    title: string;
    items: string[];
  };
}
