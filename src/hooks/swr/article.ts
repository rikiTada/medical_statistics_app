import useSWR from "swr";
const API_URL = "http://localhost:3000/api/article";

type Article = {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
  };
  content?: string;
};

// 全件取得
const getAllArticle = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
};
export const useGetAllArticle = () => {
  return useSWR<Article[]>(API_URL, getAllArticle);
};

//一件取得
// const getArticleBySlug = async (slug: string) => {
//   const res = await fetch(`${API_URL}/${slug}`);
//   if (!res.ok) throw new Error("Failed to fetch articles");
//   return res.json();
// };

// export const useGetArticleBySlug = (slug: string) => {
//   return useSWR<Article>(
//     `${API_URL}/${slug}`,
//     async () => await getArticleBySlug(slug)
//   );
// };

export const getArticleBySlug = async (slug: string) => {
  const res = await fetch(API_URL + "/" + slug);
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
};
export const useGetArticleBySlug = (slug: string) => {
  return useSWR<Article>(API_URL, getAllArticle);
};
