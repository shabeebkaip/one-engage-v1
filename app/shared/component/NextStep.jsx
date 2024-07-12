"use client"
import React from 'react'
import Image from 'next/image';

const NextStep = ({color,textColor, color1, content,img, link}) => {
    return (
        <div className={`bg-[${color}]`}>
            <div className='container flex flex-col gap-10 p-10 pb-0 mx-auto '>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-10'>
                        <div className='font-bold text-[30px]'>
                            <h1 className={`text-[${textColor}]`}>
                            TAKE THE <br/>NEXT STEP
                            </h1>
                        </div>
                        <div className={` w-[70%] text-[${color1}]`}>
                            <p>
                            {content}
                            </p>
                        </div>
                        <div onClick={() => window.location.href = link}>
                            <button className={`border-[${textColor}] border border-solid p-3 rounded-[30px] px-8 flex gap-3`}>
                                <p className={`font-bold text-[${textColor}]`}>Get A Quote</p>
                                <p className={`font-bold text-[${textColor}]`}>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full'>
                    <Image width={500} height={500} src="/take-next-step.png" alt='Image' className='w-full h-full rounded-[23px]' />
                </div>
            </div>
            <div className={`md:flex gap-10  container mx-auto hidden pb-0 p-10`}>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col justify-center h-full gap-5 md:p-10'>
                        <div className='font-bold text-[30px]'>
                            <h1 className={`text-[${textColor}]`}>
                                TAKE THE <br/>NEXT STEP
                            </h1>
                        </div>
                        <div>
                            <p className={`text-[${color1}]`}>
                            towards strengthening customer relationships and driving business growth!
                            </p>
                        </div>
                        <div>
                            <button className={`border-[${textColor}] border border-solid p-3 rounded-[30px] px-8 flex gap-3`}>
                                <p className={`font-bold text-[${textColor}]`}>Get A Quote</p>
                                <p className={`font-bold text-[${textColor}]`}>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full'>
                    <Image width={500} height={500} src={img} alt='Image' className='w-full h-full rounded-[23px]' />
                </div>
            </div>
        </div>
    )
}

export default NextStep