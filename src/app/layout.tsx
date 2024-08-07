import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={cn(
          inter.className,
          "min-h-screen px-4 bg-blue-100/30 flex "
        )}
      >
        <Sidebar />
        <div className="w-full md:ml-8 py-4">
          <span id="#TOP"></span>
          {children}
          <Button
            size="icon"
            className="fixed bottom-6 right-4 bg-blue-900 hover:bg-blue-900/90"
          >
            <a href="#">
              <ChevronUp />
            </a>
          </Button>
        </div>
      </body>
    </html>
  );
}
