import { db } from "@/db";
import { articles } from "@/db/schema";
import { ArticleType } from "@/db/type";
import { eq } from "drizzle-orm";

// ========================================
//  Article
// ========================================

export const insertArticle = async (article: ArticleType) => {
  const data = await db.insert(articles).values(article);
  // console.log("Inserted", data);
  return data;
};

export const getArticleTable = async () => {
  const data = await db.select().from(articles);
  // console.log("Results", data);
  return data;
};

export const getArticleById = async (id: string) => {
  const [data] = await db.select().from(articles).where(eq(articles.id, id));
  return data;
};
