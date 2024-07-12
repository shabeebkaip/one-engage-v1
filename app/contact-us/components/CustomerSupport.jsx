import React from "react";
import Image from "next/image";

const CustomerSupport = () => {
  return (
    <div className="container pt-32 mx-auto">
      <div className="flex flex-col items-center justify-center ">
        <p className="text-[#FF6410] lg:text-[60px] font-poppins font-bold md:w-[50%] text-center lg:leading-[70px] md:leading-[50px] text-[40px]">
          Customer Support Information:
        </p>
        <p className="text-[24px] font-bold text-center w-[80%] leading-[28px] pt-8 font-dm-sans">
          Our support team is committed to ensuring our customers have a
          positive experience with our products and services. We offer several
          options for customer support, including a comprehensive FAQ section,
          email support, and a dedicated phone line.
        </p>
        <p className="text-[18px] font-medium text-center w-[80%] leading-[24px] pt-5 font-dm-sans">
          Our team is available to answer any questions or address any concerns
          you may have regarding our offerings. We also welcome your feedback
          and suggestions for improving our services. At One Engage, we strive
          to provide exceptional customer support and continually enhance the
          customer experience.
        </p>
      </div>
      <div className="flex justify-center md:py-16 py-10">
        <div className="relative md:w-[50%] ">
          <input
            type="text"
            placeholder="Your email address"
            className="border-[3px] border-[#FF6410] rounded-[40px] w-full p-4 pr-12"
          />
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FF6410] p-2 rounded-full">
            <Image
              src="/Vector (4).png"
              alt="Send"
              className="bg-[#FF6410] w-5 h-5"
              width={100}
              height={100}
            />
          </button>
        </div>
      </div>

      <div className="hidden justify-between md:flex pt-20 pb-6">
        <Image
          src="/point3.png"
          alt="Send"
          className="lg:w-[114px] md:w-[80px] h-[80px] lg:h-auto w-[59px]"
          width={100}
          height={100}
        />
        <div className="flex gap-1">
          <Image
            className="lg:w-[114px] md:w-[80px] h-[80px] lg:h-auto w-[59px]"
            src="/point2.png"
            width={1000}
            height={1000}
          />
          <Image
            className="lg:w-[114px] md:w-[80px] h-[80px] lg:h-auto w-[59px]"
            src="/poinred.png"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex justify-between pt-5 px-5 pb-6 md:hidden">
        <Image
          src="/point3.png"
          alt="Send"
          className="md:w-[114px] w-[59px]"
          width={100}
          height={100}
        />
        <div className="flex gap-1">
          <Image
            className="md:w-[114px] w-[59px]"
            src="/point2.png"
            width={1000}
            height={1000}
          />
          <Image
            className="md:w-[114px] w-[59px]"
            src="/poinred.png"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
