import React from 'react'
import Image from 'next/image';

const AboutOurService = () => {

    
    return (
        <div className='bg-[#FFEFCF]'>
            <div className='container mx-auto '>
            <div className='flex flex-col h-full gap-5 md:hidden font-dm-sans'>
                <div className='w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 p-10'>
                        <div className='font-bold text-[30px]'>
                            <h1 className=''>
                                We offer a comprehensive range of enterprise solutions designed to enhance your customer engagement and support capabilities.
                            </h1>
                        </div>
                        <div className='font-bold'>
                            <p>
                                With our expertise and commitment to excellence, we provide tailored solutions that meet your unique needs.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='w-full px-2'>
                    <Image width={1000} height={1000} src="/mobAbout.png" alt='Image' className='w-full h-full rounded-[23px]  object-cover' />
                </div>
            </div>
            <div className='hidden gap-10 md:flex font-dm-sans'>
            <div className='w-[50%]'>
                    <Image width={1000} height={1000} src="/About.png" alt='Image' className='w-full h-full rounded-[23px]  object-cover' />
                </div>
                <div className='w-[50%]'>
                    <div className='flex flex-col justify-center h-full gap-5 p-10 lg:p-20'>
                        <div className='font-bold text-[30px]'>
                            <h1 className=''>
                                We offer a comprehensive range of enterprise solutions designed to enhance your customer engagement and support capabilities.
                            </h1>
                        </div>
                        <div>
                            <p>
                                With our expertise and commitment to excellence, we provide tailored solutions that meet your unique needs.
                            </p>

                        </div>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>Contact Us</p>
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

export default AboutOurService