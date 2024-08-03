import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Home() {
  const blogDir = "src/content";

  const files = fs.readdirSync(path.join(blogDir));

  const articles = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
  return (
    <main className="grid">
      <h1 className="text-3xl font-bold">医療統計くん</h1>

      <section className="p-4 rounded bg-background">
        <h2 className="text-2xl font-blod my-4">Latest Blogs</h2>

        <div className="grid gap-2">
          {articles.map((article) => (
            <Link href={"/article/" + article.slug} passHref key={article.slug}>
              <div className="border p-4 rounded">
                <h3 className="m-0 text-lg font-blod">{article.meta.title}</h3>
                {/* <p className="text-gray-400">{article.meta.description}</p>
                <p className=" text-gray-400">{article.meta.date}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
