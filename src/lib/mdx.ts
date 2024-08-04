import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getArticle = (dir: string) => {
  const files = fs.readdirSync(path.join(dir));

  return files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
};
