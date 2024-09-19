import { db } from "@/db";
import { articles } from "@/db/schema";
import Link from "next/link";
import { WrappingContainer } from "../wrapping-container";

export default async function HomePage() {
  const data = await db.select().from(articles);

  return (
    <main className="grid gap-10">
      <div>
        <span>/</span>
        <h1 className="text-3xl font-bold">医療統計くん</h1>
      </div>
      <WrappingContainer title="最新記事一覧">
        <div className="grid gap-4">
          {data.map((article) => (
            <Link
              href={"/article/" + article.id}
              passHref
              key={article.id}
              className="text-lg hover:bg-secondary p-2 rounded"
            >
              <h3 className="font-bold">{article.title}</h3>
              {/* <h3 className="truncate">{article.content}</h3> */}
            </Link>
          ))}
        </div>
      </WrappingContainer>
    </main>
  );
}
