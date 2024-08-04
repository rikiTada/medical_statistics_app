import Link from "next/link";
import { getArticle } from "@/lib/mdx";

export default async function Home() {
  const articles = await getArticle("src/content");
  return (
    <main className="grid">
      <h1 className="text-3xl font-bold">医療統計くん</h1>

      <section className="p-4 rounded bg-background">
        <h2 className="text-2xl font-blod my-4">Latest Blogs</h2>

        <div className="grid gap-2">
          {articles.map((article) => (
            <Link
              href={"/articles/" + article.slug}
              passHref
              key={article.slug}
            >
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
