"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ArticleInsert } from "@/db/type";
import { createArticle } from "./actions";

type ExtendsArticleInsert = Pick<ArticleInsert, "title" | "content">;

export default async function Page() {
  const insertData: ExtendsArticleInsert = {
    title: "title1",
    content: "content1",
  };

  const renderInput = (
    key: keyof ExtendsArticleInsert,
    value: ExtendsArticleInsert[keyof ExtendsArticleInsert]
  ) => {
    return (
      <Input type="text" name={key} id={key} defaultValue={value || ""} className="w-full rounded" />
    );
  };

  return (
    <form action={createArticle} className="grid gap-2 m-8">
      {(Object.keys(insertData) as Array<keyof ExtendsArticleInsert>).map((key) => (
        <div key={key}>
          <label htmlFor={key} className="block mb-1">
            {key}:
          </label>
          {renderInput(key, insertData[key])}
        </div>
      ))}
      <Button type="submit" className="rounded">
        Submit
      </Button>
    </form>
  );
}
