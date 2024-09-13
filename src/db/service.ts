import { db } from "@/db";
import { articles } from "@/db/schema";
import { Article } from "@/db/type";

export const insertArticle = async (article: Article) => {
  const data = await db.insert(articles).values(article);
  // console.log("Inserted", data);
  return data;
};

export const getArticleTable = async () => {
  const data = await db.select().from(articles);
  // console.log("Results", data);
  return data;
};
