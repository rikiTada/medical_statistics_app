"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ArticleInsert } from "@/db/type";
import { createArticle } from "./actions";

export default async function Page() {
  const insertData: ArticleInsert = {
    title: "title1",
    content: "content1",
  };

  const renderInput = (
    key: keyof ArticleInsert,
    value: ArticleInsert[keyof ArticleInsert]
  ) => {
    switch (typeof value) {
      case "boolean":
        return (
          <Input
            type="checkbox"
            name={key}
            id={key}
            defaultChecked={value}
            className="rounded"
          />
        );
      case "object":
        if (value instanceof Date) {
          return (
            <Input
              type="datetime-local"
              name={key}
              id={key}
              defaultValue={value.toISOString().slice(0, 16)}
              className="w-full rounded"
            />
          );
        }
        return null;
      default:
        return (
          <Input
            type="text"
            name={key}
            id={key}
            defaultValue={value || ""}
            className="w-full rounded"
          />
        );
    }
  };

  return (
    <form action={createArticle} className="grid gap-2 m-8">
      {(Object.keys(insertData) as Array<keyof ArticleInsert>).map((key) => (
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
