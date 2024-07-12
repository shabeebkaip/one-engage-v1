import React from "react";
import Image from "next/image";

const About = ({ color, textColor, content, content2 }) => {
  return (
    <div className={`flex font-dm-sans bg-[${color}] text-[${textColor}] h-[650px]`}>
      <div className="container w-full py-10 mx-auto p-7">
        <div className="flex flex-col justify-center h-full gap-5 md:hidden">
          <div className="font-bold text-[26px] flex justify-center">
            <h1 className="">{content}</h1>
          </div>
          <div className="flex pt-5 pb-20">
            <p className="font-bold">{content2}</p>
          </div>
          <div className="gap-3 md:flex">
            <Image
              width={1000}
              height={1000}
              src="/interaboutball.png"
              alt="Image"
              className="w-full full rounded-[23px]"
            />
          </div>
        </div>
        <div className="justify-center hidden h-full gap-5 md:flex md:flex-col">
          <div className="font-bold text-[35px] leading-8 flex justify-center font-dm-sans">
            <h1 className="w-[70%] text-center">{content}</h1>
          </div>
          <div className="flex pt-10 pb-20 font-semibold font-dm-sans">
            <p className=" mx-auto lg:w-[70%] w-[90%] text-center text-[24px]">{content2}</p>
          </div>
          <div className="gap-3 md:flex">
            <Image
              width={1000}
              height={1000}
              src="/interaboutball.png"
              alt="Image"
              className="w-full full rounded-[23px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
