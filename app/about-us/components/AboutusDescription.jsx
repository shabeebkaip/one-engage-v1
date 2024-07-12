import React from "react";
import Image from "next/image";

const AboutusDescription = () => {
  return (
    <div className="bg-[#FFEFCF]">
      <div className="container flex md:flex-row flex-col  mx-auto">
        <div className="flex flex-col items-center justify-center md:w-1/2 w-[85%] mx-auto lg:p-5 py-10 lg:px-10 ">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold lg:leading-10  font-dm-sans">
              At One Engage, we are a leading business process outsourcing company
              dedicated to delivering exceptional customer engagement solutions to
              businesses worldwide.
            </h1>
          </div>
          <div className="font-dm-sans pt-16">
            <p className="lg:text-lg text-base  font-semibold">
              With expertise, advanced technology, and commitment to quality,
              businesses can go beyond customer expectations and achieve sustainable
              growth.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 overflow-hidden flex justify-center items-center">
          <Image
            src="/abouthero3.png"
            alt="right image"
            width={1000}
            height={500}
            className=" object-contain lg:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusDescription;
