export default async function Page() {
  // http://localhost:3000 を入れないとエラーになる
  const data = await fetch("http://localhost:3000/api").then((res) =>
    res.json()
  );

  return (
    <>
      <span>message:{data.message}</span>
    </>
  );
}
