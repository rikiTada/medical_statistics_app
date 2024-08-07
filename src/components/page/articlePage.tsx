import { CustomMDX } from "@/components/mdx-remote";
import { getArticleBySlug } from "@/lib/mdx";

export default async function ArticlePage({ slug }: { slug: string }) {
  const data = await getArticleBySlug(slug);

  return (
    <article className="prose">
      <CustomMDX source={data.content} {...data} />
    </article>
  );
}
