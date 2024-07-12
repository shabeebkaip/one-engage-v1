"use client"
import React from 'react'
import Image from 'next/image'
import { SwiperBullets, SwiperSlider } from "../../shared/component/SwiperSlider"
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const datas = [
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`
  },
  {
    image: `/sider1.png`,
    date: `02.10.2023/10.10`,
    head: `BPO Best Practices 2024`,
    para: `Unlock the power of customer engagement and business process outsourcing with the One Engage Blog. Discover valuable insights, industry trends, and best practices to drive growth and enhance customer satisfaction.`
  },
]
const BlogSlider = () => {

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between pt-20 pb-6'>
        <div className='flex '>
          <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
          <Image src="/Vector123.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
        </div>
        <div className='flex gap-1'>
          <Image className="md:w-[78px] w-[59px]" src="/Group123.png" width={1000} height={1000} />
          <Image className="md:w-[78px] w-[59px]" src="/yellow.png" width={1000} height={1000} />
          <Image src="/red.png" alt="Send" className="md:w-[78px] w-[59px]" width={100} height={100} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <p className='text-[#FF6410] md:text-[60px] font-bold md:w-[50%] text-center md:leading-[70px] text-[40px]'>Our Latest</p>
        <p className='text-[24px] font-bold text-center w-[70%] leading-[28px] pt-8 font-dm-sans'>Explore a wealth of information to help you stay informed, make informed decisions, and stay ahead of the competition.
        </p>
      </div>
      <div className="px-20 pt-20 drop-shadow-2xl" >
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {datas.map((item, index) => (
            <SwiperSlide key={index} className='' style={{ paddingBottom: '50px' }}>
              <div className="p-8 " style={{ backgroundColor: '#FEF2E7', borderRadius: '33px 33px 0px 33px', }}>
                <div>
                  <Image src="/sider1.png" alt="Send" className="" width={1000} height={1000} style={{ borderRadius: '33px 33px 0px 33px' }} />
                </div>
                <div className="flex justify-end text-[14px] italic text-[#FF6410]">
                  <p className="py-2">{item.date}</p>
                </div>
                <div className="flex flex-col items-start justify-start font-dm-sans">
                  <p className=" font-bold text-[40px] text-[#FF6410] pt-6">{index + 1}</p>
                  <p className="text-[30px] italic text-[#FF6410] font-bold  pt-6">{item.head}</p>
                  <p className="text-[18px] font-medium leading-[24px] pt-6 text-left font-dm-sans">{item.para}</p>
                  <button className="pt-6 text-[#FF6410] italic font-bold pb-8"> <span className="underline">Read More </span><span>&rarr;</span></button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BlogSlider