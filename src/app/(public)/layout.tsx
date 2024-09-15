import { FloatingButton } from "@/components/floatingButton";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex overflow-x-hidden min-h-dvh">
      <Sidebar />
      <div className="px-10 py-4">
        {children}
        <FloatingButton />
      </div>
    </div>
  );
}
