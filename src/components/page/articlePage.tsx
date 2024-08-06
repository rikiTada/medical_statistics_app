import { CustomMDX } from "@/components/mdx-remote";
import { getArticleBySlug } from "@/hooks/swr/article";

export default async function ArticlePage({ slug }: { slug: string }) {
  console.log(slug);
  const data = await getArticleBySlug(slug);

  if (!data) return <div>loading...</div>;
  return (
    <article className="prose">
      <CustomMDX source={data.content} {...data} />
    </article>
  );
}
