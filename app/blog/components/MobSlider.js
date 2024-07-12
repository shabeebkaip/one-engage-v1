"use client";
import React, { useState } from "react";
import Image from "next/image";

const datas = [
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`,
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`,
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`,
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`,
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`,
  },
];

const MobSlider = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="md:flex hidden px-5 justify-between pt-20 pb-6">
        <div className="flex">
          <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
          <Image src="/Vector123.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
        </div>
        <div className="flex gap-1">
          <Image className="md:w-[78px] w-[59px]" src="/Group123.png" width={1000} height={1000} />
          <Image className="md:w-[78px] w-[59px]" src="/yellow.png" width={1000} height={1000} />
          <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#FF6410] md:text-[60px] font-bold md:w-[50%] pt-8 text-center md:leading-[70px] text-[40px]">
          Our Latest
        </p>
        <p className="text-[24px] font-bold text-center w-[70%] leading-[28px] pt-8">
          Explore a wealth of information to help you stay informed, make informed decisions, and stay ahead of the competition.
        </p>
        <p className="text-[16px] font-light text-center w-[70%] pt-8">
          Each individual service or package can be tailored to meet your unique requirements and aims to drive customer satisfaction, retention, and growth.
        </p>
      </div>
      <div className="sm:px-8 px-4 pt-20">
        {datas.slice(0, showAll ? datas.length : 2).map((item, index) => (
          <div key={index} className="cards md:p-8 p-4 mt-5 drop-shadow-2xl" style={{ backgroundColor: '#FEF2E7', borderRadius: '33px 33px 0px 33px' }}>
            <div>
              <Image src="/sider1.png" alt="Send" className="" width={1000} height={1000} style={{ borderRadius: '33px 33px 0px 33px' }} />
            </div>
            <div className="flex justify-end md:text-[14px] text-[10px] italic text-[#FF6410]">
              <p className="py-2">{item.date}</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="font-bold md:text-[40px] text-[30px] text-[#FF6410] md:pt-6">{index + 1}</p>
              <p className="md:text-[30px] text-[24px] italic text-[#FF6410] font-bold pt-1">{item.head}</p>
              <p className="ms:text-[18px] text-[15px] font-medium leading-[24px] pt-4 text-left">{item.para}</p>
              <button className="pt-4 text-[#FF6410] italic font-bold md:pb-8 pb-4">
                <span className="underline">Read More</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
        {!showAll && (
          <div className="flex justify-center pt-8">
            <button onClick={() => setShowAll(true)} className="text-[#FF6410] border w-[40%] rounded-full h-[35px] border-[#FF6410] font-bold italic">
              <span className="underline">View More</span>
              <span>&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobSlider;
