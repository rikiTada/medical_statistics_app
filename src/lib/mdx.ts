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

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("src/content", slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export const getArticleBySlug = async (slug: string) => {
  const post = getPost({ slug });

  return post;
};
