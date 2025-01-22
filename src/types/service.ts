export interface IService {
  service_data: ServiceData[];
}

export interface ServiceData {
  id: number;
  title: Title;
  description: Description;
}

export interface Title {
  en: string;
  uz: string;
  ru: string;
}

export interface Description {
  en: string;
  uz: string;
  ru: string;
}
