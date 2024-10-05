## drizzle settings & awesome command

### add npm package

- require

  - dotenv
  - drizzle-orm
  - drizzle-kit
  - postgres(any database)

- optional
  - @vercel/postgres

### connecting DataBase

`touch /src/db/index.ts`

```typescript
import { sql } from "@vercel/postgres";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/vercel-postgres";

// optional
import * as schema from "./schema";

config({ path: ".env.local" });

export const db = drizzle(sql, { schema });

// arg1: connection any database
// arg2: db.select
```

### add schema

`/src/db/schema.ts`
or
`/src/db/schema/*`

### drizzle setting

`touch ./drizzle.config.ts`

```typescript
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schema.ts", //your schema path
  out: "./drizzle", //output migrate file
  dialect: "postgresql", //any database
  dbCredentials: {
    url: process.env.POSTGRES_URL!, //connection db url
  },
});
```
