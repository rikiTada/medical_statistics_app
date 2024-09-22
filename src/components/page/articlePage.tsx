import { CustomMDX } from "@/components/custom-mdx";
import { Loading } from "@/components/loading";
import { ArticleListItem } from "@/components/page/article/articleListItem";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { getArticleById } from "@/db/service";
import { Suspense } from "react";

export async function ArticlePage({ slug }: { slug: string }) {
  const data = await getArticleById(slug);

  return (
    <>
      <article className="prose my-4 w-full max-w-full">
        <Suspense fallback={<Loading />}>
          <CustomMDX content={data.content} />
        </Suspense>
      </article>

      <div className="h-16 bg-card shadow-sm border rounded grid place-items-center">
        {/* WIP */}← 押したら次のページ行くやつ →
      </div>
    </>
  );
}

export async function ArticleListPage() {
  const data = await db.select().from(articles);

  return (
    <Suspense fallback={<Loading />}>
      {data.map((article) => (
        <ArticleListItem key={article.id} {...article} />
      ))}
    </Suspense>
  );
}
