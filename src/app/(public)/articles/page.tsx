import { NoData } from "@/components/nodata";
import { db } from "@/db";
import { articles } from "@/db/schema";

export default async function Page() {
  try {
    const data = await db.select().from(articles);
    if (!data || data.length === 0) return <NoData />;

    return (
      <div>
        {data.map((d) => (
          <div key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.content_url}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <NoData />;
  }
}
