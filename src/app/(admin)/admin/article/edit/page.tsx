"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { ArticleInsert } from "@/db/type";
import { createArticle } from "./actions";

type ExtendsArticleInsert = Pick<ArticleInsert, "title" | "content">;

export default async function Page() {
  const data = [
    {
      comp: Input,
      name: "title",
      type: "text",
      value: "title1",
    },
    {
      comp: Textarea,
      name: "content",
      type: "textarea",
      value: "content1",
    },
  ];

  return (
    <form action={createArticle} className="grid gap-2 m-8">
      {data.map((d) => (
        <div key={d.name}>
          <label htmlFor={d.name} className="block mb-1">
            {d.name}:
          </label>
          {
            <d.comp
              name={d.name}
              id={d.name}
              defaultValue={d.value || ""}
              className="w-full rounded"
            />
          }
        </div>
      ))}

      <Button type="submit" className="rounded">
        Submit
      </Button>
    </form>
  );
}
