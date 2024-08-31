import { ROOT_DIRECTORY } from "@/lib/const";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
// import { metadata } from "@/app/layout";

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

// export const dbGetArticle = async () => {
//   const meta = { title: "", slug: "", date: "" };
//   const data = "";
//   const slug = "";
//   return [{ meta, slug, data }];
// };

// export const dbGetArticleBySlug = async (slug: string) => {
//   const meta = { title: "", slug: "" };
//   const data = "";
//   return { meta, data };
// };
