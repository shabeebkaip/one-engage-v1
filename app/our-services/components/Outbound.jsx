"use client"
import React from 'react'
import Image from 'next/image';

const Outbound = () => {
    return (
        <div className='container mx-auto '>
            <div className='hidden gap-10 md:flex lg:p-20 md:p-10'>
                <div className='w-[50%] flex justify-center items-center'>
                    <Image width={1000} height={1000} src="/Outbound.png" alt='Image' className='w-full object-contain rounded-[23px]' />
                </div>
                <div className='w-[50%]'>
                    <div className='flex flex-col justify-center h-full gap-5 lg:p-20 md:p-10'>
                        <div className='font-bold text-[30px] text-[#FF6410]'>
                            <h1 className=''>
                                Outbound & <br /> Customer Retention
                            </h1>
                        </div>
                        <div>
                            <p>
                                Drive customer loyalty and maximize retention with our strategic outbound campaigns, lead generation initiatives, telemarketing/sales, appointment setting, and campaign building services.

                            </p>
                            <p>
                                Our goal is to help you stay connected with your customers, increase sales, and strengthen brand loyalty.

                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/outbound"}>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 p-10 md:hidden'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 '>
                        <div className='font-bold text-[30px] text-[#FF6410]'>
                            <h1 className='font-poppins'>
                                Outbound & <br /> Customer Retention
                            </h1>
                        </div>
                        <div className='flex flex-col gap-5 font-bold font-dm-sans'>
                            <p>
                                Drive customer loyalty and maximize retention with our strategic outbound campaigns, lead generation initiatives, telemarketing/sales, appointment setting, and campaign building services.

                            </p>
                            <p>
                                Our goal is to help you stay connected with your customers, increase sales, and strengthen brand loyalty.

                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/outbound"}>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Image width={1000} height={1000} src="/Outbound.png" alt='Image' className='w-full rounded-[23px] object-contain' />
                </div>

            </div>
        </div>
    )
}

export default Outbound