import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core";

// UUIDv7のカスタム型を定義
// const uuidv7 = () => uuid("id").default(sql`uuid_generate_v7()`); //TODO: uuidv7使えるようにする

// テーブルの基本スキーマを定義
const schemaBase = {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updateAt: timestamp("update_at").defaultNow().notNull(),
};

// ====================
// ユーザ情報 🙋
// ====================
export const users = pgTable(
  "users",
  {
    ...schemaBase,
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

// ====================
// 記事情報 📝
// ====================

export const books = pgTable("books", {
  ...schemaBase,
  title: text("title").notNull(),
});

export const chapters = pgTable("chapters", {
  ...schemaBase,
  title: text("title").notNull(),
  content: text("content").notNull(),
  bookId: uuid("book_id")
    .notNull()
    .references(() => books.id, { onDelete: "cascade" }),
});

export const articles = pgTable("articles", {
  ...schemaBase,
  title: text("title").notNull(),
  description: text("description"),
  content: text("content").notNull(),
  tag: text("tag"),
  category: text("category"), //TODO: テーブルの分離
  bookmark: boolean("bookmark").default(false).notNull(),
  contentUrl: text("content_url"), //S3など、外部に保存したファイルに使用

  chapterId: uuid("chapter_id").references(() => chapters.id, {
    onDelete: "cascade",
  }),
});

// ====================
// フォルダ情報 📁
// ====================
export const folders = pgTable("folders", {
  ...schemaBase,
  folderName: text("folder_name").notNull(),
  viewOrder: text("view_order"),
  articleCount: integer("article_count").default(0).notNull(),
  articleId: uuid("article_id").references(() => articles.id),
});
