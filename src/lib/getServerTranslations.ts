import { getLang } from "./getLang";

export const getServerTranslations = async (locale: string, page: string) => {
  try {
    return await getLang(locale, page);
  } catch (error) {
    console.error("Failed to fetch translations:", error);
    return { error: "Failed to load translations." };
  }
};
