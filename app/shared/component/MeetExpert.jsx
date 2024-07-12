import React from 'react'
import Image from 'next/image';

const MeetExpert = ({content}) => {
    return (
        <div className='flex py-20'>
            <div className='container w-full mx-auto '>
                <div className='flex flex-col justify-center h-full gap-10 text-center'>
                    <div className='font-bold text-[45px] text-[#FF6410] leading-9'>
                        <h1 className='font-poppins'>
                        <span className='hidden md:block'>Or</span><br/> Meet with an expert
                        </h1>
                    </div>
                    <div className='flex justify-center text-center font-dm-sans text-[22px]'>
                        <p className='md:w-[60%] w-[80%] font-bold'>
                           {content}
                        </p>
                    </div>
                    <div className='flex justify-center py-20'>
                <div className="relative md:w-[50%] ">
                    <input
                        type="text"
                        placeholder="Your email address"
                        className="border-[3px] border-[#FF6410] rounded-[40px] w-full p-4 pr-12"
                    />
                    <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FF6410] p-2 rounded-full">
                        <Image src="/Vector (4).png" alt="Send" className="bg-[#FF6410] w-5 h-5" width={100} height={100} />
                    </button>
                </div>
            </div>
                </div>
            </div>
        </div>
    )
}

export default MeetExpert