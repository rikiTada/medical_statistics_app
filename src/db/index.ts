import { sql } from "@vercel/postgres";
import { config } from "dotenv";
import {
  drizzle as drizzlePg,
  PostgresJsDatabase,
} from "drizzle-orm/postgres-js";
import { drizzle, VercelPgDatabase } from "drizzle-orm/vercel-postgres";
import postgres from "postgres";

config({ path: ".env.local" });

type Database = VercelPgDatabase | PostgresJsDatabase;

const createDevDatabase = (): PostgresJsDatabase => {
  const connectionString = process.env.POSTGRES_URL_LOCAL;
  if (!connectionString) {
    throw new Error("POSTGRES_URL_LOCAL is not defined");
  }
  const client = postgres(connectionString);
  return drizzlePg(client);
};

const createProdDatabase = (): VercelPgDatabase => drizzle(sql);

export const db: Database =
  process.env.NODE_ENV === "development"
    ? createDevDatabase()
    : createProdDatabase();
