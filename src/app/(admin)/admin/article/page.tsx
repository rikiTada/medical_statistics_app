import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { formatedDateStr } from "@/lib/date";
import Link from "next/link";

export default async function Page() {
  const data = await db.select().from(articles);

  return (
    <>
      <div className="flex gap-2 my-4">
        <Button asChild>
          <Link href="/admin/article/edit">記事編集</Link>
        </Button>
        <Button asChild>
          <Link href="/admin/article/create">ファイル追加</Link>
        </Button>
      </div>

      {data.map((d) => (
        <div key={d.id} className="flex gap-2 items-center my-2 border-b py-4">
          <h1 className="max-w-40 truncate">{d.id}</h1>
          <h2 className="min-w-60">{d.title}</h2>
          <p className="text-muted-foreground">
            {formatedDateStr(d.createdAt)}
          </p>
          <div className="w-12" />
          <Button size="sm" variant="destructive">
            削除
          </Button>
        </div>
      ))}
    </>
  );
}
