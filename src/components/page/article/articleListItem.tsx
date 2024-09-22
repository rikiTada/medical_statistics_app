import { ArticleType } from "@/db/type";

export function ArticleListItem({ id, title, content }: ArticleType) {
  return (
    <div key={id} className="p-4 border-b">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
