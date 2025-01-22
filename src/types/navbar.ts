export interface INavbarTypes {
  links: Link[];
  LANGUAGES: ILanguage[];
}

export interface Link {
  href: string;
  label: Label;
}

export interface Label {
  en: string;
  uz: string;
  ru: string;
}

export interface ILanguage {
  code: string;
  label: Label;
}
