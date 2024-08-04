"use server";
import { getArticle } from "@/lib/mdx";
import Link from "next/link";

export default async function HomePage() {
  const articles = await getArticle("src/content");

  return (
    <section className="p-4 rounded bg-background">
      <h2 className="text-2xl font-blod mb-2">最新記事一覧</h2>

      <div className="grid gap-2">
        {articles.map((article) => (
          <Link href={"/articles/" + article.slug} passHref key={article.slug}>
            <div className="border p-4 rounded">
              <h3 className="m-0 text-lg font-blod">{article.meta.title}</h3>
              {/* <p className="text-gray-400">{article.meta.description}</p> */}
              <p className=" text-gray-400">{article.meta.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
