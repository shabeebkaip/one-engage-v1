"use client"
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const OurClients = () => {

    const datas = [
        {
            image: `/home/logo1.png`
        },
        {
            image: `/home/logo2.png`
        },
        {
            image: `/home/logo3.png`
        },
        {
            image: `/home/logo5.png`
        },
        {
            image: `/home/logo6.png`
        },
        {
            image: `/home/logo7.png`
        },
        {
            image: `/home/logo4.png`
        },
        {
            image: `/home/logo8.png`
        },
    ]


    return (
        <div>
            <div className='container mx-auto mt-20'>
                <p className='flex items-center justify-center text-[40px] md:text-[60px] font-bold text-[#FF6410]  leading-tight font-poppins tracking-tighter'>Our clients</p>
            </div>
            <div className='flex-col items-center justify-center hidden my-10 md:flex'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div className='grid grid-cols-2 p-10 md:grid-cols-4'>
                            {datas.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='p-10'>
                                        <img src={img.image} className='' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='grid grid-cols-2 p-10 md:grid-cols-4'>
                            {datas.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='p-10'>
                                        <img src={img.image} className='' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='grid grid-cols-2 p-10 md:grid-cols-4'>
                            {datas.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='p-10'>
                                        <img src={img.image} className=' w-44' />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* small screen code */}
            <div className='flex flex-col md:hidden '>
                <div className='flex flex-col items-center justify-center p-10'>
                    {datas.map((img) => (
                        <div className='p-10'>
                            <img src={img.image} className=' w-44' />
                        </div>
                    ))}
                </div>
            </div>

            <div className='container flex-row justify-center hidden py-10 mx-auto md:flex md:items-baseline sm:flex-row md:justify-between'>
                <div>
                    <Image src='/home/Group1.png' alt="" className="hidden w-[200px] h-[100px] md:block" width={300} height={300} />
                </div>
                <div>
                    <Image src='/clientbottom.png' alt="" className="hidden w-[200px] h-[200px] md:block " width={300} height={300} />
                </div>
            </div>
            <div className='flex w-full md:hidden'>
                <Image src='/home/Group1.png' alt="" className=" w-full h-[180px] object-contain" width={300} height={300} />
            </div>
            <div className='container flex justify-center p-5 mx-auto md:p-20'>
                <p className='text-[24px] text-center md:w-2/3 w-5/5 font-bold leading-tight  tracking-tight md:mt-auto mt-14 font-dm-sans'>Experience the difference with One Engage and discover how our expertise, technology, and commitment to quality can help you exceed customer expectations and achieve sustainable growth.</p>

            </div>
            <div className='justify-start hidden px-20 py-10 md:flex'>
                <Image src='/clientBot.png' alt="" className="w-[100px] h-[100px]" width={1500} height={1500} />
            </div>
            <div className='flex items-end justify-between w-full p-3 py-16 md:hidden'>
            <div className=''>
                <Image src='/clientBot.png' alt="" className="w-[100px] h-[100px]" width={1500} height={1500} />
            </div>
            <div className=''>
            <Image src='/HomeBot3.png' alt="" className="w-[200px] h-[200px]" width={1000} height={1000} />
            </div>
            </div>
        </div>
    )
}

export default OurClients