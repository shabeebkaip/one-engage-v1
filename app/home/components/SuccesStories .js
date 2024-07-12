import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";


const SuccesStories = () => {
    return (
        <div className='bg-[#FFDF9F]'>
            <div className='flex items-center justify-center px-20 pb-8 pt-28'>
                <p className='text-[45px] md:text-[35px] lg:text-[45px] xl:text-[70px] md:max-w-[900px] text-center  text-[#FF6410] uppercase font-bold md:leading-tight leading-none tracking-tighter  font-poppins'>
                    <span className='items-center justify-center hidden md:flex'>Upgrade, Enhance, </span>
                    <span className='items-center justify-center hidden md:flex'>and Scale</span>
                    <span className='flex items-center justify-center md:hidden'>Upgrade,</span>
                    <span className='flex items-center justify-center md:hidden'>Enhance,</span>
                    <span className='flex items-center justify-center md:hidden whitespace-nowrap'>and Scale</span>
                </p>
            </div>


            <div class="flex justify-center items-center p-4">
                <button className=' flex items-center font-poppins italic text-[#FF6410] text-[12px] sm:text-[16px] h-[40px] w-[290px] justify-center border border-solid  border-[#FF6410] p-1 rounded-full font-semibold gap-2'><span>Our Client Success Stories</span><IoIosArrowRoundForward /></button>
            </div>
            <div className='flex justify-end px-5 py-10 md:justify-start md:px-20'>
                <Image width={2000} height={2000} src="/upgrade.png" alt='Image' className='w-[160px] h-[80px] rounded-[23px]' />
            </div>
            
        </div>
    )
}

export default SuccesStories