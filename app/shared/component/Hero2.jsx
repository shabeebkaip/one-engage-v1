import React from "react";
import Image from "next/image";

const Hero = ({ heading, bgImage1, bgImage2 }) => {
  return (
    <div className="hidden w-[100%] pb-0 xl:h-[720px] lg:h-[650px]  md:h-[490px]   md:flex flex-row">
      <div className="w-[40%]  ml-10  items-center flex flex-col">
        <div className="w-[50%] flex justify-center items-center  ">
          <Image
            width={1000}
            height={1000}
            src={bgImage2}
            alt="Image"
            className="  h-[100%] md:flex hidden object-contain"
          />
        </div>

        <div className="flex flex-col justify-end  gap-5 mt-[120px] xl:left-[100px] lg:left-[90px] xl:bottom-[5%]  md:bottom-[7%] w-[360px] h-[150px] ">
          <div className="font-bold xl:text-[50px] text-[35px]">
            <h1 className="text-[#FF6410]">{heading}</h1>
          </div>
          <div>
            <button className="border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3">
              <p className="font-bold text-[#FF6410]">Contact us</p>
              <p className="font-bold text-[#FF6410]">&rarr;</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] relative  ">
        <Image
          width={1000}
          height={1000}
          src={bgImage1}
          alt="Image"
          className=" h-full md:flex hidden object-contain lh:object-cover  absolute lg:bottom-0 md:bottom-[-10px] "
        />
      </div>
    </div>
  );
};

export default Hero;
