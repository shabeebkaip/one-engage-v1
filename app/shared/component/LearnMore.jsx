import React from 'react'
import Image from 'next/image';

const LearnMore = ({img,content}) => {
    return (
        <div className='bg-[#FFEFCF]'>
            <div className='container mx-auto '>
            <div className='hidden gap-10 p-10 md:flex  h-[500px] font-dm-sans'>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 lg:items-center md:py-20'>

                        <div className='lg:text-[26px] lg:w-[80%] leading-[30px]'>
                            <p className=''>
                                Discover the full range of our Outbound & Customer Retention services and explore how our strategic approaches can help you build lasting customer relationships, increase customer retention rates, and drive revenue growth.
                            </p>

                        </div>
                        <div className='w-[80%] pt-5'>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>Learn more</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] flex justify-center items-center w-full'>
                    <Image width={1000} height={1000} src="/interLearn.png" alt='Image' className='w-[70%] h-[70%] rounded-[23px] object-contain ' />
                </div>
            </div>
            <div className='flex flex-col gap-7 sm:p-5 p-7 md:hidden '>
            <div className='flex items-center justify-center w-full '>
                    <Image width={1000} height={1000} src={img} alt='Image' className='sm:h-[300px] h-[250px] object-contain ' />
                </div>
                <div className='w-full '>
                    <div className='flex flex-col justify-center h-full gap-5 lg:items-center md:py-20'>

                        <div className='text-[20px] sm:w-[70%] leading-[30px] font-dm-sans'>
                            <p className=''>
                               {content}
                            </p>

                        </div>
                        <div className='w-[80%] pt-5'>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>Learn more</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
        </div>
    )
}

export default LearnMore