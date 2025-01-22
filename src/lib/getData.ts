import fs from "fs/promises";
import path from "path";

const getData = async (filename: string): Promise<any> => {
  try {
    const filePath = path.join(process.cwd(), "db", "data", `${filename}.json`);
    await fs.access(filePath); // Fayl mavjudligini tekshiradi
    const fileContents = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading JSON file: ${filename}.json`, error);
    throw new Error("An error occurred while reading the JSON file.");
  }
};

export default getData;
