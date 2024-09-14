import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Statistics/ admin",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-dvh">{children}</div>;
}
