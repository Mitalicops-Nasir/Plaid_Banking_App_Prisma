import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="custom-grid-2 p-[5%] gap-[40px] md:gap-[100px]">
      <div className="">
        <Image src="/logo.svg" alt="logo" width={45} height={45} />
        <p className="mt-[1.5rem] footer-link">
          We are a bank that will help you to manage your finances with ease.
          weather it be digital banking or any other form of banking. we are
          always here to help you. We do banking in the right way.
        </p>

        <div className="flex items-center gap-4 mt-[1.5rem]">
          <Link href="/" className="border border-black-1 rounded-full p-2">
            <FaMeta className="text-black-1 text-[25px]" />
          </Link>
          <Link href="/" className="border border-black-1 rounded-full p-2">
            <FaInstagramSquare className="text-[25px] text-black-1" />
          </Link>
          <Link href="/" className="border border-black-1 rounded-full p-2">
            <FaLinkedinIn className="text-[25px] text-black-1" />
          </Link>
          <Link href="/" className="border border-black-1 rounded-full p-2">
            <FaXTwitter className="text-[25px] text-black-1" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-black-1 mb-3 text-[1.3rem]">Home</h3>
        <a href="" className="footer-link">
          Buy Car
        </a>
        <a href="" className="footer-link">
          Loan
        </a>
        <a href="" className="footer-link">
          Mortage
        </a>
        <a href="" className="footer-link">
          How It Works?
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-black-1 mb-3 text-[1.3rem]">Company</h3>
        <a href="" className="footer-link">
          About us
        </a>
        <a href="" className="footer-link">
          FAQs
        </a>
        <a href="" className="footer-link">
          Services
        </a>
        <a href="" className="footer-link">
          Our Policy
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-black-1 mb-3 text-[1.3rem]">Contact</h3>
        <a href="" className="footer-link">
          +(1) 378 038 7376
        </a>
        <a href="" className="footer-link">
          New york, NY
        </a>
        <a href="" className="footer-link">
          Recruitment
        </a>
        <a href="" className="footer-link">
          Terms Of service
        </a>
      </div>
    </section>
  );
};

export default Footer;
