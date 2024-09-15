import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
// import { Hachi_Maru_Pop } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.scss";

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
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={cn(NotoSansJp.className, "min-h-dvh")}>{children}</body>
    </html>
  );
}
