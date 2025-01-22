import fs from "fs";
import path from "path";

export const getTranslations = (locale: string, page: string) => {
  try {
    const basePath = path.resolve(process.cwd(), "db", "locales", locale);

    const commonPath = path.join(basePath, "common.json");
    const commonData = fs.existsSync(commonPath)
      ? JSON.parse(fs.readFileSync(commonPath, "utf-8"))
      : {};
    if (page === "common") return { ...commonData };
    const pagePath = path.join(basePath, `${page}.json`);
    const pageData = JSON.parse(fs.readFileSync(pagePath, "utf-8"));
    return { ...commonData, ...pageData };
  } catch (error) {
    console.error(`Error loading translations: ${locale}, ${page}`, error);
    throw new Error("Failed to load translations.");
  }
};
