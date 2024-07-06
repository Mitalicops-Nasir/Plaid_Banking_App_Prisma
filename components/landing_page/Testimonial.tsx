"use client";

import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="p-[5%]">
      <div className="text-center mb-7">
        <h1 className="text-[2rem] text-black-1 font-bold">
          User Testimonials
        </h1>
        <p className="text-[1.1rem] mt-2 text-gray-500 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.lafjaljf
          ajflajf ajflajie ajfajf lafjaf lafjaf lafjaf lafjaf lafjaf lafjaf
        </p>
      </div>

      <div className="relative z-[1] grid gap-6 grid-cols-1 justify-items-center grid-flow-row mt-14">
        <div className="absolute bg-[#030712] p-[13%] rounded-lg right-[-10px] top-[-10px] sm:right-[-20px] sm:top-[-20px] z-[-1]" />

        <div className="absolute bg-[#fed7aa] p-[13%] rounded-lg left-[-10px] bottom-[-10px] sm:left-[-20px] sm:bottom-[-20px] z-[-1]" />

        <div className="bg-slate-100 shadow-xl p-[2.3rem] rounded-xl">
          <div className="flex items-center gap-[5rem] flex-col-reverse lg:flex-row">
            <div className="mb-2">
              <FaQuoteLeft className="text-[35px] mb-5" color="black" />
              <h1 className="text-[1.8rem] sm::text-[2.7rem] font-bold text-black-1">
                "I have been using Blue Horizon Bank for over a year, and it has
                completely changed the way I manage my money."
              </h1>
              <p className="text-[1rem] sm:text-[1.3rem] font-medium text-gray-500 mt-2">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                amet
              </p>
              <p className="text-black-1 font-bold text-[1.5rem] mt-[2rem]">
                Stamford John
              </p>
              <p className="text-gray-500 font-bold text-[1rem] mt-2">
                Founder, CEO
              </p>
            </div>

            <Image
              src="/landing-page/Testimonial-1.png"
              alt="image"
              width={500}
              height={500}
              className="h-full lg:w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
