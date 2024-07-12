import React from 'react'
import Image from 'next/image';

const Hero = ({ heading, bgImage,mobHero,mobHero2 }) => {
  return (
    <div className='container mx-auto'>
     





      <div className='hidden gap-10 pb-0 lg:h-[500px] h-[400px]  md:flex '>
        <div className=' relative w-full bg-no-repeat bg-contain' style={{ backgroundImage:`url(${bgImage})`, backgroundPosition: 'bottom' }}>
          <div className='flex flex-col justify-end items-end gap-5 absolute 2xl:right-[30%]  lg:right-[20%] right-[15%] bottom-[5%] w-[250px] h-[150px] '>
            <div className='font-bold text-[30px]'>
              <h1 className='text-[#FF6410]'>
              {heading}
              </h1>
            </div>
            <div>
              <button className='border-[#FF6410] border border-solid p-3 rounded-[30px] px-8 flex gap-3'>
                <p className='font-bold text-[#FF6410]'>Contact us</p>
                <p className='font-bold text-[#FF6410]'>&rarr;</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

