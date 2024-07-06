import Image from "next/image";
import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import { Button } from "../ui/button";

const Offers = () => {
  return (
    <section className="p-[5%]">
      <div className="flex items-center justify-around flex-col xl:flex-row gap-1 xl:gap-[21rem] mb-[2rem] text-center xl:text-start">
        <h1 className="text-[2.2rem] text-black-1 font-bold">
          Say Good Bye To Financial Stress
        </h1>
        <p className="text-gray-500 font-semibold text-[1.2rem]">
          Finance Managment has never been this easy before, everything handled
          just 1 click away at ur disposal
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[2rem]">
        <div className="p-6 w-full h-auto xl:h-[500px] border border-black-1 rounded-lg">
          <div className="bg-[#f472b6] p-[15%] rounded-lg relative mt-[20%]">
            <div className="absolute top-[-100px] sm:top-[-150px]">
              <Image
                src="/landing-page/card.png"
                width={500}
                height={500}
                alt="card"
                className="h-full"
              />
            </div>
          </div>
          <h1 className="text-black-1 font-bold text-[2rem] mb-2">
            International Transactions with Ease
          </h1>
          <button className="px-4 py-2 bg-green-500 font-bold text-[1.3rem]">
            EASILY DONE!
          </button>
        </div>

        <div className="p-6 w-full border border-black-1 rounded-lg">
          <div className="text-black-1 font-extrabold custom-grid-3 p-5">
            <Button className="bg-[#86efac] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Finance
            </Button>
            <Button className="bg-[#bef264] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Money
            </Button>
            <Button className="bg-[#22d3ee] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Card
            </Button>
            <Button className="bg-[#ef4444] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Product
            </Button>
            <Button className="bg-[#c026d3] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Financial
            </Button>
            <Button className="bg-[#15803d] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Bank
            </Button>
            <Button className="bg-[#b45309] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Fintech
            </Button>
            <Button className="bg-[#94a3b8] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Transaction
            </Button>
            <Button className="bg-[#facc15] font-extrabold text-[22px] w-full border-2 border-black-1 p-[1.8rem] rounded-md">
              Web
            </Button>
          </div>
          <h1 className="text-black-1 mt-4 font-bold text-center text-[2rem] mr-2">
            Get The Application Now On Your Mobile
          </h1>
          <div className="flex items-center justify-center flex-col sm:flex-row mt-8 gap-2">
            <button className="bg-[#65a30d] px-[4rem] py-4 rounded-md">
              <FaGooglePlay className="text-[25px]" />
            </button>
            <button className="bg-[#09090b] px-[4rem] py-4 rounded-md">
              <FaAppStoreIos className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
