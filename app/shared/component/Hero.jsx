import React from "react";
import Image from "next/image";

const Hero = ({ heading, bgImage1, bgImage2, herobg }) => {
  return (
    <div className="hidden w-[100%] pb-0 lg:h-[500px] h-[400px]  md:flex flex-row">
      <div className="w-[60%] relative ">
        <Image
          width={1000}
          height={1000}
          src={bgImage1}
          alt="Image"
          className="w-full h-full md:flex hidden object-cover absolute lg:bottom-0 md:bottom-[-10px] "
        />
      </div>
      <div className="w-[40%] ml-10 relative bg-no-repeat bg-contain mr-5 " style={{ backgroundImage:`url(${herobg})`, backgroundPosition:'right'}} >
        <div className="w-[50%] absolute lg:left-[80px] top-0">
          <Image
            width={1000}
            height={1000}
            src={bgImage2}
            alt="Image"
            className="w-[85%] xl:h[40%] h-[50%] md:flex hidden object-contain"
          />
        </div>

        <div className="flex flex-col justify-end  gap-5 absolute xl:left-[100px] lg:left-[40px] left-[-30px]  bottom-[8%] w-[250px] h-[150px] ">
          <div className="font-bold text-[30px]">
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
    </div>
  );
};

export default Hero;
