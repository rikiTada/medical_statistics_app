import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
// import { Hachi_Maru_Pop } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const NotoSansJp = Noto_Sans_JP({ subsets: ["latin"] });
// const HachiMaruPopFont = Hachi_Maru_Pop({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medical Statistics App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // フローティングボタン
  const FloatingButton = (props: { href: string }) => (
    <Button
      size="icon"
      className="fixed bottom-6 right-4 bg-blue-900 hover:bg-blue-900/90"
    >
      <a href={props.href}>
        <ChevronUp />
      </a>
    </Button>
  );

  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={cn(
          NotoSansJp.className,
          "min-h-screen px-4 bg-blue-100/30 flex "
        )}
      >
        <Sidebar />
        <div className="w-full max-w-full md:ml-8 py-4">
          <span id="#TOP" className="sr-only"></span>
          {children}
          <FloatingButton href="#TOP" />
        </div>
      </body>
    </html>
  );
}
