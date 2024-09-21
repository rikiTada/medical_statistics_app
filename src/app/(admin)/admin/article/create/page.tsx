"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ROOT_DIRECTORY } from "@/lib/const";
import { createFile } from "../edit/actions";

export default async function Page() {
  const data = [
    {
      name: "filepath",
      value: ROOT_DIRECTORY + "/example.txt",
    },
    {
      name: "content",
      value: "content1",
    },
  ];

  const currentWorkingDirectory = process.cwd();

  return (
    <>
      <h1>currentWorkingDirectory:{currentWorkingDirectory}</h1>
      <form action={createFile} className="grid gap-2 m-8">
        {data.map((d) => (
          <div key={d.name}>
            <label htmlFor={d.name} className="block mb-1">
              {d.name}:
            </label>
            <Input
              type="text"
              name={d.name}
              id={d.name}
              defaultValue={d.value || ""}
              className="w-full rounded"
            />
          </div>
        ))}

        <Button type="submit" className="rounded">
          Submit
        </Button>
      </form>
    </>
  );
}
