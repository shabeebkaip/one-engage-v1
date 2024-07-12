import React from 'react';
import Image from 'next/image';

const CareerAbout = () => {
  return (
    <>
      <div className="hidden md:flex bg-[#FEF2E7] h-full">
        <div className="flex items-center justify-center w-1/2 p-4 py-20 2xl:py-44 xl:py-36 lg:py-36 md:py-20 sm:py-20">
          <div>
            <h2 className="font-dm-sans xl:text-[35px] lg:text-[25px] md:text-[20px] font-bold leading-[20px] lg:leading-[33px] text-left pb-6">
              Build knowledge with a world- <br />class suite of technology built <br /> with
              service and teamwork in <br /> mind.
            </h2>
            <p className="mt-4 md:text-[15px] lg:text-[18px] xl:text-[20] text-left leading-tight">
              Upgrade your professional journey and learn how to <br /> provide a world
              class ecosystem of service, excellence <br /> and energy for a dynamic
              market.
            </p>
          </div>
        </div>
        <div className='w-1/2'>
          <Image
            src="/careerabout.png"
            alt="RIGHT IMAGE"
            width={1000}
            height={800}
            className="object-contain h-[100%] lg:h-[526px] xl:h-[100%] 2xl:h-[650px]"
          />
        </div>
      </div>

      <div className="block md:hidden bg-[#FEF2E7] h-full ">
        <div className="py-20 2xl:py-44 xl:py-36 lg:py-32 md:py-20 sm:py-20">
          <h2 className="font-dm-sans text-[20px] font-bold leading-[20px] text-left">
            Build knowledge with a world-class suite of technology built with
            service and teamwork in mind.
          </h2>
          <p className="mt-4 text-left text-[14px]">
            Upgrade your professional journey and learn how to provide a world
            class ecosystem of service, excellence and energy for a dynamic
            market.
          </p>
        </div>
        <div className=' bg-no-repeat bg-contain h-[400px] w-full ' style={{backgroundImage:"url('/careerabout.png')", backgroundPosition:"bottom"}}>
          {/* <Image
            src="/careerabout.png"
            alt="RIGHT IMAGE"
            width={1000}
            height={800}
            className="object-cover h-[100%] mb-4 md:hidden"
          /> */}
        </div>
      </div>
    </>
  );
};

export default CareerAbout;
