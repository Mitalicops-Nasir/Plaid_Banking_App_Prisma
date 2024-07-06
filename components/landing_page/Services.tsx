import { ServicesCard1, ServicesCard2 } from "@/constants";
import Image from "next/image";
import React from "react";
import { GiMoneyStack } from "react-icons/gi";
import { MdContactless } from "react-icons/md";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section className="p-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem]">
        <div className="relative z-[1] w-full h-full">
          <Image
            src="/landing-page/banking-1.jpg"
            alt="banking-1"
            width={500}
            height={500}
            className="w-full h-full rounded-lg"
          />

          <ServicesCard1 className="absolute left-[-20px] hidden top-[-40px] md:block" />

          <ServicesCard2 className="absolute right-[-30px] hidden bottom-[-40px] md:block" />

          <div className="absolute bg-pink-300 p-[15%] rounded-lg right-[-10px] top-[-10px] sm:right-[-20px] sm:top-[-20px] z-[-1]" />

          <div className="absolute bg-[#fed7aa] p-[15%] rounded-lg left-[-10px] bottom-[-10px] sm:left-[-20px] sm:bottom-[-20px] z-[-1]" />
        </div>

        <div>
          <h1 className="text-black-1 font-bold text-[2.5rem] mb-5">
            Qualify Your Finance Teams With Money Flow
          </h1>
          <p className="text-gray-500 text-[1.2rem] mb-5">
            lorem ipsum dolr sit amet consectetur adip dolr sit amet consectetur
            adipisicing elit. dolr amit sit amit amit lorem ipsum dolro sit amet
          </p>

          <div className="flex items-center gap-4">
            <div className="dotted-custom-border rounded-[50%] mb-[5rem] p-1.5">
              <div className=" bg-[#030712] rounded-[50%] p-2">
                <GiMoneyStack className="text-[30px]" />
              </div>
            </div>

            <div>
              <h2 className="text-black-1 text-[1.2rem] font-semibold mb-3">
                Where Your Money Goes?
              </h2>

              <p className="text-gray-500 text-[1rem] font-semibold">
                lorem ipsum dolr sit amet consectetur adip dolr sit amet
                consectetur adipisicing elit. dolr amit sit amit amit lorem
                ipsum dolro sit amet lorem ipsum dolr sit amet consectetur adip
                dolr sit amet consectetur adipisicing elit. dolr amit sit amit
                amit lorem ipsum dolro sit amet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-7">
            <div className="dotted-custom-border rounded-[50%] mb-[5rem] p-1.5">
              <div className=" bg-[#030712] rounded-[50%] p-2">
                <MdContactless className="text-[30px]" />
              </div>
            </div>

            <div>
              <h2 className="text-black-1 text-[1.2rem] font-semibold mb-3">
                Work From Any Device
              </h2>

              <p className="text-gray-500 text-[1rem] font-semibold">
                lorem ipsum dolr sit amet consectetur adip dolr sit amet
                consectetur adipisicing elit. dolr amit sit amit amit lorem
                ipsum dolro sit amet lorem ipsum dolr sit amet consectetur adip
                dolr sit amet consectetur adipisicing elit. dolr amit sit amit
                amit lorem ipsum dolro sit amet
              </p>
            </div>
          </div>
          <Button variant="purple" size="lg" className="text-semibold mt-5">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
