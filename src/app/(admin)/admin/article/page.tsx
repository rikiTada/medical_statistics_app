import { db } from "@/db";
import { articles } from "@/db/schema";
import { format } from "date-fns";
import Link from "next/link";

export default async function Page() {
  const data = await db.select().from(articles);

  console.log(data);

  return (
    <>
      <Link href="/admin/article/edit">記事編集</Link>

      {data.map((d) => (
        <div key={d.id}>
          <h1 className="max-w-40 truncate">{d.id}</h1>
          <h2>{d.title}</h2>
          <p>{format(d.createdAt, "yyyy-MM-dd HH:mm:ss")}</p>
        </div>
      ))}
    </>
  );
}
