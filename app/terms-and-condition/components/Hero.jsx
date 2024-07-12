import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='hidden md:flex lg:h-[600px] h-[500px] items-center justify-between'>
        <Image
          src="/termsAndCondition/heroRight.png"
          alt="right image"
          width={1000}
          height={500}
          className="h-[80%] object-contain"
        />
        <h1 className='absolute inset-x-0 mx-auto font-bold text-center font-poppins text-[70px] leading-[86px] tracking-tightest text-[#FF6410] mt-[220px]'>
          TERMS OF <br/> WEBSITE USE
        </h1>
        <Image
          src="/termscndtn.png"
          alt="right image"
          width={800}
          height={500}
          className="h-[80%] object-contain mr-[170px]"
        />

      </div>
      <div className='md:hidden max-h-[580px] px-5 grid grid-rows-2'>
        <Image
          src="/termsAndCondition/mobHero1.png"
          alt="right image"
          width={1000}
          height={500}
          className="h-[270px] object-contain"
        />
        <Image
          src="/termsAndCondition/mobHero2.png"
          alt="right image"
          width={1000}
          height={500}
          className="h-[270px] object-contain"
        />
      </div>
    </div>
  )
}

export default Hero;
