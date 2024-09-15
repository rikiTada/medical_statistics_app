import { FloatingButton } from "@/components/floatingButton";
import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // フローティングボタン
  // const FloatingButton = (props: { href: string }) => (
  //   <Button
  //     size="icon"
  //     className="fixed bottom-6 right-4 bg-blue-900 hover:bg-blue-900/90"
  //     onClick={() => scrollTo(0, 0)}
  //   >
  //     <ChevronUp />
  //     {/* <a href={props.href}>
  //     </a> */}
  //   </Button>
  // );

  return (
    <div className="min-h-screen px-4 flex">
      <Sidebar />
      <div className="w-full max-w-full md:ml-8 py-4">
        {/* <span id="#TOP" className="sr-only"></span> */}
        {children}
        <FloatingButton />
      </div>
    </div>
  );
}
