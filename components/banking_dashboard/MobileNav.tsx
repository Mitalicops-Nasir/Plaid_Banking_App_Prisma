"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import { MobileNavProps } from "@/index";
import { MdMenu } from "react-icons/md";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <MdMenu className="cursor-pointer text-[30px]"/>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white dark:bg-[#181a1e]"
        >
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <h1 className="text-[20px] font-semibold">
              <span className="text-cyan-400">Blue</span> Horizon Bank
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/dashboard`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <span
                          className={cn(
                            "dark:text-[#a3bdcc] text-black-1 text-[25px]",
                            {
                              "invert-0 text-black-1": isActive,
                            }
                          )}
                        >
                          {item.imgURL}
                        </span>
                        <p
                          className={cn(
                            "text-16 font-semibold text-black-1 dark:text-[#a3bdcc]",
                            {
                              "!text-white": isActive,
                            }
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>

            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
