import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="my-4 text-lg">admin page</h1>
      <Link href="/admin/article">記事管理</Link>
      <Link href="/admin/user">ユーザ管理 </Link>
    </>
  );
}
