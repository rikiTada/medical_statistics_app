import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { group } from "console";

type SidebarProps = Readonly<{
  className?: string;
}>;

export default function Sidebar({ className }: SidebarProps) {
  const menuList = [
    {
      group: "記事一覧",
      items: [
        { link: "/articles/first-post", text: "記事テスト1" },
        { link: "/articles/second-post", text: "記事テスト2" },
      ],
    },
    // {
    //   group: "設定",
    //   items: [
    //     { link: "/", text: "プロフィール" },
    //     { link: "/", text: "各種設定" },
    //   ],
    // },
  ];

  return (
    <div
      className={cn(
        className,
        "bg-[hsl(216_84_29)] p-4 min-w-60 overflow-y-auto no-scrollbar"
      )}
    >
      <Link
        href="/"
        className="text-card flex gap-2 items-center py-2 px-1 my-2 rounded hover:bg-[hsl(216,78%,15%)]"
      >
        <Home color="white" />
        <span>HOME</span>
      </Link>

      <hr />

      <div className="flex h-full w-full flex-col overflow-hidden rounded-none text-card">
        <div className="overflow-hidden px-2 py-1.5 ">
          {menuList.map((menu) => (
            <div key={menu.group} className="py-2">
              <span className="text-xs py-2">{menu.group}</span>
              {menu.items.map((item) => (
                <div
                  key={item.link}
                  className="p-1 w-full hover:bg-[hsl(216,78%,15%)]  hover:text-primary-background rounded"
                >
                  <Link href={item.link} className="text-base">
                    - {item.text}
                  </Link>
                </div>
              ))}
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
