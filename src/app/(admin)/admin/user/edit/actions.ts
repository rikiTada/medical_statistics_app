"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const data = await db.insert(users).values({ name, email, password });

    console.log("Inserted", data);
    redirect("/test");
  } catch (error) {
    console.error(error);
  }
};
