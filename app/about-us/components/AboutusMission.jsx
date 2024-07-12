import React from 'react'
import Image from 'next/image'


const OurMission = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 pt-10 md:grid-cols-2'>
        <div className='flex flex-col justify-center pl-7 py-3 col-span-1 gap-5 pt-5'>
          <div className='text-[#FF6410] xl:text-6xl  lg:text-5xl text-[40px] font-bold flex xl:justify-center md:justify-start justify-center md:text-start text-center font-poppins'>
            <p className='xl:w-[70%]'>Your mission <br />is our mission</p>
          </div>
          <div className="flex justify-center w-full font-bold xl:text-2xl lg:text-3xl md:p-0 p-9 md:text-start text-center md:text-2xl">
            <p className="xl:w-[70%] font-dm-sans">We empower businesses with tailored outsourcing solutions to enhance customer experiences, drive lead generation, and deliver valuable insights.</p>
            </div>
        </div>
        <div className='flex items-end col-span-1'>
          <Image
            src="/aboutus/mission.png"
            alt="Mission Image"
            width={1200}
            height={800}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default OurMission
