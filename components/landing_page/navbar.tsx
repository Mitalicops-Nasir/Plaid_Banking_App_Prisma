"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenuItems } from "@/constants";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="w-full py-5 px-[5%]">
      <nav className="screen-max-width flex items-center">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <h1 className="font-bold text-[11px] lg:text-[1.2rem] text-[#2B2B2B]">
              <span className="text-blue-600">Blue</span> Horizon Bank
            </h1>
          </div>

          <NavigationMenuItems className="hidden lg:flex gap-10" />

          <div className="lg:hidden flex items-center">
            {toggleMenu ? (
              <RiCloseLine
                className="text-[#2B2B2B]"
                size={35}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                className="text-[#2B2B2B]"
                size={35}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="absolute z-10 p-4 top-[80px] right-0 w-[250px] bg-blue-300 shadow-lg rounded-[1rem] mt-2 transform origin-top scale-100 sm:scale-105 transition-transform">
                <div className="flex gap-8 flex-col mx-0 w-full p-4 ">
                  <NavigationMenuItems className="flex-col gap-4" />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
