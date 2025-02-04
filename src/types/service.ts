export interface IServiceItem {
  id: number;
  type: "web" | "mobile";
  title: Translations;
  description: Translations;
}

export interface IService {
  service_data: IServiceItem[];
  title?: {
    en: string;
    uz: string;
    ru: string;
  };
  subtitle: {
    en: string;
    uz: string;
    ru: string;
  };
}
interface Translations {
  en: string;
  uz: string;
  ru: string;
}
