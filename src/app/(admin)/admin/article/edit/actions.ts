"use server";

import fs from "fs";
import path from "path";

import { db } from "@/db";
import { articles } from "@/db/schema";
import { redirect } from "next/navigation";

export const createArticle = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const data = await db.insert(articles).values({ title, content });

    console.log("Inserted", data);
    redirect("/admin/article");
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * @example createFile('./data/example.txt', 'This is the file content.');
 */
export const createFile = (filePath: string, content: string): void => {
  // Ensure the directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write content to the file
  fs.writeFileSync(filePath, content, { flag: "w" });

  console.log(`File created at: ${filePath}`);
};
