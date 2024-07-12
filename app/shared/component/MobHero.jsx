import React from "react";
import Image from "next/image";

const MobHero = ({ heading, mobHero, mobHero2, ballImg }) => {
  return (
    <div>
      <div className=" md:hidden container mx-auto">
        <div
          className="flex flex-col gap-10 mx-auto h-[430px] bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${mobHero})`,
            backgroundPosition: "bottom",
          }}
        ></div>
        <div className="flex flex-grow   mx-auto">
          <div className="flex flex-col justify-center pl-5 w-[100%] ">
            <div className="font-bold  pb-0 h-[170px] justify-center sm:w[70%] w-[100%] gap-4 flex flex-row leading-[50px]   ">
              <h1 className="text-[#FF6410] sm:text-[50px]   text-[30px] h-[130px] ">
                {heading}
              </h1>
              <div
                className="h-[130px] w-full bg-no-repeat"
                style={{
                  backgroundImage: `url(${ballImg})`,
                  backgroundPosition: "left",
                }}
              ></div>
            </div>

            <div className="">
              <button className="border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3">
                <p className="font-bold text-[#FF6410]">Contact us</p>
                <p className="font-bold text-[#FF6410]">&rarr;</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {" "}
        <Image
          width={1000}
          height={1000}
          src={mobHero2}
          alt="Image"
          className="w-full md:hidden flex object-contain"
        />{" "}
      </div>
    </div>
  );
};

export default MobHero;
