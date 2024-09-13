import { sql } from "drizzle-orm";
import {
  boolean,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

// UUIDv7のカスタム型を定義
const uuidv7 = () => uuid("id").default(sql`gen_random_uuid()`);
// const uuidv7 = () => uuid("id").default(sql`uuid_generate_v7()`);

export const users = pgTable(
  "users",
  {
    id: uuidv7().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updateAt: timestamp("updateAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export const articles = pgTable("articles", {
  id: uuidv7().primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  tag: text("tag").notNull(),
  group: text("group").notNull(),
  bookmark: boolean("bookmark").notNull(),
  content_url: text("content_url").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updateAt: timestamp("updateAt").defaultNow().notNull(),
});

export const folders = pgTable("folders", {
  id: uuidv7().primaryKey(),
  folder_name: text("folder_name").notNull(),
  view_order: text("view_order").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updateAt: timestamp("updateAt").defaultNow().notNull(),
});
