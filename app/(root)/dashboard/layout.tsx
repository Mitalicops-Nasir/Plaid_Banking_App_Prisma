import MobileNav from "@/components/banking_dashboard/MobileNav";
import Sidebar from "@/components/banking_dashboard/Sidebar";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await currentUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
