import { createUser } from "@/app/test/edit/actions";
import { Input } from "@/components/ui/input";

export default async function Page() {
  const inssertData = {
    name: "test",
    email: "test@email.com",
    password: "test",
  };

  const data = Object.entries(inssertData).map(([key]) => key);

  return (
    <div>
      <form action={createUser} className="grid gap-2 m-8">
        {data.map((key) => (
          <>
            <span>{key}:</span>
            <Input
              key={key}
              type="text"
              name={key}
              id={key}
              defaultValue={(inssertData as any)[key]}
              className="w-full rounded"
            />
          </>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
