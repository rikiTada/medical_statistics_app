import { db } from "@/db";
import { articles } from "@/db/schema";
import { formatedDateStr } from "@/lib/date";
import Link from "next/link";

export default async function HomePage() {
  const data = await db.select().from(articles);

  return (
    <section className="p-4 rounded bg-background">
      <h2 className="text-2xl font-blod mb-2">最新記事一覧</h2>

      <div className="grid gap-2">
        {data.map((article) => (
          <Link href={"/article/" + article.id} passHref key={article.id}>
            <div className="border p-4 rounded">
              <h3 className="m-0 text-lg font-blod">{article.title}</h3>
              <p className=" text-gray-400">
                {formatedDateStr(article.createdAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
