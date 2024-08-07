"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home } from "lucide-react";
import { useGetAllArticle } from "@/hooks/swr/article";
import style from "./components.module.scss";

type SidebarProps = Readonly<{
  className?: string;
}>;

export default function Sidebar({ className }: SidebarProps) {
  const { data } = useGetAllArticle();

  const menuList = [
    {
      group: "記事一覧",
      items: data?.map((article) => ({
        link: `/articles/${article.slug}`,
        text: article.meta.title,
      })),
    },
  ];

  return (
    <div
      className={cn(
        className,
        style.sidebar,
        "bg-blue-900 p-4 min-w-60 overflow-y-auto no-scrollbar"
      )}
    >
      <Link
        href="/"
        className="text-card flex gap-2 items-center py-2 px-1 my-2 rounded hover:bg-blue-950"
      >
        <Home color="white" />
        <span>HOME</span>
      </Link>

      <hr />

      <div className="flex h-full w-full flex-col overflow-hidden rounded-none text-card">
        <div className="overflow-hidden px-2 py-1.5 ">
          {menuList.map((menu) => (
            <div key={menu.group} className="py-2">
              <span className="text-xs my-2">{menu.group}</span>
              {menu.items
                ? menu.items.map((item) => (
                    <div
                      key={item.link}
                      className="p-1 w-full hover:bg-blue-950 hover:text-primary-background rounded"
                    >
                      <Link href={item.link} className="text-base ">
                        <span className="truncate block">- {item.text}</span>
                      </Link>
                    </div>
                  ))
                : null}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0
                          border-l-[20px] border-l-transparent
                          border-r-[20px] border-r-transparent
                          border-b-[20px] border-b-white"
        ></div>
      </div> */}
    </div>
  );
}
