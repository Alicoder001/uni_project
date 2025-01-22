interface ProjectDescription {
  uz: string;
  en: string;
  ru: string;
}

interface IProject {
  id: number;
  icon: string;
  description: ProjectDescription;
}

interface IProjectsData {
  projects: IProject[];
}
