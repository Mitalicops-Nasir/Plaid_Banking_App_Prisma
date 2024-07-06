import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="p-[5%]">
      <div className="grid grid-cols-1 gap-3 justify-items-center text-center">
        <h1 className="text-[#030712] font-extrabold text-[2.2rem] lg:text-[4.5rem] ">
          Easy Way to Connect <br /> to Your Finance
        </h1>
        <p className="text-gray-600 text-[1.3rem] mb-4">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. dolor
          saepe saepe piler saepe
        </p>
        <div
          className="bg-gradient-to-r from-[rgba(94,12,94,1)] via-[rgba(171,24,203,1)] via-42% to-[rgba(255,255,0,1)] to-91%
          w-full p-6 rounded-3xl"
        >
          <Image
            src="/banking-app.png"
            className="w-full rounded-lg"
            width={2000}
            height={2000}
            alt="bank"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
