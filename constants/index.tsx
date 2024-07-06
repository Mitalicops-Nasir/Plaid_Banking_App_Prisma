"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTransaction } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { FaPiggyBank, FaPlaneDeparture } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { IoFastFood } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

export const sidebarLinks = [
  {
    imgURL: <TbLayoutDashboardFilled />,
    route: "/dashboard",
    label: "Home",
  },
  {
    imgURL: <BsBank2 />,
    route: "/dashboard/my-banks",
    label: "My Banks",
  },
  {
    imgURL: <AiOutlineTransaction />,
    route: "/dashboard/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: <FcMoneyTransfer />,
    route: "/dashboard/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    icon: <IoFastFood className="text-[25px] text-blue-700" />,
  },
  Travel: {
    bg: "bg-success-25",
    circleBg: "bg-success-100",
    text: {
      main: "text-success-900",
      count: "text-success-700",
    },
    progress: {
      bg: "bg-success-100",
      indicator: "bg-success-700",
    },
    icon: <FaPlaneDeparture className="text-[25px] text-success-700" />,
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    icon: <FaBagShopping className="text-[25px] text-pink-700" />,
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  Payment: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  "Bank Fees": {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  Transfer: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  Travel: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const NavigationMenuItems = ({ className }: { className?: string }) => {
  return (
    <>
      <div className={`flex items-center gap-[2rem], ${className}`}>
        <Link
          href="/"
          className="text-[#1f2937] text-[1.2rem] font-bold hover:text-[#020617] duration-200"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-[#1f2937] text-[1.2rem] font-bold hover:text-[#020617] duration-200"
        >
          Support
        </Link>
        <Link
          href="/"
          className="text-[#1f2937] text-[1.2rem] font-bold hover:text-[#020617] duration-200"
        >
          Features
        </Link>
        <Link
          href="/"
          className="text-[#1f2937] text-[1.2rem] font-bold hover:text-[#020617] duration-200"
        >
          Community
        </Link>{" "}
      </div>
      <div className={`flex items-center gap-[2rem], ${className}`}>
        <Link
          href="/register"
          className="text-[#1f2937] text-[1.2rem] font-bold hover:text-[#020617] duration-200"
        >
          Register
        </Link>
        <Button variant="black" className="p-6" asChild>
          <Link href="/login">Login Now</Link>
        </Button>
      </div>
    </>
  );
};

export const ServicesCard1 = ({ className }: { className?: string }) => {
  return (
    <div
      className={`bg-white border border-black-2 rounded-[5px] shadow-xl p-3 , ${className}`}
    >
      <div className="flex items-center gap-4">
        <Image
          src="/landing-page/banking-1.jpg"
          alt="profile"
          width={50}
          height={50}
          className="w-[3rem] h-[3rem] rounded-[50%]"
        />
        <div className="mr-10">
          <h2 className="text-black-1 text-[16px] font-bold">Smith Welson</h2>
          <p className="text-gray-400 text-[13px] font-semibold">
            Savings Account
          </p>
        </div>
      </div>
    </div>
  );
};

export const ServicesCard2 = ({ className }: { className?: string }) => {
  const [isVisible, setIsVisible] = useState(
    window.innerWidth > 1200
  );

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-white border border-black-2 rounded-[5px] shadow-xl p-5 , ${className}`}
    >
      <div className="flex items-center gap-10">
        <div>
          <h2 className="text-black-1 text-[17px] font-bold">Payment</h2>
          <p className="text-gray-400 text-[13px] font-semibold">
            Savings Account
          </p>
        </div>

        <CiMenuKebab
          className="text-[25px] text-black-1 cursor-pointer"
          onClick={toggleVisibility}
        />

        <DropdownMenu>
          <DropdownMenuTrigger className="text-black-1 p-2 border rounded-lg border-black-1">
            Select Account
          </DropdownMenuTrigger>
          <DropdownMenuContent className="white-blur">
            <DropdownMenuLabel>My Accounts</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600" />
            <DropdownMenuItem>Savings</DropdownMenuItem>
            <DropdownMenuItem>Debit</DropdownMenuItem>
            <DropdownMenuItem>Credit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {isVisible && (
        <div className="mt-[1.5rem]">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#fb923c] rounded-md p-2">
              <GiCash className="text-[30px] text-white" />
            </div>
            <div>
              <h2 className="text-black-1 text-[17px] font-bold">
                Savings Account
              </h2>
              <span className="text-gray-400 text-[13px] font-semibold">
                $100.35
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#16a34a] rounded-md p-2">
              <FaPiggyBank className="text-[30px] text-white" />
            </div>
            <div>
              <h2 className="text-black-1 text-[17px] font-bold">
                Spending Account
              </h2>
              <span className="text-gray-400 text-[13px] font-semibold">
                $500.50
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
