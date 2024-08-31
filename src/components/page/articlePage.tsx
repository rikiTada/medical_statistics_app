import { CustomMDX } from "@/components/custom-mdx";
import { getFile } from "@/lib/strage";
import { CustomMDXProps } from "@/lib/types";

export default async function ArticlePage({ slug }: { slug: string }) {
  // const data = (await dbGetArticleBySlug(slug)) as CustomMDXProps;
  const data = await getFile("_sample.mdx");
  if (!data) return <>loading...</>;

  return (
    <>
      <article className="prose my-4 w-full max-w-full">
        <CustomMDX content={data} />
      </article>

      <div className="h-16 bg-card shadow-sm border rounded grid place-items-center">
        {/* WIP */}← 押したら次のページ行くやつ →
      </div>
    </>
  );
}
