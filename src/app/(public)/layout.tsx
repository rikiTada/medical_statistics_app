import { FloatingButton } from "@/components/floatingButton";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  min-h-dvh">
      <Sidebar />
      <div className="px-10 py-4 w-full">
        {children}
        <FloatingButton />
      </div>
    </div>
  );
}
