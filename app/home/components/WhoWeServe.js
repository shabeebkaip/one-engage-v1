"use client"
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../shared/component/swiperbox.css'

const WhoWeServe = () => {
    const data1 = [
        {
            image: `/home/9098104 copy.png`,
            head: `Small and Medium-sized Enterprises `,
            para: `We understand the challenges faced by SMEs and offer scalable outsourcing solutions that help them enhance customer experiences, streamline operations, and drive growth.`
        },
        {
            image: `/home/m003t0635_e_business_growth_research_analyze_06oct_22 copy.png`,
            head: `Large Enterprises`,
            para: `We partner with large enterprises to optimize their customer engagement strategies, improve service quality, and achieve operational efficiencies across their organization.`
        },
        {
            image: `/home/IMG_7123.png`,
            head: `E-commerce Businesses`,
            para: `Our expertise in customer support, live chat, and social media management enables e-commerce businesses to provide exceptional customer experiences, drive sales, and build customer loyalty.`
        },
        {
            image: `/home/IMG_7124.png`,
            head: `Startups and Entrepreneurs`,
            para: `We support startups and entrepreneurs by providing cost-effective and flexible outsourcing solutions, allowing them to focus on core business activities while ensuring excellent customer support.`
        },
        {
            image: `/home/m003t0637_g_financial_aim_growth_06oct_22 copy.png`,
            head: `Multinational Corporations`,
            para: `With our global perspective and expertise in international customer engagement, we assist multinational corporations in delivering consistent, high-quality service across multiple regions.`
        }
    ];

    return (
        <div>
            <div className='container w-full mx-auto my-24'>
            <p className='flex items-center justify-center md:text-[60px] text-[40px] font-bold text-[#FF6410] container mx-auto  md:text-justify text-center tracking-tighter leading-none md:w-auto w-1/2 font-poppins'>Who we serve</p>
            <div className='flex items-center justify-center my-5'>
                <p className='font-dm-sans sm:text-[24px] text-[20px]  text-center md:tracking-tighter tracking-normal md:leading-tight leading-none font-bold p-1 lg:w-[70%] md:w-1/2 w-4/5' >At One Engage, we proudly serve businesses across various industries  and sectors. Our customer engagement solutions are tailored to meet the unique needs of:</p>
            </div>
            <div className='flex-col items-center justify-center hidden p-10 md:flex md:flex-row '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className='mySwiper'
                >
                    <div>
                    {data1.map((item, index) => (
                        <SwiperSlide key={index} style={{ height: '100%' }}>
                            <div style={{ paddingBottom: '60px' }} >
                                <div className='flex flex-col items-center justify-center bg-[#FFEFCF] rounded-t-3xl h-[400px] p-5 rounded-bl-3xl  gap-5'>
                                    <div className='flex gap-3'>
                                        <div className=''>
                                            <img src={item.image} alt="" className='' />
                                        </div>
                                        <div className='flex justify-center w-[240px] flex-col'>
                                            <p className=' font-dm-sans text-[24px]  font-bold md:leading-tight leading-none tracking-tighter'>{item.head}</p>
                                        </div>
                                    </div>
                                    <div className='flex w-full px-5'>
                                        <p className='text-gray-700 font-dm-sans'>{item.para}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </div>

                </Swiper>


            </div>
            {/* smaller screen */}
            <div className='flex flex-col items-center justify-center font-dm-sans md:hidden '>
                <div className='container flex flex-col items-center justify-center mx-auto md:flex-row md:p-5 md:w-auto'>
                    {data1.map((da) => (
                        <div className=' border  bg-[#FFEFCF] rounded-t-3xl rounded-bl-3xl   flex  flex-col  items-center justify-center p-5 m-3 cursor-pointer md:w-[470px] w-[300px]'>
                            <div className='flex flex-col items-start justify-center md:items-center md:flex-row'>
                                <div className='max-w-[200px]'>
                                    <img src={da.image} alt="" className='' />
                                </div>
                                <div className='flex justify-center w-[70%]'>
                                    <p className='text-[24px]  font-bold md:leading-tight leading-none tracking-tighter'>{da.head}</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-3'>
                                <p className='text-[18px] w-4/4 leading-tight  tracking-tighter font-[400px] mt-3'>{da.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-center justify-center p-2'>
                <p className='md:text-[60px] font-bold text-[#FF6410] mt-20 md:w-2/3 w-4/5 text-center text-[45px] font-poppins uppercase md:leading-tight leading-none tracking-tighter '>No matter the industry or business size</p>
                <div className='container flex justify-center p-5 mx-auto md:pt-20'>
                <p className='text-[24px] text-center md:w-2/3 w-5/5 font-bold leading-tight  tracking-tight md:mt-auto mt-14 font-dm-sans'>We are committed to delivering tailored solutions that address specific challenges and drive tangible results.</p>
            </div>
            </div>

            

        </div>
        <div className='flex justify-center my-5 md:flex-row md:justify-between md:pb-20 md:px-20 md:ml-auto md:my-0'>
                <div className='flex flex-row mb-6 md:mt-auto mt-7 md:p-0 md:mb-0 '>
                    <div className='bg-[#FF6410] w-14 h-14 md:w-[80px] md:h-20 border rounded-full'></div>
                    <div className='bg-[#FBBC1D] w-14 h-14 md:w-[80px] md:h-20 border rounded-full'></div>
                    <div className='bg-[#FFA350] w-14 h-14 md:w-[80px] md:h-20 border rounded-full'></div>
                </div>
                <div className='hidden md:flex md:flex-row'>
                    <div className='bg-[#FBBC1D] w-10 h-10 md:w-[80px] md:h-20 border rounded-full'></div>
                    <div className='bg-[#FF6410] w-10 h-10 md:w-[80px] md:h-20 border rounded-full'></div>
                </div>
            </div>
        </div>

    )
}

export default WhoWeServe