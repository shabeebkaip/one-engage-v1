"use client"
import React from 'react'
import Image from 'next/image';

const QualityAssurance = () => {
    return (
        <div className=' bg-[#FF6410]'>
            <div className='flex gap-10 text-[#FFFFFF] container mx-auto flex-col md:hidden py-10'>
                <div className='w-full p-10'>
                    <div className='flex flex-col justify-center h-full gap-10 md:p-10'>
                        <div className='font-bold text-[40px]'>
                            <h1 className='font-poppins'>
                                Quality <br/> Assurance
                            </h1>
                        </div>
                        <div className='font-bold font-dm-sans'>
                            <p>
                                Ensure service excellence and customer satisfaction with our quality assurance services. We offer customized checklists, customized scripts, and quality control specialists to help you consistently deliver high-quality services.
                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/quality-assurancer"}>
                            <button className='border-[#FFFFFF] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FFFFFF]'>View More</p>
                                <p className='font-bold text-[#FFFFFF]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full '>
                    <Image width={2000} height={2000} src="/qualityMob.png" alt='Image' className='w-full h-full ' />
                </div>
            </div>
            <div className='md:flex gap-10 text-[#FFFFFF] container mx-auto hidden  p-10'>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-10'>
                        <div className='font-bold text-[30px]'>
                            <h1 className=''>
                            Quality <br/> Assurance
                            </h1>
                        </div>
                        <div>
                            <p>
                                Ensure service excellence and customer satisfaction with our quality assurance services. We offer customized checklists, customized scripts, and quality control specialists to help you consistently deliver high-quality services.
                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/quality-assurance"}>
                            <button className='border-[#FFFFFF] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FFFFFF]'>View More</p>
                                <p className='font-bold text-[#FFFFFF]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-center'>
                    <Image width={500} height={500} src="/quality.png" alt='Image' className='w-full  rounded-[23px]' />
                </div>
            </div>
        </div>
    )
}

export default QualityAssurance