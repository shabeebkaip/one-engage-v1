import React from 'react'
import Image from 'next/image';

const AgentType = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col gap-5 p-5 py-10 md:hidden'>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-10 '>
                        <div className='font-bold text-[40px]'>
                            <h1 className='text-[#FF6410] font-poppins'>
                                Agent <br /> Type
                            </h1>
                        </div>
                        <div className='font-bold font-dm-sans'>
                            <p>
                                Benefit from tailored solutions with dedicated, specialized agents. Our agents are trained to handle specific industries, ensuring in-depth knowledge and expertise in your field. This allows for more effective customer interactions and better outcomes for your business.
                            </p>

                        </div>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full'>
                    <Image width={1000} height={1000} src="/agents.png" alt='Image' className='w-full h-full rounded-[23px]  object-cover' />
                </div>
            </div>
            <div className='hidden gap-10 p-10 md:flex '>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-10 lg:p-20 '>
                        <div className='font-bold text-[30px]'>
                            <h1 className='text-[#FF6410]'>
                                Agent Type
                            </h1>
                        </div>
                        <div>
                            <p>
                                Benefit from tailored solutions with dedicated, specialized agents. Our agents are trained to handle specific industries, ensuring in-depth knowledge and expertise in your field. This allows for more effective customer interactions and better outcomes for your business.
                            </p>

                        </div>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full flex justify-center items-center'>
                    <Image width={1000} height={1000} src="/agents.png" alt='Image' className='w-full h-full rounded-[23px] object-contain ' />
                </div>
            </div>
        </div>
    )
}

export default AgentType