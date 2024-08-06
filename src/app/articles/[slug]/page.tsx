import ArticlePage from "@/components/page/articlePage";

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage slug={params.slug} />;
}
