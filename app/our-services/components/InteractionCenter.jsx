"use client"
import React from 'react'
import Image from 'next/image';
import Circle from './Circle';

const InteractionCenter = () => {
    const text = "Hello";
    const bgColor = "#c73939"
    const bgColor1 = "#FF6410"
    return (
        <div className='bg-[#F4F4F4]'>
            <div className='container flex flex-col gap-10 p-10 mx-auto md:hidden'>

                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-20'>
                        <div className='text-[30px] font-extrabold'>
                            <h1 className='text-[#FF6410] font-poppins'>
                            Interaction<br /> center
                            </h1>
                        </div>
                        <div className='flex flex-col gap-5 font-bold font-dm-sans'>
                            <p>
                                Deliver seamless customer interactions across multiple channels, including in-app support, inbound calls, outbound calls, live chat, emails, and social media.
                            </p>
                            <p>
                                Our skilled agents ensure personalized and efficient customer experiences, helping you build strong relationships with your customers.
                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/interaction-center"}>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className='w-[50%] relative'>
                    <div className='absolute top-[45%] left-[16%]'>
                        <Circle text={text} backgroundColor={bgColor1} />
                    </div>
                    <div className='absolute top-[45%] left-[31%]'>
                        <Circle text={text} backgroundColor={bgColor} />
                    </div>
                    <div className='absolute top-[15%] left-[30%]'>
                        <Image width={360} height={360} src="/inter.png" alt='Image' className='' />
                    </div>
                    <div className='absolute top-[16%] left-[47%]'>
                        <Circle text={text} backgroundColor={bgColor1} />
                    </div>
                    <div className='absolute top-[15%] right-[7%]'>
                        <Circle text={text} backgroundColor={bgColor1} />
                    </div>
                    <div className='absolute top-[45%] right-[23%]'>
                        <Circle text={text} backgroundColor={bgColor} />
                    </div>
                    <div className='absolute top-[45%] right-[8%]'>
                        <Circle text={text} backgroundColor={bgColor1} />
                    </div>
                </div> */}
                <div className='w-full '>
                    <Image width={1000} height={1000} src="/interaction.png" alt='Image' className='w-full h-full rounded-[23px]' />
                </div>
            </div>
            <div className='container hidden gap-10 p-10 mx-auto md:flex'>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-10 lg:p-20'>
                        <div className='font-bold text-[35px]'>
                            <h1 className='text-[#FF6410]'>
                            Interaction<br /> center
                            </h1>
                        </div>
                        <div className='text-[20px] flex flex-col gap-5'>
                            <p>
                                Deliver seamless customer interactions across multiple channels, including in-app support, inbound calls, outbound calls, live chat, emails, and social media.
                            </p>
                            <p>
                                Our skilled agents ensure personalized and efficient customer experiences, helping you build strong relationships with your customers.
                            </p>
                        </div>
                        <div onClick={() => window.location.href = "/our-services/interaction-center"}>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3' >
                                <p className='font-bold text-[#FF6410]'>View More</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='md:w-[50%] w-full flex justify-center items-center'>
                    <Image width={1000} height={1000} src="/interaction.png" alt='Image' className='w-full  rounded-[23px] object-contain' />
                </div>
            </div>
        </div>
    )
}

export default InteractionCenter