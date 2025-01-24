export interface ContactData {
  title: {
    uz: string;
    en: string;
    ru: string;
  };
  form: {
    companyName: {
      label: {
        uz: string;
        en: string;
        ru: string;
      };
      placeholder: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    yourName: {
      label: {
        uz: string;
        en: string;
        ru: string;
      };
      placeholder: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    phoneNumber: {
      label: {
        uz: string;
        en: string;
        ru: string;
      };
      placeholder: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    projectType: {
      label: {
        uz: string;
        en: string;
        ru: string;
      };
      options: {
        web: {
          uz: string;
          en: string;
          ru: string;
        };
        mobile: {
          uz: string;
          en: string;
          ru: string;
        };
        desktop: {
          uz: string;
          en: string;
          ru: string;
        };
        other: {
          uz: string;
          en: string;
          ru: string;
        };
      };
    };
    projectDescription: {
      label: {
        uz: string;
        en: string;
        ru: string;
      };
      placeholder: {
        uz: string;
        en: string;
        ru: string;
      };
    };
  };
  button: {
    text: {
      uz: string;
      en: string;
      ru: string;
    };
  };
  validationErrors: {
    companyName: {
      required: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    name: {
      required: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    phone: {
      required: {
        uz: string;
        en: string;
        ru: string;
      };
      invalid: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    projectType: {
      required: {
        uz: string;
        en: string;
        ru: string;
      };
    };
    description: {
      required: {
        uz: string;
        en: string;
        ru: string;
      };
      minLength: {
        uz: string;
        en: string;
        ru: string;
      };
    };
  };
  notifications: {
    success: {
      uz: string;
      en: string;
      ru: string;
    };
    error: {
      uz: string;
      en: string;
      ru: string;
    };
  };
}
export type ContactCategoryType = "web" | "mobile" | "other" | null;
