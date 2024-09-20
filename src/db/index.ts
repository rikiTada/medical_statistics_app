import { sql } from "@vercel/postgres";
import { config } from "dotenv";
import { drizzle as drizzle_pg } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/vercel-postgres";
import postgres from "postgres";

config({ path: ".env.local" });

let db;

if (process.env.NODE_ENV === "development") {
  const connectionString = process.env.POSTGRES_URL_LOCAL;
  if (!connectionString) throw new Error("POSTGRES_URL_LOCAL is not defined");

  const client = postgres(connectionString);
  db = drizzle_pg(client);
} else {
  db = drizzle(sql);
}

export { db };
