import React from "react";
import Image from "next/image";
const HeroMob = () => {
  return (
    <div className="md:hidden flex flex-col">
      <div className="w-[90%] mx-auto  bg-no-repeat bg-contain">
        <Image
          width={1000}
          height={1000}
          src="/contact-us-mob-hero1.png"
          alt="Image"
          className="w-full  rounded-[23px]  object-contain"
        />
      </div>

      <div className="text-center">
        <h3 className="text-[#FF6410] sm:text-[55px] text-[40px] font-poppins font-bold ">
          CONTACT US
        </h3>{" "}
      </div>
      <div className="w-full block md:hidden bg-no-repeat bg-contain">
        <Image
          width={1000}
          height={1000}
          src="/contactmob.png"
          alt="Image"
          className="w-full  rounded-[23px]  object-contain"
        />
      </div>
    </div>
  );
};

export default HeroMob;
