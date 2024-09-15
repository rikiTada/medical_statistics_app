import "@/components/sidebar.scss";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";

type SidebarProps = {
  className?: string;
};

type SidebarLinkProps = {
  href: string;
  title: string;
};

type LinkWithCategory = {
  category: string;
  items: {
    href: string;
    title: string;
  }[];
};

export default async function Sidebar({ className }: SidebarProps) {
  const data = await db.select().from(articles);

  const menuList: LinkWithCategory[] = [
    {
      category: "記事一覧",
      items: data.map((article) => ({
        href: `/article/${article.id}`,
        title: article.title,
      })),
    },
  ];

  const HomeLink = () => (
    <Link
      href="/"
      className="font-medium text-card flex gap-2 items-center p-2 my-2 rounded hover:bg-blue-950"
    >
      <Home size={16} />
      <span>HOME</span>
    </Link>
  );

  const SidebarCategory = ({ category, items }: LinkWithCategory) => {
    return (
      <div key={category} className="py-2">
        <span className="text-xs my-2">{category}</span>
        {items &&
          items.map((item) => <SidebarLink key={item.title} {...item} />)}
      </div>
    );
  };

  const SidebarLink = ({ href, title }: SidebarLinkProps) => {
    return (
      <div
        key={href}
        className="p-1 w-full hover:bg-blue-950 hover:text-primary-background rounded"
      >
        <Link href={href} className="text-base ">
          <span className="truncate block">- {title}</span>
        </Link>
      </div>
    );
  };

  return (
    <div
      className={cn(
        className,
        "sidebar bg-blue-900 p-4 min-w-60 overflow-y-auto no-scrollbar"
      )}
    >
      <HomeLink />

      <hr />

      <div className="flex h-full w-full flex-col overflow-hidden rounded-none text-card">
        <div className="overflow-hidden px-2 py-1.5">
          {menuList.map((menu) => (
            <SidebarCategory key={menu.category} {...menu} />
          ))}
        </div>
      </div>
    </div>
  );
}
