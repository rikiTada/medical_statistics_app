import { CustomMDX } from "@/components/custom-mdx";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { dbGetArticleBySlug } from "@/lib/mdx";

export async function ArticlePage({ slug }: { slug: string }) {
  const data = await dbGetArticleBySlug(slug);
  if (!data) return <>loading...</>;

  return (
    <>
      <article className="prose my-4 w-full max-w-full">
        <CustomMDX content={data.content} />
      </article>

      <div className="h-16 bg-card shadow-sm border rounded grid place-items-center">
        {/* WIP */}← 押したら次のページ行くやつ →
      </div>
    </>
  );
}


export async function ArticleListPage() {
  const data = await db.select().from(articles);

  if (!data) return <>loading...</>;
  return (
    <>
      {data.map((article) => (
        <div key={article.id} className="p-4 border-b">
          <h2>{article.title}</h2>
          {/* <p>{article.description}</p> */}
        </div>
    ))}
    </>

  )
}