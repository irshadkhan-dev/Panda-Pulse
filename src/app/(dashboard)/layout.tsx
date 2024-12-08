import React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import MobileNav from "@/components/mobile-nav";
import AppSideBar from "@/components/app-sidebar";

export default function Rootpage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <main className="w-full overflow-hidden flex max-md:flex-col md:gap-10">
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="max-md:hidden">
            <AppSideBar className="bg-white w-[18rem]" />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}
