import fs from "node:fs";
import path from "path";

export function extractArrayFromTxtFile(directory: string, fileName: string) {
  const fullPath = path.join(process.cwd(), directory, fileName);
  console.log("fullPath ->", fullPath);
  try {
    const data = fs.readFileSync(fullPath, "utf8");

    return data.split("\n").filter((line) => line.trim() !== "");
  } catch (err) {
    console.log(err);
  }
}
