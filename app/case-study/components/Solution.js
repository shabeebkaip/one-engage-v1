import Image from 'next/image'
import React from 'react'

const Solution = () => {
    return (
        <div className='flex items-center py-28 '>
            <div className='container mx-auto mt-20 sm:mt-0 ' >
                <div className='flex flex-col justify-center md:flex-row lg:gap-24 xl:gap-44 2xl:gap-96 md:gap-10'>
                    <div className='block mt-12 md:mt-28 lg:mt-12 md:hidden'>
                        <Image src='/casestudy/the_rocket_launches_from_the_smartphone [Converted] 1.png' alt="" className='md:w-[500px] w-[340px]  lg:ml-0 xl:ml-28  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                    <div className='hidden mt-12 md:mt-28 lg:mt-12 md:block'>
                        <Image src='/casestudy/the_rocket_launches_from_the_smartphone [Converted] 1.png' alt="" className='lg:w-[500px] w-[340px] md:w-[350px] md:object-contain  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                    <div className='text-[#000000] max-w-[600px] p-4   font-dm-sans md:mt-20 lg:mt-0 '>
                        <p className=' text-[30px] md:text-[22px]  lg:text-[40px] font-bold w-5/5 md:w-[290px] lg:w-[100px]    leading-tight tracking-tighter text-[#FF6410]' >02. Solution</p>
                        <p className='text-[24px] lg:text-[18px] md:text-[15px] mt-10 md:w-[290px] lg:w-[380px]  leading-tight  tracking-tighter '>One Engage implemented targeted outbound campaigns for SuperShop.com, leveraging personalized messaging and data-driven insights. The campaigns focused on delivering tailored offers, promotions, and exclusive discounts to customers based on their preferences and purchase history.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution