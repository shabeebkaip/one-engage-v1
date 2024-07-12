import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative w-full hidden md:flex'>
      <div className='relative w-full'>
        <Image
          src="/herocntct.png"
          alt="Left Bottom Image"
          width={1400}
          height={600}
          className="object-cover mx-auto"
        />

        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-[#FF6410] text-4xl md:text-6xl font-bold mt-44 ml-[30rem]'>
            CONTACT US
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

