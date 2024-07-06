import Link from "next/link";
import React from "react";
import { IoTimeSharp, IoWallet } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  return (
    <section className="p-[5%]">
      <div className="text-center mb-10">
        <h1 className="text-[2.2rem] lg:text-[2.5rem] text-[#030712] font-bold">
          Comprehensive Features For <br /> Personal Finance Management
        </h1>
      </div>
      <div className="custom-grid">
        <div className="bg-[#2dd4bf] flex items-start flex-col gap-4 p-5 rounded-lg">
          <div className="bg-gray-500/40 p-3 rounded-md">
            <IoTimeSharp className="text-[26px] text-[#030712]" />
          </div>
          <h1 className="text-[1.5rem] text-[#030712] font-bold">
            Real Time Tracking
          </h1>
          <p className="text-gray-600">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia quod quidem non
            quis harum nobis architecto, in ratione, sunt omnis mollitia
            similiquer.
          </p>

          <button className="text-[#030712] text-[18px] font-bold">
            <Link href="/" className="flex items-center gap-2">
              Learn More <FaArrowRight size={20}/>
            </Link>
          </button>
        </div>

        <div className="bg-[#030712] flex items-start flex-col gap-4 p-5 rounded-lg">
          <div className="bg-gray-500/50 p-3 rounded-md">
            <IoWallet className="text-[26px] text-[#fff]" />
          </div>
          <h1 className="text-[1.5rem] text-[#fff] font-bold">
            Investment Mangement
          </h1>
          <p className="text-[#fff]">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia quod quidem non
            quis harum nobis architecto, in ratione, sunt omnis mollitia
            similiquer.
          </p>

          <button className="text-[#fff] text-[18px] font-bold">
            <Link href="/" className="flex items-center gap-2">
              Learn More <FaArrowRight size={20}/>
            </Link>
          </button>
        </div>

        <div className="bg-[#fef08a] flex items-start flex-col gap-4 p-5 rounded-lg">
          <div className="bg-gray-500/40 p-3 rounded-md">
            <IoTimeSharp className="text-[26px] text-[#030712]" />
          </div>
          <h1 className="text-[1.5rem] text-[#030712] font-bold">
            Budgeting
          </h1>
          <p className="text-[#030712]">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Officia quod quidem non
            quis harum nobis architecto, in ratione, sunt omnis mollitia
            similiquer.
          </p>

          <button className="text-[#030712] text-[18px] font-bold">
            <Link href="/" className="flex items-center gap-2">
              Learn More <FaArrowRight size={20}/>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
