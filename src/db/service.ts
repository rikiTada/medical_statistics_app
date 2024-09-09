import { db } from "@/db";
import { ArticleTable } from "@/db/schema";
import { Article } from "@/db/type";

export const insertArticle = async (article: Article) => {
  const data = await db.insert(ArticleTable).values(article);
  console.log("Inserted", data);
  return data;
};

export const getArticleTable = async () => {
  const data = await db.select().from(ArticleTable);
  console.log("Results", data);
  return data;
};
