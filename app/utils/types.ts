export interface BreadcrumbItem {
  title: string;
  to?: string;
  active?: boolean;
}

export interface ChatGPTResponse {
  initial: {
    prompt: string;
    translated: string;
  };
  response: {
    chatGptResp: string;
    translatedResp: string;
  };
  translate: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: {
    it: string;
    en: string;
  };
  features: {
    title: string;
    subtitle: string;
    icon: string;
  }[];
  images: {
    image: string;
    title: string;
  }[];
  preview: string;
  github?: string;
}
