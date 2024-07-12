import Image from 'next/image'
import React from 'react'

const Challenge = () => {
    return (
        <div className='bg-[#F4F4F4] py-28 flex items-center'> 
            <div className='container mx-auto mt-20 sm:mt-0' >
            <div className='flex flex-col justify-center md:flex-row lg:gap-24 xl:gap-44 2xl:gap-96'>
            <div className='block mt-12 md:mt-28 lg:mt-12 md:hidden'>
                        <Image src='/casestudy/the_rocket_launch_of_digital_marketing_email [Converted] 1.png' alt="" className='md:w-[500px] w-[340px]  lg:ml-0 xl:ml-28  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                    <div className='text-[#000000] max-w-[600px] p-4  md:p-10 md:mt-20 mt-9 font-dm-sans'>
                        <p className=' text-[36px] md:text-[22px]  lg:text-[40px] font-bold w-5/5 md:w-[290px] lg:w-[100px]    leading-tight tracking-tighter text-[#FF6410]' >01.  Challenge</p>
                        <p className='text-[28px] lg:text-[18px] md:text-[15px] mt-10 md:w-[240px] lg:w-[350px]  leading-tight  tracking-tighter font-normal '>SuperShop.com, a leading online retailer faced the challenge of engaging customers in a highly competitive market. They needed a solution to drive customer loyalty and maximize retention.</p>
                    </div>
                    <div className='hidden mt-12 md:mt-28 lg:mt-12 md:block'>
                        <Image src='/casestudy/the_rocket_launch_of_digital_marketing_email [Converted] 1.png' alt="" className='md:w-[500px] w-[340px]  lg:ml-0 xl:ml-28  flex justify-center items-center sm:p-0 p-3' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Challenge