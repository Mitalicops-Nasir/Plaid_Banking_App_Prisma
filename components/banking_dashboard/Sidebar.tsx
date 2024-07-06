"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";
import { SiderbarProps } from "@/index";
import { sidebarLinks } from "@/constants";
import Image from "next/image";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="mb-12 cursor-pointer flex items-center gap-2"
          >
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
            <h1 className="sidebar-logo">
              <span className="text-blue-500">Blue</span> Horizon Bank
            </h1>
          </Link>
        </div>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="flex items-center gap-2">
                <li
                  className={cn(
                    "flex items-center gap-2 text-black-1 dark:text-[#a3bdcc] text-[25px]",
                    {
                      "brightness-[3] text-white invert-0": isActive,
                    }
                  )}
                >
                  {item.imgURL}

                  <p
                    className={cn("sidebar-label", { "!text-white": isActive })}
                  >
                    {item.label}
                  </p>
                </li>
              </div>
            </Link>
          );
        })}

        <PlaidLink user={user} />
      </nav>

      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
