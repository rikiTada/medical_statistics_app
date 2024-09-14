import { db } from "@/db";
import { users } from "@/db/schema";
import { format } from "date-fns";

export default async function Page() {
  const data = await db.select().from(users);

  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>createdAt</th>
          <th>updateAt</th>
        </tr>
        {data.map((d) => (
          <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{format(d.createdAt, "yyyy-MM-dd HH:mm:ss")}</td>
            <td>{format(d.updateAt, "yyyy-MM-dd HH:mm:ss")}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
