import React from "react";
import Image from "next/image";

const CareerHero = () => {
  return (
    <div>
      <div className="container items-center hidden mx-auto md:flex">
        <div className="relative w-full">
          <Image
            src="/groupcareer1.png"
            alt="Left Bottom Image"
            width={1600}
            height={600}
            className="object-cover mx-auto xl:w-[1200px] lg:w-[960px] md:w-[800px] sm:w-[600px] 2xl:w-[1500px]"
          />
          <h1 className="absolute 2xl:text-[70px] xl:text-[54px] lg:text-[42px] md:text-[30px] left-0 top-1/2 transform -translate-y-1/2 2xl:mt-14 xl:mt-12 lg:mt-10 md:mt-8 sm:mt-6 text-[#FF6410] font-extrabold ml-72 xl:ml-48 lg:ml-44 sm:ml-28">
            CAREERS
          </h1>
        </div>
      </div>
      <div className='relative flex flex-col items-center bg-white md:hidden '>

        <Image
          src="/careers-mobhero1.png"
          alt="right image"
          width={1000}
          height={500}
          className=" w-full mx-auto object-contain "
        />
        <div className='font-extrabold text-orange-500  text-[60px]'>CAREERS</div>
        <Image
          src="/careers-mobhero2.png"
          alt="right image"
          width={1000}
          height={500}
          className="object-contain mx-auto "
        />
       
      </div>
    </div>
  );
};

export default CareerHero;
