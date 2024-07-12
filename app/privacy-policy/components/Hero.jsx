
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto bg-white md:grid hidden grid-cols-2 items-center xl:h-[570px] lg:h-[500px] md:h-[400px]  ">
                     <Image
                          src="/privacy-policy/heroLeft.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className=" object-contain "
                        />
                        <div className='md:grid md:grid-cols-2'>
                            <div></div>
                        <Image
                          src="/privacy-policy/heroRight.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className="h-[474px] object-contain "
                        />
                        </div>
                   </div>
                   <div className='grid md:hidden grid-rows-2 gap-8 p-3 bg-white items-center '>
                   <Image
                          src="/privacy-policy/mobHero1.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className=" sm:w-[70%] mx-auto object-contain "
                        />
                        <Image
                          src="/privacy-policy/mobHero2.png"
                          alt="right image"
                          width={1000}
                          height={500}
                          className="sm:w-[70%] mx-auto object-contain "
                        />
                   </div>
    </div>
  )
}

export default Hero
