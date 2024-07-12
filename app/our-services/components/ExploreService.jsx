import React from 'react'
import Image from 'next/image';

const ExploreService = () => {
    return (
        <div className=' bg-[#FFEFCF] md:py-20 py-10'>
            <div className='container flex flex-col gap-5 mx-auto'>
                <div className=''>
                    <div className='flex flex-col justify-center h-full gap-10 text-center md:gap-5'>
                        <div className='font-bold text-[40px] text-[#FF6410]'>
                            <h1 className='font-poppins'>
                                EXPLORE OUR SERVICE
                            </h1>
                        </div>
                        <div className='flex justify-center text-center font-dm-sans'>
                            <p className='md:w-[50%] w-[80%] font-bold'>
                                Discover how our services can help elevate your customer experience, drive growth, and achieve your business objectives. Explore our services in more detail and find the right solutions for your specific needs. Contact us today to discuss how One Engage can be your trusted partner in achieving exceptional customer engagement and success.
                            </p>
                        </div>
                        <div className='flex justify-center'>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>Consult our experts</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                        <div className='hidden gap-3 md:flex md:justify-start'>
                        <Image width={2000} height={2000} src="/other1.png" alt='Image' className='w-[70px] h-[70px] rounded-[23px]' />
                        <Image width={2000} height={2000} src="/other2.png" alt='Image' className='w-[70px] h-[70px] rounded-[23px]' />
                        </div>
                        <div className='flex justify-end px-5 md:hidden'>
                        <Image width={2000} height={2000} src="/explore.png" alt='Image' className='w-[100px] [100px] rounded-[23px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreService