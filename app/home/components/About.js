"use client"
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {

    return (
        <div className="bg-[#FFDF9F]">
            <div className='container mx-auto '>
                <div className='flex flex-col justify-center py-16 md:justify-around md:flex-row md:py-20'>
                    <div className='text-[#000000] flex flex-col gap-10 md:w-[50%] w-full p-5'>
                        <p className='text-[24px] sm:text-[22px] md:text-[22px]  lg:text-[24px] xl:text-[30px] leading-tight tracking-[.5px] font-dm-sans lg:w-[70%] md:w-[80%] w-full font-bold' >We are a leading business process outsourcing company with a passion for delivering    exceptional customer engagement solutions.</p>
                        <p className='text-[18px] lg:text-[18px] md:text-[15px] leading-tight  tracking-[1px] font-dm-sans lg:w-[70%] md:w-[80%] w-full md:font-semibold font-bold'>Contact us today to discuss your requirements, and let's embark on a journey towards extraordinary customer engagement and growth.</p>
                        <div onClick={() => window.location.href = "/contact-us"} className="hidden md:block">
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3' >
                                <p className='font-bold text-[#FF6410] font-poppins'>Contact us</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                    <div className='md:w-[50%] w-full flex justify-center'>
                        <Image src='/home/about.png' alt="" className='md:w-[450px] lg:[400px] w-[340px]   ' width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About