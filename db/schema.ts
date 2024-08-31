/*
  DO NOT RENAME THIS FILE FOR DRIZZLE-ORM TO WORK
*/
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// export const users = sqliteTable("users", {
//   id: integer("id").primaryKey().notNull(),
//   name: text("name").notNull(),
// });

export const articles = sqliteTable("articles", {
  id: text("uuid").notNull().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  // authorId: integer("authorId").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP"),
});
