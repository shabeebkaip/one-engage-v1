import React from "react";
import Image from "next/image";

const CareerDescription = () => {
  return (
    <div className="relative flex flex-col items-center text-left bg-yellow-500 xs:left-0 sm:text-center py:20 xl:py-36 lg:py-32 md:py-20 sm:py-20">
      <div className="container hidden p-4 mx-auto md:block">
        <h2 className="pt-12  mb-12 font-bold text-black text-[22px] xl:text-3xl md:text-xl lg:text-2xl sm:text-md font-poppins leading-none md-leading-14">
          One Engage is especially happy to meet you.
          <br /> You’ve already taken a bold step to an exciting <br /> career.
        </h2>
        <div className="font-sans leading-none md:leading-6 text-black text[18px] md:text-sm sm:text-sm lg:text-base mb-24 md:mb-14">
          <p>
            Explore an international team with multi-industry experience in the{" "}
            <br /> digital economy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex pl-4 mb-8">
          <Image
            src="/ball-img-x.png"
            alt="left bottom image"
            width={180}
            height={180}
            className="object-cover ml-12 w-[90px] md:w-[135px] lg:w-[145px] xl:w-[180px] sm:w-[100px]"
          />
        </div>
        <div className="absolute bottom-0 right-0 pr-4 mb-8">
          <Image
            src="/point3.png"
            alt="right bottom image"
            width={100}
            height={100}
            className="object-cover mr-12 w-[45px] sm:w-[50px] md:w-[70px] lg:w-[80px] xl:w-[100px]"
          />
        </div>
      </div>
      
      
      <div className="container block p-4 py-24 x-auto md:hidden">
        <h2 className="mb-12 font-bold text-black text-[22px] xl:text-3xl md:text-xl lg:text-2xl sm:text-md font-poppins leading-none md-leading-14">
          One Engage is especially happy to meet you.
          You’ve already taken a bold step to an exciting career.
        </h2>
        <div className="font-sans leading-none md:leading-6 text-black text[18px] md:text-sm sm:text-xs lg:text-base mb-24 md:mb-14">
          <p>
            Explore an international team with multi-industry experience in the
             digital economy.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex pt-4 pb-4 pl-4 mb-7">
          <Image
            src="/ball-img-x.png"
            alt="left bottom image"
            width={180}
            height={180}
            className="object-cover w-[90px] md:w-[135px] lg:w-[145px] xl:w-[180px] sm:w-[100px]"
          />
         
        </div>
        <div className="absolute bottom-0 right-0 pb-4 pr-4 mb-7">
          <Image
            src="/point3.png"
            alt="right bottom image"
            width={100}
            height={100}
            className="object-cover  w-[45px] sm:w-[50px] md:w-[70px] lg:w-[80px] xl:w-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerDescription;
