export interface IServiceItem {
  id: number;
  type: "web" | "mobile";
  title: Translations;
  description: Translations;
}

export interface IService {
  service_data: IServiceItem[];
}
interface Translations {
  en: string;
  uz: string;
  ru: string;
}
