import useSWR from "swr";
const API_URL = "http://localhost:3000/api/article";

type Article = {
  slug: string;
  meta: {
    title: string;
    date: string;
    description: string;
  };
};

export const getAllArticle = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
};

export const useGetAllArticle = () => {
  return useSWR<Article[]>(API_URL, getAllArticle);
};
