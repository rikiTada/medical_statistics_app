"use server";

import { db } from "@/db";
import { articles } from "@/db/schema";
import { redirect } from "next/navigation";

export const createArticle = async (formData: FormData) => {
  try {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const data = await db.insert(articles).values({ title, content });

    console.log("Inserted", data);
    redirect("/admin/article");
  } catch (error) {
    console.error(error);
  }
};
