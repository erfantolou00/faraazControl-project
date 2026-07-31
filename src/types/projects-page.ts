export type ProjectCard = {
    id: string;
    title: string;
    client: string;
    year: string;
    location: string;
    category: string;
    power?: string;
    description: string;
    image: string;
    tags: string[];
  };
  
  export type ProjectsPageData = {
    hero: {
      titleBefore: string;
      titleHighlight: string;
      subtitle: string;
    };
    viewDetails: string;
    projects: ProjectCard[];
    cta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  };