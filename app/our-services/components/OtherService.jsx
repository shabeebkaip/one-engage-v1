import React from 'react'
import Image from 'next/image';

const OtherService = () => {
    return (
        <div className='flex py-20'>
            <div className='container w-full mx-auto '>
                <div className='flex flex-col justify-center h-full gap-10 text-center md:gap-5'>
                    <div className='font-bold text-[30px] text-[#FF6410]'>
                        <h1 className='font-poppins'>
                            Other services
                        </h1>
                    </div>
                    <div className='flex justify-center font-bold text-center font-dm-sans'>
                        <p className='md:w-[50%] w-[80%]'>
                            We also offer a range of other comprehensive solutions to meet your unique business needs. Whether it's back-office work processing, or consulting services, we have the expertise and resources to support your growth and success.
                        </p>
                    </div>
                    <div className='flex justify-center md:hidden'>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    <div className='justify-end hidden gap-3 pt-10 md:flex '>
                        <Image width={1000} height={1000} src="/other1.png" alt='Image' className='w-[70px] h-[70px] rounded-[23px]' />
                        <Image width={1000} height={1000} src="/other2.png" alt='Image' className='w-[70px] h-[70px] rounded-[23px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherService