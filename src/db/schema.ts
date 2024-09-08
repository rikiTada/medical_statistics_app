import { sql } from "@vercel/postgres";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const db = drizzle(sql);

export const UserTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  }
  // (users) => {
  //   return {
  //     uniqueIdx: uniqueIndex("unique_idx").on(users.email),
  //   };
  // }
);

export const ArticleTable = pgTable(
  "articles",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updateAt: timestamp("updateAt").defaultNow().notNull(),
  },
  (articles) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(articles.title),
    };
  }
);
