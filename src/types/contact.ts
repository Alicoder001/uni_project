interface LanguageContent {
  uz: string;
  en: string;
  ru: string;
}

interface ProjectTypeOptions {
  web: LanguageContent;
  mobile: LanguageContent;
  desktop: LanguageContent;
  other: LanguageContent;
}

interface FormField {
  label: LanguageContent;
  placeholder: LanguageContent;
}

interface ContactPage {
  title: LanguageContent;
  form: {
    companyName: FormField;
    yourName: FormField;
    phoneNumber: FormField;
    projectType: {
      label: LanguageContent;
      options: ProjectTypeOptions;
    };
    projectDescription: FormField;
  };
  button: {
    text: LanguageContent;
  };
}

export default ContactPage;
