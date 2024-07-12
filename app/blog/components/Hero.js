``
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto bg-white md:grid hidden grid-cols-2 xl:h-[700px] lg:h-[500px] md:h-[400px] " >
        <div
          className=' bg-no-repeat bg-contain '
          style={{
            backgroundImage: "url('/Group 1.png')",
            backgroundPosition: "bottom",
          }}
        ></div>
        <div
          className=' bg-no-repeat bg-contain mt-10 mb-3 relative font-extrabold text-orange-500 lg:text-[70px]  text-[50px]'
          style={{
            backgroundImage: "url('/blog/heroRight.png')",
            backgroundPosition: "right",
          }}
        >
          <h1 className='absolute left-[20%] bottom-[20%]'>BLOG</h1>
        </div>



      </div>
      <div className='relative flex flex-col items-center bg-white md:hidden '>

        <Image
          src="/blog/mobHero1.png"
          alt="right image"
          width={1000}
          height={500}
          className=" w-full mx-auto object-contain "
        />
        <div className='font-extrabold text-orange-500  text-[60px]'>BLOG</div>
        <Image
          src="/blog/mobHero2.png"
          alt="right image"
          width={1000}
          height={500}
          className="object-contain mx-auto "
        />
        <Image
          src="/blog/ballImg.png"
          alt="right image"
          width={1000}
          height={500}
          className=" h-[70px] bottom-[-35px] sm:px-0 px-5 mx-auto absolute object-contain "
        />
      </div>
    </div>
  )
}

export default Hero
