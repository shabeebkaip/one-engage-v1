import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Description = () => {
    return (
        <div className='container w-full mx-auto'>
            <div className='flex flex-col md:flex-row'>
                <div className='text-[#000000] max-w-[700px] md:ml-8 lg:ml- p-2 flex flex-col justify-center' >
                    <p className='text-[40px] md:text-[30px] lg:text-[60px] font-bold text-[#FF6410] tracking-tighter leading-none font-poppins'>Who we are</p>
                    <p className='text-[24px] md:text-[20px] lg:text-[30px] font-bold md:w-[290px] lg:w-[370px] xl:w-auto  xl:w-5/5   leading-tight mt-5 font-dm-sans'>One Engage is a leading business process outsourcing company, delivering exceptional customer engagement solutions to businesses worldwide.</p>
                    <div className='flex-col hidden gap-5 md:flex'>
                        <p className='xl:text-[18px] lg:text-[16px] mt-10 md:text-[15px] md:w-[250px] lg:w-[350px] xl:w-auto xl:w-3/2 font-dm-sans font-medium'> With a deep understanding of the outsourcing industry and a commitment to excellence, we help businesses across various sectors transform their customer experience and drive growth.</p>
                        <p className=' xl:text-[18px] lg:text-[16px]  md:text-[15px] md:w-[250px] lg:w-[350px] xl:w-auto xl:w-3/2 font-dm-sans font-medium'>Take your business through bold new horizons with reliable, scalable, and tailored business processing outsourcing solutions.</p>
                        <div>
                            <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3 pt-6'>
                                <p className='font-bold text-[#FF6410]'>About Us</p>
                                <p className='font-bold text-[#FF6410]'>&rarr;</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-10 md:mt-40'>
                    <Image src='/home/offer.png' alt="" className='md:w-[800px]' width={800} height={800} />
                </div>
            </div>
            <div className='flex flex-col gap-5 p-2 my-10 leading-none tracking-tighter md:hidden md:mx-24'>
                <p className='text-[18px] w-full font-dm-sans font-medium leading-5'>With a deep understanding of the outsourcing industry and a commitment to excellence, we help businesses across various sectors transform their customer experience and drive growth.</p>
                <p className='text-[18px]  w-full font-dm-sans font-medium leading-5'>Take your business through bold new horizons with reliable, scalable, and tailored business processing outsourcing solutions.</p>
                <div>
                    <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                        <p className='font-bold text-[#FF6410]'>About Us</p>
                        <p className='font-bold text-[#FF6410]'>&rarr;</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Description;