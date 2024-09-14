import { ROOT_DIRECTORY } from "@/lib/const";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

// export const dbGetArticle = async () => {
//   const files = fs.readdirSync(path.join(ROOT_DIRECTORY));

//   return files.map((filename) => {
//     const fileContent = fs.readFileSync(
//       path.join(ROOT_DIRECTORY, filename),
//       "utf-8"
//     );

//     const { data: meta } = matter(fileContent);
//     return {
//       meta,
//       slug: filename.replace(".mdx", ""),
//     };
//   });
// };

export const dbGetArticleBySlug = async (slug: string) => {
  const currentWorkingDirectory = process.cwd();
  const markdownFile = fs.readFileSync(
    path.join(currentWorkingDirectory, ROOT_DIRECTORY, slug + ".mdx"),
    "utf-8"
  );

  const { data: meta, content } = matter(markdownFile);

  return {
    meta,
    slug,
    content,
  };
};
