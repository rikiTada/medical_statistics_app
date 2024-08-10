import { CustomMDX } from "@/components/custom-mdx";
import { getArticleBySlug } from "@/lib/mdx";
import { CustomMDXProps } from "@/types";

export default async function ArticlePage({ slug }: { slug: string }) {
  const data = (await getArticleBySlug(slug)) as CustomMDXProps;

  return (
    <>
      <article className="prose my-4">
        <CustomMDX {...data} />
      </article>

      <div className="h-16 bg-card shadow-sm border rounded grid place-items-center">
        {/* WIP */}← 押したら次のページ行くやつ →
      </div>
    </>
  );
}
