import fs from "fs";
import path from "path";

const getData = (filename: string) => {
  try {
    const filePath = path.join(process.cwd(), "db", "data", `${filename}.json`);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error(`Error reading JSON file: ${filename}.json`, error);
    throw new Error("An error occurred while reading the JSON file.");
  }
};

export default getData;
