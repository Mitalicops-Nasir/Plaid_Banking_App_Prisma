import React from "react";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <section className="p-[5%]">
      <div className="bg-[#030712] p-[4rem] rounded-xl">
        <div className="flex items-center flex-col lg:flex-row gap-[3rem] justify-center">
          <h1 className="text-[1.9rem] xl:text-[2.3rem] text-white font-bold tracking-wider">
            Start Your Journey To Financial Success Today
          </h1>
          <div>
            <p className="text-[1rem] text-gray-400 font-semibold mb-6 leading-[1.9]">
              lorem ipsum dolor sit amet hehh qhfkhqf hkqhfkk qyfi4ffj
              qfqf3ufkhf3 kfhkq lorem ipsum dolor sit amet hehh qhfkhqf hkqhfkk
              qyfi4ffj qfqf3ufkhf3 kfhkq lorem ipsum dolor sit amet hehh qhfkhqf
              hkqhfkk qyfi4ffj qfqf3ufkhf3 kfhkq lorem ipsum dolor sit amet hehh
              qhfkhqf hkqhfkk qyfi4ffj qfqf3ufkhf3 kfhkq
            </p>
            <Button variant="purple" size="lg">
              Try Now - For Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
