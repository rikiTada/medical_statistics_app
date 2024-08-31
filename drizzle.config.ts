import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle/migrations",
  dialect: "sqlite",
  // driver: "d1-http",
  // dbCredentials: {
  //   wranglerConfigPath: "wrangler.toml",
  // },
} satisfies Config;
