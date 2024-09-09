import { ArticleTable, UserTable } from "@/db/schema";

export type User = typeof UserTable.$inferInsert;
export type Article = typeof ArticleTable.$inferInsert;
