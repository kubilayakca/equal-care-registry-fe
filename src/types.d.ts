declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (t: string) => void;
    __onThemeChange: (t: string) => void;
  }

  interface BannerData {
    header: string;
    body: string;
    buttonLink: string;
    buttonName: string;
    location: string;
    imageUrlMobil: string;
    imageUrlDesktop: string;
    sort: number;
    variant?: string;
    customContent?: JSX.Element;
    cardContent?: JSX.Element;
  }

  interface Article {
    body?: string;
    categoryName?: string;
    header?: string;
    imageContent?: string;
    publishDate?: string;
    updateDate?: string;
    link?: string;
    slugs?: { languageCode: string; slugUrl: string }[];
  }

  interface Announcement {
    imageContent: string;
    imageContentMobil: string;
  }

  interface News {
    newsAndAnnouncementTypes: Article[];
    printPress: Article[];
    onnlinePress: Article[];
    tvAndInternetPress: Article[];
  }
}

export {};
