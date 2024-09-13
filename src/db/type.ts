import { articles, users } from "@/db/schema";

export type User = typeof users.$inferInsert;
export type Article = typeof articles.$inferInsert;
