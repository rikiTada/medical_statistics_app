import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ROOT_DIRECTORY } from "@/lib/const";

// const rootDirectory = path.join(process.cwd(), "src", "content");

export const dbGetArticle = async () => {
  const files = fs.readdirSync(path.join(ROOT_DIRECTORY));

  return files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(ROOT_DIRECTORY, filename),
      "utf-8"
    );

    const { data: meta } = matter(fileContent);
    return {
      meta,
      slug: filename.replace(".mdx", ""),
    };
  });
};

export const dbGetArticleBySlug = async (slug: string) => {
  const markdownFile = fs.readFileSync(
    path.join("src/content", slug + ".mdx"),
    "utf-8"
  );

  const { data: meta, content } = matter(markdownFile);

  return {
    meta,
    slug,
    content,
  };
};
