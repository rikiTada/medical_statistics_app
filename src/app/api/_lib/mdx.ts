import fs from "fs";
import path from "path";
import matter from "gray-matter";

// const rootDirectory = path.join(process.cwd(), "src", "content");

export const getArticle = async (dir: string) => {
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
