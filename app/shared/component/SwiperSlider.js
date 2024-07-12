"use client"


import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './swiperbox.css';

export const SwiperSlider = ({datas}) => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={5}
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
                {datas.map((da, index) => (
                    <SwiperSlide key={index}>
                        <div className='container flex items-center justify-center mx-auto font-dm-sans' style={{paddingBottom:'40px'}}>
                            <div className='bg-[#FFDF9F] border rounded-3xl flex flex-col items-center justify-center p-5 m-3 lg:w-[380px] lg:h-[400px] md:w-[300px] md:h-[360px] cursor-pointer'> {/* Ensure consistent height and width */}
                                <div className='h-[50%] flex justify-center items-center'>
                                    <img src={da.image} alt="" className='max-h-full' />
                                </div>
                                <div className='flex justify-center items-center h-[20%]'>
                                    <p className='lg:text-[24px] text-[20px] font-bold leading-tight tracking-tighter flex justify-center items-center'>{da.head}</p>
                                </div>
                                <div className='h-[20%] mt-3 flex items-center'>
                                    <p className='text-[18px]'>{da.para}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
