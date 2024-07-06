import { FooterProps } from "@/index";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { LogoutButton } from "../auth/logout-button";
import ThemeSwitch from "../ThemeSwitch";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  return (
    <>
      <footer className="footer">
        <div
          className={type === "mobile" ? "footer_name-mobile" : "footer_name"}
        >
          <p className="text-xl font-bold text-gray-700">
            {user?.firstName[0]}
          </p>
        </div>

        <div
          className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
        >
          <h1 className="text-14 truncate text-gray-700 dark:text-slate-50 font-semibold">
            {user?.firstName}
          </h1>
          <p className="text-14 truncate font-normal text-gray-600 dark:text-[#a3bdcc]">
            {user?.email}
          </p>
        </div>

        <div className="footer_image">
          <LogoutButton>
            <CiLogout className="text-[25px] text-black-2 dark:text-[#a3bdcc]" />
          </LogoutButton>
        </div>
      </footer>
      <ThemeSwitch />
    </>
  );
};

export default Footer;
