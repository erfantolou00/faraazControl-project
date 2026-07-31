export type ServiceCard = {
    id: string;
    icon: string;
    title: string;
    desc: string;
    image: string;
    features: string[];
  };
  
  export type ServicesPageData = {
    hero: {
      titleBefore: string;
      titleHighlight: string;
      titleAfter: string;
      subtitle: string;
    };
    serviceLabel: string;
    ctaLink: string;
    services: ServiceCard[];
    finalCta: {
      title: string;
      description: string;
      primary: string;
      secondary: string;
    };
  };